# FreeCAD (CLI-Anything harness)

> **Parent:** [CLI-Anything](../cli-anything.md)  
> **Domain:** Image & Video · CAD / 3D  
> **Tags:** `harness` · `cad` · `cli`  
> **Type:** Agent-native CLI harness  
> **Path:** [`freecad/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/freecad/agent-harness)

## Tổng quan

Harness biến **FreeCAD** thành CLI agent điều khiển được — CAD parametric, model 3D, demo Curiosity Rover (preview / live preview / trajectory).

Không thay FreeCAD GUI; expose lệnh có cấu trúc + skill để agent build artifact.

## Agent làm gì được

- Tạo / chỉnh solid, assembly qua CLI  
- Export mesh / STEP  
- Vòng preview — agent iterate theo ảnh/preview loop  

## Quan hệ catalog

| | Vai trò |
|--|---------|
| **Cha** | CLI-Anything — generator + Hub |
| **Domain** | Cùng nhóm visual/3D với Blender, Godot |
| **Không nhầm** | Midscene (click UI) — FreeCAD dùng CLI deterministic |

## Link

- Upstream: https://www.freecad.org  
- Harness: https://github.com/HKUDS/CLI-Anything/tree/main/freecad/agent-harness  
- Hub: `cli-hub install …` (xem [clianything.cc](https://clianything.cc/))
