# SnapDOM

> **Repo:** [zumerlab/snapdom](https://github.com/zumerlab/snapdom)  
> **Category:** DevTools · DOM capture → PNG/SVG/… (html2canvas alternative)  
> **Tags:** `browser` · `dom`  
> **Ngôn ngữ:** JavaScript · **⭐** ~7.9k · **License:** MIT  
> Site: [snapdom.dev](https://snapdom.dev) · npm: `@zumer/snapdom`

## Đây là gì?

**SnapDOM** là **DOM Capture Engine** hiện đại: chụp subtree DOM (styles, pseudo-elements, fonts nhúng) rồi export **SVG · PNG · JPG · WebP · Canvas · Blob** — hoặc format tùy chỉnh qua **plugin**. Không dependency nặng; dựa Web API chuẩn.

Định vị thay **html2canvas** / **dom-to-image** / **html-to-image**: nhanh hơn, modular, fidelity cao. Dùng trong app web khi cần share card, export UI, thumbnail — không phải full browser automation.

**Cùng kiểu:** [termshot](termshot.md) (terminal→PNG), [React Scan](react-scan.md) (devtools React — khác miền), [Puppeteer](../ui-automation/puppeteer.md) (CDP screenshot full page), [HTML Anything](../image-video/html-anything.md) (agentic HTML + export).

## Dùng khi nào?

| Nhu cầu | SnapDOM |
|---------|---------|
| Chụp element DOM → ảnh/SVG trong SPA | ✅ primary |
| Thay html2canvas / html-to-image | ✅ |
| Full-page / headless browser screenshot | → [Puppeteer](../ui-automation/puppeteer.md) |
| Terminal ANSI → PNG | → [termshot](termshot.md) |
| Vision agent click UI | → [Midscene](../ui-automation/midscene.md) |

## Chạy thử

```bash
npm i @zumer/snapdom
# hoặc yarn add @zumer/snapdom
```

```js
import { snapdom } from '@zumer/snapdom';

const img = await snapdom.toPng(document.querySelector('#card'));
document.body.appendChild(img);

// Một lần clone, nhiều export
const result = await snapdom(document.querySelector('#card'));
await result.toPng();
await result.toSvg();
await result.download({ format: 'jpg', filename: 'card.jpg' });
```

CDN: `unpkg.com/@zumer/snapdom` · Docs/demo: [snapdom.dev](https://snapdom.dev).

## So với tool khác

| | SnapDOM | Puppeteer | termshot |
|--|---------|-----------|----------|
| Shape | In-browser DOM→image lib | Headless browser CDP | Terminal→PNG CLI |
| Input | DOM node | URL / page | ANSI stdout |
| Tags | `browser` `dom` | `browser` `ui-automation` | `cli` `desktop` |

## Dùng với Odoo / ai_core

- Export widget/chat card (React/PWA gateway) ra PNG share — stack JS front, không OWL core.
- Không thay Puppeteer/Midscene cho E2E hay agent computer-use.
- Thumbnail UI nội bộ trước khi gắn vào doc/PDF pipeline.

## Link

- Repo: https://github.com/zumerlab/snapdom · Site: https://snapdom.dev  
- npm: https://www.npmjs.com/package/@zumer/snapdom  
- Peers: [termshot.md](termshot.md) · [react-scan.md](react-scan.md) · [puppeteer.md](../ui-automation/puppeteer.md) · [html-anything.md](../image-video/html-anything.md)
