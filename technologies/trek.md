# TREK

> **Repo:** [mauriceboe/TREK](https://github.com/mauriceboe/TREK)  
> **Category:** DevTools & Integration · Travel app + MCP  
> **Tags:** `mcp` · `self-host` · `notification` · `gis`  
> **Ngôn ngữ:** TypeScript (NestJS + React) · **⭐** ~10.3k · **License:** AGPL-3.0  
> Docker: `mauriceboe/trek` · Docs: wiki + `MCP.md` trong repo

## Đây là gì?

**TREK** là **travel / trip planner self-host**: kế hoạch ngày, bản đồ tương tác, ngân sách, packing list, journal, collab realtime (WebSocket), PWA offline, SSO/OIDC/passkeys.

Điểm AI trong catalog: addon **MCP** (OAuth 2.1) — **150+ tools**, 30 resources — agent tạo trip, xếp ngày, packing, budget, Atlas countries… Notifications hỗ trợ **email / webhook / [ntfy](ntfy.md)**.

**Cùng kiểu:** [Yuvomi](yuvomi.md) (family planner + MCP), [ntfy](ntfy.md) (push notify), [ArcGIS Pro harness](cli-anything/arcgis-pro.md) (GIS CLI/MCP).

## Dùng khi nào?

| Nhu cầu | TREK |
|---------|------|
| Lịch trình du lịch nhóm + map | ✅ Drag-drop + Leaflet/Mapbox |
| Self-host privacy (không TripIt SaaS) | ✅ Docker / Helm |
| Agent thao tác trip qua MCP | ✅ 150+ tools, scopes |
| Push trip alert | ✅ ntfy (+ SMTP/webhook) |
| Import booking PDF/email | ✅ KDE Itinerary |
| Chỉ cần MCP server thuần RAG | → PageIndex / SAG / NotebookLM |

## Chạy thử

```bash
ENCRYPTION_KEY=$(openssl rand -hex 32) docker run -d -p 3000:3000 \
  -e ENCRYPTION_KEY=$ENCRYPTION_KEY \
  -v ./data:/app/data -v ./uploads:/app/uploads mauriceboe/trek
```

Mở `http://localhost:3000` — admin seed lần đầu (log container hoặc `ADMIN_EMAIL`/`ADMIN_PASSWORD`).

> Chỉ mount `data` + `uploads` — **không** mount `/app`.

**MCP:** Built-in MCP + OAuth 2.1 · Prompt sẵn: `trip-summary`, `packing-list`, `budget-overview` · Chi tiết: [`MCP.md`](https://github.com/mauriceboe/TREK/blob/main/MCP.md)

## So với tool khác

| | TREK | Yuvomi | ntfy |
|--|------|--------|------|
| Vai trò | App travel + MCP | Family household | Push notify |
| Tags | `mcp` `self-host` `notification` `gis` | `mcp` `api` `notification` | `notification` `cli` |

## Dùng với Odoo / ai_core

- Family/team trip self-host + Claude/Cursor qua MCP.  
- Webhook/ntfy từ TREK khi itinerary đổi (không bắt buộc sync ERP).  
- Map places: OSM free hoặc Google Places.

## Link

- Repo: https://github.com/mauriceboe/TREK  
- MCP: https://github.com/mauriceboe/TREK/blob/main/MCP.md  
- Peers: [ntfy.md](ntfy.md) · [yuvomi.md](yuvomi.md) · [cli-anything/arcgis-pro.md](cli-anything/arcgis-pro.md) · [vietnamese-provinces-database.md](vietnamese-provinces-database.md)
