# Trending tuần này

Dữ liệu repo trending AI được cập nhật **tự động mỗi thứ Hai** qua GitHub Actions (`.github/workflows/update-trending.yml`).

## Cách hoạt động

1. Script `site/scripts/fetch-trending.mjs` tìm repo AI trên GitHub (topic: AI/LLM/MCP…) đã push trong 7 ngày.
2. So sánh với catalog hiện có (`technologies/**/*.md`, `repos/README.md`).
3. **Repo mới** → thêm vào `data/trending/pending.md` (hàng chờ viết bài).
4. **Repo đã có bài** → ghi nhận điểm mới: tăng ★, release, push code gần đây.
5. Lưu snapshot tuần vào `data/trending/weeks/YYYY-Www.json` và `site/public/data/trending-week.json` cho web.

## Chạy thủ công

```bash
cd site
GITHUB_TOKEN=ghp_... npm run fetch:trending
```

Không có token vẫn chạy được nhưng bị giới hạn 60 request/giờ của GitHub API.

## Xem trên web

Mở catalog → menu **Trending** (hoặc `?trending=1`).

## Tự động trong Cursor (khuyến nghị)

Xem hướng dẫn chi tiết: [CURSOR-AUTOMATION.md](./CURSOR-AUTOMATION.md)

Tóm tắt: tạo automation tại [cursor.com/automations/new](https://cursor.com/automations/new) — cron `0 6 * * 1`, repo `main`, prompt đọc `AGENTS.md`.

## GitHub Actions (tuỳ chọn / backup)

Workflow `.github/workflows/update-trending.yml` — có thể tắt nếu chỉ dùng Cursor Automation.
