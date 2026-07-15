# RTK

> **Repo:** [rtk-ai/rtk](https://github.com/rtk-ai/rtk)  
> **Category:** MCP & AI Agents · CLI proxy giảm token output lệnh dev  
> **Tags:** `cli` · `coding-agent`  
> **Ngôn ngữ:** Rust · **⭐** ~71k · **License:** Apache-2.0  
> Site: [rtk-ai.app](https://www.rtk-ai.app)

## Đây là gì?

**RTK** (*Rust Token Killer*) là **CLI proxy** chặn output lệnh shell trước khi vào context LLM — lọc/nén `git status`, `grep`, `cargo test`, `pytest`… claim **~60–90%** ít token trên workflow coding agent thường gặp. Một binary Rust, 100+ lệnh, overhead &lt;10ms.

Hook tự rewrite Bash trong Claude Code, Cursor, Codex, Gemini CLI, Cline… (`git status` → `rtk git status`). Agent nhận output gọn mà không cần gọi `rtk` thủ công. Chiến lược: smart filter, grouping, truncation, dedup.

**Cùng kiểu:** [Headroom](headroom.md) (nén context/MCP), [Caveman](caveman.md) (nén cách trả lời agent), [Semble](semble.md) (grep ít token hơn), [Destructive Command Guard](destructive-command-guard.md) (guardrail shell).

## Dùng khi nào?

| Nhu cầu | RTK |
|---------|-----|
| Giảm token output `git` / test / lint / `grep` trong coding agent | ✅ primary |
| Hook 1 lệnh cho Claude Code / Cursor / Codex / … | ✅ `rtk init -g` |
| Nén JSON/tool output kiểu MCP | → [Headroom](headroom.md) |
| Agent nói ngắn (style) | → [Caveman](caveman.md) |
| Chặn lệnh nguy hiểm | → [Destructive Command Guard](destructive-command-guard.md) |

> Hook chỉ áp dụng **Bash tool** — `Read`/`Grep` built-in của Claude Code không qua hook; dùng `rtk read` / `rtk grep` hoặc lệnh shell tương đương.

## Chạy thử

```bash
# macOS
brew install rtk

# Linux/macOS
curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh

rtk --version
rtk gain          # thống kê token đã tiết kiệm

# Gắn hook cho coding agent
rtk init -g                      # Claude Code / Copilot (mặc định)
rtk init -g --agent cursor       # Cursor
rtk init -g --codex              # Codex
rtk init -g --gemini             # Gemini CLI

# Thử thủ công
rtk git status
rtk cargo test
rtk grep "pattern" .
```

Windows: tải `rtk-x86_64-pc-windows-msvc.zip` từ Releases, đặt vào PATH, chạy từ terminal (không double-click `.exe`).

## So với tool khác

| | RTK | Headroom | Caveman |
|--|-----|----------|---------|
| Làm gì | Nén **output lệnh shell** | Nén context/MCP/proxy LLM | Skill nén **cách trả lời** |
| Cài đặt | Binary + `rtk init` hook | pip/uv + wrap/proxy | Skill/plugin agent |
| Tags | `cli` `coding-agent` | `mcp` `cli` `agent` | `skill` `prompt` `mcp` |

## Dùng với Odoo / ai_core

- Giảm token khi agent chạy `git`, test Python/JS addon, `grep` codebase Odoo lớn.  
- Kết hợp [Headroom](headroom.md) khi tool trả JSON Odoo/RAG dài — RTK không thay proxy MCP.  
- Không ảnh hưởng logic agent; chỉ thay đổi **hình thức** output lệnh.

## Link

- Repo: https://github.com/rtk-ai/rtk · Docs: https://www.rtk-ai.app  
- Peers: [headroom.md](headroom.md) · [caveman.md](caveman.md) · [semble.md](semble.md) · [destructive-command-guard.md](destructive-command-guard.md) · [wsl-dashboard.md](../devtools/wsl-dashboard.md)
