# Firecrawl

> **Repo:** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)  
> **Category:** MCP & AI Agents · Web search/scrape API (LLM-ready)  
> **Tags:** `extract` · `api` · `mcp` · `cli` · `self-host` · `browser`  
> **Ngôn ngữ:** TypeScript · Python/JS SDKs · Docker · **⭐** ~150.9k · **License:** AGPL-3.0 (SDKs MIT)  
> Cloud: [firecrawl.dev](https://firecrawl.dev) · Docs: [docs.firecrawl.dev](https://docs.firecrawl.dev)

## Đây là gì?

**Firecrawl** là **web context API**: search / scrape / crawl / map → **Markdown sạch hoặc JSON có schema** cho agents & RAG. Hosted (API key) hoặc **self-host** (Docker). Có MCP, CLI, actions (click/scroll) trước khi extract; parse PDF/DOCX trên web.

**Cùng kiểu:** [Crawl4AI](crawl4ai.md) (OSS crawl → MD, local-first), [Scrapling](scrapling.md) (adaptive scrape + MCP), [Hyper-Extract](hyper-extract.md) (text→graph), [Stagehand](../ui-automation/stagehand.md) (browser agent).

## Dùng khi nào?

| Nhu cầu | Firecrawl |
|---------|-----------|
| Search web + full page content | ✅ `search` |
| URL → Markdown / structured JSON | ✅ `scrape` |
| Crawl cả site / map URLs | ✅ `crawl` / `map` |
| Hosted reliability (proxy, JS sites) | ✅ cloud |
| Pure local OSS, không API key | → [Crawl4AI](crawl4ai.md) |
| Adaptive selectors + MCP stealth | → [Scrapling](scrapling.md) |
| Full browser agent (fill forms) | → [Stagehand](../ui-automation/stagehand.md) / [Midscene](../ui-automation/midscene.md) |

## Chạy thử

```bash
# Cloud SDK
pip install firecrawl-py
# hoặc: npm i @mendable/firecrawl-js
```

```python
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-YOUR_API_KEY")
doc = app.scrape("https://firecrawl.dev", formats=["markdown"])
print(doc.markdown)
```

Self-host: xem `SELF_HOST.md` + `docker-compose.yaml` trong repo. Cloud có thêm tính năng so với OSS AGPL — đọc bảng Open Source vs Cloud trên README.

## So với tool khác

| | Firecrawl | Crawl4AI | Scrapling |
|--|-----------|----------|-----------|
| Shape | Search+scrape API (cloud/self-host) | Local LLM-ready crawler | Adaptive scrape + MCP |
| Search endpoint | ✅ | — | — |
| Tags | `extract` `api` `mcp` | `extract` `cli` `api` | `extract` `mcp` `browser` |

## Dùng với Odoo / ai_core

- Ingest site/docs công khai → Markdown → [RAGFlow](ragflow.md) / [WeKnora](weknora.md).  
- Tool phía agent: search + scrape trước khi tóm tắt (tôn trọng robots/ToS; AGPL nếu deploy fork OSS).  
- Cloud API khi cần độ phủ/proxy; self-host khi data không được ra ngoài.

## Link

- Repo: https://github.com/firecrawl/firecrawl · Docs: https://docs.firecrawl.dev  
- Peers: [crawl4ai.md](crawl4ai.md) · [scrapling.md](scrapling.md) · [hyper-extract.md](hyper-extract.md) · [pathway.md](pathway.md) · [stagehand.md](../ui-automation/stagehand.md)
