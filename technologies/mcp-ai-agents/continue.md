# Continue

> **Repo:** [continuedev/continue](https://github.com/continuedev/continue)  
> **Category:** MCP & AI Agents · Coding agent (IDE / CLI)  
> **Tags:** `coding-agent` · `agent` · `cli` · `desktop` · `mcp` · `self-host`  
> **Ngôn ngữ:** TypeScript · **⭐** ~34.9k · **License:** Apache-2.0  
> **Site:** [continue.dev](https://continue.dev) · **Docs:** [Continue Docs](https://docs.continue.dev)

## Đây là gì?

**Continue** là **open-source coding agent** (VS Code extension, JetBrains plugin, CLI): chat/autocomplete trong IDE, sửa file theo ngữ cảnh repo, gắn model/API tùy chọn (BYO), hỗ trợ **MCP**. Repo mô tả ngắn: *open-source coding agent*.

**Quan trọng:** dự án **không còn được maintain tích cực** — repo về cơ bản **read-only**. Bản phát hành cuối **2.0.0** (VS Code extension, CLI, JetBrains) gồm gỡ telemetry và đóng vòng đời sản phẩm hiện tại. Star catalog để tham chiếu lịch sử / fork / học kiến trúc — **không** coi là agent “đang sống” như Cline hay CodeWhale.

Gần [Cline](cline.md) / [OpenHands](openhands.md) về vai trò coding agent trong IDE hoặc self-host, nhưng Continue đã dừng phát triển chính thức.

**Cùng kiểu:** [Cline](cline.md), [OpenHands](openhands.md), [CodeWhale](codewhale.md), [Happy](happy.md), [Paseo](paseo.md).

## Dùng khi nào?

| Nhu cầu | Continue |
|---------|----------|
| Hiểu / fork coding agent OSS từng phổ biến (IDE + CLI) | ✅ (tham chiếu) |
| Agent IDE đang được maintain, MCP + human-in-the-loop | → [Cline](cline.md) |
| Agent canvas + sandbox team | → [OpenHands](openhands.md) |
| TUI terminal-first | → [CodeWhale](codewhale.md) |
| Remote control Claude Code / Codex | → [Happy](happy.md) |
| Product coding agent mới cho production | ❌ Ưu tiên tool đang active |

## Chạy thử

```bash
# Lịch sử: extension VS Code / JetBrains "Continue", hoặc CLI theo docs cũ.
# Repo read-only — kiểm tra release 2.0.0 và docs trước khi cài cho production.

# Tham khảo site / docs (có thể đổi sau khi sunset):
# https://continue.dev · https://docs.continue.dev
```

Site: [continue.dev](https://continue.dev) · Docs: [Continue Docs](https://docs.continue.dev)

## So với tool khác

| | Continue | Cline | OpenHands | CodeWhale |
|--|----------|-------|-----------|-----------|
| Shape | IDE + JetBrains + CLI (legacy) | IDE + CLI/SDK (active) | Canvas + sandbox | Rust TUI + exec |
| Maintain | ❌ Read-only / 2.0.0 cuối | ✅ | ✅ | ✅ |
| Tags | `coding-agent` `desktop` `mcp` | `coding-agent` `desktop` `mcp` `skill` | `coding-agent` `agent` | `coding-agent` `cli` `mcp` |

## Dùng với Odoo / ai_core

- Chủ yếu **học / so sánh** kiến trúc coding agent IDE (context, MCP, BYO model) — không khuyến nghị làm tool chính cho module Odoo mới.  
- Nếu team còn máy đã cài Continue 2.0.0: dùng tạm được, nhưng plan migrate sang [Cline](cline.md) / agent đang maintain.  
- Không thay `ai_agent_router` / runtime ERP trong Odoo.

## Link

- Repo: https://github.com/continuedev/continue  
- Site: https://continue.dev · Docs: https://docs.continue.dev  
- Peers: [cline.md](cline.md) · [openhands.md](openhands.md) · [codewhale.md](codewhale.md) · [happy.md](happy.md) · [paseo.md](paseo.md)
