# QM

> **Repo:** [yc-software/qm](https://github.com/yc-software/qm)  
> **Category:** MCP & AI Agents · Multiplayer agent harness cho startup (Slack + web)  
> **Tags:** `agent` · `coding-agent` · `self-host` · `workflow` · `chatbot` · `skill`  
> **Ngôn ngữ:** TypeScript · Node · Postgres · **⭐** ~5.2k · **License:** MIT  
> Site: [qm.ycombinator.com](https://qm.ycombinator.com)

## Đây là gì?

**QM** (*qm*) là **multiplayer agent harness cho công việc** — thiết kế cho startup, không phải 1 assistant cá nhân. Mỗi nhân viên có workspace **cô lập** (memory, file, keychain, sandbox, crons, web apps, skills); đồng thời cộng tác với agent trong **Slack channel**, group message và project.

Harness **vendor-agnostic**: Pi, OpenCode, Codex, Claude Code cùng drive một core headless (Postgres + agent loop + per-scope sandbox). Có web UI, admin panel, shared skills (grant theo scope), background crons/watches. Deploy vào cloud riêng (Fly/AWS) qua `qm` CLI.

**Cùng kiểu:** [OpenHands](openhands.md) (agent platform + Slack), [Vibe Kanban](vibe-kanban.md) (multi coding agent workspace), [Lanes](lanes.md) (mission control coding agents), [LangBot](langbot.md) (multi-channel bot + skills).

## Dùng khi nào?

| Nhu cầu | QM |
|---------|-----|
| Agent cho cả team startup — personal + shared scope | ✅ primary |
| Slack + web cùng identity/config | ✅ |
| Switch harness (Claude Code / Codex / Pi / OpenCode) | ✅ |
| Kanban multi-agent local (1 dev) | → [Vibe Kanban](vibe-kanban.md) · [Lanes](lanes.md) |
| Desktop mission control 1 máy | → [Lanes](lanes.md) · [Nezha](nezha.md) |
| IM bot framework generic (Telegram/Discord…) | → [LangBot](langbot.md) · [AstrBot](astrbot.md) |

## Chạy thử

```bash
# Khởi tạo deployment repo cho org (Fly hoặc AWS)
npm exec --yes --package=@yc-software/qm@latest -- \
  qm init . --org <slug> --target <fly-or-aws>
npm install
```

- Docs: [docs/getting-started.md](https://github.com/yc-software/qm/blob/main/docs/getting-started.md)  
- Security posture: **Strict** (approve mọi tool) · **Auto** (default, content screening) · **Dangerous**  
- Private fork pattern: clone bare `qm` → push mirror org repo (không dùng GitHub Fork button — xem README)

## So với tool khác

| | QM | OpenHands | Vibe Kanban |
|--|-----|-----------|-------------|
| Shape | Org multiplayer harness | Self-host dev platform | Kanban + agent workspaces |
| Slack team | ✅ native | ✅ | ❌ |
| Per-user sandbox | ✅ scoped | ✅ | workspace per task |
| Harness swap | Pi / OpenCode / Codex / Claude Code | OpenHands / ACP | 10+ coding CLIs |
| Tags | `agent` `coding-agent` `self-host` `workflow` `chatbot` `skill` | `coding-agent` `agent` `self-host` | `coding-agent` `workflow` `mcp` |

## Dùng với Odoo / ai_core

- Pilot agent nội bộ: QM scope per team + Slack channel cho support/impl Odoo — sandbox chạy test module, mở PR (pattern giống coding agent).  
- Shared skills: đóng gói playbook Odoo (module scaffold, lint, deploy checklist) grant theo project scope.  
- Không thay Odoo Discuss/Project — lớp agent orchestration song song ERP.

## Link

- Repo: https://github.com/yc-software/qm  
- Site: https://qm.ycombinator.com · Deploy: [deployment.md](https://github.com/yc-software/qm/blob/main/deployment.md)  
- Peers: [openhands.md](openhands.md) · [vibe-kanban.md](vibe-kanban.md) · [lanes.md](lanes.md) · [langbot.md](langbot.md)
