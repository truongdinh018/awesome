# Awesome Quant

> **Repo:** [wilsonfreitas/awesome-quant](https://github.com/wilsonfreitas/awesome-quant)  
> **Category:** DevTools · Curated list thư viện quantitative finance  
> **Tags:** `finance` · `trading` · `dataset`  
> **Ngôn ngữ:** HTML (danh sách Markdown) · **⭐** ~29.0k · **License:** không SPDX trên GitHub  
> **Site:** [wilsonfreitas.github.io/awesome-quant](https://wilsonfreitas.github.io/awesome-quant/)

## Đây là gì?

**awesome-quant** là **danh sách curated** thư viện, package, data, nghiên cứu cho **quantitative finance**: Python/R/Julia, pandas/numpy stack, backtest, broker API, risk, alternative data. Không phải app chạy — là *awesome list* để chọn tool.

Hữu ích khi team cần map hệ sinh thái quant (NumPy/Pandas, Zipline, Backtrader, QuantLib, OpenBB…) trước khi gắn LLM/agent vào dữ liệu thị trường.

**Cùng kiểu:** [OpenBB](../mcp-ai-agents/openbb.md) (nền tảng data + agent), [Vibe-Trading](../mcp-ai-agents/vibe-trading.md) (agent trading), [Whisper Money](whisper-money.md) / [ezBookkeeping](ezbookkeeping.md) (sổ cá nhân — không phải quant).

## Dùng khi nào?

| Nhu cầu | awesome-quant |
|---------|---------------|
| Tìm thư viện Python/R cho backtest, broker, risk | ✅ |
| Platform data + AI agent cho analyst | → [OpenBB](../mcp-ai-agents/openbb.md) |
| Agent workflow trading | → [Vibe-Trading](../mcp-ai-agents/vibe-trading.md) |
| Sổ chi tiêu self-host | → [Whisper Money](whisper-money.md) |
| Chạy sẵn một quant OS | ❌ đây chỉ là index |

## Chạy thử

Không cài package. Đọc list:

```bash
# Site
# https://wilsonfreitas.github.io/awesome-quant/

git clone https://github.com/wilsonfreitas/awesome-quant.git
# mở README / docs — chọn lib rồi cài theo repo đó
```

## So với tool khác

| | awesome-quant | OpenBB | Vibe-Trading |
|--|---------------|--------|--------------|
| Vai trò | Curated list | Data platform | Agent trading |
| Chạy được ngay | ❌ | ✅ | ✅ |
| Tags | `finance` `trading` `dataset` | `agent` `cli` | `agent` `mcp` `workflow` |

## Dùng với Odoo / ai_core

- Tham chiếu khi chọn lib giá / backtest — không import vào Odoo.  
- Accounting Odoo ≠ quant research; đừng trộn broker API vào `account.move` nếu chưa có RoE + compliance.  
- Agent đọc list này chỉ để gợi ý tool, không phải nguồn giá realtime.

## Link

- Repo: https://github.com/wilsonfreitas/awesome-quant  
- Site: https://wilsonfreitas.github.io/awesome-quant/  
- Peers: [openbb.md](../mcp-ai-agents/openbb.md) · [vibe-trading.md](../mcp-ai-agents/vibe-trading.md) · [ezbookkeeping.md](ezbookkeeping.md)
