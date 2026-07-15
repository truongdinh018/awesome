# OpenToonz

> **Repo:** [opentoonz/opentoonz](https://github.com/opentoonz/opentoonz)  
> **Category:** Image & Video · Desktop 2D animation (production)  
> **Tags:** `video` · `desktop` · `self-host`  
> **Ngôn ngữ:** C++ · Qt · **⭐** ~7.4k · **License:** Modified BSD (+ thirdparty — xem LICENSE.txt)  
> Site: [opentoonz.github.io](https://opentoonz.github.io/)

## Đây là gì?

**OpenToonz** là phần mềm **animation 2D đầy đủ tính năng** (open-source, DWANGO): dựa trên **Toonz Studio Ghibli Version** — Digital Video + tùy biến Studio Ghibli dùng trong sản xuất.

Timeline, paperless drawing, scan/digital ink & paint, FX, xsheet kiểu studio — **không phải AI generator**. Dùng khi cần pipeline cutout/hand-drawn cổ điển thay vì gen video bằng model.

**Cùng kiểu:** [Toonflow](toonflow.md) (AI novel→drama — khác stack), [Recordly](recordly.md) (screen demo), [FreeCut](freecut.md) (NLE browser), [ComfyUI](comfyui.md) (gen frame AI), [O3DE](o3de.md) / [Blender](../cli-anything/blender.md) (3D engine / harness).

## Dùng khi nào?

| Nhu cầu | OpenToonz |
|---------|-----------|
| Làm animation 2D desktop (xsheet, ink & paint) | ✅ |
| Tool Ghibli / Toonz-style production | ✅ |
| Novel → short drama bằng agent | → [Toonflow](toonflow.md) |
| Edit clip + STT/TTS trong browser | → [FreeCut](freecut.md) |
| Gen ảnh/frame bằng diffusion | → [ComfyUI](comfyui.md) |

## Chạy thử

```bash
# Cài installer Win / macOS / Linux:
# https://opentoonz.github.io/e/index.html
# Releases: https://github.com/opentoonz/opentoonz/releases

# Build từ source — xem doc Windows / macOS / Linux trong repo
```

Nightly / bản cũ trên GitHub Releases. Docs cộng đồng: forum Google OpenToonz Users.

## So với tool khác

| | OpenToonz | Toonflow | FreeCut |
|--|-----------|----------|---------|
| Niche | 2D animation studio cổ điển | AI short-drama factory | Browser NLE |
| AI built-in | ❌ | ✅ agents | STT/TTS phụ |
| Platform | Desktop C++/Qt | Electron | Web |

## Dùng với Odoo / ai_core

- Export frame/anim cho docs product / training video thủ công.  
- Pipeline hybrid: gen style frame bằng Comfy → cleanup/timing trong OpenToonz.  
- Không thay agent video gen — là workstation sáng tạo.

## Link

- Repo: https://github.com/opentoonz/opentoonz · Site: https://opentoonz.github.io/  
- Peers: [toonflow.md](toonflow.md) · [recordly.md](recordly.md) · [freecut.md](freecut.md) · [comfyui.md](comfyui.md) · [blender.md](../cli-anything/blender.md)
