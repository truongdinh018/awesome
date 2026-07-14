# DeepSeek-OCR

> **Upstream:** [deepseek-ai/DeepSeek-OCR](https://huggingface.co/deepseek-ai/DeepSeek-OCR) (❤️ ~3.3k) · **OCR-2:** [DeepSeek-OCR-2](https://huggingface.co/deepseek-ai/DeepSeek-OCR-2)  
> **Quant (bạn nhắc):** [prithivMLmods/DeepSeek-OCR-Latest-BF16.I64](https://huggingface.co/prithivMLmods/DeepSeek-OCR-Latest-BF16.I64) — bản BF16.I64/community pack, không thay canonical  
> **Category:** DevTools · VLM OCR  
> **Tags:** `ocr` · `self-host` · `cli` · `api`  
> Runtime peers: [TimmyOVO/deepseek-ocr.rs](https://github.com/TimmyOVO/deepseek-ocr.rs) (Rust multi-backend)

## Tổng quan

**DeepSeek-OCR** — model OCR/document VLM của DeepSeek (HF). Dùng **deepseek-ai/** làm nguồn chuẩn; biến thể `DeepSeek-OCR-Latest-BF16.I64` là quantization/repack cộng đồng cho inference nhẹ hơn — kiểm tra card trước khi production.

Peer: [HunyuanOCR](hunyuan-ocr.md), [Nanonets-OCR2](nanonets-ocr2.md), [dots.ocr](dots-ocr.md), [MinerU](mineru.md), [VLMs Playground](vlms-ocr-playground.md).

## Để làm gì?

| Nhu cầu | DeepSeek-OCR |
|---------|--------------|
| Local VLM OCR (upstream weights) | ✅ deepseek-ai |
| Quant BF16.I64 / UI apps | ✅ community + WebUI repos |
| PDF→MD pipeline | → [MinerU](mineru.md) |

## Highlight

```text
Canonical:  huggingface.co/deepseek-ai/DeepSeek-OCR
Quant note: prithivMLmods/DeepSeek-OCR-Latest-BF16.I64
Optional:   deepseek-ocr.rs · DeepSeek-OCR-Web clients
```

## Link

- HF upstream: https://huggingface.co/deepseek-ai/DeepSeek-OCR  
- Quant: https://huggingface.co/prithivMLmods/DeepSeek-OCR-Latest-BF16.I64  
- Peers: [nanonets-ocr2.md](nanonets-ocr2.md) · [hunyuan-ocr.md](hunyuan-ocr.md) · [mineru.md](mineru.md)
