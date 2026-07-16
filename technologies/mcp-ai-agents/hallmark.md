# Hallmark

> **Repo:** [Nutlope/hallmark](https://github.com/Nutlope/hallmark)  
> **Category:** MCP & AI Agents · Frontend design skill (anti-slop)  
> **Tags:** `skill` · `coding-agent` · `prompt`  
> **Ngôn ngữ:** CSS / HTML / JS · SKILL.md · **⭐** ~8.9k · **License:** MIT  
> Site: [usehallmark.com](https://www.usehallmark.com/) · Together AI (Hassan / Nutlope)

## Đây là gì?

**Hallmark** là **design skill** cho Claude Code, Cursor, Codex — mục tiêu: UI **không** trông như AI-generated (*anti-AI-slop*).

Skill chọn **macrostructure** theo brief, mặc **một trong ~20 theme** (hoặc **Custom** khi brief đặc biệt), chạy **57 slop-test gates** + self-critique trước khi emit. Hai brief khác nhau → hai “vân tay” trang khác nhau, không chỉ đổi màu template.

Bốn verb: build (mặc định) · `audit` · `redesign` · `study` (screenshot/URL → DNA thiết kế / `design.md`).

**Cùng kiểu:** [Taste Skill](taste-skill.md) (anti-slop frontend + imagegen), [Stop Slop](stop-slop.md) (anti-slop **prose**), [HTML Anything](../image-video/html-anything.md) / [Huashu Design](../image-video/huashu-design.md) (HTML agentic).

## Dùng khi nào?

| Nhu cầu | Hallmark |
|---------|----------|
| Landing / hero HTML mới, tránh look AI | ✅ default build |
| Chấm UI hiện có (không sửa) | ✅ `hallmark audit` |
| Giữ copy/IA/brand, đổi cấu trúc | ✅ `hallmark redesign` |
| Học DNA từ site/screenshot | ✅ `hallmark study` |
| Bộ skill frontend rộng + imagegen | → [Taste Skill](taste-skill.md) |
| Chỉ sạch văn bản AI | → [Stop Slop](stop-slop.md) |

## Chạy thử

```bash
npx skills add nutlope/hallmark

# Hoặc copy SKILL.md + references/ vào:
# Claude Code: ~/.claude/skills/hallmark/
# Cursor:      .cursor/rules/hallmark.mdc  (body SKILL.md, bỏ frontmatter)
# Codex:       ~/.codex/skills/hallmark/
```

Demo / examples: https://www.usehallmark.com/ · recipes trong `docs/recipes.md`.

## So với tool khác

| | Hallmark | Taste Skill | Stop Slop |
|--|----------|-------------|-----------|
| Focus | Design system + slop gates UI | Taste dials + imagegen | Prose anti-slop |
| Themes | ~20 + Custom | Soft/minimal/brutalist… | — |
| Study DNA | ✅ `study` | Redesign audit | ❌ |
| Tags | `skill` `prompt` | `skill` `image-gen` | `skill` `prompt` |

## Dùng với Odoo / ai_core

- Landing / portal page Odoo Website: generate HTML rồi nhúng snippet / QWeb.  
- `audit` trước khi ship UI AI-generated trong Studio / website.  
- Kết hợp [taste-skill.md](taste-skill.md) nếu cần image comps trước khi code OWL.

## Link

- Repo: https://github.com/Nutlope/hallmark  
- Site: https://www.usehallmark.com/  
- Peers: [taste-skill.md](taste-skill.md) · [stop-slop.md](stop-slop.md) · [html-anything.md](../image-video/html-anything.md) · [huashu-design.md](../image-video/huashu-design.md) · [agent-skills.md](agent-skills.md)
