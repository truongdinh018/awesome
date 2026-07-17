# Cline

> **Repo:** [cline/cline](https://github.com/cline/cline)  
> **Category:** MCP & AI Agents · Coding agent (IDE / CLI / SDK)  
> **Tags:** `coding-agent` · `agent` · `cli` · `desktop` · `mcp` · `self-host` · `skill`  
> **Ngôn ngữ:** TypeScript · **⭐** ~64.7k · **License:** Apache-2.0  
> **Site:** [cline.bot](https://cline.bot) · **Docs:** [docs.cline.bot](https://docs.cline.bot)  
> **VS Marketplace:** `saoudrizwan.claude-dev`

## Đây là gì?

**Cline** là **autonomous coding agent** mã nguồn mở: dùng như extension IDE (VS Code / Cursor…), CLI, hoặc SDK. Agent đọc codebase, sửa file, chạy lệnh terminal, dùng browser/tools — bạn duyệt từng bước (human-in-the-loop) trước khi apply.

Khác [Happy](happy.md) (chỉ wrap Claude Code/Codex sẵn có): Cline là **runtime agent riêng**, gắn IDE + MCP + skills. Gần [CodeWhale](codewhale.md) / [OpenHands](openhands.md) về vai trò coding agent, nhưng trọng tâm UI trong editor + marketplace extension.

**Cùng kiểu:** [OpenHands](openhands.md) (canvas + sandbox), [CodeWhale](codewhale.md) (TUI), [Happy](happy.md) (remote Claude/Codex), [Vibe Kanban](vibe-kanban.md) (board task), [Paseo](paseo.md).

## Dùng khi nào?

| Nhu cầu | Cline |
|---------|-------|
| Coding agent trong VS Code / Cursor (extension) | ✅ |
| CLI / SDK tích hợp agent vào workflow riêng | ✅ |
| MCP + skills, BYO model/API | ✅ |
| Duyệt diff / lệnh trước khi chạy (human-in-the-loop) | ✅ |
| Agent canvas + Docker sandbox team | → [OpenHands](openhands.md) |
| TUI terminal-first, fleet CI | → [CodeWhale](codewhale.md) |
| Remote control Claude Code từ phone | → [Happy](happy.md) |

## Chạy thử

```bash
# VS Code / Cursor: cài extension "Cline" (publisher saoudrizwan.claude-dev)
# rồi mở panel Cline, chọn model / API key theo docs.

# CLI (xem docs mới nhất — package có thể đổi tên):
npm install -g cline
cline
```

Docs: [docs.cline.bot](https://docs.cline.bot) · Site: [cline.bot](https://cline.bot)

## So với tool khác

| | Cline | OpenHands | CodeWhale | Happy |
|--|-------|-----------|-----------|-------|
| Shape | IDE extension + CLI/SDK | Canvas + multi-backend | Rust TUI + exec | Mobile/web wrap Claude/Codex |
| Human approve | ✅ Diff / lệnh | Sandbox + UI | Plan/Act approval | Push permission |
| Tags | `coding-agent` `desktop` `mcp` | `coding-agent` `agent` | `coding-agent` `cli` `mcp` | `coding-agent` `desktop` |

## Dùng với Odoo / ai_core

- Dev module Odoo trong VS Code/Cursor: Cline sửa Python/XML/JS, bạn review diff trước khi commit.  
- Gắn MCP (DB, docs, git) nếu team đã có MCP server nội bộ.  
- Không thay `ai_agent_router` / runtime ERP — chỉ môi trường code ngoài Odoo.

## Link

- Repo: https://github.com/cline/cline  
- Site: https://cline.bot · Docs: https://docs.cline.bot  
- VS Marketplace: `saoudrizwan.claude-dev`  
- Peers: [openhands.md](openhands.md) · [codewhale.md](codewhale.md) · [happy.md](happy.md) · [vibe-kanban.md](vibe-kanban.md) · [paseo.md](paseo.md)
