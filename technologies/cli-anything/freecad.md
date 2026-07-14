# FreeCAD (CLI-Anything harness)

> **Parent:** [CLI-Anything](../cli-anything.md)  
> **Domain:** Image & Video · CAD / 3D  
> **Tags:** `harness` · `cad` · `cli`  
> **Type:** Agent-native CLI harness  
> **Path:** [`freecad/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/freecad/agent-harness)

## Đây là gì?

Harness biến **FreeCAD** thành CLI agent điều khiển được — CAD parametric, model 3D, demo Curiosity Rover (preview / live preview / trajectory).

Không thay FreeCAD GUI; expose lệnh có cấu trúc + skill để agent build artifact. Không nhầm [Midscene](../midscene.md) (click UI) — FreeCAD dùng CLI deterministic.

**Cùng kiểu:** [Blender](blender.md) (3D render), [Godot](godot.md) (realtime), [CLI-Anything](../cli-anything.md) (cha).

## Dùng khi nào?

| Nhu cầu | FreeCAD harness |
|---------|-----------------|
| Tạo / chỉnh solid, assembly qua CLI | ✅ |
| Export mesh / STEP | ✅ |
| Vòng preview — agent iterate theo ảnh/preview loop | ✅ |
| Vision click UI | → [Midscene](../midscene.md) |

## Chạy thử

```bash
# Harness: https://github.com/HKUDS/CLI-Anything/tree/main/freecad/agent-harness
# Hub: cli-hub install … — xem https://clianything.cc/
# Cần FreeCAD cài local
```

## So với tool khác

| | FreeCAD harness | Blender harness | Midscene |
|--|-----------------|-----------------|----------|
| Domain | CAD parametric | 3D render | Vision UI |
| Deterministic CLI | ✅ | ✅ | ❌ |
| Tags | `harness` `cad` `cli` | `harness` `3d` `cli` | `computer-use` `skill` |

## Dùng với Odoo / ai_core

- CAD asset cho manufacturing demo (export STEP).  
- Agent iterate design qua preview loop.  
- Không thay PLM/MRP — creative/engineering sidecar.

## Link

- Upstream: https://www.freecad.org  
- Harness: https://github.com/HKUDS/CLI-Anything/tree/main/freecad/agent-harness  
- Hub: https://clianything.cc/
