# VideoCaptioner (CLI-Anything harness)

> **Parent:** [CLI-Anything](../mcp-ai-agents/cli-anything.md)  
> **Domain:** Speech & Audio · Image & Video  
> **Tags:** `harness` · `stt` · `video`  
> **Type:** Agent-native CLI harness  
> **Path:** [`videocaptioner/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/videocaptioner/agent-harness)

## Đây là gì?

Harness **VideoCaptioner** — phụ đề / caption video bằng AI qua CLI: agent pipeline video → subtitle thay vì UI desktop.

Là con của CLI-Anything — expose generate/adjust subtitle qua lệnh có cấu trúc.

**Cùng kiểu:** [faster-whisper](../speech-audio/faster-whisper.md) (STT engine), [pyVideoTrans](../image-video/pyvideotrans.md) (dub video), [HyperFrames](../image-video/hyperframes.md) (compose).

## Dùng khi nào?

| Nhu cầu | VideoCaptioner harness |
|---------|------------------------|
| Agent generate / adjust subtitle tracks | ✅ |
| Export SRT/VTT | ✅ |
| Gắn vào workflow batch | ✅ |
| Dub + translate end-to-end | → [pyVideoTrans](../image-video/pyvideotrans.md) |

## Chạy thử

```bash
# Harness: https://github.com/HKUDS/CLI-Anything/tree/main/videocaptioner/agent-harness
# Cài qua CLI-Hub — xem https://clianything.cc/
```

## So với tool khác

| | VideoCaptioner harness | faster-whisper | pyVideoTrans |
|--|------------------------|----------------|--------------|
| Shape | App + agent CLI | STT library | Desktop dub |
| Output | SRT/VTT subtitle | Text transcript | Dubbed video |
| Tags | `harness` `stt` `video` | `stt` `cli` | `video` `stt` `tts` |

## Dùng với Odoo / ai_core

- Post-process video training trước attach `ir.attachment`.  
- Batch subtitle cho clip demo nội bộ.  
- Bổ sung HyperFrames / ComfyUI — post media, không sinh video từ đầu.

## Link

- Harness: https://github.com/HKUDS/CLI-Anything/tree/main/videocaptioner/agent-harness  
- Cha: [cli-anything.md](../mcp-ai-agents/cli-anything.md)
