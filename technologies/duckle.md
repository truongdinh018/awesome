# Duckle

> **Repo:** [slothflowlabs/duckle](https://github.com/slothflowlabs/duckle)  
> **Category:** DevTools · Studio ETL/ELT visual local-first (DuckDB)  
> **Tags:** `workflow` · `self-host` · `desktop` · `mcp` · `cli` · `agent`  
> **Ngôn ngữ:** Rust · Tauri 2 · React · DuckDB · **⭐** ~0.8k  
> **License:** MIT OR Apache-2.0 · Site: [duckle.org](https://duckle.org/) · Status: public beta

## Đây là gì?

**Duckle** là desktop **ETL/ELT studio** local-first: canvas kéo-thả (~345–360 components: files, DBs, lakehouse, SaaS, streaming, DQ, dbt-ish flows), compile graph → SQL, chạy **DuckDB** columnar native. Scheduler + Git workspace.

**Duckie** — AI assistant on-device (Qwen 2.5 Coder 1.5B / llama.cpp, ~1.1 GB, no API key mặc định) gen pipeline JSON từ tiếng Anh. Binary ~65 MB; có **MCP server** cho Claude/LLM. Không cloud/lock-in (tuỳ chọn BYO OpenAI-compatible).

**Cùng kiểu:** [n8n-workflows](n8n-workflows.md) / n8n harness (automation khác domain), [Pathway](pathway.md) (streaming ETL code-first), [Horizon](horizon.md) (news pipeline), [LocalAI](localai.md) (local LLM serve).

## Dùng khi nào?

| Nhu cầu | Duckle |
|---------|--------|
| Visual ETL laptop · DuckDB speed | ✅ |
| Plain-English → pipeline (local AI) | ✅ Duckie |
| MCP control từ coding agent | ✅ |
| Stream/RAG live code Python | → [Pathway](pathway.md) |
| Zapier-like app automation | → n8n / [n8n-workflows](n8n-workflows.md) |

## Chạy thử

```bash
# Tải release Win/macOS/Linux từ GitHub Releases (~65 MB)
# hoặc build: xem README (Rust + Tauri)
```

- Benchmark CSV 20M → DuckDB ~15.7s (gần floor raw DuckDB)  
- Independent OSS — **không** affiliated DuckDB Labs / MotherDuck  
- Beta: API/catalog còn đổi trước 1.0  

## So với tool khác

| | Duckle | Pathway | n8n |
|--|--------|---------|-----|
| Shape | Visual ETL desktop + DuckDB | Python stream/batch ETL | App workflow automation |
| Local AI assist | ✅ Duckie | LLM xpack (code) | External |
| Tags | `workflow` `desktop` `mcp` | `rag` `workflow` `cli` | `workflow` |

## Dùng với Odoo / ai_core

- Ingest CSV/Parquet/API → clean → Postgres/vector trước RAG.  
- Prep dataset nội bộ không đẩy cloud.  
- MCP: agent Cursor/Claude trigger pipeline đã duyệt.

## Link

- Repo: https://github.com/slothflowlabs/duckle  
- Site: https://duckle.org/  
- Peers: [n8n-workflows.md](n8n-workflows.md) · [pathway.md](pathway.md) · [horizon.md](horizon.md) · [localai.md](localai.md) · [zca-bridge.md](zca-bridge.md)
