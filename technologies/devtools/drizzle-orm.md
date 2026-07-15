# Drizzle ORM

> **Repo:** [drizzle-team/drizzle-orm](https://github.com/drizzle-team/drizzle-orm)  
> **Category:** DevTools · TypeScript ORM / SQL toolkit  
> **Tags:** `api` · `cli` · `self-host`  
> **Ngôn ngữ:** TypeScript · **⭐** ~35.1k · **License:** Apache-2.0  
> Site: [orm.drizzle.team](https://orm.drizzle.team)

## Đây là gì?

**Drizzle ORM** là ORM **headless** cho Node.js / TypeScript / JavaScript: khai báo schema SQL type-safe, query relational hoặc SQL-like, ~7.4KB gzipped, **0 dependency** runtime.

Hỗ trợ PostgreSQL, MySQL, SQLite — kể cả serverless (Neon, Turso, PlanetScale, Cloudflare D1, Supabase…). Chạy Node, Bun, Deno, Edge Workers, browser. Kèm **Drizzle Kit** (CLI migration) và **Drizzle Studio** (browse/edit data). Không phải AI agent — là nền data layer cho app/agent stack.

**Cùng kiểu:** [Tabularis](tabularis.md) (SQL IDE + MCP), [VeloxDB](veloxdb.md) (Postgres GUI), [Duckle](duckle.md) (ETL DuckDB), [Pathway](../mcp-ai-agents/pathway.md) (stream ETL code).

## Dùng khi nào?

| Nhu cầu | Drizzle ORM |
|---------|-------------|
| ORM TS type-safe, nhẹ, serverless-ready | ✅ primary |
| Migration CLI (`drizzle-kit`) | ✅ Drizzle Kit |
| Browse DB trong dev | ✅ Drizzle Studio |
| Agent MCP query DB trực tiếp | → [Tabularis](tabularis.md) |
| Visual ETL / pipeline canvas | → [Duckle](duckle.md) |
| Stream RAG / live ETL Python | → [Pathway](../mcp-ai-agents/pathway.md) |

## Chạy thử

```bash
npm i drizzle-orm
npm i -D drizzle-kit

# schema.ts — khai báo bảng
# drizzle.config.ts — cấu hình DB

npx drizzle-kit generate   # sinh migration SQL
npx drizzle-kit migrate      # apply migration
npx drizzle-kit studio       # UI browse data (dev)
```

Ví dụ Postgres local hoặc Neon/Turso — xem [docs](https://orm.drizzle.team/docs/overview).

## So với tool khác

| | Drizzle ORM | Tabularis | Prisma-class |
|--|-------------|-----------|--------------|
| Shape | ORM library + Kit CLI | Desktop SQL + MCP | ORM + heavy client |
| Agent | ❌ (dùng trong code app) | ✅ MCP in-app | Thường ❌ |
| Serverless | ✅ first-class | N/A (client GUI) | Có, nặng hơn |
| Tags | `api` `cli` `self-host` | `mcp` `desktop` `agent` | — |

## Dùng với Odoo / ai_core

- Layer TS/Node cho microservice RAG, webhook, hoặc sidecar đọc Postgres song song Odoo (không thay ORM Python Odoo).  
- Schema migration có version (`drizzle-kit`) cho bảng phụ agent memory / analytics.  
- Agent cần **explore DB ad-hoc** → Tabularis MCP; Drizzle cho **app code** type-safe.

## Link

- Repo: https://github.com/drizzle-team/drizzle-orm · Docs: https://orm.drizzle.team/docs/overview  
- Peers: [tabularis.md](tabularis.md) · [veloxdb.md](veloxdb.md) · [duckle.md](duckle.md) · [pathway.md](../mcp-ai-agents/pathway.md)
