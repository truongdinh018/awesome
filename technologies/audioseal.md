# AudioSeal

> **Repo:** [facebookresearch/audioseal](https://github.com/facebookresearch/audioseal)  
> **Category:** Speech & Audio  
> **Tags:** `watermark`  
> **Ngôn ngữ:** Python · **⭐** ~751

## Tổng quan

**AudioSeal** (Meta AI Research) — **watermarking** cho **speech audio do AI sinh ra**:

- Gắn watermark **cục bộ** (localized) vào waveform
- **Detector** rất nhanh — phát hiện audio có watermark
- **SOTA robustness** — chịu nén, noise, re-encode một mức

## Vấn đề giải quyết

| Rủi ro | AudioSeal |
|--------|-----------|
| Deepfake voice | Đánh dấu nguồn AI-generated |
| Không truy vết | Detector xác nhận watermark |
| Compliance | Hỗ trợ policy “AI content labeling” |

## Luồng hoạt động

```
Text → TTS (VoxCPM / OmniVoice)
        │
        ▼
AudioSeal embed watermark
        │
        ▼
Audio phát hành (podcast, IVR, marketing)
        │
        ▼
Detector → "AI-generated / watermarked"
```

## Use case

- **Compliance:** Đánh dấu audio từ agent Odoo / TTS pipeline
- **Anti-spoofing:** Kiểm tra file upload voice note giả mạo
- **Research:** Benchmark watermark speech

## So sánh

| | AudioSeal | Metadata JSON | Visible disclaimer |
|--|-----------|---------------|-------------------|
| Chống xóa metadata | Có (trong audio) | Dễ strip | Không áp dụng audio thuần |
| Real-time detect | Có | Không | Không |
| Imperceptible | Thiết kế minimal | N/A | N/A |

## Liên quan ai_core

- Sau bước TTS trong pipeline voice, gọi AudioSeal trước lưu `ir.attachment`
- Policy module: flag `ai_generated_audio` trên attachment

## Link

- Repo: https://github.com/facebookresearch/audioseal
- Paper: tìm trên Meta AI Research publications
- Image peer: [blind-watermark.md](blind-watermark.md)
