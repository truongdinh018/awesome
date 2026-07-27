---
name: create-weekly-trending-automation
description: Tạo Cursor Automation cập nhật repo trending hàng tuần. Dùng khi user muốn bật tự động trending trong Cursor.
disable-model-invocation: true
---

# Tạo automation Weekly AI Trending

User muốn automation Cursor chạy **mỗi thứ Hai 06:00 UTC** để cập nhật repo trending.

## Bước 1 — Kiểm tra secret

Nhắc user thêm secret `GITHUB_TOKEN` tại [Cloud Agents → Secrets](https://cursor.com/dashboard/cloud-agents) (GitHub PAT, quyền đọc repo).

## Bước 2 — Tạo automation bằng skill `/automate`

Gọi hoặc hướng dẫn user chạy skill **`/automate`** với nội dung sau (copy nguyên văn):

```
Tạo automation tên "Weekly AI trending" với các thiết lập:

- Trigger: scheduled cron "0 6 * * 1" (thứ Hai 06:00 UTC)
- Repository: truongdinh018/awesome, branch main
- Tools: bật Pull request creation
- Secret: dùng GITHUB_TOKEN từ Cloud Agents Secrets

Instructions (prompt):
---
Cập nhật repo AI trending tuần này cho Awesome AI catalog.

Đọc AGENTS.md (mục "Cập nhật trending hàng tuần") và làm đúng:
1. cd site && GITHUB_TOKEN="$GITHUB_TOKEN" npm run fetch:trending
2. Commit data/trending/ và site/public/data/trending-week.json
3. Push và mở PR vào main (title: chore(trending): cập nhật repo trending tuần YYYY-Www)

Báo cáo: tuần, số repo mới/đã có bài, top 5 nổi bật.
Không viết bài technologies mới.
---

Sau khi tạo, bật automation và chạy Test run một lần.
```

## Bước 3 — Xác nhận

Sau khi automation được tạo, nhắc user:
- Mở [cursor.com/automations](https://cursor.com/automations) để xem trạng thái
- Định nghĩa trong repo: `.cursor/automations/weekly-ai-trending/AUTOMATION.md`
- Có thể tắt GitHub Actions schedule nếu chỉ dùng Cursor

## Nếu `/automate` không khả dụng

Hướng dẫn tạo thủ công tại [cursor.com/automations/new](https://cursor.com/automations/new) — chi tiết trong `data/trending/CURSOR-AUTOMATION.md`.
