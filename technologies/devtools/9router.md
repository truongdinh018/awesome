# 9Router

> **Repo:** [decolua/9router](https://github.com/decolua/9router)  
> **Category:** DevTools · Local AI gateway (dễ dùng, có dashboard)  
> **Tags:** `api` · `self-host` · `gateway` · `desktop` · `docker` · `cli`  
> **Ngôn ngữ:** JavaScript · Next.js · **⭐** ~25.4k · **License:** MIT  
> Site: [9router.com](https://9router.com) · npm: `9router`

## Đây là gì?

**9Router** là *local AI gateway* gom nhiều provider AI vào **một endpoint** OpenAI-compatible (`localhost:20128/v1`), để Claude Code, Codex, Cursor, Cline, Copilot, OpenClaw… không phải đổi key / đổi URL mỗi khi hết quota.

Điểm khác biệt: fallback **3 tầng** Subscription → Cheap → Free; round-robin nhiều tài khoản; **RTK Token Saver** nén `tool_result` (~20–40% token). Dashboard web quản lý provider/key trực quan.

⚠️ Cộng đồng từng báo cáo lỗ hổng bảo mật (RCE / bind ngoài localhost / credential isolation). Chỉ chạy trên `127.0.0.1`, cập nhật bản mới nhất, đọc issue security trước khi dùng máy có secret.

**Cùng kiểu:** [OmniRoute](omniroute.md) (routing mạnh, nhiều strategy), [CLIProxyAPI](cliproxyapi.md) (proxy CLI nhẹ bằng Go), [so sánh 3 gateway](../bookmarks/local-ai-gateways.md), [FreeLLMAPI](freellmapi.md) (gom free-tier), [LocalAI](localai.md) (engine local).

## Dùng khi nào?

| Nhu cầu | 9Router |
|---------|---------|
| Một `base_url` cho Claude Code / Cursor / Cline | ✅ `http://localhost:20128/v1` |
| Fallback subscription → cheap → free | ✅ |
| Dashboard đẹp, cài nhanh (`npm i -g`) | ✅ |
| Hàng trăm provider + nhiều strategy routing | → [OmniRoute](omniroute.md) |
| Binary Go nhẹ, OAuth CLI chính chủ | → [CLIProxyAPI](cliproxyapi.md) |
| Production multi-tenant / public Internet | ❌ chỉ local / self-host có kiểm soát |

## Chạy thử

```bash
npm install -g 9router
9router
# Dashboard: http://localhost:20128
# API:       http://localhost:20128/v1
```

Dashboard → Providers → nối **Kiro** / **OpenCode Free** (hoặc subscription) → copy API key → trỏ Claude Code / Cursor:

```
Endpoint: http://localhost:20128/v1
API Key:  <từ dashboard>
Model:    kr/claude-sonnet-4.5   # ví dụ
```

Docker / source: xem README upstream (`decolua/9router` trên GHCR).

## So với tool khác

| | 9Router | OmniRoute | CLIProxyAPI |
|--|---------|-----------|-------------|
| Vai trò | Gateway dễ dùng + UI | Gateway đa strategy | Proxy CLI → API |
| Stack | JS / Next.js | TypeScript | Go (single binary) |
| Provider / model | 40+ / 100+ | 300+ / 1000+ | CLI OAuth (Claude, Codex, Gemini…) |
| Token save | RTK ~20–40% | RTK + Caveman | — (nhẹ, ít layer) |
| Tags | `gateway` `desktop` | `gateway` `mcp` | `gateway` `cli` |

## Dùng với Odoo / ai_core

- Dev: trỏ agent / LiteLLM-style client sang `localhost:20128/v1` khi hết quota cloud.  
- Không expose gateway ra public mà không auth + firewall.  
- So sánh chi phí với [FreeLLMAPI](freellmapi.md) trước khi gắn production Odoo.

## Link

- Repo: https://github.com/decolua/9router  
- Site: https://9router.com  
- Peers: [omniroute.md](omniroute.md) · [cliproxyapi.md](cliproxyapi.md) · [so sánh](../bookmarks/local-ai-gateways.md) · [freellmapi.md](freellmapi.md) · [localai.md](localai.md)
