# VietAI ViT5-base

> **HF:** [VietAI/vit5-base](https://huggingface.co/VietAI/vit5-base)  
> **Category:** DevTools · Vietnamese pretrained seq2seq (T5)  
> **Tags:** `self-host` · `cli` · `api`  
> HF ❤️ ~20 · ↓ ~12k/mo · **License:** MIT  
> Paper: ViT5 (NAACL 2022 SRW) · train data: CC100 Vietnamese

## Đây là gì?

**ViT5-base** là encoder-decoder Transformer pretrained **text-to-text** cho tiếng Việt (summarization, translation, generation, QA fine-tune…).

Backbone phổ biến cho nhiều model VN (vd. [protonx-legal-tc](protonx-legal-tc.md) ghi nhận vit5-base). Không phải chat LLM — là model seq2seq cần fine-tune cho task cụ thể.

**Cùng kiểu:** [MiniCPM](minicpm.md) (LLM đa năng), [protonx-legal-tc](protonx-legal-tc.md) (correction pháp lý), corpus [Án lệ](anle-toaan.md) / [Pháp Điển](phapdien-moj.md).

## Dùng khi nào?

| Nhu cầu | ViT5-base |
|---------|-----------|
| Fine-tune task VN (sum / translate /…) | ✅ |
| Backbone cho correction / domain | ✅ |
| Chat LLM lớn | → [MiniCPM](minicpm.md) / LocalAI |
| Chỉ sửa OCR pháp lý sẵn | → [protonx-legal-tc](protonx-legal-tc.md) |

## Chạy thử

```python
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
tokenizer = AutoTokenizer.from_pretrained("VietAI/vit5-base")
model = AutoModelForSeq2SeqLM.from_pretrained("VietAI/vit5-base")
```

Repo/citation: xem card HF · ACL Anthology 2022.naacl-srw.18

## So với tool khác

| | ViT5-base | MiniCPM | protonx-legal-tc |
|--|-----------|---------|------------------|
| Shape | Seq2seq backbone | LLM chat | Legal correction |
| License | MIT | Open | NC |
| Tags | `self-host` `cli` `api` | `api` `self-host` | `self-host` |

## Dùng với Odoo / ai_core

- Fine-tune nội bộ (tóm tắt ticket VN, normalize field text).  
- Preprocess / feature extract trước RAG.  
- MIT — dễ embed commercial hơn protonx NC.

## Link

- HF: https://huggingface.co/VietAI/vit5-base  
- Peers: [protonx-legal-tc.md](protonx-legal-tc.md) · [minicpm.md](minicpm.md) · [anle-toaan.md](anle-toaan.md) · [localai.md](localai.md)
