# Dolt

> **Repo:** [dolthub/dolt](https://github.com/dolthub/dolt)  
> **Category:** DevTools · SQL DB versioned như Git  
> **Tags:** `cli` · `self-host` · `api` · `workflow` · `agent`  
> **Ngôn ngữ:** Go · **⭐** ~23.9k · **License:** Apache-2.0  
> Site: [dolthub.com](https://www.dolthub.com/) · Docs/README repo

## Đây là gì?

**Dolt** là database SQL bạn **fork / clone / branch / merge / push / pull** như Git. Git version file; Dolt version **bảng**. Kết nối như **MySQL** (`dolt sql-server` port 3306); thao tác version control qua CLI (lệnh giống `git`) hoặc SQL (system tables / procedures).

Có DoltHub (host công khai), DoltLab (self-host hub), Hosted Dolt. Cần Postgres-wire → [Doltgres](https://github.com/dolthub/doltgresql) (beta). README nêu use case **agent memory** / multi-agent (Beads, Gas Town).

**Cùng kiểu:** [VeloxDB](veloxdb.md) / [Tabularis](tabularis.md) (client SQL), [Duckle](duckle.md) (ETL DuckDB), [Drizzle ORM](drizzle-orm.md) (ORM — không VC data).

## Dùng khi nào?

| Nhu cầu | Dolt |
|---------|------|
| Dataset/schema có branch, merge, diff, blame theo hàng | ✅ |
| MySQL-compatible local + Git-like CLI | ✅ |
| Share/repro data như Git remote | ✅ DoltHub / remote |
| Chỉ GUI query Postgres | → [VeloxDB](veloxdb.md) |
| ORM TypeScript | → [Drizzle ORM](drizzle-orm.md) |
| Wire Postgres native | → Doltgres (ngoài catalog) |

## Chạy thử

```bash
# Linux/macOS
sudo bash -c 'curl -L https://github.com/dolthub/dolt/releases/latest/download/install.sh | bash'
# hoặc: brew install dolt · choco install dolt

dolt config --global --add user.name "You"
dolt config --global --add user.email you@example.com

mkdir demo && cd demo
dolt init
dolt sql-server          # MySQL on :3306
# dolt sql -q "SELECT ..."
```

## So với tool khác

| | Dolt | VeloxDB | Duckle |
|--|------|---------|--------|
| Niche | SQL + Git-for-tables | Postgres GUI | ETL → DuckDB |
| Wire | MySQL-compat | Postgres client | DuckDB |
| Tags | `cli` `self-host` `agent` | `desktop` | `workflow` `mcp` |

## Dùng với Odoo / ai_core

- Repo dataset RAG / eval / seed (branch theo thí nghiệm, merge khi ổn).  
- Không thay Postgres Odoo production — Dolt song song cho data có lịch sử.  
- Agent memory / audit thay đổi dữ liệu tabular (diff commit) khi thử multi-agent.

## Link

- Repo: https://github.com/dolthub/dolt · DoltHub: https://www.dolthub.com/  
- Peers: [veloxdb.md](veloxdb.md) · [duckle.md](duckle.md) · [tabularis.md](tabularis.md) · [drizzle-orm.md](drizzle-orm.md)
