# Semantic search (SQLite)

Catalog dùng **SQLite** (`site/public/data/search.sqlite`) để lưu metadata, freshness (`new` / `current` / `updated` / `removed`), và embeddings — chạy trên GitHub Pages (không server).

## Model & recipe hiện tại

| | |
|--|--|
| Model | `Xenova/multilingual-e5-small` |
| Prefix | `passage: …` (index) / `query: …` (web) |
| Embed text | title + repo + domain + category + tags + excerpt (`short-e5-v1`) |
| Hybrid | RRF; câu ngắn tăng trọng số keyword (title/tag boost) |

## UX

- Model **chỉ tải khi lần đầu** search **Ngữ nghĩa / Hybrid** (không preload lúc mở catalog)
- Lúc đó hiện *“Đang tải model tìm kiếm…”* — lần sau dùng cache browser
- Sau khi sẵn sàng: meta hiện `semantic sẵn sàng`

## Audit

```bash
cd site && node --import tsx scripts/audit-search.mjs
```

(Lưu ý: audit script có thể cần cập nhật MODEL_ID nếu so sánh với MiniLM cũ.)

## Index offline

```bash
cd site
npm run index:search                 # metadata + embed
npm run index:search:meta
npm run index:search:mark-current
FORCE_EMBED=1 npm run index:search
```

Đổi `EMBED_MODEL` / `embed_recipe` → script tự re-embed.

## Search modes

- **Từ khóa** — token + whole-word + boost title/tag
- **Ngữ nghĩa** — cosine e5
- **Hybrid** — vector + keyword → RRF (mặc định)

## Schema / deploy

- `site/scripts/search-schema.sql`
- Ship `public/data/search.sqlite` + `articles-status.json` + `sql-wasm.wasm`
