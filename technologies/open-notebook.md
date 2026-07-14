# Open Notebook

> **Repo:** [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook)  
> **Category:** MCP & AI Agents · Local-first knowledge notebook  
> **Tags:** `rag` · `self-host` · `api` · `tts`  
> **Ngôn ngữ:** Python · Next.js · SurrealDB · **⭐** ~35.6k · **License:** MIT  
> Site: [open-notebook.ai](https://www.open-notebook.ai) · Slogan: *Privacy-focused alternative to Notebook LM*

## Đây là gì?

**Open Notebook** là thay thế mã nguồn mở cho Google **Notebook LM**: **100% local / self-host**.

Bạn dùng để: chat với research notes, full-text + vector search, podcast multi-speaker (1–4 speakers), REST API. Hỗ trợ 18+ provider (Ollama, Anthropic…). Dữ liệu ở máy bạn, không lock-in Google. Stack: Python · Next.js · SurrealDB · LangChain.

**Cùng kiểu:** [NotebookLM MCP](notebooklm-mcp.md), [AnythingLLM](anything-llm.md), [Khoj](khoj.md), [SurfSense](surfsense.md), [WeKnora](weknora.md), [RAGFlow](ragflow.md)

## Dùng khi nào?

| Nhu cầu | Open Notebook |
|---------|---------------|
| Notebook LM private / on-prem | ✅ Docker self-host |
| Chọn model (Ollama, Anthropic…) | ✅ 18+ providers |
| Podcast research (1–4 speakers) | ✅ mạnh hơn Notebook LM (2 speakers) |
| REST API / automation | ✅ (Notebook LM không có) |
| Agent MCP tooling | → [AnythingLLM](anything-llm.md) / [NotebookLM MCP](notebooklm-mcp.md) |
| Deep PDF parse | → [RAGFlow](ragflow.md) |

## Chạy thử

```bash
curl -o docker-compose.yml \
  https://raw.githubusercontent.com/lfnovo/open-notebook/main/docker-compose.yml
# Đổi OPEN_NOTEBOOK_ENCRYPTION_KEY trong compose
docker compose up -d
```

UI `:8502` · REST API `:5055`. Docs: [User Guide](https://www.open-notebook.ai) / repo `docs/`.

## So với tool khác

| | Open Notebook | NotebookLM MCP | AnythingLLM |
|--|---------------|----------------|-------------|
| Hosting | Self-host OSS | Google cloud | Desktop / Docker |
| Niche | Research notebook + podcast | Agent ↔ NotebookLM | All-in-one + MCP agents |
| Tags | `rag` `self-host` `api` `tts` | `mcp` `rag` | `rag` `agent` `mcp` `desktop` |

## Dùng với Odoo / ai_core

- Prototype personal KB / SOP notebook trước `ai_rag_core`.  
- Team research on-prem (không đưa tài liệu lên Google).  
- Podcast nội bộ từ tài liệu training; API tích hợp workflow.

## Link

- Repo: https://github.com/lfnovo/open-notebook  
- Site: https://www.open-notebook.ai  
- Peers: [notebooklm-mcp.md](notebooklm-mcp.md) · [anything-llm.md](anything-llm.md) · [khoj.md](khoj.md) · [surfsense.md](surfsense.md) · [weknora.md](weknora.md) · [ragflow.md](ragflow.md)
