# Scrapling

> **Repo:** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling)  
> **Category:** MCP & AI Agents · Web extract / crawl  
> **Tags:** `extract` · `mcp` · `cli` · `browser` · `self-host`  
> **Ngôn ngữ:** Python · **⭐** ~69.5k · **License:** BSD-3-Clause  
> Adaptive selectors · StealthyFetcher · Playwright · Spiders · **MCP server**

## Đây là gì?

**Scrapling** là framework **web scraping / crawl** adaptive: từ một request tới spider full-scale.

Điểm nổi: `adaptive=True` tìm lại element khi DOM đổi; `StealthyFetcher` / fingerprint bypass (Cloudflare…); `DynamicFetcher` (Playwright); CLI + shell; **MCP** cho agent (extract targeted trước khi gửi LLM → giảm token).

Trong catalog: lớp **ingest web** — không phải RAG platform.

**Cùng kiểu:** [Hyper-Extract](hyper-extract.md), [Stagehand](stagehand.md), [Puppeteer](puppeteer.md), [Pathway](pathway.md)

## Dùng khi nào?

| Nhu cầu | Scrapling |
|---------|-----------|
| Scrape / crawl HTML + CSS/XPath adaptive | ✅ |
| Stealth / Cloudflare / session | ✅ Stealthy* / Dynamic* |
| Agent IDE scrap qua MCP | ✅ `scrapling[ai]` |
| PDF/doc → knowledge graph | → [Hyper-Extract](hyper-extract.md) |
| UI agent click/fill form | → [Stagehand](stagehand.md) / [Midscene](midscene.md) |

## Chạy thử

```bash
pip install scrapling                 # parser / selectors
pip install "scrapling[fetchers]"     # stealth + playwright
pip install "scrapling[ai]"           # MCP server
# pip install "scrapling[all]"
```

```python
from scrapling.fetchers import StealthyFetcher
StealthyFetcher.adaptive = True
p = StealthyFetcher.fetch("https://example.com", headless=True, network_idle=True)
products = p.css(".product", adaptive=True)  # vẫn tìm được khi DOM đổi
```

## So với tool khác

| | Scrapling | Hyper-Extract | Stagehand |
|--|-----------|---------------|-----------|
| Shape | Scrape/crawl + MCP | LLM → typed graphs | Browser agent SDK |
| Adaptive DOM | ✅ | ❌ | LLM actions |
| Tags | `extract` `mcp` `browser` | `extract` `rag` `mcp` | `ui-automation` `browser` |

## Dùng với Odoo / ai_core

- Thu thập nguồn web công khai → chunk/RAG (tôn trọng robots/ToS).  
- MCP tool cho coding-agent lấy nội dung trang trước khi tóm tắt.  
- Không thay Puppeteer E2E test — khác mục tiêu automation QA.

## Link

- Repo: https://github.com/D4Vinci/Scrapling · PyPI `scrapling`  
- Peers: [hyper-extract.md](hyper-extract.md) · [stagehand.md](stagehand.md) · [puppeteer.md](puppeteer.md) · [pathway.md](pathway.md)
