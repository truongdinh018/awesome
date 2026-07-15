# Vibe-Trading

> **Repo:** [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)  
> **Category:** MCP & AI Agents · Domain agent — trading research / backtest  
> **Tags:** `agent` · `mcp` · `skill` · `cli` · `self-host` · `workflow` · `desktop`  
> **Ngôn ngữ:** Python · FastAPI · React · **⭐** ~22.7k · **License:** MIT  
> Site: [vibetrading.wiki](https://vibetrading.wiki/) · PyPI: [`vibe-trading-ai`](https://pypi.org/project/vibe-trading-ai/)

## Đây là gì?

**Vibe-Trading** — *personal trading agent* OSS: NL research → market data → strategy codegen → **backtest** → report/export (+ Alpha Zoo ~461 factors). Swarm multi-agent (investment/quant/risk…), Shadow Account (journal → rule shadow), MCP tools, Web UI + CLI, IM channels (Telegram/Feishu/…). Broker connectors giấy/mandate-gated (Robinhood MCP, IBKR…); **không** giữ tiền — halt/kill switch khi live.

Khác [Whisper Money](../devtools/whisper-money.md) (sổ chi tiêu, không AI trading) và [Vibe Kanban](vibe-kanban.md) (board coding agents).

**Cùng kiểu:** [Hermes Agent](hermes-agent.md) (general agent + skills), [Atomic Agents](atomic-agents.md), [MiroFish](mirofish.md) (simulation swarm).

## Dùng khi nào?

| Nhu cầu | Vibe-Trading |
|---------|--------------|
| Backtest / research quant từ prompt | ✅ primary |
| Shadow Account từ journal broker | ✅ |
| MCP + Alpha Zoo bench | ✅ |
| Personal finance ledger | → [Whisper Money](../devtools/whisper-money.md) · [ezBookkeeping](../devtools/ezbookkeeping.md) |
| Orchestrate coding agents | → [Vibe Kanban](vibe-kanban.md) / [Lanes](lanes.md) |

⚠️ **Không phải tư vấn đầu tư.** Live order chỉ khi bạn authorize + mandate; đọc security docs. Token/X giả mạo từng bị cảnh báo trên README — chỉ tin [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) / vibetrading.wiki.

## Chạy thử

```bash
pip install -U vibe-trading-ai

vibe-trading run -p "Backtest a BTC-USDT 20/50 MA for 2024, summarize return/drawdown, export report"
vibe-trading alpha bench --zoo gtja191 --universe csi300 --period 2018-2025 --top 20
```

Docker / Web UI: xem docs [vibetrading.wiki](https://vibetrading.wiki/).

## So với tool khác

| | Vibe-Trading | Hermes | Whisper Money |
|--|--------------|--------|---------------|
| Domain | Trading research/backtest | General agent | Personal finance ledger |
| Shape | Agent + swarm + MCP + Alpha Zoo | Skills/memory gateway | App (không LLM trade) |
| Tags | `agent` `mcp` `skill` | `agent` `mcp` `skill` | `self-host` `desktop` |

## Dùng với Odoo / ai_core

- Research/quant lab riêng — không gắn Odoo accounting/broker sẵn.  
- Có thể MCP từ coding agent nội bộ; secrets broker/LLM chỉ local `~/.vibe-trading/`.

## Link

- Repo: https://github.com/HKUDS/Vibe-Trading · Wiki: https://vibetrading.wiki/  
- Peers: [hermes-agent.md](hermes-agent.md) · [atomic-agents.md](atomic-agents.md) · [mirofish.md](mirofish.md) · [vibe-kanban.md](vibe-kanban.md) · [whisper-money.md](../devtools/whisper-money.md)
