# Stagehand

> **Repo:** [browserbase/stagehand](https://github.com/browserbase/stagehand)  
> **Category:** UI Automation & Computer Use · Browser agent SDK  
> **Tags:** `ui-automation` · `browser` · `agent`  
> **Ngôn ngữ:** TypeScript · **⭐** ~23.5k · **License:** MIT  
> Site: [stagehand.dev](https://stagehand.dev) · Docs: [docs.stagehand.dev](https://docs.stagehand.dev) · Python: [stagehand-python](https://github.com/browserbase/stagehand-python)

## Đây là gì?

**Stagehand** (Browserbase) là SDK cho **browser agents**: framework automation trình duyệt **kết hợp NL + code**.

Dùng AI khi page lạ, dùng code khi đã biết selector. Preview/cache action → workflow lặp lại; auto-cache + self-healing khi UI đổi. Dựa CDP / Playwright-class stack — không chỉ pure vision và không chỉ inject DOM in-page.

**Cùng kiểu:** [Puppeteer](puppeteer.md) (CDP driver), [Midscene](midscene.md) (screenshot → action / multi-OS), [Page Agent](page-agent.md) (in-page DOM MCP).

## Dùng khi nào?

| Nhu cầu | Stagehand |
|---------|-----------|
| Production browser agent (hybrid NL/code) | ✅ `act` / `agent` / `extract` |
| Cache + self-heal, giảm token | ✅ |
| Structured extract (Zod schema) | ✅ |
| Pure vision (native/mobile/canvas) | → [Midscene](midscene.md) |
| Agent nhúng trong page (DOM) | → [Page Agent](page-agent.md) |

## Chạy thử

```ts
await stagehand.act("click on the stagehand repo");
const agent = stagehand.agent();
await agent.execute("Get to the latest PR");
const { author, title } = await stagehand.extract(
  "extract the author and title of the PR",
  z.object({ author: z.string(), title: z.string() }),
);
```

- Scaffold: `npx create-browser-app`  
- Tốt nhất với LLM key + [Browserbase](https://www.browserbase.com) credentials (local vẫn chạy được)  
- Package: `@browserbasehq/stagehand`

## So với tool khác

| | Stagehand | Midscene | Page Agent |
|--|-----------|----------|------------|
| Approach | NL ↔ code hybrid SDK | Vision screenshot | In-page DOM |
| Surface | Web browser | Web + mobile + desktop | Same-origin page |
| Tags | `ui-automation` `browser` `agent` | `computer-use` `skill` | `dom` `mcp` |

## Dùng với Odoo / ai_core

- Agent scrape / fill form portal web bên ngoài Odoo.  
- E2E "AI path" có cache (ổn định CI hơn pure agent).  
- Kết hợp Browserbase cloud browsers khi cần scale / stealth.

## Link

- Repo: https://github.com/browserbase/stagehand  
- Docs: https://docs.stagehand.dev  
- Peers: [midscene.md](midscene.md) · [page-agent.md](page-agent.md) · [puppeteer.md](puppeteer.md)
