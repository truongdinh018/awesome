# SoulX-Singer

> **Repo:** [Soul-AILab/SoulX-Singer](https://github.com/Soul-AILab/SoulX-Singer)  
> **Category:** Speech & Audio · Zero-shot singing voice synthesis (SVS) + SVC  
> **Tags:** `tts` · `voice-clone` · `self-host` · `cli`  
> **Ngôn ngữ:** Python · Gradio WebUI · **⭐** ~0.8k · **License:** Apache-2.0  
> **Paper:** [arXiv:2602.07803](https://arxiv.org/abs/2602.07803) · HF: [Soul-AILab/SoulX-Singer](https://huggingface.co/Soul-AILab/SoulX-Singer)

## Đây là gì?

**SoulX-Singer** là model **zero-shot singing voice synthesis (SVS)**: clone timbre ca sĩ chưa thấy từ prompt, điều khiển bằng **F0 melody** hoặc **MIDI score**.

Train trên ~42k giờ vocal aligned (Mandarin / English / Cantonese). Hỗ trợ edit lyrics, cross-lingual. **SoulX-Singer-SVC** — finetune wav→wav singing voice conversion (không cần lyrics/MIDI). Có Gradio `webui.py` / `webui_svc.py`, preprocess pipeline, Midi-Editor trên HF Spaces.

**Cùng kiểu:** [CosyVoice](cosyvoice.md) / [MOSS-TTS](moss-tts.md) / [VoxCPM](voxcpm.md) (speech TTS — không specialized singing), [Voice-Pro](voice-pro.md) (studio có Demucs nhưng không SVS MIDI).

## Dùng khi nào?

| Nhu cầu | SoulX-Singer |
|---------|--------------|
| Zero-shot SVS (lyrics + F0/MIDI) | ✅ |
| Singing voice conversion (audio→audio) | ✅ SVC |
| Edit lời + giữ timbre/prosody | ✅ |
| Speech TTS / podcast | → [CosyVoice](cosyvoice.md) / [MOSS-TTS](moss-tts.md) |
| Voice studio all-in-one | → [Voice-Pro](voice-pro.md) / [OmniVoice](omnivoice-studio.md) |

## Chạy thử

```bash
conda create -n soulxsinger -y python=3.10 && conda activate soulxsinger
pip install -r requirements.txt
hf download Soul-AILab/SoulX-Singer --local-dir pretrained_models/SoulX-Singer
hf download Soul-AILab/SoulX-Singer-Preprocess --local-dir pretrained_models/SoulX-Singer-Preprocess
bash example/infer.sh          # SVS
bash example/infer_svc.sh      # SVC
python webui.py                # Gradio SVS
```

**Ethics:** không mạo danh ca sĩ / nội dung lừa đảo — tôn trọng IP & consent (disclaimer upstream).

## So với tool khác

| | SoulX-Singer | CosyVoice | Voice-Pro |
|--|--------------|-----------|-----------|
| Domain | Singing SVS/SVC | Speech LLM-TTS | Creator Gradio studio |
| MIDI / F0 score | ✅ | ❌ | ❌ |
| Tags | `tts` `voice-clone` `cli` | `tts` `voice-clone` `api` | `stt` `tts` `desktop` |

## Dùng với Odoo / ai_core

- Demo Jingle / karaoke nội bộ (consent voice talent).  
- Không gắn production ERP mặc định — GPU + preprocess nặng.  
- Water-mark / policy nội dung nếu ship public.

## Link

- Repo: https://github.com/Soul-AILab/SoulX-Singer  
- Peers: [cosyvoice.md](cosyvoice.md) · [moss-tts.md](moss-tts.md) · [voxcpm.md](voxcpm.md) · [voice-pro.md](voice-pro.md) · [vibevoice.md](vibevoice.md)
