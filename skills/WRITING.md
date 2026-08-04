# Thêm skill vào vault

## Checklist

1. Tạo thư mục `skills/vault/<skill-id>/` — `skill-id` = kebab-case, không dấu.
2. Viết `SKILL.md` với frontmatter:

```yaml
---
name: skill-id
description: Một câu — agent dùng để quyết định có load skill không.
category: awesome-ai | engineering | notion | other
source: awesome-ai | cursor-notion-plugin | upstream-url
tags: [tag1, tag2]
---
```

3. Body Markdown: mục tiêu, bước làm, lệnh, anti-pattern.
4. Chạy index:

```bash
cd site && npm run index:skills
```

5. Kiểm tra UI `?skills=1` (dev server).

## Nguyên tắc

- **Một skill = một việc.** Không nhồi workflow dài không liên quan.
- `description` phải đủ để agent match — viết tiếng Anh hoặc song ngữ ngắn.
- Không commit secret / token / dữ liệu cá nhân trong skill.
- Skill mirror từ upstream: ghi rõ `source` và giữ license/attribution.
