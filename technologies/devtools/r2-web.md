# R2 Web

> **Repo:** [vikiboss/r2-web](https://github.com/vikiboss/r2-web)  
> **Category:** DevTools · Cloudflare R2 browser file manager  
> **Tags:** `self-host` · `desktop` · `api` · `workspace`  
> **Ngôn ngữ:** JavaScript · HTML/CSS (zero-framework) · **⭐** ~352 · **License:** MIT  
> Site: [r2.viki.moe](https://r2.viki.moe)

## Đây là gì?

**R2 Web** là **file manager web thuần browser** cho **Cloudflare R2**: browse, upload (kéo/thả, paste), rename/move/copy/delete, preview ảnh/video/audio/text. Có thể dùng làm **ảnh/image host** (nén WASM, copy Markdown/HTML). **PWA** cài như app.

**Không backend** — ký S3 request trên browser, credential chỉ `localStorage`. Zero-build (HTML/CSS/JS). Không phải AI.

**Cùng kiểu:** [ChronoFrame](chronoframe.md) (photo gallery + EXIF/map), [Floci](floci.md) (local AWS emu), [Dashy](dashy.md) (homelab hub), [Stirling-PDF](stirling-pdf.md) (PDF ops — khác R2), [Magika](magika.md) (file-type).

## Dùng khi nào?

| Nhu cầu | R2 Web |
|---------|--------|
| Quản lý bucket R2 nhanh trong browser | ✅ |
| Hình bed riêng + nén ảnh local | ✅ |
| File > ~300MB / script tự động | → rclone / SDK |
| Gallery / album self-host + map | → [ChronoFrame](chronoframe.md) |
| Emulate AWS local | → [Floci](floci.md) |

## Chạy thử

```bash
# 1) CORS trên R2 bucket — AllowedOrigins = domain bạn dùng
# 2) Online: https://r2.viki.moe  (điền API token — lưu localStorage)

# Self-host (deploy thư mục src)
npx serve src
# hoặc Cloudflare Pages / Vercel / Netlify — xem README
```

Dùng API token scoped bucket (không admin toàn account). Không share “config link” công khai — chứa secret.

## So với tool khác

| | R2 Web | Floci | Dashy |
|--|--------|-------|-------|
| Niche | UI quản lý Cloudflare R2 | Local AWS API | Homelab startpage |
| Backend | ❌ browser-only | ✅ docker | ✅ self-host |
| AI | ❌ | ❌ | ❌ |

## Dùng với Odoo / ai_core

- Host ảnh/static cho docs/RAG demo trên R2 mà không mở Cloudflare console.  
- Không gắn Odoo binary upload >300MB qua tool này.  
- Credential chỉ trên máy dev; đừng commit config share link.

## Link

- Repo: https://github.com/vikiboss/r2-web · Demo: https://r2.viki.moe  
- Peers: [floci.md](floci.md) · [dashy.md](dashy.md) · [stirling-pdf.md](stirling-pdf.md) · [magika.md](magika.md)
