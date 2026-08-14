# Local AI Gateway (9Router · OmniRoute · CLIProxyAPI)

> **Loại:** So sánh / roundup *(không tính ★ catalog)*  
> **Tags:** `gateway` · `api` · `self-host` · `cli`  
> Gom nhiều nguồn AI vào **một endpoint local**, tự fallback khi hết quota.

Cập nhật: **2026-08-14**

## Đây là gì?

Khi Claude Code, Codex, Cursor hay OpenClaw dùng nhiều, bài toán phổ biến là hết quota, chi phí API cao, và quá nhiều tài khoản/model.

**Local AI Gateway** gom nhiều nguồn AI vào một `base_url`, định tuyến request, rồi chuyển sang nguồn khác khi một provider hết hạn mức.

Ba hướng điển hình (đã star trong catalog):

| Hướng | Tool | ★ (GitHub) | Chọn khi… |
|-------|------|------------|-----------|
| Gateway dễ dùng + dashboard | [9Router](../devtools/9router.md) | ~25.4k | Người mới, UI nhanh |
| Routing / tối ưu chi phí | [OmniRoute](../devtools/omniroute.md) | ~47.3k | Team, nhiều agent, nhiều strategy |
| Proxy CLI nhẹ | [CLIProxyAPI](../devtools/cliproxyapi.md) | ~47.2k | Binary Go, tận dụng subscription/OAuth |

**Cùng kiểu:** [FreeLLMAPI](../devtools/freellmapi.md) (gom free-tier), [LocalAI](../devtools/localai.md) (engine GPU/CPU local).

## Dùng khi nào?

| Nhu cầu | Gợi ý |
|---------|--------|
| Cài `npm`, dashboard, fallback 3 tầng | [9Router](../devtools/9router.md) |
| Hàng trăm provider, Auto-Combo, MCP/A2A | [OmniRoute](../devtools/omniroute.md) |
| Biến Claude Code / Codex / Gemini CLI thành `/v1` | [CLIProxyAPI](../devtools/cliproxyapi.md) |
| Chỉ free-tier cloud, không CLI OAuth | [FreeLLMAPI](../devtools/freellmapi.md) |
| Chạy model trên máy (GPU/CPU) | [LocalAI](../devtools/localai.md) |

## So sánh nhanh

| | 9Router | OmniRoute | CLIProxyAPI |
|--|---------|-----------|-------------|
| Stack | JS / Next.js | TypeScript | Go (single binary) |
| Provider / model | 40+ / 100+ | 300+ / 1000+ | CLI OAuth (Claude, Codex, Gemini, Grok…) |
| Routing | Subscription → Cheap → Free + round-robin | Priority, RR, Least Used, Cost, Weighted, Auto-Combo… | Round-robin nhiều tài khoản |
| Token save | RTK ~20–40% | RTK + Caveman | Ít layer, nhẹ |
| MCP / A2A | hạn chế | ✅ | — |
| Phù hợp | Cá nhân, bắt đầu nhanh | Power user / team / nhiều agent | Developer ưu tiên ổn định, RAM thấp |

⚠️ **9Router:** cộng đồng từng báo cáo lỗ hổng bảo mật — bind `127.0.0.1`, cập nhật bản mới, đọc issue security trước khi deploy.

Kết luận ngắn: nhiều tính năng + tối ưu chi phí → **OmniRoute**. Gọn, tận dụng subscription → **CLIProxyAPI**. UI trực quan, dễ bắt đầu → **9Router**.

## Chạy thử

```bash
# 9Router
npm install -g 9router && 9router          # :20128

# OmniRoute
npm install -g omniroute && omniroute      # :20128

# CLIProxyAPI (macOS)
brew install cliproxyapi && brew services start cliproxyapi   # :8317
```

Trỏ Claude Code / Cursor / Cline: `base_url` = `http://localhost:<port>/v1`. Chi tiết lệnh và disclaimer: từng bài ★.

## Link

- [9Router](../devtools/9router.md) · https://github.com/decolua/9router  
- [OmniRoute](../devtools/omniroute.md) · https://github.com/diegosouzapw/OmniRoute  
- [CLIProxyAPI](../devtools/cliproxyapi.md) · https://github.com/router-for-me/CLIProxyAPI  
- Peers: [freellmapi.md](../devtools/freellmapi.md) · [localai.md](../devtools/localai.md)
