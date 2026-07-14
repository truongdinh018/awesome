# ComfyUI (CLI-Anything harness)

> **Parent:** [CLI-Anything](../cli-anything.md)  
> **Domain:** Image & Video Generation  
> **Tags:** `harness` · `image-gen` · `cli`  
> **Type:** Agent-native CLI harness (lớp trên app ★)  
> **Path:** [`comfyui/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/comfyui/agent-harness)  
> **App ★ trong catalog:** [ComfyUI](../comfyui.md)

## Đây là gì?

Harness CLI-Anything cho **ComfyUI**: agent gọi / điều khiển workflow diffusion qua CLI + skill, thay vì chỉ GUI node graph hoặc raw HTTP API.

**Không trùng bài ComfyUI ★** — bài này chỉ mô tả lớp agent-native; chi tiết ComfyUI xem [comfyui.md](../comfyui.md).

```
CLI-Anything (cha)
    └── comfyui harness (con)
            └── liên kết ngang → ComfyUI ★
```

**Cùng kiểu:** [ComfyUI ★](../comfyui.md) (app), [CLI-Anything](../cli-anything.md) (cha).

## Dùng khi nào?

| Nhu cầu | Harness | ComfyUI API trực tiếp |
|---------|---------|------------------------|
| Discover lệnh qua SKILL.md / --help | ✅ | Đọc docs REST |
| Agent coding (Claude/Cursor skill-ready) | ✅ | Tự wrap MCP |
| Chỉ cần HTTP API thuần | → | ✅ |

## Chạy thử

```bash
# Harness: https://github.com/HKUDS/CLI-Anything/tree/main/comfyui/agent-harness
# Cần ComfyUI server chạy local
```

## So với tool khác

| | ComfyUI harness | ComfyUI ★ | Toonflow |
|--|-----------------|-----------|----------|
| Lớp | Agent CLI | Image gen app | Drama studio |
| Tags | `harness` `image-gen` `cli` | `image-gen` `api` | `video` `agent` |

## Dùng với Odoo / ai_core

- Agent gen ảnh marketing qua harness thay raw API.  
- Ghép [Toonflow](../toonflow.md) khi cần video drama — ComfyUI cho still image.  
- GPU server riêng — không chạy trên Odoo worker.

## Link

- Harness: https://github.com/HKUDS/CLI-Anything/tree/main/comfyui/agent-harness  
- ComfyUI ★: [../comfyui.md](../comfyui.md)  
- Upstream: https://github.com/Comfy-Org/ComfyUI
