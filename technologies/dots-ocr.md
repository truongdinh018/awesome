# dots.ocr

> **Repo:** [rednote-hilab/dots.ocr](https://github.com/rednote-hilab/dots.ocr) · **HF:** [rednote-hilab/dots.ocr](https://huggingface.co/rednote-hilab/dots.ocr)  
> **Demo Space:** [yahtzee/Dots-OCR](https://huggingface.co/spaces/yahtzee/Dots-OCR) *(fork demo; upstream = rednote-hilab)*  
> **Category:** DevTools · OCR layout tài liệu đa ngữ  
> **Tags:** `ocr` · `pdf` · `self-host` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~9.0k · HF ❤️ ~1.3k · **License:** MIT

## Đây là gì?

**dots.ocr** là VLM **multilingual document layout parsing** trong một model: layout + OCR + cấu trúc. Demo Gradio trên HF Spaces (vd. yahtzee) chỉ là playground — dùng upstream code/weights khi deploy.

**Cùng kiểu:** [HunyuanOCR](hunyuan-ocr.md), [Nanonets-OCR2](nanonets-ocr2.md), [MinerU](mineru.md), [DeepSeek-OCR](deepseek-ocr.md).

## Dùng khi nào?

| Nhu cầu | dots.ocr |
|---------|----------|
| Parse layout đa ngữ → structured | ✅ |
| Chỉ UI thử nhanh | ✅ HF Space |
| Toolkit PDF→MD production | → [MinerU](mineru.md) |

## Chạy thử

```bash
git clone https://github.com/rednote-hilab/dots.ocr.git
# Follow README for weights + inference
```

- Demo Space: https://huggingface.co/spaces/yahtzee/Dots-OCR  
- HF weights: https://huggingface.co/rednote-hilab/dots.ocr

## So với tool khác

| | dots.ocr | DeepSeek-OCR | MinerU |
|--|----------|--------------|--------|
| Focus | Layout parsing đa ngữ | VLM OCR document | PDF→MD pipeline |
| Demo nhanh | ✅ HF Space | WebUI repos | Docker |
| Tags | `ocr` `pdf` `cli` | `ocr` `self-host` | `ocr` `pdf` |

## Dùng với Odoo / ai_core

- Parse tài liệu scan/PDF trước khi ingest RAG.  
- Thử nhanh trên HF Space trước khi self-host.  
- Production PDF phức tạp → cân nhắc [MinerU](mineru.md).

## Link

- Repo: https://github.com/rednote-hilab/dots.ocr  
- Space (demo): https://huggingface.co/spaces/yahtzee/Dots-OCR  
- Peers: [hunyuan-ocr.md](hunyuan-ocr.md) · [mineru.md](mineru.md) · [vlms-ocr-playground.md](vlms-ocr-playground.md) · [deepseek-ocr.md](deepseek-ocr.md)
