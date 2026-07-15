# Midscene.js

> **Repo:** [web-infra-dev/midscene](https://github.com/web-infra-dev/midscene)  
> **Category:** UI Automation & Computer Use  
> **Tags:** `ui-automation` · `computer-use` · `browser` · `skill`  
> **Ngôn ngữ:** TypeScript · **⭐** ~14.1k · **License:** MIT

## Đây là gì?

**Midscene.js** là framework **UI automation / testing dựa trên vision** (*vision-based automation*): mô tả bước bằng **ngôn ngữ tự nhiên**, định vị element từ **screenshot**, không phụ thuộc selector DOM dễ gãy.

Khác Playwright/Selenium thuần: Midscene “nhìn” UI như người dùng, nên thao tác được cả icon-only, custom control, `<canvas>`, native app, iframe cross-origin. API chính: `aiAct`, `aiQuery`, `aiAssert`, …

**Cùng kiểu:** [Browser Use](browser-use.md) (Python agent loop), [Page Agent](page-agent.md) (in-page DOM/NL), [Stagehand](stagehand.md) (hybrid SDK), [Puppeteer](puppeteer.md) (driver).

## Dùng khi nào?

| Nhu cầu | Midscene |
|---------|----------|
| Selector gãy khi refactor | ✅ mô tả bằng lời |
| Element thiếu semantic markup | ✅ target từ screenshot |
| Native / canvas / iframe | ✅ cùng API vision |
| Visual assert (màu, layout) | ✅ |
| Test selector thuần, không LLM | → Playwright thuần |
| Chi phí thấp, deterministic | → Playwright (không gọi multimodal) |

## Chạy thử

Web (Playwright / Chrome extension) · Android · iOS · HarmonyOS · Desktop · surface tùy chỉnh (nơi chụp được screenshot). Viết script bằng **JS SDK** hoặc **YAML**; có **Midscene Skills** để AI agent (OpenClaw…) điều khiển UI.

Model strategy: element localization **pure vision** (screenshot only). Hỗ trợ Qwen3.x, Doubao-Seed, GLM-4.6V, gemini-flash, UI-TARS; có thể self-host model open-source.

## So với tool khác

| | Midscene | Playwright thuần | Browser-use agents |
|--|----------|------------------|--------------------|
| Cách locate | Vision + NL | CSS/XPath/role | Thường DOM + LLM |
| Maintain selector | Thấp | Cao | Trung bình |
| Visual assert | Mạnh | Screenshot compare riêng | Tùy |
| Chi phí | Gọi multimodal model | Không cần LLM | Gọi LLM |
| Offline / self-host | Có (model local) | ✅ | Tùy |

## Dùng với Odoo / ai_core

- E2E smoke cho `ai_agentic` / backend UI khi deploy.  
- Agent Skills: Midscene điều khiển browser/mobile thay vì hardcode Playwright.  
- Test view Owl/Form Odoo khi xpath/class thay đổi liên tục.

## Link

- Repo: https://github.com/web-infra-dev/midscene  
- Docs: https://midscenejs.com · API: https://midscenejs.com/api  
- Peers: [page-agent.md](page-agent.md) · [stagehand.md](stagehand.md) · [puppeteer.md](puppeteer.md) · [midscene-example](https://github.com/web-infra-dev/midscene-example)
