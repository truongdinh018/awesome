# AnythingLLM

> **Repo:** [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)  
> **Category:** MCP & AI Agents · Workspace AI local-first  
> **Tags:** `rag` · `agent` · `mcp` · `self-host` · `desktop` · `api` · `vector` · `knowledge`
> **Ngôn ngữ:** Node.js · React · **⭐** ~63.3k · **License:** MIT  
> Docs: [docs.anythingllm.com](https://docs.anythingllm.com) · Slogan: *Stop renting your intelligence*

## Đây là gì?

**AnythingLLM** (Mintplex Labs) là app **all-in-one local-first**: chat với documents, AI agents, multi-user (Docker), vector DB, MCP, embed widget, model router — desktop (Mac/Win/Linux) hoặc Docker/cloud. “Private ChatGPT” không setup phức tạp.

Dynamic model routing · memories · scheduled agent jobs · no-code agent flows · unlimited tools / skill selection (~80% token tools). LLM: Ollama, LM Studio, OpenAI, Anthropic, Gemini, Bedrock… Vector: LanceDB (default), PGVector, Pinecone, Chroma, Weaviate, Qdrant, Milvus… STT/TTS built-in / OpenAI / ElevenLabs.

**Cùng kiểu:** [RAGFlow](ragflow.md) (engine/DeepDoc nặng hơn), [WeKnora](weknora.md) (Wiki/enterprise CN), [Open Notebook](open-notebook.md) (Notebook LM OSS), [Khoj](khoj.md) (second brain), [NotebookLM MCP](notebooklm-mcp.md) (cloud Google).

## Dùng khi nào?

| Nhu cầu | AnythingLLM |
|---------|-------------|
| Desktop chat + docs local nhanh | ✅ Desktop app |
| Agent + MCP + skills chọn thông minh | ✅ |
| Multi-user / permission (Docker) | ✅ |
| Embed chat widget website | ✅ Docker |
| RAG deep-parse PDF phức tạp | → [RAGFlow](ragflow.md) / DeepDoc |

## Chạy thử

Desktop: tải từ releases / docs.  
Docker / AWS / GCP / DO…: bảng deploy trong README + `docker/HOW_TO_USE_DOCKER.md`.

Dev:

```bash
yarn setup
yarn dev:server && yarn dev:frontend && yarn dev:collector
```

Telemetry mặc định có; tắt `DISABLE_TELEMETRY=true` hoặc Privacy UI.

## So với tool khác

| | AnythingLLM | RAGFlow | WeKnora |
|--|-------------|---------|---------|
| UX | Desktop + multi-user app | RAG engine + DeepDoc | KB + Wiki + ReAct |
| Setup | Rất nhanh local | Docker nặng hơn | Docker/Helm |
| Tags | `rag` `agent` `mcp` `desktop` | `rag` `agent` `mcp` | `rag` `agent` `mcp` `cli` |

## Dùng với Odoo / ai_core

- Prototype personal KB trước `ai_rag_core`.  
- Desktop team review SOP; MCP tools gọi Odoo/ERP.  
- Embed widget cho portal nội bộ (Docker).

## Link

- Repo: https://github.com/Mintplex-Labs/anything-llm  
- Docs: https://docs.anythingllm.com  
- Embed / extension / mobile: org Mintplex-Labs  
- Peers: [ragflow.md](ragflow.md) · [weknora.md](weknora.md) · [open-notebook.md](open-notebook.md) · [khoj.md](khoj.md) · [notebooklm-mcp.md](notebooklm-mcp.md)
