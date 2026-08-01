#!/usr/bin/env node
/**
 * Backfill descriptionVi on existing trending JSON snapshots (no GitHub API).
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

function formatStars(n) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`
  return String(n)
}

async function enrichPayload(payload, known) {
  for (const repo of payload.repos ?? []) {
    const catalog = known.get(repo.fullName.toLowerCase())
    repo.descriptionVi = describeTrendingVi(repo, catalog)
  }
  return payload
}

async function writePendingMd(payload) {
  const newRepos = (payload.repos ?? []).filter((r) => r.status === 'new')
  const lines = [
    '# Repo trending — chờ thêm bài',
    '',
    `> Tuần **${payload.week}** (${payload.weekStart} → ${payload.weekEnd}) · Cập nhật: ${payload.fetchedAt.slice(0, 10)}`,
    `> Chạy \`npm run fetch:trending\` trong \`site/\` để làm mới.`,
    '',
    '| Repo | ⭐ | Mô tả |',
    '|------|---|-------|',
  ]
  for (const r of newRepos) {
    const desc = (r.descriptionVi || r.description || '—')
      .replace(/\|/g, '\\|')
      .slice(0, 120)
    lines.push(`| [${r.fullName}](${r.url}) | ${formatStars(r.stars)} | ${desc} |`)
  }
  if (newRepos.length === 0) {
    lines.push('| — | — | Không có repo mới tuần này |')
  }
  lines.push('')
  await fs.writeFile(pendingMdPath, `${lines.join('\n')}\n`, 'utf8')
}

async function main() {
  const known = await loadKnownRepos(contentRoot)
  const files = (await fs.readdir(trendingDir).catch(() => []))
    .filter((f) => f.endsWith('.json'))
    .sort()

  for (const file of files) {
    const filePath = path.join(trendingDir, file)
    const payload = JSON.parse(await fs.readFile(filePath, 'utf8'))
    await enrichPayload(payload, known)
    await fs.writeFile(filePath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
    console.log(`Updated ${file}`)
  }

  const latest = files.at(-1)
  if (latest) {
    const payload = JSON.parse(
      await fs.readFile(path.join(trendingDir, latest), 'utf8'),
    )
    await fs.writeFile(outJsonPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
    await writePendingMd(payload)
    console.log(`→ ${outJsonPath}`)
    console.log(`→ ${pendingMdPath}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
