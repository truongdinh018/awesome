# termshot

> **Repo:** [homeport/termshot](https://github.com/homeport/termshot)  
> **Category:** DevTools · Terminal → PNG screenshot (ANSI-accurate)  
> **Tags:** `cli` · `desktop`  
> **Ngôn ngữ:** Go · **⭐** ~0.9k · **License:** MIT  

## Đây là gì?

**termshot** tạo **ảnh screenshot terminal đẹp** từ lệnh bạn chạy: prefix như `time`/`watch` — đọc ANSI escape (màu/format thật), render khung cửa sổ kiểu carbon.now.sh / codekeep, **không** syntax-highlight text giả. Output `out.png` (hoặc clipboard / path tùy chọn).

Hữu ích docs, README, blog: chụp `ls`, pipeline, demo CLI. Có `--edit`, `--show-cmd`, margin/padding, shell interactive (`termshot /bin/zsh`).

**Cùng kiểu:** [ASCILINE](../image-video/asciline.md) (video→ASCII — khác), [Recordly](../image-video/recordly.md) (screen demo), [React Scan](react-scan.md) (devtools — khác miền), [CheatReader](cheatreader.md) (desktop UX).

## Dùng khi nào?

| Nhu cầu | termshot |
|---------|----------|
| PNG đẹp từ output CLI (giữ ANSI) | ✅ primary |
| Docs / PR với ảnh terminal | ✅ |
| Stream video ASCII realtime | → [ASCILINE](../image-video/asciline.md) |
| Record screen demo sản phẩm | → [Recordly](../image-video/recordly.md) |

## Chạy thử

```bash
brew install homeport/tap/termshot
# hoặc binary: https://github.com/homeport/termshot/releases

termshot ls -a
termshot --show-cmd -- "ls -1 | grep go"
termshot --filename docs/demo.png -- "odoo -c odoo.conf --help"
# --edit  mở $EDITOR trước khi render (che secret)
```

Darwin + Linux. WIP: một số ANSI / cursor reset còn lỗi.

## So với tool khác

| | termshot | carbon.now.sh | ASCILINE |
|--|----------|---------------|----------|
| Input | Live CLI + ANSI | Paste text | Video stream |
| Offline | ✅ | Web | Server + browser |
| Output | PNG window chrome | Image | ASCII canvas |

## Dùng với Odoo / ai_core

- Chụp output `odoo-bin` / pytest / agent CLI cho docs nội bộ.  
- `--edit` trước khi dán log có token/URL.  
- Agent có thể gọi `termshot` trong sandbox để artifact review.

## Link

- Repo: https://github.com/homeport/termshot  
- Peers: [asciline.md](../image-video/asciline.md) · [recordly.md](../image-video/recordly.md) · [react-scan.md](react-scan.md) · [cheatreader.md](cheatreader.md)
