#!/usr/bin/env node
/**
 * Offline audit: DB integrity + retrieval quality + embed strategy A/B.
 * Run: cd site && node --import tsx scripts/audit-search.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import initSqlJs from 'sql.js'
import { pipeline } from '@xenova/transformers'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dbPath = path.join(__dirname, '../public/data/search.sqlite')
const MODEL = 'Xenova/multilingual-e5-small'
const USE_E5 = true

/** Gold queries: expected path substrings (any match = hit) */
const GOLD = [
  {
    q: 'RAG',
    expect: ['ragflow', 'weknora', 'pageindex', 'pixelrag', 'pathway', 'khoj', 'anything-llm'],
  },
  {
    q: 'RAGFlow',
    expect: ['ragflow'],
  },
  {
    q: 'text to speech tiếng Việt',
    expect: ['vienneu', 'khanhtts', 'cosyvoice', 'voicebox', 'voxcpm', 'luxtts'],
  },
  {
    q: 'TTS Vietnamese',
    expect: ['vienneu', 'khanhtts', 'cosyvoice'],
  },
  {
    q: 'browser automation agent',
    expect: ['browser-use', 'stagehand', 'midscene', 'page-agent', 'browseros'],
  },
  {
    q: 'OCR đọc PDF',
    expect: ['mineru', 'surya', 'dots-ocr', 'deepseek-ocr', 'hunyuan-ocr', 'markitdown'],
  },
  {
    q: 'MCP agent memory',
    expect: ['claude-mem', 'agentmemory', 'tencentdb-agent-memory'],
  },
  {
    q: 'self-host n8n workflow',
    expect: ['n8n', 'n8n-workflows'],
  },
]

function cosine(a, b) {
  let s = 0
  const n = Math.min(a.length, b.length)
  for (let i = 0; i < n; i++) s += a[i] * b[i]
  return s
}

function toF32(blob) {
  const bytes = blob instanceof Uint8Array ? blob : Uint8Array.from(blob)
  const copy = new Uint8Array(bytes)
  return new Float32Array(copy.buffer)
}

function hitAt(rankedPaths, expect, k) {
  const top = rankedPaths.slice(0, k).map((p) => p.toLowerCase())
  return expect.some((e) => top.some((p) => p.includes(e)))
}

function mrr(rankedPaths, expect) {
  for (let i = 0; i < rankedPaths.length; i++) {
    const p = rankedPaths[i].toLowerCase()
    if (expect.some((e) => p.includes(e))) return 1 / (i + 1)
  }
  return 0
}

function keywordRank(rows, query, limit = 80) {
  const tokens = query
    .toLowerCase()
    .replace(/[%_]/g, '')
    .split(/\s+/)
    .filter((t) => t.length > 1)
  // AND-all (current hybrid LIKE behavior)
  const andHits = rows
    .filter((r) => {
      const hay = `${r.title} ${r.excerpt} ${r.body} ${r.tags} ${r.category} ${r.repo}`.toLowerCase()
      return tokens.every((t) => hay.includes(t))
    })
    .map((r) => r.path)
    .slice(0, limit)

  // OR / any-token (better for VI phrases)
  const scored = rows
    .map((r) => {
      const hay = `${r.title} ${r.excerpt} ${r.body} ${r.tags} ${r.category} ${r.repo}`.toLowerCase()
      const score = tokens.reduce((s, t) => s + (hay.includes(t) ? 1 : 0), 0)
      return { path: r.path, score }
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.path)

  // Client keywordFilter: full phrase substring
  const phrase = query.trim().toLowerCase()
  const phraseHits = rows
    .filter((r) => {
      const hay = `${r.title} ${r.excerpt} ${r.tags} ${r.category} ${r.repo}`.toLowerCase()
      return hay.includes(phrase)
    })
    .map((r) => r.path)

  return { andHits, orHits: scored, phraseHits }
}

function rrf(lists, k = 60) {
  const scores = new Map()
  for (const list of lists) {
    list.forEach((p, i) => {
      scores.set(p, (scores.get(p) ?? 0) + 1 / (k + i + 1))
    })
  }
  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([p]) => p)
}

async function main() {
  console.log('=== 1. DB integrity ===')
  const SQL = await initSqlJs()
  const db = new SQL.Database(fs.readFileSync(dbPath))
  const nArt = db.exec(`SELECT COUNT(*) FROM articles WHERE status!='removed'`)[0].values[0][0]
  const nEmb = db.exec(`SELECT COUNT(*) FROM embeddings`)[0].values[0][0]
  const orphan = db.exec(
    `SELECT COUNT(*) FROM articles a LEFT JOIN embeddings e ON e.article_id=a.id
     WHERE a.status!='removed' AND e.article_id IS NULL`,
  )[0].values[0][0]
  const dims = db.exec(`SELECT DISTINCT dims, model FROM embeddings`)
  console.log({ articles: nArt, embeddings: nEmb, missingEmb: orphan, dims: dims[0]?.values })

  // Load article rows + stored vectors
  const stmt = db.prepare(
    `SELECT a.path, a.title, a.domain, a.category, a.tags_json, a.excerpt, a.body_text, a.repo, e.vector
     FROM articles a JOIN embeddings e ON e.article_id=a.id WHERE a.status!='removed'`,
  )
  const rows = []
  while (stmt.step()) {
    const o = stmt.getAsObject()
    rows.push({
      path: String(o.path),
      title: String(o.title),
      domain: String(o.domain),
      category: String(o.category),
      tags: String(o.tags_json),
      excerpt: String(o.excerpt),
      body: String(o.body_text),
      repo: String(o.repo),
      stored: toF32(o.vector),
    })
  }
  stmt.free()

  // Spot-check vector integrity
  let badNorm = 0
  for (const r of rows) {
    const n = Math.sqrt(r.stored.reduce((s, x) => s + x * x, 0))
    if (Math.abs(n - 1) > 0.05) badNorm++
  }
  console.log({ vectorNormIssues: badNorm })

  console.log('\n=== 2. Load embedder ===')
  const extractor = await pipeline('feature-extraction', MODEL, { quantized: true })
  const embed = async (text, role = 'query') => {
    const input =
      USE_E5 && !/^(query|passage):\s/i.test(text) ? `${role}: ${text}` : text
    const out = await extractor(input, { pooling: 'mean', normalize: true })
    return new Float32Array(out.data)
  }

  // Re-embed strategies
  console.log('\n=== 3. Strategy A/B (re-embed in memory) ===')
  for (const r of rows) {
    r.textFull = [r.title, r.domain, r.category, JSON.parse(r.tags).join(' '), r.excerpt, r.body.slice(0, 4000)]
      .filter(Boolean)
      .join('\n')
    r.textShort = [
      r.title,
      r.repo,
      r.domain,
      r.category,
      JSON.parse(r.tags).join(', '),
      r.excerpt,
    ]
      .filter(Boolean)
      .join('\n')
    r.textTitleTags = `${r.title}\n${JSON.parse(r.tags).join(' ')}\n${r.category}\n${r.excerpt}`
  }

  // Only re-embed short strategies for speed (230 * 2)
  console.log('embedding short texts…')
  for (let i = 0; i < rows.length; i++) {
    process.stdout.write(`\r  ${i + 1}/${rows.length}`)
    rows[i].vecShort = await embed(rows[i].textShort, 'passage')
    rows[i].vecTitleTags = await embed(rows[i].textTitleTags, 'passage')
  }
  process.stdout.write('\n')

  function rankByVec(qVec, key) {
    return rows
      .map((r) => ({ path: r.path, score: cosine(qVec, r[key]) }))
      .sort((a, b) => b.score - a.score)
      .map((x) => x.path)
  }

  const strategies = [
    ['stored_fullbody', 'stored'],
    ['reembed_short', 'vecShort'],
    ['reembed_title_tags', 'vecTitleTags'],
  ]

  console.log('\n=== 4. Gold-set metrics ===')
  const summary = {}

  for (const [name, key] of strategies) {
    summary[name] = { hit5: 0, hit10: 0, mrr: 0 }
  }
  summary.kw_and = { hit5: 0, hit10: 0, mrr: 0 }
  summary.kw_or = { hit5: 0, hit10: 0, mrr: 0 }
  summary.kw_phrase = { hit5: 0, hit10: 0, mrr: 0 }
  summary.hybrid_stored_or = { hit5: 0, hit10: 0, mrr: 0 }
  summary.hybrid_short_or = { hit5: 0, hit10: 0, mrr: 0 }

  for (const g of GOLD) {
    console.log(`\n--- Q: "${g.q}" ---`)
    const qVec = await embed(g.q, 'query')
    const kw = keywordRank(rows, g.q)

    for (const [name, key] of strategies) {
      const ranked = rankByVec(qVec, key)
      const h5 = hitAt(ranked, g.expect, 5)
      const h10 = hitAt(ranked, g.expect, 10)
      const rr = mrr(ranked, g.expect)
      summary[name].hit5 += h5
      summary[name].hit10 += h10
      summary[name].mrr += rr
      console.log(
        `  ${name.padEnd(20)} hit@5=${h5 ? 'Y' : 'N'} hit@10=${h10 ? 'Y' : 'N'} MRR=${rr.toFixed(3)} top3=${ranked
          .slice(0, 3)
          .map((p) => p.split('/').pop())
          .join(', ')}`,
      )
    }

    for (const [label, list] of [
      ['kw_and', kw.andHits],
      ['kw_or', kw.orHits],
      ['kw_phrase', kw.phraseHits],
    ]) {
      const h5 = hitAt(list, g.expect, 5)
      const h10 = hitAt(list, g.expect, 10)
      const rr = mrr(list, g.expect)
      summary[label].hit5 += h5
      summary[label].hit10 += h10
      summary[label].mrr += rr
      console.log(
        `  ${label.padEnd(20)} hit@5=${h5 ? 'Y' : 'N'} hit@10=${h10 ? 'Y' : 'N'} MRR=${rr.toFixed(3)} n=${list.length}`,
      )
    }

    const hyStored = rrf([rankByVec(qVec, 'stored'), kw.orHits])
    const hyShort = rrf([rankByVec(qVec, 'vecShort'), kw.orHits])
    for (const [label, list] of [
      ['hybrid_stored_or', hyStored],
      ['hybrid_short_or', hyShort],
    ]) {
      const h5 = hitAt(list, g.expect, 5)
      const h10 = hitAt(list, g.expect, 10)
      const rr = mrr(list, g.expect)
      summary[label].hit5 += h5
      summary[label].hit10 += h10
      summary[label].mrr += rr
      console.log(
        `  ${label.padEnd(20)} hit@5=${h5 ? 'Y' : 'N'} hit@10=${h10 ? 'Y' : 'N'} MRR=${rr.toFixed(3)}`,
      )
    }
  }

  const N = GOLD.length
  console.log('\n=== 5. SUMMARY (avg over', N, 'queries) ===')
  for (const [k, v] of Object.entries(summary)) {
    console.log(
      `${k.padEnd(22)} hit@5=${(v.hit5 / N).toFixed(2)} hit@10=${(v.hit10 / N).toFixed(2)} MRR=${(v.mrr / N).toFixed(3)}`,
    )
  }

  console.log('\n=== 6. Known client bugs checklist ===')
  console.log(
    '- keyword LIKE uses AND on ALL tokens (incl. stopwords) → VI phrases often return 0',
  )
  console.log(
    '- keywordFilter client uses full-phrase includes() → "TTS tiếng Việt" may miss',
  )
  console.log(
    '- embed uses body[:4000] → dilutes title/tag signal (see A/B above)',
  )
  console.log(
    '- Catalog debounce bumps searchGen and can cancel in-flight semantic search',
  )
  console.log(
    '- blobToFloat32 may mis-align if byteOffset % 4 !== 0 (should copy)',
  )
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
