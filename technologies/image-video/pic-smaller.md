# Pic Smaller

> **Repo:** [joye61/pic-smaller](https://github.com/joye61/pic-smaller)  
> **Category:** Image & Video · Nén ảnh batch trên browser  
> **Tags:** `browser` · `self-host` · `cli`  
> **Ngôn ngữ:** TypeScript · Next.js · **⭐** ~2.8k · **License:** MIT  
> **Site:** [picsmaller.com](https://picsmaller.com)

## Đây là gì?

**Pic Smaller** (图小小) là công cụ **nén ảnh hàng loạt** chạy hết trong **trình duyệt**: Web Worker, WASM, Canvas, codec trình duyệt. File **không upload** lên server app. JPEG, PNG, WebP, GIF, SVG, AVIF; decode HEIC/HEIF local; đổi format, resize, crop, so sánh split, tải từng file hoặc ZIP.

Có bản Desktop proprietary (AI remove BG/watermark, upscale) — catalog chỉ ★ **web OSS**. Self-host: `npm run dev` / Docker (Next standalone).

**Cùng kiểu:** [Stirling-PDF](../devtools/stirling-pdf.md) (nén/sửa PDF self-host), [SnapDOM](../devtools/snapdom.md) (capture DOM → ảnh), [ChronoFrame](../devtools/chronoframe.md) (gallery self-host).

## Dùng khi nào?

| Nhu cầu | Pic Smaller |
|---------|-------------|
| Nén JPEG/PNG/WebP/AVIF/GIF/SVG, không gửi cloud | ✅ browser / self-host |
| HEIC → JPEG/WebP local | ✅ |
| Nén / OCR / merge PDF | → [Stirling-PDF](../devtools/stirling-pdf.md) |
| Gallery album ảnh | → [ChronoFrame](../devtools/chronoframe.md) |
| Sinh ảnh AI | → [ComfyUI](comfyui.md) |

## Chạy thử

Hosted: [picsmaller.com](https://picsmaller.com). Local:

```bash
git clone https://github.com/joye61/pic-smaller.git
cd pic-smaller
npm ci
npm run dev
```

Docker (bind localhost):

```bash
docker build --pull -t pic-smaller:latest .
docker run -d --name pic-smaller -p 127.0.0.1:3000:3000 pic-smaller:latest
# http://127.0.0.1:3000
```

Cần Node 22+. `npm test` / `npm run lint` khi sửa code.

## So với tool khác

| | Pic Smaller | Stirling-PDF | Squoosh (Google) |
|--|-------------|--------------|------------------|
| Vai trò | Batch nén ảnh browser | Toolkit PDF | Nén 1 ảnh (tham chiếu codec) |
| Privacy | Local WASM | Self-host file | Local |
| Tags | `browser` `self-host` | `pdf` `self-host` | — |

## Dùng với Odoo / ai_core

- Nén ảnh sản phẩm / banner trước khi lên `ir.attachment`.  
- Self-host nội bộ nếu chính sách cấm SaaS nén ảnh.  
- Không OCR — PDF scan dùng [Stirling-PDF](../devtools/stirling-pdf.md) / [MinerU](../devtools/mineru.md).

## Link

- Repo: https://github.com/joye61/pic-smaller  
- Site: https://picsmaller.com  
- Peers: [stirling-pdf.md](../devtools/stirling-pdf.md) · [snapdom.md](../devtools/snapdom.md) · [chronoframe.md](../devtools/chronoframe.md)
