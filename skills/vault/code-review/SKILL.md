---
name: code-review
description: Review diff/PR tập trung vào đúng đắn, regression, bảo mật, và khả năng bảo trì — không nitpick style.
category: engineering
source: awesome-ai
tags: [review, engineering, quality]
---

# Code Review

## Mục tiêu

Đánh giá thay đổi code theo thứ tự ưu tiên:

1. **Correctness** — logic sai, edge case, race, null
2. **Regression** — ảnh hưởng API / data / UI hiện có
3. **Security** — injection, secrets, authz, path traversal
4. **Maintainability** — abstraction thừa, dead code, naming gây hiểu nhầm
5. Style — chỉ khi lệch guide repo rõ ràng

## Quy trình

1. Đọc mô tả PR / commit message trước.
2. Xem diff theo file; ưu tiên entrypoint, API public, schema.
3. Chạy / đề xuất test tối thiểu nếu thiếu.
4. Viết feedback: **Blocker** · **Should** · **Nit** — mỗi điểm có file/line và lý do.

## Output

- Tóm tắt 2–4 câu: thay đổi làm gì, rủi ro chính.
- Danh sách findings theo mức.
- Verdict: Approve / Request changes / Comment.
