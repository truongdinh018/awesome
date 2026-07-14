# Hyper-Extract

> **Repo:** [yifanfeng97/Hyper-Extract](https://github.com/yifanfeng97/Hyper-Extract)  
> **Category:** MCP & AI Agents · Knowledge extraction / RAG  
> **Tags:** `extract` · `rag` · `mcp` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~3.1k · **License:** Apache-2.0  
> **Docs:** [yifanfeng97.github.io/Hyper-Extract](https://yifanfeng97.github.io/Hyper-Extract/latest/)  
> **PyPI:** `hyperextract` · CLI: `he`

## Tổng quan

**Hyper-Extract** — CLI/framework LLM biến văn bản / PDF không cấu trúc thành **Knowledge Abstract** có kiểu mạnh: List/Set/Pydantic → **Knowledge Graph**, **Hypergraph**, **Spatio-Temporal Graph**.

Slogan: *Stop reading. Start understanding.* — `he parse` một lệnh, template YAML domain, tăng tri thức incremental, search, export Obsidian, **MCP** (`he-mcp`).

## Để làm gì?

| Nhu cầu | Hyper-Extract |
|---------|----------------|
| Paper / báo cáo → knowledge graph | ✅ `he parse … -t general/academic_graph` |
| Earnings / legal / medical extract | ✅ 80+ YAML templates (finance, legal, TCM…) |
| Graph + temporal + spatial + hypergraph | ✅ 8 structure types |
| Query / RAG trên abstract đã extract | ✅ `he search` / MCP `ask` |
| Self-host (vLLM + bge-m3) | ✅ Không gửi data ra ngoài |
| Agent IDE đọc KB | ✅ MCP stdio `he-mcp` |

## Quick start

```bash
uv tool install hyperextract
he config init -k YOUR_OPENAI_API_KEY
he parse examples/en/tesla.md -t general/biography_graph -o ./output/ -l en
he search ./output/ "What are Tesla's major achievements?"
he show ./output/
he export obsidian ./output/ -o ./vault/
```

MCP: `pip install 'hyperextract[mcp]'` → `he-mcp` (tools: `list_templates`, `info`, `search`, `ask`, `export_obsidian`).

## So sánh catalog

| | Hyper-Extract | SAG | ai_rag_core |
|--|---------------|-----|-------------|
| Trọng tâm | **Extract** → typed KA / graphs | **Retrieve** event/entity + workbench | Ingest/chunk/retrieve trong Odoo |
| Hypergraph / spatial | ✅ | ❌ (event-entity) | ❌ |
| Domain templates | ✅ 80+ YAML | Project docs | Chunk config Odoo |
| MCP | ✅ he-mcp | ✅ per project | xb_mcp tools |

## Quan hệ

| | Vai trò |
|--|---------|
| **[SAG](sag.md)** | Retrieval workbench; Hyper-Extract = pipeline extract đa cấu trúc |
| **[PageIndex](pageindex.md)** | Tree ToC vectorless; Hyper-Extract = schema extract → graph |
| **Obsidian harness / vault** | `he export obsidian` → wikilinks |
| **NotebookLM MCP** | Citation RAG cloud; Hyper-Extract = self-host extract |
| **ai_rag_core** | Có thể dùng HE offline → dump graph/MD rồi ingest Odoo |

## Link

- Repo: https://github.com/yifanfeng97/Hyper-Extract  
- Docs: https://yifanfeng97.github.io/Hyper-Extract/latest/  
- Peer: [understand-anything.md](understand-anything.md) (code/wiki knowledge graph)  
- README CN: https://github.com/yifanfeng97/Hyper-Extract/blob/main/README_ZH.md
