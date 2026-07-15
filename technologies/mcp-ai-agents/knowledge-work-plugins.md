# Knowledge Work Plugins (Anthropic)

> **Repo:** [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)  
> **Category:** MCP & AI Agents · Claude Cowork / role plugins  
> **Tags:** `skill` · `prompt` · `workspace` · `office`  
> **Ngôn ngữ:** Python · Markdown plugins · **⭐** ~22.6k · **License:** Apache-2.0  
> Plugins cho **Claude Cowork** (compat Claude Code) — knowledge workers

## Đây là gì?

**knowledge-work-plugins** là open-source plugins Anthropic biến Claude thành **chuyên gia theo role**: mỗi plugin đóng gói skills, connectors, slash commands, sub-agents. Domain: productivity, sales, CS, PM, marketing, legal, finance, data, enterprise-search, HR, ops, engineering, design, bio-research, PDF viewer… Customize theo tool/process công ty.

**Cùng kiểu:** [Addy's Agent Skills](agent-skills.md) / [Taste Skill](taste-skill.md) (skills coding/frontend), [skill-registries](../bookmarks/skill-registries.md) (hubs), [Google Workspace CLI](../devtools/google-workspace-cli.md) (office CLI).

## Dùng khi nào?

| Nhu cầu | knowledge-work-plugins |
|---------|------------------------|
| Role specialist trong Claude Cowork | ✅ 11+ official plugins |
| Skills coding / design taste | → [agent-skills](agent-skills.md) / [taste-skill](taste-skill.md) |
| Browse skill marketplace | → [skill-registries](../bookmarks/skill-registries.md) |

## Chạy thử

Cài qua Claude Cowork / Claude Code plugin flow (xem README upstream `.claude-plugin`).  
Customize connectors: Slack, Notion, HubSpot, Jira, M365, Snowflake…

## So với tool khác

| | knowledge-work-plugins | Addy's Agent Skills | Skills Hub |
|--|------------------------|---------------------|------------|
| Shape | Anthropic role plugins (Cowork) | Coding agent skills | Registry marketplace |
| Audience | Knowledge workers | Devs | Multi-platform |
| Tags | `skill` `workspace` `office` | `skill` `coding-agent` | (bookmark) |

## Dùng với Odoo / ai_core

- Team CRM/Finance/Legal dùng Cowork với plugin gần process — không thay Odoo ACL.  
- Reference skill format khi viết skill nội bộ Odoo/agent.  
- Enterprise connectors = tài khoản công ty, không hardcode secret.

## Link

- Repo: https://github.com/anthropics/knowledge-work-plugins  
- Peers: [agent-skills.md](agent-skills.md) · [taste-skill.md](taste-skill.md) · [skill-registries.md](../bookmarks/skill-registries.md) · [google-workspace-cli.md](../devtools/google-workspace-cli.md) · [prompts-chat.md](prompts-chat.md)
