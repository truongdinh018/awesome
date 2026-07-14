# SAG (Zleap AI)

> **Repo:** [Zleap-AI/SAG](https://github.com/Zleap-AI/SAG)  
> **Category:** MCP & AI Agents · RAG  
> **Tags:** `rag` · `mcp` · `self-host`  
> **Ngôn ngữ:** TypeScript · **⭐** ~2.0k · **License:** MIT  
> **Paper:** [arXiv:2606.15971](https://arxiv.org/abs/2606.15971)

## Đây là gì?

**SAG** là phương pháp **graph retrieval** cho dữ liệu động quy mô lớn, kèm **workbench** out-of-the-box: upload Markdown/TXT → chunk → vector → extract event/entity → hỏi đáp kiểu ChatGPT, xem graph, search trace, và **MCP** theo từng project.

Khác RAG “nhồi nhiều chunk”: SAG tổ chức tri thức nhẹ hơn knowledge graph nặng — `chunk → event` (đơn vị ngữ nghĩa) + `chunk → entities` + `event ↔ entities`. Retrieval bắt đầu từ event khớp, rồi **multi-hop** qua quan hệ.

Trên HotpotQA / 2WikiMultiHop / MuSiQue: Avg **Recall@2** **79.30%** vs HippoRAG 2 **68.14%** (+11.16 pp).

**Cùng kiểu:** [Hyper-Extract](hyper-extract.md), [PageIndex](pageindex.md), [NotebookLM MCP](notebooklm-mcp.md), [RAGFlow](ragflow.md)

## Dùng khi nào?

| Nhu cầu | SAG |
|---------|-----|
| Q&A tài liệu dự án / personal KB | ✅ |
| Prototype RAG multi-hop cho agent | ✅ |
| Debug pipeline retrieval (trace + raw logs) | ✅ Search Trace |
| MCP tool cho Cursor / Claude | ✅ per-project |
| Full OCR PDF suite | → [RAGFlow](ragflow.md) |
| Vectorless tree RAG | → [PageIndex](pageindex.md) |

## Chạy thử

```bash
git clone https://github.com/Zleap-AI/SAG.git && cd SAG
cp .env.example .env   # điền LLM / Embedding API keys
docker compose up -d
npm install && npm run db:setup
npm run dev
# WebUI :5173 · API :4173
```

Search modes: **Fast** (FTS/BM25 entity → multi-hop SQL → rerank) · **Standard** (LLM extract entities → multi-route → LLM rerank). Không có API key → fallback local deterministic (test UI).

MCP tools: `sag_ingest_document` · `sag_search` · `sag_explain_search` · `sag_get_event`.

## So với tool khác

| | SAG | Vector RAG thuần | HippoRAG / heavy KG |
|--|-----|------------------|---------------------|
| Cấu trúc | Event + entity nhẹ | Chunk embeddings | Graph nặng / rebuild |
| Multi-hop | SQL multi-hop | Kém | Có, đắt hơn |
| Workbench + trace | ✅ | Thường tự ghép | Thường paper-only |
| MCP per project | ✅ | Tùy stack | Hiếm |
| Tags | `rag` `mcp` | `rag` | `rag` |

## Dùng với Odoo / ai_core

- Pattern ingest + search tool cho agent Odoo; SAG là reference implementation workbench.  
- **NotebookLM MCP** = RAG citation-backed qua NotebookLM; SAG = **self-host** + graph event/entity + MCP local.  
- Upload chính: Markdown / TXT — production cần tự đánh giá trên corpus nội bộ.

## Link

- Repo: https://github.com/Zleap-AI/SAG  
- Paper: https://arxiv.org/abs/2606.15971  
- Benchmark: https://github.com/Zleap-AI/SAG-Benchmark  
- Peers: [hyper-extract.md](hyper-extract.md) · [pageindex.md](pageindex.md) · [notebooklm-mcp.md](notebooklm-mcp.md) · [ragflow.md](ragflow.md) · [understand-anything.md](understand-anything.md)
