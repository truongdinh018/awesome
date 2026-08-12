# drawDB

> **Repo:** [drawdb-io/drawdb](https://github.com/drawdb-io/drawdb)  
> **Category:** DevTools · Database ERD editor & SQL generator (browser)  
> **Tags:** `diagram` · `self-host` · `browser`  
> **Ngôn ngữ:** JavaScript · React · **⭐** ~38.9k · **License:** AGPL-3.0  
> Site: [drawdb.app](https://drawdb.app)

## Đây là gì?

**drawDB** là editor **ERD (entity relationship diagram)** chạy trong trình duyệt — free, không cần tài khoản. Kéo-thả vài click để vẽ schema DB, **export/import SQL**, generate migration, tùy biến editor. Hỗ trợ PostgreSQL, MySQL/MariaDB, SQLite, SQL Server, Oracle… Lưu local (IndexedDB); self-host Docker; share file qua [drawdb-server](https://github.com/drawdb-io/drawdb-server) (tùy chọn).

Không phải AI tool — editor người dùng cho thiết kế schema. Agent muốn NL→diagram → [drawio-skill](../mcp-ai-agents/drawio-skill.md); query/schema code → [Drizzle ORM](drizzle-orm.md) · [VeloxDB](veloxdb.md).

**Cùng kiểu:** [FossFLOW](fossflow.md) (diagram infra isometric), [drawio-skill](../mcp-ai-agents/drawio-skill.md) (agent→draw.io), [Tabularis](tabularis.md) (SQL client desktop).

## Dùng khi nào?

| Nhu cầu | drawDB |
|---------|--------|
| Vẽ ERD / thiết kế schema DB trực quan | ✅ primary |
| Export/import SQL, generate migration | ✅ |
| Self-host editor nội bộ (Docker) | ✅ |
| Agent sinh sơ đồ từ NL | → [drawio-skill](../mcp-ai-agents/drawio-skill.md) |
| Chạy/query SQL trên DB live | → [VeloxDB](veloxdb.md) · [Tabularis](tabularis.md) |
| ORM schema-as-code TypeScript | → [Drizzle ORM](drizzle-orm.md) |

## Chạy thử

```bash
git clone https://github.com/drawdb-io/drawdb
cd drawdb
npm install
npm run dev          # local dev

# Docker
docker build -t drawdb .
docker run -p 3000:80 drawdb
# http://localhost:3000
```

Online: [drawdb.app](https://drawdb.app) — không cần đăng ký. Share diagram: setup `drawdb-server` + env theo `.env.sample`.

## So với tool khác

| | drawDB | FossFLOW | drawio-skill |
|--|--------|----------|--------------|
| Mục đích | ERD + SQL generator | Isometric infra diagram | Agent NL→draw.io |
| DB dialects | PG, MySQL, SQLite, Oracle… | ❌ | tùy prompt |
| AI | ❌ | ❌ | ✅ skill |
| Tags | `diagram` `self-host` `browser` | `diagram` `self-host` | `skill` `diagram` |

## Dùng với Odoo / ai_core

- Thiết kế schema module Odoo mới / integration DB trước khi implement — export SQL làm tài liệu team.  
- Không thay pgAdmin/VeloxDB cho admin DB production — dùng ở giai đoạn design.  
- AGPL: deploy SaaS public phải tuân AGPL.

## Link

- Repo: https://github.com/drawdb-io/drawdb  
- App: https://drawdb.app · Server (share): https://github.com/drawdb-io/drawdb-server  
- Peers: [fossflow.md](fossflow.md) · [drawio-skill.md](../mcp-ai-agents/drawio-skill.md) · [drizzle-orm.md](drizzle-orm.md) · [veloxdb.md](veloxdb.md)
