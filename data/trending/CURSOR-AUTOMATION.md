# Thiết lập Cursor Automation — Trending hàng tuần

Cursor **không** tự import automation từ repo. Bạn tạo **một lần** tại [cursor.com/automations/new](https://cursor.com/automations/new) hoặc dùng skill `/automate` trong Cursor Desktop.

## Cách nhanh (Cursor Desktop)

Trong chat Agent, gõ:

```
/automate Tạo automation "Weekly AI trending", cron 0 6 * * 1 (thứ Hai 06:00 UTC),
repo truongdinh018/awesome branch main, bật Pull request.
Instructions: đọc data/trending/CURSOR-AUTOMATION.md và chạy workflow trending hàng tuần.
```

## Bước 1 — Secret GitHub token

1. [Dashboard → Cloud Agents → Secrets](https://cursor.com/dashboard/cloud-agents)
2. Thêm `GITHUB_TOKEN` = GitHub PAT (quyền `public_repo` hoặc đọc/ghi repo)

## Bước 2 — Environment (tuỳ chọn)

Tại [Cloud Agents → Environments](https://cursor.com/dashboard/cloud-agents#environments), tạo environment `awesome-ai`:

```json
{
  "install": "cd site && npm ci"
}
```

## Bước 3 — Tạo automation

| Trường | Giá trị |
|--------|---------|
| **Tên** | `Weekly AI trending` |
| **Trigger** | Scheduled → cron `0 6 * * 1` (thứ Hai 06:00 UTC) |
| **Repository** | `truongdinh018/awesome` — branch `main` |
| **Tools** | Bật **Pull request** |
| **Model** | Composer (mặc định) |

### Prompt (Instructions)

```markdown
Cập nhật repo AI trending tuần này cho Awesome AI catalog.

1. Fetch trending:
   cd site
   GITHUB_TOKEN="$GITHUB_TOKEN" npm run fetch:trending

2. (Tuỳ chọn) Tạo bài tiếng Việt cho repo mới — tối đa 8 repo/lần:
   MAX_CREATE=8 npm run trending:create-articles
   npm run index:search:meta

3. Commit:
   git add data/trending/ site/public/data/trending-week.json
   git add technologies/ repos/README.md CHANGELOG.md site/public/data/ 2>/dev/null || true
   git commit -m "chore(trending): cập nhật repo trending tuần $(date -u +%G-W%V)"

4. Push và mở PR vào main
   Title: chore(trending): cập nhật repo trending tuần YYYY-Www

5. Deploy GitHub Pages (Actions đang bị billing lock — build local rồi push gh-pages):
   npm run build:pages
   # copy site/dist lên nhánh gh-pages (xem lịch sử deploy trước)

Báo cáo: tuần, số repo mới/đã có bài, top 5 nổi bật, link PR.
```

## Bước 4 — Kích hoạt

Bật automation → **Test run** một lần để xác nhận PR đúng.

## Lịch chạy

| Múi giờ | Thứ Hai 06:00 UTC |
|---------|-------------------|
| Việt Nam (UTC+7) | **13:00** |

## GitHub Actions (backup)

Workflow `.github/workflows/update-trending.yml` cũng có cron `0 6 * * 1` nhưng **đang fail** do billing lock. Ưu tiên Cursor Automation cho đến khi mở khóa billing.

## Kiểm tra

Sau merge PR: https://truongdinh018.github.io/awesome/?trending=1
