#!/usr/bin/env node
/**
 * Build / upsert SQLite search index for Awesome AI articles.
 *
 * Usage:
 *   npm run index:search
 *   SKIP_EMBED=1 npm run index:search
 *   FORCE_EMBED=1 npm run index:search
 *   MARK_CURRENT=1 npm run index:search   # demote new/updated → current
 */

import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import initSqlJs from 'sql.js'
import {
  parseArticleMeta,
  shouldIndexArticle,
} from '../src/lib/parseMeta.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const siteRoot = path.resolve(__dirname, '..')
const contentRoot = path.resolve(siteRoot, '..')
const schemaPath = path.join(__dirname, 'search-schema.sql')
const outDbPath = path.join(siteRoot, 'public', 'data', 'search.sqlite')
const statusJsonPath = path.join(
  siteRoot,
  'public',
  'data',
  'articles-status.json',
)

const MODEL_ID =
  process.env.EMBED_MODEL || 'Xenova/multilingual-e5-small'
const SKIP_EMBED = process.env.SKIP_EMBED === '1'
const FORCE_EMBED = process.env.FORCE_EMBED === '1'
const MARK_CURRENT = process.env.MARK_CURRENT === '1'
const MAX_BODY_CHARS = 4000
/** Bump when embed text recipe / model prefix changes */
const EMBED_RECIPE = 'short-e5-v1'
const USE_E5_PREFIX = !/minilm/i.test(MODEL_ID)

function nowIso() {
  return new Date().toISOString()
}

function sha256(text) {
  return crypto.createHash('sha256').update(text, 'utf8').digest('hex')
}

function stripMd(md) {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/[#>*_`|~\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Compact text for embedding — long body dilutes title/tag signal (audit MRR 0.40→0.85). */
function embedInput(item, _bodyText) {
  return [
    item.title,
    item.repo,
    item.domain,
    item.category,
    item.tags.join(', '),
    item.excerpt,
  ]
    .filter(Boolean)
    .join('\n')
}

async function listMdFiles(root, dirRel) {
  const absDir = path.join(root, dirRel)
  let entries
  try {
    entries = await fs.readdir(absDir, { withFileTypes: true })
  } catch {
    return []
  }
  const out = []
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    const rel = path.posix.join(dirRel.replace(/\\/g, '/'), entry.name)
    if (entry.isDirectory()) {
      out.push(...(await listMdFiles(root, rel)))
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      out.push(rel)
    }
  }
  return out
}

function float32ToBlob(arr) {
  return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength)
}

function queryAll(db, sql, params = []) {
  const stmt = db.prepare(sql)
  if (params.length) stmt.bind(params)
  const rows = []
  while (stmt.step()) {
    rows.push(stmt.getAsObject())
  }
  stmt.free()
  return rows
}

function queryOne(db, sql, params = []) {
  return queryAll(db, sql, params)[0] ?? null
}

async function loadEmbedder() {
  const { pipeline } = await import('@xenova/transformers')
  console.log(
    `[index] loading embedder ${MODEL_ID} (recipe=${EMBED_RECIPE}, e5_prefix=${USE_E5_PREFIX}) …`,
  )
  const extractor = await pipeline('feature-extraction', MODEL_ID, {
    quantized: true,
  })
  return async (text) => {
    const input =
      USE_E5_PREFIX && !/^(query|passage):\s/i.test(text)
        ? `passage: ${text}`
        : text
    const out = await extractor(input, { pooling: 'mean', normalize: true })
    return new Float32Array(out.data)
  }
}

async function openDb(SQL) {
  await fs.mkdir(path.dirname(outDbPath), { recursive: true })
  let db
  try {
    const buf = await fs.readFile(outDbPath)
    db = new SQL.Database(new Uint8Array(buf))
    console.log(`[index] opened existing ${outDbPath}`)
  } catch {
    db = new SQL.Database()
    console.log('[index] creating new database')
  }
  const schema = await fs.readFile(schemaPath, 'utf8')
  db.run(schema)
  return db
}

function setMeta(db, key, value) {
  db.run(
    `INSERT INTO meta(key, value) VALUES(?, ?)
     ON CONFLICT(key) DO UPDATE SET value = excluded.value`,
    [key, value],
  )
}

function getMeta(db, key) {
  const row = queryOne(db, 'SELECT value FROM meta WHERE key = ?', [key])
  return row ? String(row.value) : null
}

/**
 * Freshness rules (re-index):
 * - first seen → new
 * - hash changed → updated
 * - hash same → keep new; else current (updated→current on stable re-pass)
 * - missing from disk → removed
 * - MARK_CURRENT=1 → all active new/updated become current
 */
function nextStatus(prev, hashChanged) {
  if (!prev) return 'new'
  if (hashChanged) return 'updated'
  if (prev.status === 'new') return 'new'
  return 'current'
}

async function main() {
  const SQL = await initSqlJs()
  const db = await openDb(SQL)
  const ts = nowIso()

  const files = (await listMdFiles(contentRoot, 'technologies')).filter(
    shouldIndexArticle,
  )
  console.log(`[index] scanning ${files.length} articles`)

  const existing = new Map()
  for (const row of queryAll(
    db,
    'SELECT id, path, content_hash, status, first_seen_at FROM articles',
  )) {
    existing.set(String(row.path), {
      id: row.id,
      hash: String(row.content_hash),
      status: String(row.status),
      firstSeen: String(row.first_seen_at),
    })
  }

  const seenPaths = new Set()
  let nNew = 0
  let nUpdated = 0
  let nUnchanged = 0
  /** @type {{ id: number, path: string, text: string }[]} */
  const needEmbed = []

  for (const rel of files) {
    const abs = path.join(contentRoot, rel)
    const content = await fs.readFile(abs, 'utf8')
    const item = parseArticleMeta(rel, content)
    const bodyText = stripMd(content).slice(0, MAX_BODY_CHARS)
    const contentHash = sha256(
      JSON.stringify({
        title: item.title,
        domain: item.domain,
        category: item.category,
        tags: item.tags,
        excerpt: item.excerpt,
        body: bodyText,
      }),
    )
    seenPaths.add(item.path)
    const prev = existing.get(item.path)
    const hashChanged = !prev || prev.hash !== contentHash
    let status = nextStatus(prev, hashChanged)
    if (MARK_CURRENT && status !== 'removed') status = 'current'

    if (!prev) nNew += 1
    else if (hashChanged) nUpdated += 1
    else nUnchanged += 1

    const firstSeen = prev?.firstSeen ?? ts
    const contentUpdatedAt = !prev || hashChanged ? ts : null

    db.run(
      `INSERT INTO articles(
         path, slug, title, domain, category, tags_json, repo, repo_url, stars,
         excerpt, body_text, content_hash, status, first_seen_at, last_seen_at,
         content_updated_at, indexed_at
       ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
       ON CONFLICT(path) DO UPDATE SET
         slug=excluded.slug,
         title=excluded.title,
         domain=excluded.domain,
         category=excluded.category,
         tags_json=excluded.tags_json,
         repo=excluded.repo,
         repo_url=excluded.repo_url,
         stars=excluded.stars,
         excerpt=excluded.excerpt,
         body_text=excluded.body_text,
         content_hash=excluded.content_hash,
         status=excluded.status,
         last_seen_at=excluded.last_seen_at,
         content_updated_at=COALESCE(excluded.content_updated_at, articles.content_updated_at),
         indexed_at=excluded.indexed_at`,
      [
        item.path,
        item.slug,
        item.title,
        item.domain,
        item.category,
        JSON.stringify(item.tags),
        item.repo,
        item.repoUrl,
        item.stars,
        item.excerpt,
        bodyText,
        contentHash,
        status,
        firstSeen,
        ts,
        contentUpdatedAt,
        ts,
      ],
    )

    const idRow = queryOne(db, 'SELECT id FROM articles WHERE path = ?', [
      item.path,
    ])
    const articleId = Number(idRow.id)
    const hasEmb = queryOne(
      db,
      'SELECT article_id, model FROM embeddings WHERE article_id = ?',
      [articleId],
    )
    const recipeChanged = getMeta(db, 'embed_recipe') !== EMBED_RECIPE
    const modelChanged = hasEmb && String(hasEmb.model) !== MODEL_ID
    if (FORCE_EMBED || hashChanged || !hasEmb || recipeChanged || modelChanged) {
      needEmbed.push({
        id: articleId,
        path: item.path,
        text: embedInput(item, bodyText),
      })
    }
  }

  let nRemoved = 0
  for (const [p, prev] of existing) {
    if (seenPaths.has(p)) continue
    db.run(
      `UPDATE articles SET status = 'removed', last_seen_at = ?, indexed_at = ? WHERE id = ?`,
      [ts, ts, prev.id],
    )
    nRemoved += 1
  }

  let embedCount = 0
  if (!SKIP_EMBED && needEmbed.length > 0) {
    const embed = await loadEmbedder()
    for (let i = 0; i < needEmbed.length; i++) {
      const row = needEmbed[i]
      process.stdout.write(
        `\r[index] embedding ${i + 1}/${needEmbed.length}: ${row.path.slice(0, 55)}`,
      )
      const vec = await embed(row.text)
      db.run('DELETE FROM embeddings WHERE article_id = ?', [row.id])
      db.run(
        'INSERT INTO embeddings(article_id, model, dims, vector) VALUES(?, ?, ?, ?)',
        [row.id, MODEL_ID, vec.length, float32ToBlob(vec)],
      )
      embedCount += 1
    }
    process.stdout.write('\n')
  } else if (SKIP_EMBED) {
    console.log('[index] SKIP_EMBED=1 — metadata/FTS only')
  } else {
    console.log('[index] embeddings up to date')
  }

  setMeta(db, 'model', MODEL_ID)
  setMeta(db, 'indexed_at', ts)
  setMeta(db, 'article_count', String(seenPaths.size))
  setMeta(db, 'schema_version', '1')
  setMeta(db, 'embed_recipe', EMBED_RECIPE)

  /** @type {Record<string, object>} */
  const statusMap = {}
  for (const row of queryAll(
    db,
    `SELECT path, status, content_hash, first_seen_at, content_updated_at
     FROM articles WHERE status != 'removed'`,
  )) {
    statusMap[String(row.path)] = {
      status: String(row.status),
      contentHash: String(row.content_hash),
      firstSeenAt: String(row.first_seen_at),
      contentUpdatedAt: row.content_updated_at
        ? String(row.content_updated_at)
        : null,
    }
  }
  await fs.writeFile(
    statusJsonPath,
    JSON.stringify({ indexedAt: ts, model: MODEL_ID, articles: statusMap }, null, 2),
  )

  const data = db.export()
  await fs.writeFile(outDbPath, Buffer.from(data))
  db.close()

  console.log(
    `[index] done → ${outDbPath}\n` +
      `  new=${nNew} updated=${nUpdated} unchanged=${nUnchanged} removed=${nRemoved} embedded=${embedCount}\n` +
      `  status → ${statusJsonPath}`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
