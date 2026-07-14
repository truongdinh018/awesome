# DeepSeek-OCR

> **Upstream:** [deepseek-ai/DeepSeek-OCR](https://huggingface.co/deepseek-ai/DeepSeek-OCR) (❤️ ~3.3k) · **OCR-2:** [DeepSeek-OCR-2](https://huggingface.co/deepseek-ai/DeepSeek-OCR-2)  
> **Quant (bạn nhắc):** [prithivMLmods/DeepSeek-OCR-Latest-BF16.I64](https://huggingface.co/prithivMLmods/DeepSeek-OCR-Latest-BF16.I64) — bản BF16.I64/community pack, không thay canonical  
> **Category:** DevTools · VLM OCR  
> **Tags:** `ocr` · `self-host` · `cli` · `api`  
> Runtime peers: [TimmyOVO/deepseek-ocr.rs](https://github.com/TimmyOVO/deepseek-ocr.rs) (Rust multi-backend)

## Đây là gì?

**DeepSeek-OCR** là model OCR/document VLM của DeepSeek (HF). Dùng **deepseek-ai/** làm nguồn chuẩn; biến thể `DeepSeek-OCR-Latest-BF16.I64` là quantization/repack cộng đồng cho inference nhẹ hơn — kiểm tra card trước khi production.

**Cùng kiểu:** [HunyuanOCR](hunyuan-ocr.md), [Nanonets-OCR2](nanonets-ocr2.md), [dots.ocr](dots-ocr.md), [MinerU](mineru.md), [VLMs Playground](vlms-ocr-playground.md).

## Dùng khi nào?

| Nhu cầu | DeepSeek-OCR |
|---------|--------------|
| Local VLM OCR (upstream weights) | ✅ deepseek-ai |
| Quant BF16.I64 / UI apps | ✅ community + WebUI repos |
| PDF→MD pipeline production | → [MinerU](mineru.md) |

## Chạy thử

```text
Canonical:  huggingface.co/deepseek-ai/DeepSeek-OCR
Quant note: prithivMLmods/DeepSeek-OCR-Latest-BF16.I64
Optional:   deepseek-ocr.rs · DeepSeek-OCR-Web clients
```

- HF upstream: https://huggingface.co/deepseek-ai/DeepSeek-OCR  
- OCR-2: https://huggingface.co/deepseek-ai/DeepSeek-OCR-2  
- Quant: https://huggingface.co/prithivMLmods/DeepSeek-OCR-Latest-BF16.I64  
- Runtime Rust: https://github.com/TimmyOVO/deepseek-ocr.rs

## So với tool khác

| | DeepSeek-OCR | dots.ocr | MinerU |
|--|--------------|----------|--------|
| Focus | VLM OCR document | Layout parsing đa ngữ | PDF→MD pipeline |
| Nguồn chuẩn | deepseek-ai HF | rednote-hilab | OpenDataLab |
| Tags | `ocr` `self-host` `cli` | `ocr` `pdf` | `ocr` `pdf` |

## Dùng với Odoo / ai_core

- OCR tài liệu scan trước khi ingest vào RAG pipeline.  
- Prototype local trước khi chọn MinerU cho PDF phức tạp.  
- Kiểm tra license/card quant cộng đồng trước production.

## Link

- HF upstream: https://huggingface.co/deepseek-ai/DeepSeek-OCR  
- Quant: https://huggingface.co/prithivMLmods/DeepSeek-OCR-Latest-BF16.I64  
- Peers: [nanonets-ocr2.md](nanonets-ocr2.md) · [hunyuan-ocr.md](hunyuan-ocr.md) · [mineru.md](mineru.md) · [dots-ocr.md](dots-ocr.md)
