# AstrBot

> **Repo:** [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot)  
> **Category:** MCP & AI Agents · IM agent chatbot platform  
> **Tags:** `agent` · `mcp` · `skill` · `rag` · `self-host` · `api` · `workflow` · `chatbot`
> **Ngôn ngữ:** Python · **⭐** ~36.4k · **License:** AGPL-3.0  
> Site: [astrbot.app](https://astrbot.app) · Docs: [docs.astrbot.app](https://docs.astrbot.app)

## Đây là gì?

**AstrBot** — platform **agent chatbot** all-in-one gắn **IM** (QQ, Telegram, Discord, Feishu, DingTalk, WeCom, Slack, LINE…). LLM đa nhà cung cấp + Ollama/LM Studio; **MCP** · Skills · Knowledge Base · Persona · context compress; plugin marketplace **1000+**; Agent Sandbox (shell/code cô lập); WebUI / ChatUI. Tích hợp Dify / Bailian / Coze. Deploy Docker · desktop app · launcher · panel (BT/1Panel/CasaOS). Upstream tự gọi là **OpenClaw alternative**.

Không phải coding-agent IDE — là **hạ tầng hội thoại agent trên messenger**. Coding sandbox sâu hơn → [OpenHands](openhands.md) / [DeerFlow](deer-flow.md).

**Cùng kiểu:** [LangBot](langbot.md) (IM bots production, Apache), [Hermes Agent](hermes-agent.md) (personal gateway + learning loop), [DeerFlow](deer-flow.md) (super-agent research/code), [WeKnora](weknora.md) / [RAGFlow](ragflow.md) (RAG + IM), [zca-bridge](../devtools/zca-bridge.md) (Zalo↔Chatwoot, không LLM).

## Dùng khi nào?

| Nhu cầu | AstrBot |
|---------|---------|
| Bot AI trên QQ / Telegram / Feishu / Discord… | ✅ primary |
| Agent + MCP + plugins + KB trên IM | ✅ |
| Self-host chatbot enterprise / CS | ✅ Docker + WebUI |
| Production IM bots (Apache, panel/orchestration) | → [LangBot](langbot.md) |
| Personal agent + learn skills + cron | → [Hermes](hermes-agent.md) |
| Research/code SuperAgent dài hạn | → [DeerFlow](deer-flow.md) |
| Chỉ bridge Zalo ↔ helpdesk | → [zca-bridge](../devtools/zca-bridge.md) |

## Chạy thử

```bash
# production: Docker Compose — xem docs
# https://docs.astrbot.app/deploy/astrbot/docker.html
git clone https://github.com/AstrBotDevs/AstrBot.git
cd AstrBot
# theo README: compose.yml hoặc uv + CLI manual deploy
# Dashboard: cấu hình platform IM + API key LLM
```

Desktop: [AstrBot-desktop](https://github.com/AstrBotDevs/AstrBot-desktop). Docs VI/ZH đầy đủ trên astrbot.app.

## So với tool khác

| | AstrBot | Hermes | DeerFlow |
|--|---------|--------|----------|
| Việc chính | IM chatbot + plugin hub | Personal agent + gateway | SuperAgent research/code |
| IM CN (QQ/WeCom/Feishu) | ✅ mạnh | Telegram/Discord… | Có gateway |
| Plugin ecosystem | 1000+ one-click | Skills hub | Skills/tools |
| License | AGPL-3.0 | MIT | (xem repo) |

## Odoo / ai_core

Bot CS / nội bộ trên Telegram/Feishu song song ERP; gọi webhook/`xb_ai` khi cần data Odoo. Không thay Discuss/Mail — lớp IM agent ngoài. AGPL: kiểm tra compliance nếu ship kèm.

## Link

- Repo: https://github.com/AstrBotDevs/AstrBot · Site: https://astrbot.app  
- Docs: https://docs.astrbot.app  
- Gần: [Hermes](hermes-agent.md) · [DeerFlow](deer-flow.md) · [WeKnora](weknora.md) · [RAGFlow](ragflow.md) · [zca-bridge](../devtools/zca-bridge.md)
