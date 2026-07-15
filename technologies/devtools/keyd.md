# keyd

> **Repo:** [rvaiya/keyd](https://github.com/rvaiya/keyd)  
> **Category:** DevTools · Linux key remapping daemon (system-wide)  
> **Tags:** `cli` · `desktop` · `workspace`  
> **Ngôn ngữ:** C · **⭐** ~5.7k · **License:** MIT  

## Đây là gì?

**keyd** là daemon remap phím **system-wide trên Linux** dùng `evdev`/`uinput` (kernel), không phụ thuộc X11. Layers, tap/hold overload, oneshot modifiers, config theo bàn phím, Unicode; IPC + `keyd-application-mapper` (X / sway / GNOME Wayland). Chạy cả trong VT.

Thay mớ `xmodmap`/`xcape` dính display server. Gần QMK firmware nhưng cho bàn phím “thường”. Khác [kmonad](https://github.com/kmonad/kmonad): keyd = C nhỏ, config đơn; kmonad = Haskell, linh hoạt hơn.

**Cùng kiểu:** [WhatCable](whatcable.md) / [FluentFlyout](fluent-flyout.md) / [WSL Dashboard](wsl-dashboard.md) (desktop utility OS khác).

## Dùng khi nào?

| Nhu cầu | keyd |
|---------|------|
| Caps → Esc tap / Ctrl hold trên Linux | ✅ primary |
| Layers / oneshot / nhiều layout 1 máy | ✅ |
| Remap theo app (experimental) | ✅ `app.conf` |
| Windows / macOS keymap | ❌ Linux (+SBC gadget experimental) |
| USB-C / media flyout | → [WhatCable](whatcable.md) / [FluentFlyout](fluent-flyout.md) |

## Chạy thử

```bash
git clone https://github.com/rvaiya/keyd && cd keyd
make && sudo make install
sudo systemctl enable --now keyd
```

```ini
# /etc/keyd/default.conf
[ids]
*

[main]
capslock = overload(control, esc)
esc = capslock
```

```bash
sudo keyd reload
# Tên phím: keyd monitor  (tắt keyd nếu muốn xem raw)
# Máy “chết” keymap: backspace+escape+enter → keyd thoát
```

Distro: Arch · Debian 13+ · Ubuntu 25.04+ · Fedora COPR · …

## So với tool khác

| | keyd | xmodmap / setxkbmap | kmonad |
|--|------|---------------------|--------|
| Level | Kernel evdev/uinput | Display server | Userspace |
| Layers / oneshot | ✅ | Hạn chế | ✅ (Haskell) |
| VT + multi-KB | ✅ | ❌ / kém | Tuỳ setup |

## Dùng với Odoo / ai_core

- Dev WSL2/Linux: Caps-as-Esc khi code + agent terminal.  
- Không liên quan Odoo runtime — tool ergonomics bàn phím.  
- Tránh config remap phá SSH/server không có TTY dễ escape.

## Link

- Repo: https://github.com/rvaiya/keyd · `man keyd`  
- Peers: [whatcable.md](whatcable.md) · [fluent-flyout.md](fluent-flyout.md) · [wsl-dashboard.md](wsl-dashboard.md)
