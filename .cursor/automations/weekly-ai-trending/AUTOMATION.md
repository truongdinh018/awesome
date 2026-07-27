---
name: weekly-ai-trending
description: Cập nhật repo AI trending hàng tuần cho Awesome AI catalog
schedule: "0 6 * * 1"
timezone: UTC
repository: truongdinh018/awesome
branch: main
tools:
  - pull_request
secrets:
  - GITHUB_TOKEN
---

# Weekly AI Trending

Cập nhật dữ liệu repo AI trending trên GitHub cho catalog Awesome AI.

## Khi chạy

1. Đọc `AGENTS.md` — mục **「Cập nhật trending hàng tuần」**
2. Chạy:

```bash
cd site
GITHUB_TOKEN="$GITHUB_TOKEN" npm run fetch:trending
```

3. Commit và push:

```bash
git add data/trending/ site/public/data/trending-week.json
git commit -m "chore(trending): cập nhật repo trending tuần $(date -u +%G-W%V)"
git push -u origin HEAD
```

4. Mở PR vào `main` — title: `chore(trending): cập nhật repo trending tuần YYYY-Www`

## Báo cáo

- Tuần (YYYY-Www), số repo mới / đã có bài
- Top 5 repo nổi bật (tên + lý do)
- Link PR

## Không làm

- Không viết bài `technologies/**/*.md` mới
- Không sửa search index trừ khi được yêu cầu

## Tham khảo

- Script: `site/scripts/fetch-trending.mjs`
- Hướng dẫn UI: `data/trending/CURSOR-AUTOMATION.md`
