import type { CSSProperties } from 'react'

export const DOMAIN_LABELS: Record<string, string> = {
  'mcp-ai-agents': 'MCP & AI Agents',
  'speech-audio': 'Speech & Audio',
  'image-video': 'Image & Video',
  'ui-automation': 'UI Automation',
  'cv-edge': 'CV & Edge',
  devtools: 'DevTools',
  security: 'Security',
  'cli-anything': 'CLI-Anything',
  bookmarks: 'Bookmarks',
  other: 'Khác',
}

/** Hue 0–360 for domain color system */
export const DOMAIN_HUE: Record<string, number> = {
  'mcp-ai-agents': 168,
  'speech-audio': 285,
  'image-video': 18,
  'ui-automation': 210,
  'cv-edge': 42,
  devtools: 198,
  security: 348,
  'cli-anything': 132,
  bookmarks: 48,
  other: 230,
}

export function domainLabel(domain: string): string {
  return DOMAIN_LABELS[domain] ?? domain
}

export function domainHue(domain: string): number {
  return DOMAIN_HUE[domain] ?? 168
}

/** Stable hue for tag chips */
export function tagHue(tag: string): number {
  let h = 0
  for (let i = 0; i < tag.length; i++) {
    h = (h * 31 + tag.charCodeAt(i)) % 360
  }
  return h
}

export function hueStyle(hue: number): CSSProperties {
  return { ['--hue' as string]: String(hue) } as CSSProperties
}
