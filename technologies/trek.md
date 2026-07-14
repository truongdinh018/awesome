# TREK

> **Repo:** [mauriceboe/TREK](https://github.com/mauriceboe/TREK)  
> **Category:** DevTools & Integration · Travel app + MCP  
> **Tags:** `mcp` · `self-host` · `notification` · `gis`  
> **Ngôn ngữ:** TypeScript (NestJS + React) · **⭐** ~10.3k · **License:** AGPL-3.0  
> Docker: `mauriceboe/trek` · Docs: wiki + `MCP.md` trong repo

## Tổng quan

**TREK** — **travel / trip planner self-host**: kế hoạch ngày, bản đồ tương tác, ngân sách, packing list, journal, collab realtime (WebSocket), PWA offline, SSO/OIDC/passkeys.

Điểm AI trong catalog: addon **MCP** (OAuth 2.1) — **150+ tools**, 30 resources — agent tạo trip, xếp ngày, packing, budget, Atlas countries… Notifications hỗ trợ **email / webhook / [ntfy](ntfy.md)**.

## Để làm gì?

| Nhu cầu | TREK |
|---------|------|
| Lịch trình du lịch nhóm + map | ✅ Drag-drop + Leaflet/Mapbox |
| Self-host privacy (không TripIt SaaS) | ✅ Docker / Helm |
| Agent thao tác trip qua MCP | ✅ 150+ tools, scopes |
| Push trip alert | ✅ ntfy (+ SMTP/webhook) |
| Import booking PDF/email | ✅ KDE Itinerary |
| Chỉ cần MCP server thuần RAG | → PageIndex / SAG / NotebookLM |

## MCP (AI)

- Built-in MCP + OAuth 2.1  
- Prompt sẵn: `trip-summary`, `packing-list`, `budget-overview`  
- Addon-aware (Atlas, Collab, Vacay…)  
- Chi tiết: [`MCP.md`](https://github.com/mauriceboe/TREK/blob/main/MCP.md)

## Docker nhanh

```bash
ENCRYPTION_KEY=$(openssl rand -hex 32) docker run -d -p 3000:3000 \
  -e ENCRYPTION_KEY=$ENCRYPTION_KEY \
  -v ./data:/app/data -v ./uploads:/app/uploads mauriceboe/trek
```

Mở `http://localhost:3000` — admin seed lần đầu (log container hoặc `ADMIN_EMAIL`/`ADMIN_PASSWORD`).

> Chỉ mount `data` + `uploads` — **không** mount `/app`.

## Stack

Node 22 · NestJS 11 · SQLite · React 19 · Leaflet/Mapbox · Docker · Helm

## So sánh catalog

| | TREK | ntfy | ArcGIS harness |
|--|------|------|----------------|
| Vai trò | App travel + MCP | Push HTTP | GIS CLI/MCP |
| Tags | `mcp` `self-host` `notification` `gis` | `notification` | `gis` `mcp` `harness` |

## Use case

- Family/team trip self-host + Claude/Cursor qua MCP  
- Odoo: webhook/ntfy từ TREK khi itinerary đổi (không bắt buộc sync ERP)  
- Map places: OSM free hoặc Google Places

## Link

- Repo: https://github.com/mauriceboe/TREK  
- MCP: https://github.com/mauriceboe/TREK/blob/main/MCP.md  
- Notify peer: [ntfy.md](ntfy.md)  
- Planner peer (family + MCP): [yuvomi.md](yuvomi.md)  
- GIS peer: [cli-anything/arcgis-pro.md](cli-anything/arcgis-pro.md) · [vietnamese-provinces-database.md](vietnamese-provinces-database.md)  
- Helm: `helm repo add trek https://mauriceboe.github.io/TREK`
