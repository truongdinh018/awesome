# FluentFlyout

> **Repo:** [unchihugo/FluentFlyout](https://github.com/unchihugo/FluentFlyout)  
> **Category:** DevTools · Media / system flyout (Windows 11)  
> **Tags:** `desktop` · `workspace`  
> **Ngôn ngữ:** C# · WPF · Fluent 2 · **⭐** ~3.4k · **License:** GPL-3.0  
> Site: [fluentflyout.com](https://fluentflyout.com)

## Đây là gì?

**FluentFlyout** là app flyout hiện đại cho **Windows 11**, thiết kế Fluent 2: điều khiển media (cover, title, artist, play/pause, repeat/shuffle), flyout “Up Next”, trạng thái lock keys, và **taskbar widget** hiện info nhạc ngay trên thanh taskbar.

Dùng Mica blur, theo light/dark + accent hệ thống, animation mượt, tray ẩn. Không phải AI — là **lớp UX desktop** khi làm việc lâu trên Windows (WSL, coding agent, LocalAI…). GitHub Releases = full free; bản Microsoft Store có update tự động + vài feature unlock trả phí một lần.

**Cùng kiểu:** [WSL Dashboard](wsl-dashboard.md) (quản lý WSL), [CheatReader](cheatreader.md) (floating reader), [BleachBit](bleachbit.md) (dọn disk/privacy), [WinPodX](winpodx.md) (Windows apps trên Linux), [Dashy](dashy.md) (homelab hub — khác nền).

## Dùng khi nào?

| Nhu cầu | FluentFlyout |
|---------|--------------|
| Media flyout đẹp hơn OSD Windows mặc định | ✅ |
| Widget media trên taskbar + Up Next | ✅ |
| Lock keys status flyout | ✅ |
| Quản lý distro WSL | → [WSL Dashboard](wsl-dashboard.md) |
| Chạy app Windows từ Linux | → [WinPodX](winpodx.md) |

## Chạy thử

```powershell
# Cách 1 — GitHub Releases (full free, update tay)
# https://github.com/unchihugo/FluentFlyout/releases
# 1. Cài file .cer vào Trusted Root (Local Machine) — xem README repo
# 2. Cài *.msixbundle

# Cách 2 — Microsoft Store (update tự động; một số feature premium)

# Settings: click icon system tray
```

Build từ source: mở `FluentFlyout.sln` (WPF + MSIX).

## So với tool khác

| | FluentFlyout | WSL Dashboard | WinPodX |
|--|--------------|---------------|---------|
| Niche | Media / lock flyout Win11 | Quản lý WSL | Linux → Windows apps |
| Platform | Windows 11 | Windows | Linux host |
| AI | ❌ | ❌ | ❌ |
| Tags | `desktop` `workspace` | `desktop` `cli` `workspace` | `desktop` `office` |

## Dùng với Odoo / ai_core

- Môi trường Windows: nghe nhạc / podcast khi code Odoo–WSL mà không làm phiền OSD hệ thống.  
- Không liên quan runtime `ai_core` — chỉ UX máy host.  
- Ưu tiên bản GitHub nếu muốn đủ feature không trả Store.

## Link

- Repo: https://github.com/unchihugo/FluentFlyout · Site: https://fluentflyout.com  
- Peers: [wsl-dashboard.md](wsl-dashboard.md) · [cheatreader.md](cheatreader.md) · [bleachbit.md](bleachbit.md) · [winpodx.md](winpodx.md) · [dashy.md](dashy.md)
