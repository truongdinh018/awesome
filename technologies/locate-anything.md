# LocateAnything-3B

> **Model:** [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)  
> **Category:** CV & Edge · Vision-language grounding *(text localization + OCR-adjacent)*  
> **Tags:** `cv` · `ocr` · `self-host` · `cli`  
> HF ❤️ ~2.7k · ↓ ~1.5M/mo · **License:** NVIDIA (non-commercial research)  
> Demo: [spaces/nvidia/LocateAnything](https://huggingface.co/spaces/nvidia/LocateAnything) · Code: [NVlabs/Eagle Embodied](https://github.com/NVlabs/Eagle/tree/main/Embodied) · Paper: [arXiv:2605.27365](https://arxiv.org/abs/2605.27365)

## Đây là gì?

**LocateAnything-3B** (NVIDIA Eagle) là VLM **grounding** nhanh: referring expression, multi-object detection, GUI grounding, **text localization** nhờ Parallel Box Decoding. Không thay MinerU/Nanonets cho PDF→Markdown; complementary khi cần **bounding box** / locate vùng text hoặc UI element.

**Cùng kiểu:** [ALPR](alpr.md), [HunyuanOCR](hunyuan-ocr.md), [DeepSeek-OCR](deepseek-ocr.md), [VLMs Playground](vlms-ocr-playground.md).

## Dùng khi nào?

| Nhu cầu | LocateAnything |
|---------|----------------|
| NL → boxes / points trên ảnh | ✅ |
| Doc → full markdown | → [MinerU](mineru.md) / [Nanonets-OCR2](nanonets-ocr2.md) |
| Commercial product (không phải NVIDIA) | ❌ non-commercial license |

## Chạy thử

```python
from transformers import pipeline
pipe = pipeline("image-text-to-text", model="nvidia/LocateAnything-3B", trust_remote_code=True)
```

## So với tool khác

| | LocateAnything | HunyuanOCR | MinerU |
|--|----------------|------------|--------|
| Niche | VL grounding / bbox | VLM OCR | PDF→MD pipeline |
| Commercial | ❌ non-commercial | xem license | xem repo |
| Tags | `cv` `ocr` | `ocr` | `ocr` `pdf` |

## Dùng với Odoo / ai_core

- Ground region trên scan trước crop → OCR model khác.  
- GUI / computer-use: locate button/text (research).

## Link

- HF: https://huggingface.co/nvidia/LocateAnything-3B  
- Peers: [alpr.md](alpr.md) · [hunyuan-ocr.md](hunyuan-ocr.md) · [mineru.md](mineru.md)
