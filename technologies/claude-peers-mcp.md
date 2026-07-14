# Claude Peers MCP

> **Repo:** [louislva/claude-peers-mcp](https://github.com/louislva/claude-peers-mcp)  
> **Category:** MCP & AI Agents · Peer messaging giữa nhiều Claude Code  
> **Tags:** `mcp` · `coding-agent` · `agent` · `cli` · `self-host`  
> **Ngôn ngữ:** TypeScript · Bun · **⭐** ~2.2k · **License:** MIT

## Đây là gì?

**claude-peers** (MCP) — cho **nhiều session Claude Code** trên cùng máy **tìm nhau và nhắn tin ad-hoc**. Broker daemon `localhost:7899` + SQLite; mỗi session đăng ký qua MCP (`list_peers`, `send_message`, `set_summary`…). Message push qua Claude channel protocol. Localhost-only.

Không phải kanban/mission control — chỉ **messaging ngang hàng** giữa terminal Claude.

**Cùng kiểu:** [Lanes](lanes.md) / [Vibe Kanban](vibe-kanban.md) (orchestrate board), [Happy](happy.md) (remote sessions), [Claude-Mem](claude-mem.md) (memory cross-session — khác chat peers).

## Dùng khi nào?

| Nhu cầu | Claude Peers |
|---------|--------------|
| 2+ Claude Code cùng máy nói chuyện | ✅ primary |
| Board / worktree / PTY mission control | → [Lanes](lanes.md) / [Vibe Kanban](vibe-kanban.md) |
| Phone remote Claude | → [Happy](happy.md) |
| Persist memory giữa session | → [Claude-Mem](claude-mem.md) |

## Chạy thử

```bash
git clone https://github.com/louislva/claude-peers-mcp.git ~/claude-peers-mcp
cd ~/claude-peers-mcp && bun install

claude mcp add --scope user --transport stdio claude-peers -- bun ~/claude-peers-mcp/server.ts

# Cần Claude Code v2.1.80+ + claude.ai login (channels)
claude --dangerously-skip-permissions --dangerously-load-development-channels server:claude-peers
```

CLI: `bun cli.ts status|peers|send <id> <msg>|kill-broker`.  
Optional `OPENAI_API_KEY` → auto-summary peer (`gpt-5.4-nano`). Port: `CLAUDE_PEERS_PORT` (mặc định 7899).

## So với tool khác

| | Claude Peers | Lanes | Claude-Mem |
|--|--------------|-------|------------|
| Shape | Peer chat MCP + broker | Mission-control board | Memory compression |
| Scope | Localhost Claude Code | Multi-agent UI | Cross-session memory |
| Tags | `mcp` `coding-agent` | `desktop` `mcp` `workflow` | `mcp` `agent` `rag` |

## Dùng với Odoo / ai_core

- Nhiều Claude trên monorepo (ai_core / awesome-ai) đồng bộ ad-hoc.  
- Không expose broker ra mạng; chỉ localhost.

## Link

- Repo: https://github.com/louislva/claude-peers-mcp  
- Peers: [lanes.md](lanes.md) · [vibe-kanban.md](vibe-kanban.md) · [happy.md](happy.md) · [claude-mem.md](claude-mem.md) · [headroom.md](headroom.md)
