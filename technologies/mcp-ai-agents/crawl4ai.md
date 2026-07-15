# Crawl4AI

> **Repo:** [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)  
> **Category:** MCP & AI Agents · Web crawl/scrape thân thiện LLM  
> **Tags:** `extract` · `cli` · `browser` · `self-host` · `api`  
> **Ngôn ngữ:** Python · Playwright · Docker · **⭐** ~72.6k · **License:** Apache-2.0  
> PyPI: [crawl4ai](https://pypi.org/project/crawl4ai/) · CLI: `crwl`

## Đây là gì?

**Crawl4AI** là crawler/scraper OSS biến trang web thành **Markdown sạch (LLM-ready)** cho RAG, agents, data pipelines.

Async browser pool, deep crawl (BFS…), cache, sessions/proxies/hooks; optional **LLM extraction** (`-q`); deploy CLI hoặc **Docker API**. Không bắt buộc API key cloud.

**Cùng kiểu:** [Scrapling](scrapling.md) (adaptive DOM + MCP), [Hyper-Extract](hyper-extract.md) (text→graph), [Stagehand](../ui-automation/stagehand.md) / [Puppeteer](../ui-automation/puppeteer.md) (browser agent / CDP), [SurfSense](surfsense.md) / [Pathway](pathway.md) (RAG ingest).

## Dùng khi nào?

| Nhu cầu | Crawl4AI |
|---------|----------|
| Web → Markdown / RAG chunk | ✅ primary |
| Deep crawl nhiều trang | ✅ `--deep-crawl` |
| LLM schema/Q&A extract | ✅ CLI `-q` / extractors |
| Adaptive CSS khi DOM đổi + MCP agent | → [Scrapling](scrapling.md) |
| Click/fill form agent | → [Stagehand](../ui-automation/stagehand.md) / [Midscene](../ui-automation/midscene.md) |

## Chạy thử

```bash
pip install -U crawl4ai
crawl4ai-setup
crawl4ai-doctor

crwl https://www.nbcnews.com/business -o markdown
crwl https://docs.crawl4ai.com --deep-crawl bfs --max-pages 10
```

```python
import asyncio
from crawl4ai import AsyncWebCrawler

async def main():
    async with AsyncWebCrawler() as crawler:
        result = await crawler.arun(url="https://www.nbcnews.com/business")
        print(result.markdown)

asyncio.run(main())
```

Docker API: auth on by default (v0.9+) — đọc release notes trước khi expose public.

## So với tool khác

| | Crawl4AI | Scrapling | Stagehand |
|--|----------|-----------|-----------|
| Shape | LLM-ready crawl → MD | Adaptive scrape + MCP | Browser agent SDK |
| Markdown/RAG focus | ✅ primary | Parser/selectors | Act/extract via NL |
| Tags | `extract` `cli` `api` | `extract` `mcp` `browser` | `ui-automation` `browser` |

## Dùng với Odoo / ai_core

- Ingest docs/site công khai → Markdown → [RAGFlow](ragflow.md) / [WeKnora](weknora.md) / chunk pipeline.  
- Tool phía agent lấy nội dung trang trước khi tóm tắt (tôn trọng robots/ToS).  
- Self-host Docker khi cần API nội bộ; không thay QA E2E (Puppeteer/Midscene).

## Link

- Repo: https://github.com/unclecode/crawl4ai · Docs: https://docs.crawl4ai.com  
- Peers: [scrapling.md](scrapling.md) · [hyper-extract.md](hyper-extract.md) · [pathway.md](pathway.md) · [surfsense.md](surfsense.md) · [stagehand.md](../ui-automation/stagehand.md)
