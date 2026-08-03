import { useEffect, useId, useMemo, useRef, useState } from 'react'
import type { SkillIndex, SkillItem } from '../lib/skills'
import { ThemeToggle } from './ThemeToggle'
import type { ThemeMode } from '../theme'

type Props = {
  data: SkillIndex | null
  loading: boolean
  error: string | null
  query: string
  category: string
  theme: ThemeMode
  onToggleTheme: () => void
  onQueryChange: (q: string) => void
  onCategoryChange: (category: string) => void
  onOpenCatalog: () => void
  onOpenTrending: () => void
  onOpenSkill: (path: string) => void
  onOpenHub: (path: string) => void
}

const SEARCH_DEBOUNCE_MS = 240

const CATEGORY_LABEL: Record<string, string> = {
  'awesome-ai': 'Awesome AI',
  engineering: 'Engineering',
  notion: 'Notion',
  other: 'Khác',
}

function categoryLabel(c: string): string {
  return CATEGORY_LABEL[c] ?? c
}

function matches(skill: SkillItem, q: string): boolean {
  if (!q.trim()) return true
  const hay = [
    skill.id,
    skill.title,
    skill.description,
    skill.excerpt,
    skill.category,
    skill.source,
    ...skill.tags,
  ]
    .join(' ')
    .toLowerCase()
  return q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((token) => hay.includes(token))
}

export function Skills({
  data,
  loading,
  error,
  query,
  category,
  theme,
  onToggleTheme,
  onQueryChange,
  onCategoryChange,
  onOpenCatalog,
  onOpenTrending,
  onOpenSkill,
  onOpenHub,
}: Props) {
  const searchRef = useRef<HTMLInputElement>(null)
  const filterBtnRef = useRef<HTMLButtonElement>(null)
  const drawerTitleId = useId()
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

  const skills = data?.skills ?? []
  const filtered = useMemo(() => {
    return skills.filter((s) => {
      if (category !== 'all' && s.category !== category) return false
      return matches(s, query)
    })
  }, [skills, category, query])

  const grouped = useMemo(() => {
    const map = new Map<string, SkillItem[]>()
    for (const s of filtered) {
      const list = map.get(s.category) ?? []
      list.push(s)
      map.set(s.category, list)
    }
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b))
  }, [filtered])

  const categories = data?.categories ?? []
  const activeFilterCount =
    (query.trim() ? 1 : 0) + (category !== 'all' ? 1 : 0)

  const clearAllFilters = () => {
    setDraftQuery('')
    onQueryChange('')
    onCategoryChange('all')
  }

  return (
    <div className="catalog skills-page">
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
            <button type="button" className="hub-link" onClick={onOpenTrending}>
              Trending
            </button>
            <button type="button" className="hub-link hub-link-active">
              Skills
            </button>
            <button
              type="button"
              className="hub-link"
              onClick={() => onOpenHub('skills/README.md')}
            >
              Vault docs
            </button>
            <button
              type="button"
              className="hub-link"
              onClick={() => onOpenHub('skills/WRITING.md')}
            >
              Writing
            </button>
          </nav>
          <button
            ref={filterBtnRef}
            type="button"
            className={`filter-drawer-btn${activeFilterCount > 0 ? ' has-filters' : ''}`}
            onClick={() => setDrawerOpen(true)}
            aria-expanded={drawerOpen}
            aria-controls="skills-filter-drawer"
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
          <p className="catalog-kicker">Agent Skills · SKILL.md vault</p>
          <h1 className="catalog-title">
            Skills <em>portable</em>
          </h1>
          <p className="catalog-lead">
            Lưu toàn bộ skill dùng với Cursor / Claude — workflow Awesome AI,
            engineering, và Notion MCP. Mỗi skill là một thư mục{' '}
            <code>vault/&lt;id&gt;/SKILL.md</code>.
          </p>
          <p className="hero-meta" aria-live="polite">
            {loading ? (
              <span className="hero-meta-loading">Đang tải…</span>
            ) : searching ? (
              <span className="hero-meta-loading">Đang tìm…</span>
            ) : (
              <>
                <strong>{filtered.length}</strong> đang hiện
                <span aria-hidden>·</span>
                <strong>{data?.count ?? 0}</strong> skill
                <span aria-hidden>·</span>
                <strong>{categories.length}</strong> nhóm
              </>
            )}
          </p>
        </div>
      </section>

      <div className="trending-filters" role="tablist" aria-label="Lọc theo nhóm">
        <button
          type="button"
          role="tab"
          className={`trending-filter-btn${category === 'all' ? ' active' : ''}`}
          aria-selected={category === 'all'}
          onClick={() => onCategoryChange('all')}
        >
          Tất cả
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            className={`trending-filter-btn${category === c ? ' active' : ''}`}
            aria-selected={category === c}
            onClick={() => onCategoryChange(c)}
          >
            {categoryLabel(c)}
          </button>
        ))}
      </div>

      {drawerOpen ? (
        <div className="filter-drawer-root">
          <button
            type="button"
            className="filter-drawer-backdrop"
            aria-label="Đóng bộ lọc"
            onClick={() => setDrawerOpen(false)}
          />
          <aside
            id="skills-filter-drawer"
            className="filter-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby={drawerTitleId}
          >
            <div className="filter-drawer-header">
              <h2 id={drawerTitleId} className="filter-drawer-title">
                Tìm skills
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

            <div className="catalog-filters" aria-label="Tìm kiếm skills">
              <div className="filter-block search-block">
                <label className="filter-label" htmlFor="skills-search">
                  Tìm kiếm
                </label>
                <div className={`search-shell${searching ? ' is-loading' : ''}`}>
                  <span className="search-icon" aria-hidden>
                    {searching ? <span className="spinner spinner-inline" /> : '⌕'}
                  </span>
                  <input
                    id="skills-search"
                    ref={searchRef}
                    type="search"
                    className="catalog-search"
                    placeholder="id, mô tả, tag, category…"
                    value={draftQuery}
                    onChange={(e) => setDraftQuery(e.target.value)}
                    aria-busy={searching}
                  />
                  <kbd className="search-kbd">Ctrl K</kbd>
                </div>
              </div>

              <div className="filter-block">
                <p className="filter-label">Nhóm</p>
                <div className="trending-filters trending-filters-drawer">
                  <button
                    type="button"
                    className={`trending-filter-btn${category === 'all' ? ' active' : ''}`}
                    onClick={() => onCategoryChange('all')}
                  >
                    Tất cả
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className={`trending-filter-btn${category === c ? ' active' : ''}`}
                      onClick={() => onCategoryChange(c)}
                    >
                      {categoryLabel(c)}
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
        <p className="muted catalog-loading">Đang tải skills…</p>
      ) : filtered.length === 0 ? (
        <p className="muted trending-empty">
          {query.trim() || category !== 'all'
            ? 'Không có skill khớp. Thử xóa bộ lọc hoặc thêm skill vào skills/vault/.'
            : 'Vault trống. Thêm thư mục skills/vault/<id>/SKILL.md rồi chạy npm run index:skills.'}
        </p>
      ) : (
        grouped.map(([cat, list]) => (
          <section key={cat} className="skills-group">
            <h2 className="skills-group-title">{categoryLabel(cat)}</h2>
            <ul className="skills-list">
              {list.map((skill) => (
                <li key={skill.id}>
                  <button
                    type="button"
                    className="skill-card"
                    onClick={() => onOpenSkill(skill.path)}
                  >
                    <div className="skill-card-head">
                      <span className="skill-id">{skill.id}</span>
                      <span className="skill-badge">{categoryLabel(skill.category)}</span>
                    </div>
                    <h3 className="skill-title">{skill.title}</h3>
                    <p className="skill-desc">
                      {skill.description || skill.excerpt || '—'}
                    </p>
                    {skill.tags.length > 0 ? (
                      <ul className="skill-tags">
                        {skill.tags.map((t) => (
                          <li key={t} className="trending-topic">
                            {t}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  )
}
