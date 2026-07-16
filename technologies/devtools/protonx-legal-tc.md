# ProtonX Legal Text Correction

> **HF:** [protonx-models/protonx-legal-tc](https://huggingface.co/protonx-models/protonx-legal-tc)  
> **Category:** DevTools · Vietnamese legal text correction (OCR post-process)  
> **Tags:** `ocr` · `self-host` · `cli` · `vietnam` · `legal`
> HF ❤️ ~43 · ↓ ~30k/mo · **~0.2B** Seq2Seq · **License:** ProtonX NC (v1.3-NC — xem LICENSE.md)  
> Base lineage: [VietAI/vit5-base](vit5-base.md)

## Đây là gì?

**protonx-legal-tc** (v1.3.1) là model **sửa lỗi chữ tiếng Việt** chuyên pháp lý / enterprise: chuẩn hóa output OCR (PaddleOCR…), diacritics, word segmentation, thuật ngữ pháp lý, dấu câu.

**Correction ≠ rewrite** — không paraphrase, không hallucination thêm điều khoản. Train ~800k pairs (30k expert annotate). Benchmark ROUGE-L ~**96.95%** trên set legal validation. Max context ~160 tokens — chunk dài điều khoản khi ingest.

**Cùng kiểu:** [MinerU](mineru.md), [Surya](surya.md), [Án lệ TOAAN](anle-toaan.md), [Pháp Điển MOJ](phapdien-moj.md), [vit5-base](vit5-base.md)

## Dùng khi nào?

| Nhu cầu | protonx-legal-tc |
|---------|------------------|
| Post-OCR văn bản pháp lý / HĐ VN | ✅ |
| Preprocess trước legal RAG | ✅ |
| Tóm tắt / sinh văn bản sáng tạo | ❌ → LLM / [vit5-base](vit5-base.md) fine-tune khác |
| OCR layout PDF | → [MinerU](mineru.md) |

## Chạy thử

```python
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
tok = AutoTokenizer.from_pretrained("protonx-models/protonx-legal-tc")
model = AutoModelForSeq2SeqLM.from_pretrained("protonx-models/protonx-legal-tc")
# max context ~160 tokens — xem card HF
```

## So với tool khác

| | protonx-legal-tc | MinerU | vit5-base |
|--|------------------|--------|-----------|
| Vai trò | Sửa chữ OCR pháp lý | Layout OCR → MD | Backbone Seq2Seq |
| Rewrite | ❌ | — | Tùy fine-tune |
| Tags | `ocr` `self-host` `cli` | `ocr` `pdf` | `nlp` |

## Dùng với Odoo / ai_core

- Pipeline `ai_parse_mineru_extend` → protonx-legal-tc → chunk RAG pháp lý.  
- License **NC** — đọc LICENSE trước commercial.  
- Human review khi dùng tư vấn pháp lý.

## Link

- HF: https://huggingface.co/protonx-models/protonx-legal-tc  
- Peers: [vit5-base.md](vit5-base.md) · [mineru.md](mineru.md) · [anle-toaan.md](anle-toaan.md) · [phapdien-moj.md](phapdien-moj.md)
