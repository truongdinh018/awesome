# LingBot-Map

> **Repo:** [Robbyant/lingbot-map](https://github.com/Robbyant/lingbot-map)  
> **Category:** Computer Vision & Edge · Streaming 3D reconstruction (foundation model)  
> **Tags:** `cv` · `self-host` · `cli` · `video`  
> **Ngôn ngữ:** Python · PyTorch · **⭐** ~10.7k · **License:** Apache-2.0  
> Paper: [arXiv:2604.14141](https://arxiv.org/abs/2604.14141) · Project: [technology.robbyant.com/lingbot-map](https://technology.robbyant.com/lingbot-map)  
> Weights: [HF robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map) · ModelScope

## Đây là gì?

**LingBot-Map** (Robbyant) là **feed-forward 3D foundation model** cho **streaming 3D reconstruction**: video / frame stream → pose + geometry dày, lâu dài (>10k frames) nhờ Geometric Context Transformer (anchor context, pose-reference window, trajectory memory) + paged KV cache (~20 FPS @ 518×378). Không phải GIS admin map; không phải SLAM tối ưu iterative cổ điển — là **một pass transformer** so với streaming/iterative baselines.

**Cùng kiểu:** [Supervision](supervision.md) (CV toolkit 2D), [RuView](ruview.md) (spatial sensing khác modality), [LocateAnything-3B](locate-anything.md) (2D grounding), [SANA](../image-video/sana.md) (gen video — khác reconstruct).

## Dùng khi nào?

| Nhu cầu | LingBot-Map |
|---------|-------------|
| Video dài → reconstruct 3D / camera pose streaming | ✅ primary |
| Indoor/outdoor/aerial long sequences | ✅ demos + benchmarks |
| 2D detect/track trên frame | → [Supervision](supervision.md) |
| WiFi presence không camera | → [RuView](ruview.md) |
| Bản đồ hành chính VN | → [vietnamese-provinces-database](../devtools/vietnamese-provinces-database.md) |

## Chạy thử

```bash
conda create -n lingbot-map python=3.10 -y
conda activate lingbot-map
# Cài PyTorch CUDA theo README (khuyến nghị torch 2.8 + cu128 nếu dùng Kaolin render)
pip install -e .

# Weights: HF robbyant/lingbot-map (long / balanced / stage1)
python demo.py --model_path /path/to/lingbot-map-long.pt \
  --image_folder /path/to/frames/
```

Demo data: `robbyant/lingbot-map-demo` trên Hugging Face. VRAM thấp: xem fork/note RTX 4060 8G trong README.

## So với tool khác

| | LingBot-Map | Supervision | RuView |
|--|-------------|-------------|--------|
| Output | 3D scene + pose stream | Detections 2D/video | Presence/pose từ WiFi CSI |
| Camera | ✅ video/images | ✅ | ❌ |
| Tags | `cv` `video` `cli` | `cv` `video` | `cv` `edge` `iot` |

## Dùng với Odoo / ai_core

- R&D robot / warehouse digital twin / site scan — không gắn ERP mặc định.  
- Export mesh/poses → pipeline riêng nếu cần; tôn trọng quyền dataset demo.

## Link

- Repo: https://github.com/Robbyant/lingbot-map · Project: https://technology.robbyant.com/lingbot-map  
- Peers: [supervision.md](supervision.md) · [ruview.md](ruview.md) · [locate-anything.md](locate-anything.md) · [sana.md](../image-video/sana.md)
