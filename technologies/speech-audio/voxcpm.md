# VoxCPM

> **Repo:** [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM)  
> **Category:** Speech & Audio  
> **Tags:** `tts` · `voice-clone`  
> **Ngôn ngữ:** Python · **⭐** ~33k

## Đây là gì?

**VoxCPM** (VoxCPM2) là mô hình **Text-to-Speech (TTS)** **tokenizer-free** của OpenBMB (Tsinghua) — cùng hệ sinh thái với MiniCPM.

Hỗ trợ: sinh giọng nói **đa ngôn ngữ**, **creative voice design** (thiết kế giọng mới), **voice cloning** (few-shot từ audio mẫu), chất lượng gần **true-to-life**. Không phụ thuộc phoneme/token TTS truyền thống.

**Cùng kiểu:** [VibeVoice](vibevoice.md) (long multi-speaker), [VieNeu-TTS](vieneu-tts.md) (VN local), [OmniVoice Studio](omnivoice-studio.md) (desktop studio), [Voicebox](voicebox.md) (studio + MCP).

## Dùng khi nào?

| Nhu cầu | VoxCPM |
|---------|--------|
| TTS đa ngôn ngữ + clone few-shot | ✅ |
| Creative voice design (persona mới) | ✅ |
| Long podcast multi-speaker | → [VibeVoice](vibevoice.md) |
| TTS tiếng Việt chuyên sâu | → [VieNeu-TTS](vieneu-tts.md) |
| Cloud ElevenLabs SaaS | → commercial API |

## Chạy thử

```bash
# Xem README repo OpenBMB/VoxCPM
git clone https://github.com/OpenBMB/VoxCPM.git && cd VoxCPM
pip install -e .
```

Pipeline gợi ý: Text từ LLM / report → VoxCPM TTS → Audio file → attachment / ntfy push.

## So với tool khác

| | VoxCPM | ElevenLabs | OmniVoice Studio |
|--|--------|------------|------------------|
| Deploy | Self-host / research | SaaS | Desktop local |
| Clone | Có | Có | Có |
| License | Open (kiểm tra repo) | Commercial | Open |
| Latency | Tùy GPU | API | Local GPU |

## Dùng với Odoo / ai_core

- Trợ lý ảo Odoo — đọc báo cáo, thông báo (TTS provider abstraction).  
- IVR / call center — giọng thống nhất thương hiệu.  
- Kết hợp `faster-whisper` cho voice chat hai chiều.

## Link

- Repo: https://github.com/OpenBMB/VoxCPM  
- OpenBMB: https://github.com/OpenBMB  
- Peers: [vibevoice.md](vibevoice.md) · [vieneu-tts.md](vieneu-tts.md) · [omnivoice-studio.md](omnivoice-studio.md) · [voicebox.md](voicebox.md)
