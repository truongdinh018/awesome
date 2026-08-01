import type { TrendingRepo } from './trending'

function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
}

function tokenize(query: string): string[] {
  return normalize(query)
    .split(/[\s,;/|]+/)
    .map((t) => t.trim())
    .filter((t) => t.length >= 2)
}

export function filterTrendingRepos(
  repos: TrendingRepo[],
  query: string,
): TrendingRepo[] {
  const q = query.trim()
  if (!q) return repos

  const tokens = tokenize(q)
  const whole = normalize(q)

  return repos
    .map((repo) => {
      const hay = normalize(
        [
          repo.fullName,
          repo.description,
          repo.descriptionVi,
          repo.catalogTitle ?? '',
          repo.language,
          repo.status === 'new' ? 'moi chua co bai' : 'da co bai',
          ...repo.topics,
          ...repo.highlights,
        ].join(' '),
      )

      if (!tokens.length) {
        return hay.includes(whole) ? { repo, score: 10 } : null
      }

      let score = 0
      for (const token of tokens) {
        if (normalize(repo.fullName).includes(token)) score += 8
        if (normalize(repo.catalogTitle ?? '').includes(token)) score += 6
        if (normalize(repo.descriptionVi).includes(token)) score += 4
        if (normalize(repo.description).includes(token)) score += 2
        if (repo.topics.some((t) => normalize(t).includes(token))) score += 3
        if (normalize(repo.language).includes(token)) score += 2
        if (repo.highlights.some((h) => normalize(h).includes(token))) score += 2
        if (hay.includes(token)) score += 1
      }

      return score > 0 ? { repo, score } : null
    })
    .filter((row): row is { repo: TrendingRepo; score: number } => row != null)
    .sort((a, b) => b.score - a.score || b.repo.score - a.repo.score)
    .map((row) => row.repo)
}
