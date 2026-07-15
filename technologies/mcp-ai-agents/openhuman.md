# OpenHuman

> **Repo:** [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)  
> **Category:** MCP & AI Agents · Personal AI / memory + agent orchestrator  
> **Tags:** `rag` · `agent` · `mcp` · `self-host` · `desktop` · `workflow` · `skill`  
> **Ngôn ngữ:** Rust · TypeScript (Tauri) · **⭐** ~34.8k · **License:** GPL-3.0  
> **Site:** [tinyhumans.ai/openhuman](https://tinyhumans.ai/openhuman)

## Đây là gì?

**OpenHuman** là *personal AI super intelligence* **local-first** gồm ba phần:

(1) **brain** — memory tree / Obsidian-style wiki từ email·calendar·docs (auto-fetch ~20 phút). (2) **orchestrator** — fleets agent trên graph durable (tinyagents/tinyflows), workflow canvas approval-gated. (3) **deep researcher** — SuperContext trước khi trả lời.

Có 100+ OAuth · MCP · Skills; voice (Whisper); meeting bots; multi-channel chat. Optional backend [agentmemory](https://github.com/rohitg00/agentmemory).

**Cùng kiểu:** [Khoj](khoj.md), [AnythingLLM](anything-llm.md), [Hermes](hermes-agent.md), [EpicStaff](epicstaff.md), [Happy](happy.md)

## Dùng khi nào?

| Nhu cầu | OpenHuman |
|---------|-----------|
| Memory cá nhân local + sync connectors | ✅ |
| Orchestrate fleets / visual workflows | ✅ |
| Deep research + voice / meetings | ✅ |
| Chỉ KB RAG server | → [RAGFlow](ragflow.md) / [WeKnora](weknora.md) |
| Chỉ mobile wrap Claude Code | → [Happy](happy.md) |

## Chạy thử

```bash
# Installers: https://tinyhumans.ai/openhuman · GitHub Releases
# Dev: git submodule update --init --recursive && pnpm install
# optional: memory.backend = "agentmemory" trong config.toml
```

Privacy Mode local-only có sẵn.

## So với tool khác

| | OpenHuman | Khoj | Hermes |
|--|-----------|------|--------|
| Shape | Desktop brain + orchestrator | Second brain RAG | Agent runtime CLI |
| Memory graph | ✅ Memory Trees | Docs/web index | Session/plugins |
| Workflow canvas | ✅ tinyflows | Automations | Scripts/plugins |
| Tags | `rag` `agent` `mcp` `desktop` `workflow` | `rag` `agent` `desktop` | `agent` `mcp` `skill` |

## Dùng với Odoo / ai_core

- Personal ops cho dev (mail/calendar/repos) — không thay `ai_agent_router` multi-tenant.  
- GPL-3.0 — cân nhắc khi redistribute.  
- Có thể gắn cùng agentmemory nếu đã dùng cho Cursor/Codex.

## Link

- Repo: https://github.com/tinyhumansai/openhuman · Site: https://tinyhumans.ai/openhuman  
- Peers: [khoj.md](khoj.md) · [anything-llm.md](anything-llm.md) · [hermes-agent.md](hermes-agent.md) · [epicstaff.md](epicstaff.md) · [happy.md](happy.md)
