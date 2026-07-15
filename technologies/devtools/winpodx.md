# WinPodX

> **Repo:** [kernalix7/winpodx](https://github.com/kernalix7/winpodx)  
> **Category:** DevTools · Windows apps → cửa sổ Linux native  
> **Tags:** `desktop` · `cli` · `workspace` · `self-host` · `office`  
> **Ngôn ngữ:** Python · FreeRDP · Podman · **⭐** ~1.6k · **License:** MIT  
> Site: [winpodx.org](https://www.winpodx.org/) · HelloGitHub: [hellogithub.com/…/winpodx](https://hellogithub.com/en/repository/kernalix7/winpodx)

## Đây là gì?

**WinPodX** chạy app Windows trên Linux như app native: mỗi app một cửa sổ riêng (pin taskbar, Alt-Tab, file association) — không cần full desktop RDP.

Cách làm: container Windows ([dockur/windows](https://github.com/dockur/windows)) + **FreeRDP RemoteApp**. Lệnh cài một lần tự provision; discover app từ Start Menu → `.desktop` + icon thật. Có chiều ngược: app Linux hiện trong “Open with…” của Windows. Không phải AI — là lớp **tương thích Windows** khi Wine không đủ (Office, app công ty…).

**Cùng kiểu:** [WSL Dashboard](wsl-dashboard.md) (Windows quản lý Linux), [SmolVM](smolvm.md) (microVM Linux), [Floci](floci.md) (sandbox local khác miền).

## Dùng khi nào?

| Nhu cầu | WinPodX |
|---------|---------|
| Chạy Word / Outlook / app Windows trên desktop Linux | ✅ RemoteApp từng cửa sổ |
| Pin taskbar + double-click `.docx` mở đúng app | ✅ `WM_CLASS` + association |
| Wine kém tương thích, cần Windows thật trong KVM | ✅ |
| Quản lý WSL trên host Windows | → [WSL Dashboard](wsl-dashboard.md) |
| MicroVM Linux nhanh / pack sandbox | → [SmolVM](smolvm.md) |
| Chỉ RDP full desktop thủ công | ❌ nặng hơn, không auto `.desktop` |

## Chạy thử

```bash
# Linux x86_64 / aarch64 — cần KVM, ≥8 GB RAM (khuyên 12+), ~30 GB disk
curl -fsSL https://raw.githubusercontent.com/kernalix7/winpodx/main/install.sh | bash

# Lần đầu ~5–10 phút (ISO + Sysprep). Sau đó click app như .desktop thường.
# Backend mặc định: Podman rootless (có Docker / manual RDP).

winpodx doctor --fix   # health + tự sửa khi cần
```

Distro: openSUSE, Fedora, Debian, Ubuntu, Arch, NixOS… · AppImage trên distro khác.

## So với tool khác

| | WinPodX | WSL Dashboard | SmolVM |
|--|---------|---------------|--------|
| Hướng | Linux host → Windows apps | Windows host → WSL | Host → Linux microVM |
| Shape | RemoteApp + container | GUI quản lý distro | CLI pack/sandbox |
| Tags | `desktop` `workspace` `office` | `desktop` `workspace` | `cli` `self-host` |

## Dùng với Odoo / ai_core

- Máy Linux (hoặc WSL thiếu Office): mở Word/Excel thật để review doc khách, rồi đẩy PDF vào Stirling / MinerU.  
- App Windows nội bộ (ERP client cũ, phần mềm kế toán) song song Cursor/Odoo trên cùng desktop.  
- Không thay stack `ai_core` — chỉ môi trường desktop khi Wine/WSL không giải quyết được app Windows.

## Link

- Repo: https://github.com/kernalix7/winpodx  
- Site: https://www.winpodx.org/  
- HelloGitHub: https://hellogithub.com/en/repository/kernalix7/winpodx  
- Peers: [wsl-dashboard.md](wsl-dashboard.md) · [smolvm.md](smolvm.md) · [floci.md](floci.md)
