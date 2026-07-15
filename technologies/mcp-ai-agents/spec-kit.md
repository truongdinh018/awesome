# Spec Kit

> **Repo:** [github/spec-kit](https://github.com/github/spec-kit)  
> **Category:** MCP & AI Agents · Spec-Driven Development toolkit (GitHub)  
> **Tags:** `coding-agent` · `skill` · `cli` · `workflow` · `prompt`  
> **Ngôn ngữ:** Python · Specify CLI (`uv`) · **⭐** ~121k · **License:** MIT  
> Docs: [github.github.io/spec-kit](https://github.github.io/spec-kit/)

## Đây là gì?

**Spec Kit** là toolkit OSS của GitHub cho **Spec-Driven Development (SDD)**: spec executable thay vì vibe-code từ đầu.

CLI **`specify`** bootstrap project + tích hợp **30+ coding agents** (Copilot, Claude Code, Codex, Cursor…). Workflow slash/skills: `/speckit.constitution` → `specify` → `plan` → `tasks` → `implement` (+ clarify · analyze · checklist · converge · taskstoissues). Extensions / presets / role **bundles** tùy chỉnh.

**Cùng kiểu:** [CC Workflow Studio](cc-wf-studio.md) (canvas → skills), [Addy's Agent Skills](agent-skills.md) (lifecycle eng), [OpenHands](openhands.md) / [Vibe Kanban](vibe-kanban.md) (agent runtime), [Caveman](caveman.md) (style reply, không SDD).

## Dùng khi nào?

| Nhu cầu | Spec Kit |
|---------|----------|
| Spec → plan → tasks → implement có cấu trúc | ✅ `/speckit.*` |
| Bootstrap multi-agent SDD project | ✅ `specify init --integration …` |
| Extensions / presets / team bundles | ✅ |
| Canvas skill cho Claude/Cursor | → [CC Workflow Studio](cc-wf-studio.md) |
| Agent runtime full (sandbox, tools) | → [OpenHands](openhands.md) |

## Chạy thử

```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@vX.Y.Z
specify init my-project --integration copilot
# Trong agent: /speckit.constitution → /speckit.specify → /speckit.plan → /speckit.tasks → /speckit.implement
specify self check && specify self upgrade   # nâng CLI
```

Docs + community extensions: https://github.github.io/spec-kit/

## So với tool khác

| | Spec Kit | CC WF Studio | Addy's Skills |
|--|----------|--------------|---------------|
| Shape | SDD toolkit + Specify CLI | Visual skill canvas | Eng lifecycle skills |
| Spec→ship phases | ✅ core | Partial | Spec-oriented |
| Tags | `coding-agent` `cli` `workflow` | `coding-agent` `skill` `mcp` | `skill` `prompt` |

## Dùng với Odoo / ai_core

- Feature mới / module custom: constitution + specify trước khi agent code Odoo.  
- `taskstoissues` → track GitHub/GitLab nội bộ.  
- Không thay review/human QA trên migration & security.

## Link

- Repo: https://github.com/github/spec-kit  
- Spec-driven guide: https://github.com/github/spec-kit/blob/main/spec-driven.md  
- Peers: [cc-wf-studio.md](cc-wf-studio.md) · [agent-skills.md](agent-skills.md) · [openhands.md](openhands.md) · [vibe-kanban.md](vibe-kanban.md) · [caveman.md](caveman.md)
