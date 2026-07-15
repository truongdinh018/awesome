# Whisper Money

> **Repo:** [whisper-money/whisper-money](https://github.com/whisper-money/whisper-money)  
> **Category:** DevTools · Productivity · personal finance (self-host)  
> **Tags:** `self-host` · `desktop` · `workspace`  
> **Ngôn ngữ:** PHP (Laravel 12) · React 19 / Inertia · MySQL · Redis · **⭐** ~1.1k · **License:** CC-BY-NC-4.0  
> Site: [whisper.money](https://whisper.money)

## Đây là gì?

**Whisper Money** — app **personal finance** privacy-first: theo dõi tài khoản, phân loại giao dịch (manual + rule automation), insight chi tiêu; data mã hóa, không bán cho bên thứ ba. Self-host local hoặc Docker/Coolify. **Không phải AI agent / LLM finance** — tool tiền bạc cá nhân cho homelab (cùng kiểu hub như Dashy).

Peer: [Dashy](dashy.md) (homelab startpage), [ntfy](ntfy.md) (push), [VeloxDB](veloxdb.md) / [Tabularis](tabularis.md) (SQL desktop — nếu export DB phân tích).

## Dùng khi nào?

| Nhu cầu | Whisper Money |
|---------|---------------|
| Self-host sổ chi tiêu / multi-account | ✅ primary |
| Auto-categorize bằng **rule** (không LLM) | ✅ |
| Homelab dashboard links | → [Dashy](dashy.md) |
| Agent SQL trên DB finance | → [Tabularis](tabularis.md) (+ DB riêng) |

## Chạy thử

```bash
bash <(curl -fsSL https://whisper.money/setup.sh)
# rồi mở https://whisper.money.localhost
```

Docker prod:

```bash
cp .env.production.example .env
docker compose -f docker-compose.production.yml up -d
# http://localhost:8080
```

Demo: [whisper.money/login?demo=1](https://whisper.money/login?demo=1).  
**License NC:** CC-BY-NC-4.0 — không dùng thương mại theo điều khoản CC.

## So với tool khác

| | Whisper Money | Dashy | Tabularis |
|--|---------------|-------|-----------|
| Shape | Personal finance app | Homelab homepage | SQL client + MCP |
| AI/LLM | ❌ (rule only) | ❌ | MCP / Ollama SQL |
| Tags | `self-host` `desktop` | `self-host` `workspace` | `mcp` `desktop` |

## Dùng với Odoo / ai_core

- Không gắn pipeline agent mặc định — dữ liệu tài chính nhạy cảm, giữ local.  
- Nếu cần agent phân tích: export/đọc DB có kiểm soát → Tabularis MCP; không nhét thẳng vào RAG công cộng.

## Link

- Repo: https://github.com/whisper-money/whisper-money · Site: https://whisper.money  
- Peers: [dashy.md](dashy.md) · [ntfy.md](ntfy.md) · [tabularis.md](tabularis.md) · [veloxdb.md](veloxdb.md)
