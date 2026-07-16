# Docmost

> **Repo:** [docmost/docmost](https://github.com/Docmost/docmost)  
> **Category:** MCP & AI Agents · Collaborative wiki / docs (Confluence·Notion OSS)  
> **Tags:** `rag` · `self-host` · `api` · `workspace` · `knowledge`
> **Ngôn ngữ:** TypeScript · Docker · **⭐** ~21k · **License:** AGPL-3.0 (core) · EE proprietary dirs  
> Site: [docmost.com](https://docmost.com) · Docs: site documentation

## Đây là gì?

**Docmost** là wiki/docs collaborative open-source thay **Confluence / Notion**: realtime collab, Spaces, permissions/groups, comments, page history, search, attachments, embeds.

Hỗ trợ diagrams **Draw.io · Excalidraw · Mermaid**. Self-host Docker; cloud available. Core AGPL; thư mục `ee/` Enterprise license riêng.

**Cùng kiểu:** [Trilium](trilium.md) (personal hierarchical KB), [Khoj](khoj.md) / [Open Notebook](open-notebook.md) (AI chat trên KB), [docmd](../devtools/docmd.md) (agent docs MCP), Obsidian [harness](../cli-anything/obsidian.md), [drawio-skill](drawio-skill.md).

## Dùng khi nào?

| Nhu cầu | Docmost |
|---------|---------|
| Team wiki / internal docs collab | ✅ primary |
| Diagrams in pages | ✅ Draw.io/Excalidraw/Mermaid |
| Personal tree notes offline-first | → [Trilium](trilium.md) |
| Chat LLM trên knowledge base | → [Khoj](khoj.md) / [AnythingLLM](anything-llm.md) |

## Chạy thử

```bash
# Theo docs: docker-compose từ repo / docmost.com docs
docker compose up -d   # sau khi cấu hình .env (Postgres, Redis, APP_URL…)
```

Translations 10+ ngôn ngữ; Algolia dùng cho docs site (không bắt buộc self-host core).

## So với tool khác

| | Docmost | Trilium | Khoj |
|--|---------|---------|------|
| Shape | Team wiki collab | Personal PKM tree | AI second brain |
| Collab realtime | ✅ | Sync mô hình khác | Clients đa nền |
| LLM native | ❌ | ❌ | ✅ |
| Tags | `self-host` `workspace` | `desktop` `api` | `rag` `agent` |

## Dùng với Odoo / ai_core

- Knowledge base đội (runbook addon, API notes) → export/ingest RAG khi cần.  
- EE: đọc license `packages/ee` trước khi deploy enterprise features.

## Link

- Repo: https://github.com/Docmost/docmost · Site: https://docmost.com  
- Peers: [trilium.md](trilium.md) · [khoj.md](khoj.md) · [docmd.md](../devtools/docmd.md) · [open-notebook.md](open-notebook.md) · [drawio-skill.md](drawio-skill.md)
