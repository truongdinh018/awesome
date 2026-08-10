# txtai

> **Repo:** [neuml/txtai](https://github.com/neuml/txtai)  
> **Category:** MCP & AI Agents · RAG / embeddings + LLM orchestration  
> **Tags:** `rag` · `agent` · `mcp` · `self-host` · `vector`  
> **Ngôn ngữ:** Python · **⭐** ~12.8k · **License:** Apache-2.0  
> Site: [neuml.github.io/txtai](https://neuml.github.io/txtai) · NeuML

## Đây là gì?

**txtai** là framework AI **all-in-one**: semantic search, LLM orchestration và language-model workflows.

Trung tâm là **embeddings database** — kết hợp vector index (sparse + dense), graph và relational DB. Từ đó bạn làm vector search, RAG, pipeline (QA, summarize, transcribe, translate…), workflow nối nhiều model, và **agents** tự nối embeddings/pipelines/workflows. Có **HTTP API** + **MCP**; binding JS / Java / Rust / Go. Chạy local (Transformers / Sentence Transformers / FastAPI) hoặc scale bằng container.

**Cùng kiểu:** [RAGFlow](ragflow.md) (RAG UI + DeepDoc), [WeKnora](weknora.md) (KB platform + MCP), [AnythingLLM](anything-llm.md) (desktop/Docker chat+RAG), [Pathway](pathway.md) (live ETL → RAG), [PageIndex](pageindex.md) (vectorless tree).

## Dùng khi nào?

| Nhu cầu | txtai |
|---------|-------|
| Semantic / vector search + SQL trên embeddings | ✅ |
| RAG / agent / workflow Python gọn, local-first | ✅ |
| MCP hoặc API HTTP cho client đa ngôn ngữ | ✅ |
| Full KB UI multi-user sẵn | → [RAGFlow](ragflow.md) / [AnythingLLM](anything-llm.md) / [WeKnora](weknora.md) |
| Live stream ingest docs đang đổi | → [Pathway](pathway.md) |

## Chạy thử

```bash
pip install txtai
```

```python
import txtai

embeddings = txtai.Embeddings()
embeddings.index(["Correct", "Not what we hoped"])
print(embeddings.search("positive", 1))
```

API nhanh:

```yaml
# app.yml
embeddings:
  path: sentence-transformers/all-MiniLM-L6-v2
```

```bash
CONFIG=app.yml uvicorn "txtai.api:app"
curl -X GET "http://localhost:8000/search?query=positive"
```

Docs / notebooks: https://neuml.github.io/txtai/

## So với tool khác

| | txtai | RAGFlow | Pathway |
|--|-------|---------|---------|
| Shape | Lib + API + MCP (embeddings-centric) | RAG platform + UI | Streaming ETL + LLM xpack |
| Install | `pip install txtai` | Docker compose | `pip install pathway` |
| Agents / workflows | ✅ built-in | ✅ | ETL-focused |
| Multimodal index | ✅ text/docs/audio/image/video | Docs-heavy | Connectors-heavy |

## Dùng với Odoo / ai_core

- Prototype semantic search / RAG trên knowledge Odoo trước khi gắn `ai_rag_core`.  
- Chạy txtai API/MCP cạnh ai_core: agent lấy context embedding, Odoo giữ business data.  
- Pipeline summarize/translate cho mô tả sản phẩm hoặc ticket — batch local, không bắt buộc cloud LLM.

## Link

- Repo: https://github.com/neuml/txtai · Docs: https://neuml.github.io/txtai  
- Peers: [ragflow.md](ragflow.md) · [weknora.md](weknora.md) · [anything-llm.md](anything-llm.md) · [pathway.md](pathway.md) · [pageindex.md](pageindex.md)
