# OpenTickly

> **Repo:** [CorrectRoadH/OpenTickly](https://github.com/CorrectRoadH/OpenTickly)  
> **Category:** DevTools · Productivity · Toggl-compatible time tracker (self-host)  
> **Tags:** `self-host` · `api` · `cli` · `workspace` · `agent`  
> **Ngôn ngữ:** TypeScript · Go · PostgreSQL · Redis · **⭐** ~0.3k · **License:** AGPL-3.0  
> Site: [opentoggl.com](https://opentoggl.com) · CLI: [toggl-cli](https://github.com/CorrectRoadH/toggl-cli)

## Đây là gì?

**OpenTickly** là **time tracker self-host**, private-first, **tương thích Toggl** (import/export, giữ workflow hiện có). Thay SaaS đắt + quota API Toggl ~30 req/giờ — agent AI dễ đốt hết trong phút — bằng stack tự host (Docker/NAS/Unraid/Zeabur), PWA mobile, API rộng hơn cho agent/`toggl-cli`.

Khác [Whisper Money](whisper-money.md) (sổ chi tiêu): đây là **theo dõi thời gian làm việc**, AI-friendly (ghi/review time qua CLI).

**Cùng kiểu:** [Whisper Money](whisper-money.md), [ezBookkeeping](ezbookkeeping.md), [Dashy](dashy.md), [ntfy](ntfy.md), [Horizon](horizon.md).

## Dùng khi nào?

| Nhu cầu | OpenTickly |
|---------|------------|
| Self-host timesheet · replace Toggl | ✅ primary |
| Agent/`toggl-cli` ghi time không bị rate-limit SaaS | ✅ |
| PWA trên phone | ✅ |
| Personal finance ledger | → [Whisper Money](whisper-money.md) · [ezBookkeeping](ezbookkeeping.md) |
| Homelab startpage | → [Dashy](dashy.md) |

## Chạy thử

```bash
# Docker Compose — xem docs/self-hosting/docker-compose.md
git clone https://github.com/CorrectRoadH/OpenTickly.git
cd OpenTickly
# Cần PostgreSQL + Redis (DATABASE_URL, REDIS_URL)
docker compose up -d
```

CLI (AI-friendly): [CorrectRoadH/toggl-cli](https://github.com/CorrectRoadH/toggl-cli).  
Roadmap: Track v9 + Reports v3 API parity với Toggl.

## So với tool khác

| | OpenTickly | Whisper Money | Toggl Track (SaaS) |
|--|------------|---------------|---------------------|
| Niche | Time tracking | Personal finance | Time tracking cloud |
| Data | Self-host | Self-host | Vendor |
| AI/CLI | `toggl-cli` · không rate-limit cứng SaaS | ❌ | API ~30/h |

## Dùng với Odoo / ai_core

- Theo dõi giờ hỗ trợ / implement Odoo per project — data ở nhà, không đẩy timesheet lên Toggl.  
- Agent coding ghi start/stop qua CLI khi làm ticket; report sau trong OpenTickly.  
- AGPL: phân phối binary/SaaS phải mở source theo AGPL.

## Link

- Repo: https://github.com/CorrectRoadH/OpenTickly · Site: https://opentoggl.com  
- Peers: [whisper-money.md](whisper-money.md) · [dashy.md](dashy.md) · [ntfy.md](ntfy.md) · [horizon.md](horizon.md)
