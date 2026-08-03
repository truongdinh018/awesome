---
name: write-vn-article
description: Viết bài tiếng Việt dễ hiểu cho một repo trong Awesome AI catalog (giữ thuật ngữ Anh).
category: awesome-ai
source: awesome-ai
tags: [writing, catalog, vietnamese]
---

# Viết bài catalog ★

Viết / sửa bài trong `technologies/<domain>/<slug>.md` theo chuẩn Awesome AI.

## Trước khi viết

1. Đọc `technologies/WRITING.md` và 1–2 bài peer cùng subgroup.
2. Xác định domain (7 màu) + tags từ `TAGS.md`.
3. Không bịa star count / license — lấy từ README hoặc GitHub API.

## Cấu trúc bài

1. Tiêu đề H1 ngắn (tên tool)
2. Blockquote meta: Repo · Category · Tags · Ngôn ngữ / ⭐ / License
3. **Đây là gì?** — 1–3 đoạn tiếng Việt, giữ thuật ngữ Anh (API, LLM, RAG, MCP, skill…)
4. **Dùng khi nào?** — bảng nhu cầu → gợi ý
5. **Chạy thử** — lệnh cài / demo tối thiểu
6. **So với tool khác** — 2–3 peers (link relative `.md`)
7. **Dùng với Odoo / ai_core** (nếu phù hợp) hoặc bỏ qua
8. **Link** — repo upstream + peers

## Giọng văn

- Tiếng Việt dễ hiểu, không marketing rỗng.
- Mỗi ★ = 1 repo đã star + 1 bài có nội dung thật.
- Tags trong backticks: `` `skill` `` `` `mcp` ``

## Sau khi viết

- Cập nhật `repos/README.md`, `CHANGELOG.md`, taxonomy nếu cần.
- Chạy `cd site && npm run index:search:meta` nếu thêm bài mới.
