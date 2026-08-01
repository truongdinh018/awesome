import { useEffect, useId, useMemo, useRef, useState } from 'react'
import type { TrendingWeek } from '../lib/trending'
import { filterTrendingRepos } from '../lib/trendingSearch'
import { ThemeToggle } from './ThemeToggle'
import type { ThemeMode } from '../theme'

type Props = {
  data: TrendingWeek | null
  loading: boolean
  error: string | null
  query: string
  theme: ThemeMode
  onToggleTheme: () => void
  onQueryChange: (q: string) => void
  onOpenCatalog: () => void
  onOpenArticle: (path: string) => void
  onOpenHub: (path: string) => void
}

const SEARCH_DEBOUNCE_MS = 280

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

function repoDescription(repo: TrendingWeek['repos'][number]): string {
  return (
    repo.descriptionVi?.trim() ||
    repo.catalogExcerpt?.trim() ||
    repo.description?.trim() ||
    'Chưa có mô tả tiếng Việt.'
  )
}

export function Trending({
  data,
  loading,
  error,
  query,
  theme,
  onToggleTheme,
  onQueryChange,
  onOpenCatalog,
  onOpenArticle,
  onOpenHub,
}: Props) {
  const searchRef = useRef<HTMLInputElement>(null)
  const filterBtnRef = useRef<HTMLButtonElement>(null)
  const drawerTitleId = useId()
  const [filter, setFilter] = useState<'all' | 'new' | 'known'>('all')
  const [draftQuery, setDraftQuery] = useState(query)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    setDraftQuery(query)
  }, [query])

  useEffect(() => {
    if (draftQuery === query) return
    setSearching(true)
    const timer = window.setTimeout(() => {
      onQueryChange(draftQuery)
    }, SEARCH_DEBOUNCE_MS)
    return () => window.clearTimeout(timer)
  }, [draftQuery, query, onQueryChange])

  useEffect(() => {
    if (searching && draftQuery === query) {
      const id = window.setTimeout(() => setSearching(false), 40)
      return () => window.clearTimeout(id)
    }
  }, [searching, draftQuery, query])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setDrawerOpen(true)
      }
      if (e.key === 'Escape' && drawerOpen) {
        e.preventDefault()
        setDrawerOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [drawerOpen])

  useEffect(() => {
    if (!drawerOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const id = window.requestAnimationFrame(() => {
      searchRef.current?.focus()
      searchRef.current?.select()
    })
    return () => {
      document.body.style.overflow = prev
      window.cancelAnimationFrame(id)
      filterBtnRef.current?.focus()
    }
  }, [drawerOpen])

  const repos = data?.repos ?? []
  const statusFiltered =
    filter === 'all' ? repos : repos.filter((r) => r.status === filter)

  const filtered = useMemo(
    () => filterTrendingRepos(statusFiltered, query),
    [statusFiltered, query],
  )

  const activeFilterCount = (query.trim() ? 1 : 0) + (filter !== 'all' ? 1 : 0)

  const clearAllFilters = () => {
    setFilter('all')
    setDraftQuery('')
    onQueryChange('')
  }

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
          <button
            ref={filterBtnRef}
            type="button"
            className={`filter-drawer-btn${activeFilterCount > 0 ? ' has-filters' : ''}`}
            onClick={() => setDrawerOpen(true)}
            aria-expanded={drawerOpen}
            aria-controls="trending-filter-drawer"
          >
            <span aria-hidden>⌕</span>
            <span>Tìm</span>
            {activeFilterCount > 0 ? (
              <span className="filter-drawer-count">{activeFilterCount}</span>
            ) : (
              <kbd className="search-kbd">Ctrl K</kbd>
            )}
          </button>
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
            Repo AI nổi bật trên GitHub trong 7 ngày qua — mô tả tiếng Việt, lọc theo trạng thái và tìm theo tên repo, tag, ngôn ngữ.
          </p>
          {data ? (
            <p className="hero-meta" aria-live="polite">
              {searching ? (
                <span className="hero-meta-loading">Đang tìm…</span>
              ) : (
                <>
                  <strong>{filtered.length}</strong> đang hiện
                  <span aria-hidden>·</span>
                  <strong>{repos.length}</strong> repo
                  <span aria-hidden>·</span>
                  <strong>{data.week}</strong>
                  <span aria-hidden>·</span>
                  {data.weekStart} → {data.weekEnd}
                  <span aria-hidden>·</span>
                  <strong>{data.summary.newCount}</strong> mới
                  <span aria-hidden>·</span>
                  <strong>{data.summary.knownCount}</strong> đã có bài
                  <span aria-hidden>·</span>
                  cập nhật {formatDate(data.fetchedAt)}
                </>
              )}
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

      {drawerOpen ? (
        <div className="filter-drawer-root">
          <button
            type="button"
            className="filter-drawer-backdrop"
            aria-label="Đóng tìm kiếm"
            onClick={() => setDrawerOpen(false)}
          />
          <aside
            id="trending-filter-drawer"
            className="filter-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby={drawerTitleId}
          >
            <div className="filter-drawer-header">
              <h2 id={drawerTitleId} className="filter-drawer-title">
                Tìm trending
              </h2>
              <div className="filter-drawer-header-actions">
                {activeFilterCount > 0 ? (
                  <button type="button" className="clear-tags" onClick={clearAllFilters}>
                    Xóa hết
                  </button>
                ) : null}
                <button
                  type="button"
                  className="filter-drawer-close"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Đóng"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="catalog-filters" aria-label="Tìm kiếm trending">
              <div className="filter-block search-block">
                <label className="filter-label" htmlFor="trending-search">
                  Tìm kiếm
                </label>
                <div className={`search-shell${searching ? ' is-loading' : ''}`}>
                  <span className="search-icon" aria-hidden>
                    {searching ? <span className="spinner spinner-inline" /> : '⌕'}
                  </span>
                  <input
                    id="trending-search"
                    ref={searchRef}
                    type="search"
                    className="catalog-search"
                    placeholder="Repo, mô tả tiếng Việt, tag, ngôn ngữ…"
                    value={draftQuery}
                    onChange={(e) => setDraftQuery(e.target.value)}
                    aria-busy={searching}
                  />
                  <kbd className="search-kbd">Ctrl K</kbd>
                </div>
              </div>

              <div className="filter-block">
                <p className="filter-label">Trạng thái</p>
                <div className="trending-filters trending-filters-drawer">
                  {(['all', 'new', 'known'] as const).map((key) => (
                    <button
                      key={key}
                      type="button"
                      className={`trending-filter-btn${filter === key ? ' active' : ''}`}
                      onClick={() => setFilter(key)}
                    >
                      {key === 'all'
                        ? 'Tất cả'
                        : key === 'new'
                          ? 'Chưa có bài'
                          : 'Đã có bài'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      ) : null}

      {error ? <div className="banner error catalog-banner">{error}</div> : null}

      {loading ? (
        <p className="muted catalog-loading">Đang tải trending…</p>
      ) : filtered.length === 0 ? (
        <p className="muted trending-empty">
          {query.trim()
            ? 'Không có repo khớp từ khóa. Thử tên repo, tag hoặc xóa bộ lọc.'
            : 'Chưa có dữ liệu tuần này. Chạy npm run fetch:trending hoặc đợi workflow hàng tuần.'}
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

              <p className="trending-desc">{repoDescription(repo)}</p>

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
