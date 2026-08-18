# CLIProxyAPI

> **Repo:** [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI)  
> **Category:** DevTools · Local AI gateway (proxy CLI nhẹ)  
> **Tags:** `api` · `self-host` · `gateway` · `cli` · `docker`  
> **Ngôn ngữ:** Go · **⭐** ~47.2k · **License:** MIT  
> Docs: [help.router-for.me](https://help.router-for.me/)

## Đây là gì?

**CLIProxyAPI** biến các **CLI AI chính chủ** (Claude Code, ChatGPT Codex, Gemini / Antigravity, Grok Build…) thành **API local** tương thích OpenAI / Anthropic / Gemini / Codex.

Không cố trở thành gateway “hàng trăm provider + dashboard Next.js”. Viết bằng **Go**, chạy **single binary** (hoặc Docker `eceasy/cli-proxy-api`), tận dụng subscription/OAuth sẵn có, nhiều tài khoản + round-robin khi hết quota. Có Management API / Web UI tùy chọn; SDK Go để nhúng.

**Cùng kiểu:** [9Router](9router.md) (UI + multi-provider), [OmniRoute](omniroute.md) (routing sâu), [so sánh 3 gateway](../bookmarks/local-ai-gateways.md), [FreeLLMAPI](freellmapi.md), [LocalAI](localai.md).

## Dùng khi nào?

| Nhu cầu | CLIProxyAPI |
|---------|-------------|
| Expose Claude Code / Codex / Gemini CLI thành `/v1` | ✅ |
| Binary nhẹ, ít RAM, không stack Node | ✅ |
| Multi-account + failover quota | ✅ |
| Dashboard routing 1000+ model | → [OmniRoute](omniroute.md) |
| Cài `npm` + UI nhanh cho người mới | → [9Router](9router.md) |
| Inference model local trên GPU | → [LocalAI](localai.md) |

## Chạy thử

```bash
# macOS
brew install cliproxyapi
brew services start cliproxyapi

# Linux / Windows: tải binary từ GitHub Releases
# https://github.com/router-for-me/CLIProxyAPI/releases
```

Docker Compose (image mặc định):

```bash
# copy config.example.yaml → config.yaml, sửa api-keys
docker compose up -d
# API mặc định: :8317
```

OAuth CLI (Claude / Codex / Gemini / Grok) theo [Quick Start](https://help.router-for.me/introduction/quick-start.html) → trỏ client OpenAI-compatible vào host:port local.

## So với tool khác

| | CLIProxyAPI | 9Router | OmniRoute |
|--|-------------|---------|-----------|
| Vai trò | Proxy CLI → API | Gateway + dashboard | Gateway đa strategy |
| Stack | Go binary | JS / Next.js | TypeScript |
| Nguồn model | Subscription / OAuth CLI | 40+ provider | 300+ provider |
| Tài nguyên | Rất nhẹ | Node runtime | Node + nhiều feature |
| Tags | `gateway` `cli` | `gateway` `desktop` | `gateway` `mcp` |

## Dùng với Odoo / ai_core

- Dev: bọc subscription coding CLI thành `base_url` cho agent nội bộ.  
- Ưu tiên bind localhost; bật management secret-key nếu mở remote.  
- Không thay thế inference on-prem — kết hợp [LocalAI](localai.md) / [vLLM](vllm.md) khi cần model tự host.

## Link

- Repo: https://github.com/router-for-me/CLIProxyAPI  
- Docs: https://help.router-for.me/  
- Peers: [9router.md](9router.md) · [omniroute.md](omniroute.md) · [so sánh](../bookmarks/local-ai-gateways.md) · [freellmapi.md](freellmapi.md) · [localai.md](localai.md)
