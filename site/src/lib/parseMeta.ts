export type CatalogItem = {
  path: string
  slug: string
  title: string
  domain: string
  category: string
  tags: string[]
  repo: string
  stars: string
  excerpt: string
}

const SKIP = new Set([
  'readme.md',
  'writing.md',
  'changelog.md',
  'tags.md',
])

export function shouldIndexArticle(relPath: string): boolean {
  const base = relPath.split('/').pop()?.toLowerCase() ?? ''
  if (!base.endsWith('.md') || SKIP.has(base)) return false
  if (!relPath.startsWith('technologies/')) return false
  return true
}

function extractTags(block: string): string[] {
  const tagsLine = block.match(/\*\*Tags:\*\*\s*(.+)/i)?.[1]
  if (!tagsLine) return []
  const found = [...tagsLine.matchAll(/`([^`]+)`/g)].map((m) => m[1].trim())
  return [...new Set(found.filter(Boolean))]
}

function extractExcerpt(md: string): string {
  const section = md.match(
    /##\s*Đây là gì\?\s*\n([\s\S]*?)(?=\n##\s|\n---+|\s*$)/i,
  )
  const body = (section?.[1] ?? md).replace(/```[\s\S]*?```/g, '')
  const plain = body
    .replace(/!\[[^\]]*]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/[*_>#`|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (plain.length <= 180) return plain
  return `${plain.slice(0, 177).trim()}…`
}

export function parseArticleMeta(relPath: string, content: string): CatalogItem {
  const parts = relPath.replace(/\\/g, '/').split('/')
  const slug = (parts[parts.length - 1] ?? '').replace(/\.md$/i, '')
  const domain =
    parts[0] === 'technologies' && parts.length >= 3 ? parts[1] : 'other'

  const title =
    content.match(/^#\s+(.+)$/m)?.[1]?.trim() ||
    slug.replace(/-/g, ' ')

  const head = content.slice(0, 1200)
  const category =
    head.match(/\*\*Category:\*\*\s*(.+)/i)?.[1]?.trim().replace(/\s+/g, ' ') ??
    ''
  const repo =
    head
      .match(/\*\*Repo:\*\*\s*\[([^\]]+)]\(([^)]+)\)/i)?.[1]
      ?.trim() ??
    head.match(/\*\*Repo:\*\*\s*(\S+)/i)?.[1]?.trim() ??
    ''
  const stars =
    head.match(/\*\*⭐\*\*\s*([^\n·*]+)/)?.[1]?.trim() ||
    head.match(/⭐\*\*\s*([^\n·]+)/)?.[1]?.trim() ||
    ''

  return {
    path: relPath.replace(/\\/g, '/'),
    slug,
    title,
    domain,
    category,
    tags: extractTags(head),
    repo,
    stars,
    excerpt: extractExcerpt(content),
  }
}
