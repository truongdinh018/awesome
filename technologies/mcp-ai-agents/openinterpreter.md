# Open Interpreter

> **Repo:** [openinterpreter/openinterpreter](https://github.com/openinterpreter/openinterpreter)  
> **Category:** MCP & AI Agents · Terminal coding agent (Codex fork)  
> **Tags:** `coding-agent` · `agent` · `cli` · `skill` · `mcp` · `computer-use`  
> **Ngôn ngữ:** Rust · **⭐** ~67.3k · **License:** Apache-2.0  
> Site: [openinterpreter.com](https://www.openinterpreter.com/) · Docs: [docs](https://docs.openinterpreter.com/)

## Đây là gì?

**Open Interpreter** là **coding agent tối ưu cho open / low-cost models** (Kimi K3, DeepSeek, Qwen…). Bản hiện tại là fork Rust của OpenAI Codex: TUI kiểu Codex, lệnh `i` / `interpreter`, và **harness emulation** (`/harness`) để bắt chước agent loop mà từng provider khuyên dùng.

Portable by default: `AGENTS.md`, `.agents/skills`, MCP, ACP (`interpreter acp`), Codex exec protocol (đổi binary path trong Codex SDK). Có sandbox native (macOS/Linux/Windows), QA skill (browser + native UI qua agent-browser / trycua). Config cục bộ `~/.openinterpreter`.

> Bản Python cũ: fork cộng đồng [endolith/open-interpreter](https://github.com/endolith/open-interpreter).

**Cùng kiểu:** [CodeWhale](codewhale.md) (Rust TUI + open models), [OpenHands](openhands.md) (canvas + sandbox), [Hermes](hermes-agent.md), [Happy](happy.md) (wrap Claude Code/Codex).

## Dùng khi nào?

| Nhu cầu | Open Interpreter |
|---------|------------------|
| Coding agent TUI, ưu tiên Kimi / DeepSeek / Qwen | ✅ `/model` + `/harness` |
| Giữ Codex SDK / exec protocol | ✅ `codexPathOverride: "interpreter"` |
| ACP trong editor | ✅ `interpreter acp` |
| Skills dùng chung `.agents/skills` + MCP | ✅ |
| QA web / native app bằng skill | ✅ Computer Use |
| Canvas multi-agent UI | → [OpenHands](openhands.md) |
| Remote Claude Code từ phone | → [Happy](happy.md) |

## Chạy thử

```bash
# macOS / Linux
curl -fsSL https://www.openinterpreter.com/install | sh

# Windows (PowerShell)
irm https://www.openinterpreter.com/install.ps1 | iex

i                 # hoặc: interpreter
# TUI: /model · /harness
```

Harness phổ biến: `native`, `claude-code`, `kimi-code`, `qwen-code`, `deepseek-tui`, `swe-agent`, `minimal`…

## So với tool khác

| | Open Interpreter | CodeWhale | OpenHands |
|--|------------------|-----------|-----------|
| Shape | Codex fork + harness switch | Rust TUI + fleet | Canvas + multi-backend |
| Focus | Low-cost / open models | Any provider + local | Dev team + automations |
| Protocol | Codex exec + ACP | MCP + exec | ACP / sandbox UI |
| Tags | `coding-agent` `cli` `mcp` | `coding-agent` `cli` `mcp` | `coding-agent` `agent` |

## Dùng với Odoo / ai_core

- Dev module Odoo trên WSL: dùng Kimi/DeepSeek qua `/model`, sandbox khi chạy lệnh.  
- `interpreter exec` / Codex-compat cho script CI ngoài ERP.  
- Không thay `ai_agent_router` trong Odoo — chỉ môi trường code local.

## Link

- Repo: https://github.com/openinterpreter/openinterpreter  
- Install: https://www.openinterpreter.com/install  
- Peers: [codewhale.md](codewhale.md) · [openhands.md](openhands.md) · [hermes-agent.md](hermes-agent.md) · [happy.md](happy.md) · [midscene.md](../ui-automation/midscene.md)
