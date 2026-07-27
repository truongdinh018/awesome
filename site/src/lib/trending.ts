export type TrendingRepo = {
  fullName: string
  url: string
  description: string
  language: string
  stars: number
  starsDelta: number | null
  forks: number
  topics: string[]
  pushedAt: string | null
  inCatalog: boolean
  catalogPath: string | null
  catalogTitle: string | null
  catalogExcerpt: string | null
  status: 'new' | 'known'
  highlights: string[]
  score: number
}

export type TrendingWeek = {
  week: string
  weekStart: string
  weekEnd: string
  fetchedAt: string
  summary: {
    total: number
    newCount: number
    knownCount: number
    catalogSize: number
  }
  repos: TrendingRepo[]
}
