# PixelRAG

> **Repo:** [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG)  
> **Category:** MCP & AI Agents · Pixel-native visual RAG  
> **Tags:** `rag` · `cli` · `skill` · `api`  
> **Ngôn ngữ:** Python · **⭐** ~6.6k · **License:** Apache-2.0  
> Paper: [arXiv 2606.28344](https://arxiv.org/pdf/2606.28344) · Demo: [pixelrag.ai](https://pixelrag.ai) · API: [api.pixelrag.ai](https://api.pixelrag.ai)

## Đây là gì?

**PixelRAG** (Berkeley SkyLab / BAIR) — *Web Screenshots Beat Text for RAG*: render docs/web/PDF thành **screenshot tiles**, embed bằng **VLM** (`Qwen3-VL-Embedding` LoRA), retrieve theo hình thay vì parse HTML/text.

Giữ tables, charts, layout, infographics mà text RAG thường mất. Hosted index **8.28M Wikipedia**; self-host FAISS + `pixelrag serve`.

**Cùng kiểu:** [PageIndex](pageindex.md), [RAGFlow](ragflow.md), [Hyper-Extract](hyper-extract.md), [Midscene](midscene.md)

## Dùng khi nào?

| Nhu cầu | PixelRAG |
|---------|----------|
| RAG khi answer nằm trong bảng/chart layout | ✅ pixel-native |
| Claude “nhìn” page (không raw HTML) | ✅ skill `pixelbrowse` + `pixelshot` |
| Hosted Wikipedia search API (no key) | ✅ `api.pixelrag.ai` |
| Agent click/fill browser | → [Stagehand](stagehand.md) / [Midscene](midscene.md) |
| Chunk text + DeepDoc | → [RAGFlow](ragflow.md) |

## Chạy thử

```bash
pip install pixelrag
pixelshot https://en.wikipedia.org/wiki/Python --output ./tiles

# Hosted search (8.28M Wiki, text or image query)
curl -X POST https://api.pixelrag.ai/search \
  -H "Content-Type: application/json" \
  -d '{"queries": [{"text": "What is the capital of France?"}], "n_docs": 5}'
```

CLI stages: `pixelshot` · `pixelrag chunk|embed|build-index|index|serve`  
Claude: `uv tool install pixelrag` → marketplace plugin **pixelbrowse** (no MCP).

## So với tool khác

| | PixelRAG | PageIndex | Midscene |
|--|----------|-----------|----------|
| Goal | Retrieve by *looks* | Reason over tree index | UI *action* by vision |
| Index | Screenshot tiles + VLM | Doc tree (no vectors) | — |
| Tags | `rag` `cli` `skill` `api` | `rag` `mcp` `cli` | `computer-use` |

## Dùng với Odoo / ai_core

- KB tài liệu scan / PDF layout nặng (invoice, catalog) nơi OCR/chunk lỗi.  
- Agent skill: chụp portal web rồi hỏi VLM thay vì scrape HTML.  
- Tham khảo paper khi thiết kế multimodal retrieve trong `ai_rag_core`.

## Link

- Repo: https://github.com/StarTrail-org/PixelRAG  
- Paper · [pixelrag.ai](https://pixelrag.ai) · HF indexes: `StarTrail-org/pixelrag-faiss-indexes`  
- Peers: [pageindex.md](pageindex.md) · [ragflow.md](ragflow.md) · [hyper-extract.md](hyper-extract.md) · [midscene.md](midscene.md)
