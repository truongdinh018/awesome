import { useEffect, useId, useMemo, useRef, useState } from 'react'
import type { CatalogItem } from '../api'
import { domainHue, domainLabel, hueStyle, tagHue } from '../domainLabels'
import { tagLabel } from '../tagTaxonomy'
import { ThemeToggle } from './ThemeToggle'
import { TagMultiSelect, type TagMatchMode } from './TagMultiSelect'
import { DomainMultiSelect } from './DomainMultiSelect'
import type { ThemeMode } from '../theme'
import {
  applySearchRanking,
  effectiveStatus,
  keywordFilter,
  loadArticlesStatus,
  loadSeenPaths,
  markPathSeen,
  semanticSearch,
  subscribeEmbedderStatus,
  type ArticleStatus,
  type ArticleStatusInfo,
  type EmbedderStatus,
  type SearchHit,
  type SearchMode,
} from '../lib/semanticSearch'

type Props = {
  items: CatalogItem[]
  tags: string[]
  domains: string[]
  query: string
  activeDomains: string[]
  activeTags: string[]
  theme: ThemeMode
  onToggleTheme: () => void
  onFiltersChange: (next: {
    q: string
    domains: string[]
    tags: string[]
  }) => void
  onOpen: (path: string) => void
  onOpenHub: (path: string) => void
}

const SEARCH_DEBOUNCE_MS = 320
const TAG_MODE_KEY = 'awesome-tag-match-mode'
const SEARCH_MODE_KEY = 'awesome-search-mode'

function statusBadgeLabel(status: ArticleStatus): string | null {
  if (status === 'new') return 'Mới'
  if (status === 'updated') return 'Cập nhật'
  return null
}

export function Catalog({
  items,
  tags,
  domains,
  query,
  activeDomains,
  activeTags,
  theme,
  onToggleTheme,
  onFiltersChange,
  onOpen,
  onOpenHub,
}: Props) {
  const searchRef = useRef<HTMLInputElement>(null)
  const filterBtnRef = useRef<HTMLButtonElement>(null)
  const drawerTitleId = useId()
  const [draftQuery, setDraftQuery] = useState(query)
  const [searching, setSearching] = useState(false)
  const [displayItems, setDisplayItems] = useState<CatalogItem[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [tagMatchMode, setTagMatchMode] = useState<TagMatchMode>(() => {
    try {
      return localStorage.getItem(TAG_MODE_KEY) === 'or' ? 'or' : 'and'
    } catch {
      return 'and'
    }
  })
  const [searchMode, setSearchMode] = useState<SearchMode>(() => {
    try {
      const v = localStorage.getItem(SEARCH_MODE_KEY)
      if (v === 'semantic' || v === 'hybrid' || v === 'keyword') return v
    } catch {
      /* ignore */
    }
    return 'hybrid'
  })
  const [statusByPath, setStatusByPath] = useState<
    Record<string, ArticleStatusInfo>
  >({})
  const [seenPaths, setSeenPaths] = useState<Set<string>>(() => loadSeenPaths())
  const [semanticHits, setSemanticHits] = useState<SearchHit[] | null>(null)
  const [embedderStatus, setEmbedderStatus] =
    useState<EmbedderStatus>('idle')
  const [embedderDetail, setEmbedderDetail] = useState('')
  const searchGen = useRef(0)
  const semanticGen = useRef(0)

  useEffect(() => {
    void loadArticlesStatus().then((data) => {
      if (data?.articles) setStatusByPath(data.articles)
    })
  }, [])

  useEffect(() => {
    // Model loads lazily on first semantic/hybrid search — only subscribe for UI status
    return subscribeEmbedderStatus((status, detail) => {
      setEmbedderStatus(status)
      setEmbedderDetail(detail ?? '')
    })
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(SEARCH_MODE_KEY, searchMode)
    } catch {
      /* ignore */
    }
  }, [searchMode])

  const openDrawer = () => setDrawerOpen(true)
  const closeDrawer = () => setDrawerOpen(false)

  const tagCounts = useMemo(() => {
    const map: Record<string, number> = {}
    for (const item of items) {
      for (const t of item.tags) {
        map[t] = (map[t] ?? 0) + 1
      }
    }
    return map
  }, [items])

  useEffect(() => {
    setDraftQuery(query)
  }, [query])

  useEffect(() => {
    try {
      localStorage.setItem(TAG_MODE_KEY, tagMatchMode)
    } catch {
      /* ignore */
    }
  }, [tagMatchMode])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setDrawerOpen(true)
      }
      if (e.key === 'Escape' && drawerOpen) {
        e.preventDefault()
        closeDrawer()
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

  const filtered = useMemo(() => {
    // Use draftQuery so typing in the drawer filters immediately (URL `query` is debounced)
    const q = draftQuery.trim()
    let list = items.filter((item) => {
      if (activeDomains.length > 0 && !activeDomains.includes(item.domain)) {
        return false
      }
      if (activeTags.length > 0) {
        const hit =
          tagMatchMode === 'and'
            ? activeTags.every((t) => item.tags.includes(t))
            : activeTags.some((t) => item.tags.includes(t))
        if (!hit) return false
      }
      return true
    })

    if (!q) return list

    if (searchMode === 'keyword') {
      return keywordFilter(list, q, tagLabel)
    }

    // Prefer semantic/hybrid hits whenever we have them (keep scores + score order)
    if (semanticHits && semanticHits.length > 0) {
      const ranked = applySearchRanking(list, semanticHits)
      if (ranked.length > 0) return ranked
    }

    // Loading or no vector hits yet → keyword preview (no scores)
    return keywordFilter(list, q, tagLabel)
  }, [
    items,
    draftQuery,
    activeDomains,
    activeTags,
    tagMatchMode,
    searchMode,
    semanticHits,
  ])

  const scoreByPath = useMemo(() => {
    if (searchMode === 'keyword') return null
    if (!semanticHits || semanticHits.length === 0) return null
    const map = new Map<string, number>()
    for (const h of semanticHits) {
      if (h.score > 0) map.set(h.path, h.score)
    }
    return map.size > 0 ? map : null
  }, [semanticHits, searchMode])

  // Semantic / hybrid retrieval — runs on debounced `query` (not every keystroke)
  useEffect(() => {
    const q = query.trim()
    if (!q || searchMode === 'keyword') {
      setSemanticHits(null)
      return
    }

    const gen = ++semanticGen.current
    let cancelled = false
    setSemanticHits(null)
    setSearching(true)

    void (async () => {
      try {
        const hits = await semanticSearch(q, { mode: searchMode, limit: 40 })
        if (cancelled || semanticGen.current !== gen) return
        // Already sorted high → low by cosine in semanticSearch
        setSemanticHits(hits)
      } catch {
        if (cancelled || semanticGen.current !== gen) return
        setSemanticHits([])
      }
    })()

    return () => {
      cancelled = true
    }
  }, [query, searchMode])

  const openArticle = (path: string) => {
    markPathSeen(path)
    setSeenPaths(loadSeenPaths())
    onOpen(path)
  }

  // Debounce text search → apply filters → keep loading until results are ready
  useEffect(() => {
    if (draftQuery === query) return

    const gen = ++searchGen.current
    setSearching(true)

    const timer = window.setTimeout(() => {
      onFiltersChange({
        q: draftQuery,
        domains: activeDomains,
        tags: activeTags,
      })
    }, SEARCH_DEBOUNCE_MS)

    return () => {
      window.clearTimeout(timer)
      // If superseded, later effect owns loading
      if (searchGen.current === gen) {
        /* noop */
      }
    }
  }, [draftQuery, query, activeDomains, activeTags, onFiltersChange])

  // Clear loading only after applied query matches draft and list has been computed
  useEffect(() => {
    if (!searching) {
      setDisplayItems(filtered)
      return
    }
    if (draftQuery !== query) return

    const gen = searchGen.current
    const id = window.requestAnimationFrame(() => {
      window.setTimeout(() => {
        if (searchGen.current !== gen) return
        setDisplayItems(filtered)
        setSearching(false)
      }, 60)
    })
    return () => window.cancelAnimationFrame(id)
  }, [searching, draftQuery, query, filtered])

  const tagModeInit = useRef(true)
  useEffect(() => {
    if (tagModeInit.current) {
      tagModeInit.current = false
      return
    }
    searchGen.current += 1
    setSearching(true)
    const id = window.setTimeout(() => {
      setDisplayItems(filtered)
      setSearching(false)
    }, 40)
    return () => window.clearTimeout(id)
  }, [tagMatchMode, filtered])

  const beginFilter = (next: {
    q: string
    domains: string[]
    tags: string[]
  }) => {
    searchGen.current += 1
    setSearching(true)
    onFiltersChange(next)
  }

  const setActiveDomains = (next: string[]) =>
    beginFilter({ q: query, domains: next, tags: activeTags })

  const setActiveTags = (next: string[]) =>
    beginFilter({ q: query, domains: activeDomains, tags: next })

  const toggleTag = (tag: string) => {
    setActiveTags(
      activeTags.includes(tag)
        ? activeTags.filter((t) => t !== tag)
        : [...activeTags, tag],
    )
  }

  const activeFilterCount =
    (draftQuery.trim() ? 1 : 0) + activeDomains.length + activeTags.length

  const clearAllFilters = () => {
    setDraftQuery('')
    beginFilter({ q: '', domains: [], tags: [] })
  }

  return (
    <div className="catalog">
      <div className="catalog-orb catalog-orb-a" aria-hidden />
      <div className="catalog-orb catalog-orb-b" aria-hidden />

      <header className="site-top">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden />
          <span className="brand-name">Awesome AI</span>
        </div>
        <div className="site-top-actions">
          <nav className="hub-links" aria-label="Hub">
            <button type="button" className="hub-link" onClick={() => onOpenHub('README.md')}>
              Hub
            </button>
            <button type="button" className="hub-link" onClick={() => onOpenHub('USE-CASES.md')}>
              Use cases
            </button>
            <button type="button" className="hub-link" onClick={() => onOpenHub('repos/README.md')}>
              Stars
            </button>
            <button type="button" className="hub-link" onClick={() => onOpenHub('TAGS.md')}>
              Tags
            </button>
            <button
              type="button"
              className="hub-link"
              onClick={() => onOpenHub('technologies/WRITING.md')}
            >
              Writing
            </button>
          </nav>
          <button
            ref={filterBtnRef}
            type="button"
            className={`filter-drawer-btn${activeFilterCount > 0 ? ' has-filters' : ''}`}
            onClick={openDrawer}
            aria-expanded={drawerOpen}
            aria-controls="catalog-filter-drawer"
          >
            <span aria-hidden>⌕</span>
            <span>Lọc</span>
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
          <p className="catalog-kicker">Catalog · tiếng Việt</p>
          <h1 className="catalog-title">
            Awesome <em>AI</em>
          </h1>
          <p className="catalog-lead">
            Kho bài ngắn về tool bạn đã star — lọc domain &amp; tag theo nhóm capability, mở card để đọc Markdown.
          </p>
          <p className="hero-meta" aria-live="polite">
            {searching && embedderStatus === 'loading' ? (
              <span className="hero-meta-loading model-loading">
                Đang tải model tìm kiếm… (lần đầu có thể chậm, lần sau dùng cache)
              </span>
            ) : searching ? (
              <span className="hero-meta-loading">Đang tìm…</span>
            ) : (
              <>
                <strong>{filtered.length}</strong> đang hiện
                <span aria-hidden>·</span>
                <strong>{items.length}</strong> bài
                <span aria-hidden>·</span>
                <strong>{tags.length}</strong> tags
                {searchMode !== 'keyword' && embedderStatus === 'ready' ? (
                  <>
                    <span aria-hidden>·</span>
                    <span className="hero-meta-ready" title={embedderDetail}>
                      semantic sẵn sàng
                    </span>
                  </>
                ) : null}
                {embedderStatus === 'error' ? (
                  <>
                    <span aria-hidden>·</span>
                    <span className="hero-meta-error" title={embedderDetail}>
                      semantic lỗi — dùng từ khóa
                    </span>
                  </>
                ) : null}
                {activeFilterCount > 0 ? (
                  <>
                    <span aria-hidden>·</span>
                    <button
                      type="button"
                      className="hero-filter-chip"
                      onClick={openDrawer}
                    >
                      {activeFilterCount} lọc đang bật
                      {activeTags.length > 0
                        ? ` · ${tagMatchMode.toUpperCase()}`
                        : ''}
                    </button>
                  </>
                ) : null}
              </>
            )}
          </p>
        </div>
      </section>

      {drawerOpen ? (
        <div className="filter-drawer-root">
          <button
            type="button"
            className="filter-drawer-backdrop"
            aria-label="Đóng bộ lọc"
            onClick={closeDrawer}
          />
          <aside
            id="catalog-filter-drawer"
            className="filter-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby={drawerTitleId}
          >
            <div className="filter-drawer-header">
              <h2 id={drawerTitleId} className="filter-drawer-title">
                Bộ lọc
              </h2>
              <div className="filter-drawer-header-actions">
                {activeFilterCount > 0 ? (
                  <button
                    type="button"
                    className="clear-tags"
                    onClick={clearAllFilters}
                  >
                    Xóa hết
                  </button>
                ) : null}
                <button
                  type="button"
                  className="filter-drawer-close"
                  onClick={closeDrawer}
                  aria-label="Đóng"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="catalog-filters" aria-label="Bộ lọc">
              <div className="filter-block search-block">
                <label className="filter-label" htmlFor="catalog-search">
                  Tìm kiếm
                </label>
                <div className={`search-shell${searching ? ' is-loading' : ''}`}>
                  <span className="search-icon" aria-hidden>
                    {searching ? <span className="spinner spinner-inline" /> : '⌕'}
                  </span>
                  <input
                    id="catalog-search"
                    ref={searchRef}
                    type="search"
                    className="catalog-search"
                    placeholder={
                      searchMode === 'keyword'
                        ? 'Tool, repo, tag…'
                        : 'Hỏi theo nghĩa — ví dụ: agent gọi tool, TTS tiếng Việt…'
                    }
                    value={draftQuery}
                    onChange={(e) => setDraftQuery(e.target.value)}
                    aria-busy={searching}
                  />
                  <kbd className="search-kbd">Ctrl K</kbd>
                </div>
                <div className="search-mode-row" role="group" aria-label="Kiểu tìm">
                  {(
                    [
                      ['keyword', 'Từ khóa'],
                      ['semantic', 'Ngữ nghĩa'],
                      ['hybrid', 'Hybrid'],
                    ] as const
                  ).map(([mode, label]) => (
                    <button
                      key={mode}
                      type="button"
                      className={`search-mode-btn${searchMode === mode ? ' active' : ''}`}
                      onClick={() => setSearchMode(mode)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-block domain-block">
                <div className="filter-label-row">
                  <p className="filter-label">Domain</p>
                  {activeDomains.length > 0 && (
                    <button
                      type="button"
                      className="clear-tags"
                      onClick={() => setActiveDomains([])}
                    >
                      Xóa lọc ({activeDomains.length})
                    </button>
                  )}
                </div>
                <DomainMultiSelect
                  domains={domains}
                  value={activeDomains}
                  onChange={setActiveDomains}
                />
              </div>

              <div className="filter-block tags-block">
                <div className="filter-label-row">
                  <p className="filter-label">Tags · capability</p>
                  {activeTags.length > 0 && (
                    <button
                      type="button"
                      className="clear-tags"
                      onClick={() => setActiveTags([])}
                    >
                      Xóa lọc ({activeTags.length})
                    </button>
                  )}
                </div>
                <TagMultiSelect
                  tags={tags}
                  counts={tagCounts}
                  value={activeTags}
                  matchMode={tagMatchMode}
                  onChange={setActiveTags}
                  onMatchModeChange={setTagMatchMode}
                />
              </div>
            </div>

            <div className="filter-drawer-footer">
              <button
                type="button"
                className="filter-drawer-apply"
                onClick={closeDrawer}
              >
                Xem {filtered.length} kết quả
              </button>
            </div>
          </aside>
        </div>
      ) : null}

      <div className={`results-panel${searching ? ' is-loading' : ''}`}>
        {searching && (
          <div className="results-loading" role="status" aria-live="polite">
            <span className="spinner" aria-hidden />
            <span>
              {embedderStatus === 'loading' && searchMode !== 'keyword'
                ? 'Đang tải model tìm kiếm… (lần đầu ~30–80MB, lần sau cache)'
                : 'Đang tìm kết quả…'}
            </span>
          </div>
        )}

        <section
          className="card-stack"
          aria-label="Danh sách bài"
          aria-busy={searching}
        >
          <ul className="card-rows">
            {displayItems.map((item, index) => {
              const repoLabel = item.repo || item.repoUrl || '—'
              const repoShort = repoLabel.includes('/')
                ? repoLabel.split('/').pop() || repoLabel
                : repoLabel
              const visibleTags = item.tags.slice(0, 5)
              const hiddenTagCount = Math.max(0, item.tags.length - visibleTags.length)
              const badge = statusBadgeLabel(
                effectiveStatus(statusByPath[item.path], seenPaths, item.path) ??
                  'current',
              )
              const semanticScore = scoreByPath?.get(item.path)

              return (
                <li
                  key={item.path}
                  className="repo-card"
                  style={hueStyle(domainHue(item.domain))}
                >
                  <span className="list-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="repo-card-main">
                    <div className="list-title-row">
                      <button
                        type="button"
                        className="list-title"
                        onClick={() => openArticle(item.path)}
                        disabled={searching}
                      >
                        {item.title}
                        {badge ? (
                          <span
                            className={`freshness-badge freshness-${badge === 'Mới' ? 'new' : 'updated'}`}
                          >
                            {badge}
                          </span>
                        ) : null}
                      </button>
                      {semanticScore != null &&
                      semanticScore > 0 &&
                      semanticScore <= 1.0001 ? (
                        <span
                          className="list-semantic-score"
                          title="Điểm tương đồng ngữ nghĩa (cosine 0–1)"
                        >
                          {semanticScore.toFixed(3)}
                        </span>
                      ) : null}
                    </div>

                    {item.repoUrl ? (
                      <a
                        className="list-repo"
                        href={item.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        title={repoLabel}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="list-repo-full">{repoLabel}</span>
                        <span className="list-repo-short">{repoShort}</span>
                      </a>
                    ) : (
                      <span className="list-repo muted">
                        <span className="list-repo-full">{repoLabel}</span>
                        <span className="list-repo-short">{repoShort}</span>
                      </span>
                    )}

                    {item.excerpt ? (
                      <p className="repo-card-desc" title={item.excerpt}>
                        {item.excerpt}
                      </p>
                    ) : null}

                    {visibleTags.length > 0 ? (
                      <div className="list-tags">
                        {visibleTags.map((t) => (
                          <button
                            key={t}
                            type="button"
                            className={`post-tag colored${activeTags.includes(t) ? ' active' : ''}`}
                            style={hueStyle(tagHue(t))}
                            onClick={() => toggleTag(t)}
                            disabled={searching}
                            title={t}
                          >
                            {tagLabel(t)}
                          </button>
                        ))}
                        {hiddenTagCount > 0 ? (
                          <span className="tag-more">+{hiddenTagCount}</span>
                        ) : null}
                      </div>
                    ) : null}
                  </div>

                  <div className="repo-card-meta">
                    <span
                      className="list-domain badge-domain"
                      style={hueStyle(domainHue(item.domain))}
                    >
                      {domainLabel(item.domain)}
                    </span>
                    <span className="list-stars" title="Stars">
                      ★ {item.stars || '—'}
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>

        {!searching && filtered.length === 0 && (
          <p className="empty-state">
            Không có bài khớp bộ lọc. Thử OR thay AND, bỏ tag, hoặc đổi từ khóa.
          </p>
        )}
      </div>
    </div>
  )
}
