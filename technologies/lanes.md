# Lanes

> **Repo:** [lanes-sh/app](https://github.com/lanes-sh/app)  
> **Category:** MCP & AI Agents · Mission control for parallel coding agents  
> **Tags:** `coding-agent` · `agent` · `desktop` · `mcp` · `workflow` · `cli`  
> **Ngôn ngữ:** Tauri 2 · React 19 · SQLite · **⭐** ~0.2k · **License:** Proprietary  
> Site: [lanes.sh](https://lanes.sh) · macOS Ventura+ (Apple Silicon + Intel)

## Đây là gì?

**Lanes** là app desktop (*mission control*) để điều phối nhiều AI coding CLI cùng lúc.

Bạn có: bảng issue (Planning → Done), **terminal PTY** gắn từng card, git worktrees, labels, dependencies, file browser/Monaco, process manager. Hiện hỗ trợ mạnh **Claude Code**; Codex/Gemini/OpenCode trên roadmap. Chạy local-first; có **MCP SSE** localhost `:5353` (~30 tools) + Claude plugin marketplace (`lanes-desktop` / `lanes-forms`).

**Cùng kiểu:** [Vibe Kanban](vibe-kanban.md) (OSS multi-agent board), [Happy](happy.md) (remote Claude/Codex), [Claude Peers MCP](claude-peers-mcp.md) (peer chat giữa session Claude), [CC Workflow Studio](cc-wf-studio.md), [OpenHands](openhands.md).

## Dùng khi nào?

| Nhu cầu | Lanes |
|---------|-------|
| Orchestrate nhiều Claude session trên board | ✅ primary |
| Worktree per issue + live terminal | ✅ |
| MCP agents đọc board / start session | ✅ `lanes-local` |
| OSS kanban + 10+ agent adapters | → [Vibe Kanban](vibe-kanban.md) |
| Phone remote Claude | → [Happy](happy.md) |

## Chạy thử

```bash
brew install --cask lanes-sh/lanes/lanes && open -a Lanes
```

```text
# Claude Code plugins
/plugin marketplace add lanes-sh/app
/plugin install lanes-desktop@lanes
/lanes:setup-mcp
```

MCP: `http://localhost:5353/sse` (localhost-only, app phải mở).

## So với tool khác

| | Lanes | Vibe Kanban | Happy |
|--|-------|-------------|-------|
| Shape | Native Mac mission control | OSS kanban + agents | Mobile/web remote |
| License | Proprietary | Apache-2.0 | xem repo |
| Tags | `desktop` `mcp` `coding-agent` | `workflow` `mcp` `cli` | `desktop` `cli` |

## Dùng với Odoo / ai_core

- Dev máy Mac chạy nhiều Claude trên `addons/ai_core` worktrees song song.  
- Proprietary — không tự host server; MCP chỉ local với app đang chạy.

## Link

- Repo: https://github.com/lanes-sh/app · Site: https://lanes.sh  
- Peers: [vibe-kanban.md](vibe-kanban.md) · [happy.md](happy.md) · [cc-wf-studio.md](cc-wf-studio.md) · [openhands.md](openhands.md)
