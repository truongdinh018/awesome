# Blender (CLI-Anything harness)

> **Parent:** [CLI-Anything](../cli-anything.md)  
> **Domain:** Image & Video · 3D  
> **Tags:** `harness` · `3d` · `cli`  
> **Type:** Agent-native CLI harness  
> **Demo:** Orbital Relay Drone — preview / live preview / trajectory

## Tổng quan

Harness agent cho **Blender**: scene 3D, mesh, render — agent ra lệnh CLI thay vì thao tác viewport.

Demo tiêu biểu: dựng orbital relay drone qua vòng preview.

## Agent làm gì được

- Tạo object, material, camera  
- Render (EEVEE / Cycles — theo harness docs)  
- Iterate theo preview loop  

## Quan hệ catalog

| | Vai trò |
|--|---------|
| **Cha** | CLI-Anything |
| **Cùng domain** | ComfyUI (2D diffusion), FreeCAD (CAD), Godot (realtime) |
| **Khác Midscene** | Không cần vision click UI Blender |

## Link

- Upstream: https://www.blender.org  
- Repo cha: https://github.com/HKUDS/CLI-Anything  
- Hub: https://clianything.cc/
