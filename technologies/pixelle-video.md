# Pixelle-Video

> **Repo:** [ATH-MaaS/Pixelle-Video](https://github.com/ATH-MaaS/Pixelle-Video)  
> **Category:** Image & Video · AI short video engine (topic → clip)  
> **Tags:** `video` · `tts` · `image-gen` · `self-host` · `workflow` · `api`  
> **Ngôn ngữ:** Python · Streamlit · ComfyUI / RunningHub · **⭐** ~25.4k · **License:** Apache-2.0  
> Docs: [aidc-ai.github.io/Pixelle-Video](https://aidc-ai.github.io/Pixelle-Video/zh)

## Đây là gì?

**Pixelle-Video** — engine **AI short video full-auto**: nhập **chủ đề** → viết script → AI ảnh/video → TTS (+ BGM) → ghép clip (dọc/ngang). WebUI Streamlit; backend gắn **ComfyUI / RunningHub** workflow hoặc **API** ảnh/video (DashScope, Kling, Seedance…). Module mở rộng: digital human talking-head, image-to-video, motion transfer. Không phải NLE tay — là pipeline AIGC zero-edit.

**Cùng kiểu:** [MoneyPrinterTurbo](moneyprinterturbo.md) (short LLM→stock+TTS), [Toonflow](toonflow.md) (novel→drama canvas), [ComfyUI](comfyui.md) (node engine bên dưới), [OpenMontage](openmontage.md) / [HyperFrames](hyperframes.md) (compose khác shape).

## Dùng khi nào?

| Nhu cầu | Pixelle-Video |
|---------|---------------|
| Topic → short + AI visual + TTS | ✅ primary |
| ComfyUI/RunningHub thay atomic ảnh/video/TTS | ✅ |
| Digital human / I2V / motion transfer | ✅ modules |
| Stock footage + TTS, ít gen ảnh | → [MoneyPrinterTurbo](moneyprinterturbo.md) |
| Novel → short drama agent canvas | → [Toonflow](toonflow.md) |
| Timeline NLE browser | → [FreeCut](freecut.md) |

## Chạy thử

```bash
git clone https://github.com/ATH-MaaS/Pixelle-Video.git
cd Pixelle-Video
uv run streamlit run web/app.py
```

Có **Windows all-in-one** trên Releases; Docker: `docker-compose.yml` trong repo. Cần cấu hình LLM (+ optional ComfyUI URL / API keys media). Docs: [zh](https://aidc-ai.github.io/Pixelle-Video/zh) · [en](https://aidc-ai.github.io/Pixelle-Video).

## So với tool khác

| | Pixelle-Video | MoneyPrinterTurbo | Toonflow |
|--|---------------|-------------------|----------|
| Shape | Topic→AIGC short + Comfy/API modules | LLM→stock+TTS short | Novel→drama canvas |
| Gen ảnh/video AI | ✅ (Comfy / API) | chủ yếu stock | via external models |
| Tags | `video` `tts` `image-gen` `workflow` | `video` `tts` `api` | `video` `image-gen` `desktop` |

## Dùng với Odoo / ai_core

- Clip marketing / training nội bộ từ topic (human approve trước đăng).  
- Self-host + ComfyUI local nếu data không lên cloud API.  
- Companion: Pixelle-MCP (ComfyUI MCP) — xem README repo related.

## Link

- Repo: https://github.com/ATH-MaaS/Pixelle-Video · Docs: https://aidc-ai.github.io/Pixelle-Video  
- Peers: [moneyprinterturbo.md](moneyprinterturbo.md) · [toonflow.md](toonflow.md) · [comfyui.md](comfyui.md) · [openmontage.md](openmontage.md) · [hyperframes.md](hyperframes.md)
