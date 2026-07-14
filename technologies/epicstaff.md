# EpicStaff

> **Repo:** [EpicStaff/EpicStaff](https://github.com/EpicStaff/EpicStaff)  
> **Category:** MCP & AI Agents · Visual agent orchestration  
> **Tags:** `agent` · `mcp` · `rag` · `self-host` · `workflow`  
> **Ngôn ngữ:** Python (Django) · frontend · **⭐** ~267 · **License:** source-available (xem `LICENSE.md`)  
> Slogan: *We hide the complexity, not the logic.* · Site/wiki trong org EpicStaff

## Tổng quan

**EpicStaff** — platform **self-host** để ops/engineer **xây AI agent flows**: editor kéo-thả node trên backend **Django**; mọi node có thể nhúng **Python**; tích hợp hệ thống nội bộ qua **MCP** hoặc code. Multi-agent, memory (Redis/PostgreSQL + pgvector), RAG (vector / GraphRAG), webhook, human-in-the-loop, voice agent.

Mục tiêu: ops **sở hữu & audit** flow (không chỉ engineer đọc code) — inspect / sửa từng bước khi agent chạy.

## Để làm gì?

| Nhu cầu | EpicStaff |
|---------|-----------|
| Workflow multi-agent visual + Python nodes | ✅ |
| Self-host CRM/ops automation | ✅ Docker Compose |
| MCP + custom tools Python | ✅ |
| RAG upload + GraphRAG trong UI | ✅ |
| Webhook / human approve trước bước nhạy cảm | ✅ |
| Coding agent sandbox (git-centric) | → [OpenHands](openhands.md) / [Hermes](hermes-agent.md) |
| n8n-style general workflow (non-agent) | → n8n harness / n8n |

## Quick start (Docker)

Clone repo → tạo Docker volumes + `mcp-network` → `cd src && docker-compose up --build` → mở **http://localhost**.  
Script sẵn cho Windows / macOS / Linux trong README; tuỳ chọn Podman / partly-local.

## Tính năng chính

- Node UI + code execution trong node  
- LLM/embedder: OpenAI, Anthropic, local  
- Persistent agent memory (short + long term)  
- Roles / permissions org  
- Web scraping, image gen, voice control (theo README business features)

## So sánh catalog

| | EpicStaff | Hermes | OpenHands | n8n harness |
|--|-----------|--------|-----------|-------------|
| Focus | Ops **agent flows** visual | Personal agent + skills | Coding agent canvas | Workflow CLI |
| Stack | Django + editor | Python gateway | Agent Canvas | n8n |
| Tags | `agent` `mcp` `rag` `workflow` | `agent` `mcp` `skill` | `coding-agent` | `workflow` `harness` |

## Use case Odoo / ai_core

- Peer của `ai_agentic_workflow`: design flow ngoài Odoo, webhook ↔ ERP.  
- Engineer gắn MCP Odoo / internal APIs; ops chỉnh bước trong UI.  
- GraphRAG collections cho SOPs trước khi agent trả lời support.

## Link

- Repo: https://github.com/EpicStaff/EpicStaff  
- Wiki: https://github.com/EpicStaff/EpicStaff/wiki  
- Editor engine: [Foblex f-flow](https://github.com/Foblex/f-flow)  
- Peers: [hermes-agent.md](hermes-agent.md) · [openhands.md](openhands.md)
