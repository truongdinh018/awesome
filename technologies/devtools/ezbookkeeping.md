# ezBookkeeping

> **Repo:** [mayswind/ezbookkeeping](https://github.com/mayswind/ezbookkeeping)  
> **Category:** DevTools · Productivity · personal finance (self-host)  
> **Tags:** `self-host` · `desktop` · `workspace` · `mcp` · `api` · `ocr` · `finance`
> **Ngôn ngữ:** Go · TypeScript/Vue · **⭐** ~5.2k · **License:** MIT  
> Site: [ezbookkeeping.mayswind.net](https://ezbookkeeping.mayswind.net) · Demo: [ezbookkeeping-demo.mayswind.net](https://ezbookkeeping-demo.mayswind.net)

## Đây là gì?

**ezBookkeeping** — app **personal finance / bookkeeping** self-host nhẹ: ghi giao dịch, import đa định dạng (CSV, OFX/QFX/QIF, Firefly III, Beancount…), chart/filter, đa tiền tệ · timezone · ngôn ngữ; UI mobile + desktop + **PWA**; chạy Raspberry Pi / NAS. AI: **receipt image recognition**, **MCP**, Agent Skill / CLI API. 2FA · OIDC · SQLite/MySQL/PostgreSQL. Một lệnh Docker.

Cạnh [Whisper Money](whisper-money.md) (finance self-host khác UX/license) — ezBookkeeping nặng hơn về import chuẩn + MCP/OCR.

**Cùng kiểu:** [Whisper Money](whisper-money.md), [OpenTickly](opentickly.md) (time tracker), [Dashy](dashy.md), [Tabularis](tabularis.md) (SQL+MCP nếu phân tích DB).

## Dùng khi nào?

| Nhu cầu | ezBookkeeping |
|---------|----------------|
| Sổ chi tiêu / ledger self-host (Pi/NAS) | ✅ primary |
| Import OFX/QIF/Firefly/Beancount + chart | ✅ |
| MCP / OCR hóa đơn + agent skill | ✅ |
| Finance app privacy-first khác stack | → [Whisper Money](whisper-money.md) |
| Timesheet (không ledger) | → [OpenTickly](opentickly.md) |
| Trading agent | → [Vibe-Trading](../mcp-ai-agents/vibe-trading.md) |

## Chạy thử

```bash
docker run -p8080:8080 mayswind/ezbookkeeping
# mở http://localhost:8080
# binary: ./ezbookkeeping server run
```

Docs đầy đủ trên site; snapshot tag `latest-snapshot` nếu cần daily build.

## So với tool khác

| | ezBookkeeping | Whisper Money | OpenTickly |
|--|---------------|---------------|------------|
| Việc chính | Bookkeeping + import chuẩn | Personal finance UI | Time tracking |
| MCP / OCR receipt | ✅ | ❌ | ❌ |
| License | MIT | CC-BY-NC | AGPL-3.0 |
| Runtime | Go · Docker 1-cmd | PHP · Docker | TS · PG+Redis |

## Odoo / ai_core

Sổ cá nhân / pilot chi phí ngoài ERP; không thay Accounting Odoo. MCP gắn agent đọc chi tiêu cá nhân — tách ACL khỏi data công ty. Import không đụng `account.move` trừ khi tự ETL.

## Link

- Repo: https://github.com/mayswind/ezbookkeeping · Site: https://ezbookkeeping.mayswind.net  
- Demo: https://ezbookkeeping-demo.mayswind.net · Docker Hub: `mayswind/ezbookkeeping`  
- Gần: [Whisper Money](whisper-money.md) · [OpenTickly](opentickly.md) · [Dashy](dashy.md) · [Tabularis](tabularis.md)
