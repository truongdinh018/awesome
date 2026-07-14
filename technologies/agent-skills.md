# Addy's Agent Skills

> **Repo:** [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)  
> **Category:** MCP & AI Agents · Bộ skill production engineering  
> **Tags:** `skill` · `coding-agent` · `prompt`  
> **Ngôn ngữ:** Markdown skills · JS tooling · **⭐** ~78.1k · **License:** MIT  
> Install: `npx skills add addyosmani/agent-skills`

## Đây là gì?

**Addy's Agent Skills** là pack **24 skill production-grade** + **8 slash commands** (`/spec` → `/ship`) cho AI coding agents (Claude Code, Cursor, Codex, Copilot, Gemini, OpenCode…).

Workflow có gate: Define → Plan → Build → Verify → Review → Ship. Không phải runtime agent — là **SKILL.md pack** (spec/TDD/security/webperf…) cài vào agent bạn đã dùng.

**Cùng kiểu:** [Ponytail](ponytail.md) (skill YAGNI mỏng), [CLI-Anything](cli-anything.md) / [HTML Anything](html-anything.md) (skill domain-specific), [Hermes](hermes-agent.md) (agent runtime + skills), [prompts.chat](prompts-chat.md) (thư viện prompt).

## Dùng khi nào?

| Nhu cầu | Agent Skills (Addy) |
|---------|---------------------|
| Lifecycle chuẩn (spec→ship) trên Cursor/Claude | ✅ 24 skills + commands |
| TDD / code review / security gate | ✅ dedicated skills |
| Một skill “ít code” (YAGNI) | → [Ponytail](ponytail.md) |
| Agent tự chạy + MCP hub | → [Hermes](hermes-agent.md) / [OpenHands](openhands.md) |

## Chạy thử

```bash
npx skills add addyosmani/agent-skills            # all 24
npx skills add addyosmani/agent-skills --list
# Claude: /plugin marketplace add addyosmani/agent-skills
```

- Commands: `/spec` `/plan` `/build` `/test` `/review` `/webperf` `/code-simplify` `/ship`  
- `/build auto` — approve plan once, autonomous slices (vẫn TDD + pause on risk)  
- Cursor: sync `skills/` → `.cursor/skills/` (không nhét full skill vào rules)

## So với tool khác

| | Addy Agent Skills | Ponytail | Hermes |
|--|-------------------|----------|--------|
| Shape | Lifecycle skill pack | Single YAGNI skill | Full agent runtime |
| Tags | `skill` `coding-agent` `prompt` | `skill` `prompt` | `agent` `mcp` `skill` |

## Dùng với Odoo / ai_core

- Chuẩn hóa agent session khi làm module Odoo (spec → TDD → review).  
- Security/hardening skill trước PR nhạy cảm.  
- Đồng bộ với ECC / Cursor skills trong monorepo.

## Link

- Repo: https://github.com/addyosmani/agent-skills  
- Cursor setup: `docs/cursor-setup.md` trong repo  
- Peers: [ponytail.md](ponytail.md) · [cli-anything.md](cli-anything.md) · [hermes-agent.md](hermes-agent.md) · [html-anything.md](html-anything.md) · [understand-anything.md](understand-anything.md)
