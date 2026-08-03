---
name: add-catalog-star
description: Checklist thêm một ★ mới vào Awesome AI — chọn domain, viết bài, cập nhật index.
category: awesome-ai
source: awesome-ai
tags: [catalog, checklist, onboarding]
---

# Checklist thêm ★ mới

## 1. Chọn domain

| Domain | Folder |
|--------|--------|
| MCP & AI Agents | `technologies/mcp-ai-agents/` |
| Speech & Audio | `technologies/speech-audio/` |
| Image & Video | `technologies/image-video/` |
| UI Automation | `technologies/ui-automation/` |
| CV & Edge | `technologies/cv-edge/` |
| DevTools | `technologies/devtools/` |
| Security | `technologies/security/` |

Bookmark (không tính ★): `technologies/bookmarks/`.

## 2. Tạo bài

- File: `technologies/<domain>/<slug>.md`
- Dùng skill `write-vn-article`
- Gắn tags đúng `TAGS.md`

## 3. Cập nhật hub

- [ ] `repos/README.md` — thêm dòng star / URL
- [ ] `CHANGELOG.md` — entry ngày
- [ ] `categories/README.md` nếu taxonomy đổi
- [ ] `USE-CASES.md` nếu use-case mới rõ ràng

## 4. Index & kiểm tra

```bash
cd site
npm run index:search:meta
npm run build
```

## Không làm

- Không thêm repo chưa star / chưa đọc README.
- Không duplicate slug đã có.
- Không nhét skill marketplace ngẫu nhiên vào ★ nếu chỉ là bookmark.
