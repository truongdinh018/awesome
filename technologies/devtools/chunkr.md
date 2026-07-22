# Chunkr

> **Repo:** [lumina-ai-inc/chunkr](https://github.com/lumina-ai-inc/chunkr)  
> **Category:** DevTools · Document intelligence (layout + OCR + chunk)  
> **Tags:** `ocr` · `pdf` · `rag` · `self-host` · `api` · `docker`  
> **Ngôn ngữ:** Rust · **⭐** ~4.0k · **License:** AGPL-3.0  
> **Site:** [chunkr.ai](https://chunkr.ai) · Cloud API khác OSS (model proprietary)

## Đây là gì?

**Chunkr** là dịch vụ **document intelligence** mã nguồn mở: layout analysis, OCR + bounding box, xuất HTML/Markdown có cấu trúc, và **semantic chunking** — biến PDF / PPT / Word / ảnh thành chunk sẵn cho RAG/LLM.

Self-host bằng Docker Compose (GPU khuyến nghị; có CPU compose). Cloud [chunkr.ai](https://www.chunkr.ai) dùng model nội bộ riêng — OSS repo dùng community/open models, phù hợp dev/test hoặc on-prem minh bạch. License **AGPL-3.0** — đọc kỹ nếu ship commercial.

**Cùng kiểu:** [MinerU](mineru.md) / [dots.ocr](dots-ocr.md) (OCR/PDF parse), [MarkItDown](markitdown.md) (file→markdown nhẹ), [RAGFlow](../mcp-ai-agents/ragflow.md) (RAG UI full — Chunkr là bước parse/chunk phía trước).

## Dùng khi nào?

| Nhu cầu | Chunkr |
|---------|--------|
| PDF phức tạp → chunk RAG (layout + OCR) | ✅ primary |
| Self-host API document intelligence | ✅ Docker Compose |
| Chỉ convert file → MD nhanh, không layout | → [MarkItDown](markitdown.md) |
| OCR model đơn (CLI) | → [MinerU](mineru.md) / [Surya](surya.md) |
| RAG platform end-to-end (UI + agent) | → [RAGFlow](../mcp-ai-agents/ragflow.md) |

## Chạy thử

```bash
git clone https://github.com/lumina-ai-inc/chunkr
cd chunkr
cp .env.example .env
cp models.example.yaml models.yaml   # cấu hình LLM/VLM

# GPU:
docker compose up -d
# CPU-only: xem compose.cpu.yaml trong repo
```

Mở web UI / API local theo docs trong README. Cloud trial: [chunkr.ai](https://www.chunkr.ai).

## So với tool khác

| | Chunkr | MinerU | RAGFlow |
|--|--------|--------|---------|
| Focus | Layout+OCR+chunk API | PDF→MD/structured | RAG platform full |
| Self-host | Docker Compose | CLI / self-host | Docker |
| Tags | `ocr` `pdf` `rag` `api` | `ocr` `pdf` `cli` | `rag` `agent` `mcp` |

## Dùng với Odoo / ai_core

- Preprocess HDSD / hợp đồng / scan trước khi ingest `ai_core` RAG — giữ bounding box để cite trang.  
- Pipeline: Chunkr chunk → vector store → agent trả lời phiếu duyệt có trích dẫn.  
- AGPL: ưu tiên self-host nội bộ; commercial SaaS → cân nhắc Cloud API hoặc license thương mại.

## Link

- Repo: https://github.com/lumina-ai-inc/chunkr · Cloud: https://chunkr.ai  
- Peers: [mineru.md](mineru.md) · [dots-ocr.md](dots-ocr.md) · [markitdown.md](markitdown.md) · [stirling-pdf.md](stirling-pdf.md) · [ragflow.md](../mcp-ai-agents/ragflow.md)
