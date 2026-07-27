# Thiết lập Cursor Automation — Trending hàng tuần

Cursor **không** tự import automation từ repo (chưa có API chính thức). Bạn tạo **một lần** bằng lệnh bên dưới.

## Cách nhanh nhất (30 giây)

Trong **Cursor Desktop** (chat Agent), gõ:

```
/create-weekly-trending-automation
```

Hoặc dùng skill built-in:

```
/automate Tạo automation "Weekly AI trending", cron 0 6 * * 1, repo truongdinh018/awesome branch main, bật PR. Instructions: đọc AGENTS.md mục cập nhật trending, chạy cd site && GITHUB_TOKEN="$GITHUB_TOKEN" npm run fetch:trending, commit data/trending và site/public/data/trending-week.json, mở PR chore(trending).
```

Định nghĩa đầy đủ trong repo: `.cursor/automations/weekly-ai-trending/AUTOMATION.md`

---

## Bước 1 — Môi trường Cloud Agent

```json
{
  "name": "awesome-ai",
  "install": "cd site && npm ci"
}
```

Vào [Cloud Agents → Environments](https://cursor.com/dashboard/cloud-agents#environments) và chọn environment **awesome-ai** (hoặc để agent dùng file trong repo).

## Bước 2 — Secret GitHub token

1. [Dashboard → Cloud Agents → Secrets](https://cursor.com/dashboard/cloud-agents)
2. Thêm secret: `GITHUB_TOKEN` = GitHub PAT (`public_repo` hoặc quyền đọc repo)

## Bước 3 — Tạo automation

Mở [cursor.com/automations/new](https://cursor.com/automations/new) và điền:

| Trường | Giá trị |
|--------|---------|
| **Tên** | `Weekly AI trending` |
| **Trigger** | Scheduled → cron `0 6 * * 1` (thứ Hai 06:00 UTC) |
| **Repository** | `truongdinh018/awesome` — branch `main` |
| **Tools** | Bật **Pull request** (hoặc push trực tiếp nếu team cho phép) |
| **Model** | Default / Composer |

### Prompt (copy vào ô Instructions)

```markdown
Cập nhật repo AI trending tuần này cho Awesome AI catalog.

Đọc AGENTS.md (mục "Cập nhật trending hàng tuần") và làm đúng các bước:
1. Chạy `cd site && GITHUB_TOKEN="$GITHUB_TOKEN" npm run fetch:trending`
2. Commit `data/trending/` và `site/public/data/trending-week.json`
3. Push và mở PR vào main (title: chore(trending): cập nhật repo trending tuần YYYY-Www)

Báo cáo ngắn: tuần, số repo mới / đã có bài, top 5 repo nổi bật.
Không viết bài technologies mới — chỉ cập nhật dữ liệu trending.
```

## Bước 4 — Kích hoạt

Bật automation → **Test run** một lần để xác nhận PR được tạo đúng.

## Cách khác — dùng `/automate` trong Cursor IDE

Trong chat agent local, gõ:

```
/automate Tạo automation chạy mỗi thứ Hai 06:00 UTC trên repo awesome,
chạy npm run fetch:trending trong site/, commit trending data và mở PR.
Đọc AGENTS.md để biết chi tiết.
```

## GitHub Actions (tuỳ chọn)

Workflow `.github/workflows/update-trending.yml` vẫn chạy song song nếu bạn muốn backup không qua Cursor. Tắt bằng cách xóa trigger `schedule` trong file đó.

## Kiểm tra trên web

Sau khi merge PR: mở catalog → menu **Trending** hoặc `?trending=1`.
