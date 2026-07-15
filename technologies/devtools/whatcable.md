# WhatCable

> **Repo:** [darrylmorley/whatcable](https://github.com/darrylmorley/whatcable)  
> **Category:** DevTools · Menu bar macOS — USB-C / Thunderbolt cable thật sự làm được gì  
> **Tags:** `desktop` · `cli` · `workspace`  
> **Ngôn ngữ:** Swift · **⭐** ~7.1k  
> **License:** Mixed — MIT (default OSS) + proprietary (Pro features); đọc `LICENSE`  
> Site: [whatcable.uk](https://whatcable.uk) · Pro: [whatcable.uk/pro](https://whatcable.uk/pro)

## Đây là gì?

**WhatCable** là app **menu bar macOS** (Apple Silicon, macOS 14+) giải thích bằng tiếng thường: mỗi cáp **USB-C** cắm vào Mac thật sự hỗ trợ gì (tốc độ data, công suất sạc, Thunderbolt/USB4…) và vì sao Mac **sạc chậm**.

Đọc thông tin qua **IOKit** / e-marker / USB-PD: headline theo port, banner bottleneck sạc/data, trust signals e-marker “khác thường”, danh sách PDO sạc, thiết bị gắn kèm, topology Thunderbolt. Kèm **CLI** `whatcable` (`--json` / `--watch`). **WhatCable Pro** (mua một lần) mở thêm lịch sử cáp, power monitor, negotiation/display diagnostics, TUI dashboard.

Không phải AI — utility hardware cho desk Mac (dock, eGPU cable, “cáp sạc nhanh”).

**Cùng kiểu:** [keyd](keyd.md) (Linux key remap), [FluentFlyout](fluent-flyout.md) / [WSL Dashboard](wsl-dashboard.md) / [CheatReader](cheatreader.md) (desktop utility), [BleachBit](bleachbit.md) (system tool).

## Dùng khi nào?

| Nhu cầu | WhatCable |
|---------|-----------|
| Biết cáp USB-C có phải Thunderbolt / 100W không | ✅ menu bar + CLI |
| Chẩn đoán “sạc chậm” / data chậm (cáp vs sạc vs Mac) | ✅ |
| Script / JSON port state | ✅ `whatcable --json` |
| macOS Intel / Windows / Linux | ❌ Apple Silicon + macOS 14+ only |
| Remap phím system-wide Linux | → [keyd](keyd.md) |
| Quản lý WSL / media flyout Win11 | → [WSL Dashboard](wsl-dashboard.md) / [FluentFlyout](fluent-flyout.md) |

## Chạy thử

```bash
# Homebrew (app + CLI)
brew install --cask darrylmorley/whatcable/whatcable

# Chỉ CLI
brew install darrylmorley/whatcable/whatcable-cli

# Hoặc tải WhatCable.zip từ Releases → kéo vào /Applications

whatcable                 # tóm tắt mọi port
whatcable --json | jq .
whatcable --watch
```

App signed + notarized (ngoài Mac App Store — sandbox chặn IOKit thấp).

## So với tool khác

| | WhatCable | FluentFlyout | WSL Dashboard |
|--|-----------|--------------|---------------|
| Niche | USB-C / PD / TB diagnostics | Media flyout Win11 | Quản lý WSL |
| OS | macOS Apple Silicon | Windows 11 | Windows |
| Tags | `desktop` `cli` | `desktop` `workspace` | `desktop` `cli` |

## Dùng với Odoo / ai_core

- Không gắn ERP / RAG.  
- Hữu ích khi setup lab Mac (LocalAI GPU dock, capture card, TB enclosure) — biết cáp đúng spec.  
- Không dùng thay connector S3/R2 hay attachment Odoo.

## Link

- Repo: https://github.com/darrylmorley/whatcable  
- Site: https://whatcable.uk  
- Peers: [fluent-flyout.md](fluent-flyout.md) · [wsl-dashboard.md](wsl-dashboard.md) · [cheatreader.md](cheatreader.md) · [bleachbit.md](bleachbit.md)
