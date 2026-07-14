# changedetection.io

> **Repo:** [dgtlmoon/changedetection.io](https://github.com/dgtlmoon/changedetection.io)  
> **Category:** DevTools · Website change monitoring + alerts  
> **Tags:** `notification` · `self-host` · `browser` · `workflow` · `api`  
> **Ngôn ngữ:** Python · Playwright/WebDriver · Docker · **⭐** ~32.3k · **License:** Apache-2.0  
> Site: [changedetection.io](https://changedetection.io)

## Đây là gì?

**changedetection.io** là công cụ self-host (hoặc SaaS) **theo dõi thay đổi webpage**: diff text/HTML/PDF/JSON, price/restock, visual selector, browser steps (login/cookie), nhiều filter (CSS/XPath/JSONPath/jq/regex).

Notify qua email, Discord, Slack, **ntfy**, webhook… Điểm AI: rule tiếng Anh (“chỉ báo khi giá &lt; $50”) + tóm tắt diff qua LLM (OpenAI/Gemini/Anthropic/**Ollama**/OpenAI-compat) — giảm false positive.

**Cùng kiểu:** [Horizon](horizon.md) (news radar digest), [Folo](folo.md) (RSS reader), [ntfy](ntfy.md) (push transport), [Crawl4AI](crawl4ai.md) / [Scrapling](scrapling.md) (crawl/scrape một lần).

## Dùng khi nào?

| Nhu cầu | changedetection.io |
|---------|-------------------|
| Watch URL → alert khi đổi / giá / restock | ✅ primary |
| AI filter + tóm tắt change | ✅ LLM providers |
| Push qua ntfy/webhook | ✅ |
| One-shot Markdown crawl RAG | → [Crawl4AI](crawl4ai.md) |
| Daily news briefing | → [Horizon](horizon.md) |

## Chạy thử

```bash
docker run -d --restart always -p "5000:5000" \
  -v datastore-volume:/datastore \
  --name changedetection.io \
  ghcr.io/dgtlmoon/changedetection.io
# UI: http://localhost:5000
```

Fetcher: HTTP nhanh hoặc Chrome/Playwright khi cần JS. AI filters/summaries: LiteLLM (100+ providers); hosted AI features note timeline SaaS trong README.

## So với tool khác

| | changedetection.io | Horizon | ntfy |
|--|-------------------|---------|------|
| Shape | URL watch + diff + alert | Multi-source news pipeline | Push transport |
| Browser/JS | ✅ Playwright/WebDriver | Fetches theo source | ❌ |
| Tags | `notification` `browser` `self-host` | `notification` `workflow` `mcp` | `notification` `cli` |

## Dùng với Odoo / ai_core

- Monitor cổng pháp lý / price vendor / career page → ntfy hoặc webhook vào Odoo activity.  
- Không thay Crawl4AI ingest RAG; không thay Chrome DevTools MCP debug.

## Link

- Repo: https://github.com/dgtlmoon/changedetection.io · Site: https://changedetection.io  
- Peers: [ntfy.md](ntfy.md) · [horizon.md](horizon.md) · [folo.md](folo.md) · [crawl4ai.md](crawl4ai.md) · [scrapling.md](scrapling.md)
