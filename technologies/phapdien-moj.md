# Bộ Pháp Điển MOJ (phapdien-moj-gov-vn)

> **Dataset:** [tmquan/phapdien-moj-gov-vn](https://huggingface.co/datasets/tmquan/phapdien-moj-gov-vn)  
> **Category:** DevTools · Vietnam legal corpus (Bộ Pháp Điển)  
> **Tags:** `rag` · `dataset` · `self-host`  
> HF ❤️ ~9 · ↓ ~1.5k · **License:** CC-BY-4.0 · **Language:** Vietnamese  
> Source portal: [phapdien.moj.gov.vn](https://phapdien.moj.gov.vn) (Bộ Tư pháp) · backlinks [vbpl.vn](https://vbpl.vn)

## Đây là gì?

Dataset corpus cấp **Điều** của **Bộ Pháp Điển Việt Nam** chính thức: **~65,997 Điều**, 43 chủ đề, 202 đề mục, ontology Việt–Anh, `article_id` phân cấp + link nguồn vbpl.vn.

Configs: `articles` (default) · `subjects` · `tree_nodes` · `ontology_*` · glossary. 100% có `source_links` về vbpl.vn. Citation codes dạng `Điều 1.1.LQ.1`.

**Cùng kiểu:** [Án lệ TOAAN](anle-toaan.md), [WeKnora](weknora.md), [RAGFlow](ragflow.md), [PageIndex](pageindex.md)

## Dùng khi nào?

| Nhu cầu | Dataset này |
|---------|-------------|
| RAG / retrieval theo Điều luật VN | ✅ |
| Tree/ontology chủ đề → đề mục → Điều | ✅ |
| Bản án / án lệ | → [anle-toaan.md](anle-toaan.md) |

## Chạy thử

```python
from datasets import load_dataset
articles = load_dataset("tmquan/phapdien-moj-gov-vn", "articles")
```

Dùng cho agent — luôn verify với văn bản gốc.

## So với tool khác

| | Pháp Điển MOJ | Án lệ TOAAN | RAGFlow |
|--|---------------|-------------|---------|
| Loại | Corpus quy phạm | Corpus án lệ | RAG engine + UI |
| Cấp dữ liệu | Điều luật | Bản án | Ingest tùy ý |
| Tags | `rag` `dataset` | `rag` `dataset` | `rag` `agent` `mcp` |

## Dùng với Odoo / ai_core

- Legal RAG cho app nội bộ (đọc Điều + cite vbpl).  
- Ghép với án lệ TOAAN: quy phạm + thực tiễn xét xử.  
- Luôn verify với văn bản gốc trước khi tư vấn pháp lý.

## Link

- HF: https://huggingface.co/datasets/tmquan/phapdien-moj-gov-vn  
- Peers: [anle-toaan.md](anle-toaan.md) · [weknora.md](weknora.md) · [ragflow.md](ragflow.md) · [pageindex.md](pageindex.md)
