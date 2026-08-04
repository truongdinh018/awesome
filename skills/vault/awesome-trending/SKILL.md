---
name: awesome-trending
description: Cập nhật repo AI trending hàng tuần cho Awesome AI catalog — fetch GitHub, tạo bài tiếng Việt, commit/PR.
category: awesome-ai
source: awesome-ai
tags: [trending, github, automation, catalog]
---

# Awesome AI — Weekly Trending

Khi được gọi để **cập nhật repo trending tuần này**, làm theo thứ tự.

## 1. Fetch dữ liệu GitHub

```bash
cd site
GITHUB_TOKEN="$GITHUB_TOKEN" npm run fetch:trending
```

- Không có token vẫn chạy được nhưng dễ bị rate limit.

## 2. (Tuỳ chọn) Tạo bài cho repo trending mới

```bash
MAX_CREATE=8 npm run trending:create-articles
npm run index:search:meta
```

## 3. Kiểm tra output

| File | Mục đích |
|------|----------|
| `site/public/data/trending-week.json` | Dữ liệu web UI (menu Trending) |
| `data/trending/weeks/YYYY-Www.json` | Snapshot theo tuần |
| `data/trending/pending.md` | Repo mới chưa có bài |

## 4. Commit & push

```bash
git add data/trending/ site/public/data/trending-week.json
git add technologies/ repos/README.md CHANGELOG.md site/public/data/ 2>/dev/null || true
git commit -m "chore(trending): cập nhật repo trending tuần $(date -u +%G-W%V)"
git push -u origin HEAD
```

Mở PR vào `main`, title `chore(trending): cập nhật repo trending tuần YYYY-Www`.

Nếu không có thay đổi: báo cáo "Không có repo trending mới tuần này" và dừng.

## 5. Báo cáo

- Tuần (YYYY-Www), số repo mới, số repo đã có bài
- 3–5 repo nổi bật (tên + lý do)
- Link PR (nếu có)

## Tham khảo

- `site/scripts/fetch-trending.mjs`
- `site/scripts/create-trending-articles.mjs`
- `data/trending/README.md`
- `data/trending/CURSOR-AUTOMATION.md`
