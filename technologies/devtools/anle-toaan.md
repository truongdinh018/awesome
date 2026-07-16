# Án lệ TOAAN (anle-toaan-gov-vn)

> **Dataset:** [tmquan/anle-toaan-gov-vn](https://huggingface.co/datasets/tmquan/anle-toaan-gov-vn)  
> **Category:** DevTools · Corpus pháp lý Việt Nam (án lệ / bản án)  
> **Tags:** `rag` · `dataset` · `self-host` · `vietnam` · `legal`
> HF ❤️ ~9 · ↓ ~5.3k · **License:** CC-BY-4.0 · **Language:** Vietnamese  
> Source portal: [anle.toaan.gov.vn](https://anle.toaan.gov.vn) (Tòa án nhân dân tối cao)

## Đây là gì?

Corpus **đa cấp** bản án + án lệ Việt Nam: ~**1,963** văn bản, hierarchy document → section → paragraph → sentence, markdown NFC chuẩn hoá.

HF configs: `documents` · `sentences` · `embed` (2048-D) · `reduce` (PCA/t-SNE/UMAP + HDBSCAN). Phục vụ RAG / QA / classification pháp lý.

**Cùng kiểu:** [Bộ Pháp Điển MOJ](phapdien-moj.md), [protonx-legal-tc](protonx-legal-tc.md), [ViT5-base](vit5-base.md), [WeKnora](../mcp-ai-agents/weknora.md) / [RAGFlow](../mcp-ai-agents/ragflow.md).

## Dùng khi nào?

| Nhu cầu | Dataset này |
|---------|-------------|
| RAG án lệ / bản án tiếng Việt | ✅ |
| Fine-tune / embed pháp lý VN | ✅ configs embed |
| Pháp điển theo Điều | → [phapdien-moj.md](phapdien-moj.md) |

## Chạy thử

```python
from datasets import load_dataset
ds = load_dataset("tmquan/anle-toaan-gov-vn", "documents")
# sentences | embed | reduce
```

- `doc_type`: ban_an · quyet_dinh · …  
- `case_type`: dan_su · hinh_su · hanh_chinh · …  
- Caveat: nội dung công khai cổng TOAAN — tuân thủ pháp luật khi reuse / PII  

## So với tool khác

| | anle-toaan-gov-vn | phapdien-moj | WeKnora / RAGFlow |
|--|-------------------|--------------|-------------------|
| Loại | Dataset án lệ / bản án | Pháp điển theo Điều | Engine RAG |
| Embed sẵn | ✅ config `embed` | Tùy pipeline | ✅ |
| Tags | `rag` `dataset` | `rag` `dataset` | `rag` `agent` |

## Dùng với Odoo / ai_core

- Knowledge base pháp lý nội bộ (RAG vào `ai_rag_core`).  
- Citation + metadata (cấp toà, lĩnh vực) cho agent tư vấn (có human review).

## Link

- HF: https://huggingface.co/datasets/tmquan/anle-toaan-gov-vn  
- Peer: [phapdien-moj.md](phapdien-moj.md) · [weknora.md](../mcp-ai-agents/weknora.md) · [ragflow.md](../mcp-ai-agents/ragflow.md)
