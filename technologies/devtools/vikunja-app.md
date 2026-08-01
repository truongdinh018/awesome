# Vikunja App

> **Repo:** [go-vikunja/app](https://github.com/go-vikunja/app)  
> **Category:** DevTools · Productivity · cross-platform client cho Vikunja  
> **Tags:** `self-host` · `desktop` · `workspace` · `api`  
> **Ngôn ngữ:** Dart · Flutter · **⭐** ~0.6k · **License:** MIT  
> **Site:** [vikunja.io](https://vikunja.io) · Backend: [go-vikunja/vikunja](https://github.com/go-vikunja/vikunja)

## Đây là gì?

**Vikunja App** là client **cross-platform** (Flutter) cho **Vikunja** — app to-do / project self-host mã nguồn mở. Bạn tổ chức task theo list, **Kanban**, bảng, **Gantt**; cộng tác team; dữ liệu nằm trên server bạn (hoặc Vikunja Cloud).

Repo này **không** chứa backend: app nói chuyện API với bản Vikunja **stable** mới nhất. Có bản Android (Play Beta / download server), build iOS/desktop qua Flutter. Trạng thái: **alpha** — dùng thử và feedback được khuyến khích; production quan trọng thì cân nhắc web UI / API trước.

**Cùng kiểu:** [OpenTickly](opentickly.md) (time tracker self-host), [PlainApp](plain-app.md) (hub phone trên LAN), [Dashy](dashy.md) (homelab homepage), [ntfy](ntfy.md) (push), [Vibe Kanban](../mcp-ai-agents/vibe-kanban.md) (Kanban cho coding agent — khác mục đích).

## Dùng khi nào?

| Nhu cầu | Vikunja App |
|---------|-------------|
| Mobile/desktop client cho Vikunja đã self-host | ✅ primary |
| To-do / Kanban / Gantt privacy-first, không Todoist SaaS | ✅ (+ backend Vikunja) |
| Chỉ cần web UI trên browser | → Vikunja web (cùng server), không bắt buộc app |
| Time tracking kiểu Toggl | → [OpenTickly](opentickly.md) |
| Kanban điều phối coding agent | → [Vibe Kanban](../mcp-ai-agents/vibe-kanban.md) |
| Homelab startpage | → [Dashy](dashy.md) |

## Chạy thử

```bash
# 1) Backend Vikunja (Docker — xem docs chính thức nếu cần DB/env)
docker run -d --name vikunja -p 3456:3456 vikunja/vikunja

# 2) Client: tải bản build sẵn
#    Stable: https://github.com/go-vikunja/app/releases
#    Unstable: https://dl.vikunja.io/app/ · Google Play Beta

# 3) Mở app → nhập URL instance (vd. http://<host>:3456) + tài khoản
```

Build từ source (cần Flutter SDK): clone repo → `flutter pub get` → `flutter run` (device/emulator). App yêu cầu Vikunja **stable** mới nhất — xem [vikunja.io/docs/versions](https://vikunja.io/docs/versions/).

## So với tool khác

| | Vikunja App | OpenTickly | Vibe Kanban |
|--|-------------|------------|-------------|
| Shape | Mobile/desktop client to-do | Time tracker self-host | Kanban cho coding agents |
| Backend | Vikunja API | OpenTickly + Toggl-compat | Local / agent workflow |
| Views | List · Kanban · table · Gantt | Time entries | Agent tasks |
| Tags | `self-host` `workspace` `desktop` | `self-host` `workspace` `api` | `coding-agent` `workflow` |

## Dùng với Odoo / ai_core

- Board ops nhẹ: task triển khai / checklist nội bộ trên Vikunja; Odoo giữ ERP, agent đọc API Vikunja khi cần status.  
- Push nhắc việc: webhook/ntfy khi task đổi trạng thái (tùy setup server).  
- Alpha client: đừng làm nguồn sự thật duy nhất cho production — ưu tiên API/web ổn định.

## Link

- Repo app: https://github.com/go-vikunja/app · Backend: https://github.com/go-vikunja/vikunja · Site: https://vikunja.io  
- Peers: [opentickly.md](opentickly.md) · [plain-app.md](plain-app.md) · [dashy.md](dashy.md) · [ntfy.md](ntfy.md) · [vibe-kanban.md](../mcp-ai-agents/vibe-kanban.md)
