#!/usr/bin/env node
/**
 * Create Vietnamese articles + repos/README rows for trending repos without catalog entry.
 *
 * Usage:
 *   npm run trending:create-articles
 *   MAX_CREATE=5 npm run trending:create-articles
 *   DRY_RUN=1 npm run trending:create-articles
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadKnownRepos } from './lib/catalog-repos.mjs'
import { describeTrendingVi } from './lib/describe-trending-vi.mjs'
import { inferTrendingMeta } from './lib/infer-trending-meta.mjs'
import { generateTrendingArticle } from './lib/generate-trending-article.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const siteRoot = path.resolve(__dirname, '..')
const contentRoot = path.resolve(siteRoot, '..')
const trendingJsonPath = path.join(siteRoot, 'public', 'data', 'trending-week.json')
const reposMdPath = path.join(contentRoot, 'repos', 'README.md')
const changelogPath = path.join(contentRoot, 'CHANGELOG.md')

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || ''
const MAX_CREATE = Number(process.env.MAX_CREATE || 8)
const DRY_RUN = process.env.DRY_RUN === '1'

function formatStars(n) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`
  return String(n)
}

function langLabel(language) {
  if (!language) return '—'
  return language
}

async function ghFetch(url) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'awesome-ai-trending-create',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  if (GITHUB_TOKEN) headers.Authorization = `Bearer ${GITHUB_TOKEN}`
  const res = await fetch(url, { headers })
  if (!res.ok) return null
  return res.json()
}

async function loadTrending() {
  const raw = await fs.readFile(trendingJsonPath, 'utf8')
  return JSON.parse(raw)
}

function parseMaxStarNumber(reposMd) {
  const matches = [...reposMd.matchAll(/^\|\s*(\d+)\s*\|/gm)]
  return matches.reduce((max, m) => Math.max(max, Number(m[1])), 0)
}

function updateReposHeader(reposMd, nextStar) {
  return reposMd.replace(
    />\s*\*\*(\d+)\s*★\*\*/,
    `> **${nextStar} ★**`,
  )
}

function insertRepoRows(reposMd, rows) {
  const marker = '\n\n## Ecosystem'
  const idx = reposMd.indexOf(marker)
  if (idx === -1) throw new Error('Không tìm thấy marker ## Ecosystem trong repos/README.md')
  const block = `${rows.join('\n')}\n`
  return reposMd.slice(0, idx) + block + reposMd.slice(idx)
}

function prependChangelog(changelog, lines) {
  const marker = '\n\n*'
  const idx = changelog.indexOf(marker)
  const head = changelog.slice(0, idx === -1 ? changelog.length : idx)
  const tail = idx === -1 ? '' : changelog.slice(idx)
  const today = new Date().toISOString().slice(0, 10)
  const entries = lines
    .map((line) => `\n*${today} — ${line}*`)
    .join('')
  return `${head.trimEnd()}${entries}${tail}`
}

async function main() {
  const trending = await loadTrending()
  const known = await loadKnownRepos(contentRoot)
  const pending = (trending.repos ?? [])
    .filter((r) => r.status === 'new')
    .sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0))
    .slice(0, MAX_CREATE)

  if (pending.length === 0) {
    console.log('Không có repo trending mới cần tạo bài.')
    return
  }

  console.log(`Tạo tối đa ${pending.length} bài từ trending tuần ${trending.week}`)

  let reposMd = await fs.readFile(reposMdPath, 'utf8')
  let nextStar = parseMaxStarNumber(reposMd)
  const created = []
  const repoRows = []
  const changelogLines = []

  for (const repo of pending) {
    const key = repo.fullName.toLowerCase()
    if (known.has(key)) {
      console.log(`  skip ${repo.fullName} — đã có trong catalog`)
      continue
    }

    if (!repo.descriptionVi) {
      repo.descriptionVi = describeTrendingVi(repo, null)
    }

    const meta = inferTrendingMeta(repo)
    const absArticle = path.join(contentRoot, meta.articlePath)

    try {
      await fs.access(absArticle)
      console.log(`  skip ${repo.fullName} — file đã tồn tại ${meta.articlePath}`)
      continue
    } catch {
      /* create */
    }

    const details = await ghFetch(`https://api.github.com/repos/${repo.fullName}`)
    const article = generateTrendingArticle(repo, meta, {
      week: trending.week,
      license: details?.license?.spdx_id || details?.license?.name || 'xem LICENSE repo',
      homepage: details?.homepage || '',
    })

    if (DRY_RUN) {
      console.log(`[dry-run] would create ${meta.articlePath}`)
      created.push({ repo, meta })
      continue
    }

    await fs.mkdir(path.dirname(absArticle), { recursive: true })
    await fs.writeFile(absArticle, article, 'utf8')

    nextStar += 1
    const tags = meta.tags.map((t) => `\`${t}\``).join(' ')
    repoRows.push(
      `| ${nextStar} | [${repo.fullName}](${repo.url}) | ${formatStars(repo.stars)} | ${langLabel(repo.language)} | ${meta.domainLabel} | ${tags} | [${meta.slug}.md](../${meta.articlePath}) |`,
    )
    changelogLines.push(
      `${nextStar} ★ · thêm ${meta.title} (\`${repo.fullName}\`) từ trending`,
    )
    created.push({ repo, meta })
    console.log(`  + ${meta.articlePath}`)
    await new Promise((r) => setTimeout(r, GITHUB_TOKEN ? 120 : 800))
  }

  if (created.length === 0) {
    console.log('Không tạo bài mới.')
    return
  }

  if (DRY_RUN) {
    console.log(`[dry-run] ${created.length} bài sẽ được tạo.`)
    return
  }

  reposMd = insertRepoRows(reposMd, repoRows)
  reposMd = updateReposHeader(reposMd, nextStar)
  await fs.writeFile(reposMdPath, reposMd, 'utf8')

  const changelog = await fs.readFile(changelogPath, 'utf8')
  await fs.writeFile(
    changelogPath,
    prependChangelog(changelog, changelogLines.reverse()),
    'utf8',
  )

  console.log(`\nĐã tạo ${created.length} bài. Chạy tiếp:`)
  console.log('  npm run index:search')
  console.log('  npm run fetch:trending')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
