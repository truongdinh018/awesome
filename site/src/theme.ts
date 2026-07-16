export type ThemeMode = 'light' | 'dark'

const KEY = 'awesome-ai-theme'

export function getPreferredTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* ignore */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function applyTheme(theme: ThemeMode): void {
  document.documentElement.setAttribute('data-theme', theme)
  const color = theme === 'dark' ? '#070a0f' : '#0f7668'
  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((el) => el.setAttribute('content', color))
  try {
    localStorage.setItem(KEY, theme)
  } catch {
    /* ignore */
  }
}

export function toggleTheme(current: ThemeMode): ThemeMode {
  const next: ThemeMode = current === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  return next
}
