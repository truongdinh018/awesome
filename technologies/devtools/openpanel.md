# OpenPanel

> **Repo:** [Openpanel-dev/openpanel](https://github.com/Openpanel-dev/openpanel)  
> **Category:** DevTools · Product analytics self-host (Mixpanel-like)  
> **Tags:** `self-host` · `api` · `mcp` · `browser` · `docker` · `workspace`  
> **Ngôn ngữ:** TypeScript · Next.js · ClickHouse · Postgres · **⭐** ~6.7k · **License:** AGPL-3.0  
> **Site:** [openpanel.dev](https://openpanel.dev) · Docs: [openpanel.dev/docs](https://openpanel.dev/docs)

## Đây là gì?

**OpenPanel** là nền tảng **web / product analytics** mã nguồn mở: funnel, cohort, user profile, session history, **session replay**, A/B test, dashboard realtime. Định vị: sức Mixpanel + đơn giản kiểu Plausible — **self-host**, cookieless, hướng GDPR.

Stack: Next.js (dashboard), Fastify (event API), Postgres + ClickHouse, Redis/BullMQ. Có SDK web/mobile/server và **MCP server** (hỏi Claude/Cursor về user — hosted, không cài). Cloud của họ hoặc Docker self-host.

**Cùng kiểu:** [Appsmith](appsmith.md) (internal dashboard CRUD), [Dashy](dashy.md) (homelab links), [Duckle](duckle.md) (ETL), [changedetection.io](changedetection-io.md) (theo dõi trang).

## Dùng khi nào?

| Nhu cầu | OpenPanel |
|---------|-----------|
| Analytics sản phẩm self-host, không gửi GA4 | ✅ |
| Funnel / cohort / replay / A/B | ✅ |
| Hỏi agent về user qua MCP | ✅ MCP hosted |
| Chỉ homepage status homelab | → [Dashy](dashy.md) |
| Admin CRUD trên DB nội bộ | → [Appsmith](appsmith.md) |
| Website analytics siêu nhẹ (pageview) | → Plausible (ngoài catalog) |

## Chạy thử

Self-host: [docs self-hosting](https://openpanel.dev/docs/self-hosting/self-hosting). Dev local:

```bash
git clone https://github.com/Openpanel-dev/openpanel.git
cd openpanel
pnpm install
cp .env.example .env
pnpm dock:up
pnpm codegen
pnpm migrate:deploy
pnpm dev
# Dashboard: https://localhost:3000
```

Cần Docker, Node, pnpm.

## So với tool khác

| | OpenPanel | Appsmith | Dashy |
|--|-----------|----------|-------|
| Vai trò | Product analytics | Low-code admin | Homelab startpage |
| Event / funnel | ✅ | ❌ (bạn tự query) | ❌ |
| Tags | `self-host` `mcp` `api` | `self-host` `workspace` | `self-host` `workspace` |

## Dùng với Odoo / ai_core

- Event từ website / app khách, không thay `ir.logging` Odoo.  
- MCP: agent hỏi “user drop ở bước nào” — không nối sẵn ai_core.  
- Self-host ClickHouse: tài nguyên nặng hơn Plausible; PoC trước khi gắn prod.

## Link

- Repo: https://github.com/Openpanel-dev/openpanel  
- Site: https://openpanel.dev  
- Peers: [appsmith.md](appsmith.md) · [dashy.md](dashy.md) · [duckle.md](duckle.md)
