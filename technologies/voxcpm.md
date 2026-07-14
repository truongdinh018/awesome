# VoxCPM

> **Repo:** [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM)  
> **Category:** Speech & Audio  
> **Tags:** `tts` · `voice-clone`  
> **Ngôn ngữ:** Python · **⭐** ~33k

## Tổng quan

**VoxCPM** (VoxCPM2) là mô hình **Text-to-Speech (TTS)** **tokenizer-free**, hỗ trợ:

- Sinh giọng nói **đa ngôn ngữ**
- **Creative voice design** — thiết kế giọng mới
- **Voice cloning** — clone từ mẫu ngắn
- Chất lượng gần **true-to-life**

OpenBMB (Tsinghua) — cùng hệ sinh thái với MiniCPM.

## Điểm khác biệt kỹ thuật

| Đặc điểm | Ý nghĩa |
|----------|---------|
| Tokenizer-free | Không phụ thuộc phoneme/token TTS truyền thống |
| Multilingual | Một model nhiều ngôn ngữ |
| Voice design | Tạo persona giọng mới không cần dataset lớn |
| Cloning | Few-shot từ audio mẫu |

## Use case

- **Trợ lý ảo Odoo** — đọc báo cáo, thông báo
- **IVR / call center** — giọng thống nhất thương hiệu
- **Dubbing** nội dung đa ngôn ngữ
- **Accessibility** — đọc nội dung ERP cho người khiếm thị

## So sánh

| | VoxCPM | ElevenLabs | OmniVoice Studio |
|--|--------|------------|------------------|
| Deploy | Self-host / research | SaaS | Desktop local |
| Clone | Có | Có | Có |
| License | Open (kiểm tra repo) | Commercial | Open |
| Latency | Tùy GPU | API | Local GPU |

## Pipeline gợi ý (Odoo)

```
Text từ LLM / report
        │
        ▼
VoxCPM TTS
        │
        ▼
Audio file → attachment / ntfy push
```

## Liên quan ai_core

- TTS provider abstraction (tương tự Ollama cho LLM)
- Kết hợp `faster-whisper` cho voice chat hai chiều

## Link

- Repo: https://github.com/OpenBMB/VoxCPM
- OpenBMB: https://github.com/OpenBMB
