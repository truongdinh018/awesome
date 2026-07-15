import { useEffect, useMemo, useRef, useState } from 'react'
import type { CatalogItem } from '../api'
import { domainHue, domainLabel, hueStyle, tagHue } from '../domainLabels'
import { ThemeToggle } from './ThemeToggle'
import { TagMultiSelect } from './TagMultiSelect'
import { DomainMultiSelect } from './DomainMultiSelect'
import type { ThemeMode } from '../theme'

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
  const [draftQuery, setDraftQuery] = useState(query)
  const [searching, setSearching] = useState(false)
  const [displayItems, setDisplayItems] = useState<CatalogItem[]>([])
  const searchGen = useRef(0)

  useEffect(() => {
    setDraftQuery(query)
  }, [query])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => {
      if (activeDomains.length > 0 && !activeDomains.includes(item.domain)) {
        return false
      }
      if (activeTags.length > 0 && !activeTags.every((t) => item.tags.includes(t))) {
        return false
      }
      if (!q) return true
      const hay = [
        item.title,
        item.slug,
        item.repo,
        item.category,
        item.excerpt,
        item.domain,
        ...item.tags,
      ]
        .join(' ')
        .toLowerCase()
      return hay.includes(q)
    })
  }, [items, query, activeDomains, activeTags])

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
            Kho bài ngắn về tool bạn đã star — lọc domain &amp; tag, mở card để đọc Markdown.
          </p>
          <p className="hero-meta" aria-live="polite">
            {searching ? (
              <>
                <span className="hero-meta-loading">Đang tìm…</span>
              </>
            ) : (
              <>
                <strong>{filtered.length}</strong> đang hiện
                <span aria-hidden>·</span>
                <strong>{items.length}</strong> bài
                <span aria-hidden>·</span>
                <strong>{tags.length}</strong> tags
              </>
            )}
          </p>
        </div>
      </section>

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
              placeholder="Tool, repo, tag…"
              value={draftQuery}
              onChange={(e) => setDraftQuery(e.target.value)}
              aria-busy={searching}
            />
            <kbd className="search-kbd">Ctrl K</kbd>
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
            <p className="filter-label">Tags</p>
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
            value={activeTags}
            onChange={setActiveTags}
          />
        </div>
      </div>

      <div className={`results-panel${searching ? ' is-loading' : ''}`}>
        {searching && (
          <div className="results-loading" role="status" aria-live="polite">
            <span className="spinner" aria-hidden />
            <span>Đang tìm kết quả…</span>
          </div>
        )}

        <section
          className="card-grid"
          aria-label="Danh sách bài"
          aria-busy={searching}
        >
          {displayItems.map((item, index) => (
            <article
              key={item.path}
              className="post-card"
              style={hueStyle(domainHue(item.domain))}
            >
              <div className="post-card-accent" aria-hidden />
              <div className="post-card-body">
                <button
                  type="button"
                  className="post-card-btn"
                  onClick={() => onOpen(item.path)}
                  disabled={searching}
                >
                  <div className="post-card-meta">
                    <span
                      className="post-domain badge-domain"
                      style={hueStyle(domainHue(item.domain))}
                    >
                      {domainLabel(item.domain)}
                    </span>
                    <span className="post-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="post-title">{item.title}</h2>
                  <div className="post-sub">
                    {item.repo && <span className="post-repo">{item.repo}</span>}
                    {item.stars && <span className="post-stars">{item.stars}</span>}
                  </div>
                  <p className="post-excerpt">{item.excerpt || 'Chưa có tóm tắt.'}</p>
                  <span className="read-cue">Đọc bài →</span>
                </button>
                {item.tags.length > 0 && (
                  <ul className="post-tags">
                    {item.tags.slice(0, 6).map((t) => (
                      <li key={t}>
                        <button
                          type="button"
                          className={`post-tag colored${activeTags.includes(t) ? ' active' : ''}`}
                          style={hueStyle(tagHue(t))}
                          onClick={() => toggleTag(t)}
                          disabled={searching}
                        >
                          {t}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </section>

        {!searching && filtered.length === 0 && (
          <p className="empty-state">
            Không có bài khớp bộ lọc. Thử bỏ tag hoặc đổi từ khóa.
          </p>
        )}
      </div>
    </div>
  )
}
