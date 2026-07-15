# FunASR

> **Repo:** [modelscope/FunASR](https://github.com/modelscope/FunASR)  
> **Category:** Speech & Audio · Industrial ASR toolkit  
> **Tags:** `stt` · `cli` · `api` · `self-host` · `mcp`  
> **Ngôn ngữ:** Python · PyTorch · **⭐** ~19.2k · **License:** MIT (toolkit; model licenses vary)  
> Docs: [modelscope.github.io/FunASR](https://modelscope.github.io/FunASR/)

## Đây là gì?

**FunASR** (ModelScope / Alibaba DAMO) là toolkit ASR **công nghiệp** (*industrial ASR*): tới ~340× realtime (Fun-ASR-Nano + vLLM), 50+ ngôn ngữ, **speaker diarization**, emotion, VAD, punctuation, **streaming** (Paraformer). Không chỉ một model Whisper — chọn theo job: Fun-ASR-Nano (flagship GPU), SenseVoice (CPU + emotion), Paraformer (low-latency stream). `funasr-server` → API tương thích OpenAI + **MCP** cho agents.

**Cùng kiểu:** [faster-whisper](faster-whisper.md) (Whisper CTranslate2), [LocalAI](../devtools/localai.md) (multi-modal serve có STT), [OmniVoice](omnivoice-studio.md) (STT+TTS studio), [Jitsi](../devtools/jitsi-meet.md) (meeting → transcribe pipeline).

## Dùng khi nào?

| Nhu cầu | FunASR |
|---------|--------|
| ASR CN/multilingual + diarization/emotion | ✅ SenseVoice / Nano |
| Streaming / WebSocket realtime | ✅ Paraformer |
| OpenAI `/v1/audio` + MCP agents | ✅ `funasr-server` |
| Whisper-only portability tối thiểu | → [faster-whisper](faster-whisper.md) |
| TTS / voice clone | → [VoxCPM](voxcpm.md) / OmniVoice |

## Chạy thử

```bash
pip install torch torchaudio funasr
# Fun-ASR-Nano (GPU) · SenseVoice (CPU ok + diarization)
funasr-server --device cuda   # → localhost:8000 OpenAI-compat
```

AutoModel + AutoModelVLLM · rich transcription postprocess. Models: Fun-ASR-Nano, SenseVoice, Paraformer, Qwen3-ASR, Whisper via zoo.

## So với tool khác

| | FunASR | faster-whisper | LocalAI |
|--|--------|----------------|---------|
| Niche | Full ASR toolkit (CN+) | Fast Whisper | All-modality engine |
| Diarization/emotion | ✅ built-in | ❌ extra | backends vary |
| Tags | `stt` `api` `mcp` | `stt` `cli` | `stt` `api` `mcp` |

## Dùng với Odoo / ai_core

- Transcribe call center / Jitsi recordings (CN + VI pipeline cần test).  
- Agent MCP audio tools.  
- Meeting notes → RAG ([Pathway](../mcp-ai-agents/pathway.md) / `ai_rag_core`).

## Link

- Repo: https://github.com/modelscope/FunASR  
- Docs · ModelScope / HF FunAudioLLM  
- Peers: [faster-whisper.md](faster-whisper.md) · [localai.md](../devtools/localai.md) · [omnivoice-studio.md](omnivoice-studio.md) · [capcut-tts-api.md](capcut-tts-api.md) · [sherpa-onnx.md](sherpa-onnx.md)
