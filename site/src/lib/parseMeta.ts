export type CatalogItem = {
  path: string
  slug: string
  title: string
  domain: string
  category: string
  tags: string[]
  repo: string
  repoUrl: string
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

/**
 * Cut on real sentence boundaries (. ! ?) — not ellipsis (…) or file
 * extensions (.md). Ends when punctuation is followed by a capital / end.
 */
function takeSentences(text: string, count = 1): string {
  const ends: number[] = []
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (ch !== '.' && ch !== '!' && ch !== '?') continue
    // Skip ASCII ellipsis ...
    if (ch === '.' && text.slice(i, i + 3) === '...') {
      i += 2
      continue
    }
    // Skip initials like "A. "
    if (
      ch === '.' &&
      i > 0 &&
      /[A-ZÀ-Ỵ]/i.test(text[i - 1] ?? '') &&
      (i === 1 || /\s/.test(text[i - 2] ?? ''))
    ) {
      continue
    }
    const rest = text.slice(i + 1).trimStart()
    if (rest && !/^\p{Lu}/u.test(rest)) continue
    ends.push(i + 1)
    if (ends.length >= count) break
  }
  if (ends.length === 0) return text
  return text.slice(0, ends[count - 1]!).trim()
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
    .replace(/…+/g, '…')
    .replace(/\s+/g, ' ')
    .trim()
  return takeSentences(plain, 1)
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
  const repoMatch = head.match(/\*\*Repo:\*\*\s*\[([^\]]+)]\(([^)]+)\)/i)
  const repo = repoMatch?.[1]?.trim()
    ?? head.match(/\*\*Repo:\*\*\s*(\S+)/i)?.[1]?.trim()
    ?? ''
  let repoUrl = repoMatch?.[2]?.trim() ?? ''
  if (!repoUrl && repo && /^[\w.-]+\/[\w.-]+$/.test(repo)) {
    repoUrl = `https://github.com/${repo}`
  }
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
    repoUrl,
    stars,
    excerpt: extractExcerpt(content),
  }
}
