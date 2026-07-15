# Vibe Kanban

> **Repo:** [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban)  
> **Category:** MCP & AI Agents · Coding agent task board  
> **Tags:** `coding-agent` · `agent` · `cli` · `self-host` · `workflow` · `mcp`  
> **Ngôn ngữ:** Rust · TypeScript · **⭐** ~27.4k · **License:** Apache-2.0  
> **Site:** [vibekanban.com](https://www.vibekanban.com/)

## Đây là gì?

**Vibe Kanban** là kanban + workspace để **lấy 10X từ coding agents**: plan issues trên board → spawn workspace để agent chạy.

Hỗ trợ **10+ agents**: Claude Code, Codex, Gemini CLI, Copilot, Amp, Cursor, OpenCode, Droid, CCR, Qwen Code… Có MCP host/port cho tool connection. Chạy nhanh: `npx vibe-kanban`.

**Cùng kiểu:** [Happy](happy.md) (mobile/web remote Claude/Codex), [OpenHands](openhands.md) (self-host agent platform), [Spec Kit](spec-kit.md) (SDD workflow).

## Dùng khi nào?

| Nhu cầu | Vibe Kanban |
|---------|-------------|
| Plan + chạy nhiều coding agent song song | ✅ Kanban → workspaces |
| Switch Claude / Codex / Gemini / … | ✅ 10+ adapters |
| Remote phone control Claude Code | → [Happy](happy.md) |
| Full agent sandbox + canvas automations | → [OpenHands](openhands.md) |

## Chạy thử

```bash
npx vibe-kanban
# Dev: pnpm i && pnpm run dev
```

## So với tool khác

| | Vibe Kanban | Happy | OpenHands |
|--|-------------|-------|-----------|
| Shape | Kanban + multi-agent workspaces | Mobile/web wrap Claude/Codex | Agent platform + canvas |
| Multi agent brands | ✅ 10+ | Claude + Codex | OpenHands / ACP |
| Tags | `coding-agent` `workflow` `mcp` | `coding-agent` `cli` `desktop` | `coding-agent` `agent` |

## Dùng với Odoo / ai_core

- Orchestrate nhiều task sửa module Odoo trên board thay vì 1 terminal.  
- Self-host team board (xem `VK_ALLOWED_ORIGINS` / Docker).  
- Không thay Jira/Odoo Project — lớp agent execution.

## Link

- Repo: https://github.com/BloopAI/vibe-kanban  
- Site: https://www.vibekanban.com/  
- Peers: [happy.md](happy.md) · [openhands.md](openhands.md) · [headroom.md](headroom.md) · [spec-kit.md](spec-kit.md)
