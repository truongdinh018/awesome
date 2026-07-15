# Taste Skill

> **Repo:** [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)  
> **Category:** MCP & AI Agents · Frontend design Agent Skills  
> **Tags:** `skill` · `coding-agent` · `prompt` · `image-gen`  
> **Ngôn ngữ:** SKILL.md / JS tooling · **⭐** ~63.3k · **License:** MIT  
> Site: [tasteskill.dev](https://tasteskill.dev) · Slogan: *gives your AI good taste — anti-slop frontends*

## Đây là gì?

**Taste Skill** là bộ **Agent Skills** portable (Claude Code, Cursor, Codex, ChatGPT…) chống UI AI "generic slop": layout, typography, motion, spacing mạnh hơn boilerplate.

Kèm **image-generation skills** (web/mobile comps, brand kit) → xuất reference rồi handoff coding agent. Default skill `design-taste-frontend` = **v2 experimental** (rewrite: brief inference, dials VARIANCE/MOTION/DENSITY, GSAP skeletons, redesign-audit, pre-flight). Pin v1 nếu cần: `design-taste-frontend-v1`.

**Cùng kiểu:** [Addy's Agent Skills](agent-skills.md) (lifecycle eng), [Ponytail](ponytail.md) (YAGNI), [ScreenCoder](../image-video/screencoder.md) / [HTML Anything](../image-video/html-anything.md) (UI→code / HTML agents), [HyperFrames](../image-video/hyperframes.md) (motion video).

## Dùng khi nào?

| Nhu cầu | Taste Skill |
|---------|-------------|
| Frontend mới "có taste", anti-slop | ✅ `design-taste-frontend` (v2) |
| GPT/Codex stricter | ✅ `gpt-taste` |
| Redesign codebase hiện có | ✅ `redesign-existing-projects` |
| Soft / minimalist / brutalist direction | ✅ soft / minimalist / brutalist skills |
| Image comps → code | ✅ imagegen-* + `image-to-code` |
| Lifecycle eng (spec→ship) | → [Addy's Agent Skills](agent-skills.md) |
| Ít code / YAGNI | → [Ponytail](ponytail.md) |

## Chạy thử

```bash
npx skills add https://github.com/Leonxlnx/taste-skill
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
# Pin v1:
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend-v1"
```

**Skills chính:** `design-taste-frontend` (v2) · `design-taste-frontend-v1` · `gpt-taste` · `image-to-code` · `redesign-existing-projects` · `full-output-enforcement` · imagegen-frontend-web/mobile · brandkit.

**Settings:** Dials 1–10 trên đầu SKILL: **DESIGN_VARIANCE** · **MOTION_INTENSITY** · **VISUAL_DENSITY**.

## So với tool khác

| | Taste Skill | Addy Skills | Ponytail |
|--|-------------|-------------|----------|
| Niche | Frontend / visual taste | Engineering lifecycle | Less code (YAGNI) |
| Output | Code + optional image refs | Spec→test→ship gates | LOC / cost ↓ |
| Tags | `skill` `prompt` `image-gen` | `skill` `coding-agent` | `skill` `prompt` |

## Dùng với Odoo / ai_core

- OWL / website / portal UI ngoài "Inter + purple gradient" default.  
- Redesign module form/list trước khi ship.  
- Imagegen → brand board → Cursor implement static pages — không thay design system ERP nội bộ.

## Link

- Repo: https://github.com/Leonxlnx/taste-skill  
- Site: https://tasteskill.dev · CHANGELOG.md · research/  
- Peers: [agent-skills.md](agent-skills.md) · [ponytail.md](ponytail.md) · [screencoder.md](../image-video/screencoder.md) · [html-anything.md](../image-video/html-anything.md)
