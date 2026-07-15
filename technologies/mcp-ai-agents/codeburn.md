# CodeBurn

> **Repo:** [getagentseal/codeburn](https://github.com/getagentseal/codeburn)  
> **Category:** MCP & AI Agents · AI coding spend / token tracker (local)  
> **Tags:** `cli` · `coding-agent` · `mcp` · `desktop` · `self-host`  
> **Ngôn ngữ:** TypeScript · Node 22+ · **⭐** ~8.7k · **License:** MIT  
> Site: [codeburn.app](https://codeburn.app/) · `npx codeburn`

## Đây là gì?

**CodeBurn** là tool **local-first** theo dõi **token + chi phí** dùng AI coding (~32 tools: Claude Code, Cursor, Codex, Gemini, Grok…). Đọc session files đã có trên disk — **không proxy, không API key, không gửi data đi**. Breakdown theo model / project / task; pricing refresh từ LiteLLM. TUI dashboard, `overview`, menubar macOS / GNOME, có **MCP**.

Không nén context (đó là [Headroom](headroom.md) / [RTK](rtk.md)) — chỉ **quan sát spend** để tìm lãng phí (model đắt cho task dễ, chat vs code…).

**Cùng kiểu:** [Headroom](headroom.md) / [Caveman](caveman.md) (tiết kiệm token), [Clawdmeter](clawdmeter.md) (meter Claude Code trên ESP32), [Models.dev](../devtools/models-dev.md) (catalog pricing), [CodeWhale](codewhale.md) (agent runtime — khác tracker).

## Dùng khi nào?

| Nhu cầu | CodeBurn |
|---------|----------|
| Biết tiền/token theo project + tool | ✅ local TUI / overview |
| So sánh model / tìm waste · MCP | ✅ |
| Meter Claude Code trên bàn (AMOLED) | → [Clawdmeter](clawdmeter.md) |
| Nén context để giảm bill | → [Headroom](headroom.md) |
| Đổi model theo giá catalog | → [Models.dev](../devtools/models-dev.md) |

## Chạy thử

```bash
npx codeburn                    # TUI 7 ngày gần nhất
npm install -g codeburn         # hoặc: brew install codeburn
codeburn overview               # bảng tháng, paste được
codeburn overview --provider claude
codeburn menubar                # macOS menu bar
```

Cần Node.js 22.13+ và ít nhất một tool đã có session data trên máy.

## So với tool khác

| | CodeBurn | Headroom | Models.dev |
|--|----------|----------|------------|
| Niche | Track spend local | Compress context | Model catalog API |
| Proxy LLM | ❌ | ✅ optional | ❌ |
| Tags | `cli` `mcp` `desktop` | `mcp` `cli` | `api` `dataset` |

## Dùng với Odoo / ai_core

- Đo cost Cursor/Claude khi làm module Odoo theo repo/project.  
- `overview --no-color` gắn PR/Slack review chi phí sprint.  
- Kết hợp Headroom nếu mục tiêu là giảm token, không chỉ soi.

## Link

- Repo: https://github.com/getagentseal/codeburn · Site: https://codeburn.app/  
- Peers: [headroom.md](headroom.md) · [rtk.md](rtk.md) · [caveman.md](caveman.md) · [clawdmeter.md](clawdmeter.md) · [models-dev.md](../devtools/models-dev.md) · [codewhale.md](codewhale.md)
