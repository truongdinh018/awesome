# Trending tuần này

Dữ liệu repo trending AI được cập nhật **tự động mỗi thứ Hai** qua GitHub Actions (`.github/workflows/update-trending.yml`).

## Cách hoạt động

1. Script `site/scripts/fetch-trending.mjs` tìm repo AI trên GitHub (topic: AI/LLM/MCP…) đã push trong 7 ngày.
2. So sánh với catalog hiện có (`technologies/**/*.md`, `repos/README.md`).
3. **Repo mới** → thêm vào `data/trending/pending.md` (hàng chờ viết bài).
   - Tùy chọn: `npm run trending:create-articles` — tạo bài tiếng Việt + dòng `repos/README.md` (mặc định tối đa 8 repo/lần, đặt `MAX_CREATE=25` nếu cần).
   - Hoặc `CREATE_ARTICLES=1 npm run fetch:trending` để fetch xong rồi tạo bài luôn.
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
