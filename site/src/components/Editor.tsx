type Props = {
  value: string
  onChange: (value: string) => void
}

export function Editor({ value, onChange }: Props) {
  return (
    <div className="editor-wrap">
      <textarea
        className="editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        aria-label="Markdown editor"
      />
      <p className="editor-hint">Ctrl/Cmd+S để lưu · Esc để về chế độ đọc (khi đã lưu)</p>
    </div>
  )
}
