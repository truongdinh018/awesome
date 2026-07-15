# Caveman

> **Repo:** [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)  
> **Category:** MCP & AI Agents · Skill giúp agent nói ngắn, tiết kiệm token  
> **Tags:** `skill` · `coding-agent` · `prompt` · `cli` · `mcp`  
> **Ngôn ngữ:** Skills / plugins · JS tooling · **⭐** ~89.4k · **License:** MIT  
> Site: [caveman.so](https://caveman.so) · Hỗ trợ 30+ agent (Claude Code · Codex · Cursor · Gemini…)

## Đây là gì?

**Caveman** là *skill* / *plugin* bắt coding agent **trả lời ngắn** (kiểu “người hang đá”), nhưng **giữ nguyên** code, lệnh shell và thông báo lỗi.

Mục đích chính: giảm **output tokens** (~65% theo benchmark của tác giả — không giảm input / reasoning; bản thân skill cũng tốn ~1–1.5k token mỗi lượt). Có mức: `lite` · `full` · `ultra` · `wenyan`. Thêm lệnh `/caveman-commit`, `/caveman-review`, `/caveman-compress` (nén file kiểu `CLAUDE.md`), và **caveman-shrink** (middleware MCP nén mô tả tool).

**Cùng kiểu:** [Headroom](headroom.md) (nén *context* MCP), [Ponytail](ponytail.md) (ít code hơn — YAGNI), [Taste Skill](taste-skill.md) (gu UI), [Addy's Agent Skills](agent-skills.md).

## Dùng khi nào?

| Nhu cầu | Caveman |
|---------|---------|
| Agent nói dài → trả lời ngắn, vẫn đúng | ✅ `/caveman` |
| Commit / nhận xét PR ngắn gọn | ✅ `/caveman-commit` · `/caveman-review` |
| Nén file ghi nhớ dài hạn | ✅ `/caveman-compress` |
| Nén mô tả tool MCP | ✅ `caveman-shrink` |
| Ít code hơn (YAGNI) | → [Ponytail](ponytail.md) |
| Nén *context* prompt kiểu khác | → [Headroom](headroom.md) |

## Chạy thử

```bash
# macOS · Linux · WSL
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash
# Cursor / skills registry
npx skills add JuliusBrussee/caveman -a cursor
# Claude Code
claude plugin marketplace add JuliusBrussee/caveman && claude plugin install caveman@caveman
```

Bật: gõ `/caveman` hoặc “talk like caveman”. Tắt: “normal mode”.  
Lưu ý: nếu agent đã nói ngắn sẵn, bật Caveman đôi khi **không tiết kiệm** tổng chi phí — nên đo trước khi gắn mặc định production.

## So với tool khác

| | Caveman | Ponytail | Headroom |
|--|---------|----------|----------|
| Làm gì | Nén cách trả lời | Quy tắc ít code | Nén *context* / MCP |
| Output tokens | Mục tiêu chính | Hệ quả phụ | Tập trung input/context |
| Tags | `skill` `prompt` `mcp` | `skill` `prompt` | `mcp` `cli` |

## Dùng với Odoo / ai_core

- Chat Cursor / Claude Code dài, dễ “đốt” token.  
- **Không** dùng giọng caveman cho tin nhắn khách hàng hay tài liệu chính thức.  
- Có thể nén `CLAUDE.md` / file handoff nội bộ.

## Link

- Repo: https://github.com/JuliusBrussee/caveman  
- Peers: [ponytail.md](ponytail.md) · [headroom.md](headroom.md) · [taste-skill.md](taste-skill.md) · [agent-skills.md](agent-skills.md) · [skill-registries.md](../bookmarks/skill-registries.md)
