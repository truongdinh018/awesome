# AI Website Cloner Template

> **Repo:** [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template)  
> **Category:** Image & Video Generation · Agent skill/template  
> **Tags:** `ui-to-code` · `coding-agent` · `skill`  
> **Ngôn ngữ:** TypeScript (Next.js) · **⭐** ~28k · **License:** MIT  
> **Template:** GitHub *Use this template* (không clone thẳng để làm site)

## Tổng quan

Template tái sử dụng để **reverse-engineer bất kỳ website** thành codebase **Next.js** hiện đại bằng **AI coding agent** (khuyến nghị Claude Code + Opus).

Một lệnh `/clone-website <url>`: agent soi site, lấy design token & asset, viết component spec, build song song từng section, rồi QA visual diff.

## Để làm gì?

| Nhu cầu | Template này |
|---------|----------------|
| Migrate WordPress/Webflow → Next.js (site mình sở hữu) | ✅ |
| Mất source — site còn live, cần lại code hiện đại | ✅ |
| Học layout/animation/responsive từ site production | ✅ |
| Phishing / copy thương hiệu người khác | ❌ Cấm (README) |

## Pipeline `/clone-website`

```
1. Recon     — screenshot, token, hover/scroll/responsive
2. Foundation — fonts, colors, globals, download assets
3. Specs     — docs/research/components/ (computed CSS chính xác)
4. Parallel  — builder agents / git worktrees per section
5. Assemble  — merge + visual diff vs original
```

Stack output: **Next.js 16** · React 19 · Tailwind v4 · shadcn/ui · TypeScript strict.

## Agent hỗ trợ

Claude Code (khuyến nghị) · Codex · Cursor · OpenCode · Copilot · Windsurf · Gemini CLI · Cline · Roo · Continue · Amazon Q · Augment · Aider — xem `AGENTS.md`.

## So sánh catalog

| | AI Website Cloner | ScreenCoder | Midscene |
|--|-------------------|-------------|----------|
| Input | URL live site | Screenshot PNG | Screenshot (để **hành động**) |
| Output | Next.js app đầy đủ | HTML/CSS | Click / assert UI |
| Runtime | Coding agent + skill | Vision model | Vision automation |
| Độ sâu | Multi-page section + QA | Markup layout | Không sinh code site |

## Quan hệ

| | Vai trò |
|--|---------|
| **ScreenCoder** | Screenshot → HTML nhanh; cloner = URL → app agent-driven |
| **drawio-skill** | Diagram; cloner = frontend site |
| **ai_core** | Tham khảo UI competitor (tuân bản quyền) trước OWL mock |

## Link

- Repo: https://github.com/JCodesMore/ai-website-cloner-template  
- Skill path: `.claude/skills/clone-website`  
- Companion: [screencoder.md](screencoder.md) · Agentic HTML design: [html-anything.md](html-anything.md)
