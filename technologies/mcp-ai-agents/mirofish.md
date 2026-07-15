# MiroFish

> **Repo:** [666ghj/MiroFish](https://github.com/666ghj/MiroFish)  
> **Category:** MCP & AI Agents · Multi-agent swarm / prediction simulation  
> **Tags:** `agent` · `self-host` · `rag` · `workflow` · `api`  
> **Ngôn ngữ:** Python · Vue · **⭐** ~68.5k · **License:** AGPL-3.0  
> **Site:** [mirofish.ai](https://mirofish.ai) · Engine sim: OASIS (CAMEL-AI)

## Đây là gì?

**MiroFish** là *swarm intelligence engine* dự đoán: lấy seed (tin tức, policy, báo cáo, tiểu thuyết…) → GraphRAG + persona agents → mô phỏng xã hội song song (hàng nghìn agent, memory dài hạn) → báo cáo dự đoán + chat với agent / ReportAgent. Use case: dư luận, tài chính, “what if” sáng tạo. Shanda-backed.

**Cùng kiểu:** [EpicStaff](epicstaff.md) / [Atomic Agents](atomic-agents.md) (orchestration khác shape), [Hyper-Extract](hyper-extract.md) (extract→graph, không sim), [OpenHuman](openhuman.md) (personal orchestrator).

## Dùng khi nào?

| Nhu cầu | MiroFish |
|---------|----------|
| Multi-agent social / opinion simulation | ✅ |
| Prediction report từ seed NL | ✅ |
| Personal second-brain desktop | → [OpenHuman](openhuman.md) / [Khoj](khoj.md) |
| Coding agent fleets | → [Vibe Kanban](vibe-kanban.md) / [OpenHands](openhands.md) |

## Chạy thử

```bash
cp .env.example .env   # LLM_* + ZEP_API_KEY
npm run setup:all && npm run dev
# Frontend :3000 · Backend :5001
# hoặc: docker compose up -d
```

Workflow: Graph Building → Environment → Simulation → Report → Deep Interaction.

## So với tool khác

| | MiroFish | EpicStaff | Atomic Agents |
|--|----------|-----------|---------------|
| Shape | Swarm prediction sandbox | Visual ops agent flows | Modular agent libs |
| GraphRAG + social sim | ✅ | RAG optional | ❌ |
| Tags | `agent` `rag` `workflow` | `agent` `mcp` `rag` | `agent` `cli` `api` |

## Dùng với Odoo / ai_core

- Sandbox “what-if” policy/PR trước rollout (không thay decision ERP).  
- AGPL-3.0 + chi phí LLM cao — giới hạn rounds khi thử.  
- Không dùng làm “tiên tri” production không verify.

## Link

- Repo: https://github.com/666ghj/MiroFish · Site: https://mirofish.ai  
- Peers: [epicstaff.md](epicstaff.md) · [atomic-agents.md](atomic-agents.md) · [hyper-extract.md](hyper-extract.md) · [openhuman.md](openhuman.md)
