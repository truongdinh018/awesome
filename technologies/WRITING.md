# Chuẩn viết bài `technologies/<domain>/<slug>.md`

> Mục tiêu: đọc nhanh bằng **tiếng Việt dễ hiểu**, vẫn **giữ nguyên thuật ngữ tiếng Anh** (LLM, API, RAG, MCP…).

## Cấu trúc bắt buộc

```markdown
# Tên công nghệ

> metadata (Repo / Category / Tags / ⭐ / License) — giữ ngắn

## Đây là gì?
(2–4 đoạn ngắn. Câu đầu = “là gì”. Tiếp theo = làm gì / khác biệt. Peer ở cuối.)

## Dùng khi nào?
(bảng: nhu cầu tiếng Việt | ✅ hoặc → tool khác)

## Chạy thử
(code / lệnh tối thiểu — comment tiếng Việt được)

## So với tool khác
(bảng so sánh ngắn)

## Dùng với Odoo / ai_core
(3 bullet thực tế)

## Link
```

## Ngôn ngữ

| Nên | Tránh |
|-----|--------|
| Câu ngắn, 1 ý / câu | Đoạn một dòng đặc đặc Anh–Việt |
| Giải thích trước, thuật ngữ sau: `máy chủ suy luận (inference server)` | Chỉ liệt kê buzzword |
| Giữ tên kỹ thuật Anh: API, token, VRAM, cluster, OpenAI-compatible | Dịch gượng: “giao diện lập trình ứng dụng” thay vì API |
| Bảng nhu cầu dùng tiếng Việt đời thường | “OpenAI-compat local API” không giải thích |

## Mẫu “Đây là gì?”

```markdown
**Cake** là máy chủ chạy mô hình AI viết bằng Rust (*inference server*).

Bạn dùng nó để: chat (text), tạo ảnh (Stable Diffusion / FLUX), và đọc chữ thành tiếng (TTS, kể cả *voice clone*).

Đặc biệt: nếu **một GPU không đủ VRAM**, Cake có thể **chia model** (*shard*) sang nhiều máy hoặc điện thoại trong một *cluster* (Linux, macOS, Windows, iOS, Android). Có API kiểu OpenAI, kèm web UI và TUI.

**Cùng kiểu:** [exo](devtools/exo.md) (cụm Mac/MLX), [LocalAI](devtools/localai.md) (engine nhiều backend)…

> Peer cùng domain: `exo.md` (cùng folder) hoặc `../devtools/exo.md` từ domain khác.
```

## Khi cập nhật

1. Viết/đổi `Đây là gì?` trước — người đọc chỉ cần đoạn này cũng hiểu.
2. Không xóa Tags / peer / lệnh chạy thật.
3. License / disclaimer giữ nguyên nội dung kỹ thuật, diễn giải Việt nếu dài.
4. **Thêm ★ mới** → làm checklist ở hub: [../README.md](../README.md#add-star-checklist) (repos + categories + counts + CHANGELOG).
5. Taxonomy: [../categories/README.md](../categories/README.md) · Stars: [../repos/README.md](../repos/README.md) · Changelog: [../CHANGELOG.md](../CHANGELOG.md)
