import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react'
import { hueStyle } from '../domainLabels'

export type ChipOption = {
  value: string
  label: string
  hue: number
}

type Props = {
  options: ChipOption[]
  value: string[]
  onChange: (next: string[]) => void
  placeholderEmpty?: string
  placeholderMore?: string
  menuLabel?: string
}

export function ChipMultiSelect({
  options,
  value,
  onChange,
  placeholderEmpty = 'Gõ để chọn…',
  placeholderMore = 'Thêm…',
  menuLabel = 'Gợi ý',
}: Props) {
  const listId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [highlight, setHighlight] = useState(0)

  const byValue = useMemo(() => {
    const map = new Map(options.map((o) => [o.value, o]))
    return map
  }, [options])

  const selected = useMemo(
    () => value.map((v) => byValue.get(v)).filter(Boolean) as ChipOption[],
    [value, byValue],
  )

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase()
    const available = options.filter((o) => !value.includes(o.value))
    if (!q) return available.slice(0, 12)
    return available
      .filter(
        (o) =>
          o.label.toLowerCase().includes(q) ||
          o.value.toLowerCase().includes(q),
      )
      .slice(0, 20)
  }, [options, value, query])

  useEffect(() => {
    setHighlight(0)
  }, [query, open, value.length])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const add = (optionValue: string) => {
    if (!optionValue || value.includes(optionValue)) return
    onChange([...value, optionValue])
    setQuery('')
    setOpen(false)
    inputRef.current?.blur()
  }

  const remove = (optionValue: string) => {
    onChange(value.filter((v) => v !== optionValue))
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && query === '' && value.length > 0) {
      e.preventDefault()
      remove(value[value.length - 1]!)
      return
    }
    if (e.key === 'Escape') {
      setOpen(false)
      return
    }
    if (!open && (e.key === 'ArrowDown' || e.key === 'Enter')) {
      setOpen(true)
      return
    }
    if (!open) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlight((i) => Math.min(i + 1, Math.max(suggestions.length - 1, 0)))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlight((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const pick = suggestions[highlight]
      if (pick) add(pick.value)
    }
  }

  return (
    <div className="tag-ms" ref={rootRef}>
      <div
        className={`tag-ms-field${open ? ' open' : ''}`}
        onClick={() => {
          setOpen(true)
          inputRef.current?.focus()
        }}
      >
        {selected.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className="tag-ms-chip colored"
            style={hueStyle(opt.hue)}
            onClick={(e) => {
              e.stopPropagation()
              remove(opt.value)
            }}
            title={`Bỏ ${opt.label}`}
          >
            {opt.label}
            <span aria-hidden>×</span>
          </button>
        ))}
        <input
          ref={inputRef}
          id={listId}
          type="text"
          className="tag-ms-input"
          value={query}
          placeholder={value.length === 0 ? placeholderEmpty : placeholderMore}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          role="combobox"
          aria-expanded={open}
          aria-controls={`${listId}-list`}
          aria-autocomplete="list"
          autoComplete="off"
        />
      </div>

      {open && (
        <ul
          id={`${listId}-list`}
          className="tag-ms-menu"
          role="listbox"
          aria-label={menuLabel}
        >
          {suggestions.length === 0 ? (
            <li className="tag-ms-empty">
              {query.trim()
                ? 'Không có kết quả'
                : value.length === options.length
                  ? 'Đã chọn hết'
                  : 'Gõ để lọc…'}
            </li>
          ) : (
            suggestions.map((opt, index) => (
              <li key={opt.value} role="option" aria-selected={index === highlight}>
                <button
                  type="button"
                  className={`tag-ms-option colored${index === highlight ? ' highlight' : ''}`}
                  style={hueStyle(opt.hue)}
                  onMouseEnter={() => setHighlight(index)}
                  onClick={() => add(opt.value)}
                >
                  {opt.label}
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  )
}
