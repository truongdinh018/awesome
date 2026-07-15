# CodeWhale

> **Repo:** [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)  
> **Category:** MCP & AI Agents · Terminal coding agent harness  
> **Tags:** `coding-agent` · `cli` · `agent` · `self-host` · `mcp` · `skill`  
> **Ngôn ngữ:** Rust · TUI · **⭐** ~39.8k · **License:** MIT  
> Site: [codewhale.net](https://codewhale.net/) · f.k.a. `deepseek-tui`

## Đây là gì?

**CodeWhale** là **coding agent chạy trên máy bạn** trong terminal: đưa provider + model + task → đọc code, sửa file, chạy lệnh, kiểm tra kết quả, lặp đến khi xong hoặc cần bạn. Có **TUI** tương tác và `codewhale exec` cho script/CI.

Ưu tiên open models (DeepSeek, Kimi, GLM…) nhưng cũng Claude/GPT và **local** (`vllm` / `sglang` / `ollama`). Có Fleet (nhiều worker + ledger resume), Plan/Act/Operate, sandbox OS, MCP hai chiều, skills, `.codewhale/constitution.json` (invariants). VS Code GUI cộng đồng. Không phải client wrap Claude Code như [Happy](happy.md) — đây là **runtime agent riêng** (gần [OpenHands](openhands.md) / Hermes nhưng CLI-first, Rust).

**Cùng kiểu:** [OpenHands](openhands.md) (canvas + sandbox), [Hermes](hermes-agent.md), [Happy](happy.md) (remote Claude Code), [RTK](rtk.md) / [Headroom](headroom.md) (tiết kiệm token — không phải agent full).

## Dùng khi nào?

| Nhu cầu | CodeWhale |
|---------|-----------|
| Coding agent TUI, nhiều provider (kể cả open/local) | ✅ |
| Headless CI: `codewhale exec "..."` | ✅ |
| Fleet / workflow nhiều worker, resume sau restart | ✅ |
| MCP + skills + sandbox Seatbelt/Landlock | ✅ |
| Remote control Claude Code từ phone | → [Happy](happy.md) |
| Agent canvas + Docker sandbox UI | → [OpenHands](openhands.md) |

## Chạy thử

```bash
npm install -g codewhale

codewhale auth set --provider deepseek   # hoặc ANTHROPIC_API_KEY…
codewhale                                # TUI
codewhale exec "fix the failing test"    # headless

# TUI: /model · /fleet · Tab Plan|Act|Operate · Shift+Tab approval
```

Cargo / Docker / Nix / Scoop / Termux: xem `docs/INSTALL.md` trên repo.

## So với tool khác

| | CodeWhale | OpenHands | Happy |
|--|-----------|-----------|-------|
| Shape | Rust TUI + exec + fleet | Canvas + multi-backend | Mobile/web wrap Claude/Codex |
| Models | Any provider + local | BYO + ACP | Claude Code / Codex đã cài |
| Tags | `coding-agent` `cli` `mcp` | `coding-agent` `agent` | `coding-agent` `desktop` |

## Dùng với Odoo / ai_core

- Dev module Odoo trong WSL/Linux: trỏ local vLLM/Ollama hoặc API open.  
- `codewhale exec` trong CI sửa lỗi test trước merge.  
- Không thay `ai_agent_router` trong Odoo — chỉ môi trường code ngoài runtime ERP.

## Link

- Repo: https://github.com/Hmbown/CodeWhale · Docs: https://codewhale.net/  
- Peers: [openhands.md](openhands.md) · [hermes-agent.md](hermes-agent.md) · [happy.md](happy.md) · [rtk.md](rtk.md) · [headroom.md](headroom.md)
