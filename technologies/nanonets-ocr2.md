# Nanonets-OCR2

> **Model:** [nanonets/Nanonets-OCR2-3B](https://huggingface.co/nanonets/Nanonets-OCR2-3B)  
> **Category:** DevTools · Image→Markdown VLM OCR  
> **Tags:** `ocr` · `pdf` · `self-host` · `api`  
> **Ngôn ngữ:** Transformers · Qwen2.5-VL-3B finetune · HF ❤️ ~509 · ↓ ~778k/mo  
> Demo / Plus: [Docstrange](https://docstrange.nanonets.com/) · Family: OCR2-Plus · 3B · 1.5B-exp

## Tổng quan

**Nanonets-OCR2-3B** — VLM biến tài liệu thành **Markdown có cấu trúc**: LaTeX, bảng HTML, `<signature>` / `<watermark>`, checkbox Unicode, mermaid flowchart, handwritten + multilingual, VQA. Serve bằng transformers / vLLM / SGLang / Docstrange API.

Peer: [HunyuanOCR](hunyuan-ocr.md), [DeepSeek-OCR](deepseek-ocr.md), [MinerU](mineru.md), [dots.ocr](dots-ocr.md).

## Để làm gì?

| Nhu cầu | Nanonets-OCR2 |
|---------|---------------|
| Doc image → MD/HTML cho LLM | ✅ |
| OpenAI-compatible local server | ✅ vLLM |
| Full PDF toolkit (merge/split) | → [Stirling-PDF](stirling-pdf.md) |

## Highlight

```bash
vllm serve nanonets/Nanonets-OCR2-3B
# Prompt: extract naturally · tables HTML · equations LaTeX · tags watermark/page
```

## Use case Odoo / ai_core

- Hóa đơn / form → markdown rồi LLM extract fields.  
- Financial tables: `repetition_penalty=1` + prompt financial (xem model card).

## Link

- HF: https://huggingface.co/nanonets/Nanonets-OCR2-3B  
- Peers: [mineru.md](mineru.md) · [hunyuan-ocr.md](hunyuan-ocr.md) · [deepseek-ocr.md](deepseek-ocr.md)
