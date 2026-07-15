# Infinity-Parser2

> **Repo:** [infly-ai/INF-MLLM](https://github.com/infly-ai/INF-MLLM) *(Infinity-Parser2)*  
> **Demo Space:** [infly/Infinity-Parser2-Demo](https://huggingface.co/spaces/infly/Infinity-Parser2-Demo)  
> **Models:** [Infinity-Parser2-Flash](https://huggingface.co/infly/Infinity-Parser2-Flash) · [Infinity-Parser2-Pro](https://huggingface.co/infly/Infinity-Parser2-Pro) · *(v1: [Infinity-Parser-7B](https://huggingface.co/infly/Infinity-Parser-7B))*  
> **Category:** DevTools · Document VLM OCR / PDF parsing  
> **Tags:** `ocr` · `pdf` · `self-host` · `cli`  
> Qwen3.5 / MoE · image-text-to-text · paper [arXiv:2506.03197](https://arxiv.org/abs/2506.03197)

## Đây là gì?

**Infinity-Parser2** là VLM **document parsing / OCR** (Flash + Pro): PDF/ảnh → cấu trúc text. Space [Infinity-Parser2-Demo](https://huggingface.co/spaces/infly/Infinity-Parser2-Demo) clone `INF-MLLM` và chạy Gradio; dùng weights HF khi self-host.

**Cùng kiểu:** [Surya](surya.md) (OCR chuyên biệt nhẹ), [MinerU](mineru.md), [dots.ocr](dots-ocr.md), [DeepSeek-OCR](deepseek-ocr.md).

## Dùng khi nào?

| Nhu cầu | Infinity-Parser2 |
|---------|------------------|
| Parse PDF/ảnh phức tạp (VLM) | ✅ Flash / Pro |
| Demo Gradio | ✅ HF Space |
| OCR nhanh đa ngữ nhỏ | → [Surya](surya.md) |
| Pipeline PDF→MD ổn định | → [MinerU](mineru.md) |

## Chạy thử

```bash
# Demo Space tự clone repo:
# https://github.com/infly-ai/INF-MLLM → Infinity-Parser2/

# Weights
# https://huggingface.co/infly/Infinity-Parser2-Flash
# https://huggingface.co/infly/Infinity-Parser2-Pro
```

## So với tool khác

| | Infinity-Parser2 | Surya | dots.ocr |
|--|------------------|-------|----------|
| Shape | Document VLM | OCR + layout | Multilingual layout VLM |
| Demo | infly Space | xiaoyao9184/surya | yahtzee/Dots-OCR |
| Tags | `ocr` `pdf` | `ocr` `pdf` `cli` | `ocr` `pdf` `cli` |

## Dùng với Odoo / ai_core

- Benchmark parse HĐ / form cạnh MinerU trước khi gắn `ai_parse_mineru_extend`.  
- Flash cho latency; Pro khi cần chất lượng cao hơn.  
- Space = playground; production load model self-host.

## Link

- Space: https://huggingface.co/spaces/infly/Infinity-Parser2-Demo  
- Repo: https://github.com/infly-ai/INF-MLLM  
- Models: Flash · Pro · Parser-7B (v1)  
- Peers: [surya.md](surya.md) · [mineru.md](mineru.md) · [dots-ocr.md](dots-ocr.md) · [deepseek-ocr.md](deepseek-ocr.md)
