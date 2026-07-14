# MinerU

> **Repo:** [opendatalab/MinerU](https://github.com/opendatalab/MinerU)  
> **Category:** DevTools · Document OCR / PDF → Markdown  
> **Tags:** `ocr` · `pdf` · `cli` · `self-host` · `api`  
> **Ngôn ngữ:** Python · **⭐** ~74.6k · **License:** (xem repo)  
> Docs: [opendatalab.github.io/MinerU](https://opendatalab.github.io/MinerU/)

## Tổng quan

**MinerU** — pipeline chuyển PDF / Office phức tạp thành **Markdown/JSON LLM-ready** cho agentic workflows: layout, bảng, công thức, multi-column. Không chỉ OCR thô — document parsing end-to-end.

Peer: [Stirling-PDF](stirling-pdf.md), [HunyuanOCR](hunyuan-ocr.md), [Nanonets-OCR2](nanonets-ocr2.md), [DeepSeek-OCR](deepseek-ocr.md), [dots.ocr](dots-ocr.md).

## Để làm gì?

| Nhu cầu | MinerU |
|---------|--------|
| PDF scanning / báo cáo → MD cho RAG | ✅ |
| Chỉ toolkit PDF edit/merge | → [Stirling-PDF](stirling-pdf.md) |
| VLM OCR single-page image | → Hunyuan / Nanonets / DeepSeek |

## Highlight

```bash
# Follow official docs — pip/uv + model weights
# Output: markdown / JSON structured for LLM ingest
```

## Use case Odoo / ai_core

- Preprocess chứng từ / hợp đồng PDF → `ai_rag_core` / Hyper-Extract.  
- Batch offline trước khi agent đọc.

## Link

- Repo: https://github.com/opendatalab/MinerU  
- Peers: [stirling-pdf.md](stirling-pdf.md) · [hunyuan-ocr.md](hunyuan-ocr.md) · [deepseek-ocr.md](deepseek-ocr.md)
