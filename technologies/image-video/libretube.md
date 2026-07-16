# LibreTube

> **Repo:** [libre-tube/LibreTube](https://github.com/libre-tube/LibreTube)  
> **Category:** Image & Video · YouTube client (Android, privacy)  
> **Tags:** `video` · `desktop` · `self-host` · `mobile`
> **Ngôn ngữ:** Kotlin · **⭐** ~12.3k · **License:** GPL-3.0  
> Site: [libretube.dev](https://libretube.dev)

## Đây là gì?

**LibreTube** — frontend **YouTube thay thế trên Android**: giảm tracking Google, không ads trong app; subscriptions / playlist / history / download / phát nền. Tích hợp **SponsorBlock**, ReturnYouTubeDislike, **DeArrow**; đồng bộ tài khoản tùy chọn qua **Piped**. Material 3. F-Droid / IzzyOnDroid / GitHub releases.

Khác [yt-dlp](yt-dlp.md) (CLI tải đa site) và [iptv-org](iptv-org.md) (playlist live M3U) — đây là **app xem YouTube** privacy-first.

**Cùng kiểu:** [yt-dlp](yt-dlp.md), [ASCILINE](asciline.md) (ASCII stream từ YT), [iptv-org](iptv-org.md).

## Dùng khi nào?

| Nhu cầu | LibreTube |
|---------|-----------|
| Xem YouTube trên Android ít track / có SponsorBlock | ✅ primary |
| Sync đa thiết bị (Piped) | ✅ optional |
| Tải/archive CLI đa site | → [yt-dlp](yt-dlp.md) |
| Live IPTV playlist | → [iptv-org](iptv-org.md) |

## Chạy thử

```text
# Cài APK: F-Droid · IzzyOnDroid · GitHub Releases
# https://github.com/libre-tube/LibreTube/releases
# Hoặc build bằng Android Studio (Kotlin)
```

Chọn instance Piped trong Settings nếu cần account sync. Đọc FAQ + privacy policy trước khi hỏi cộng đồng.

## So với tool khác

| | LibreTube | yt-dlp | NewPipe |
|--|-----------|--------|---------|
| Việc chính | App xem YT Android | CLI tải | Client đa nền tảng |
| SponsorBlock / DeArrow | ✅ | ❌ (plugin khác) | một phần |
| Chỉ YouTube | ✅ | Đa site | YT + SoundCloud… |

## Odoo / ai_core

Không gắn ERP. Dùng cá nhân / field research xem video; ingest nội dung → [yt-dlp](yt-dlp.md) rồi STT/RAG.

## Link

- Repo: https://github.com/libre-tube/LibreTube · Site: https://libretube.dev  
- Gần: [yt-dlp](yt-dlp.md) · [iptv-org](iptv-org.md) · [ASCILINE](asciline.md)
