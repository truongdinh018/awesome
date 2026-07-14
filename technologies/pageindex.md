# PageIndex

> **Repo:** [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)  
> **Category:** MCP & AI Agents · RAG (vectorless)  
> **Tags:** `rag` · `mcp` · `self-host` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~34k · **License:** MIT  
> **Site:** [pageindex.ai](https://pageindex.ai) · Slogan: *Reasoning-based RAG · No Vector DB · No Chunking*

## Tổng quan

**PageIndex** (Vectify AI) — RAG **không vector DB / không chunk giả**: biến PDF dài thành **cây hierarchical** kiểu mục lục, rồi LLM **lý luận + tree search** để lấy đúng section — gần cách chuyên gia đọc tài liệu.

Phù hợp báo cáo tài chính, pháp lý, SEC, manual kỹ thuật… nơi **similarity ≠ relevance**. FinanceBench: **98.7%** accuracy (Mafin 2.5 + PageIndex) theo công bố team.

## Để làm gì?

| Nhu cầu | PageIndex |
|---------|-----------|
| RAG tài liệu dài / chuyên môn | ✅ Tree index + reasoning retrieval |
| Tránh “vibe retrieval” vector | ✅ Traceable theo page/section |
| Self-host PDF → tree | ✅ `run_pageindex.py` |
| Agent / IDE qua MCP | ✅ Cloud MCP & API (+ OSS demo agentic) |
| Corpus hàng loạt | ✅ PageIndex File System (file-level trees) |

## Luồng retrieval

```
PDF / Markdown
      │
      ▼
Tree “TOC” (node: title, page range, summary, children)
      │
      ▼
LLM agentic tree search (context-aware)
      │
      ▼
Section / page có cite — explainable
```

## Self-host nhanh

```bash
pip3 install --upgrade -r requirements.txt
# .env → OPENAI_API_KEY=… (LiteLLM multi-model)

python3 run_pageindex.py --pdf_path /path/to/doc.pdf
# hoặc --md_path cho Markdown (heading # = level)
```

Agentic demo (OpenAI Agents SDK):

```bash
pip3 install openai-agents
python3 examples/agentic_vectorless_rag_demo.py
```

> Package OSS dùng PDF parse chuẩn; PDF phức tạp → cloud OCR/tree pipeline tốt hơn (Chat / MCP / API).

## So sánh trong catalog

| | PageIndex | SAG | Hyper-Extract | NotebookLM MCP |
|--|-----------|-----|---------------|----------------|
| Index | Cây section / page | Event–entity graph | Graph / hypergraph từ extract | NotebookLM cloud |
| Vector DB | ❌ | Có (chunk → vector + graph) | Tùy pipeline | Cloud |
| Điểm mạnh | Doc dài, reasoning ToC | Multi-hop động | Extract có schema | Citation Gemini |
| Tags | `rag` `mcp` `cli` | `rag` `mcp` | `extract` `rag` `mcp` | `mcp` `rag` |

## Use case Odoo / ai_core

- Preprocess HĐ / báo cáo / manual → tree trước khi hỏi agent ERP.
- Peer của **ai_rag_core** (Odoo) — thử **vectorless** khi chunk-vector kém trên PDF có cấu trúc.
- Ghép [Stirling-PDF](stirling-pdf.md) (OCR/clean) → PageIndex tree → MCP/agent.

## Link

- Repo: https://github.com/VectifyAI/PageIndex  
- Site / Chat: https://pageindex.ai  
- Docs / MCP: developer hub trên pageindex.ai  
- Intro blog: https://pageindex.ai/blog/pageindex-intro  
- Peer RAG: [sag.md](sag.md) · [hyper-extract.md](hyper-extract.md) · [notebooklm-mcp.md](notebooklm-mcp.md) · [weknora.md](weknora.md) · [ragflow.md](ragflow.md) · [pixelrag.md](pixelrag.md)  
- Preprocess PDF: [stirling-pdf.md](stirling-pdf.md)
