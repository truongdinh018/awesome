# FreeLLMAPI

> **Repo:** [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi)  
> **Category:** DevTools · OpenAI-compatible free-tier LLM proxy  
> **Tags:** `api` · `self-host` · `mcp` · `desktop`  
> **Ngôn ngữ:** TypeScript · Node 20+ · **⭐** ~16k · **License:** MIT  
> Site: [freellmapi.co](https://freellmapi.co) · *Personal experimentation only*

## Tổng quan

**FreeLLMAPI** — proxy **OpenAI-compatible** gom free tiers của ~16+ LLM providers (~1.7B tokens/tháng theo README) sau một endpoint `/v1`. Smart routing, failover, key AES-256-GCM, catalog tự cập nhật từ freellmapi.co. Dashboard + Docker + desktop `.exe`. Có **MCP** (`POST /mcp`) và shim Anthropic Messages / Responses API (Claude Code, Codex).

⚠️ Chỉ dùng thử cá nhân — tuân thủ ToS từng provider; **không** cho production SaaS / multi-tenant.

Peer: [Headroom](headroom.md) (context compression proxy), [LocalAI](localai.md) (local multi-modal engine), [Hermes](hermes-agent.md) / Continue (clients trỏ `base_url`).

## Để làm gì?

| Nhu cầu | FreeLLMAPI |
|---------|------------|
| Một `base_url` cho nhiều free keys | ✅ `/v1/chat/completions` |
| Failover 429/5xx + sticky session | ✅ |
| Claude Code / Codex / Continue | ✅ Anthropic + Responses + completions shim |
| MCP: xem model health / đổi strategy | ✅ |
| Production billing / multi-user | ❌ single-user by design |

## Highlight

- Strategies: `priority` · `balanced` · `smartest` · `fastest` · `reliable` · `custom`  
- Fusion (multi-model + judge) · embeddings · image/TTS routing  
- Unified models (cùng model nhiều provider) · model profiles  
- Install: `curl -fsSL https://freellmapi.co/install.sh | bash` → `:3001`  
- Custom provider → Ollama / vLLM / LM Studio

## Deploy

```bash
curl -fsSL https://freellmapi.co/install.sh | bash
# hoặc docker compose + ENCRYPTION_KEY
```

Dashboard → Keys → Fallback Chain → lấy unified key `freellmapi-…`.

## So sánh catalog

| | FreeLLMAPI | Headroom | AnythingLLM |
|--|------------|----------|-------------|
| Niche | Free-tier LLM gateway | Context compress | Full RAG workspace |
| OpenAI `/v1` | ✅ primary | proxy layer | app embed |
| Tags | `api` `mcp` `desktop` | `mcp` `cli` `agent` | `rag` `desktop` |

## Use case Odoo / ai_core

- Dev/sandbox: trỏ LiteLLM-style client / agent local sang free pool trước khi gắn paid API.  
- Không dùng cho customer-facing Odoo (ToS + single-user + không SLA).  
- MCP router health khi debug coding agents.

## Link

- Repo: https://github.com/tashfeenahmed/freellmapi  
- Site / models: https://freellmapi.co · https://freellmapi.co/models  
- Peers: [headroom.md](headroom.md) · [hermes-agent.md](hermes-agent.md) · [localai.md](localai.md)
