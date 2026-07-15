# Chrome DevTools MCP

> **Repo:** [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)  
> **Category:** UI Automation · Chrome DevTools MCP for coding agents  
> **Tags:** `mcp` · `browser` · `ui-automation` · `cli` · `coding-agent`  
> **Ngôn ngữ:** TypeScript · Puppeteer · **⭐** ~46.9k · **License:** Apache-2.0  
> npm: [chrome-devtools-mcp](https://www.npmjs.com/package/chrome-devtools-mcp)

## Đây là gì?

**chrome-devtools-mcp** (Chrome DevTools / Google) là MCP server để coding agent (Cursor, Claude, Copilot, Antigravity…) **điều khiển & inspect Chrome sống**.

Có automation tin cậy (Puppeteer), debug (network, console + source maps, screenshot), **performance traces / insights**. Có CLI không MCP. Official: Chrome / Chrome for Testing.

**Cùng kiểu:** [Puppeteer](puppeteer.md) (CDP library nền), [Midscene](midscene.md) (vision UI), [Stagehand](stagehand.md) (NL↔code), [Page Agent](page-agent.md) (DOM in-page).

## Dùng khi nào?

| Nhu cầu | Chrome DevTools MCP |
|---------|---------------------|
| Agent debug web app trong Chrome thật | ✅ primary |
| Perf trace + insights | ✅ |
| Slim headless basic browse | ✅ `--slim --headless` |
| Library CDP trong test script | → [Puppeteer](puppeteer.md) |
| Vision click bất kỳ UI | → [Midscene](midscene.md) |

## Chạy thử

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"]
    }
  }
}
```

Opt-out telemetry: `--no-usage-statistics` hoặc env `CHROME_DEVTOOLS_MCP_NO_USAGE_STATISTICS` / `CI`.  
CrUX field data: tắt bằng `--no-performance-crux`.  
Yêu cầu: Node LTS + Chrome stable+.

**Cảnh báo:** MCP client thấy được nội dung browser — đừng mở data nhạy cảm.

## So với tool khác

| | Chrome DevTools MCP | Puppeteer | Midscene |
|--|---------------------|-----------|----------|
| Shape | MCP/CLI → live Chrome DevTools | JS CDP API | Vision → action |
| Audience | Coding agents | Dev/test code | Agent / test vision |
| Tags | `mcp` `browser` `cli` | `browser` `api` | `ui-automation` `skill` |

## Dùng với Odoo / ai_core

- Cursor debug form/backend UI Odoo trên Chrome local (network + console).  
- Không thay Playwright/Midscene CI suite; không scrape mass (→ Crawl4AI/Scrapling).

## Link

- Repo: https://github.com/ChromeDevTools/chrome-devtools-mcp · npm `chrome-devtools-mcp`  
- Peers: [puppeteer.md](puppeteer.md) · [midscene.md](midscene.md) · [stagehand.md](stagehand.md) · [page-agent.md](page-agent.md)
