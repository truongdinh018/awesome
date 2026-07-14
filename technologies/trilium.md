# Trilium Notes

> **Repo:** [TriliumNext/Trilium](https://github.com/TriliumNext/Trilium)  
> **Category:** MCP & AI Agents · Hierarchical personal knowledge base  
> **Tags:** `rag` · `self-host` · `desktop` · `api`  
> **Ngôn ngữ:** TypeScript · Electron · Docker · **⭐** ~36.9k · **License:** AGPL-3.0  
> Site: [triliumnotes.org](https://triliumnotes.org) · Docs: [docs.triliumnotes.org](https://docs.triliumnotes.org)

## Đây là gì?

**Trilium Notes** (TriliumNext) là app **note knowledge base** open-source, local-first: cây note sâu + clone, WYSIWYG/code, attributes/query, versioning, sync server self-host, encryption per-note.

Có canvas (Excalidraw), relation/mind/geo maps, scripting + **REST API**, web clipper, mobile UI. Scale 100k+ notes. Community fork sau khi repo gốc chuyển TriliumNext.

**Cùng kiểu:** [Khoj](khoj.md) / [Open Notebook](open-notebook.md) (PKM **có chat/RAG LLM**), [AnythingLLM](anything-llm.md), Obsidian [harness](cli-anything/obsidian.md), [Folo](folo.md) (RSS — khác domain).

## Dùng khi nào?

| Nhu cầu | Trilium |
|---------|---------|
| Second brain cây note / wiki cá nhân | ✅ primary |
| Sync + encrypt + share notes | ✅ |
| REST / script automation KB | ✅ |
| Chat LLM trên docs + agent | → [Khoj](khoj.md) / [AnythingLLM](anything-llm.md) |
| Notebook LM–style podcast research | → [Open Notebook](open-notebook.md) |

## Chạy thử

```bash
# Desktop: release từ GitHub · Docker sync/server — xem docs.triliumnotes.org
docker pull triliumnext/trilium   # image name theo docs hiện tại
```

Import/export Markdown · Evernote; F1 in-app help = User Guide.

## So với tool khác

| | Trilium | Khoj | Open Notebook |
|--|---------|------|---------------|
| Shape | Hierarchical PKM + API | AI second brain chat | Notebook LM OSS |
| LLM native | ❌ (external) | ✅ | ✅ |
| Tags | `self-host` `desktop` `api` | `rag` `agent` `desktop` | `rag` `api` `tts` |

## Dùng với Odoo / ai_core

- KB nội bộ kỹ thuật / runbook → export MD hoặc REST → ingest [RAGFlow](ragflow.md) / `ai_rag_core`.  
- Không thay Khoj khi cần hỏi đáp LLM trực tiếp trên KB.

## Link

- Repo: https://github.com/TriliumNext/Trilium · Docs: https://docs.triliumnotes.org  
- Peers: [khoj.md](khoj.md) · [open-notebook.md](open-notebook.md) · [anything-llm.md](anything-llm.md) · [cli-anything/obsidian.md](cli-anything/obsidian.md) · [folo.md](folo.md)
