# Claude Video (`/watch`)

> **Repo:** [bradautomates/claude-video](https://github.com/bradautomates/claude-video)  
> **Category:** Image & Video · Analyze / watch  
> **Tags:** `video` · `skill` · `coding-agent` · `stt` · `cli` · `agent`  
> **Ngôn ngữ:** Python · **⭐** ~8.7k · **License:** MIT

## Đây là gì?

**Claude Video** là **Agent Skill** (`/watch`) giúp coding agent (Claude Code, Cursor, Codex, Copilot…) **xem được video** — URL YouTube hoặc file local.

Pipeline: tải bằng **yt-dlp** → cắt **frame** (scene-aware / keyframe) → lấy **transcript** (caption miễn phí hoặc Whisper API) → agent **Read** từng frame như ảnh. Kết quả: vừa “nhìn” vừa “nghe”, không chỉ đoán từ tiêu đề.

Cài dạng plugin Claude Code hoặc `npx skills add bradautomates/claude-video`. Lần đầu tự gợi ý cài `yt-dlp` + `ffmpeg`.

**Cùng kiểu:** [yt-dlp](yt-dlp.md) (chỉ tải), [pyVideoTrans](pyvideotrans.md) (dub/subtitle desktop), [VideoCaptioner harness](../cli-anything/videocaptioner.md) (caption CLI), [FreeCut](freecut.md) (NLE + STT).

## Dùng khi nào?

| Nhu cầu | Claude Video |
|---------|--------------|
| Agent phân tích YouTube / screen recording | ✅ |
| Tóm tắt video, bỏ phần hype | ✅ |
| Debug UI từ file `.mov` / `.mp4` | ✅ |
| Chỉ tải video, không cần LLM xem | → [yt-dlp](yt-dlp.md) |
| Dịch / lồng tiếng hàng loạt | → [pyVideoTrans](pyvideotrans.md) |
| Sinh video mới từ HTML/script | → [HyperFrames](hyperframes.md) / [MoneyPrinterTurbo](moneyprinterturbo.md) |

## Chạy thử

```bash
# Claude Code
/plugin marketplace add bradautomates/claude-video
/plugin install watch@claude-video

# Cursor / Codex / Agent Skills hosts
npx skills add bradautomates/claude-video -g

# Trong chat agent
/watch https://youtu.be/dQw4w9WgXcQ what happens at the 30 second mark?
/watch bug-repro.mov what's going wrong?
```

Phụ thuộc: `yt-dlp`, `ffmpeg`. Whisper API key chỉ khi video **không** có caption.

## So với tool khác

| | Claude Video | yt-dlp | pyVideoTrans |
|--|--------------|--------|--------------|
| Mục tiêu | Agent **hiểu** video | Tải file | Dub / subtitle |
| Frame → vision | ✅ | ❌ | Trung bình |
| Skill / Claude Code | ✅ | CLI thuần | Desktop app |
| Self-host NLE | ❌ | — | ✅ |

## Dùng với Odoo / ai_core

- Phân tích video hướng dẫn Odoo / UAT recording → ghi note vào Knowledge / `mail.message`.  
- Kết hợp [faster-whisper](../speech-audio/faster-whisper.md) nếu muốn STT local thay Whisper API.  
- Không thay RAG tài liệu PDF — dùng khi nguồn là **video**, không phải text.

## Link

- Repo: https://github.com/bradautomates/claude-video  
- Peers: [yt-dlp.md](yt-dlp.md) · [pyvideotrans.md](pyvideotrans.md) · [../cli-anything/videocaptioner.md](../cli-anything/videocaptioner.md) · [freecut.md](freecut.md)
