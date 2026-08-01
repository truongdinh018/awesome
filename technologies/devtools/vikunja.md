# Vikunja

> **Repo:** [go-vikunja/vikunja](https://github.com/go-vikunja/vikunja)  
> **Category:** DevTools · Self-hosted task & project manager  
> **Tags:** `self-host` · `api` · `workspace` · `workflow`  
> **Ngôn ngữ:** Go · Vue.js · **⭐** ~4.9k · **License:** AGPL-3.0  
> Site: [vikunja.io](https://vikunja.io) · Client: [go-vikunja/app](https://github.com/go-vikunja/app)

## Đây là gì?

**Vikunja** là task manager **self-host** mã nguồn mở — *"the task manager you actually own"*. Backend Go + web UI Vue: task, project, team, label, due date, repeat; xem **list, Kanban, Gantt, table**. REST API đầy đủ; CalDAV; import Todoist/TickTick/Trello/Wunderlist.

Không phải AI app — stack productivity private-first. Có Vikunja Cloud (SaaS) hoặc Docker self-host. Client Flutter: [Vikunja App](vikunja-app.md).

**Cùng kiểu:** [Vikunja App](vikunja-app.md) (client native), [Yuvomi](yuvomi.md) (family planner + MCP), [OpenTickly](opentickly.md) (time tracker self-host).

## Dùng khi nào?

| Nhu cầu | Vikunja |
|---------|---------|
| Task / project manager self-host, sở hữu data | ✅ primary |
| Kanban + Gantt + API cho tích hợp | ✅ |
| Client mobile/desktop Flutter | → [Vikunja App](vikunja-app.md) |
| Family planner + MCP cho agent | → [Yuvomi](yuvomi.md) |
| Kanban cho coding agents | → [Vibe Kanban](../mcp-ai-agents/vibe-kanban.md) |

## Chạy thử

```bash
# Docker (đơn giản nhất)
docker run -d \
  -p 3456:3456 \
  -v vikunja:/app/vikunja/files \
  --name vikunja \
  vikunja/vikunja

# Mở http://localhost:3456 — đăng ký user đầu tiên
```

Docker Compose, binary, source build: [vikunja.io/docs/installing](https://vikunja.io/docs/installing/).  
Import: Todoist, TickTick, Trello, Wunderlist, Microsoft To-Do.

## So với tool khác

| | Vikunja | Vikunja App | Yuvomi |
|--|---------|-------------|--------|
| Vai trò | Backend + web UI | Flutter client | Family planner PWA |
| Self-host | ✅ | ✅ (qua backend) | ✅ |
| Kanban / Gantt | ✅ | ✅ | tasks module |
| MCP | ❌ (REST API DIY) | ❌ | ✅ |
| License | AGPL-3.0 | MIT | MIT |

## Dùng với Odoo / ai_core

- Sync task/project qua REST API — tự viết bridge Odoo ↔ Vikunja (không có connector chính thức).  
- Team dùng Vikunja cho personal/team PM; Odoo giữ ERP/CRM.  
- AGPL: deploy SaaS phải mở source theo AGPL.

## Link

- Repo: https://github.com/go-vikunja/vikunja  
- Docs: https://vikunja.io/docs/ · API: https://vikunja.io/docs/api/  
- Peers: [vikunja-app.md](vikunja-app.md) · [yuvomi.md](yuvomi.md) · [opentickly.md](opentickly.md)
