# Horizon

> **Repo:** [Thysrael/Horizon](https://github.com/Thysrael/Horizon)  
> **Category:** DevTools · AI news radar / daily briefing  
> **Tags:** `mcp` · `self-host` · `workflow` · `notification` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~8.2k · **License:** MIT  
> **Site:** [horizon1123.top](https://www.horizon1123.top)

## Đây là gì?

**Horizon** là **AI news radar** cá nhân: lấy Hacker News · RSS · Reddit · Telegram · X · GitHub · OpenBB… → dedupe · score · filter · enrich → **briefing Markdown song ngữ EN/ZH**. Deliver: GitHub Pages, email, Feishu/Lark/DingTalk/Slack/Discord webhook, **MCP** (expose pipeline cho agent), Docker / cron Actions.

**Cùng kiểu:** [Folo](folo.md) (AI RSS reader UX), [Scrapling](scrapling.md) (scrape raw), [ntfy](ntfy.md) / [zca-bridge](zca-bridge.md) (notify), [SurfSense](surfsense.md) (research RAG).

## Dùng khi nào?

| Nhu cầu | Horizon |
|---------|---------|
| Daily AI briefing đa nguồn | ✅ |
| Feishu/Slack webhook + Pages site | ✅ |
| Agent gọi fetch/score/summarize qua MCP | ✅ |
| App đọc RSS interactive | → [Folo](folo.md) |
| RAG corpus doanh nghiệp | → [SurfSense](surfsense.md) / [Khoj](khoj.md) |

## Chạy thử

```bash
# uv / pip -e .
docker compose run --rm horizon
docker compose run --rm horizon --hours 48
```

Config: `data/config.json` (support `${ENV}`). Cron mẫu: GitHub Actions → GitHub Pages.

## So với tool khác

| | Horizon | Folo | Scrapling |
|--|---------|------|-----------|
| Shape | Pipeline briefing + MCP | RSS reader app | Scrape framework |
| Bilingual EN/ZH digest | ✅ | AI assist | ❌ |
| Tags | `mcp` `workflow` `notification` | `desktop` | `extract` `browser` |

## Dùng với Odoo / ai_core

- Brief hàng ngày changelog Odoo / competitor / VN tech → kênh nội bộ.  
- MCP tool cho agent “tóm tắt tin 24h” trước khi trả lời.  
- Tôn trọng ToS nguồn; webhook chỉ endpoint tin cậy.

## Link

- Repo: https://github.com/Thysrael/Horizon · Site: https://www.horizon1123.top  
- Peers: [folo.md](folo.md) · [scrapling.md](scrapling.md) · [ntfy.md](ntfy.md) · [surfsense.md](surfsense.md)
