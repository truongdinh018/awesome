# Vikunja App

> **Repo:** [go-vikunja/app](https://github.com/go-vikunja/app)  
> **Category:** DevTools · Cross-platform client cho Vikunja task manager  
> **Tags:** `self-host` · `desktop` · `workspace` · `api` · `workflow`  
> **Ngôn ngữ:** Dart · Flutter · **⭐** ~577 · **License:** MIT  
> Site: [vikunja.io](https://vikunja.io) · Backend: [go-vikunja/vikunja](https://github.com/go-vikunja/vikunja)

## Đây là gì?

**Vikunja App** là client **đa nền tảng** (Flutter) cho [Vikunja](https://github.com/go-vikunja/vikunja) — task manager **self-host**, mã nguồn mở, privacy-first. App kết nối tới Vikunja API (instance tự host hoặc Vikunja Cloud): quản lý task, project, team; xem list, Kanban, Gantt, table.

Không phải AI app — nhưng phù hợp stack năng suất self-host: backend Go + Vue web UI, app mobile/desktop native. App đang **alpha pre-release**; cần Vikunja backend **stable** mới nhất.

**Cùng kiểu:** [Vikunja](vikunja.md) (backend + web UI), [Yuvomi](yuvomi.md) (planner + MCP), [OpenTickly](opentickly.md) (productivity self-host), [Dashy](dashy.md) (homelab dashboard).

## Dùng khi nào?

| Nhu cầu | Vikunja App |
|---------|-------------|
| Task / project manager self-host, sở hữu data | ✅ (cần backend Vikunja) |
| Client native Android / desktop thay browser | ✅ Flutter |
| Kanban + Gantt + list trong một stack | ✅ |
| Family planner + MCP cho agent | → [Yuvomi](yuvomi.md) |
| Kanban cho coding agents | → [Vibe Kanban](../mcp-ai-agents/vibe-kanban.md) |
| Chỉ cần web, không cài app | → [Vikunja](vikunja.md) (backend + web UI sẵn) |

## Chạy thử

```bash
# 1. Self-host backend Vikunja (Docker)
docker run -d \
  -p 3456:3456 \
  -v vikunja:/app/vikunja/files \
  --name vikunja \
  vikunja/vikunja

# 2. Client — tải bản release hoặc build Flutter
git clone https://github.com/go-vikunja/app.git
cd app
flutter pub get
flutter run
```

- Release: [dl.vikunja.io/app](https://dl.vikunja.io/app/) · [Google Play Beta](https://play.google.com/store/apps/details?id=io.vikunja.app)  
- Trong app: nhập URL instance Vikunja (vd. `http://localhost:3456`) + đăng nhập  
- Alpha: có thể lỗi / mất data — không dùng production quan trọng nếu chưa backup

## So với tool khác

| | Vikunja App | Vikunja (backend) | Yuvomi |
|--|-------------|-------------------|--------|
| Vai trò | Flutter client | API + web UI | Family planner PWA |
| Self-host | ✅ (qua backend) | ✅ | ✅ |
| Task / Kanban / Gantt | ✅ | ✅ | tasks module |
| MCP / agent API | ❌ | REST API | ✅ MCP |
| Tags | `self-host` `desktop` `workspace` `workflow` | `self-host` `api` | `self-host` `mcp` `api` |

## Dùng với Odoo / ai_core

- Task bridge: Vikunja project ↔ Odoo project/ticket (sync qua REST API, không có connector chính thức).  
- Agent có thể gọi Vikunja API (tạo task, đổi status) nếu tự viết tool/MCP — pattern giống Yuvomi MCP nhưng DIY.  
- Personal/team productivity stack song song ERP — không thay Odoo PM.

## Link

- App: https://github.com/go-vikunja/app  
- Backend: https://github.com/go-vikunja/vikunja · Docs: https://vikunja.io/docs/  
- Peers: [vikunja.md](vikunja.md) · [yuvomi.md](yuvomi.md) · [opentickly.md](opentickly.md) · [dashy.md](dashy.md)
