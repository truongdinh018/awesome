# VitePress

> **Repo:** [vuejs/vitepress](https://github.com/vuejs/vitepress)  
> **Category:** DevTools · Static site generator cho docs (Vite + Vue)  
> **Tags:** `cli` · `self-host` · `knowledge`  
> **Ngôn ngữ:** TypeScript · Vue · **⭐** ~18k · **License:** MIT  
> Site: [vitepress.dev](https://vitepress.dev)

## Đây là gì?

**VitePress** là trình sinh site tĩnh (*static site generator*) chạy trên Vite + Vue, kế thừa tinh thần VuePress. Viết nội dung bằng **Markdown** → build ra site docs tĩnh, nhanh, SEO tốt, deploy được lên GitHub Pages / Netlify / VPS bất kỳ.

Điểm mạnh: dev server hot-reload tức thì (Vite), theme mặc định đẹp sẵn (sidebar, dark mode, search local hoặc Algolia DocSearch, i18n), và **nhúng được Vue component ngay trong Markdown** khi cần trang tương tác. Đây là tool đứng sau chính docs của Vue, Vite, Vitest…

Bản `2.0.0-alpha` đang chuyển dần sang hệ Rolldown/Oxc (VoidZero). Không phải AI tool — là **devtools publish tài liệu**.

**Cùng kiểu:** [docmd](docmd.md) (docs site + MCP/semantic search cho agent), [Docmost](../mcp-ai-agents/docmost.md) (wiki collab có server), [Open Resume](open-resume.md) (một dạng site builder chuyên biệt).

## Dùng khi nào?

| Nhu cầu | VitePress |
|---------|-----------|
| Site docs tĩnh từ Markdown (product / module / runbook) | ✅ |
| Nhúng Vue component / demo tương tác trong docs | ✅ |
| Docs có MCP / context API cho coding agent | → [docmd](docmd.md) |
| Wiki cộng tác realtime nhiều người sửa | → [Docmost](../mcp-ai-agents/docmost.md) |
| Blog / landing page phức tạp (CMS) | ❌ dùng CMS/Astro thay thế |

## Chạy thử

```bash
npm add -D vitepress
npx vitepress init   # wizard tạo cấu trúc docs/

npx vitepress dev docs     # dev server hot-reload
npx vitepress build docs   # build static ra docs/.vitepress/dist
```

Deploy GitHub Pages: build trong GitHub Actions rồi publish thư mục `dist` (giống workflow `deploy-pages.yml` của catalog này).

## So với tool khác

| | VitePress | docmd | Docmost |
|--|-----------|-------|---------|
| Focus | SSG docs Vite/Vue | Docs site + MCP search | Wiki collab server |
| Nội dung | Markdown + Vue | Markdown | Editor realtime |
| Tags | `cli` `self-host` | `mcp` `rag` `cli` | `rag` `workspace` |

## Dùng với Odoo / ai_core

- Publish tài liệu module / quy trình từ `docs/` Markdown thành site nội bộ đẹp, có search.
- Docs kỹ thuật cho team (BPMN, runbook) — giữ nguồn Markdown trong repo, CI build tự động.
- Cần agent đọc docs qua MCP → cân nhắc [docmd](docmd.md) thay thế hoặc chạy song song.

## Link

- Repo: https://github.com/vuejs/vitepress
- Docs: https://vitepress.dev
- Peers: [docmd.md](docmd.md) · [docmost.md](../mcp-ai-agents/docmost.md)
