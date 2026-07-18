# Appsmith

> **Repo:** [appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)  
> **Category:** DevTools · Low-code internal tools platform  
> **Tags:** `self-host` · `api` · `workspace` · `workflow` · `browser` · `docker`  
> **Ngôn ngữ:** TypeScript · Java · React · **⭐** ~40.4k · **License:** Apache-2.0  
> **Site:** [appsmith.com](https://www.appsmith.com)

## Đây là gì?

**Appsmith** là nền tảng **low-code** mã nguồn mở để dựng **admin panel**, **internal tool**, **dashboard** và app nội bộ (customer 360, IT automation, service desk…). Kéo-thả widget trên canvas, gắn **query** tới **25+ database** (Postgres, MySQL, MongoDB, Redis…) hoặc **REST/GraphQL API**, rồi bind dữ liệu vào bảng, form, chart.

Có **RBAC**, Git sync, multi-environment (dev/staging/prod), audit log, self-host (Docker / Kubernetes / AWS AMI) hoặc Appsmith Cloud. Stack: React frontend + Java backend. Gần đây có **Appsmith Agents** (agentic AI trên dữ liệu nội bộ) — nhưng lõi vẫn là app builder, không phải coding agent.

**Cùng kiểu:** [Dashy](dashy.md) (homelab dashboard đơn giản), [Duckle](duckle.md) (ETL canvas), [n8n-workflows](n8n-workflows.md) / n8n harness (automation), [EpicStaff](../mcp-ai-agents/epicstaff.md) (AI agent flow), [Drizzle ORM](drizzle-orm.md) (data layer code-first).

## Dùng khi nào?

| Nhu cầu | Appsmith |
|---------|----------|
| CRUD / dashboard nội bộ trên DB hoặc API có sẵn | ✅ primary |
| Self-host low-code, không lock-in SaaS | ✅ Docker/K8s |
| Ops/BA build tool nhanh, dev review Git | ✅ |
| Zapier-like event automation headless | → n8n / [n8n harness](../cli-anything/n8n.md) |
| ETL/visual data pipeline | → [Duckle](duckle.md) |
| AI agent flow đa bước | → [EpicStaff](../mcp-ai-agents/epicstaff.md) |
| Chỉ homepage link + status | → [Dashy](dashy.md) |

## Chạy thử

```bash
# Docker (khuyến nghị) — xem docs nếu cần biến môi trường
docker run -d --name appsmith -p 80:80 appsmith/appsmith-ce

# Mở http://localhost → tạo admin lần đầu
# Thêm datasource (Postgres/API) → New page → kéo Table + Button → Run query
```

Self-host: [docs.appsmith.com](https://docs.appsmith.com/getting-started/setup/installation-guides/docker). Template mẫu: [appsmith.com/templates](https://www.appsmith.com/templates).

## So với tool khác

| | Appsmith | Dashy | n8n | Duckle |
|--|----------|-------|-----|--------|
| Shape | Low-code app builder | Homelab link hub | Workflow automation | Visual ETL desktop |
| DB/API CRUD UI | ✅ | ❌ | Qua nodes | ✅ SQL graph |
| Self-host | ✅ | ✅ | ✅ | ✅ desktop |
| Tags | `workspace` `api` `workflow` | `workspace` | `workflow` | `workflow` `mcp` |

## Dùng với Odoo / ai_core

- Dashboard ops: đọc Postgres Odoo / REST `ai_core` — approve ticket, xem KPI, trigger webhook.  
- Thay spreadsheet nội bộ bằng app có phân quyền; export Git để dev review.  
- Kết hợp n8n/Agents: Appsmith = UI, n8n = automation backend.

## Link

- Repo: https://github.com/appsmithorg/appsmith · Docs: https://docs.appsmith.com  
- Peers: [dashy.md](dashy.md) · [duckle.md](duckle.md) · [n8n-workflows.md](n8n-workflows.md) · [drizzle-orm.md](drizzle-orm.md) · [epicstaff.md](../mcp-ai-agents/epicstaff.md)
