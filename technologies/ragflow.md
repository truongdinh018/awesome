# RAGFlow

> **Repo:** [infiniflow/ragflow](https://github.com/infiniflow/ragflow)  
> **Category:** MCP & AI Agents · RAG engine  
> **Tags:** `rag` · `agent` · `mcp` · `self-host` · `api`  
> **Ngôn ngữ:** Python · **⭐** ~85k · **License:** xem repo  
> Site / docs: [ragflow.io](https://ragflow.io) · Cloud: [cloud.ragflow.io](https://cloud.ragflow.io)

## Tổng quan

**RAGFlow** (InfiniFlow) — **RAG engine** mã nguồn mở kết hợp deep document understanding (**DeepDoc**), template chunking, citations grounded, multi-recall + rerank, và **Agent** (workflow + MCP). Mục tiêu: “quality in, quality out” — biến dữ liệu phức tạp thành context layer production cho LLM.

Khác [PageIndex](pageindex.md) (vectorless tree): RAGFlow = stack ingest/chunk/vector đầy đủ + UI/API. Peer platform: [WeKnora](weknora.md).

## Để làm gì?

| Nhu cầu | RAGFlow |
|---------|---------|
| Self-host RAG enterprise (PDF/scan/Office…) | ✅ DeepDoc + templates |
| Citation / chunk visualization | ✅ |
| Agent + MCP / chat IM | ✅ (Feishu, Discord, Telegram…) |
| Sync Notion / Drive / S3 / Confluence | ✅ |
| Chỉ tree-search PDF không full stack | → [PageIndex](pageindex.md) |

## Docker nhanh

```bash
git clone https://github.com/infiniflow/ragflow.git
cd ragflow/docker
# checkout tag ổn định (vd. v0.26.4) — khớp entrypoint với image
sudo sysctl -w vm.max_map_count=262144   # cần ≥ 262144
docker compose -f docker-compose.yml up -d
```

Mở `http://IP` (port 80). Cấu hình LLM trong `service_conf.yaml.template`.  
ARM64: build image riêng (image x86 mặc định). Doc engine mặc định Elasticsearch; tùy chọn **Infinity**.

## So sánh catalog

| | RAGFlow | WeKnora | PageIndex | SAG |
|--|---------|---------|-----------|-----|
| Focus | RAG engine + DeepDoc | KB + Wiki + ReAct | Vectorless ToC | Event-graph RAG |
| Stars-class | Rất lớn | Lớn | Lớn | Nhỏ hơn |
| Tags | `rag` `agent` `mcp` | `rag` `agent` `mcp` `cli` | `rag` `mcp` `cli` | `rag` `mcp` |

## Use case Odoo / ai_core

- Benchmark ingest PDF/HĐ trước khi thiết kế `ai_rag_core`.  
- Agent/MCP hỏi dataset nội bộ; cross-check với WeKnora.  
- Preprocess: [Magika](magika.md) classify → [Stirling-PDF](stirling-pdf.md) → RAGFlow.

## Link

- Repo: https://github.com/infiniflow/ragflow  
- Docs: https://ragflow.io/docs/dev/  
- DeepDoc: `deepdoc/` trong repo  
- Peers: [weknora.md](weknora.md) · [pageindex.md](pageindex.md) · [pixelrag.md](pixelrag.md) · [pathway.md](pathway.md) · [sag.md](sag.md) · [anything-llm.md](anything-llm.md) · [open-notebook.md](open-notebook.md) · [khoj.md](khoj.md)
