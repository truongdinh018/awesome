# Surya OCR

> **Repo:** [datalab-to/surya](https://github.com/datalab-to/surya)  
> **Demo Space:** [xiaoyao9184/surya](https://huggingface.co/spaces/xiaoyao9184/surya)  
> **Category:** DevTools · OCR · Document layout  
> **Tags:** `ocr` · `pdf` · `self-host` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~21k · **License:** Apache-2.0 (code) · OpenRAIL-M (models)  
> Weights: `vikp/*` · `datalab-to/*` (det / rec / layout / table / texify…)

## Đây là gì?

**Surya** là OCR ~650M: đa ngữ (90+), layout + reading order, table recognition.

Gradio Space [xiaoyao9184/surya](https://huggingface.co/spaces/xiaoyao9184/surya) là **demo** — deploy thì dùng upstream `datalab-to/surya` (pip / CLI). Managed service: [datalab.to](https://www.datalab.to) (Surya + Chandra).

**Cùng kiểu:** [MinerU](mineru.md) (PDF→MD pipeline), [dots.ocr](dots-ocr.md) / [Infinity-Parser2](infinity-parser2.md) (VLM parse), [VLMs OCR Playground](vlms-ocr-playground.md).

## Dùng khi nào?

| Nhu cầu | Surya |
|---------|--------|
| OCR + layout + table đa ngữ | ✅ |
| Thử nhanh trên HF | ✅ Space |
| Full document RAG ingest | → [MinerU](mineru.md) / Infinity-Parser2 |

## Chạy thử

```bash
pip install surya-ocr
# hoặc clone https://github.com/datalab-to/surya
surya_ocr DATA_PATH
```

- Demo: https://huggingface.co/spaces/xiaoyao9184/surya  
- Managed: [datalab.to](https://www.datalab.to)

## So với tool khác

| | Surya | MinerU | Infinity-Parser2 |
|--|-------|--------|------------------|
| Shape | OCR + layout models | PDF toolkit | VLM document parser |
| Size | ~650M specialized | Pipeline + models | Flash / Pro (Qwen3.5) |
| Tags | `ocr` `pdf` `cli` | `ocr` `pdf` … | `ocr` `pdf` |

## Dùng với Odoo / ai_core

- Preprocess scan/PDF tiếng Việt + đa ngữ trước kb ingest.  
- So sánh latency/accuracy với MinerU / dots trên bộ tài liệu nội bộ.  
- Space chỉ eval — production tự host weights.

## Link

- Repo: https://github.com/datalab-to/surya  
- Space: https://huggingface.co/spaces/xiaoyao9184/surya  
- Peers: [mineru.md](mineru.md) · [dots-ocr.md](dots-ocr.md) · [infinity-parser2.md](infinity-parser2.md) · [vlms-ocr-playground.md](vlms-ocr-playground.md)
