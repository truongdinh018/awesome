# Nezha (哪吒)

> **Repo:** [hanshuaikang/nezha](https://github.com/hanshuaikang/nezha)  
> **Category:** MCP & AI Agents · Lightweight IDE for multi-agent coding  
> **Tags:** `coding-agent` · `agent` · `desktop` · `workflow` · `cli` · `skill`  
> **Ngôn ngữ:** TypeScript · Rust (Tauri) · **⭐** ~1.8k · **License:** GPL-3.0  
> Site: [nezha.hanshutx.com](https://nezha.hanshutx.com/)

## Đây là gì?

**Nezha (哪吒)** là **IDE nhẹ agent-first** (cross-platform, ~7MB): một app quản lý **nhiều project × nhiều session Claude Code / Codex**, terminal native, timeline/resume session, notify khi cần can thiệp, Git + **worktree**, editor code/Markdown nhẹ, quản lý Skill (symlink). Không cần mở VS Code nặng để giao task → review → commit.

Khác [Happy](happy.md) (remote phone): Nezha = **desktop mission control trên máy**. Gần [Lanes](lanes.md) / [Vibe Kanban](vibe-kanban.md) nhưng gói IDE+terminal+Git trong một UI.

**Cùng kiểu:** [Paseo](paseo.md) (multi-provider desk+mobile), [Lanes](lanes.md), [Vibe Kanban](vibe-kanban.md), [Happy](happy.md), [Claude Peers MCP](claude-peers-mcp.md), [CC WF Studio](cc-wf-studio.md).

## Dùng khi nào?

| Nhu cầu | Nezha |
|---------|-------|
| Song song nhiều Claude/Codex trên nhiều repo | ✅ |
| Resume/visualize session + notify | ✅ |
| Git worktree + AI commit message trong app | ✅ |
| Kanban + 10+ agent adapters OSS | → [Vibe Kanban](vibe-kanban.md) |
| Multi-provider + phone + CLI daemon | → [Paseo](paseo.md) |
| Điều khiển từ điện thoại | → [Happy](happy.md) |

## Chạy thử

```bash
# Releases: https://github.com/hanshuaikang/nezha/releases
# Cần Claude Code / Codex đã cài trên máy

# macOS unsigned:
xattr -rd com.apple.quarantine /Applications/nezha.app
```

Dev: `pnpm` + Tauri (xem README). Theme light / dark / eye-care.

## So với tool khác

| | Nezha | Lanes | Happy |
|--|-------|-------|-------|
| Niche | Lightweight multi-agent IDE | Mission board + PTY | Mobile/web remote |
| Agents | Claude Code · Codex | Claude-first (+roadmap) | Claude · Codex wrap |
| License | GPL-3.0 | Proprietary | — |

## Dùng với Odoo / ai_core

- Song song vài addon Odoo / PR trong workspace khác nhau mà không đổi cửa sổ VS Code.  
- Review diff + commit trong Nezha khi agent xong.  
- GPL: fork/phân phối binary phải tuân open-source.

## Link

- Repo: https://github.com/hanshuaikang/nezha · Site: https://nezha.hanshutx.com/  
- Peers: [lanes.md](lanes.md) · [vibe-kanban.md](vibe-kanban.md) · [happy.md](happy.md) · [claude-peers-mcp.md](claude-peers-mcp.md)
