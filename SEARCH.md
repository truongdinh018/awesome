# Semantic search (SQLite)

Catalog dùng **SQLite** (`site/public/data/search.sqlite`) để:

1. Lưu metadata bài viết (title, tags, excerpt, body…)
2. Đánh dấu freshness: `new` | `current` | `updated` | `removed`
3. Lưu **embeddings** để tìm theo ngữ nghĩa trên GitHub Pages (không cần server)

## Chạy index (offline)

Trong `site/`:

```bash
# Metadata + FTS + embed (lần đầu tải model ~50MB)
npm run index:search

# Chỉ metadata/FTS (nhanh, không embed)
npm run index:search:meta

# Đánh dấu mọi bài đang active thành current (bỏ badge Mới/Cập nhật)
npm run index:search:mark-current

# Embed lại toàn bộ
FORCE_EMBED=1 npm run index:search
```

Khi bạn **dừng Cursor** để máy rảnh, chạy `npm run index:search` — script chỉ embed bài **mới** hoặc **đổi nội dung** (`content_hash`).

### Freshness / update

| Tình huống khi re-index | `status` |
|-------------------------|----------|
| Path chưa có trong DB | `new` |
| Có rồi, `content_hash` đổi | `updated` (metadata + vector được cập nhật) |
| Có rồi, hash giống | giữ `new` nếu còn mới; không thì `current` |
| Có trong DB, không còn file | `removed` |
| `MARK_CURRENT=1` | mọi bài active → `current` |

Trên web: mở bài → lưu `localStorage` “đã xem” → badge ẩn với máy đó.

Artifact kèm theo: `public/data/articles-status.json` (badge nhanh, không cần đọc hết SQLite).

## Search trên web

Trong drawer **Lọc**:

- **Từ khóa** — substring như trước
- **Ngữ nghĩa** — cosine trên embedding (Transformers.js, cùng model lúc index)
- **Hybrid** — vector + keyword (LIKE trong SQLite) rồi **RRF** merge (mặc định)

Model mặc định: `Xenova/paraphrase-multilingual-MiniLM-L12-v2` (đổi bằng `EMBED_MODEL=...`).

> sql.js (WASM) không có FTS5; keyword trong DB dùng `LIKE`. Client vẫn có mode **Từ khóa** thuần.

## Schema

Xem [`site/scripts/search-schema.sql`](site/scripts/search-schema.sql).

## Deploy

Commit `public/data/search.sqlite` + `articles-status.json` rồi build/deploy Pages như bình thường. Không cần backend.
