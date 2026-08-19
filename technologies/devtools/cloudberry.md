# Apache Cloudberry

> **Repo:** [apache/cloudberry](https://github.com/apache/cloudberry)  
> **Category:** DevTools · MPP database (Greenplum-line, Postgres kernel mới)  
> **Tags:** `self-host` · `cli` · `api` · `docker`  
> **Ngôn ngữ:** C · **⭐** ~1.4k · **License:** Apache-2.0  
> **Site:** [cloudberry.apache.org](https://cloudberry.apache.org) · Docs: [cloudberry.apache.org/docs](https://cloudberry.apache.org/docs)

## Đây là gì?

**Apache Cloudberry** (Incubating) là database **MPP** (*Massively Parallel Processing*) do nhóm gốc Greenplum phát triển: warehouse, analytics lớn, workload AI/ML. Tiến hóa từ Greenplum mã mở nhưng **kernel PostgreSQL mới hơn** và thêm khả năng doanh nghiệp.

Wire/SQL gần hệ Postgres/GP; build Linux/macOS hoặc thử **Docker sandbox**. Đang incubation tại Apache — chưa phải dự án top-level đã “tốt nghiệp”.

**Cùng kiểu:** [Dolt](dolt.md) (SQL version như Git), [VeloxDB](veloxdb.md) / [Tabularis](tabularis.md) (client SQL), [Drizzle ORM](drizzle-orm.md) (ORM app), [drawDB](drawdb.md) (vẽ ERD).

## Dùng khi nào?

| Nhu cầu | Cloudberry |
|---------|------------|
| Warehouse / analytics MPP, hướng Greenplum | ✅ |
| PoC Docker sandbox | ✅ `devops/sandbox` |
| SQL có branch/merge như Git | → [Dolt](dolt.md) |
| GUI query Postgres local | → [VeloxDB](veloxdb.md) |
| Schema ERD trên browser | → [drawDB](drawdb.md) |
| OLTP nhỏ / Odoo Postgres | ❌ Postgres thường đủ |

## Chạy thử

Build đầy đủ: [docs deployment](https://cloudberry.apache.org/docs/deployment/). Thử nhanh:

```bash
git clone https://github.com/apache/cloudberry.git
cd cloudberry
# Docker sandbox — xem devops/sandbox trong repo
# Không thay Postgres Odoo bằng cluster MPP nếu chưa có DBA
```

## So với tool khác

| | Cloudberry | Dolt | Postgres (Odoo) |
|--|------------|------|-----------------|
| Vai trò | MPP warehouse | Git-for-data | OLTP app |
| Scale song song | ✅ segment | ❌ (một node điển hình) | replica / không MPP |
| Tags | `self-host` `docker` | `cli` `workflow` | — |

## Dùng với Odoo / ai_core

- Odoo cần Postgres OLTP — **không** trỏ `db_host` sang Cloudberry.  
- Analytics / bản sao dữ liệu lớn: ETL ra Cloudberry, Odoo giữ master.  
- Agent SQL: [Tabularis](tabularis.md) / MCP Postgres trên DB analytics, có giới hạn quyền.

## Link

- Repo: https://github.com/apache/cloudberry  
- Docs: https://cloudberry.apache.org/docs  
- Peers: [dolt.md](dolt.md) · [veloxdb.md](veloxdb.md) · [drawdb.md](drawdb.md) · [drizzle-orm.md](drizzle-orm.md)
