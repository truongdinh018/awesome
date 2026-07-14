# AudioSeal

> **Repo:** [facebookresearch/audioseal](https://github.com/facebookresearch/audioseal)  
> **Category:** Speech & Audio · Watermark cho speech AI-generated  
> **Tags:** `watermark`  
> **Ngôn ngữ:** Python · **⭐** ~751

## Đây là gì?

**AudioSeal** (Meta AI Research) là thư viện **watermarking** cho **speech audio do AI sinh ra**.

Gắn watermark **cục bộ** (*localized*) vào waveform. **Detector** rất nhanh — phát hiện audio có watermark. **SOTA robustness** — chịu nén, noise, re-encode một mức.

**Cùng kiểu:** [blind_watermark](blind-watermark.md) (watermark ảnh blind/invisible).

## Dùng khi nào?

| Nhu cầu | AudioSeal |
|--------|-----------|
| Deepfake voice — đánh dấu nguồn AI-generated | ✅ |
| Không truy vết — detector xác nhận watermark | ✅ |
| Compliance policy “AI content labeling” | ✅ |
| Watermark **ảnh** | → [blind_watermark](blind-watermark.md) |
| Metadata JSON / disclaimer hiển thị | Bổ sung, không thay watermark trong audio |

## Chạy thử

**Luồng hoạt động:**

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

- Repo: https://github.com/facebookresearch/audioseal  
- Paper: tìm trên Meta AI Research publications

## So với tool khác

| | AudioSeal | Metadata JSON | Visible disclaimer |
|--|-----------|---------------|-------------------|
| Chống xóa metadata | Có (trong audio) | Dễ strip | Không áp dụng audio thuần |
| Real-time detect | Có | Không | Không |
| Imperceptible | Thiết kế minimal | N/A | N/A |

## Dùng với Odoo / ai_core

- Sau bước TTS trong pipeline voice, gọi AudioSeal trước lưu `ir.attachment`.  
- Policy module: flag `ai_generated_audio` trên attachment.  
- Compliance: đánh dấu audio từ agent Odoo / TTS pipeline; kiểm tra file upload voice note giả mạo.

## Link

- Repo: https://github.com/facebookresearch/audioseal  
- Paper: tìm trên Meta AI Research publications  
- Image peer: [blind-watermark.md](blind-watermark.md)
