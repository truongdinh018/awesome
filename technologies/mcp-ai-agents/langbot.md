# LangBot

> **Repo:** [langbot-app/LangBot](https://github.com/langbot-app/LangBot)  
> **Category:** MCP & AI Agents · Production IM agent bots  
> **Tags:** `agent` · `mcp` · `skill` · `rag` · `self-host` · `api` · `workflow`  
> **Ngôn ngữ:** Python · **⭐** ~16.9k · **License:** Apache-2.0  
> Site: [langbot.app](https://langbot.app) · Docs / Cloud / Plugin market: xem hub site

## Đây là gì?

**LangBot** — platform **production-grade** xây bot AI trên **IM**: Discord · Telegram · Slack · LINE · QQ · WeChat/WeCom · Feishu · DingTalk · KOOK…. Hội thoại đa vòng, tool calling, multimodal, streaming; **RAG** KB; gắn Dify · Coze · n8n · Langflow · Deerflow · WeKnora; plugin hàng trăm + **MCP**; Web panel (monitor message/model/session); rate limit · filter · access control. Deploy: `uvx langbot` · Docker Compose · Cloud · K8s.

Cạnh [AstrBot](astrbot.md) (cùng lớp IM chatbot; AstrBot nặng QQ/plugin AGPL) — LangBot nhấn **enterprise-ready** + Apache-2.0 + orchestration pipeline.

**Cùng kiểu:** [AstrBot](astrbot.md), [Hermes Agent](hermes-agent.md), [DeerFlow](deer-flow.md), [WeKnora](weknora.md) / [RAGFlow](ragflow.md), [zca-bridge](../devtools/zca-bridge.md).

## Dùng khi nào?

| Nhu cầu | LangBot |
|---------|---------|
| Ship bot AI đa IM (Slack/Discord/Telegram/WeCom…) | ✅ primary |
| RAG + Dify/n8n/Coze trên messenger | ✅ |
| Self-host + Web panel / Cloud | ✅ |
| Alternative cùng lớp (QQ/plugin hub) | → [AstrBot](astrbot.md) |
| Personal gateway + learn skills | → [Hermes](hermes-agent.md) |
| Chỉ bridge Zalo ↔ helpdesk | → [zca-bridge](../devtools/zca-bridge.md) |

## Chạy thử

```bash
# one-liner (cần uv) → http://localhost:5300
uvx langbot

# hoặc Docker
git clone https://github.com/langbot-app/LangBot.git
cd LangBot/docker
docker compose --profile all up -d
```

Demo: https://demo.langbot.dev/ (đừng nhập secret). Docs/API trên langbot.app.

## So với tool khác

| | LangBot | AstrBot | Hermes |
|--|---------|---------|--------|
| Việc chính | IM bots production + RAG/orchestrate | IM + plugin marketplace | Personal agent + gateway |
| License | Apache-2.0 | AGPL-3.0 | MIT |
| Panel | Web management mạnh | WebUI/ChatUI | CLI + messaging |

## Odoo / ai_core

Bot CS/nội bộ trên Slack/Telegram/Feishu → webhook/`xb_ai` khi cần data ERP. Không thay Discuss. Apache-2.0 dễ gắn hơn AGPL platform tương đương.

## Link

- Repo: https://github.com/langbot-app/LangBot · Site: https://langbot.app  
- Demo: https://demo.langbot.dev/  
- Gần: [AstrBot](astrbot.md) · [Hermes](hermes-agent.md) · [DeerFlow](deer-flow.md) · [WeKnora](weknora.md) · [zca-bridge](../devtools/zca-bridge.md)
