# VeloxDB

> **Repo:** [veloxbase/veloxdb](https://github.com/veloxbase/veloxdb)  
> **Category:** DevTools · Desktop PostgreSQL client (local-first)  
> **Tags:** `desktop` · `self-host` · `cli`  
> **Ngôn ngữ:** TypeScript · React · Tauri 2 · Rust · **⭐** ~0.5k · **License:** MIT  
> Site: [veloxdb.dev](https://veloxdb.dev)

## Đây là gì?

**VeloxDB** (veloxbase) là client **PostgreSQL desktop** local-first: Monaco SQL + lint/autocomplete schema, multi-tab, virtual-scroll results, EXPLAIN ANALYZE, CSV/JSON export.

Có **ER diagram** (ReactFlow) + migration DDL preview; SSH tunnel; credentials lưu OS keychain. Không cloud proxy / telemetry. *(Khác hoàn toàn [VeloxDB/VeloxDB](https://github.com/VeloxDB/VeloxDB) — engine OO .NET.)*

**Cùng kiểu:** [Tabularis](tabularis.md) (multi-DB + MCP + notebooks), [Duckle](duckle.md) (ETL), [Floci](floci.md) (AWS local).

## Dùng khi nào?

| Nhu cầu | VeloxDB |
|---------|---------|
| GUI Postgres desktop nhanh, offline | ✅ primary |
| ER visual + apply DDL | ✅ |
| Multi-DB (MySQL/SQLite…) + MCP agent | → [Tabularis](tabularis.md) |
| Engine DB OO .NET | → repo khác (`VeloxDB/VeloxDB`) — không catalog này |

## Chạy thử

```bash
# Releases: .dmg / .AppImage / .deb / .msi — github.com/veloxbase/veloxdb/releases
# macOS quarantine (chưa notarize):
xattr -cr /Applications/veloxdb.app

pnpm install && pnpm tauri   # build from source
```

## So với tool khác

| | VeloxDB | Tabularis |
|--|---------|-----------|
| Shape | Postgres-first desktop | Multi-DB + MCP + notebooks |
| Stack | Tauri + Rust + Monaco | Tauri + plugins |
| Tags | `desktop` `self-host` | `mcp` `desktop` `agent` |

## Dùng với Odoo / ai_core

- Dev soi / EXPLAIN / ER schema Postgres Odoo local.  
- Agent MCP đọc schema → ưu tiên Tabularis.

## Link

- Repo: https://github.com/veloxbase/veloxdb · Site: https://veloxdb.dev  
- Peers: [tabularis.md](tabularis.md) · [duckle.md](duckle.md) · [floci.md](floci.md)
