# InsightFace

> **Repo:** [deepinsight/insightface](https://github.com/deepinsight/insightface)  
> **Category:** Computer Vision & Edge · Face analysis  
> **Tags:** `cv` · `self-host` · `cli`  
> **Ngôn ngữ:** Python · C++ · **⭐** ~29.2k · **License:** xem repo / model zoo *(một số weight hạn chế thương mại)*  
> **Site:** [insightface.ai](https://insightface.ai)

## Đây là gì?

**InsightFace** là dự án **2D/3D face analysis** SOTA: detection (RetinaFace), recognition (ArcFace), alignment, attribute (age…), parsing, reconstruction, generation. Model zoo đa backend (PyTorch, MXNet, ONNX, Paddle…). Python package + **InspireFace** C++ cho deploy. InsightFace 1.0 nhấn local eval / desktop.

**Cùng kiểu:** [ALPR](alpr.md) (biển số, khác domain), [LocateAnything-3B](locate-anything.md) (grounding/OCR, không face ID), [MagicMirror](../image-video/magicmirror.md) (desktop face-swap UX).

## Dùng khi nào?

| Nhu cầu | InsightFace |
|---------|-------------|
| Face detect / embed / verify | ✅ RetinaFace + ArcFace |
| Age / attribute / 3D recon | ✅ attribute · reconstruction |
| Edge C++ pack | ✅ InspireFace |
| Plate / general OCR | → [ALPR](alpr.md) / [MinerU](../devtools/mineru.md) |
| Document text locate | → [LocateAnything-3B](locate-anything.md) |

## Chạy thử

```bash
pip install insightface onnxruntime
# hoặc clone + model_zoo weights — xem README
```

Kiểm tra **license từng model** trước commercial; biometric/PII compliance (GDPR…).

## So với tool khác

| | InsightFace | ALPR | LocateAnything |
|--|-------------|------|----------------|
| Domain | Face ID / analysis | License plates | VL grounding |
| Tags | `cv` `self-host` | `cv` `edge` | `cv` `ocr` |

## Dùng với Odoo / ai_core

- HR / access control demo (consent + retention policy).  
- Không lưu raw biometrics không cần thiết — chỉ embedding/hash khi có RoE.  
- Không thay OCR hợp đồng (MinerU).

## Link

- Repo: https://github.com/deepinsight/insightface · Site: https://insightface.ai  
- Peers: [alpr.md](alpr.md) · [locate-anything.md](locate-anything.md) · [magika.md](../devtools/magika.md)
