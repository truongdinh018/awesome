# AI Website Cloner Template

> **Repo:** [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template)  
> **Category:** Image & Video Generation · Agent skill/template  
> **Tags:** `ui-to-code` · `coding-agent` · `skill`  
> **Ngôn ngữ:** TypeScript (Next.js) · **⭐** ~28k · **License:** MIT  
> **Template:** GitHub *Use this template* (không clone thẳng để làm site)

## Đây là gì?

Template tái sử dụng để **reverse-engineer bất kỳ website** thành codebase **Next.js** hiện đại bằng **AI coding agent** (khuyến nghị Claude Code + Opus).

Một lệnh `/clone-website <url>`: agent soi site, lấy design token & asset, viết component spec, build song song từng section, rồi QA visual diff. Stack output: **Next.js 16** · React 19 · Tailwind v4 · shadcn/ui · TypeScript strict.

**Cùng kiểu:** [ScreenCoder](screencoder.md) (screenshot → HTML nhanh), [HTML Anything](html-anything.md) (agentic HTML design), [drawio-skill](../mcp-ai-agents/drawio-skill.md) (diagram, không phải frontend site).

## Dùng khi nào?

| Nhu cầu | Template này |
|---------|----------------|
| Migrate WordPress/Webflow → Next.js (site mình sở hữu) | ✅ |
| Mất source — site còn live, cần lại code hiện đại | ✅ |
| Học layout/animation/responsive từ site production | ✅ |
| Phishing / copy thương hiệu người khác | ❌ Cấm (README) |

## Chạy thử

**Pipeline `/clone-website`:**

```
1. Recon     — screenshot, token, hover/scroll/responsive
2. Foundation — fonts, colors, globals, download assets
3. Specs     — docs/research/components/ (computed CSS chính xác)
4. Parallel  — builder agents / git worktrees per section
5. Assemble  — merge + visual diff vs original
```

**Agent hỗ trợ:** Claude Code (khuyến nghị) · Codex · Cursor · OpenCode · Copilot · Windsurf · Gemini CLI · Cline · Roo · Continue · Amazon Q · Augment · Aider — xem `AGENTS.md`.

Skill path: `.claude/skills/clone-website`.

## So với tool khác

| | AI Website Cloner | ScreenCoder | Midscene |
|--|-------------------|-------------|----------|
| Input | URL live site | Screenshot PNG | Screenshot (để **hành động**) |
| Output | Next.js app đầy đủ | HTML/CSS | Click / assert UI |
| Runtime | Coding agent + skill | Vision model | Vision automation |
| Độ sâu | Multi-page section + QA | Markup layout | Không sinh code site |

| | Vai trò |
|--|---------|
| **ScreenCoder** | Screenshot → HTML nhanh; cloner = URL → app agent-driven |
| **drawio-skill** | Diagram; cloner = frontend site |
| **ai_core** | Tham khảo UI competitor (tuân bản quyền) trước OWL mock |

## Dùng với Odoo / ai_core

- Tham khảo UI competitor (tuân bản quyền) trước OWL mock.  
- Prototype landing page marketing Odoo từ site tham chiếu (site bạn sở hữu).  
- Không dùng để copy thương hiệu người khác.

## Link

- Repo: https://github.com/JCodesMore/ai-website-cloner-template  
- Skill path: `.claude/skills/clone-website`  
- Companion: [screencoder.md](screencoder.md) · Agentic HTML design: [html-anything.md](html-anything.md)
