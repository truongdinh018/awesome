# Hướng dẫn Cloud Agent — Awesome AI

## Cập nhật trending hàng tuần (Cursor Automation)

Khi được gọi để **cập nhật repo trending tuần này**, làm theo thứ tự:

### 0. Đồng bộ main trước (tránh conflict PR)

```bash
git fetch origin main
git merge origin/main   # hoặc rebase nếu branch sạch
# Nếu conflict ở site/public/data/search.sqlite hoặc articles-status.json:
rm -f site/public/data/search.sqlite site/public/data/articles-status.json
cd site && npm run index:search:meta && cd ..
git add site/public/data/ && git commit --no-edit
```

- `search.sqlite` / `articles-status.json` là **file generated** — không merge tay, luôn regenerate.
- Các file khác (README, CHANGELOG, bài mới trên main) thường auto-merge được.

### 1. Fetch dữ liệu GitHub

```bash
cd site
GITHUB_TOKEN="$GITHUB_TOKEN" npm run fetch:trending
```

- `GITHUB_TOKEN` lấy từ **Cursor Dashboard → Cloud Agents → Secrets** (PAT có quyền `public_repo` hoặc repo private).
- Không có token vẫn chạy được nhưng dễ bị rate limit GitHub API.
- **Chạy ~2–3 phút** — đợi hoàn tất, không background rồi dừng agent giữa chừng.

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

## Tránh fail automation

| Nguyên nhân | Cách xử lý |
|-------------|------------|
| Agent timeout sau `fetch:trending` (~2 phút) | Chạy hết pipeline trong **một run**; không dừng sau bước 1 |
| PR conflict với main | Bước 0: merge main + regenerate index trước khi push |
| Conflict `search.sqlite` (binary) | Xóa file → `npm run index:search:meta` → commit |
| Bài đã tạo nhưng chưa commit | `git status` kiểm tra `technologies/` untracked → add + commit |
| GitHub Actions billing lock | Deploy tay lên `gh-pages` (bước 5) |

## Tham khảo

- Script: `site/scripts/fetch-trending.mjs`
- Tạo bài: `site/scripts/create-trending-articles.mjs`
- Docs: `data/trending/README.md`
- Thiết lập automation UI: `data/trending/CURSOR-AUTOMATION.md`
