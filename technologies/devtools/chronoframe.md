# ChronoFrame

> **Repo:** [HoshinoSuzumi/chronoframe](https://github.com/HoshinoSuzumi/chronoframe)  
> **Category:** DevTools · Productivity · self-hosted photo gallery  
> **Tags:** `self-host` · `desktop` · `workspace` · `browser`  
> **Ngôn ngữ:** Vue · Nuxt 4 · TypeScript · **⭐** ~1.9k · **License:** MIT  
> Demo/site: [chronoframe.bh8.ga](https://chronoframe.bh8.ga/)

## Đây là gì?

**ChronoFrame** — **gallery ảnh cá nhân self-host**: quản lý album online, Live/Motion Photos, parse EXIF, reverse geocoding, bản đồ explore; JPEG/PNG/HEIC; thumbnail ThumbHash. Stack Nuxt 4 · Drizzle; storage local / S3-compatible / OpenList + CDN. Docker (GHCR/Docker Hub). Không phải AI agent — viewer/manager ảnh (có WebGL).

**Cùng kiểu:** [R2 Web](r2-web.md) (file manager R2, không album/EXIF map), [Dashy](dashy.md) (homelab hub), [ezBookkeeping](ezbookkeeping.md) (finance self-host — khác domain).

## Dùng khi nào?

| Nhu cầu | ChronoFrame |
|---------|-------------|
| Gallery / album self-host + map EXIF | ✅ primary |
| Live Photo / HEIC trên web | ✅ |
| Chỉ browse/upload bucket R2 | → [R2 Web](r2-web.md) |
| Homelab startpage | → [Dashy](dashy.md) |
| Gen / edit ảnh AI | → [ComfyUI](../image-video/comfyui.md) |

## Chạy thử

```bash
# .env tối thiểu: CFRAME_ADMIN_EMAIL, NUXT_SESSION_PASSWORD (32 ký tự)
# NUXT_STORAGE_PROVIDER=local · NUXT_PROVIDER_LOCAL_PATH=/app/data/storage
docker pull ghcr.io/hoshinosuzumi/chronoframe:latest
docker run -d --name chronoframe -p 3000:3000 \
  -v "$(pwd)/data:/app/data" --env-file .env \
  ghcr.io/hoshinosuzumi/chronoframe:latest
# http://localhost:3000
```

Map: MapLibre (MapTiler token) hoặc Mapbox — xem Configuration Guide README.

## So với tool khác

| | ChronoFrame | R2 Web | Dashy |
|--|-------------|--------|-------|
| Việc chính | Photo gallery + EXIF/map | R2 file manager | Homelab links |
| Backend | ✅ Nuxt Docker | ❌ browser-only | ✅ |
| Live Photo / album | ✅ | Preview file | ❌ |

## Odoo / ai_core

Host portfolio / album nội bộ; không thay `ir.attachment`. Link ảnh public CDN nếu cần; ACL riêng khỏi ERP.

## Link

- Repo: https://github.com/HoshinoSuzumi/chronoframe · Site: https://chronoframe.bh8.ga/  
- Image: `ghcr.io/hoshinosuzumi/chronoframe` · Docker Hub: `hoshinosuzumi/chronoframe`  
- Gần: [R2 Web](r2-web.md) · [Dashy](dashy.md) · [ezBookkeeping](ezbookkeeping.md)
