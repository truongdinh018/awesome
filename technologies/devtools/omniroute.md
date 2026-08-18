# OmniRoute

> **Repo:** [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute)  
> **Category:** DevTools · Local AI gateway (routing & tối ưu chi phí)  
> **Tags:** `api` · `self-host` · `gateway` · `mcp` · `desktop` · `docker` · `agent`  
> **Ngôn ngữ:** TypeScript · **⭐** ~47.3k · **License:** MIT  
> Site: [omniroute.online](https://omniroute.online) · npm: `omniroute`

## Đây là gì?

**OmniRoute** là *AI infrastructure gateway* self-host: một endpoint OpenAI-compatible gom **hàng trăm provider** (nhiều free tier) và **hàng trăm đến 1000+ model** — Kimi, Claude, GPT, Gemini, GLM, DeepSeek, MiniMax…

Khác 9Router ở độ sâu routing: Priority, Round Robin, Least Used, Cost Optimized, Weighted, **Auto-Combo**… chọn endpoint theo quota / latency / cost / reliability. Có RTK + Caveman (tiết kiệm token lớn), **MCP / A2A**, Desktop/PWA/Docker. Phù hợp team và nhiều agent cùng lúc.

**Cùng kiểu:** [9Router](9router.md) (đơn giản hơn, UI nhanh), [CLIProxyAPI](cliproxyapi.md) (proxy CLI Go), [so sánh 3 gateway](../bookmarks/local-ai-gateways.md), [FreeLLMAPI](freellmapi.md), [LocalAI](localai.md), [Headroom](../mcp-ai-agents/headroom.md).

## Dùng khi nào?

| Nhu cầu | OmniRoute |
|---------|-----------|
| Một `base_url` cho Claude Code / Codex / Cursor / Cline | ✅ `:20128/v1` |
| Nhiều chiến lược routing + Auto-Combo | ✅ |
| MCP / A2A + nhiều agent song song | ✅ |
| Cài tối giản, ưu tiên binary nhẹ | → [CLIProxyAPI](cliproxyapi.md) |
| Chỉ cần UI đơn giản 40+ provider | → [9Router](9router.md) |
| Chạy model trên GPU local | → [LocalAI](localai.md) / [vLLM](vllm.md) |

## Chạy thử

```bash
npm install -g omniroute
omniroute
# Dashboard: http://localhost:20128
# API:       http://localhost:20128/v1
```

Zero-config (free providers sẵn):

```bash
curl http://localhost:20128/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model":"auto","messages":[{"role":"user","content":"Hello!"}]}'
```

Docker (bind localhost):

```bash
docker run -d --name omniroute --restart unless-stopped \
  -p 127.0.0.1:20128:20128 -v omniroute-data:/app/data \
  diegosouzapw/omniroute:latest
```

## So với tool khác

| | OmniRoute | 9Router | CLIProxyAPI |
|--|-----------|---------|-------------|
| Vai trò | Gateway đa strategy | Gateway dễ dùng | Proxy CLI → API |
| Provider / model | 300+ / 1000+ | 40+ / 100+ | Subscription/OAuth CLI |
| Routing | Nhiều strategy + Auto-Combo | 3 tầng + RR | Round-robin account |
| MCP / A2A | ✅ | hạn chế | — |
| Tags | `gateway` `mcp` `agent` | `gateway` `desktop` | `gateway` `cli` |

## Dùng với Odoo / ai_core

- Hub nội bộ: một endpoint cho nhiều coding agent / MCP client trước khi tách paid API.  
- Theo dõi free-tier dashboard; tuân thủ ToS từng provider.  
- Không multi-tenant public nếu chưa harden auth / network.

## Link

- Repo: https://github.com/diegosouzapw/OmniRoute  
- Site: https://omniroute.online  
- Peers: [9router.md](9router.md) · [cliproxyapi.md](cliproxyapi.md) · [so sánh](../bookmarks/local-ai-gateways.md) · [freellmapi.md](freellmapi.md) · [localai.md](localai.md) · [headroom.md](../mcp-ai-agents/headroom.md)
