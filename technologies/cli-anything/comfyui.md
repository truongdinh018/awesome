# ComfyUI (CLI-Anything harness)

> **Parent:** [CLI-Anything](../cli-anything.md)  
> **Domain:** Image & Video Generation  
> **Tags:** `harness` · `image-gen` · `cli`  
> **Type:** Agent-native CLI harness (lớp trên app ★)  
> **Path:** [`comfyui/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/comfyui/agent-harness)  
> **App ★ trong catalog:** [ComfyUI](../comfyui.md)

## Tổng quan

Harness CLI-Anything cho **ComfyUI**: agent gọi / điều khiển workflow diffusion qua CLI + skill, thay vì chỉ GUI node graph hoặc raw HTTP API.

**Không trùng bài ComfyUI ★** — bài này chỉ mô tả lớp agent-native; chi tiết ComfyUI xem [comfyui.md](../comfyui.md).

## Quan hệ cha–con

```
CLI-Anything (cha · MCP & Agents)
    └── comfyui harness (con · domain Image & Video)
            └── liên kết ngang → ComfyUI ★ (công nghệ đã star)
```

## Khi nào dùng harness vs API thuần

| | Harness CLI-Anything | ComfyUI API trực tiếp |
|--|----------------------|------------------------|
| Discover lệnh | SKILL.md / --help | Đọc docs REST |
| Agent coding | Claude/Cursor skill-ready | Tự wrap MCP |
| Catalog | Con của CLI-Anything | Bài ★ Image & Video |

## Link

- Harness: https://github.com/HKUDS/CLI-Anything/tree/main/comfyui/agent-harness  
- ComfyUI ★: [../comfyui.md](../comfyui.md)  
- Upstream: https://github.com/Comfy-Org/ComfyUI
