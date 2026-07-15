# docmd

> **Repo:** [docmd-io/docmd](https://github.com/docmd-io/docmd)  
> **Category:** DevTools · Site tài liệu Markdown (MCP + semantic search)  
> **Tags:** `mcp` · `skill` · `cli` · `self-host` · `api` · `rag`  
> **Ngôn ngữ:** TypeScript · Node · **⭐** ~2.2k · **License:** MIT  
> Site: [docmd.io](https://docmd.io)

## Đây là gì?

**docmd** là static site generator tài liệu từ Markdown: nhanh, không React/bloat. Có **MCP** / context API cho agent, semantic search, OpenAPI, i18n, PWA, Docker, plugins, themes, versioning. Agent skills (`ai-skills`) để coding agent giữ docs cập nhật.

**Cùng kiểu:** [prompts.chat](../mcp-ai-agents/prompts-chat.md), [Obsidian harness](../cli-anything/obsidian.md), [Stirling-PDF](stirling-pdf.md), [Understand Anything](../mcp-ai-agents/understand-anything.md), [PageIndex](../mcp-ai-agents/pageindex.md).

## Dùng khi nào?

| Nhu cầu | docmd |
|---------|-------|
| Docs production từ Markdown + SEO | ✅ |
| MCP / context API cho agent đọc docs | ✅ |
| Knowledge graph codebase | → [Understand Anything](../mcp-ai-agents/understand-anything.md) |
| PDF toolkit | → [Stirling-PDF](stirling-pdf.md) |

## Chạy thử

```bash
# See docmd.io — init Markdown docs → build/serve
# MCP + semantic search for agent/context retrieval
```

- Site: https://docmd.io  
- Repo: https://github.com/docmd-io/docmd

## So với tool khác

| | docmd | Understand Anything | Obsidian harness |
|--|-------|---------------------|------------------|
| Focus | Docs site + MCP search | Knowledge graph codebase | Note vault CLI |
| Tags | `mcp` `rag` `cli` | `mcp` `cli` | `mcp` `harness` |

## Dùng với Odoo / ai_core

- Publish tài liệu module / runbook từ `docs/` Markdown.  
- Agent (Cursor) truy cập docs qua MCP thay vì paste dài.

## Link

- Repo: https://github.com/docmd-io/docmd  
- Site: https://docmd.io  
- Peers: [prompts-chat.md](../mcp-ai-agents/prompts-chat.md) · [cli-anything/obsidian.md](../cli-anything/obsidian.md) · [understand-anything.md](../mcp-ai-agents/understand-anything.md)
