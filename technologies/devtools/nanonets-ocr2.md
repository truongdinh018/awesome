# Nanonets-OCR2

> **Model:** [nanonets/Nanonets-OCR2-3B](https://huggingface.co/nanonets/Nanonets-OCR2-3B)  
> **Category:** DevTools · Image→Markdown VLM OCR  
> **Tags:** `ocr` · `pdf` · `self-host` · `api`  
> **Ngôn ngữ:** Transformers · Qwen2.5-VL-3B finetune · HF ❤️ ~509 · ↓ ~778k/mo  
> Demo / Plus: [Docstrange](https://docstrange.nanonets.com/) · Family: OCR2-Plus · 3B · 1.5B-exp

## Đây là gì?

**Nanonets-OCR2-3B** là VLM (*Vision Language Model*) biến ảnh tài liệu thành **Markdown có cấu trúc**.

Bạn dùng để: xuất LaTeX, bảng HTML, tag `<signature>` / `<watermark>`, checkbox Unicode, flowchart mermaid, chữ viết tay + đa ngôn ngữ, và VQA. Serve qua transformers / vLLM / SGLang / Docstrange API.

**Cùng kiểu:** [HunyuanOCR](hunyuan-ocr.md), [DeepSeek-OCR](deepseek-ocr.md), [MinerU](mineru.md), [dots.ocr](dots-ocr.md).

## Dùng khi nào?

| Nhu cầu | Nanonets-OCR2 |
|---------|---------------|
| Ảnh/PDF → MD/HTML cho LLM | ✅ |
| Server local kiểu OpenAI | ✅ vLLM |
| Toolkit PDF merge/split | → [Stirling-PDF](stirling-pdf.md) |

## Chạy thử

```bash
vllm serve nanonets/Nanonets-OCR2-3B
# Prompt: extract naturally · tables HTML · equations LaTeX · tags watermark/page
```

Bảng tài chính: dùng `repetition_penalty=1` + prompt financial (xem model card).

## So với tool khác

| | Nanonets-OCR2 | MinerU | DeepSeek-OCR |
|--|---------------|--------|--------------|
| Shape | VLM → Markdown | Pipeline layout → MD | VLM OCR |
| Serve | vLLM / SGLang | CLI / API | vLLM |
| Tags | `ocr` `pdf` `api` | `ocr` `pdf` | `ocr` `pdf` |

## Dùng với Odoo / ai_core

- Hóa đơn / form → markdown rồi LLM extract fields.  
- Bảng tài chính: `repetition_penalty=1` + prompt financial (xem model card).  
- Ghép pipeline ingest trước `ai_rag_core`.

## Link

- HF: https://huggingface.co/nanonets/Nanonets-OCR2-3B  
- Peers: [mineru.md](mineru.md) · [hunyuan-ocr.md](hunyuan-ocr.md) · [deepseek-ocr.md](deepseek-ocr.md)
