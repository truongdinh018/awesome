# Stop Slop

> **Repo:** [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop)  
> **Category:** MCP & AI Agents · Skill gỡ “AI tells” khỏi văn xuôi  
> **Tags:** `skill` · `coding-agent` · `prompt`  
> **Ngôn ngữ:** SKILL.md / Markdown · **⭐** ~13.8k · **License:** MIT  
> Author: [Hardik Pandya](https://hvpandya.com)

## Đây là gì?

**Stop Slop** là *Agent Skill* dạy LLM (Claude, Cursor, …) **nhận và xóa** lối viết AI điển hình: câu mở họng, jargon, nhịp máy, cấu trúc “không X mà là Y”, giọng narrator từ xa.

Kèm `references/` — phrases cấm, cấu trúc tránh, ví dụ before/after — và thang điểm 5 chiều (Directness · Rhythm · Trust · Authenticity · Density); dưới 35/50 thì sửa lại.

**Cùng kiểu:** [Caveman](caveman.md) (nói ngắn / tiết token), [Taste Skill](taste-skill.md) (anti-slop **UI**), [Ponytail](ponytail.md) (YAGNI code), [prompts.chat](prompts-chat.md) (thư viện prompt).

## Dùng khi nào?

| Nhu cầu | Stop Slop |
|---------|-----------|
| Draft / edit prose nghe “giống ChatGPT” | ✅ gắn `SKILL.md` |
| Review copy blog, email, changelog tiếng Anh | ✅ + `references/phrases.md` |
| Agent trả lời ngắn để tiết token | → [Caveman](caveman.md) |
| Anti-slop layout frontend | → [Taste Skill](taste-skill.md) |
| Ít code hơn (YAGNI) | → [Ponytail](ponytail.md) |

## Chạy thử

```bash
# Claude Code — thêm folder skill
# Copy/clone repo → Skills → stop-slop/

# Cursor / Project knowledge — upload SKILL.md + references/
git clone https://github.com/hardikpandya/stop-slop.git

# API / system prompt — nhúng nội dung SKILL.md; load references khi cần
```

Trước khi giao prose: diệt adverb · passive · “here's what…” · em dash · câu Wh- mở đầu · binary “not X, it's Y”.

## So với tool khác

| | Stop Slop | Caveman | Taste Skill |
|--|-----------|---------|-------------|
| Niche | Prose / AI writing tells | Output ngắn, tiết token | Frontend visual taste |
| Output | Văn xuôi “người hơn” | Reply ngắn vẫn đúng code | UI anti-boilerplate |
| Tags | `skill` `prompt` | `skill` `prompt` `mcp` | `skill` `prompt` `image-gen` |

## Dùng với Odoo / ai_core

- Changelog / README module / release notes — tránh giọng marketing AI.  
- Prompt system của agent chat khách hàng: gắn rule Stop Slop hoặc rút gọn phrases.  
- **Không** áp dụng máy móc lên văn bản pháp lý / bản dịch chính thức nếu style guide nội bộ khác.

## Link

- Repo: https://github.com/hardikpandya/stop-slop  
- Peers: [caveman.md](caveman.md) · [taste-skill.md](taste-skill.md) · [ponytail.md](ponytail.md) · [prompts-chat.md](prompts-chat.md) · [skill-registries.md](../bookmarks/skill-registries.md)
