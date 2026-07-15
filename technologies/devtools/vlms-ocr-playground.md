# VLMs OCR Playground

> **Space:** [mcikalmerdeka/vlms-ocr-playground](https://huggingface.co/spaces/mcikalmerdeka/vlms-ocr-playground)  
> **Category:** DevTools · OCR comparison playground  
> **Tags:** `ocr` · `self-host`  
> Gradio · HF ❤️ ~3 · **License:** MIT (space) · *không phải model — là app so sánh*

## Đây là gì?

**VLMs OCR Playground** là Gradio Space để **so sánh** các VLM OCR open-source side-by-side (tag: vision-language-models, OCR).

Dùng khi đánh giá Hunyuan / DeepSeek / Nanonets / dots trước khi chọn stack production. Không phải model — chỉ là app demo A/B.

**Cùng kiểu:** [HunyuanOCR](hunyuan-ocr.md) · [DeepSeek-OCR](deepseek-ocr.md) · [Nanonets-OCR2](nanonets-ocr2.md) · [dots.ocr](dots-ocr.md) · [MinerU](mineru.md) · [Surya](surya.md).

## Dùng khi nào?

| Nhu cầu | Playground |
|---------|------------|
| A/B OCR models trên cùng ảnh | ✅ |
| Deploy production OCR | ❌ → chọn model riêng |

## Chạy thử

Mở Space: https://huggingface.co/spaces/mcikalmerdeka/vlms-ocr-playground

Upload ảnh/PDF → so sánh output các VLM OCR. Related demo: [yahtzee/Dots-OCR](https://huggingface.co/spaces/yahtzee/Dots-OCR) → [dots-ocr.md](dots-ocr.md).

## So với tool khác

| | VLMs Playground | Surya | MinerU |
|--|-----------------|-------|--------|
| Vai trò | A/B compare demo | OCR + layout models | PDF→MD pipeline |
| Production | ❌ | ✅ self-host | ✅ self-host |
| Tags | `ocr` | `ocr` `pdf` `cli` | `ocr` `pdf` |

## Dùng với Odoo / ai_core

- Eval OCR trên bộ hóa đơn/scan nội bộ trước chọn MinerU / dots / Surya.  
- Kết quả playground không thay benchmark latency production.  
- Sau khi chọn model → integrate vào `ai_rag_core` ingest.

## Link

- Space: https://huggingface.co/spaces/mcikalmerdeka/vlms-ocr-playground  
- Peers: [hunyuan-ocr.md](hunyuan-ocr.md) · [dots-ocr.md](dots-ocr.md) · [mineru.md](mineru.md) · [surya.md](surya.md) · [infinity-parser2.md](infinity-parser2.md)
