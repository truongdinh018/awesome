# Puppeteer

> **Repo:** [puppeteer/puppeteer](https://github.com/puppeteer/puppeteer)  
> **Category:** UI Automation · Browser CDP driver *(foundation)*  
> **Tags:** `browser` · `ui-automation` · `api` · `mcp`  
> **Ngôn ngữ:** TypeScript · **⭐** ~95.4k · **License:** Apache-2.0  
> Docs: [pptr.dev](https://pptr.dev) · Chrome + Firefox

## Tổng quan

**Puppeteer** — JavaScript/TypeScript API điều khiển **Chrome / Firefox** (headless hoặc headed) qua CDP. **Không phải AI agent** — nền browser automation cho testing, scraping, screenshot; nhiều stack AI agent (Stagehand CDP, Midscene Playwright/Chrome, PixelRAG `pixelshot`, HTML Anything iframe…) đứng trên driver kiểu này.

Peer AI layer: [Stagehand](stagehand.md) (NL+code trên browser), [Midscene](midscene.md) (vision), [Page Agent](page-agent.md) (in-page DOM). MCP: [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) (Puppeteer-based).

## Để làm gì?

| Nhu cầu | Puppeteer |
|---------|-----------|
| Headless Chrome automation / PDF / screenshot | ✅ |
| E2E test (scripted) | ✅ |
| NL / vision browser agent | → [Stagehand](stagehand.md) / [Midscene](midscene.md) |
| Embed agent trong page | → [Page Agent](page-agent.md) |

## Highlight

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

- WebDriver BiDi · Firefox support · experimental WebMCP  
- DevTools Protocol access thấp tầng  

## So sánh catalog

| | Puppeteer | Stagehand | Midscene |
|--|-----------|-----------|----------|
| Layer | CDP driver API | NL↔code agent SDK | Vision → action |
| AI | ❌ | ✅ | ✅ |
| Tags | `browser` `api` `mcp` | `agent` `browser` | `computer-use` |

## Use case Odoo / ai_core

- Regression portal/web client OWL.  
- Screenshot pipeline trước PixelRAG / vision QA.  
- MCP DevTools khi agent debug UI.

## Link

- Repo: https://github.com/puppeteer/puppeteer  
- Docs: https://pptr.dev  
- Peers: [stagehand.md](stagehand.md) · [midscene.md](midscene.md) · [page-agent.md](page-agent.md)
