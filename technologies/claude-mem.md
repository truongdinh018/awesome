# Claude-Mem

> **Repo:** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)  
> **Category:** MCP & AI Agents · Persistent session memory cho coding agents  
> **Tags:** `agent` · `coding-agent` · `mcp` · `self-host` · `rag`  
> **Ngôn ngữ:** TypeScript / JavaScript · Node ≥20 · SQLite · **⭐** ~87.2k · **License:** Apache-2.0  
> Site: [claude-mem.ai](https://claude-mem.ai)

## Đây là gì?

**Claude-Mem** — hệ **persistent memory compression**: capture tool usage trong session → nén/tóm tắt bằng AI → inject context liên quan vào session sau. Hook lifecycle Claude Code; MCP search (index + progressive disclosure); viewer UI; hỗ trợ Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode…

Khác [Headroom](headroom.md) (nén output trong một request): Claude-Mem = **nhớ qua nhiều session**. Khác [TencentDB Agent Memory](tencentdb-agent-memory.md) (layered persona local): Claude-Mem gắn tight hook/plugin Claude ecosystem + MCP search.

**Cùng kiểu:** [TencentDB Agent Memory](tencentdb-agent-memory.md), [Headroom](headroom.md), [Hermes](hermes-agent.md), [Semble](semble.md) (code search — không memory session).

## Dùng khi nào?

| Nhu cầu | Claude-Mem |
|---------|------------|
| Agent nhớ project qua session Claude Code | ✅ primary |
| MCP search memory + progressive disclosure | ✅ |
| Multi-agent harness (Codex / OpenClaw…) | ✅ |
| Chỉ nén tool output lần này | → [Headroom](headroom.md) |
| Layered persona/SOP OpenClaw | → [TencentDB Agent Memory](tencentdb-agent-memory.md) |
| RAG docs doanh nghiệp | → [RAGFlow](ragflow.md) / [WeKnora](weknora.md) |

## Chạy thử

```bash
# Plugin hooks + worker (không dùng npm install -g cho “full” install)
npx claude-mem install
# hoặc /plugin marketplace trong Claude Code — xem README
```

Restart Claude Code → context session cũ hiện tự động. MCP: `search` (+ tools follow-up theo docs). OpenClaw: lệnh install riêng trong README.

`npm install -g claude-mem` = **SDK only** — không đăng ký hooks/worker.

## So với tool khác

| | Claude-Mem | TencentDB Memory | Headroom |
|--|------------|------------------|----------|
| Shape | Capture session → compress → reinject | 4-layer local memory | Compress context in-flight |
| Claude Code hooks | ✅ native | plugin OpenClaw/Hermes | proxy/MCP |
| Tags | `agent` `mcp` `coding-agent` | `agent` `coding-agent` | `mcp` `cli` |

## Dùng với Odoo / ai_core

- Session liên tục khi agent sửa monorepo Odoo (nhớ quyết định/ADR cục bộ).  
- Không thay `ai_rag_core` / KB pháp lý — memory agent tooling ≠ corpus doanh nghiệp.  
- Kiểm soát retention/privacy: memory có thể chứa path/secret — scrub policy nội bộ.

## Link

- Repo: https://github.com/thedotmack/claude-mem · Site: https://claude-mem.ai  
- Peers: [tencentdb-agent-memory.md](tencentdb-agent-memory.md) · [headroom.md](headroom.md) · [hermes-agent.md](hermes-agent.md) · [semble.md](semble.md) · [gitingest.md](gitingest.md)
