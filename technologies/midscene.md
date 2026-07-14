# Midscene.js

> **Repo:** [web-infra-dev/midscene](https://github.com/web-infra-dev/midscene)  
> **Category:** UI Automation & Computer Use  
> **Ngôn ngữ:** TypeScript · **⭐** ~14.1k · **License:** MIT

## Tổng quan

**Midscene.js** là framework **UI automation / testing dựa trên vision** — mô tả bước bằng **ngôn ngữ tự nhiên**, định vị element từ **screenshot**, không phụ thuộc selector DOM dễ gãy.

Khác Playwright/Selenium thuần: Midscene “nhìn” UI như người dùng, nên thao tác được cả icon-only, custom control, `<canvas>`, native app, iframe cross-origin.

## Vì sao khác automation thường

| Vấn đề DOM/accessibility | Midscene |
|--------------------------|----------|
| Selector gãy khi refactor | Ít maintain — mô tả bằng lời |
| Element thiếu semantic markup | Vẫn target nếu nhìn thấy trên screenshot |
| Native / canvas / iframe | Cùng một API vision |
| Assert “có node” ≠ “nhìn đúng” | Assert màu, layout, highlight thực tế |

## Nền tảng hỗ trợ

Web (Playwright / Chrome extension) · Android · iOS · HarmonyOS · Desktop · surface tùy chỉnh (nơi chụp được screenshot).

Viết script bằng **JS SDK** hoặc **YAML**; có **Midscene Skills** để AI agent (OpenClaw…) điều khiển UI.

API chính: `aiAct`, `aiQuery`, `aiAssert`, …

## Model strategy

Element localization **pure vision** (screenshot only). Hỗ trợ multimodal mạnh UI, ví dụ:

- Qwen3.x, Doubao-Seed, GLM-4.6V, gemini-flash, UI-TARS
- Có thể self-host model open-source

Data extraction / page understanding: tùy chọn thêm DOM khi cần.

## Use case

- **E2E AI** — form đăng ký, booking, flow phức tạp mà selector khó viết
- **Visual assert** — kiểm tra UI “trông đúng”, không chỉ tồn tại node
- **Cross-platform** — cùng script style cho web + mobile
- **Odoo / ERP** — test view Owl/Form khi xpath/class thay đổi liên tục; agent smoke-test màn hình
- **Kết hợp Playwright/Vitest** — gắn Midscene vào suite hiện có

## So sánh

| | Midscene | Playwright thuần | Browser-use agents |
|--|----------|------------------|--------------------|
| Cách locate | Vision + NL | CSS/XPath/role | Thường DOM + LLM |
| Maintain selector | Thấp | Cao | Trung bình |
| Visual assert | Mạnh | Screenshot compare riêng | Tùy |
| Chi phí | Gọi multimodal model | Không cần LLM | Gọi LLM |
| Offline / self-host | Có (model local) | ✅ | Tùy |

## Hạn chế

- Cần **API key / model** multimodal — chi phí & latency cao hơn test selector
- Determinism thấp hơn assert DOM cứng (cần retry / prompt rõ)
- Không thay thế unit test / API test

## Liên quan ai_core

- E2E smoke cho `ai_agentic` / backend UI khi deploy
- Agent Skills: Midscene điều khiển browser/mobile thay vì hardcode Playwright
- Kết hợp **ScreenCoder** (screenshot → HTML) vs Midscene (screenshot → **hành động**)

## Link

- Repo: https://github.com/web-infra-dev/midscene
- Docs: https://midscenejs.com
- API: https://midscenejs.com/api
- Examples: [midscene-example](https://github.com/web-infra-dev/midscene-example)
