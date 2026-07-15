# Graphify

> **Repo:** [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)  
> **Category:** MCP & AI Agents · Project → queryable knowledge graph (skill)  
> **Tags:** `skill` · `coding-agent` · `rag` · `cli` · `agent`  
> **Ngôn ngữ:** Python · tree-sitter · **⭐** ~86.9k · **License:** MIT  
> Site: [graphify.com](https://www.graphify.com) · PyPI: `graphifyy`

## Đây là gì?

**Graphify** là **skill / CLI** cho coding agent: map cả folder (code, SQL schema, docs, PDF, ảnh, video…) thành **knowledge graph** tra cứu được — không phải vector index. Code parse **AST tree-sitter local** (không LLM); tài liệu/media dùng model assistant. Edge gắn `EXTRACTED` / `INFERRED`. Output: `graph.html` (interactive), `GRAPH_REPORT.md`, `graph.json`.

Slash `/graphify .` trong Claude Code, Cursor, Codex, Gemini CLI, Copilot… App code + schema + infra trên **một graph**.

**Cùng kiểu:** [Understand Anything](understand-anything.md) (code/wiki KG dashboard), [Semble](semble.md) (search snippet), [Gitingest](gitingest.md) (digest text), [Hyper-Extract](hyper-extract.md) (extract graph).

## Dùng khi nào?

| Nhu cầu | Graphify |
|---------|----------|
| Map monorepo → graph query / path explain | ✅ `/graphify` |
| Code map local miễn LLM (AST) | ✅ |
| Interactive `graph.html` + report | ✅ |
| Onboarding tours / chat UI rich | → [Understand Anything](understand-anything.md) |
| Chỉ search snippet ít token | → [Semble](semble.md) |

## Chạy thử

```bash
uv tool install graphifyy    # hoặc: pipx install graphifyy
graphify install             # đăng ký skill với assistant

# Trong agent:
# /graphify .

# Query sau khi build
graphify explain "APIRouter"
# xem graphify-out/graph.html
```

## So với tool khác

| | Graphify | Understand Anything | Semble |
|--|----------|---------------------|--------|
| Niche | Folder→KG + path query | Interactive UA graph/tours | NL→code snippet |
| Code parse | tree-sitter local | Multi-agent analyze | Index search |
| Tags | `skill` `rag` `cli` | `skill` `rag` | `mcp` `rag` |

## Dùng với Odoo / ai_core

- `/graphify` trên `addons/` + models SQL → agent hiểu dependency trước khi refactor.  
- Tra path giữa module thay Grep rộng.  
- Doc/PDF nội bộ cùng graph (semantic pass cần model); giữ graph local.

## Link

- Repo: https://github.com/Graphify-Labs/graphify · Site: https://www.graphify.com  
- Peers: [understand-anything.md](understand-anything.md) · [semble.md](semble.md) · [gitingest.md](gitingest.md) · [hyper-extract.md](hyper-extract.md)
