import type { CatalogItem } from './lib/parseMeta'

export type { CatalogItem }

export type TreeNode = {
  name: string
  path: string
  type: 'file' | 'dir'
  children?: TreeNode[]
}

export type FileResponse = {
  path: string
  content: string
}

export type CatalogResponse = {
  items: CatalogItem[]
  tags: string[]
  domains: string[]
}

/** Edit/save only works with the Vite dev API — not on GitHub Pages. */
export const canEditMarkdown = import.meta.env.DEV

function assetUrl(rel: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const normalized = rel.replace(/^\/+/, '')
  return `${base.endsWith('/') ? base : `${base}/`}${normalized}`
}

async function parseJson<T>(res: Response): Promise<T> {
  const data = (await res.json()) as T & { error?: string }
  if (!res.ok) {
    throw new Error((data as { error?: string }).error || res.statusText)
  }
  return data
}

let filesCache: Promise<Record<string, string>> | null = null

function loadStaticFiles(): Promise<Record<string, string>> {
  if (!filesCache) {
    filesCache = fetch(assetUrl('data/files.json')).then((res) =>
      parseJson<Record<string, string>>(res),
    )
  }
  return filesCache
}

export async function fetchCatalog(): Promise<CatalogResponse> {
  if (import.meta.env.DEV) {
    return parseJson<CatalogResponse>(await fetch('/api/catalog'))
  }
  return parseJson<CatalogResponse>(await fetch(assetUrl('data/catalog.json')))
}

export async function fetchTree(): Promise<TreeNode[]> {
  if (import.meta.env.DEV) {
    const data = await parseJson<{ tree: TreeNode[] }>(await fetch('/api/tree'))
    return data.tree
  }
  const data = await parseJson<{ tree: TreeNode[] }>(
    await fetch(assetUrl('data/tree.json')),
  )
  return data.tree
}

export async function fetchFile(path: string): Promise<FileResponse> {
  const rel = path.replace(/\\/g, '/')
  if (import.meta.env.DEV) {
    const qs = new URLSearchParams({ path: rel })
    return parseJson<FileResponse>(await fetch(`/api/file?${qs}`))
  }
  const files = await loadStaticFiles()
  const content = files[rel]
  if (content === undefined) {
    throw new Error('File not found')
  }
  return { path: rel, content }
}

export async function saveFile(path: string, content: string): Promise<void> {
  if (!canEditMarkdown) {
    throw new Error('Chỉ sửa được khi chạy npm run dev (không dùng trên GitHub Pages).')
  }
  await parseJson<{ ok: boolean }>(
    await fetch('/api/file', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, content }),
    }),
  )
}
