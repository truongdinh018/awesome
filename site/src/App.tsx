import { useCallback, useEffect, useRef, useState } from 'react'
import {
  canEditMarkdown,
  fetchCatalog,
  fetchFile,
  saveFile,
  type CatalogItem,
} from './api'
import { Catalog } from './components/Catalog'
import { Reader } from './components/Reader'
import { Editor } from './components/Editor'
import { ThemeToggle } from './components/ThemeToggle'
import {
  articleHref,
  catalogHref,
  navigate,
  readRoute,
} from './lib/routing'
import { markPathSeen } from './lib/semanticSearch'
import {
  applyTheme,
  getPreferredTheme,
  toggleTheme,
  type ThemeMode,
} from './theme'

type Mode = 'read' | 'edit'
type View = 'catalog' | 'article'

function resolveRelative(fromPath: string, href: string): string | null {
  if (!href || href.startsWith('#') || /^[a-z]+:/i.test(href)) return null
  const clean = href.split('#')[0].split('?')[0]
  if (!clean.toLowerCase().endsWith('.md')) return null
  const fromDir = fromPath.includes('/')
    ? fromPath.slice(0, fromPath.lastIndexOf('/'))
    : ''
  const parts = (fromDir ? `${fromDir}/${clean}` : clean).split('/')
  const stack: string[] = []
  for (const part of parts) {
    if (!part || part === '.') continue
    if (part === '..') {
      if (stack.length === 0) return null
      stack.pop()
    } else {
      stack.push(part)
    }
  }
  const resolved = stack.join('/')
  return resolved.toLowerCase().endsWith('.md') ? resolved : null
}

export default function App() {
  const initial = readRoute()
  const [theme, setTheme] = useState<ThemeMode>(() => getPreferredTheme())
  const [view, setView] = useState<View>(initial.view)
  const [items, setItems] = useState<CatalogItem[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [domains, setDomains] = useState<string[]>([])
  const [currentPath, setCurrentPath] = useState<string | null>(
    initial.view === 'article' ? initial.doc : null,
  )

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => toggleTheme(prev))
  }, [])
  const [content, setContent] = useState('')
  const [draft, setDraft] = useState('')
  const [mode, setMode] = useState<Mode>('read')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<string | null>(null)
  const [catalogQuery, setCatalogQuery] = useState(
    initial.view === 'catalog' ? initial.q : '',
  )
  const [catalogDomains, setCatalogDomains] = useState<string[]>(
    initial.view === 'catalog' ? initial.domains : [],
  )
  const [catalogTags, setCatalogTags] = useState<string[]>(
    initial.view === 'catalog' ? initial.tags : [],
  )

  const dirty = mode === 'edit' && draft !== content
  const dirtyRef = useRef(dirty)
  const currentPathRef = useRef(currentPath)
  const navigatingRef = useRef(false)

  useEffect(() => {
    dirtyRef.current = dirty
  }, [dirty])

  useEffect(() => {
    currentPathRef.current = currentPath
  }, [currentPath])

  const loadCatalog = useCallback(async () => {
    const data = await fetchCatalog()
    setItems(data.items)
    setTags(data.tags)
    setDomains(data.domains)
  }, [])

  const scrollArticleTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    // doc-body is the scroll container in article view
    requestAnimationFrame(() => {
      const body = document.querySelector('.doc-body')
      if (body instanceof HTMLElement) body.scrollTop = 0
    })
  }, [])

  const openFile = useCallback(async (path: string, syncUrl = true) => {
    setError(null)
    setStatus(null)
    setLoading(true)
    setMode('read')
    setView('article')
    scrollArticleTop()
    try {
      const file = await fetchFile(path)
      setCurrentPath(file.path)
      setContent(file.content)
      setDraft(file.content)
      if (syncUrl) {
        const href = articleHref(file.path)
        const current = window.location.pathname + window.location.search
        if (current !== href) navigate(href, 'push')
      }
      document.title = `${file.path.split('/').pop()?.replace(/\.md$/i, '') ?? 'Article'} · Awesome AI`
      scrollArticleTop()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Không mở được file')
    } finally {
      setLoading(false)
      scrollArticleTop()
    }
  }, [scrollArticleTop])

  const showCatalog = useCallback(
    async (opts?: { syncUrl?: boolean; mode?: 'push' | 'replace' }) => {
      setView('catalog')
      setMode('read')
      setCurrentPath(null)
      setContent('')
      setDraft('')
      setStatus(null)
      document.title = 'Awesome AI · Catalog'
      if (opts?.syncUrl !== false) {
        navigate(
          catalogHref({
            q: catalogQuery,
            domains: catalogDomains,
            tags: catalogTags,
          }),
          opts?.mode ?? 'push',
        )
      }
      try {
        await loadCatalog()
      } catch {
        /* keep old catalog */
      }
    },
    [catalogQuery, catalogDomains, catalogTags, loadCatalog],
  )

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        await loadCatalog()
        if (cancelled) return
        const route = readRoute()
        if (route.view === 'article') {
          await openFile(route.doc, false)
        } else {
          setCatalogQuery(route.q)
          setCatalogDomains(route.domains)
          setCatalogTags(route.tags)
          setView('catalog')
          document.title = 'Awesome AI · Catalog'
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Không tải được catalog')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [loadCatalog, openFile])

  useEffect(() => {
    const onPopState = () => {
      if (navigatingRef.current) return
      if (dirtyRef.current) {
        const ok = window.confirm('Bỏ thay đổi chưa lưu?')
        if (!ok) {
          navigatingRef.current = true
          const path = currentPathRef.current
          if (path) navigate(articleHref(path), 'push')
          requestAnimationFrame(() => {
            navigatingRef.current = false
          })
          return
        }
      }
      const route = readRoute()
      if (route.view === 'article') {
        void openFile(route.doc, false)
      } else {
        setCatalogQuery(route.q)
        setCatalogDomains(route.domains)
        setCatalogTags(route.tags)
        setView('catalog')
        setMode('read')
        setCurrentPath(null)
        setContent('')
        setDraft('')
        setStatus(null)
        document.title = 'Awesome AI · Catalog'
      }
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [openFile])

  const confirmLeaveEdit = useCallback(() => {
    if (!dirty) return true
    return window.confirm('Bỏ thay đổi chưa lưu?')
  }, [dirty])

  const handleSelect = useCallback(
    async (path: string) => {
      if (!confirmLeaveEdit()) return
      markPathSeen(path)
      await openFile(path, true)
    },
    [confirmLeaveEdit, openFile],
  )

  const handleBack = useCallback(() => {
    if (!confirmLeaveEdit()) return
    if (window.history.length > 1) {
      window.history.back()
      return
    }
    void showCatalog({ mode: 'replace' })
  }, [confirmLeaveEdit, showCatalog])

  const handleNavigate = useCallback(
    (href: string) => {
      if (!currentPath) return
      const resolved = resolveRelative(currentPath, href)
      if (resolved) void handleSelect(resolved)
    },
    [currentPath, handleSelect],
  )

  const handleSave = useCallback(async () => {
    if (!currentPath || !dirty) return
    setSaving(true)
    setError(null)
    try {
      await saveFile(currentPath, draft)
      setContent(draft)
      setStatus('Đã lưu')
      setTimeout(() => setStatus(null), 2000)
      void loadCatalog()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Lưu thất bại')
    } finally {
      setSaving(false)
    }
  }, [currentPath, dirty, draft, loadCatalog])

  const handleCancel = useCallback(() => {
    setDraft(content)
    setMode('read')
    setStatus(null)
  }, [content])

  const syncCatalogUrl = useCallback(
    (next: { q: string; domains: string[]; tags: string[] }) => {
      setCatalogQuery(next.q)
      setCatalogDomains(next.domains)
      setCatalogTags(next.tags)
      if (view === 'catalog') {
        navigate(
          catalogHref({
            q: next.q,
            domains: next.domains,
            tags: next.tags,
          }),
          'replace',
        )
      }
    },
    [view],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
        e.preventDefault()
        if (canEditMarkdown && mode === 'edit') void handleSave()
      }
      if (e.key === 'Escape') {
        if (mode === 'edit' && !dirty) {
          setMode('read')
        } else if (view === 'article' && mode === 'read') {
          handleBack()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mode, dirty, handleSave, view, handleBack])

  if (view === 'catalog') {
    return (
      <div className="blog-shell">
        {error && <div className="banner error catalog-banner">{error}</div>}
        {loading && items.length === 0 ? (
          <p className="muted catalog-loading">Đang tải catalog…</p>
        ) : (
          <Catalog
            items={items}
            tags={tags}
            domains={domains}
            query={catalogQuery}
            activeDomains={catalogDomains}
            activeTags={catalogTags}
            theme={theme}
            onToggleTheme={handleToggleTheme}
            onFiltersChange={syncCatalogUrl}
            onOpen={(p) => void handleSelect(p)}
            onOpenHub={(p) => void handleSelect(p)}
          />
        )}
      </div>
    )
  }

  return (
    <div className="article-shell">
      <header className="doc-header">
        <div className="doc-header-left">
          <button type="button" className="back-btn" onClick={handleBack}>
            ← Catalog
          </button>
          <div>
            <p className="brand">Awesome AI</p>
            <p className="doc-path" title={currentPath ?? undefined}>
              {currentPath ?? '—'}
            </p>
          </div>
        </div>
        <div className="doc-header-actions">
          <ThemeToggle theme={theme} onToggle={handleToggleTheme} />
          {status && <span className="status ok">{status}</span>}
          {dirty && <span className="status dirty">Chưa lưu</span>}
          {canEditMarkdown ? (
            mode === 'read' ? (
              <button
                type="button"
                className="btn primary"
                disabled={!currentPath || loading}
                onClick={() => setMode('edit')}
              >
                Sửa
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="btn ghost"
                  onClick={handleCancel}
                  disabled={saving}
                >
                  Hủy
                </button>
                <button
                  type="button"
                  className="btn primary"
                  onClick={() => void handleSave()}
                  disabled={!dirty || saving}
                >
                  {saving ? 'Đang lưu…' : 'Lưu'}
                </button>
              </>
            )
          ) : null}
        </div>
      </header>

      {error && <div className="banner error">{error}</div>}

      <div className="doc-body">
        {loading && !content ? (
          <p className="muted">Đang tải…</p>
        ) : mode === 'edit' ? (
          <Editor value={draft} onChange={setDraft} />
        ) : (
          <Reader
            content={content}
            currentPath={currentPath}
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </div>
  )
}
