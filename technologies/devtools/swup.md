# Swup

> **Repo:** [swup/swup](https://github.com/swup/swup)  
> **Category:** DevTools · Page transition library (MPA → cảm giác SPA)  
> **Tags:** `browser` · `cli` · `self-host`  
> **Ngôn ngữ:** TypeScript · **⭐** ~5.2k · **License:** MIT  
> **Docs:** [swup.js.org](https://swup.js.org) · npm: `swup`

## Đây là gì?

**Swup** là thư viện **page transition** cho website render phía server (*MPA*). Nó bắt click link, fetch HTML trang sau, thay nội dung trong container, chạy CSS/JS animation, giữ **history** trình duyệt, cache và (qua plugin) preload / a11y / form.

Site cảm giác “mượt như SPA” mà không viết router React/Vue đầy đủ. Nhỏ, plugin-first (progress, scroll, head, preload, forms…). Không phải AI tool — **frontend DX** hữu ích khi làm docs/landing/Odoo website.

**Cùng kiểu:** [VitePress](vitepress.md) (SSG docs — có thể kết hợp theme), [Puppeteer](../ui-automation/puppeteer.md) / [Stagehand](../ui-automation/stagehand.md) (automation — khác miền), View Transitions API native (browser — Swup là abstraction + lifecycle).

## Dùng khi nào?

| Nhu cầu | Swup |
|---------|------|
| MPA (PHP/Odoo/SSG) muốn transition mượt giữa trang | ✅ primary |
| Cache + preload + hook lifecycle page load | ✅ |
| Full SPA framework (React Router…) | ❌ dùng router framework |
| Docs site từ Markdown | → [VitePress](vitepress.md) (có thể gắn Swup nếu theme hỗ trợ) |
| Browser automation / agent | → [Puppeteer](../ui-automation/puppeteer.md) |

## Chạy thử

```bash
npm install swup
```

```js
import Swup from 'swup';
const swup = new Swup(); // mặc định: #swup container + animate CSS
```

CDN nhanh:

```html
<script src="https://unpkg.com/swup@4"></script>
<script>const swup = new Swup();</script>
```

Markup tối thiểu: bọc nội dung trong `#swup`, thêm class transition theo [docs](https://swup.js.org/getting-started/). Themes: fade / slide / overlay.

## So với tool khác

| | Swup | VitePress | View Transitions API |
|--|------|-----------|----------------------|
| Shape | JS library MPA | SSG docs | Browser native |
| History + cache + plugins | ✅ | Theme-dependent | Cơ bản |
| Tags | `browser` | `cli` `knowledge` | — |

## Dùng với Odoo / ai_core

- Website / portal Odoo hoặc VitePress docs nội bộ: thêm transition giữa trang tĩnh mà không rewrite SPA.  
- Landing catalog (như `awesome` site) — cân nhắc nếu muốn soft navigation giữa bài MD.  
- Không liên quan agent/RAG trực tiếp; dùng khi polish UX frontend.

## Link

- Repo: https://github.com/swup/swup · Docs: https://swup.js.org  
- Peers: [vitepress.md](vitepress.md) · [docmd.md](docmd.md) · [puppeteer.md](../ui-automation/puppeteer.md)
