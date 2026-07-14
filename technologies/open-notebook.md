# Open Notebook

> **Repo:** [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook)  
> **Category:** MCP & AI Agents · Local-first knowledge notebook  
> **Tags:** `rag` · `self-host` · `api` · `tts`  
> **Ngôn ngữ:** Python · Next.js · SurrealDB · **⭐** ~35.6k · **License:** MIT  
> Site: [open-notebook.ai](https://www.open-notebook.ai) · Slogan: *Privacy-focused alternative to Notebook LM*

## Tổng quan

**Open Notebook** — open-source, **100% local / self-host**, thay thế Google **Notebook LM**: multi-model (18+ provider), chat với research notes, full-text + vector search, podcast multi-speaker, REST API. Dữ liệu ở máy bạn, không lock-in Google.

Peer: [NotebookLM MCP](notebooklm-mcp.md) (cloud Google + MCP), [AnythingLLM](anything-llm.md) (desktop/all-in-one agent), [Khoj](khoj.md) (second brain + multi-client), [SurfSense](surfsense.md) (CI + live scrapers), [WeKnora](weknora.md) / [RAGFlow](ragflow.md) (KB / DeepDoc engine).

## Để làm gì?

| Nhu cầu | Open Notebook |
|---------|---------------|
| Notebook LM private / on-prem | ✅ Docker self-host |
| Chọn model (Ollama, Anthropic…) | ✅ 18+ providers |
| Podcast research (1–4 speakers) | ✅ mạnh hơn Notebook LM (2 speakers) |
| REST API / automation | ✅ (Notebook LM không có) |
| Agent MCP tooling | → [AnythingLLM](anything-llm.md) / [NotebookLM MCP](notebooklm-mcp.md) |
| Deep PDF parse | → [RAGFlow](ragflow.md) |

## Highlight

- Privacy-first · multi-modal content (PDF, video, audio, web)  
- Chat có context từ notebook · citations (đang cải thiện)  
- Content transformations custom + built-in  
- UI đa ngôn ngữ (EN, PT, ZH, JA, RU, BN…)  
- Stack: Python · Next.js · SurrealDB · LangChain  

## Deploy

```bash
curl -o docker-compose.yml \
  https://raw.githubusercontent.com/lfnovo/open-notebook/main/docker-compose.yml
# Đổi OPEN_NOTEBOOK_ENCRYPTION_KEY trong compose
docker compose up -d
```

UI `:8502` · REST API `:5055`. Docs: [User Guide](https://www.open-notebook.ai) / repo `docs/`.

## So sánh catalog

| | Open Notebook | NotebookLM MCP | AnythingLLM |
|--|---------------|----------------|-------------|
| Hosting | Self-host OSS | Google cloud | Desktop / Docker |
| Niche | Research notebook + podcast | Agent ↔ NotebookLM | All-in-one + MCP agents |
| Tags | `rag` `self-host` `api` `tts` | `mcp` `rag` | `rag` `agent` `mcp` `desktop` |

## Use case Odoo / ai_core

- Prototype personal KB / SOP notebook trước `ai_rag_core`.  
- Team research on-prem (không đưa tài liệu lên Google).  
- Podcast nội bộ từ tài liệu training; API tích hợp workflow.

## Link

- Repo: https://github.com/lfnovo/open-notebook  
- Site: https://www.open-notebook.ai  
- Peers: [notebooklm-mcp.md](notebooklm-mcp.md) · [anything-llm.md](anything-llm.md) · [khoj.md](khoj.md) · [surfsense.md](surfsense.md) · [weknora.md](weknora.md) · [ragflow.md](ragflow.md)
