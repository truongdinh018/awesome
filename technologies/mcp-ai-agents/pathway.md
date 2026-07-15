# Pathway

> **Repo:** [pathwaycom/pathway](https://github.com/pathwaycom/pathway)  
> **Category:** MCP & AI Agents · Live data / streaming RAG ETL  
> **Tags:** `rag` · `cli` · `self-host` · `workflow` · `api`  
> **Ngôn ngữ:** Python API · Rust engine · **⭐** ~62.7k · **License:** BSL (xem repo)  
> Site: [pathway.com](https://pathway.com) · Docs: [pathway.com/developers](https://pathway.com/developers/)

## Đây là gì?

**Pathway** (*Live Data Framework*) là Python ETL **stream + batch** cùng một codebase: real-time analytics, connectors (Kafka, GDrive, Postgres, SharePoint, Airbyte 300+), incremental Rust engine (Differential Dataflow).

**LLM xpack**: wrappers, parsers, embedders, splitters, in-memory vector index, LangChain/LlamaIndex — live RAG trên documents đang đổi.

**Cùng kiểu:** [RAGFlow](ragflow.md), [SAG](sag.md), [Hyper-Extract](hyper-extract.md), [LocalAI](../devtools/localai.md)

## Dùng khi nào?

| Nhu cầu | Pathway |
|---------|---------|
| Batch & stream cùng code | ✅ |
| Live RAG (docs đổi → index cập nhật) | ✅ LLM xpack |
| Kafka / SharePoint / Airbyte ingest | ✅ |
| Full RAG UI multi-user | → [RAGFlow](ragflow.md) / [AnythingLLM](anything-llm.md) |
| Chỉ fine-tune | → [Unsloth](../devtools/unsloth.md) |

## Chạy thử

```bash
pip install -U pathway
# Mac/Linux; Windows → VM
```

```python
import pathway as pw
# connectors → filter/join/window → pw.io… → pw.run()
```

Templates: Private RAG (Ollama), Adaptive RAG, Multimodal gpt-4o, unstructured→SQL. Docker / K8s · `pathway spawn --threads N` · monitoring dashboard.

## So với tool khác

| | Pathway | RAGFlow | SAG |
|--|---------|---------|-----|
| Niche | Stream ETL + live RAG pipelines | RAG engine + UI | Graph retrieval |
| Engine | Rust incremental | DeepDoc etc. | Event–entity |
| Tags | `rag` `workflow` `cli` | `rag` `agent` `mcp` | `rag` `mcp` |

## Dùng với Odoo / ai_core

- Ingest ERP events / docs → live vector index cho agents.  
- Kafka warehouse sync → alerting pipeline.  
- Prototype adaptive RAG trước `ai_rag_core`.

## Link

- Repo: https://github.com/pathwaycom/pathway  
- Site / Discord · LLM xpack docs  
- Peers: [ragflow.md](ragflow.md) · [sag.md](sag.md) · [hyper-extract.md](hyper-extract.md) · [localai.md](../devtools/localai.md)
