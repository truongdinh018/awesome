import fs from 'node:fs/promises'
import path from 'node:path'
import {
  parseArticleMeta,
  shouldIndexArticle,
} from '../../src/lib/parseMeta.ts'

/** Load known repos from article markdown and repos/README.md. */
export async function loadKnownRepos(contentRoot) {
  const known = new Map()

  const techFiles = await listMdFiles(contentRoot, 'technologies')
  for (const rel of techFiles) {
    if (!shouldIndexArticle(rel)) continue
    try {
      const content = await fs.readFile(path.join(contentRoot, rel), 'utf8')
      const meta = parseArticleMeta(rel, content)
      if (!meta.repo) continue
      const key = meta.repo.toLowerCase()
      known.set(key, {
        fullName: meta.repo,
        catalogPath: rel.replace(/\\/g, '/'),
        title: meta.title,
        stars: meta.stars,
        domain: meta.domain,
        excerpt: meta.excerpt,
      })
    } catch {
      /* skip */
    }
  }

  try {
    const starsMd = await fs.readFile(
      path.join(contentRoot, 'repos/README.md'),
      'utf8',
    )
    for (const row of starsMd.split('\n')) {
      const m = row.match(
        /\|\s*\d+\s*\|\s*\[([^\]]+)\]\((https:\/\/github\.com\/[^)]+)\)/,
      )
      if (!m) continue
      const fullName = m[1].trim()
      const key = fullName.toLowerCase()
      if (!known.has(key)) {
        known.set(key, { fullName, catalogPath: null })
      }
    }
  } catch {
    /* repos/README.md optional */
  }

  return known
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
