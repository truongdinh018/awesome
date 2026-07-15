# Chili3D

> **Repo:** [xiangechen/chili3d](https://github.com/xiangechen/chili3d)  
> **Category:** Image & Video · Browser 3D CAD (OCCT WASM)  
> **Tags:** `cad` · `3d` · `browser` · `self-host`  
> **Ngôn ngữ:** TypeScript · **⭐** ~4.7k · **License:** AGPL-3.0  
> Site: [chili3d.com](https://chili3d.com) · Demo: [chili3d.pages.dev](https://chili3d.pages.dev)

## Đây là gì?

**Chili3D** là **ứng dụng CAD 3D chạy trong trình duyệt**: thiết kế / chỉnh sửa mô hình online, không cần cài desktop. Core hình học **OpenCascade (OCCT)** biên dịch **WebAssembly**, render **Three.js** — gần tốc độ native trên web.

Có sketch 2D, solid cơ bản, boolean / extrude / revolve / sweep / loft, fillet·chamfer, snap & track, đo đạc; import/export **STEP · IGES · BREP**; undo/redo. UI kiểu office, i18n EN/ZH. Đang **alpha** — API có thể đổi.

**Cùng kiểu:** [FreeCAD harness](../cli-anything/freecad.md) (CAD desktop + agent CLI), [Blender harness](../cli-anything/blender.md) (DCC 3D), [O3DE](o3de.md) (game/sim engine — khác CAD).

## Dùng khi nào?

| Nhu cầu | Chili3D |
|---------|---------|
| CAD 3D ngay trong browser / self-host web | ✅ primary |
| Sketch + solid + STEP/IGES | ✅ |
| Agent CLI điều khiển FreeCAD/Blender | → [FreeCAD](../cli-anything/freecad.md) / [Blender](../cli-anything/blender.md) |
| Game / sim realtime engine | → [O3DE](o3de.md) / [Godot](../cli-anything/godot.md) |
| Sản xuất CAD commercial (stable API) | ⚠️ alpha + AGPL — cân nhắc license |

## Chạy thử

Online: [chili3d.com](https://chili3d.com) hoặc [chili3d.pages.dev](https://chili3d.pages.dev).

```bash
git clone https://github.com/xiangechen/chili3d.git
cd chili3d
npm install
npm run dev   # http://localhost:8080
# npm run build
# WASM tự build: npm run setup:wasm && npm run build:wasm
```

Self-host: build static rồi serve; repo dùng Microsoft Clarity trên bản public — tắt trong `public/index.html` nếu không muốn analytics.

## So với tool khác

| | Chili3D | FreeCAD (upstream) | Blender |
|--|---------|-------------------|---------|
| Shape | Web CAD (OCCT WASM) | Desktop parametric CAD | DCC / 3D content |
| Runtime | Browser · self-host | Desktop | Desktop |
| Agent harness sẵn | ❌ | ✅ CLI-Anything | ✅ CLI-Anything |
| License | AGPL-3.0 | LGPL | GPL/BL |

## Dùng với Odoo / ai_core

- Preview / chỉnh STEP từ PLM / đính kèm kỹ thuật trên web — không thay module MRP/engineering Odoo.
- Self-host cạnh gateway nội bộ nếu cần CAD nhẹ cho team; chú ý AGPL khi redistribute.
- Agent CAD: ưu tiên harness FreeCAD/Blender; Chili3D chủ yếu UI người dùng.

## Link

- Repo: https://github.com/xiangechen/chili3d · Site: https://chili3d.com  
- Pages: https://chili3d.pages.dev · Discussions: GitHub Discussions  
- Peers: [freecad.md](../cli-anything/freecad.md) · [blender.md](../cli-anything/blender.md) · [o3de.md](o3de.md) · [godot.md](../cli-anything/godot.md)
