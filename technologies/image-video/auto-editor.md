# Auto-Editor

> **Repo:** [WyattBlue/auto-editor](https://github.com/WyattBlue/auto-editor)  
> **Category:** Image & Video · CLI cắt video tự động (silence / motion)  
> **Tags:** `video` · `cli`  
> **Ngôn ngữ:** Nim · **⭐** ~5.0k · **License:** Unlicense (public domain)  
> **Site:** [auto-editor.com](https://auto-editor.com) · Cài: [auto-editor.com/installing](https://auto-editor.com/installing)

## Đây là gì?

**Auto-Editor** là CLI **cắt video/audio tự động**: lần “first pass” bỏ đoạn chết — im lặng, ít chuyển động — trước khi bạn chỉnh trên NLE. Mặc định phân tích **âm lượng**; có thể cắt theo **motion**, kết hợp `audio` + `motion`, thêm margin, tăng tốc đoạn to.

Xuất file media hoặc timeline XML cho Premiere, DaVinci Resolve, Final Cut, Shotcut, Kdenlive. Có app/web proprietary riêng; repo CLI là Unlicense.

**Cùng kiểu:** [FreeCut](freecut.md) (NLE browser đa track), [Recordly](recordly.md) (ghi màn hình + editor), [yt-dlp](yt-dlp.md) (tải nguồn), [OpenMontage](openmontage.md) (pipeline agent), [pyVideoTrans](pyvideotrans.md) (dịch/dub).

## Dùng khi nào?

| Nhu cầu | Auto-Editor |
|---------|-------------|
| Bỏ silence / đoạn đứng hình trên podcast, talk, lecture | ✅ `auto-editor file.mp4` |
| Export XML vào Premiere / Resolve / FCP | ✅ `--export …` |
| NLE đa track, effect, caption trong browser | → [FreeCut](freecut.md) |
| Dịch / dub / phụ đề | → [pyVideoTrans](pyvideotrans.md) |
| Agent sinh video từ prompt | → [OpenMontage](openmontage.md) |

## Chạy thử

Cài theo [Installing](https://auto-editor.com/installing) (binary / package). Rồi:

```bash
auto-editor path/to/video.mp4

# padding quanh đoạn giữ (mặc định 0.2s)
auto-editor example.mp4 --margin 0.2sec

# cắt khi ít chuyển động
auto-editor example.mp4 --edit motion:threshold=0.02

# XML Premiere
auto-editor example.mp4 --export premiere
```

Skill cho coding agent: `npx skills add WyattBlue/auto-editor`.

## So với tool khác

| | Auto-Editor | FreeCut | OpenMontage |
|--|-------------|---------|-------------|
| Vai trò | CLI first-pass cắt chết | NLE browser | Agentic production |
| Stack | Nim CLI | TypeScript / WebCodecs | Agent + Remotion |
| Tags | `video` `cli` | `video` `nle` `self-host` | `video` `agent` `skill` |

## Dùng với Odoo / ai_core

- Cắt demo / training clip nội bộ trước khi upload.  
- Ghép [yt-dlp](yt-dlp.md) tải → Auto-Editor cắt silence → lưu kho media.  
- Không phải editor timeline cho marketing phức tạp — dùng [FreeCut](freecut.md) sau first pass.

## Link

- Repo: https://github.com/WyattBlue/auto-editor  
- Docs: https://auto-editor.com  
- Peers: [freecut.md](freecut.md) · [recordly.md](recordly.md) · [yt-dlp.md](yt-dlp.md) · [openmontage.md](openmontage.md)
