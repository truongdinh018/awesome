export type RouteState =
  | { view: 'catalog'; q: string; domains: string[]; tags: string[] }
  | { view: 'article'; doc: string }

export function readRoute(url: URL = new URL(window.location.href)): RouteState {
  const doc = url.searchParams.get('doc')?.trim()
  if (doc) {
    return { view: 'article', doc }
  }

  const domains = [
    ...url.searchParams.getAll('domain').filter(Boolean),
  ]
  // legacy single ?domain=devtools when already collected; keep unique
  const uniqueDomains = [...new Set(domains)].filter((d) => d !== 'all')

  return {
    view: 'catalog',
    q: url.searchParams.get('q') ?? '',
    domains: uniqueDomains,
    tags: url.searchParams.getAll('tag').filter(Boolean),
  }
}

export function catalogHref(opts: {
  q?: string
  domains?: string[]
  tags?: string[]
} = {}): string {
  const params = new URLSearchParams()
  const q = opts.q?.trim()
  if (q) params.set('q', q)
  for (const domain of opts.domains ?? []) {
    if (domain && domain !== 'all') params.append('domain', domain)
  }
  for (const tag of opts.tags ?? []) {
    if (tag) params.append('tag', tag)
  }
  const qs = params.toString()
  return qs ? `/?${qs}` : '/'
}

export function articleHref(doc: string): string {
  const params = new URLSearchParams()
  params.set('doc', doc)
  return `/?${params.toString()}`
}

export function navigate(
  href: string,
  mode: 'push' | 'replace' = 'push',
): void {
  const url = new URL(href, window.location.origin)
  if (mode === 'replace') {
    window.history.replaceState(null, '', url.pathname + url.search)
  } else {
    window.history.pushState(null, '', url.pathname + url.search)
  }
}
