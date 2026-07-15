# BrowserOS

> **Repo:** [browseros-ai/BrowserOS](https://github.com/browseros-ai/BrowserOS)  
> **Category:** UI Automation · Agentic Chromium browser (local-first)  
> **Tags:** `browser` · `ui-automation` · `agent` · `mcp` · `desktop` · `self-host` · `coding-agent`  
> **Ngôn ngữ:** TypeScript · Chromium fork · **⭐** ~12.2k · **License:** AGPL-3.0  
> Site: [browseros.com](https://www.browseros.com) · Docs: [docs.browseros.com](https://docs.browseros.com)

## Đây là gì?

**BrowserOS** là **Chromium fork** mã nguồn mở với **AI agent tích hợp** — thay thế kiểu ChatGPT Atlas / Perplexity Comet / Dia nhưng **local-first**: BYO API keys hoặc **Ollama / LM Studio**, dữ liệu trên máy bạn.

Hai sản phẩm cùng codebase: **BrowserOS** (browser cho người — agent trong tab mới, 53+ browser tools, 40+ app integrations) và **BrowserClaw** (browser cho **AI agent** — dùng session đăng nhập thật, MCP cho Claude Code / Cursor / Codex, replay session). Có scrape, scheduled tasks, ad block (uBlock MV2).

**Cùng kiểu:** [Stagehand](stagehand.md) (browser agent SDK), [Page Agent](page-agent.md) (DOM agent), [Chrome DevTools MCP](chrome-devtools-mcp.md) (MCP điều khiển Chrome), [Puppeteer](puppeteer.md) (CDP driver), [CloakBrowser](cloakbrowser.md) (stealth Chromium).

## Dùng khi nào?

| Nhu cầu | BrowserOS |
|---------|-----------|
| AI browser privacy-first, không cloud bắt buộc | ✅ BrowserOS |
| Agent dùng **tài khoản đã login** (Gmail, Slack…) | ✅ BrowserClaw |
| MCP từ Claude Code / Cursor điều khiển browser | ✅ one-click MCP |
| Headless CI không cần login | → [Puppeteer](puppeteer.md) / [Stagehand](stagehand.md) |
| Stealth anti-bot Playwright drop-in | → [CloakBrowser](cloakbrowser.md) |
| Agent nhúng trong webpage (DOM) | → [Page Agent](page-agent.md) |

> **AGPL-3.0** — lưu ý khi embed/redistribute fork Chromium.

## Chạy thử

```bash
# Tải installer (không cần build để dùng)
# BrowserOS: macOS .dmg · Windows .exe · Linux AppImage / .deb
# https://www.browseros.com

# BrowserClaw (agent browser + MCP)
# https://www.browseros.com/agents

# Kết nối MCP → Claude Code / Cursor / Codex (one-click trong app)
# Local LLM: Ollama hoặc LM Studio trong settings
```

Import Chrome 1-click; provider: Claude, OpenAI, Gemini, OAuth ChatGPT Pro, hoặc local models.

## So với tool khác

| | BrowserOS | Stagehand | Comet/Atlas-class |
|--|-----------|-----------|-------------------|
| Shape | Full Chromium + built-in agent | SDK trên Playwright | Cloud AI browser |
| Login thật cho agent | ✅ BrowserClaw | ❌ sandbox mới | Cloud account |
| Local / BYO keys | ✅ | Partial (Browserbase) | ❌ cloud model |
| Tags | `browser` `agent` `mcp` `desktop` | `browser` `ui-automation` `agent` | — |

## Dùng với Odoo / ai_core

- Agent tự động thao tác Odoo web UI qua session đã đăng nhập (BrowserClaw) — audit replay trước production.  
- BrowserOS side panel: tóm tắt tài liệu / ticket khi dev addon.  
- Không thay [Midscene](midscene.md) cho native app automation; không thay server-side RAG.

## Link

- Repo: https://github.com/browseros-ai/BrowserOS · Docs: https://docs.browseros.com  
- Peers: [stagehand.md](stagehand.md) · [page-agent.md](page-agent.md) · [chrome-devtools-mcp.md](chrome-devtools-mcp.md) · [puppeteer.md](puppeteer.md) · [cloakbrowser.md](cloakbrowser.md) · [midscene.md](midscene.md)
