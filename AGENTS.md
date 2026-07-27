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

### 2. Kiểm tra output

Script ghi các file:

| File | Mục đích |
|------|----------|
| `site/public/data/trending-week.json` | Dữ liệu cho web UI (menu Trending) |
| `data/trending/weeks/YYYY-Www.json` | Snapshot lưu trữ theo tuần |
| `data/trending/pending.md` | Repo mới chưa có bài — hàng chờ viết |

### 3. Commit & push

```bash
git add data/trending/ site/public/data/trending-week.json
git commit -m "chore(trending): cập nhật repo trending tuần $(date -u +%G-W%V)"
git push -u origin HEAD
```

- Nếu automation tạo PR: mở PR vào `main`, title `chore(trending): cập nhật repo trending tuần YYYY-Www`.
- Nếu không có thay đổi: báo cáo "Không có repo trending mới tuần này" và dừng.

### 4. Báo cáo kết quả

Tóm tắt ngắn:

- Tuần (YYYY-Www), số repo mới, số repo đã có bài
- 3–5 repo nổi bật nhất (tên + lý do trending)
- Link PR (nếu có)

### Không làm

- Không tự viết bài `technologies/**/*.md` cho repo mới (chỉ cập nhật `pending.md`).
- Không sửa catalog/search index trừ khi được yêu cầu riêng.

## Tham khảo

- Script: `site/scripts/fetch-trending.mjs`
- Docs: `data/trending/README.md`
- Thiết lập automation UI: `data/trending/CURSOR-AUTOMATION.md`
