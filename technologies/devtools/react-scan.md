# React Scan

> **Repo:** [aidenybai/react-scan](https://github.com/aidenybai/react-scan)
> **Category:** DevTools · Scan / highlight React render performance
> **Tags:** `browser` · `cli` · `desktop`
> **Ngôn ngữ:** TypeScript · **⭐** ~21.6k · **License:** MIT
> Site: [react-scan.com](https://react-scan.com) · Demo trên README repo

## Đây là gì?

**React Scan** tự **phát hiện vấn đề performance React** (render thừa): không cần sửa app nhiều — drop-in script / `npx react-scan init`, hoặc extension. Highlight đúng component cần tối ưu, kèm toolbar luôn có sẵn trên trang.

React so sánh props theo *reference* → dễ vô tình re-render; tool hiện những chỗ đắt. Hỗ trợ script tag, Next.js, Vite, Remix; API `scan` / `useScan` / `onRender`. Không phải AI agent — là **devtools frontend**.

**Cùng kiểu:** [Chrome DevTools MCP](../ui-automation/chrome-devtools-mcp.md) (CDP/agent), [CloakBrowser](../ui-automation/cloakbrowser.md) (browser automation), [Puppeteer](../ui-automation/puppeteer.md) (CDP driver).

## Dùng khi nào?

| Nhu cầu                                    | React Scan                                                                            |
| ------------------------------------------- | ------------------------------------------------------------------------------------- |
| Tìm unnecessary re-renders trên app React | ✅ drop-in                                                                            |
| Toolbar highlight component chậm           | ✅                                                                                    |
| Browser agent / NL→click                   | →[Midscene](../ui-automation/midscene.md) / [Stagehand](../ui-automation/stagehand.md) |
| MCP DevTools cho coding agent               | →[Chrome DevTools MCP](../ui-automation/chrome-devtools-mcp.md)                       |
| Chạy bắt buộc trên production           | ❌ (có`dangerouslyForceRunInProduction` — không khuyến nghị)                   |

## Chạy thử

```bash
npx -y react-scan@latest init
# hoặc
npm install -D react-scan
```

Script tag (trước script app):

```html
<script
  crossorigin="anonymous"
  src="//unpkg.com/react-scan/dist/auto.global.js"
></script>
```

Vite / Next / Remix: xem [docs/installation](https://github.com/aidenybai/react-scan/tree/main/docs/installation) trong repo.

## So với tool khác

|       | React Scan           | Chrome DevTools MCP      | Midscene                      |
| ----- | -------------------- | ------------------------ | ----------------------------- |
| Niche | React re-render scan | Agent ↔ Chrome DevTools | NL → UI vision               |
| Tags  | `browser` `cli`  | `mcp` `browser`      | `ui-automation` `browser` |

## Dùng với Odoo / ai_core

- Không gắn Odoo OWL trực tiếp (stack React).
- Dùng khi build PWA / React gateway front (agent chat UI, dashboard) cạnh `ai_core`.
- Dev-only — đừng bật force production trên ERP public.

## Link

- Repo: https://github.com/aidenybai/react-scan
- Site: https://react-scan.com
- Peers: [chrome-devtools-mcp.md](../ui-automation/chrome-devtools-mcp.md) · [cloakbrowser.md](../ui-automation/cloakbrowser.md) · [puppeteer.md](../ui-automation/puppeteer.md) · [midscene.md](../ui-automation/midscene.md)
