import { useMemo, useState } from 'react'
import {
  groupTagsPresent,
  tagHint,
  tagLabel,
  taxonomyTagHue,
} from '../tagTaxonomy'
import { hueStyle } from '../domainLabels'

export type TagMatchMode = 'and' | 'or'

type Props = {
  tags: string[]
  counts: Record<string, number>
  value: string[]
  matchMode: TagMatchMode
  onChange: (next: string[]) => void
  onMatchModeChange: (mode: TagMatchMode) => void
}

export function TagMultiSelect({
  tags,
  counts,
  value,
  matchMode,
  onChange,
  onMatchModeChange,
}: Props) {
  const [query, setQuery] = useState('')
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})

  const groups = useMemo(() => groupTagsPresent(tags), [tags])

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return groups
    return groups
      .map((row) => ({
        ...row,
        tags: row.tags.filter((id) => {
          const label = tagLabel(id).toLowerCase()
          const hint = tagHint(id).toLowerCase()
          return (
            id.includes(q) ||
            label.includes(q) ||
            hint.includes(q)
          )
        }),
      }))
      .filter((row) => row.tags.length > 0)
  }, [groups, query])

  const toggle = (tag: string) => {
    onChange(
      value.includes(tag) ? value.filter((t) => t !== tag) : [...value, tag],
    )
  }

  const toggleGroupCollapse = (key: string) => {
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="tag-filter">
      <div className="tag-filter-toolbar">
        <div className="tag-filter-search">
          <span aria-hidden>⌕</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm tag (rag, skill, video…)"
            aria-label="Tìm tag"
          />
        </div>
        <div className="tag-match-mode" role="group" aria-label="Cách khớp tag">
          <button
            type="button"
            className={matchMode === 'and' ? 'active' : ''}
            onClick={() => onMatchModeChange('and')}
            title="Phải có đủ mọi tag đã chọn"
          >
            AND
          </button>
          <button
            type="button"
            className={matchMode === 'or' ? 'active' : ''}
            onClick={() => onMatchModeChange('or')}
            title="Có ít nhất một tag đã chọn"
          >
            OR
          </button>
        </div>
      </div>

      <p className="tag-match-hint">
        {matchMode === 'and'
          ? 'AND — bài phải có đủ mọi tag đang chọn'
          : 'OR — bài có ít nhất một tag đang chọn'}
      </p>

      {value.length > 0 ? (
        <div className="tag-filter-selected" aria-label="Tags đang chọn">
          {value.map((id) => (
            <button
              key={id}
              type="button"
              className="tag-chip selected colored"
              style={hueStyle(taxonomyTagHue(id))}
              onClick={() => toggle(id)}
              title={`Bỏ ${tagLabel(id)}`}
            >
              <span className="tag-chip-label">{tagLabel(id)}</span>
              <span className="tag-chip-id">{id}</span>
              <span aria-hidden>×</span>
            </button>
          ))}
        </div>
      ) : null}

      <div className="tag-filter-groups">
        {filteredGroups.length === 0 ? (
          <p className="tag-filter-empty">Không có tag khớp “{query}”</p>
        ) : (
          filteredGroups.map((row) => {
            const key = row.group.label
            const isCollapsed = collapsed[key] === true
            return (
              <section key={key} className="tag-group">
                <button
                  type="button"
                  className="tag-group-header"
                  onClick={() => toggleGroupCollapse(key)}
                  aria-expanded={!isCollapsed}
                >
                  <span
                    className="tag-group-dot"
                    style={hueStyle(row.group.hue)}
                    aria-hidden
                  />
                  <span className="tag-group-title">{row.group.label}</span>
                  <span className="tag-group-count">{row.tags.length}</span>
                  <span className="tag-group-chevron" aria-hidden>
                    {isCollapsed ? '▸' : '▾'}
                  </span>
                </button>
                {!isCollapsed ? (
                  <div className="tag-group-chips">
                    {row.tags.map((id) => {
                      const active = value.includes(id)
                      const n = counts[id] ?? 0
                      return (
                        <button
                          key={id}
                          type="button"
                          className={`tag-chip colored${active ? ' active' : ''}`}
                          style={hueStyle(taxonomyTagHue(id))}
                          onClick={() => toggle(id)}
                          title={tagHint(id)}
                        >
                          <span className="tag-chip-label">{tagLabel(id)}</span>
                          <span className="tag-chip-id">{id}</span>
                          <span className="tag-chip-n">{n}</span>
                        </button>
                      )
                    })}
                  </div>
                ) : null}
              </section>
            )
          })
        )}
      </div>
    </div>
  )
}
