# Huashu Design

> **Repo:** [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design)  
> **Category:** Image & Video · HTML-native design skill (agent)  
> **Tags:** `skill` · `coding-agent` · `agent` · `video`  
> **Ngôn ngữ:** HTML/CSS · SKILL.md · scripts · **⭐** ~21.4k · **License:** MIT  
> Agent-agnostic (Claude Code · Cursor · Codex · …)

## Đây là gì?

**Huashu Design** (*花叔设计*) là **agent skill** HTML-native: một câu prompt → **prototype App/Web** (click được), **slide HTML + PPTX** chỉnh sửa được, **animation** xuất MP4/GIF, infographic, hoặc **review 5 chiều**. Có **20+ triết lý thiết kế**, thư viện ~40 style CSS (anti-slop), cố vấn 3 hướng song song, brand protocol (logo/palette).

Không phải Figma/AE — agent viết HTML; Playwright verify prototype. Cài qua `npx skills add`.

**Cùng kiểu:** [HTML Anything](html-anything.md) (agentic HTML multi-surface), [HyperFrames](hyperframes.md) (HTML→video), [ScreenCoder](screencoder.md) (screenshot→HTML), [PPT Master](../mcp-ai-agents/ppt-master.md) (skill → `.pptx` native).

## Dùng khi nào?

| Nhu cầu | Huashu Design |
|---------|---------------|
| Prototype iOS/Web clickable + review | ✅ |
| Deck HTML / PPTX editable từ prompt | ✅ |
| Motion ngắn → MP4/GIF | ✅ |
| Screenshot UI → HTML sạch | → [ScreenCoder](screencoder.md) |
| Editor HTML có UI/gallery sẵn | → [HTML Anything](html-anything.md) |

## Chạy thử

```bash
npx skills add alchaincyf/huashu-design

# Trong Claude Code / Cursor / Codex:
# 「做个 AI 番茄钟 iOS 原型，4 个核心屏幕要真能点击」
# 「做一份演讲 PPT，推荐 3 个风格方向让我选」
# 「把这段逻辑做成 60 秒动画，导出 MP4」
```

MIT (từ 2026-05 thương mại free). Demos + `references/` trong repo.

## So với tool khác

| | Huashu Design | HTML Anything | PPT Master |
|--|---------------|---------------|------------|
| Niche | Design skill HTML+motion | Agentic HTML editor | PDF→editable PPTX |
| Cài | `skills add` | Next app / skills | Skill pack |
| Tags | `skill` `video` | `skill` `video` | `skill` `office` |

## Dùng với Odoo / ai_core

- Prototype UI module / pitch deck trước khi code OWL.  
- Release animation ngắn cho changelog / demo sales.  
- Brand protocol: đưa logo + màu Odoo partner trước khi gen.

## Link

- Repo: https://github.com/alchaincyf/huashu-design  
- Peers: [html-anything.md](html-anything.md) · [hyperframes.md](hyperframes.md) · [screencoder.md](screencoder.md) · [ppt-master.md](../mcp-ai-agents/ppt-master.md)
