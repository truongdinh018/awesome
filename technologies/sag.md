# SAG (Zleap AI)

> **Repo:** [Zleap-AI/SAG](https://github.com/Zleap-AI/SAG)  
> **Category:** MCP & AI Agents · RAG  
> **Tags:** `rag` · `mcp` · `self-host`  
> **Ngôn ngữ:** TypeScript · **⭐** ~2.0k · **License:** MIT  
> **Paper:** [arXiv:2606.15971](https://arxiv.org/abs/2606.15971)

## Tổng quan

**SAG** = phương pháp **graph retrieval** cho dữ liệu động quy mô lớn, kèm **workbench** out-of-the-box: upload Markdown/TXT → chunk → vector → extract event/entity → hỏi đáp kiểu ChatGPT, xem graph, search trace, và **MCP** theo từng project.

Khác RAG “nhồi nhiều chunk”: SAG tổ chức tri thức nhẹ hơn knowledge graph nặng:

```
chunk → event          (đơn vị ngữ nghĩa đầy đủ)
chunk → entities       (index + mở rộng quan hệ)
event ↔ entities
```

Retrieval bắt đầu từ event khớp, rồi **multi-hop** qua quan hệ — không rebuild KG nặng mỗi lần.

## Vì sao đáng chú ý

Trên HotpotQA / 2WikiMultiHop / MuSiQue (embedding `bge-large-en-v1.5`, LLM `qwen3.6-flash`), vs **HippoRAG 2**:

| Metric | HippoRAG 2 | SAG |
|--------|------------|-----|
| Avg **Recall@2** | 68.14% | **79.30%** (+11.16 pp, ~+16.4% tương đối) |
| MuSiQue Recall@5 | 65.13% | **80.04%** (NV-Embed-v2 → 81.71%) |

Recall@2 cao hơn → agent chạm evidence sớm hơn, ít token/context nhiễu hơn.

Benchmark code: [Zleap-AI/SAG-Benchmark](https://github.com/Zleap-AI/SAG-Benchmark)

## Workbench làm được gì

- Quản lý **project** (docs, chat, graph, MCP riêng)
- Upload nhiều `.md` / `.txt`, theo dõi pipeline xử lý
- Soi **chunks / events / entities / embeddings**
- Chat multi-turn + citation (click số → chunk gốc)
- **Search Trace** realtime (bước retrieval + latency)
- Raw logs LLM / Embedding / Rerank (cache browser)
- **Knowledge graph** drag/zoom/expand
- **MCP** — mỗi project có `mcpServers` JSON riêng

## Search modes

| Mode | Pipeline | Khi nào dùng |
|------|----------|--------------|
| **Fast** | FTS/BM25 entity → multi-hop SQL → `qwen3-rerank` top-k | Nhanh; không LLM extract query |
| **Standard** | LLM extract entities → multi-route → LLM rerank | So sánh độ chính xác cao hơn |

Cả hai đều dùng index event/entity + SQL multi-hop — **không** chỉ vector search thuần.

## Tech stack

| Lớp | Công nghệ |
|-----|-----------|
| Frontend | React + Vite + Tailwind |
| Backend | Fastify, MCP TypeScript SDK |
| Data | PostgreSQL + **pgvector** + FTS + SQL multi-hop |
| Models | OpenAI-compatible LLM / Embedding / Rerank |

Yêu cầu: Node.js ≥ 20, PostgreSQL + pgvector (`docker compose up -d` có sẵn).

## MCP tools (agent)

| Tool | Vai trò |
|------|---------|
| `sag_ingest_document` | Ingest + chunk/event/entity/vector |
| `sag_search` | Multi-route retrieval + trace |
| `sag_explain_search` | Giải thích pipeline / trace |
| `sag_get_event` | Chi tiết event theo ID |

`SAG_MCP_SOURCE_ID` bind sẵn project → agent không cần truyền `projectId`.

## Quick start (tóm tắt)

```bash
git clone https://github.com/Zleap-AI/SAG.git && cd SAG
cp .env.example .env   # điền LLM / Embedding API keys
docker compose up -d
npm install && npm run db:setup
npm run dev
# WebUI :5173 · API :4173
```

Không có API key → fallback local deterministic (test UI), chất lượng retrieval thật cần remote models.

## So sánh

| | SAG | Vector RAG thuần | HippoRAG / heavy KG |
|--|-----|------------------|---------------------|
| Cấu trúc | Event + entity nhẹ | Chunk embeddings | Graph nặng / rebuild |
| Multi-hop | SQL multi-hop | Kém (trừ agent tự query) | Có, đắt hơn |
| Workbench + trace | ✅ | Thường tự ghép | Thường paper-only |
| MCP per project | ✅ | Tùy stack | Hiếm |
| Dynamic corpus | Thiết kế cho scale động | Re-embed liên tục | Rebuild graph tốn kém |

## Liên quan Awesome AI / ai_core

- **NotebookLM MCP** — RAG citation-backed qua NotebookLM; SAG = **self-host** + graph event/entity + MCP local
- **[Hyper-Extract](hyper-extract.md)** — extract đa cấu trúc (graph/hypergraph/spatial) bằng CLI `he`; SAG mạnh retrieval workbench
- **[PageIndex](pageindex.md)** — RAG vectorless (cây ToC + reasoning); SAG = event/entity + vector
- **ai_rag_core / xb_mcp** — pattern ingest + search tool cho agent Odoo; SAG là reference implementation workbench
- Có thể ghép STT/TTS catalog (faster-whisper, VoxCPM) → voice Q&A trên KB SAG

## Use case

- Q&A tài liệu dự án / personal knowledge base
- Prototype RAG cho agent (đặc biệt multi-hop)
- Debug pipeline retrieval (trace + raw logs)
- MCP tool cho Cursor / Claude / agent ngoài

## Hạn chế

- Upload chính: Markdown / TXT (không phải full OCR PDF suite)
- Phụ thuộc provider OpenAI-compatible (LLM + embed + rerank)
- Công nghệ còn mới (paper 2026); production cần tự đánh giá trên corpus nội bộ

## Link

- Repo: https://github.com/Zleap-AI/SAG
- Companion extract: [hyper-extract.md](hyper-extract.md)
- Paper: https://arxiv.org/abs/2606.15971
- Benchmark: https://github.com/Zleap-AI/SAG-Benchmark
- README CN: [README-CN.md](https://github.com/Zleap-AI/SAG/blob/main/README-CN.md)
