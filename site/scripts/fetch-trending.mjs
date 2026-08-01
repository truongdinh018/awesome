#!/usr/bin/env node
/**
 * Fetch weekly trending AI repos from GitHub, compare with catalog,
 * archive snapshot, and write site/public/data/trending-week.json.
 *
 * Usage:
 *   npm run fetch:trending
 *   GITHUB_TOKEN=ghp_... npm run fetch:trending
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadKnownRepos } from './lib/catalog-repos.mjs'
import { describeTrendingVi } from './lib/describe-trending-vi.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const siteRoot = path.resolve(__dirname, '..')
const contentRoot = path.resolve(siteRoot, '..')
const trendingDir = path.join(contentRoot, 'data', 'trending', 'weeks')
const outJsonPath = path.join(siteRoot, 'public', 'data', 'trending-week.json')
const pendingMdPath = path.join(contentRoot, 'data', 'trending', 'pending.md')

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || ''
const MAX_NEW = Number(process.env.TRENDING_MAX_NEW || 25)
const MAX_KNOWN = Number(process.env.TRENDING_MAX_KNOWN || 15)

const SEARCH_QUERIES = [
  'topic:artificial-intelligence stars:>800',
  'topic:machine-learning stars:>1500',
  'topic:llm stars:>500',
  'topic:generative-ai stars:>500',
  'topic:mcp stars:>300',
  'topic:agent stars:>1000',
]

function isoWeekId(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const day = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  const week = Math.ceil(((d - yearStart) / 86400000 + 1) / 7)
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`
}

function weekBounds(date = new Date()) {
  const d = new Date(date)
  const day = d.getDay()
  const diffToMon = day === 0 ? -6 : 1 - day
  const monday = new Date(d)
  monday.setDate(d.getDate() + diffToMon)
  monday.setHours(0, 0, 0, 0)
  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)
  const fmt = (x) => x.toISOString().slice(0, 10)
  return { weekStart: fmt(monday), weekEnd: fmt(sunday) }
}

function daysAgoIso(days) {
  const d = new Date()
  d.setDate(d.getDate() - days)
  return d.toISOString().slice(0, 10)
}

function formatStars(n) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`
  return String(n)
}

function formatDelta(n) {
  const sign = n > 0 ? '+' : ''
  return `${sign}${formatStars(Math.abs(n))}`
}

async function ghFetch(url) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'awesome-ai-trending-bot',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  if (GITHUB_TOKEN) headers.Authorization = `Bearer ${GITHUB_TOKEN}`

  const res = await fetch(url, { headers })
  if (res.status === 403) {
    const body = await res.text()
    throw new Error(`GitHub rate limit: ${body.slice(0, 200)}`)
  }
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`GitHub ${res.status}: ${body.slice(0, 200)}`)
  }
  return res.json()
}

async function searchRepos(query, pushedSince) {
  const q = `${query} pushed:>=${pushedSince}`
  const url = new URL('https://api.github.com/search/repositories')
  url.searchParams.set('q', q)
  url.searchParams.set('sort', 'stars')
  url.searchParams.set('order', 'desc')
  url.searchParams.set('per_page', '30')

  const data = await ghFetch(url.toString())
  return data.items ?? []
}

async function fetchRepoDetails(fullName) {
  const url = `https://api.github.com/repos/${fullName}`
  return ghFetch(url)
}

async function fetchRecentRelease(fullName) {
  try {
    const url = `https://api.github.com/repos/${fullName}/releases?per_page=3`
    const releases = await ghFetch(url)
    const weekAgo = Date.now() - 7 * 86400000
    return releases.find((r) => new Date(r.published_at).getTime() >= weekAgo) ?? null
  } catch {
    return null
  }
}

async function loadPreviousWeek(weekId) {
  const file = path.join(trendingDir, `${weekId}.json`)
  try {
    const raw = await fs.readFile(file, 'utf8')
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function buildHighlights(repo, prevStars, release) {
  const news = []
  const stars = repo.stargazers_count ?? 0
  if (prevStars != null && stars > prevStars) {
    news.push(`+${formatStars(stars - prevStars)} ★ so với tuần trước`)
  }
  if (release) {
    const when = new Date(release.published_at).toLocaleDateString('vi-VN')
    news.push(`Release ${release.tag_name} (${when})`)
  }
  const pushed = repo.pushed_at ? new Date(repo.pushed_at) : null
  if (pushed) {
    const days = Math.floor((Date.now() - pushed.getTime()) / 86400000)
    if (days <= 3) news.push(`Code mới push ${days === 0 ? 'hôm nay' : `${days} ngày trước`}`)
  }
  if (repo.description && news.length === 0) {
    news.push('Hoạt động GitHub trong tuần')
  }
  return news
}

function toTrendingEntry(repo, known, prevStars, release) {
  const fullName = repo.full_name
  const key = fullName.toLowerCase()
  const catalog = known.get(key)
  const stars = repo.stargazers_count ?? 0
  const highlights = buildHighlights(repo, prevStars, release)

  return {
    fullName,
    url: repo.html_url,
    description: repo.description?.trim() || '',
    descriptionVi: describeTrendingVi(repo, catalog),
    language: repo.language || '',
    stars,
    starsDelta: prevStars != null ? stars - prevStars : null,
    forks: repo.forks_count ?? 0,
    topics: repo.topics ?? [],
    pushedAt: repo.pushed_at ?? null,
    inCatalog: Boolean(catalog?.catalogPath),
    catalogPath: catalog?.catalogPath ?? null,
    catalogTitle: catalog?.title ?? null,
    catalogExcerpt: catalog?.excerpt ?? null,
    status: catalog?.catalogPath ? 'known' : 'new',
    highlights,
    score: stars + (prevStars != null ? Math.max(0, stars - prevStars) * 3 : 0),
  }
}

async function main() {
  const weekId = isoWeekId()
  const { weekStart, weekEnd } = weekBounds()
  const pushedSince = daysAgoIso(7)
  const known = await loadKnownRepos(contentRoot)

  console.log(`Week ${weekId} (${weekStart} → ${weekEnd})`)
  console.log(`Known catalog repos: ${known.size}`)

  const prevWeekFile = path.join(trendingDir, `${weekId}.json`)
  let prevSnapshot = null
  try {
    await fs.access(prevWeekFile)
    prevSnapshot = JSON.parse(await fs.readFile(prevWeekFile, 'utf8'))
  } catch {
    /* first run this week */
  }

  const prevStarsByName = new Map()
  if (prevSnapshot?.repos) {
    for (const r of prevSnapshot.repos) {
      prevStarsByName.set(r.fullName.toLowerCase(), r.stars)
    }
  } else {
    const files = await fs.readdir(trendingDir).catch(() => [])
    const sorted = files.filter((f) => f.endsWith('.json')).sort()
    const last = sorted.filter((f) => f !== `${weekId}.json`).pop()
    if (last) {
      const snap = JSON.parse(
        await fs.readFile(path.join(trendingDir, last), 'utf8'),
      )
      for (const r of snap.repos ?? []) {
        prevStarsByName.set(r.fullName.toLowerCase(), r.stars)
      }
    }
  }

  const discovered = new Map()
  for (const baseQuery of SEARCH_QUERIES) {
    console.log(`Search: ${baseQuery}`)
    try {
      const items = await searchRepos(baseQuery, pushedSince)
      for (const item of items) {
        const key = item.full_name.toLowerCase()
        if (!discovered.has(key)) discovered.set(key, item)
      }
    } catch (err) {
      console.warn(`  skip query: ${err.message}`)
    }
    await new Promise((r) => setTimeout(r, GITHUB_TOKEN ? 200 : 1200))
  }

  const catalogSample = [...known.values()]
    .filter((k) => k.catalogPath)
    .slice(0, 40)
    .map((k) => k.fullName)

  for (const fullName of catalogSample) {
    const key = fullName.toLowerCase()
    if (discovered.has(key)) continue
    try {
      const repo = await fetchRepoDetails(fullName)
      const pushed = repo.pushed_at ? new Date(repo.pushed_at) : null
      const weekAgo = Date.now() - 7 * 86400000
      const prevStars = prevStarsByName.get(key)
      const starGain = prevStars != null ? (repo.stargazers_count ?? 0) - prevStars : 0
      if ((pushed && pushed.getTime() >= weekAgo) || starGain >= 300) {
        discovered.set(key, repo)
      }
    } catch {
      /* skip */
    }
    await new Promise((r) => setTimeout(r, GITHUB_TOKEN ? 150 : 800))
  }

  const entries = []
  for (const repo of discovered.values()) {
    const key = repo.full_name.toLowerCase()
    const prevStars = prevStarsByName.get(key) ?? null
    let release = null
    if (known.has(key)) {
      release = await fetchRecentRelease(repo.full_name)
      await new Promise((r) => setTimeout(r, GITHUB_TOKEN ? 100 : 600))
    }
    entries.push(toTrendingEntry(repo, known, prevStars, release))
  }

  entries.sort((a, b) => b.score - a.score)

  const newRepos = entries.filter((e) => e.status === 'new').slice(0, MAX_NEW)
  const knownRepos = entries
    .filter((e) => e.status === 'known')
    .sort((a, b) => (b.starsDelta ?? 0) - (a.starsDelta ?? 0))
    .slice(0, MAX_KNOWN)

  const repos = [...newRepos, ...knownRepos]

  const payload = {
    week: weekId,
    weekStart,
    weekEnd,
    fetchedAt: new Date().toISOString(),
    summary: {
      total: repos.length,
      newCount: newRepos.length,
      knownCount: knownRepos.length,
      catalogSize: known.size,
    },
    repos,
  }

  await fs.mkdir(trendingDir, { recursive: true })
  await fs.mkdir(path.dirname(outJsonPath), { recursive: true })
  await fs.writeFile(prevWeekFile, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
  await fs.writeFile(outJsonPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')

  const pendingLines = [
    '# Repo trending — chờ thêm bài',
    '',
    `> Tuần **${weekId}** (${weekStart} → ${weekEnd}) · Cập nhật: ${payload.fetchedAt.slice(0, 10)}`,
    `> Chạy \`npm run fetch:trending\` trong \`site/\` để làm mới.`,
    '',
    '| Repo | ⭐ | Mô tả |',
    '|------|---|-------|',
  ]
  for (const r of newRepos) {
    const desc = (r.descriptionVi || r.description || '—')
      .replace(/\|/g, '\\|')
      .slice(0, 120)
    pendingLines.push(
      `| [${r.fullName}](${r.url}) | ${formatStars(r.stars)} | ${desc} |`,
    )
  }
  if (newRepos.length === 0) {
    pendingLines.push('| — | — | Không có repo mới tuần này |')
  }
  pendingLines.push('')
  await fs.mkdir(path.dirname(pendingMdPath), { recursive: true })
  await fs.writeFile(pendingMdPath, `${pendingLines.join('\n')}\n`, 'utf8')

  console.log(`Wrote ${repos.length} repos (${newRepos.length} new, ${knownRepos.length} known)`)
  console.log(`→ ${outJsonPath}`)
  console.log(`→ ${prevWeekFile}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
