# Hermes Agent

> **Repo:** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)  
> **Category:** MCP & AI Agents  
> **Tags:** `agent` · `mcp` · `skill` · `cli` · `self-host`  
> **Ngôn ngữ:** Python · **⭐** ~214k · **License:** MIT  
> **Docs:** [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/)  
> Slogan: *The agent that grows with you*

## Tổng quan

**Hermes Agent** (Nous Research) — **self-improving AI agent** với vòng học khép kín: tạo/cải thiện skills từ trải nghiệm, nhớ người dùng qua phiên, tìm lại hội thoại cũ (FTS5), chạy CLI hoặc gateway messaging (Telegram, Discord, Slack, WhatsApp, Signal).

Không gắn laptop: chat Telegram trong khi agent chạy trên VPS / cloud / serverless (Modal, Daytona). Model linh hoạt — Nous Portal, OpenRouter, OpenAI, endpoint riêng (`hermes model`).

## Để làm gì?

| Nhu cầu | Hermes |
|---------|--------|
| Agent cá nhân / team với memory + skills tự trưởng | ✅ Closed learning loop |
| Chat từ Telegram/Discord… + CLI cùng lúc | ✅ `hermes gateway` |
| Cron NL — báo cáo / backup unattended | ✅ Built-in scheduler |
| Subagent song song + tool RPC trong Python | ✅ |
| Chạy local / Docker / SSH / Singularity / Modal / Daytona | ✅ 6 backends |
| MCP mở rộng tools | ✅ |
| Migrate từ OpenClaw | ✅ `hermes claw migrate` |

## Cài nhanh

```bash
# Linux / macOS / WSL2
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
source ~/.bashrc
hermes              # chat
hermes model        # chọn LLM
hermes gateway      # messaging
```

Windows: `iex (irm https://hermes-agent.nousresearch.com/install.ps1)`  
Một subscription multi-tool: `hermes setup --portal` (Nous Portal).

## Điểm khác agents khác

| | Hermes | Cursor / Claude Code | OpenClaw |
|--|--------|----------------------|----------|
| Học skill từ experience | ✅ Built-in loop | Thủ công / skill file | Skills |
| Messaging gateway đa app | ✅ | Thường IDE | Có |
| User modeling xuyên session | ✅ Honcho + FTS5 | Project-scoped | Tùy |
| Terminal backends cloud idle | ✅ Modal/Daytona | Local/cloud IDE | Tùy |

Compatible [agentskills.io](https://agentskills.io).

## Quan hệ catalog / ai_core

| | Vai trò |
|--|---------|
| **CLI-Anything** | Hermes skill trong ecosystem CLI-Anything; Hermes = runtime agent đầy đủ |
| **Destructive Command Guard** | Nên layer khi Hermes có shell đầy đủ |
| **prompts.chat / drawio-skill / Ponytail** | Skills gắn được vào Hermes Skills Hub (`hermes plugins install DietrichGebert/ponytail`) |
| **ai_agentic** | Reference personal-agent + memory ngoài ERP; Odoo vẫn `xb_ai` session |
| **[OpenHands](openhands.md)** | Dev team / sandbox coding platform; Hermes = personal learning loop |

## Link

- Repo: https://github.com/NousResearch/hermes-agent  
- Docs: https://hermes-agent.nousresearch.com/  
- Install: https://hermes-agent.nousresearch.com/install.sh
- Coding-agent peer: [openhands.md](openhands.md)
- YAGNI skill: [ponytail.md](ponytail.md)
