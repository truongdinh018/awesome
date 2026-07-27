import { useState } from 'react'
import type { TrendingWeek } from '../lib/trending'
import { ThemeToggle } from './ThemeToggle'
import type { ThemeMode } from '../theme'

type Props = {
  data: TrendingWeek | null
  loading: boolean
  error: string | null
  theme: ThemeMode
  onToggleTheme: () => void
  onOpenCatalog: () => void
  onOpenArticle: (path: string) => void
  onOpenHub: (path: string) => void
}

function formatStars(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`
  return String(n)
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('vi-VN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return iso.slice(0, 10)
  }
}

export function Trending({
  data,
  loading,
  error,
  theme,
  onToggleTheme,
  onOpenCatalog,
  onOpenArticle,
  onOpenHub,
}: Props) {
  const [filter, setFilter] = useState<'all' | 'new' | 'known'>('all')

  const repos = data?.repos ?? []
  const filtered =
    filter === 'all' ? repos : repos.filter((r) => r.status === filter)

  return (
    <div className="catalog trending-page">
      <div className="catalog-orb catalog-orb-a" aria-hidden />
      <div className="catalog-orb catalog-orb-b" aria-hidden />

      <header className="site-top">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden />
          <span className="brand-name">Awesome AI</span>
        </div>
        <div className="site-top-actions">
          <nav className="hub-links" aria-label="Hub">
            <button type="button" className="hub-link" onClick={onOpenCatalog}>
              Catalog
            </button>
            <button type="button" className="hub-link hub-link-active">
              Trending
            </button>
            <button type="button" className="hub-link" onClick={() => onOpenHub('README.md')}>
              Hub
            </button>
            <button type="button" className="hub-link" onClick={() => onOpenHub('repos/README.md')}>
              Stars
            </button>
            <button type="button" className="hub-link" onClick={() => onOpenHub('data/trending/pending.md')}>
              Chờ viết
            </button>
          </nav>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </header>

      <section className="catalog-hero">
        <div className="hero-copy">
          <p className="catalog-kicker">GitHub · cập nhật hàng tuần</p>
          <h1 className="catalog-title">
            Trending <em>tuần này</em>
          </h1>
          <p className="catalog-lead">
            Repo AI nổi bật trên GitHub trong 7 ngày qua. Repo chưa có trong catalog được đưa vào hàng chờ; repo đã có bài hiển thị điểm mới (tăng ★, release, push code).
          </p>
          {data ? (
            <p className="hero-meta">
              <strong>{data.week}</strong>
              <span aria-hidden>·</span>
              {data.weekStart} → {data.weekEnd}
              <span aria-hidden>·</span>
              <strong>{data.summary.newCount}</strong> mới
              <span aria-hidden>·</span>
              <strong>{data.summary.knownCount}</strong> đã có bài
              <span aria-hidden>·</span>
              cập nhật {formatDate(data.fetchedAt)}
            </p>
          ) : null}
        </div>
      </section>

      <div className="trending-filters" role="tablist" aria-label="Lọc trending">
        {(['all', 'new', 'known'] as const).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={filter === key}
            className={`trending-filter-btn${filter === key ? ' active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {key === 'all' ? 'Tất cả' : key === 'new' ? 'Chưa có bài' : 'Đã có bài'}
          </button>
        ))}
      </div>

      {error ? <div className="banner error catalog-banner">{error}</div> : null}

      {loading ? (
        <p className="muted catalog-loading">Đang tải trending…</p>
      ) : filtered.length === 0 ? (
        <p className="muted trending-empty">
          Chưa có dữ liệu tuần này. Chạy <code>npm run fetch:trending</code> hoặc đợi workflow hàng tuần.
        </p>
      ) : (
        <ul className="trending-list">
          {filtered.map((repo) => (
            <li key={repo.fullName} className="trending-card">
              <div className="trending-card-head">
                <div className="trending-card-title-row">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trending-repo-link"
                  >
                    {repo.fullName}
                  </a>
                  <span
                    className={`trending-badge trending-badge-${repo.status}`}
                  >
                    {repo.status === 'new' ? 'Mới' : 'Đã có bài'}
                  </span>
                </div>
                <div className="trending-meta">
                  <span>⭐ {formatStars(repo.stars)}</span>
                  {repo.starsDelta != null && repo.starsDelta > 0 ? (
                    <span className="trending-delta">
                      +{formatStars(repo.starsDelta)} tuần này
                    </span>
                  ) : null}
                  {repo.language ? <span>{repo.language}</span> : null}
                  {repo.forks > 0 ? <span>{formatStars(repo.forks)} forks</span> : null}
                </div>
              </div>

              <p className="trending-desc">
                {repo.status === 'known' && repo.catalogExcerpt
                  ? repo.catalogExcerpt
                  : repo.description || 'Chưa có mô tả trên GitHub.'}
              </p>

              {repo.highlights.length > 0 ? (
                <ul className="trending-highlights">
                  {repo.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}

              {repo.topics.length > 0 ? (
                <div className="trending-topics">
                  {repo.topics.slice(0, 6).map((t) => (
                    <span key={t} className="trending-topic">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="trending-card-actions">
                {repo.catalogPath ? (
                  <button
                    type="button"
                    className="btn primary trending-read-btn"
                    onClick={() => onOpenArticle(repo.catalogPath!)}
                  >
                    Đọc bài · {repo.catalogTitle ?? repo.fullName}
                  </button>
                ) : (
                  <span className="trending-pending-note">
                    Chưa có bài — xem{' '}
                    <button
                      type="button"
                      className="inline-link"
                      onClick={() => onOpenHub('data/trending/pending.md')}
                    >
                      hàng chờ viết
                    </button>
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
