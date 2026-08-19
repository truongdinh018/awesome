# Markdoc

> **Repo:** [markdoc/markdoc](https://github.com/markdoc/markdoc)  
> **Category:** DevTools · Markdown framework cho docs (Stripe)  
> **Tags:** `cli` · `knowledge` · `api`  
> **Ngôn ngữ:** TypeScript · **⭐** ~8.4k · **License:** MIT  
> **Docs:** [markdoc.dev](https://markdoc.dev)

## Đây là gì?

**Markdoc** là cú pháp + toolchain **Markdown có tag mở rộng** (`{% %}`) để viết documentation site phức tạp. Stripe dùng nó cho [docs.stripe.com](https://stripe.com/docs): parse → AST → transform → render React (hoặc renderer khác).

Không phải SSG trọn gói như VitePress: bạn nhúng `@markdoc/markdoc` vào Next.js / app sẵn có, tự định nghĩa tag (image, callout, API table…). CommonMark + schema tùy biến.

**Cùng kiểu:** [VitePress](vitepress.md) (SSG Vite + Vue), [docmd](docmd.md) (docs + MCP search), [Docmost](../mcp-ai-agents/docmost.md) (wiki collab), [MarkItDown](markitdown.md) (file → Markdown cho LLM).

## Dùng khi nào?

| Nhu cầu | Markdoc |
|---------|---------|
| Docs Markdown + custom tag, render React | ✅ |
| Schema / validation nội dung docs | ✅ transform + tags |
| Site docs “bấm init là chạy” | → [VitePress](vitepress.md) |
| Docs + MCP cho coding agent | → [docmd](docmd.md) |
| Wiki nhiều người sửa realtime | → [Docmost](../mcp-ai-agents/docmost.md) |

## Chạy thử

```bash
npm install @markdoc/markdoc
```

```js
import Markdoc from '@markdoc/markdoc';

const doc = `
# Hello
{% image src="/logo.svg" /%}
`;
const ast = Markdoc.parse(doc);
const content = Markdoc.transform(ast);
// Markdoc.renderers.react(content, React)
```

Hướng dẫn tag, Next.js: [markdoc.dev/docs](https://markdoc.dev/docs).

## So với tool khác

| | Markdoc | VitePress | docmd |
|--|---------|-----------|-------|
| Vai trò | Library Markdown → AST/React | SSG docs sẵn theme | SSG + MCP/search |
| Custom tag | ✅ lõi | Vue trong MD | plugin |
| Tags catalog | `knowledge` `cli` | `knowledge` `cli` | `mcp` `rag` `cli` |

## Dùng với Odoo / ai_core

- Docs module / API nội bộ: viết Markdoc, build site riêng — không chạy trong Odoo.  
- Ingest RAG: xuất text từ AST rồi đưa [txtai](../mcp-ai-agents/txtai.md) / [PageIndex](../mcp-ai-agents/pageindex.md).  
- Agent đọc docs: [docmd](docmd.md) có MCP sẵn, Markdoc thì tự expose.

## Link

- Repo: https://github.com/markdoc/markdoc  
- Docs: https://markdoc.dev  
- Peers: [vitepress.md](vitepress.md) · [docmd.md](docmd.md) · [markitdown.md](markitdown.md)
