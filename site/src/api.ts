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

async function parseJson<T>(res: Response): Promise<T> {
  const data = (await res.json()) as T & { error?: string }
  if (!res.ok) {
    throw new Error((data as { error?: string }).error || res.statusText)
  }
  return data
}

export async function fetchCatalog(): Promise<CatalogResponse> {
  return parseJson<CatalogResponse>(await fetch('/api/catalog'))
}

export async function fetchTree(): Promise<TreeNode[]> {
  const data = await parseJson<{ tree: TreeNode[] }>(await fetch('/api/tree'))
  return data.tree
}

export async function fetchFile(path: string): Promise<FileResponse> {
  const qs = new URLSearchParams({ path })
  return parseJson<FileResponse>(await fetch(`/api/file?${qs}`))
}

export async function saveFile(path: string, content: string): Promise<void> {
  await parseJson<{ ok: boolean }>(
    await fetch('/api/file', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, content }),
    }),
  )
}
