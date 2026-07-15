# PlainApp

> **Repo:** [plainhub/plain-app](https://github.com/plainhub/plain-app)  
> **Category:** DevTools · Productivity · phone→browser management hub  
> **Tags:** `self-host` · `desktop` · `workspace` · `edge` · `notification`  
> **Ngôn ngữ:** Kotlin (Jetpack Compose · Ktor) · **⭐** ~6.1k · **License:** AGPL-3.0  
> Site: [plainapp.app](https://plainapp.app) · Play / F-Droid / GitHub Releases

## Đây là gì?

**PlainApp** biến Android thành **hub self-host trên LAN**: mở browser / PWA trên desktop → file, media, contacts, SMS/calls, apps/APK, mirror notification, **screen mirror + remote control**, device info. 100% local, TLS + XChaCha20-Poly1305, không account/cloud/ads.

Trên phone còn notes Markdown, RSS, player, DLNA cast, P2P chat/file, Pomodoro… So với AirDroid/Pushbullet: OSS + full features miễn phí, không cloud.

**Cùng kiểu:** [Dashy](dashy.md) (homelab homepage), [Folo](folo.md) (RSS), [ntfy](ntfy.md) (push), [MicYou](../speech-audio/micyou.md) (Android→PC mic — hẹp hơn), [R2 Web](r2-web.md) (file UI cloud).

## Dùng khi nào?

| Nhu cầu | PlainApp |
|---------|----------|
| Quản phone từ browser cùng Wi-Fi (SMS, file, mirror) | ✅ primary |
| Privacy: data không rời mạng local | ✅ |
| Homelab startpage server | → [Dashy](dashy.md) |
| RSS desktop chuyên sâu | → [Folo](folo.md) |
| Push server (không gắn 1 phone) | → [ntfy](ntfy.md) |

## Chạy thử

```text
# Cài APK (Android 9+): Play / F-Droid / GitHub Releases
# Bật server trong app → mở URL hiện trên PC cùng LAN
# PWA: Add to Home Screen trên desktop
```

Site: https://plainapp.app · Demo video trên README repo.

## So với tool khác

| | PlainApp | Dashy | Folo |
|--|----------|-------|------|
| Shape | Phone-as-server hub | Homelab startpage | AI RSS reader |
| Runtime | Android + browser | Docker/Node | Desktop/web apps |
| Data path | Local Wi-Fi only | Your servers | Feeds |

## Dùng với Odoo / ai_core

- Demo / support remote: gửi APK, screenshot, SMS OTP từ desk khi phone trên cùng LAN.  
- Không thay VPN/MDM doanh nghiệp — dụng cụ cá nhân / lab.  
- AGPL: phân phối binary/fork phải tuân AGPL.

## Link

- Repo: https://github.com/plainhub/plain-app · Site: https://plainapp.app  
- Peers: [dashy.md](dashy.md) · [folo.md](folo.md) · [ntfy.md](ntfy.md) · [micyou.md](../speech-audio/micyou.md) · [r2-web.md](r2-web.md)
