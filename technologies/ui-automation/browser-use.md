# Browser Use

> **Repo:** [browser-use/browser-use](https://github.com/browser-use/browser-use)  
> **Category:** UI Automation · AI agent browser (Playwright)  
> **Tags:** `ui-automation` · `browser` · `agent` · `cli` · `computer-use`  
> **Ngôn ngữ:** Python · **⭐** ~105k · **License:** MIT  
> Site: [browser-use.com](https://browser-use.com)

## Đây là gì?

**Browser Use** — thư viện Python để **AI agent điều khiển trình duyệt** như người: mở trang, click, gõ, điền form, extract. Task bằng NL; stack **Playwright** + LLM (Cloud API hoặc BYO OpenAI/Anthropic/Google…). Có skill install cho coding agents (`browser-use skill install`), CLI, Cloud. Use case: fill form, scrape có cấu trúc, QA web local.

Khác [Midscene](midscene.md) (vision TS multi-OS) và [Stagehand](stagehand.md) (NL↔code SDK) — đây là **agent loop Python** phổ biến nhất hiện nay cho browser.

**Cùng kiểu:** [Stagehand](stagehand.md), [Midscene](midscene.md), [Puppeteer](puppeteer.md), [Page Agent](page-agent.md), [CloakBrowser](cloakbrowser.md).

## Dùng khi nào?

| Nhu cầu | Browser Use |
|---------|-------------|
| Agent Python: “làm X trên web” | ✅ primary |
| Tích hợp Cursor/Claude Code qua skill | ✅ |
| Vision + mobile/native UI | → [Midscene](midscene.md) |
| Hybrid NL + code TS/JS | → [Stagehand](stagehand.md) |
| CDP driver thuần (không LLM) | → [Puppeteer](puppeteer.md) |

## Chạy thử

```bash
# Python >= 3.11
uv add browser-use
# .env: BROWSER_USE_API_KEY=… hoặc OPENAI/ANTHROPIC/GOOGLE key
```

```python
import asyncio
from browser_use import Agent, ChatBrowserUse

async def main():
    agent = Agent(
        task="Find the number of stars of the browser-use repo",
        llm=ChatBrowserUse(model="openai/gpt-5.5"),
    )
    await agent.run()

asyncio.run(main())
```

Docs: library + cloud trên browser-use.com. Harness setup: xem `browser-harness` install trong README.

## So với tool khác

| | Browser Use | Stagehand | Midscene |
|--|-------------|-----------|----------|
| Ngôn ngữ | Python | TS/JS | TS |
| Shape | Agent loop + skill | NL↔code SDK | Vision screenshot |
| Mobile/native | Web-first | Web | Web + mobile + desktop |

## Odoo / ai_core

Agent ngoài ERP: login portal/demo (có RoE), QA UI Odoo web. Không chạy headless mù trong worker Odoo — sidecar Python + policy/guardrail. Chi phí LLM theo step.

## Link

- Repo: https://github.com/browser-use/browser-use · Site: https://browser-use.com  
- Gần: [Stagehand](stagehand.md) · [Midscene](midscene.md) · [Puppeteer](puppeteer.md) · [CloakBrowser](cloakbrowser.md)
