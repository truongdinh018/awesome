# WSL Dashboard

> **Repo:** [owu/wsl-dashboard](https://github.com/owu/wsl-dashboard)  
> **Category:** DevTools · WSL instance manager (Windows)  
> **Tags:** `desktop` · `cli` · `workspace`  
> **Ngôn ngữ:** Rust · Slint · Skia · **⭐** ~3.1k · **License:** GPL-3.0  
> Site: [wslui.com](https://www.wslui.com)

## Đây là gì?

**WSL Dashboard** là app desktop native trên **Windows** để quản lý **WSL** (Windows Subsystem for Linux): start/stop distro, migrate VHDX, export `.tar`, cài distro mới, port forwarding, USB qua `usbipd-win`, mở Terminal / VS Code / Explorer.

UI Slint + Skia (dark/light), system tray (~10MB RAM khi minimize), đa ngôn ngữ (có Tiếng Việt). Không phải AI agent — là **GUI quản lý môi trường dev** khi bạn chạy Ollama, coding agent, hoặc stack Linux trong WSL2.

**Cùng kiểu:** [FluentFlyout](fluent-flyout.md) (media flyout Win11), [WinPodX](winpodx.md) (Linux chạy app Windows), [llmfit](llmfit.md) (chọn model cho WSL), [VeloxDB](veloxdb.md) (SQL desktop), [Floci](floci.md) (local AWS emulator), [Dashy](dashy.md) (homelab hub).

## Dùng khi nào?

| Nhu cầu | WSL Dashboard |
|---------|---------------|
| GUI quản lý nhiều WSL distro trên Windows | ✅ primary |
| Migrate / backup / clone distro | ✅ export `.tar`, move VHDX |
| Port forward + proxy cho service trong WSL | ✅ firewall rule tự động |
| USB passthrough vào WSL (`usbipd-win`) | ✅ |
| Chạy LLM / agent trên Linux | → cài distro + dùng [llmfit](llmfit.md) / [LocalAI](localai.md) trong WSL |
| Homelab homepage (web) | → [Dashy](dashy.md) |

## Chạy thử

```powershell
# Windows 10/11 — WSL đã bật (WSL2 khuyến nghị)
# 1. Tải wsldashboard.exe từ GitHub Releases
# https://github.com/owu/wsl-dashboard/releases

# 2. Chạy portable (không cần installer)
.\wsldashboard.exe

# Khởi động im lặng vào system tray
.\wsldashboard.exe /silent
```

Build từ source (Rust 1.92+): `git clone` → `cargo run` hoặc `.\build\portable\build.ps1`.

## So với tool khác

| | WSL Dashboard | llmfit | Dashy |
|--|---------------|--------|-------|
| Shape | Native WSL manager (Windows) | Rust TUI chọn LLM theo HW | Homelab web dashboard |
| Platform | Windows only | Win/macOS/Linux | Docker / self-host |
| AI | ❌ | ✅ gợi ý model | ❌ |
| Tags | `desktop` `workspace` | `cli` `desktop` `skill` | `self-host` `workspace` |

## Dùng với Odoo / ai_core

- Chuẩn hóa WSL distro cho dev: Ollama, Docker, coding agent (Claude Code, Cursor CLI) trên cùng một UI.  
- Port forward service WSL (LocalAI, RAG stack) ra Windows host cho Odoo / ai_core client.  
- Không thay `wsl.exe` CLI — bổ sung GUI cho migrate/backup và monitoring disk.

## Link

- Repo: https://github.com/owu/wsl-dashboard · Releases: https://github.com/owu/wsl-dashboard/releases  
- Peers: [fluent-flyout.md](fluent-flyout.md) · [winpodx.md](winpodx.md) · [llmfit.md](llmfit.md) · [veloxdb.md](veloxdb.md) · [floci.md](floci.md) · [dashy.md](dashy.md) · [localai.md](localai.md)
