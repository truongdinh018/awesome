# HunyuanOCR

> **Model:** [tencent/HunyuanOCR](https://huggingface.co/tencent/HunyuanOCR) · **Code:** [Tencent-Hunyuan/HunyuanOCR](https://github.com/Tencent-Hunyuan/HunyuanOCR) (~1.7k★)  
> **Category:** DevTools · VLM OCR  
> **Tags:** `ocr` · `self-host` · `cli`  
> **Ngôn ngữ:** Python / Transformers · HF ❤️ ~771 · ↓ ~526k/mo · **License:** Tencent Hunyuan Community  
> Paper: [arXiv:2607.04884](https://arxiv.org/abs/2607.04884)

## Đây là gì?

**HunyuanOCR** (Tencent) là VLM OCR / document parsing: text spotting, information extraction, text–image translation, multilingual EN/ZH. Transformers + safetensors (`hunyuan_vl`).

**Cùng kiểu:** [Nanonets-OCR2](nanonets-ocr2.md), [DeepSeek-OCR](deepseek-ocr.md), [dots.ocr](dots-ocr.md), [MinerU](mineru.md), [VLMs OCR Playground](vlms-ocr-playground.md).

## Dùng khi nào?

| Nhu cầu | HunyuanOCR |
|---------|------------|
| OCR + parse / IE trên ảnh doc | ✅ |
| Demo so sánh nhiều VLM | → [VLMs Playground](vlms-ocr-playground.md) |
| PDF full-book pipeline | → [MinerU](mineru.md) |

## Chạy thử

```python
from transformers import pipeline
pipe = pipeline("image-text-to-text", model="tencent/HunyuanOCR")
```

## So với tool khác

| | HunyuanOCR | MinerU | Nanonets-OCR2 |
|--|------------|--------|---------------|
| Niche | VLM OCR single-page | PDF→MD pipeline | VLM OCR |
| Input | Ảnh doc | PDF/Office | Ảnh/PDF |
| Tags | `ocr` `self-host` | `ocr` `pdf` | `ocr` `pdf` |

## Dùng với Odoo / ai_core

- OCR hóa đơn / CCCD → structured fields trước validate Odoo.  
- So sánh chất lượng VN với VieNeu không liên quan — đây là document OCR.

## Link

- HF: https://huggingface.co/tencent/HunyuanOCR  
- GitHub: https://github.com/Tencent-Hunyuan/HunyuanOCR  
- Peers: [mineru.md](mineru.md) · [nanonets-ocr2.md](nanonets-ocr2.md) · [deepseek-ocr.md](deepseek-ocr.md)
