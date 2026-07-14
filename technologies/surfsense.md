# SurfSense

> **Repo:** [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense)  
> **Category:** MCP & AI Agents · Competitive intelligence for agents  
> **Tags:** `rag` · `agent` · `mcp` · `self-host` · `api` · `workflow`  
> **Ngôn ngữ:** Python · FastAPI · Next.js · LangGraph · **⭐** ~15.2k  
> Site: [surfsense.com](https://www.surfsense.com) · Discord · License: xem repo `LICENSE`

## Tổng quan

**SurfSense** — *NotebookLM for Competitive Intelligence*: nền tảng OSS cho AI agents theo dõi thị trường với **live connectors** (Reddit, YouTube, Instagram, TikTok, Google Maps/Search, web crawl) qua **REST API** hoặc **MCP server**. Agent harness + knowledge base có citations; automations → Slack/Notion/Linear. Self-host free.

Định vị mới: không còn chỉ “general research notebook” — tập trung **live market data** mà agent thường thiếu.

Peer: [Open Notebook](open-notebook.md) / [NotebookLM MCP](notebooklm-mcp.md) (notebook research), [Khoj](khoj.md) (second brain), [AnythingLLM](anything-llm.md) (MCP workspace), [Hermes](hermes-agent.md) (agent runtime).

## Để làm gì?

| Nhu cầu | SurfSense |
|---------|-----------|
| Competitor 360 / pricing watch / SERP | ✅ multi-connector + schedule |
| Brand listen Reddit / YouTube / TikTok | ✅ |
| MCP tools cho Cursor/Claude (`surfsense_*`) | ✅ |
| Lead gen Maps + site enrich | ✅ |
| Pure personal notebook LM | → [Open Notebook](open-notebook.md) |
| General second brain docs | → [Khoj](khoj.md) |

## Highlight

- Typed scraper APIs → structured JSON (ít scrape HTML tay)  
- External MCP connectors (Notion, Slack, Jira OAuth…)  
- KB + chat citations · reports · podcasts · presentations (vẫn giữ)  
- Chrome extension · Ollama-friendly  
- Cloud pay-as-you-go; **self-host billing off**

## Deploy

Self-host: docs / Docker trên [surfsense.com](https://www.surfsense.com) + README repo.  
API: `POST …/workspaces/{id}/scrapers/{connector}/scrape` + Bearer key.

## So sánh catalog

| | SurfSense | Open Notebook | Khoj |
|--|-----------|---------------|------|
| Niche | Competitive intel + live scrapers | Notebook LM OSS | Second brain |
| Live social/SERP | ✅ native connectors | hạn chế | web search generic |
| MCP | ✅ first-class | — | — |
| Tags | `rag` `agent` `mcp` `api` `workflow` | `rag` `api` `tts` | `rag` `agent` `desktop` |

## Use case Odoo / ai_core

- Competitive brief / brand mention cho GTM team.  
- MCP tools gọi từ agent Odoo (`xb_mcp`) khi cần live Reddit/Maps.  
- Workflow: schedule → Slack digest giá đối thủ.

## Link

- Repo: https://github.com/MODSetter/SurfSense  
- Site: https://www.surfsense.com  
- Peers: [open-notebook.md](open-notebook.md) · [khoj.md](khoj.md) · [anything-llm.md](anything-llm.md) · [notebooklm-mcp.md](notebooklm-mcp.md) · [hermes-agent.md](hermes-agent.md)
