# Tabularis

> **Repo:** [TabularisDB/tabularis](https://github.com/TabularisDB/tabularis)  
> **Category:** DevTools · Desktop SQL workspace + MCP  
> **Tags:** `mcp` · `desktop` · `self-host` · `cli` · `agent`  
> **Ngôn ngữ:** TypeScript · Tauri · Rust · **⭐** ~3.7k · **License:** Apache-2.0  
> Site: [tabularis.dev](https://tabularis.dev)

## Đây là gì?

**Tabularis** là client SQL desktop OSS (PostgreSQL, MySQL/MariaDB, SQLite + plugins DuckDB, ClickHouse, Redis, Firestore…).

Có **SQL notebooks** (SQL + Markdown + chart), visual EXPLAIN, query builder, plugin driver. Điểm AI: **MCP server** trong app — Claude / Cursor / Devin đọc schema + chạy query; optional text-to-SQL qua **Ollama** local.

**Cùng kiểu:** [Duckle](duckle.md) (ETL canvas + DuckDB), [Pathway](../mcp-ai-agents/pathway.md) (stream ETL code), [LocalAI](localai.md) / Ollama (model local cho AI SQL), [Semble](../mcp-ai-agents/semble.md) (code search MCP — khác domain).

## Dùng khi nào?

| Nhu cầu | Tabularis |
|---------|-----------|
| GUI SQL multi-DB + notebook | ✅ primary |
| Agent MCP đọc DB / query | ✅ built-in MCP |
| Text-to-SQL local (Ollama) | ✅ optional |
| Visual ETL pipeline | → [Duckle](duckle.md) |
| Live RAG/stream ingest | → [Pathway](../mcp-ai-agents/pathway.md) |

## Chạy thử

```bash
winget install Debba.Tabularis
# macOS: brew tap TabularisDB/tabularis && brew install --cask tabularis
# Linux: sudo snap install tabularis
```

Built-in: Postgres / MySQL / SQLite. Drivers khác qua plugin registry (DuckDB, ClickHouse, Redis…).

## So với tool khác

| | Tabularis | Duckle | DBeaver-class |
|--|-----------|--------|---------------|
| Shape | SQL IDE + MCP + notebooks | Visual ETL → DuckDB | Broad drivers, ít MCP |
| Agent | ✅ MCP in-app | ✅ MCP | Thường ❌ |
| Tags | `mcp` `desktop` | `workflow` `desktop` `mcp` | — |

## Dùng với Odoo / ai_core

- Dev/ops soi Postgres Odoo + EXPLAIN plan; agent Cursor query schema qua MCP (read-only khi có thể).  
- Không thay Duckle cho pipeline ELT; không thay production DBA tooling enterprise nếu cần 100+ drivers.

## Link

- Repo: https://github.com/TabularisDB/tabularis · Site: https://tabularis.dev  
- Peers: [duckle.md](duckle.md) · [pathway.md](../mcp-ai-agents/pathway.md) · [localai.md](localai.md) · [semble.md](../mcp-ai-agents/semble.md)
