# Yuvomi

> **Repo:** [ulsklyc/yuvomi](https://github.com/ulsklyc/yuvomi)  
> **Category:** DevTools · Self-hosted family planner *(có MCP)*  
> **Tags:** `self-host` · `mcp` · `api` · `notification`  
> **Ngôn ngữ:** JavaScript · Express · SQLite/SQLCipher · **⭐** ~938 · **License:** MIT  
> Site: [yuvomi.cloud](https://yuvomi.cloud/) · Đổi tên từ **Oikos** (trademark)

## Đây là gì?

**Yuvomi** là family planner **self-host / offline PWA**: tasks, shopping, meals, calendar, budget, health, rewards… 16 modules, 23 languages (có **vi**), 0 trackers, optional AES-256 DB.

Docker/Podman/NAS. **Không phải AI app** — nhưng có **OpenAPI + MCP** (`/mcp`) để agent (Claude Desktop…) điều khiển API bằng NL, scoped theo module.

**Cùng kiểu:** [TREK](trek.md) (travel planner + MCP), [ntfy](ntfy.md) (reminders push), [EpicStaff](epicstaff.md) (agent orchestration).

## Dùng khi nào?

| Nhu cầu | Yuvomi |
|---------|--------|
| Household private (no SaaS) | ✅ Docker PWA |
| Agent đọc/ghi tasks/calendar | ✅ MCP + API tokens |
| Reminder qua ntfy/Gotify | ✅ |
| Competitive intel / RAG | → [SurfSense](surfsense.md) / catalog RAG |
| Pure AI coding agent | → [Hermes](hermes-agent.md) |

## Chạy thử

```bash
curl -O https://raw.githubusercontent.com/ulsklyc/yuvomi/main/docker-compose.yml
curl -O https://raw.githubusercontent.com/ulsklyc/yuvomi/main/.env.example
cp .env.example .env   # SESSION_SECRET · DB_ENCRYPTION_KEY
docker compose up -d
```

UI `:3000`. Image: `ghcr.io/ulsklyc/yuvomi`.

- Modules: Tasks · Shopping · Meals · Calendar (Google/CalDAV) · Budget · Health · Documents…  
- SSO OIDC · Web Push · Paperless-ngx/Papra links  
- Health: *not a medical device* — bật `DB_ENCRYPTION_KEY` nếu có health data

## So với tool khác

| | Yuvomi | TREK | ntfy |
|--|--------|------|------|
| Domain | Family household | Travel collab | Push notify |
| MCP | ✅ full API | ✅ | webhook consumer |
| AI-first | ❌ planner + MCP | ❌ + MCP | ❌ |
| Tags | `self-host` `mcp` `api` `notification` | `mcp` `gis` | `notification` `cli` |

## Dùng với Odoo / ai_core

- Prototype agent → household API (pattern MCP scoped tools).  
- Reminder bridge: Yuvomi → ntfy; Odoo notification parallel.  
- Không thay ERP — personal/home stack only.

## Link

- Repo: https://github.com/ulsklyc/yuvomi  
- Site / docs: https://yuvomi.cloud/  
- Peers: [trek.md](trek.md) · [ntfy.md](ntfy.md)
