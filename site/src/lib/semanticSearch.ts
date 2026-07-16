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
  /** Cosine similarity for semantic/hybrid display (0–1). */
  score: number
  source: 'vector' | 'fts' | 'hybrid'
}

const MODEL_ID = 'Xenova/multilingual-e5-small'
/** Must match index script (passage: … / query: …) */
const E5_PREFIX = true
const EMBED_RECIPE = 'short-e5-v1'

export type EmbedderStatus =
  | 'idle'
  | 'loading'
  | 'ready'
  | 'error'
  | 'unavailable'

type EmbedderStatusListener = (status: EmbedderStatus, detail?: string) => void

let sqlPromise: Promise<SqlJsStatic> | null = null
let dbPromise: Promise<Database | null> | null = null
let statusPromise: Promise<ArticlesStatusFile | null> | null = null
let embedderPromise: Promise<
  ((text: string, role: 'query' | 'passage') => Promise<Float32Array>) | null
> | null = null
let embedderStatus: EmbedderStatus = 'idle'
let embedderDetail = ''
const embedderListeners = new Set<EmbedderStatusListener>()

export function getEmbedderStatus(): {
  status: EmbedderStatus
  detail: string
  model: string
} {
  return { status: embedderStatus, detail: embedderDetail, model: MODEL_ID }
}

export function subscribeEmbedderStatus(
  listener: EmbedderStatusListener,
): () => void {
  embedderListeners.add(listener)
  listener(embedderStatus, embedderDetail)
  return () => {
    embedderListeners.delete(listener)
  }
}

function setEmbedderStatus(status: EmbedderStatus, detail = '') {
  embedderStatus = status
  embedderDetail = detail
  for (const listener of embedderListeners) listener(status, detail)
}

function assetUrl(rel: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const normalized = rel.replace(/^\/+/, '')
  return `${base.endsWith('/') ? base : `${base}/`}${normalized}`
}

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
  // Copy so byteOffset is 0 — Float32Array view requires 4-byte alignment
  const copy = new Uint8Array(bytes)
  return new Float32Array(copy.buffer)
}

function cosine(a: Float32Array, b: Float32Array): number {
  const n = Math.min(a.length, b.length)
  let dot = 0
  for (let i = 0; i < n; i++) dot += a[i]! * b[i]!
  return dot
}

async function getEmbedder(): Promise<
  ((text: string, role: 'query' | 'passage') => Promise<Float32Array>) | null
> {
  if (!embedderPromise) {
    embedderPromise = (async () => {
      try {
        setEmbedderStatus(
          'loading',
          'Đang tải model tìm kiếm (lần đầu ~30–80MB, lần sau dùng cache)…',
        )
        const { pipeline } = await import('@xenova/transformers')
        const extractor = await pipeline('feature-extraction', MODEL_ID, {
          quantized: true,
        })
        setEmbedderStatus('ready', 'Model sẵn sàng')
        return async (text: string, role: 'query' | 'passage') => {
          const prefixed =
            E5_PREFIX && !/^(query|passage):\s/i.test(text)
              ? `${role}: ${text}`
              : text
          const out = await extractor(prefixed, {
            pooling: 'mean',
            normalize: true,
          })
          return new Float32Array(out.data as Float32Array)
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Không tải được model'
        setEmbedderStatus('error', msg)
        return null
      }
    })()
  }
  return embedderPromise
}

/** Optional: warm SQLite only (does not load the embed model). */
export function preloadSearchDb(): void {
  const run = () => {
    void loadSearchDb()
  }
  const w = window as Window & {
    requestIdleCallback?: (
      cb: () => void,
      opts?: { timeout: number },
    ) => number
  }
  if (typeof w.requestIdleCallback === 'function') {
    w.requestIdleCallback(() => run(), { timeout: 2500 })
  } else {
    globalThis.setTimeout(run, 400)
  }
}

/** @deprecated Model loads on first semantic/hybrid search — use getEmbedder via semanticSearch. */
export function preloadSearchRuntime(): void {
  preloadSearchDb()
}

export function getSearchModelId(): string {
  return MODEL_ID
}

export function getEmbedRecipe(): string {
  return EMBED_RECIPE
}

const STOPWORDS = new Set([
  'a',
  'an',
  'the',
  'and',
  'or',
  'to',
  'for',
  'of',
  'in',
  'on',
  'with',
  'is',
  'là',
  'và',
  'của',
  'cho',
  'với',
  'một',
  'các',
  'để',
  'trong',
  'về',
  'tìm',
  'kiếm',
  'làm',
  'sao',
  'như',
  'thế',
])

function tokenizeQuery(q: string): string[] {
  return q
    .trim()
    .toLowerCase()
    .replace(/[%_]/g, '')
    .split(/[^\p{L}\p{N}+#.-]+/u)
    .map((t) => t.trim())
    .filter((t) => t.length >= 2 && !STOPWORDS.has(t))
}

/** Whole-token / tag-aware match — avoids LIKE %rag% hitting "storage". */
function tokenMatchScore(hay: string, token: string): number {
  if (token.length <= 4) {
    const re = new RegExp(
      `(^|[^\\p{L}\\p{N}])${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=[^\\p{L}\\p{N}]|$)`,
      'iu',
    )
    if (!re.test(hay)) return 0
    // Boost exact tag / title-ish hits
    if (hay.includes(`"${token}"`) || hay.includes(`\`${token}\``)) return 3
    return 2
  }
  return hay.includes(token) ? 1 : 0
}

function keywordDbSearch(
  db: Database,
  query: string,
  limit: number,
): SearchHit[] {
  const tokens = tokenizeQuery(query)
  if (tokens.length === 0) return []

  try {
    const rows = queryAll(
      db,
      `SELECT path, title, excerpt, body_text, tags_json, category, repo, slug
       FROM articles WHERE status != 'removed'`,
    )
    const scored: SearchHit[] = []
    for (const row of rows) {
      const titleHay = `${row.title} ${row.slug} ${row.repo}`.toLowerCase()
      const tagHay = String(row.tags_json).toLowerCase()
      const hay = [
        row.title,
        row.slug,
        row.repo,
        row.category,
        row.tags_json,
        row.excerpt,
        row.body_text,
      ]
        .join(' ')
        .toLowerCase()
      let score = 0
      let matched = 0
      for (const t of tokens) {
        const s = tokenMatchScore(hay, t)
        if (s > 0) {
          matched += 1
          score += s
          // Boost title / tag hits (short queries like RAG, TTS)
          if (tokenMatchScore(titleHay, t) > 0) score += 2
          if (tokenMatchScore(tagHay, t) > 0) score += 2.5
        }
      }
      const need = tokens.length >= 2 ? tokens.length : 1
      if (matched < need) continue
      score += matched * 0.5
      scored.push({
        path: String(row.path),
        score,
        source: 'fts',
      })
    }
    scored.sort((a, b) => b.score - a.score)
    return scored.slice(0, limit)
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
  const qVec = await embed(query, 'query')
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
  if (scored.length === 0) return []

  // e5 scores cluster tightly — keep near the best hit, not a bare top-K tail
  const best = scored[0]!.score
  const cutoff = Math.max(best - 0.025, best * 0.97)
  const tight = scored.filter((h) => h.score >= cutoff)
  // Soft cap so vague queries don't flood the UI
  const softCap = Math.min(limit, 24)
  return (tight.length > 0 ? tight : scored.slice(0, 12)).slice(0, softCap)
}

function isShortQuery(q: string): boolean {
  const tokens = tokenizeQuery(q)
  return tokens.length <= 2 || q.trim().length <= 18
}

function rrfMerge(
  vectorHits: SearchHit[],
  keywordHits: SearchHit[],
  opts: { k?: number; vectorWeight?: number; keywordWeight?: number } = {},
): SearchHit[] {
  const k = opts.k ?? 60
  const vectorWeight = opts.vectorWeight ?? 1
  const keywordWeight = opts.keywordWeight ?? 1
  const scores = new Map<string, number>()
  vectorHits.forEach((h, i) => {
    scores.set(
      h.path,
      (scores.get(h.path) ?? 0) + vectorWeight / (k + i + 1),
    )
  })
  keywordHits.forEach((h, i) => {
    scores.set(
      h.path,
      (scores.get(h.path) ?? 0) + keywordWeight / (k + i + 1),
    )
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

  // Short / tag-like queries: trust keyword (title/tag) more than pure vector
  const short = isShortQuery(q)
  const merged = rrfMerge(vec, kw, {
    vectorWeight: short ? 0.85 : 1,
    keywordWeight: short ? 1.75 : 1.15,
  }).slice(0, limit)

  // Attach real cosine scores and sort high → low for UI
  const vecScore = new Map(vec.map((h) => [h.path, h.score]))
  return merged
    .map((h) => ({
      path: h.path,
      source: 'hybrid' as const,
      score: vecScore.get(h.path) ?? 0,
    }))
    .sort((a, b) => b.score - a.score)
}

export function keywordFilter(
  items: CatalogItem[],
  query: string,
  tagLabelFn: (t: string) => string,
): CatalogItem[] {
  const tokens = tokenizeQuery(query)
  if (tokens.length === 0) {
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

  return items
    .map((item) => {
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
      let score = 0
      let matched = 0
      for (const t of tokens) {
        const s = tokenMatchScore(hay, t)
        if (s > 0) {
          matched += 1
          score += s
        }
      }
      // Multi-token: require all tokens (AND) so "tài liệu" doesn't match half the catalog
      const need = tokens.length >= 2 ? tokens.length : 1
      return { item, score, matched, need }
    })
    .filter((x) => x.matched >= x.need)
    .sort((a, b) => b.score - a.score || b.matched - a.matched)
    .map((x) => x.item)
}

export function applySearchRanking(
  items: CatalogItem[],
  hits: SearchHit[] | null,
): CatalogItem[] {
  if (!hits || hits.length === 0) return []
  const order = new Map(hits.map((h, i) => [h.path, { i, score: h.score }]))
  return items
    .filter((item) => order.has(item.path))
    .sort((a, b) => {
      const ha = order.get(a.path)!
      const hb = order.get(b.path)!
      if (hb.score !== ha.score) return hb.score - ha.score
      return ha.i - hb.i
    })
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
