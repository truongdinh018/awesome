# Page Agent

> **Repo:** [alibaba/page-agent](https://github.com/alibaba/page-agent)  
> **Category:** UI Automation & Computer Use  
> **Tags:** `ui-automation` · `browser` · `dom` · `mcp` · `agent`  
> **Ngôn ngữ:** TypeScript · **⭐** ~26.5k · **License:** MIT  
> **Docs:** [alibaba.github.io/page-agent](https://alibaba.github.io/page-agent/)  
> npm: `page-agent`

## Tổng quan

**Page Agent** (Alibaba) — **GUI agent sống trong webpage**: một script JS gắn vào trang → điều khiển UI bằng ngôn ngữ tự nhiên. Không cần browser extension / Python / headless browser (core path).

**Text-based DOM** — không screenshot, không bắt buộc multimodal LLM. Optional: Chrome extension multi-page + MCP (beta). Lấy cảm hứng từ [browser-use](https://github.com/browser-use/browser-use) nhưng thiết kế **client-side web enhancement**, không server automation.

## Để làm gì?

| Nhu cầu | Page Agent |
|---------|------------|
| SaaS AI Copilot trong product | ✅ Embed vài dòng JS |
| Form ERP/CRM — 20 click → một câu | ✅ |
| Accessibility / voice → UI | ✅ |
| Agent ngoài điều khiển browser (MCP) | ✅ Beta |
| Multi-tab | ✅ Extension tùy chọn |

## Quick start

```html
<script
  src="https://cdn.jsdelivr.net/npm/page-agent@1.12.1/dist/iife/page-agent.demo.js"
  crossorigin="anonymous"
></script>
```

```bash
npm install page-agent
```

```ts
import { PageAgent } from 'page-agent'

const agent = new PageAgent({
  model: 'qwen3.5-plus',
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
  apiKey: 'YOUR_API_KEY',
  language: 'en-US',
})
await agent.execute('Click the login button')
```

## So sánh catalog

| | Page Agent | Midscene.js | CLI-Anything |
|--|------------|-------------|--------------|
| Locate | **DOM / text** in-page | **Vision** screenshot | CLI harness |
| Runtime | Trong tab sản phẩm | Playwright/test / multi-platform | Ngoài app |
| Ideal | Copilot / ERP form trên **web của bạn** | E2E bất kỳ UI nhìn được | Pro software không web |

## Quan hệ / ai_core

| | Vai trò |
|--|---------|
| **Odoo backend** | Embed (nếu CSP cho phép) → copilot form view; hoặc MCP điều khiển từ ngoài |
| **Midscene** | Test/automation chéo origin / mobile; Page Agent = in-app enhancement |
| **xb_ai** | Chat agent ERP; Page Agent = thao tác DOM trực tiếp trên UI |

## Link

- Repo: https://github.com/alibaba/page-agent  
- Docs: https://alibaba.github.io/page-agent/  
- npm: https://www.npmjs.com/package/page-agent
