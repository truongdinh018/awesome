# TencentDB Agent Memory

> **Repo:** [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)  
> **Category:** MCP & AI Agents · Layered agent memory  
> **Tags:** `agent` · `self-host` · `coding-agent`  
> **Ngôn ngữ:** TypeScript · **⭐** ~8.8k · **License:** MIT (npm)  
> npm: `@tencentdb-agent-memory/memory-tencentdb` · Slogan: *Agents remember, Humans innovate*

## Đây là gì?

**TencentDB Agent Memory** là long-term memory **fully local** cho AI agents (zero external API bắt buộc): pipeline **4 tầng** progressive + **symbolic short-term** (Mermaid canvas offload tool logs).

Plugin OpenClaw / Hermes. Báo cáo: −61% tokens / +51% pass (WideSearch) trên OpenClaw; PersonaMem 48%→76%. Khác Headroom (nén context generic): đây là **memory layering** (Conversation→Atom→Scenario→Persona) + symbol graph có `node_id` drill-down.

**Cùng kiểu:** [Headroom](headroom.md) (context compression), [Hermes](hermes-agent.md) (runtime + plugin), [WeKnora](weknora.md) (KB).

## Dùng khi nào?

| Nhu cầu | TencentDB Agent Memory |
|---------|------------------------|
| Agent nhớ persona / SOP qua session | ✅ L0–L3 layering |
| Cắt token tool logs dài | ✅ Mermaid + refs offload |
| OpenClaw / Hermes plugin | ✅ |
| Chỉ nén prompt window | → [Headroom](headroom.md) |
| RAG documents doanh nghiệp | → [RAGFlow](ragflow.md) / [Pathway](pathway.md) |

## Chạy thử

```bash
openclaw plugins install @tencentdb-agent-memory/memory-tencentdb
# default: SQLite + sqlite-vec local
```

- Short-term: refs/*.md → jsonl → Mermaid canvas  
- Long-term: L0 Conversation → L1 Atom → L2 Scenario → L3 Persona  
- Traceable: symbol → index → raw text (không compress mất nguồn)  
- Hermes: Docker greenfield hoặc plug-in existing install

## So với tool khác

| | TencentDB Memory | Headroom | Hermes |
|--|------------------|----------|--------|
| Niche | Layered + symbolic memory | Context compress proxy/MCP | Agent runtime |
| Storage | SQLite-vec + Markdown | Library/proxy | — |
| Tags | `agent` `self-host` `coding-agent` | `mcp` `cli` `agent` | `agent` `mcp` `skill` |

## Dùng với Odoo / ai_core

- Session memory cho ERP agents (user prefs, SOP) trước khi dump full chat.  
- Ghép Hermes / coding agents trong monorepo.  
- Tham khảo pyramid L0–L3 khi thiết kế `ai_*` memory store.

## Link

- Repo: https://github.com/TencentCloud/TencentDB-Agent-Memory  
- Peers: [headroom.md](headroom.md) · [hermes-agent.md](hermes-agent.md) · [agent-skills.md](agent-skills.md)
