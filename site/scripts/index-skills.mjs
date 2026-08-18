#!/usr/bin/env node
/**
 * Build skills/vault → site/public/data/skills.json
 * Usage: node scripts/index-skills.mjs  (cwd = site/)
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const siteRoot = path.resolve(__dirname, '..')
const repoRoot = path.resolve(siteRoot, '..')
const vaultRoot = path.join(repoRoot, 'skills', 'vault')
const outPath = path.join(siteRoot, 'public', 'data', 'skills.json')

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) {
    return { meta: {}, body: raw }
  }
  const end = raw.indexOf('\n---', 3)
  if (end === -1) return { meta: {}, body: raw }
  const fm = raw.slice(3, end).trim()
  const body = raw.slice(end + 4).replace(/^\n/, '')
  const meta = {}
  for (const line of fm.split('\n')) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!m) continue
    const key = m[1]
    let val = m[2].trim()
    if (val.startsWith('[') && val.endsWith(']')) {
      val = val
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    } else {
      val = val.replace(/^["']|["']$/g, '')
    }
    meta[key] = val
  }
  return { meta, body }
}

function excerpt(body, max = 180) {
  const text = body
    .replace(/^#+\s+.*/m, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`>#-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (text.length <= max) return text
  return `${text.slice(0, max - 1)}…`
}

async function main() {
  let entries
  try {
    entries = await fs.readdir(vaultRoot, { withFileTypes: true })
  } catch (err) {
    console.error('Vault not found:', vaultRoot)
    throw err
  }

  const skills = []
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('.')) continue
    const rel = path.posix.join('skills/vault', entry.name, 'SKILL.md')
    const abs = path.join(vaultRoot, entry.name, 'SKILL.md')
    let raw
    try {
      raw = await fs.readFile(abs, 'utf8')
    } catch {
      console.warn('skip (no SKILL.md):', entry.name)
      continue
    }
    const { meta, body } = parseFrontmatter(raw)
    const id = String(meta.name || entry.name)
    const tags = Array.isArray(meta.tags)
      ? meta.tags
      : typeof meta.tags === 'string' && meta.tags
        ? [meta.tags]
        : []
    skills.push({
      id,
      slug: entry.name,
      path: rel,
      name: id,
      title: body.match(/^#\s+(.+)$/m)?.[1]?.trim() || id,
      description: String(meta.description || ''),
      category: String(meta.category || 'other'),
      source: String(meta.source || 'awesome-ai'),
      tags,
      excerpt: excerpt(body),
    })
  }

  skills.sort((a, b) => {
    const c = a.category.localeCompare(b.category)
    if (c !== 0) return c
    return a.id.localeCompare(b.id)
  })

  const categories = [...new Set(skills.map((s) => s.category))].sort()
  const tagSet = new Set()
  for (const s of skills) for (const t of s.tags) tagSet.add(t)
  const payload = {
    generatedAt: new Date().toISOString(),
    count: skills.length,
    categories,
    tags: [...tagSet].sort(),
    skills,
  }

  await fs.mkdir(path.dirname(outPath), { recursive: true })
  await fs.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
  console.log(`Wrote ${skills.length} skills → ${path.relative(repoRoot, outPath)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
