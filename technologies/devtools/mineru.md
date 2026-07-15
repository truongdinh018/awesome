# MinerU

> **Repo:** [opendatalab/MinerU](https://github.com/opendatalab/MinerU)  
> **Category:** DevTools · Document OCR / PDF → Markdown  
> **Tags:** `ocr` · `pdf` · `cli` · `self-host` · `api`  
> **Ngôn ngữ:** Python · **⭐** ~74.6k · **License:** (xem repo)  
> Docs: [opendatalab.github.io/MinerU](https://opendatalab.github.io/MinerU/)

## Đây là gì?

**MinerU** là pipeline chuyển PDF / Office phức tạp thành **Markdown/JSON LLM-ready** cho agentic workflows: layout, bảng, công thức, multi-column. Không chỉ OCR thô — document parsing end-to-end.

**Cùng kiểu:** [Stirling-PDF](stirling-pdf.md), [HunyuanOCR](hunyuan-ocr.md), [Nanonets-OCR2](nanonets-ocr2.md), [DeepSeek-OCR](deepseek-ocr.md), [dots.ocr](dots-ocr.md).

## Dùng khi nào?

| Nhu cầu | MinerU |
|---------|--------|
| PDF scanning / báo cáo → MD cho RAG | ✅ |
| Chỉ toolkit PDF edit/merge | → [Stirling-PDF](stirling-pdf.md) |
| VLM OCR single-page image | → Hunyuan / Nanonets / DeepSeek |

## Chạy thử

```bash
# Follow official docs — pip/uv + model weights
# Output: markdown / JSON structured for LLM ingest
```

## So với tool khác

| | MinerU | Stirling-PDF | HunyuanOCR |
|--|--------|--------------|------------|
| Niche | PDF→MD pipeline | PDF edit/merge | VLM OCR single-page |
| Output | MD/JSON LLM-ready | PDF ops | Text/IE |
| Tags | `ocr` `pdf` `api` | `pdf` `ocr` | `ocr` |

## Dùng với Odoo / ai_core

- Preprocess chứng từ / hợp đồng PDF → `ai_rag_core` / Hyper-Extract.  
- Batch offline trước khi agent đọc.

## Link

- Repo: https://github.com/opendatalab/MinerU  
- Peers: [stirling-pdf.md](stirling-pdf.md) · [hunyuan-ocr.md](hunyuan-ocr.md) · [deepseek-ocr.md](deepseek-ocr.md)
