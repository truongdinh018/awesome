# Puppeteer

> **Repo:** [puppeteer/puppeteer](https://github.com/puppeteer/puppeteer)  
> **Category:** UI Automation · Browser CDP driver *(foundation)*  
> **Tags:** `browser` · `ui-automation` · `api` · `mcp`  
> **Ngôn ngữ:** TypeScript · **⭐** ~95.4k · **License:** Apache-2.0  
> Docs: [pptr.dev](https://pptr.dev) · Chrome + Firefox

## Đây là gì?

**Puppeteer** là JavaScript/TypeScript API điều khiển **Chrome / Firefox** (headless hoặc headed) qua CDP.

**Không phải AI agent** — nền browser automation cho testing, scraping, screenshot. Nhiều stack AI agent (Stagehand CDP, Midscene Playwright/Chrome, PixelRAG `pixelshot`, HTML Anything iframe…) đứng trên driver kiểu này. Hỗ trợ WebDriver BiDi · Firefox · experimental WebMCP.

**Cùng kiểu:** [Stagehand](stagehand.md), [Midscene](midscene.md), [Page Agent](page-agent.md)

## Dùng khi nào?

| Nhu cầu | Puppeteer |
|---------|-----------|
| Headless Chrome automation / PDF / screenshot | ✅ |
| E2E test (scripted) | ✅ |
| NL / vision browser agent | → [Stagehand](stagehand.md) / [Midscene](midscene.md) |
| Embed agent trong page | → [Page Agent](page-agent.md) |

## Chạy thử

```bash
npm i puppeteer          # downloads browser
# or: puppeteer-core     # bring your own Chrome
```

```js
import puppeteer from 'puppeteer';
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://developer.chrome.com/');
await browser.close();
```

## So với tool khác

| | Puppeteer | Stagehand | Midscene |
|--|-----------|-----------|----------|
| Layer | CDP driver API | NL↔code agent SDK | Vision → action |
| AI | ❌ | ✅ | ✅ |
| Tags | `browser` `api` `mcp` | `agent` `browser` | `computer-use` |

## Dùng với Odoo / ai_core

- Regression portal/web client OWL.  
- Screenshot pipeline trước PixelRAG / vision QA.  
- MCP DevTools khi agent debug UI.

## Link

- Repo: https://github.com/puppeteer/puppeteer  
- Docs: https://pptr.dev  
- Peers: [stagehand.md](stagehand.md) · [midscene.md](midscene.md) · [page-agent.md](page-agent.md)
