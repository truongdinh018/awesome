# dots.ocr

> **Repo:** [rednote-hilab/dots.ocr](https://github.com/rednote-hilab/dots.ocr) · **HF:** [rednote-hilab/dots.ocr](https://huggingface.co/rednote-hilab/dots.ocr)  
> **Demo Space:** [yahtzee/Dots-OCR](https://huggingface.co/spaces/yahtzee/Dots-OCR) *(fork demo; upstream = rednote-hilab)*  
> **Category:** DevTools · Multilingual document layout OCR  
> **Tags:** `ocr` · `pdf` · `self-host` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~9.0k · HF ❤️ ~1.3k · **License:** MIT

## Tổng quan

**dots.ocr** — VLM **multilingual document layout parsing** trong một model: layout + OCR + cấu trúc. Demo Gradio trên HF Spaces (vd. yahtzee) chỉ là playground — dùng upstream code/weights khi deploy.

Peer: [HunyuanOCR](hunyuan-ocr.md), [Nanonets-OCR2](nanonets-ocr2.md), [MinerU](mineru.md), [DeepSeek-OCR](deepseek-ocr.md).

## Để làm gì?

| Nhu cầu | dots.ocr |
|---------|----------|
| Parse layout đa ngữ → structured | ✅ |
| Chỉ UI thử nhanh | ✅ HF Space |
| Toolkit PDF→MD production | → [MinerU](mineru.md) |

## Highlight

```bash
git clone https://github.com/rednote-hilab/dots.ocr.git
# Follow README for weights + inference
```

## Link

- Repo: https://github.com/rednote-hilab/dots.ocr  
- Space (demo): https://huggingface.co/spaces/yahtzee/Dots-OCR  
- Peers: [hunyuan-ocr.md](hunyuan-ocr.md) · [mineru.md](mineru.md) · [vlms-ocr-playground.md](vlms-ocr-playground.md)
