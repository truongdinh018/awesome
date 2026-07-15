# Prompt Optimizer

> **Repo:** [linshenkx/prompt-optimizer](https://github.com/linshenkx/prompt-optimizer)  
> **Category:** MCP & AI Agents · Prompt engineering toolkit  
> **Tags:** `prompt` · `mcp` · `self-host` · `desktop` · `browser` · `image-gen`  
> **Ngôn ngữ:** TypeScript · **⭐** ~32.2k · **License:** AGPL-3.0  
> Demo: [prompt.always200.com](https://prompt.always200.com) · Docs: xem README

## Đây là gì?

**Prompt Optimizer** — tool **tối ưu / test / evaluate prompt** bằng LLM: one-click + iterative rewrite; system vs user prompt; analysis / compare evaluation; multi-model (OpenAI, Gemini, DeepSeek…); favorites + version history; context variables, multi-turn test, function calling. Có mode **T2I / I2I**. Client-side (API key thẳng provider). Surf: web · desktop · Chrome extension · Docker; **MCP** cho Claude Desktop… Không phải thư viện browse — là **workbench tối ưu asset prompt**.

**Cùng kiểu:** [prompts.chat](prompts-chat.md) (catalog/browse prompt), [Caveman](caveman.md) / [StopSlop](stop-slop.md) (skill nén/chống slop), [Taste Skill](taste-skill.md) (UI anti-slop).

## Dùng khi nào?

| Nhu cầu | Prompt Optimizer |
|---------|------------------|
| Viết lại / đánh giá prompt có đo lường | ✅ primary |
| A/B compare output đa model | ✅ |
| Self-host workbench (Docker/Vercel) + MCP | ✅ |
| Chỉ tìm mẫu prompt cộng đồng | → [prompts.chat](prompts-chat.md) |
| Skill ngắn gọn / anti-slop trong IDE | → [Caveman](caveman.md) · [StopSlop](stop-slop.md) |

## Chạy thử

```bash
# online (pure frontend, data local browser)
# https://prompt.always200.com

# Docker / source — xem docs deploy trong README
git clone https://github.com/linshenkx/prompt-optimizer.git
cd prompt-optimizer
# npm/pnpm theo README · hoặc Docker Compose
# MCP: hướng dẫn “MCP Deployment Guide” upstream
```

Optional `ACCESS_PASSWORD` khi deploy public.

## So với tool khác

| | Prompt Optimizer | prompts.chat | Caveman |
|--|------------------|--------------|---------|
| Việc chính | Optimize + test + eval | Browse / library | Skill nén output |
| MCP | ✅ | ✅ | ✅ |
| Self-host UI | ✅ Docker/Vercel | ✅ | N/A (skill file) |
| License | AGPL-3.0 | MIT+CC0 | (xem repo) |

## Odoo / ai_core

Lab prompt system/few-shot trước khi đưa vào `xb_ai` / template; export favorite → dán Odoo. AGPL nếu fork/ship kèm — kiểm compliance. MCP attach agent ngoại vi, không thay session Odoo.

## Link

- Repo: https://github.com/linshenkx/prompt-optimizer · Demo: https://prompt.always200.com  
- Gần: [prompts.chat](prompts-chat.md) · [Caveman](caveman.md) · [StopSlop](stop-slop.md) · [Taste Skill](taste-skill.md)
