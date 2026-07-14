# iptv-org/iptv

> **Repo:** [iptv-org/iptv](https://github.com/iptv-org/iptv)  
> **Category:** Image & Video Generation · Media playlist dataset *(không phải generative AI)*  
> **Tags:** `video`  
> **Ngôn ngữ:** TypeScript / M3U playlists · **⭐** ~133k · **License:** CC0 / Unlicense  
> Org: [iptv-org](https://github.com/iptv-org) · Playlist: https://iptv-org.github.io/iptv/index.m3u

## Đây là gì?

**iptv-org/iptv** là collection **liên kết stream IPTV công khai** (M3U) toàn cầu. Repo **không lưu file video** — chỉ URL user-submit; dùng với VLC / player hỗ trợ live streaming.

Trong catalog Awesome AI đây là **dataset media**, không model/agent. Hợp khi cần nguồn kênh cho PWA/player, demos, hoặc XiaoZhi/media gadget — không thay ComfyUI/HyperFrames.

**Cùng kiểu:** [HyperFrames](hyperframes.md) (sinh video), XiaoZhi (voice edge / gadget) — khác domain.

## Dùng khi nào?

| Nhu cầu | iptv |
|---------|------|
| Playlist M3U sẵn lọc theo quốc gia/category | ✅ `PLAYLISTS.md` + index.m3u |
| EPG (lịch chương trình) | → [iptv-org/epg](https://github.com/iptv-org/epg) |
| Metadata kênh editable | → [iptv-org/database](https://github.com/iptv-org/database) |
| Query API | → [iptv-org/api](https://github.com/iptv-org/api) |
| Sinh video / TTS | → HyperFrames / OmniVoice / AI-auto-generate-video |

## Chạy thử

```
https://iptv-org.github.io/iptv/index.m3u
```

Dán URL vào VLC (Open Network Stream) hoặc player M3U khác. Playlist phụ: xem `PLAYLISTS.md`.

## So với tool khác

| | iptv-org | HyperFrames | XiaoZhi |
|--|----------|-------------|---------|
| Vai trò | Catalog stream TV | Sinh video từ HTML | Voice edge / gadget |
| Tags | `video` | `video` `cli` `agent` | `stt` `tts` `iot` |

## Dùng với Odoo / ai_core

- Demo player / kiosk nội bộ — không liên quan AI pipeline trực tiếp.  
- Chỉ chứa link stream; không kiểm soát destination — tôn trọng bản quyền.  
- DMCA tới host nội dung, không tới playlist GitHub theo quan điểm repo.

## Link

- Repo: https://github.com/iptv-org/iptv  
- Site: https://iptv-org.github.io  
- FAQ: `FAQ.md` · Legal trong README  
- Org: https://github.com/iptv-org
