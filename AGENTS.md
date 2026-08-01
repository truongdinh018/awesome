# Hướng dẫn Cloud Agent — Awesome AI

## Cập nhật trending hàng tuần (Cursor Automation)

Khi được gọi để **cập nhật repo trending tuần này**, làm theo thứ tự:

### 1. Fetch dữ liệu GitHub

```bash
cd site
GITHUB_TOKEN="$GITHUB_TOKEN" npm run fetch:trending
```

- `GITHUB_TOKEN` lấy từ **Cursor Dashboard → Cloud Agents → Secrets** (PAT có quyền `public_repo` hoặc repo private).
- Không có token vẫn chạy được nhưng dễ bị rate limit GitHub API.

### 2. (Tuỳ chọn) Tạo bài cho repo trending mới

```bash
MAX_CREATE=8 npm run trending:create-articles
npm run index:search:meta
```

### 3. Kiểm tra output

| File | Mục đích |
|------|----------|
| `site/public/data/trending-week.json` | Dữ liệu cho web UI (menu Trending) |
| `data/trending/weeks/YYYY-Www.json` | Snapshot lưu trữ theo tuần |
| `data/trending/pending.md` | Repo mới chưa có bài — hàng chờ viết |

### 4. Commit & push

```bash
git add data/trending/ site/public/data/trending-week.json
git add technologies/ repos/README.md CHANGELOG.md site/public/data/ 2>/dev/null || true
git commit -m "chore(trending): cập nhật repo trending tuần $(date -u +%G-W%V)"
git push -u origin HEAD
```

- Mở PR vào `main`, title `chore(trending): cập nhật repo trending tuần YYYY-Www`.
- Nếu không có thay đổi: báo cáo "Không có repo trending mới tuần này" và dừng.

### 5. Deploy (nếu Actions bị billing lock)

```bash
npm run build:pages
# push site/dist lên nhánh gh-pages (build local)
```

### 6. Báo cáo kết quả

- Tuần (YYYY-Www), số repo mới, số repo đã có bài
- 3–5 repo nổi bật nhất (tên + lý do trending)
- Link PR (nếu có)

## Tham khảo

- Script: `site/scripts/fetch-trending.mjs`
- Tạo bài: `site/scripts/create-trending-articles.mjs`
- Docs: `data/trending/README.md`
- Thiết lập automation UI: `data/trending/CURSOR-AUTOMATION.md`
