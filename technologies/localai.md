# LocalAI

> **Repo:** [mudler/LocalAI](https://github.com/mudler/LocalAI)  
> **Category:** DevTools · Local OpenAI-compatible AI engine  
> **Tags:** `api` · `self-host` · `mcp` · `agent` · `stt` · `tts` · `image-gen`  
> **Ngôn ngữ:** Go · **⭐** ~47.5k · **License:** MIT  
> Site: [localai.io](https://localai.io) · Models: [models.localai.io](https://models.localai.io)

## Tổng quan

**LocalAI** — *open-source AI engine*: chạy LLM / vision / voice / image / video trên **mọi hardware** (CPU ok, CUDA/ROCm/Intel/Vulkan/Apple). Core nhỏ; backends (llama.cpp, vLLM, whisper.cpp, SD, MLX…) kéo OCI image **on-demand**. Drop-in **OpenAI / Anthropic / ElevenLabs** API + multi-user + agents (RAG, MCP, skills). Privacy-first — data không rời infra.

Peer: [FreeLLMAPI](freellmapi.md) (gom free cloud tiers), [Unsloth](unsloth.md) (fine-tune rồi serve), [DFlash](dflash.md) (speculative decode), [AnythingLLM](anything-llm.md) (workspace), [faster-whisper](faster-whisper.md) / [OmniVoice](omnivoice-studio.md) / [ComfyUI](comfyui.md).

## Để làm gì?

| Nhu cầu | LocalAI |
|---------|---------|
| OpenAI `base_url` → local | ✅ `/v1` drop-in |
| Một API cho LLM+STT+TTS+image | ✅ multi-backend |
| Agent + MCP built-in | ✅ |
| Chỉ stack free cloud keys | → [FreeLLMAPI](freellmapi.md) |
| Desktop RAG UI | → [AnythingLLM](anything-llm.md) / [Khoj](khoj.md) |

## Highlight

```bash
docker run -ti --name local-ai -p 8080:8080 localai/localai:latest
local-ai run llama-3.2-1b-instruct:q4_k_m
local-ai run huggingface://…/model.gguf
local-ai run ollama://gemma:2b
```

- Distributed mode / VRAM routing · OIDC · quotas · fine-tune+quantize UI  
- Realtime WebRTC voice · face/speaker detect backends  
- macOS DMG launcher · Jetson L4T images  

## So sánh catalog

| | LocalAI | FreeLLMAPI | AnythingLLM |
|--|---------|------------|-------------|
| Niche | Local multi-modal engine | Free-tier cloud proxy | Docs chat workspace |
| Inference | On your GPUs/CPU | Upstream providers | Uses Ollama/LocalAI/… |
| Tags | `api` `mcp` `agent` `stt` `tts` `image-gen` | `api` `mcp` `desktop` | `rag` `desktop` |

## Use case Odoo / ai_core

- Dev `base_url` cho Odoo AI / agents trỏ LocalAI thay OpenAI.  
- On-prem STT/TTS/LLM một stack trước khi tách service.  
- MCP tools + RAG agent hub nội bộ.

## Link

- Repo: https://github.com/mudler/LocalAI  
- Docs: https://localai.io  
- Peers: [freellmapi.md](freellmapi.md) · [unsloth.md](unsloth.md) · [dflash.md](dflash.md) · [anything-llm.md](anything-llm.md) · [faster-whisper.md](faster-whisper.md) · [comfyui.md](comfyui.md)
