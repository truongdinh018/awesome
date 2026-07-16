# Dashy

> **Repo:** [Lissy93/dashy](https://github.com/Lissy93/dashy)  
> **Category:** DevTools · Homelab / personal homepage dashboard  
> **Tags:** `self-host` · `desktop` · `workspace` · `docker`
> **Ngôn ngữ:** Vue · Node · Docker · **⭐** ~25.9k · **License:** MIT  
> Site: [dashy.to](https://dashy.to)

## Đây là gì?

**Dashy** là dashboard self-host làm **homepage homelab**: gom links/apps, status check realtime, widgets, themes/icons.

Có UI YAML editor, auth/SSO, multi-page, search/hotkeys, PWA, workspace view. Chạy Docker hoặc bare metal; privacy-focused, không phải AI agent.

**Cùng kiểu:** [ntfy](ntfy.md) (push notify), [Folo](folo.md) (RSS reader), [Horizon](horizon.md) (news radar), [PlainApp](plain-app.md) (phone hub từ browser), [R2 Web](r2-web.md) (R2 file manager), [ChronoFrame](chronoframe.md) (photo gallery), [changedetection.io](changedetection-io.md) (watch URL).

## Dùng khi nào?

| Nhu cầu | Dashy |
|---------|-------|
| Startpage / hub self-hosted services | ✅ primary |
| Status + widgets dịch vụ nội bộ | ✅ |
| Push alerts | → [ntfy](ntfy.md) |
| AI RSS / news digest | → [Folo](folo.md) / [Horizon](horizon.md) |
| Quản Android từ browser (LAN) | → [PlainApp](plain-app.md) |

## Chạy thử

```bash
docker run -d \
  -p 8080:8080 \
  -v ./my-conf.yml:/app/user-data/conf.yml \
  --name dashy \
  --restart=always \
  lissy93/dashy:latest
```

Config: file YAML hoặc UI editor trong app. Demo: xem [dashy.to](https://dashy.to).

## So với tool khác

| | Dashy | Folo | ntfy |
|--|-------|------|------|
| Shape | Homelab homepage hub | AI RSS reader | Push transport |
| AI | ❌ | ✅ tóm tắt/dịch | ❌ |
| Tags | `self-host` `workspace` | `desktop` `self-host` | `notification` `cli` |

## Dùng với Odoo / ai_core

- Bookmark nội bộ: Odoo, Grafana, LocalAI, ntfy, Docmost… trên một trang lab.  
- Không thay monitoring APM đầy đủ.

## Link

- Repo: https://github.com/Lissy93/dashy · Site: https://dashy.to  
- Peers: [ntfy.md](ntfy.md) · [folo.md](folo.md) · [horizon.md](horizon.md) · [r2-web.md](r2-web.md) · [changedetection-io.md](changedetection-io.md)
