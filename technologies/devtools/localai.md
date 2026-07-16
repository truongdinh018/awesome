# LocalAI

> **Repo:** [mudler/LocalAI](https://github.com/mudler/LocalAI)  
> **Category:** DevTools · Engine AI local, API giống OpenAI  
> **Tags:** `api` · `self-host` · `mcp` · `agent` · `stt` · `tts` · `image-gen` · `local-llm` · `gateway`
> **Ngôn ngữ:** Go · **⭐** ~47.5k · **License:** MIT  
> Site: [localai.io](https://localai.io) · Models: [models.localai.io](https://models.localai.io)

## Đây là gì?

**LocalAI** là *engine* AI mã nguồn mở: chạy LLM, nhìn ảnh (*vision*), giọng nói, tạo ảnh / video trên **phần cứng của bạn** (CPU cũng được; hỗ trợ CUDA, ROCm, Intel, Vulkan, Apple).

Lõi nhỏ; các backend (llama.cpp, vLLM, whisper.cpp, Stable Diffusion, MLX…) tải thêm khi cần (ảnh OCI). Đóng vai **API kiểu OpenAI / Anthropic / ElevenLabs** — đổi `base_url` là xài được nhiều client sẵn. Có thêm multi-user, agent (RAG, MCP, *skills*). Dữ liệu ở lại infra bạn (*privacy-first*).

**Cùng kiểu:** [FreeLLMAPI](freellmapi.md) (gom free tier cloud), [Unsloth](unsloth.md) (fine-tune rồi serve), [DFlash](dflash.md) (tăng tốc decode), [AnythingLLM](../mcp-ai-agents/anything-llm.md) (UI chat tài liệu), [faster-whisper](../speech-audio/faster-whisper.md) / [OmniVoice](../speech-audio/omnivoice-studio.md) / [ComfyUI](../image-video/comfyui.md).

## Dùng khi nào?

| Nhu cầu | LocalAI |
|---------|---------|
| Trỏ OpenAI `base_url` → máy local | ✅ `/v1` thay thế trực tiếp |
| Một API cho LLM + STT + TTS + ảnh | ✅ nhiều backend |
| Agent + MCP sẵn trong engine | ✅ |
| Chỉ dùng key cloud miễn phí | → [FreeLLMAPI](freellmapi.md) |
| UI chat tài liệu trên desktop | → [AnythingLLM](../mcp-ai-agents/anything-llm.md) / [Khoj](../mcp-ai-agents/khoj.md) |

## Chạy thử

```bash
docker run -ti --name local-ai -p 8080:8080 localai/localai:latest
local-ai run llama-3.2-1b-instruct:q4_k_m
local-ai run huggingface://…/model.gguf
local-ai run ollama://gemma:2b
```

- Có chế độ phân tán / định tuyến VRAM · OIDC · hạn mức (*quota*) · giao diện fine-tune + quantize  
- Giọng nói realtime (WebRTC) · nhận diện khuôn mặt / người nói  
- Cài macOS (DMG) · ảnh Jetson L4T  

## So với tool khác

| | LocalAI | FreeLLMAPI | AnythingLLM |
|--|---------|------------|-------------|
| Vai trò | Engine local đa loại AI | Proxy gom free tier cloud | Workspace chat tài liệu |
| Chạy ở đâu | GPU/CPU của bạn | Provider phía trên | Dùng Ollama / LocalAI / … |
| Tags | `api` `mcp` `agent` `stt` `tts` `image-gen` | `api` `mcp` `desktop` | `rag` `desktop` |

## Dùng với Odoo / ai_core

- Dev: `base_url` của Odoo AI / agent trỏ LocalAI thay OpenAI.  
- On-prem: một stack STT / TTS / LLM trước khi tách service.  
- Hub nội bộ: MCP tools + agent RAG.

## Link

- Repo: https://github.com/mudler/LocalAI  
- Docs: https://localai.io  
- Peers: [freellmapi.md](freellmapi.md) · [unsloth.md](unsloth.md) · [dflash.md](dflash.md) · [anything-llm.md](../mcp-ai-agents/anything-llm.md) · [faster-whisper.md](../speech-audio/faster-whisper.md) · [comfyui.md](../image-video/comfyui.md)
