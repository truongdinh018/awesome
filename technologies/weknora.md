# WeKnora

> **Repo:** [Tencent/WeKnora](https://github.com/Tencent/WeKnora)  
> **Category:** MCP & AI Agents · RAG / Knowledge platform  
> **Tags:** `rag` · `mcp` · `agent` · `self-host` · `cli` · `skill`  
> **Ngôn ngữ:** Go · frontend · Python parsers · **⭐** ~18.3k · **License:** MIT  
> Site: [weknora.weixin.qq.com](https://weknora.weixin.qq.com) · Slogan: *Turn documents into living knowledge*

## Đây là gì?

**WeKnora** (Tencent) là framework **self-host** tri thức LLM enterprise: **RAG Q&A**, **ReAct Agent** (orchestration retrieval + MCP + web search), và **Wiki Mode** (agent chưng documents → wiki Markdown liên kết + knowledge graph).

Ingest đa nguồn (Feishu / Notion / Yuque / RSS…), 10+ định dạng (PDF, Office, ảnh, EPUB…), IM (WeCom / Feishu / Slack / Telegram…), embed widget website, 20+ LLM, Langfuse observability, workspace **RBAC**, CLI `weknora` + MCP server.

**Cùng kiểu:** [PageIndex](pageindex.md) (vectorless tree), [SAG](sag.md), [RAGFlow](ragflow.md), [AnythingLLM](anything-llm.md); runtime Odoo: **ai_rag_core**.

## Dùng khi nào?

| Nhu cầu | WeKnora |
|---------|---------|
| KB self-host RAG + citation UI | ✅ |
| Agent phức tạp (tool + search + MCP) | ✅ ReAct |
| Wiki tự bảo trì từ doc thô | ✅ Wiki Mode |
| CLI / CI / agent-first API | ✅ `weknora` + `mcp serve` |
| Chỉ PDF tree-search không full platform | → [PageIndex](pageindex.md) |

## Chạy thử

```bash
git clone https://github.com/Tencent/WeKnora.git
cd WeKnora
cp .env.example .env
docker compose up -d
# optional: --profile neo4j|minio|langfuse|full
```

UI: `http://localhost` · API: `:8080`

```bash
weknora profile add prod --host https://kb.example.com --use
weknora auth login
weknora kb list && weknora chat "…"
weknora mcp serve
```

## So với tool khác

| | WeKnora | PageIndex | SAG | EpicStaff |
|--|---------|-----------|-----|-----------|
| Focus | Full KB platform + Wiki | Vectorless tree RAG | Graph event RAG | Visual agent ops |
| MCP | ✅ server + OAuth2 | ✅ | ✅ | ✅ |
| Tags | `rag` `agent` `mcp` `cli` | `rag` `mcp` `cli` | `rag` `mcp` | `agent` `workflow` |

## Dùng với Odoo / ai_core

- Prototype KB trước khi embed logic vào `ai_rag_core`.  
- MCP: Cursor/Hermes hỏi WeKnora; sync SOP → Wiki Mode.  
- IM WeCom/Feishu song song agent ERP.

## Link

- Repo: https://github.com/Tencent/WeKnora  
- Docs / API: `docs/` trong repo  
- MCP config: `mcp-server/MCP_CONFIG.md`  
- Peers: [pageindex.md](pageindex.md) · [sag.md](sag.md) · [ragflow.md](ragflow.md) · [anything-llm.md](anything-llm.md) · [open-notebook.md](open-notebook.md) · [khoj.md](khoj.md)
