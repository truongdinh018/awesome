# PraisonAI

> **Repo:** [MervinPraison/PraisonAI](https://github.com/MervinPraison/PraisonAI)  
> **Category:** MCP & AI Agents · Multi-agent framework (Python/JS + MCP)  
> **Tags:** `agent` · `mcp` · `rag` · `cli` · `workflow` · `memory` · `self-host`  
> **Ngôn ngữ:** Python · TypeScript · **⭐** ~8.5k · **License:** MIT  
> **Docs:** [docs.praison.ai](https://docs.praison.ai) · Site: [praison.ai](https://praison.ai/docs)  
> MCP Registry: `io.github.MervinPraison/praisonai`

## Đây là gì?

**PraisonAI** là framework dựng **AI workforce** — từ một agent đơn đến multi-agent team: research, plan, code, execute. Deploy nhanh (vài dòng Python), có sẵn **memory**, **RAG**, hỗ trợ **100+ LLM** (OpenAI, Anthropic, Gemini, local…).

Hệ sinh thái: SDK core (`praisonaiagents`), CLI (`praisonai`), UI chat, Flow visual builder, Claw dashboard (Telegram / Slack / Discord), và **MCP server** đăng ký trên MCP Registry. Có cả `npm install praisonai` cho JS.

**Cùng kiểu:** [Atomic Agents](atomic-agents.md) (schema-first modular), [Hermes](hermes-agent.md) (agent runtime + skills), [EpicStaff](epicstaff.md) (orchestrator kéo-thả), [OpenHands](openhands.md) (coding-agent platform).

## Dùng khi nào?

| Nhu cầu | PraisonAI |
|---------|-----------|
| Multi-agent / workforce tự research→execute | ✅ primary |
| SDK Python mỏng, 5 dòng là chạy | ✅ `praisonaiagents` |
| Bot IM (Telegram/Slack/Discord) + memory | ✅ Claw |
| MCP gắn Cursor / Claude | ✅ MCP Registry |
| Pipeline typed schema-first | → [Atomic Agents](atomic-agents.md) |
| Coding agent IDE-centric | → [OpenHands](openhands.md) / [Cline](cline.md) |

## Chạy thử

```bash
pip install praisonaiagents
export OPENAI_API_KEY="your-api-key"
```

```python
from praisonaiagents import Agent

agent = Agent(instructions="You are a senior data analyst.")
agent.start(
    "Analyze the top 3 tech trends of 2026 and format as a markdown table."
)
```

Full stack: `pip install praisonai` · UI: `pip install "praisonai[ui]"` · Flow: `"praisonai[flow]"` · Claw: `"praisonai[claw]"`. JS: `npm install praisonai`.

## So với tool khác

| | PraisonAI | Atomic Agents | Hermes |
|--|-----------|---------------|--------|
| Shape | Multi-agent product + SDK/MCP | Library schema-first | Full agent product |
| IM / UI / Flow | ✅ extras | ❌ | Messaging gateway |
| Tags | `agent` `mcp` `rag` `workflow` | `agent` `cli` `api` | `agent` `mcp` `skill` |

## Dùng với Odoo / ai_core

- Orchestrator research/ops: agent PraisonAI gọi REST Odoo / `ai_core` MCP để đọc phiếu, tóm tắt, draft reply.  
- Claw bot nội bộ (Telegram/Slack) nhớ context ticket — Odoo vẫn là source of truth.  
- RAG docs quy trình (HDSD, BPMN) qua pipeline PraisonAI trước khi inject vào agent CRM.

## Link

- Repo: https://github.com/MervinPraison/PraisonAI · Docs: https://docs.praison.ai  
- Peers: [atomic-agents.md](atomic-agents.md) · [hermes-agent.md](hermes-agent.md) · [epicstaff.md](epicstaff.md) · [openhands.md](openhands.md) · [agency-agents.md](agency-agents.md)
