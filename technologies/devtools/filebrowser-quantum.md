# FileBrowser Quantum

> **Repo:** [gtsteffaniak/filebrowser](https://github.com/gtsteffaniak/filebrowser)  
> **Category:** DevTools · Web file browser (self-host)  
> **Tags:** `self-host` · `desktop` · `api` · `workspace` · `browser`  
> **Ngôn ngữ:** Go · **⭐** ~7.4k · **License:** Apache-2.0  
> Docs: xem Official Docs trong README upstream (FileBrowser Quantum)

## Đây là gì?

**FileBrowser Quantum** — fork hiện đại của File Browser: **web file manager** self-host trên filesystem (multi-source, include/exclude). UI responsive; tìm kiếm index SQLite realtime; thumbnail office/video/album/3D; share có hết hạn + quyền; ACL theo thư mục/user/group; login OIDC · LDAP · JWT · 2FA · proxy; API token + Swagger `/swagger`; WebDAV. `config.yaml`. **Không** còn shell commands (đã bỏ so với bản gốc). Binary + Docker; RAM tối thiểu ~512 MB (có ffmpeg ~180 MB image).

Cạnh [R2 Web](r2-web.md) (chỉ Cloudflare R2, browser-only) và [ChronoFrame](chronoframe.md) (gallery ảnh) — đây là **quản lý file server** đa nguồn.

**Cùng kiểu:** [R2 Web](r2-web.md), [ChronoFrame](chronoframe.md), [Dashy](dashy.md), [Floci](floci.md).

## Dùng khi nào?

| Nhu cầu | FileBrowser Quantum |
|---------|---------------------|
| Browse / upload / share file trên VPS/NAS | ✅ primary |
| Multi-user · OIDC/LDAP · API | ✅ |
| Chỉ bucket Cloudflare R2 trong browser | → [R2 Web](r2-web.md) |
| Album ảnh + map EXIF | → [ChronoFrame](chronoframe.md) |
| Homelab startpage | → [Dashy](dashy.md) |

## Chạy thử

```bash
# binary / Docker — xem README + Official Docs
git clone https://github.com/gtsteffaniak/filebrowser.git
cd filebrowser
# cấu hình config.yaml (sources, auth) rồi chạy theo hướng dẫn upstream
```

Stable: xem [Releases](https://github.com/gtsteffaniak/filebrowser/releases) (vd. `v1.4.0-stable`).

## So với tool khác

| | FileBrowser Quantum | R2 Web | ChronoFrame |
|--|---------------------|--------|-------------|
| Storage | Local FS (+ multi-source) | Cloudflare R2 | Local / S3 |
| Backend | ✅ Go server | ❌ browser-only | ✅ Nuxt |
| Share / OIDC / API | ✅ mạnh | Credential local | Admin gallery |

## Odoo / ai_core

Sidecar share file nội bộ / NAS cho team; không thay `ir.attachment`. Agent/API đọc file shared qua token — ACL tách ERP.

## Link

- Repo: https://github.com/gtsteffaniak/filebrowser  
- Gần: [R2 Web](r2-web.md) · [ChronoFrame](chronoframe.md) · [Dashy](dashy.md) · [Floci](floci.md)
