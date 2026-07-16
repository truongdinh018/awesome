import initSqlJs, { type Database, type SqlJsStatic } from 'sql.js'
import type { CatalogItem } from './parseMeta'

export type ArticleStatus = 'new' | 'current' | 'updated' | 'removed'

export type ArticleStatusInfo = {
  status: ArticleStatus
  contentHash: string
  firstSeenAt: string
  contentUpdatedAt: string | null
}

export type ArticlesStatusFile = {
  indexedAt: string
  model: string
  articles: Record<string, ArticleStatusInfo>
}

export type SearchMode = 'keyword' | 'semantic' | 'hybrid'

export type SearchHit = {
  path: string
  score: number
  source: 'vector' | 'fts' | 'hybrid'
}

const MODEL_ID = 'Xenova/paraphrase-multilingual-MiniLM-L12-v2'

function assetUrl(rel: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const normalized = rel.replace(/^\/+/, '')
  return `${base.endsWith('/') ? base : `${base}/`}${normalized}`
}

let sqlPromise: Promise<SqlJsStatic> | null = null
let dbPromise: Promise<Database | null> | null = null
let statusPromise: Promise<ArticlesStatusFile | null> | null = null
let embedderPromise: Promise<
  ((text: string) => Promise<Float32Array>) | null
> | null = null

function getSql(): Promise<SqlJsStatic> {
  if (!sqlPromise) {
    sqlPromise = initSqlJs({
      locateFile: (file) => assetUrl(file === 'sql-wasm.wasm' ? 'sql-wasm.wasm' : file),
    })
  }
  return sqlPromise
}

export async function loadSearchDb(): Promise<Database | null> {
  if (!dbPromise) {
    dbPromise = (async () => {
      try {
        const SQL = await getSql()
        const res = await fetch(assetUrl('data/search.sqlite'))
        if (!res.ok) return null
        const buf = new Uint8Array(await res.arrayBuffer())
        return new SQL.Database(buf)
      } catch {
        return null
      }
    })()
  }
  return dbPromise
}

export async function loadArticlesStatus(): Promise<ArticlesStatusFile | null> {
  if (!statusPromise) {
    statusPromise = (async () => {
      try {
        const res = await fetch(assetUrl('data/articles-status.json'))
        if (!res.ok) return null
        return (await res.json()) as ArticlesStatusFile
      } catch {
        return null
      }
    })()
  }
  return statusPromise
}

function queryAll(
  db: Database,
  sql: string,
  params: (string | number)[] = [],
): Record<string, unknown>[] {
  const stmt = db.prepare(sql)
  if (params.length) stmt.bind(params)
  const rows: Record<string, unknown>[] = []
  while (stmt.step()) {
    rows.push(stmt.getAsObject())
  }
  stmt.free()
  return rows
}

function blobToFloat32(blob: Uint8Array | number[]): Float32Array {
  const bytes =
    blob instanceof Uint8Array ? blob : Uint8Array.from(blob as number[])
  return new Float32Array(
    bytes.buffer,
    bytes.byteOffset,
    bytes.byteLength / Float32Array.BYTES_PER_ELEMENT,
  )
}

function cosine(a: Float32Array, b: Float32Array): number {
  const n = Math.min(a.length, b.length)
  let dot = 0
  for (let i = 0; i < n; i++) dot += a[i]! * b[i]!
  return dot
}

async function getEmbedder(): Promise<
  ((text: string) => Promise<Float32Array>) | null
> {
  if (!embedderPromise) {
    embedderPromise = (async () => {
      try {
        const { pipeline } = await import('@xenova/transformers')
        const extractor = await pipeline('feature-extraction', MODEL_ID, {
          quantized: true,
        })
        return async (text: string) => {
          const out = await extractor(text, {
            pooling: 'mean',
            normalize: true,
          })
          return new Float32Array(out.data as Float32Array)
        }
      } catch {
        return null
      }
    })()
  }
  return embedderPromise
}

function escapeLike(q: string): string {
  return q.trim().replace(/[%_]/g, '')
}

function keywordDbSearch(
  db: Database,
  query: string,
  limit: number,
): SearchHit[] {
  const raw = escapeLike(query)
  if (!raw) return []
  const tokens = raw.split(/\s+/).filter(Boolean).slice(0, 6)
  if (tokens.length === 0) return []

  const clauses = tokens.map(
    () =>
      `(title LIKE ? OR excerpt LIKE ? OR body_text LIKE ? OR tags_json LIKE ? OR category LIKE ? OR repo LIKE ?)`,
  )
  const params: string[] = []
  for (const t of tokens) {
    const p = `%${t}%`
    params.push(p, p, p, p, p, p)
  }

  try {
    const rows = queryAll(
      db,
      `SELECT path FROM articles
       WHERE status != 'removed' AND ${clauses.join(' AND ')}
       LIMIT ?`,
      [...params, limit],
    )
    return rows.map((row, i) => ({
      path: String(row.path),
      score: 1 / (i + 1),
      source: 'fts' as const,
    }))
  } catch {
    return []
  }
}

async function vectorSearch(
  db: Database,
  query: string,
  limit: number,
): Promise<SearchHit[]> {
  const embed = await getEmbedder()
  if (!embed) return []
  const qVec = await embed(query)
  const rows = queryAll(
    db,
    `SELECT a.path, e.vector
     FROM embeddings e
     JOIN articles a ON a.id = e.article_id
     WHERE a.status != 'removed'`,
  )
  const scored: SearchHit[] = []
  for (const row of rows) {
    const vec = blobToFloat32(row.vector as Uint8Array)
    scored.push({
      path: String(row.path),
      score: cosine(qVec, vec),
      source: 'vector',
    })
  }
  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, limit)
}

function rrfMerge(
  vectorHits: SearchHit[],
  keywordHits: SearchHit[],
  k = 60,
): SearchHit[] {
  const scores = new Map<string, number>()
  vectorHits.forEach((h, i) => {
    scores.set(h.path, (scores.get(h.path) ?? 0) + 1 / (k + i + 1))
  })
  keywordHits.forEach((h, i) => {
    scores.set(h.path, (scores.get(h.path) ?? 0) + 1 / (k + i + 1))
  })
  return [...scores.entries()]
    .map(([path, score]) => ({
      path,
      score,
      source: 'hybrid' as const,
    }))
    .sort((a, b) => b.score - a.score)
}

export async function semanticSearch(
  query: string,
  opts: {
    mode?: SearchMode
    limit?: number
  } = {},
): Promise<SearchHit[]> {
  const mode = opts.mode ?? 'hybrid'
  const limit = opts.limit ?? 50
  const q = query.trim()
  if (!q || mode === 'keyword') return []

  const db = await loadSearchDb()
  if (!db) return []

  if (mode === 'semantic') {
    return vectorSearch(db, q, limit)
  }

  const [vec, kw] = await Promise.all([
    vectorSearch(db, q, limit),
    Promise.resolve(keywordDbSearch(db, q, limit)),
  ])
  if (vec.length === 0) return kw
  if (kw.length === 0) return vec
  return rrfMerge(vec, kw).slice(0, limit)
}

export function keywordFilter(
  items: CatalogItem[],
  query: string,
  tagLabelFn: (t: string) => string,
): CatalogItem[] {
  const q = query.trim().toLowerCase()
  if (!q) return items
  return items.filter((item) => {
    const hay = [
      item.title,
      item.slug,
      item.repo,
      item.category,
      item.excerpt,
      item.domain,
      ...item.tags,
      ...item.tags.map(tagLabelFn),
    ]
      .join(' ')
      .toLowerCase()
    return hay.includes(q)
  })
}

export function applySearchRanking(
  items: CatalogItem[],
  hits: SearchHit[] | null,
): CatalogItem[] {
  if (!hits || hits.length === 0) return items
  const order = new Map(hits.map((h, i) => [h.path, i]))
  return items
    .filter((item) => order.has(item.path))
    .sort((a, b) => (order.get(a.path) ?? 0) - (order.get(b.path) ?? 0))
}

const SEEN_KEY = 'awesome-article-seen-v1'

export function loadSeenPaths(): Set<string> {
  try {
    const raw = localStorage.getItem(SEEN_KEY)
    if (!raw) return new Set()
    const arr = JSON.parse(raw) as string[]
    return new Set(arr)
  } catch {
    return new Set()
  }
}

export function markPathSeen(path: string): void {
  try {
    const set = loadSeenPaths()
    set.add(path)
    localStorage.setItem(SEEN_KEY, JSON.stringify([...set]))
  } catch {
    /* ignore */
  }
}

export function effectiveStatus(
  info: ArticleStatusInfo | undefined,
  seen: Set<string>,
  path: string,
): ArticleStatus | null {
  if (!info || info.status === 'removed') return null
  if (seen.has(path) && (info.status === 'new' || info.status === 'updated')) {
    return 'current'
  }
  return info.status
}
