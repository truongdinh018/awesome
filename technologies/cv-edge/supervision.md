# Supervision (Roboflow)

> **Repo:** [roboflow/supervision](https://github.com/roboflow/supervision)  
> **Category:** Computer Vision & Edge · Reusable CV toolkit (detect → annotate → track)  
> **Tags:** `cv` · `cli` · `self-host` · `video`  
> **Ngôn ngữ:** Python ≥3.10 · **⭐** ~48k · **License:** MIT  
> Docs: [supervision.roboflow.com](https://supervision.roboflow.com)

## Đây là gì?

**Supervision** là toolkit CV **model-agnostic** của Roboflow: nhận detection/classification/segmentation từ YOLO, Transformers, Inference, rfdetr… → `sv.Detections`.

Có **annotators** (box, mask, labels…); dataset load/split/merge (COCO / YOLO / Pascal VOC); tracking, zone counting, dwell time, speed estimation trên video. Building blocks để app quanh model sẵn có — không train framework.

**Cùng kiểu:** [InsightFace](insightface.md) (face ID chuyên sâu), [ALPR](alpr.md) (biển số edge), [LocateAnything-3B](locate-anything.md) (VL grounding), [MagicMirror](../image-video/magicmirror.md) (face-swap app).

## Dùng khi nào?

| Nhu cầu | Supervision |
|---------|-------------|
| Plug bất kỳ detect model → visualize / count / track | ✅ |
| Dataset utils COCO↔YOLO↔VOC | ✅ |
| Zone / dwell / speed trên video | ✅ tutorials |
| Face recognition stack | → [InsightFace](insightface.md) |
| Plate OCR Jetson | → [ALPR](alpr.md) |

## Chạy thử

```bash
pip install supervision
# model connectors: pillow rfdetr / ultralytics / inference …
```

```python
import supervision as sv
# detections = model.predict(...)  # or sv.Detections.from_inference / from_ultralytics
box_annotator = sv.BoxAnnotator()
annotated = box_annotator.annotate(scene=image.copy(), detections=detections)
```

## So với tool khác

| | Supervision | InsightFace | ALPR |
|--|-------------|-------------|------|
| Shape | CV utils + annotate/track | Face analysis suite | Plate detect OCR edge |
| Model-agnostic | ✅ | Face-focused | ALPR models |
| Tags | `cv` `cli` `video` | `cv` `cli` | `cv` `edge` |

## Dùng với Odoo / ai_core

- Camera warehouse: detect → annotate → count zone → webhook Odoo.  
- Không thay WMS — layer vision sidecar.  
- Tôn trọng PII/biometric khi người trong frame.

## Link

- Repo: https://github.com/roboflow/supervision  
- Docs: https://supervision.roboflow.com  
- Peers: [insightface.md](insightface.md) · [alpr.md](alpr.md) · [locate-anything.md](locate-anything.md) · [magicmirror.md](../image-video/magicmirror.md)
