# drawio-skill

> **Repo:** [Agents365-ai/drawio-skill](https://github.com/Agents365-ai/drawio-skill)  
> **Category:** MCP & AI Agents · Domain: Diagram / DevTools  
> **Tags:** `skill` · `diagram` · `cli`  
> **Ngôn ngữ:** Python scripts + SKILL.md · **⭐** ~5.7k · **License:** MIT

## Tổng quan

**drawio-skill** là **Agent Skill** biến mô tả ngôn ngữ tự nhiên (và codebase / infra / ảnh) thành file **`.drawio`** + export PNG/SVG/PDF/JPG qua **draw.io desktop CLI**.

Chạy trên Claude Code, Cursor, Copilot, OpenClaw, Codex… (Agent Skills format). **Không cần MCP server** — một `SKILL.md` + scripts; optional Node chỉ cho installer.

## Để làm gì?

| Nhu cầu | drawio-skill |
|---------|----------------|
| NL → sơ đồ UML / SysML / BPMN / C4 / network… | ✅ 11 presets |
| Codebase / Terraform / K8s / Compose → diagram | ✅ 36 tools (import scripts) |
| Ảnh whiteboard → sơ đồ editable | ✅ |
| Logo AI/LLM / datastore trên diagram | ✅ 321 + 18 brands (draw.io thiếu) |
| Export + vision self-check | ✅ |
| PR diff / mind map / runbook animation | ✅ |

## Cài nhanh

1. Cài **draw.io desktop** (`brew install --cask drawio` …) — khuyến nghị ≥ 30  
2. Skill:

```bash
npx skills add Agents365-ai/365-skills -g
# hoặc clone → ~/.claude/skills/drawio-skill
```

Claude: `/plugin marketplace add Agents365-ai/365-skills` → `/plugin install drawio`

## So với Draw.io harness (CLI-Anything)

| | drawio-skill ★ | CLI-Anything Draw.io harness |
|--|----------------|------------------------------|
| Entry | Agent Skill (NL / tools trong skill) | CLI harness sinh từ pipeline CLI-Anything |
| Import code/IaC | Mạnh (py/js/go/rust, tf, k8s…) | Theo surface harness |
| Multi-agent | Skills format sẵn | Skill kèm CLI package |
| Cha catalog | ★ riêng | Con của [CLI-Anything](cli-anything.md) |

Cả hai đều mục tiêu: **agent tạo Draw.io không kéo thả**; chọn skill chuyên diagram vs ecosystem CLI-Hub.

## Quan hệ catalog / ai_core

| | Vai trò |
|--|---------|
| **CLI-Anything → Draw.io** | [cli-anything/drawio.md](cli-anything/drawio.md) — alternative path |
| **prompts.chat** | Prompt templates; drawio-skill = skill **sinh artifact diagram** |
| **Odoo / docs** | Sequence approval, C4 `ai_core`, ER `rag.*` trước khi viết module |

## Link

- Repo: https://github.com/Agents365-ai/drawio-skill  
- Upstream Draw.io: https://github.com/jgraph/drawio  
- Harness bạn cùng catalog: [cli-anything/drawio.md](cli-anything/drawio.md)
