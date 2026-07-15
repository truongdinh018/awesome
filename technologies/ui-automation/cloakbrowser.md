# CloakBrowser

> **Repo:** [CloakHQ/CloakBrowser](https://github.com/CloakHQ/CloakBrowser)  
> **Category:** UI Automation · Stealth Chromium (Playwright/Puppeteer drop-in)  
> **Tags:** `browser` · `ui-automation` · `api` · `cli` · `self-host`  
> **Ngôn ngữ:** Python · JS · C++ Chromium patches · **⭐** ~28.3k · **License:** MIT  
> Site: [cloakbrowser.dev](https://cloakbrowser.dev/) · PyPI / npm: `cloakbrowser`

## Đây là gì?

**CloakBrowser** là Chromium **anti-detect** với fingerprint patch **source-level C++** (không chỉ JS inject): canvas/WebGL/audio/fonts/WebRTC/CDP signals…

Drop-in thay Playwright/Puppeteer (`launch()`). Claim pass Cloudflare Turnstile / FingerprintJS / BrowserScan (30+ tests); `humanize=True` cho behavior. Binary ~200MB auto-download; free + Pro builds.

**Cùng kiểu:** [Puppeteer](puppeteer.md) (CDP plain), [Chrome DevTools MCP](chrome-devtools-mcp.md) (agent DevTools), [Scrapling](../mcp-ai-agents/scrapling.md) (stealth fetch), [Crawl4AI](../mcp-ai-agents/crawl4ai.md), [Stagehand](stagehand.md) / [Midscene](midscene.md) (agent UI).

## Dùng khi nào?

| Nhu cầu | CloakBrowser |
|---------|--------------|
| Playwright/Puppeteer bị bot-block | ✅ drop-in stealth |
| Agent browse cần fingerprint “thật” | ✅ (+ proxy residential) |
| DevTools debug chính thức Chrome | → [Chrome DevTools MCP](chrome-devtools-mcp.md) |
| Adaptive scrape + MCP | → [Scrapling](../mcp-ai-agents/scrapling.md) |

## Chạy thử

```bash
pip install cloakbrowser
# npm: cloakbrowser + playwright-core | puppeteer-core
docker run --rm cloakhq/cloakbrowser cloaktest
```

```python
from cloakbrowser import launch
browser = launch(humanize=True)  # + proxy=..., geoip=True khi cần
page = browser.new_page()
page.goto("https://example.com")
browser.close()
```

**Pháp lý / ToS:** chỉ dùng trên site/hệ thống **được phép**. Bypass bot/CAPTCHA trái ToS = rủi ro người dùng.

## So với tool khác

| | CloakBrowser | Puppeteer | Scrapling |
|--|--------------|-----------|-----------|
| Shape | Stealth Chromium binary + wrappers | CDP API | Adaptive scrape lib |
| Antibot | ✅ C++ patches | ❌ mặc định | StealthyFetcher |
| Tags | `browser` `api` | `browser` `api` `mcp` | `extract` `browser` `mcp` |

## Dùng với Odoo / ai_core

- Lab scrape/portal **có RoE**; agent Stagehand/Playwright path khi site chặn headless thường.  
- Không mặc định production crawl mass; tôn trọng robots/ToS.

## Link

- Repo: https://github.com/CloakHQ/CloakBrowser · Site: https://cloakbrowser.dev  
- Peers: [puppeteer.md](puppeteer.md) · [scrapling.md](../mcp-ai-agents/scrapling.md) · [crawl4ai.md](../mcp-ai-agents/crawl4ai.md) · [chrome-devtools-mcp.md](chrome-devtools-mcp.md) · [stagehand.md](stagehand.md)
