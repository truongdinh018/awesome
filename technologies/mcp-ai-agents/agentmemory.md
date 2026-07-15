# agentmemory

> **Repo:** [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory)  
> **Category:** MCP & AI Agents · Persistent memory cho coding agents  
> **Tags:** `agent` · `coding-agent` · `mcp` · `self-host` · `rag` · `cli` · `skill`  
> **Ngôn ngữ:** TypeScript · SQLite · iii-engine · **⭐** ~25.2k · **License:** Apache-2.0  
> npm: `@agentmemory/agentmemory`

## Đây là gì?

**agentmemory** là engine **persistent memory** local cho coding agents: tự capture (hooks), nén, hybrid search (BM25 + vector + graph), inject lại session sau — không cần giải thích lại kiến trúc/project mỗi lần. MCP (~53 tools) + REST; viewer realtime `:3113`; không phụ thuộc DB ngoài (SQLite + iii).

Một server dùng chung nhiều agent: Claude Code, Cursor, Codex, Copilot CLI, Hermes, OpenClaw, OpenCode, OpenHuman (`memory.backend`), … Claim benchmark LongMemEval-S R@5 ~95% (xem README; so sánh competitor có caveat). Khác [Claude-Mem](claude-mem.md) (ecosystem Claude hooks chặt hơn) và [TencentDB Agent Memory](tencentdb-agent-memory.md) (4-layer persona OpenClaw) — agentmemory = **memory server + MCP đa agent**.

**Cùng kiểu:** [Claude-Mem](claude-mem.md), [TencentDB Agent Memory](tencentdb-agent-memory.md), [Headroom](headroom.md) (nén in-flight), [OpenHuman](openhuman.md) (optional backend).

## Dùng khi nào?

| Nhu cầu | agentmemory |
|---------|-------------|
| Nhớ project/session qua Cursor + Claude Code + Codex cùng lúc | ✅ |
| Auto-capture hooks + MCP search | ✅ |
| Self-host, không cloud memory SaaS | ✅ |
| Chỉ nén tool output lần gọi này | → [Headroom](headroom.md) |
| Memory gắn chặt Claude-Mem UI/plugin | → [Claude-Mem](claude-mem.md) |
| RAG docs ERP | → [RAGFlow](ragflow.md) |

## Chạy thử

```bash
npm install -g @agentmemory/agentmemory
agentmemory                    # server :3111
agentmemory demo               # seed + prove recall
agentmemory connect cursor     # hoặc claude-code, codex, gemini-cli…
npx skills add rohitg00/agentmemory -y

# Viewer: http://localhost:3113 · health: :3111
# Agent install script: INSTALL_FOR_AGENTS.md trên repo
```

Windows: khuyến nghị WSL2; native setup thủ công (`connect` hạn chế — xem README).

## So với tool khác

| | agentmemory | Claude-Mem | TencentDB Memory |
|--|-------------|------------|------------------|
| Shape | Memory server + MCP đa agent | Capture/compress Claude stack | 4-layer local persona |
| Deps | SQLite + iii | SQLite + hooks | Local plugin |
| Tags | `mcp` `coding-agent` `rag` | `mcp` `coding-agent` | `coding-agent` |

## Dùng với Odoo / ai_core

- Cursor/Claude Code nhớ convention monorepo `ai_core` / Odoo giữa session.  
- Một memory server cho nhiều CLI trên máy dev.  
- Không thay DB memory trong Odoo runtime — chỉ lớp IDE/agent ngoài ERP.

## Link

- Repo: https://github.com/rohitg00/agentmemory  
- Peers: [claude-mem.md](claude-mem.md) · [tencentdb-agent-memory.md](tencentdb-agent-memory.md) · [headroom.md](headroom.md) · [openhuman.md](openhuman.md) · [hermes-agent.md](hermes-agent.md)
