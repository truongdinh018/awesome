# VideoCaptioner (CLI-Anything harness)

> **Parent:** [CLI-Anything](../cli-anything.md)  
> **Domain:** Speech & Audio · Image & Video  
> **Type:** Agent-native CLI harness  
> **Path:** [`videocaptioner/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/videocaptioner/agent-harness)

## Tổng quan

Harness **VideoCaptioner** — phụ đề / caption video bằng AI qua CLI: agent pipeline video → subtitle thay vì UI desktop.

## Agent làm gì được

- Generate / adjust subtitle tracks  
- Export SRT/VTT  
- Gắn vào workflow batch  

## Quan hệ catalog

| | Vai trò |
|--|---------|
| **Cha** | CLI-Anything |
| **Speech** | Cùng họ STT với faster-whisper (VideoCaptioner = app + harness) |
| **Video** | Bổ sung HyperFrames / ComfyUI — post media, không sinh video từ đầu |

## Link

- Harness: https://github.com/HKUDS/CLI-Anything/tree/main/videocaptioner/agent-harness  
- Parent: [cli-anything.md](../cli-anything.md)
