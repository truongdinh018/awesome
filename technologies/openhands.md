# OpenHands

> **Repo:** [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)  
> **Category:** MCP & AI Agents · Coding agents  
> **Tags:** `coding-agent` · `agent` · `self-host`  
> **Ngôn ngữ:** Python · TypeScript · **⭐** ~80.7k · **License:** MIT (xem LICENSE repo)  
> **Docs:** [docs.openhands.dev](https://docs.openhands.dev) · **Site:** [openhands.dev](https://openhands.dev)  
> **f.k.a.** OpenDevin

## Đây là gì?

**OpenHands** là nền tảng **AI-driven development** self-host: **Agent Canvas** là control center cho coding agents + automations (Slack, GitHub issues → tasks, schedule/webhook).

Chạy agent local / Docker / VM / cloud. Canvas kết nối nhiều **Agent Server** backends. Out-of-the-box: OpenHands agent; cũng chạy Claude Code, Codex, Gemini qua **Agent-Client Protocol (ACP)**.

Core agent SDK: [OpenHands/software-agent-sdk](https://github.com/OpenHands/software-agent-sdk) · Canvas chuyển dần: [OpenHands/agent-canvas](https://github.com/OpenHands/agent-canvas).

**Cùng kiểu:** [Hermes Agent](hermes-agent.md), [Midscene](midscene.md), [Destructive Command Guard](destructive-command-guard.md)

## Dùng khi nào?

| Nhu cầu | OpenHands |
|---------|-----------|
| Coding agent self-host (sandbox Docker) | ✅ |
| UI điều khiển nhiều agent / nhiều máy | ✅ Agent Canvas |
| Automation: GitHub / Slack / cron / webhook | ✅ |
| Đổi backend local ↔ remote ↔ cloud | ✅ |
| BYO LLM + BYO agent (ACP) | ✅ |
| Personal always-on agent | → [Hermes](hermes-agent.md) |

## Chạy thử

```bash
# Canvas (npm) — cảnh báo: without sandbox = full filesystem access
npm install -g @openhands/agent-canvas
agent-canvas
# → http://localhost:8000
```

Docker sandbox (khuyến nghị):

```bash
export PROJECTS_PATH="$HOME/projects"
docker run -it --rm -p 8000:8000 \
  -v "$HOME/.openhands:/home/openhands/.openhands" \
  -v "${PROJECTS_PATH}:/projects" \
  ghcr.io/openhands/agent-canvas:1.0.0-rc.11
```

## So với tool khác

| | OpenHands | Hermes Agent | Midscene |
|--|-----------|--------------|----------|
| Trọng tâm | Dev control center + coding agent | Personal agent + learning loop | Vision UI test/automation |
| Sandbox Docker | ✅ Mạnh | Nhiều backends | Browser/device |
| ACP / multi-agent IDE | ✅ | Skills/tools | Không |
| Always-on team automations | ✅ Canvas | Cron + gateway | — |

## Dùng với Odoo / ai_core

- Reference agent platform self-host; khác runtime ERP `xb_ai`.  
- Engineering team / repo workflow — không thay Hermes personal ops.  
- Nên dùng [Destructive Command Guard](destructive-command-guard.md) khi agent không sandbox.

## Link

- Repo: https://github.com/OpenHands/OpenHands  
- Docs: https://docs.openhands.dev  
- SDK: https://github.com/OpenHands/software-agent-sdk  
- Peers: [hermes-agent.md](hermes-agent.md) · [midscene.md](midscene.md) · [destructive-command-guard.md](destructive-command-guard.md)
