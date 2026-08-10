# UniFace

> **Repo:** [yakhyo/uniface](https://github.com/yakhyo/uniface)  
> **Category:** Computer Vision & Edge · Face analysis (unified API)  
> **Tags:** `cv` · `self-host` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~1.1k · **License:** MIT  
> Site: [yakhyo.github.io/uniface](https://yakhyo.github.io/uniface/) · PyPI: `uniface`

## Đây là gì?

**UniFace** là thư viện Python **gộp face analysis** dưới **một API**: detection, recognition, tracking, landmarks, parsing, gaze, attributes, anti-spoofing, quality, anonymization, portrait matting.

Backend ONNX Runtime (CPU / Apple Silicon / CUDA). Model tự tải lần đầu (`~/.uniface/models`). Detection gồm RetinaFace, SCRFD, YOLO-Face, BlazeFace…; recognition AdaFace / ArcFace / EdgeFace…; có FAISS vector store cho tìm identity.

**Cùng kiểu:** [InsightFace](insightface.md) (model zoo face SOTA, nặng hơn), [MediaPipe](mediapipe.md) (pipeline ML live/media), [Supervision](supervision.md) (toolkit detect chung, không chuyên face ID).

## Dùng khi nào?

| Nhu cầu | UniFace |
|---------|---------|
| Detect + embed + attribute một API Python nhẹ | ✅ `FaceAnalyzer` |
| Gaze / head pose / parsing / matting / anti-spoof | ✅ modules riêng |
| Model zoo nghiên cứu + 3D recon sâu | → [InsightFace](insightface.md) |
| Landmark/mesh live đa nền tảng (không chỉ face ID) | → [MediaPipe](mediapipe.md) |
| Annotate YOLO/general CV video | → [Supervision](supervision.md) / [Ultralytics](ultralytics.md) |

## Chạy thử

```bash
pip install "uniface[cpu]"    # hoặc uniface[gpu] cho CUDA
# (onnxruntime và onnxruntime-gpu xung đột namespace — chỉ cài một extra)
```

```python
import cv2
from uniface import FaceAnalyzer, AgeGender

analyzer = FaceAnalyzer(predictors=[AgeGender()])
image = cv2.imread("photo.jpg")
faces = analyzer.analyze(image)

for face in faces:
    print(face.bbox, face.sex, face.age, getattr(face, "embedding", None))
```

Docs: https://yakhyo.github.io/uniface/ · Notebooks trong `examples/`.

## So với tool khác

| | UniFace | InsightFace | MediaPipe |
|--|---------|-------------|-----------|
| Shape | Lib Python unified + ONNX | Model zoo / research stack | Cross-platform ML solutions |
| Install | `pip install uniface[cpu]` | pip + model zoo / license từng weight | SDK theo platform |
| Face ID + attrs | ✅ một API | ✅ SOTA rộng | Một phần (mesh/landmarks) |
| License | MIT | Xem từng model | Apache-2.0 |

## Dùng với Odoo / ai_core

- PoC HR / check-in: detect + embedding local, không gửi ảnh thô ra cloud.  
- Anti-spoof (MiniFASNet) trước khi tin liveness webcam.  
- Biometric/PII: consent, retention, không lưu raw face nếu chỉ cần hash/embedding.

## Link

- Repo: https://github.com/yakhyo/uniface · Docs: https://yakhyo.github.io/uniface/  
- PyPI: https://pypi.org/project/uniface/  
- Peers: [insightface.md](insightface.md) · [mediapipe.md](mediapipe.md) · [supervision.md](supervision.md) · [ultralytics.md](ultralytics.md)
