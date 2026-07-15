# Paseo

> **Repo:** [getpaseo/paseo](https://github.com/getpaseo/paseo)  
> **Category:** MCP & AI Agents · Multi-agent orchestration (desktop + mobile)  
> **Tags:** `coding-agent` · `agent` · `desktop` · `cli` · `skill` · `self-host` · `mcp`  
> **Ngôn ngữ:** TypeScript (daemon · Electron · Expo · CLI) · **⭐** ~10.4k · **License:** AGPL-3.0  
> Site: [paseo.sh](https://paseo.sh) · Docs: [paseo.sh/docs](https://paseo.sh/docs)

## Đây là gì?

**Paseo** là **một interface** điều phối nhiều coding agent trên máy bạn: Claude Code · Codex · Copilot · OpenCode · Pi — desktop, iOS/Android, web, CLI. Daemon local quản process agent; client (app/CLI) nối vào; pair phone từ Settings. Voice mode, không telemetry / forced login.

Skills orchestration: `/paseo-handoff`, `/paseo-loop` (Ralph-style), `/paseo-advisor`, `/paseo-committee`. Server có WebSocket API + **MCP**.

Khác [Happy](happy.md) (chủ yếu remote Claude/Codex): Paseo = **multi-provider + daemon self-host**. Gần [Nezha](nezha.md) / [Lanes](lanes.md) / [Vibe Kanban](vibe-kanban.md).

**Cùng kiểu:** [Nezha](nezha.md), [Happy](happy.md), [Lanes](lanes.md), [Vibe Kanban](vibe-kanban.md), [Claude Peers MCP](claude-peers-mcp.md).

## Dùng khi nào?

| Nhu cầu | Paseo |
|---------|-------|
| Song song nhiều provider từ desk + phone | ✅ primary |
| CLI `paseo run` / worktree / remote daemon | ✅ |
| Skill handoff / loop / committee | ✅ `npx skills add getpaseo/paseo` |
| IDE nhẹ Claude/Codex + Git trong 1 app | → [Nezha](nezha.md) |
| Kanban + 10+ adapters OSS | → [Vibe Kanban](vibe-kanban.md) |

## Chạy thử

```bash
# Desktop: https://paseo.sh/download  (daemon tự start)

npm install -g @getpaseo/cli
paseo   # QR → pair client

paseo run --provider claude/opus-4.6 "implement user authentication"
paseo ls && paseo attach <id>
```

```bash
docker run -d --name paseo -p 6767:6767 \
  -e PASEO_PASSWORD=change-me \
  -v "$PWD/paseo-home:/home/paseo" -v "$PWD:/workspace" \
  ghcr.io/getpaseo/paseo:latest
# http://localhost:6767 — cần image mở rộng kèm agent CLIs
```

## So với tool khác

| | Paseo | Happy | Nezha |
|--|-------|-------|-------|
| Providers | Claude · Codex · Copilot · OpenCode · Pi | Claude · Codex wrap | Claude · Codex |
| Surfaces | Desk · mobile · web · CLI · Docker | Mobile · web | Desktop IDE |
| License | AGPL-3.0 | — | GPL-3.0 |

## Dùng với Odoo / ai_core

- Song song vài PR addon: Claude plan → Codex implement (`/paseo-handoff`).  
- Pair phone check daemon trên workstation khi đi họp.  
- AGPL: host network service / phân phối phải mở source theo AGPL.

## Link

- Repo: https://github.com/getpaseo/paseo · Site: https://paseo.sh  
- Peers: [nezha.md](nezha.md) · [happy.md](happy.md) · [lanes.md](lanes.md) · [vibe-kanban.md](vibe-kanban.md)
