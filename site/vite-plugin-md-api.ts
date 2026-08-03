import fs from 'node:fs/promises'
import path from 'node:path'
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'
import {
  parseArticleMeta,
  shouldIndexArticle,
  type CatalogItem,
} from './src/lib/parseMeta'

const HUB_FILES = [
  'README.md',
  'USE-CASES.md',
  'TAGS.md',
  'CHANGELOG.md',
  'categories/README.md',
  'repos/README.md',
  'technologies/README.md',
  'technologies/WRITING.md',
  'data/trending/README.md',
  'data/trending/pending.md',
  'skills/README.md',
  'skills/WRITING.md',
]

type TreeNode = {
  name: string
  path: string
  type: 'file' | 'dir'
  children?: TreeNode[]
}

function sendJson(res: ServerResponse, status: number, body: unknown) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(body))
}

async function readBody(req: IncomingMessage): Promise<string> {
  const chunks: Buffer[] = []
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}

function resolveSafe(root: string, rel: string): string | null {
  if (!rel || rel.includes('\0')) return null
  const normalized = rel.replace(/\\/g, '/').replace(/^\/+/, '')
  if (normalized.includes('..')) return null
  if (!normalized.toLowerCase().endsWith('.md')) return null
  const abs = path.resolve(root, normalized)
  const rootAbs = path.resolve(root)
  if (abs !== rootAbs && !abs.startsWith(rootAbs + path.sep)) return null
  return abs
}

async function walkMdDir(root: string, dirRel: string): Promise<TreeNode[]> {
  const absDir = path.join(root, dirRel)
  let entries
  try {
    entries = await fs.readdir(absDir, { withFileTypes: true })
  } catch {
    return []
  }

  const dirs: TreeNode[] = []
  const files: TreeNode[] = []

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    const rel = path.posix.join(dirRel.replace(/\\/g, '/'), entry.name)
    if (entry.isDirectory()) {
      const children = await walkMdDir(root, rel)
      if (children.length > 0) {
        dirs.push({ name: entry.name, path: rel, type: 'dir', children })
      }
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      files.push({ name: entry.name, path: rel, type: 'file' })
    }
  }

  dirs.sort((a, b) => a.name.localeCompare(b.name))
  files.sort((a, b) => a.name.localeCompare(b.name))
  return [...dirs, ...files]
}

async function listMdFiles(root: string, dirRel: string): Promise<string[]> {
  const absDir = path.join(root, dirRel)
  let entries
  try {
    entries = await fs.readdir(absDir, { withFileTypes: true })
  } catch {
    return []
  }
  const out: string[] = []
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

async function buildCatalog(root: string): Promise<{
  items: CatalogItem[]
  tags: string[]
  domains: string[]
}> {
  const files = await listMdFiles(root, 'technologies')
  const items: CatalogItem[] = []
  for (const rel of files) {
    if (!shouldIndexArticle(rel)) continue
    try {
      const content = await fs.readFile(path.join(root, rel), 'utf8')
      items.push(parseArticleMeta(rel, content))
    } catch {
      /* skip unreadable */
    }
  }
  items.sort((a, b) => a.title.localeCompare(b.title, 'vi'))
  const tagSet = new Set<string>()
  const domainSet = new Set<string>()
  for (const item of items) {
    domainSet.add(item.domain)
    for (const t of item.tags) tagSet.add(t)
  }
  return {
    items,
    tags: [...tagSet].sort((a, b) => a.localeCompare(b)),
    domains: [...domainSet].sort((a, b) => a.localeCompare(b)),
  }
}

async function buildTree(root: string): Promise<TreeNode[]> {
  const hub: TreeNode[] = []
  for (const rel of HUB_FILES) {
    try {
      await fs.access(path.join(root, rel))
      hub.push({ name: path.basename(rel), path: rel, type: 'file' })
    } catch {
      /* skip missing */
    }
  }

  const techChildren = await walkMdDir(root, 'technologies')
  return [
    { name: 'Hub', path: '__hub__', type: 'dir', children: hub },
    {
      name: 'technologies',
      path: 'technologies',
      type: 'dir',
      children: techChildren,
    },
  ]
}

function parseSkillFrontmatter(raw: string): {
  meta: Record<string, string | string[]>
  body: string
} {
  if (!raw.startsWith('---')) return { meta: {}, body: raw }
  const end = raw.indexOf('\n---', 3)
  if (end === -1) return { meta: {}, body: raw }
  const fm = raw.slice(3, end).trim()
  const body = raw.slice(end + 4).replace(/^\n/, '')
  const meta: Record<string, string | string[]> = {}
  for (const line of fm.split('\n')) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!m) continue
    const key = m[1]
    let val: string | string[] = m[2].trim()
    if (typeof val === 'string' && val.startsWith('[') && val.endsWith(']')) {
      val = val
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    } else if (typeof val === 'string') {
      val = val.replace(/^["']|["']$/g, '')
    }
    meta[key] = val
  }
  return { meta, body }
}

function skillExcerpt(body: string, max = 180): string {
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

export type SkillItem = {
  id: string
  slug: string
  path: string
  name: string
  title: string
  description: string
  category: string
  source: string
  tags: string[]
  excerpt: string
}

async function buildSkillsIndex(root: string): Promise<{
  generatedAt: string
  count: number
  categories: string[]
  tags: string[]
  skills: SkillItem[]
}> {
  const vaultRel = 'skills/vault'
  const absVault = path.join(root, vaultRel)
  let entries
  try {
    entries = await fs.readdir(absVault, { withFileTypes: true })
  } catch {
    return {
      generatedAt: new Date().toISOString(),
      count: 0,
      categories: [],
      tags: [],
      skills: [],
    }
  }

  const skills: SkillItem[] = []
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('.')) continue
    const rel = path.posix.join(vaultRel, entry.name, 'SKILL.md')
    try {
      const raw = await fs.readFile(path.join(root, rel), 'utf8')
      const { meta, body } = parseSkillFrontmatter(raw)
      const id = String(meta.name || entry.name)
      const tags = Array.isArray(meta.tags)
        ? meta.tags.map(String)
        : typeof meta.tags === 'string' && meta.tags
          ? [String(meta.tags)]
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
        excerpt: skillExcerpt(body),
      })
    } catch {
      /* skip */
    }
  }

  skills.sort((a, b) => {
    const c = a.category.localeCompare(b.category)
    if (c !== 0) return c
    return a.id.localeCompare(b.id)
  })
  const categories = [...new Set(skills.map((s) => s.category))].sort()
  const tagSet = new Set<string>()
  for (const s of skills) for (const t of s.tags) tagSet.add(t)
  return {
    generatedAt: new Date().toISOString(),
    count: skills.length,
    categories,
    tags: [...tagSet].sort(),
    skills,
  }
}

async function collectFiles(
  root: string,
): Promise<Record<string, string>> {
  const paths = new Set<string>([
    ...HUB_FILES,
    ...(await listMdFiles(root, 'technologies')),
    ...(await listMdFiles(root, 'skills')),
  ])
  const files: Record<string, string> = {}
  for (const rel of paths) {
    const abs = resolveSafe(root, rel)
    if (!abs) continue
    try {
      files[rel.replace(/\\/g, '/')] = await fs.readFile(abs, 'utf8')
    } catch {
      /* skip */
    }
  }
  return files
}

async function buildStaticPayload(root: string) {
  const [catalog, tree, files, skills] = await Promise.all([
    buildCatalog(root),
    buildTree(root),
    collectFiles(root),
    buildSkillsIndex(root),
  ])
  return { catalog, tree, files, skills }
}

export function mdApiPlugin(contentRoot: string): Plugin {
  const root = path.resolve(contentRoot)

  return {
    name: 'awesome-ai-md-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ? new URL(req.url, 'http://localhost') : null
        if (!url || !url.pathname.startsWith('/api/')) return next()

        try {
          if (url.pathname === '/api/catalog' && req.method === 'GET') {
            const catalog = await buildCatalog(root)
            return sendJson(res, 200, catalog)
          }

          if (url.pathname === '/api/skills' && req.method === 'GET') {
            const skills = await buildSkillsIndex(root)
            return sendJson(res, 200, skills)
          }

          if (url.pathname === '/api/tree' && req.method === 'GET') {
            const tree = await buildTree(root)
            return sendJson(res, 200, { root, tree })
          }

          if (url.pathname === '/api/file' && req.method === 'GET') {
            const rel = url.searchParams.get('path') ?? ''
            const abs = resolveSafe(root, rel)
            if (!abs) return sendJson(res, 400, { error: 'Invalid path' })
            try {
              const content = await fs.readFile(abs, 'utf8')
              return sendJson(res, 200, {
                path: rel.replace(/\\/g, '/'),
                content,
              })
            } catch {
              return sendJson(res, 404, { error: 'File not found' })
            }
          }

          if (url.pathname === '/api/file' && req.method === 'PUT') {
            const raw = await readBody(req)
            let body: { path?: string; content?: string }
            try {
              body = JSON.parse(raw) as { path?: string; content?: string }
            } catch {
              return sendJson(res, 400, { error: 'Invalid JSON' })
            }
            if (typeof body.path !== 'string' || typeof body.content !== 'string') {
              return sendJson(res, 400, { error: 'path and content required' })
            }
            const abs = resolveSafe(root, body.path)
            if (!abs) return sendJson(res, 400, { error: 'Invalid path' })
            try {
              await fs.access(abs)
            } catch {
              return sendJson(res, 404, { error: 'File not found' })
            }
            await fs.writeFile(abs, body.content, 'utf8')
            return sendJson(res, 200, {
              path: body.path.replace(/\\/g, '/'),
              ok: true,
            })
          }

          return sendJson(res, 405, { error: 'Method not allowed' })
        } catch (err) {
          const message = err instanceof Error ? err.message : 'Server error'
          return sendJson(res, 500, { error: message })
        }
      })
    },
    async generateBundle() {
      const { catalog, tree, files, skills } = await buildStaticPayload(root)
      this.emitFile({
        type: 'asset',
        fileName: 'data/catalog.json',
        source: JSON.stringify(catalog),
      })
      this.emitFile({
        type: 'asset',
        fileName: 'data/tree.json',
        source: JSON.stringify({ tree }),
      })
      this.emitFile({
        type: 'asset',
        fileName: 'data/files.json',
        source: JSON.stringify(files),
      })
      this.emitFile({
        type: 'asset',
        fileName: 'data/skills.json',
        source: JSON.stringify(skills),
      })
      this.emitFile({
        type: 'asset',
        fileName: '.nojekyll',
        source: '',
      })
    },
  }
}
