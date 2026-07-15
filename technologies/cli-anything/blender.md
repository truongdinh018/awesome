# Blender (CLI-Anything harness)

> **Parent:** [CLI-Anything](../mcp-ai-agents/cli-anything.md)  
> **Domain:** Image & Video · 3D  
> **Tags:** `harness` · `3d` · `cli`  
> **Type:** Agent-native CLI harness  
> **Demo:** Orbital Relay Drone — preview / live preview / trajectory

## Đây là gì?

Harness agent cho **Blender**: scene 3D, mesh, render — agent ra lệnh CLI thay vì thao tác viewport.

Demo tiêu biểu: dựng orbital relay drone qua vòng preview. Không cần vision click UI Blender.

**Cùng kiểu:** [FreeCAD](freecad.md) (CAD), [Godot](godot.md) (realtime), [ComfyUI harness](../image-video/comfyui.md) (2D diffusion).

## Dùng khi nào?

| Nhu cầu | Blender harness |
|---------|-----------------|
| Agent tạo object, material, camera | ✅ |
| Render (EEVEE / Cycles) | ✅ |
| Iterate theo preview loop | ✅ |
| Vision click UI Blender | → [Midscene](../ui-automation/midscene.md) |

## Chạy thử

```bash
# Repo cha: https://github.com/HKUDS/CLI-Anything
# Hub: https://clianything.cc/
# Cần Blender cài local — harness expose CLI surface
```

## So với tool khác

| | Blender harness | FreeCAD harness | Midscene |
|--|-------------------|-----------------|----------|
| Domain | Offline 3D render | CAD parametric | Vision UI |
| Tags | `harness` `3d` `cli` | `harness` `cad` `cli` | `computer-use` `skill` |

## Dùng với Odoo / ai_core

- Demo 3D asset nội bộ (marketing, training).  
- Không thay pipeline DAM chính — sidecar creative.  
- Export render → `ir.attachment` nếu cần.

## Link

- Upstream: https://www.blender.org  
- Repo cha: https://github.com/HKUDS/CLI-Anything  
- Hub: https://clianything.cc/
