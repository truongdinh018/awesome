# Recordly

> **Repo:** [webadderallorg/Recordly](https://github.com/webadderallorg/Recordly)  
> **Category:** Image & Video · Screen recorder + demo editor (desktop)  
> **Tags:** `video` · `desktop` · `self-host`  
> **Ngôn ngữ:** TypeScript · Electron · **⭐** ~19.1k · **License:** AGPL-3.0  
> Site: [recordly.dev](https://recordly.dev)

## Đây là gì?

**Recordly** là app desktop **ghi màn hình + chỉnh demo** (macOS / Windows / Linux): sau khi record nhảy thẳng vào editor — auto-zoom theo cursor, làm mượt con trỏ, webcam bubble, khung/wallpaper/gradient, timeline trim/speed/annotation. Xuất **MP4** / **GIF**. Project `.recordly`; có **extensions marketplace**.

Không phải AI gen video — thay Loom/CapCut-lite cho **product walkthrough** khi không muốn học NLE nặng. Capture native (ScreenCaptureKit / WGC / Electron trên Linux).

**Cùng kiểu:** [FreeCut](freecut.md) (NLE browser đa track), [OpenToonz](opentoonz.md) (2D animation), [HyperFrames](hyperframes.md) / [OpenMontage](openmontage.md) (compose/agent — khác demo screen).

## Dùng khi nào?

| Nhu cầu | Recordly |
|---------|----------|
| Demo sản phẩm / walkthrough đẹp nhanh | ✅ zoom · cursor · frame |
| Webcam overlay + export GIF/MP4 | ✅ |
| Record + edit một app desktop | ✅ |
| NLE đa track trong browser | → [FreeCut](freecut.md) |
| Agent gen video từ script | → [OpenMontage](openmontage.md) |

## Chạy thử

```bash
# Releases: https://github.com/webadderallorg/Recordly/releases
# Arch: yay -S recordly-bin

git clone https://github.com/webadderallorg/Recordly.git recordly
cd recordly && npm install && npm run dev
# Package: npm run build:mac | build:win | build:linux

# macOS quarantine (bản local):
xattr -rd com.apple.quarantine /Applications/Recordly.app
```

macOS 14+ · Windows 10 19041+ · Linux hiện đại. Linux: chưa hide cursor khi record.

## So với tool khác

| | Recordly | FreeCut | OpenMontage |
|--|----------|---------|-------------|
| Niche | Screen demo polish | Browser NLE full | Agentic production |
| AI | ❌ (motion UX) | STT/TTS on-device | ✅ agents |
| License | AGPL-3.0 | MIT | — |

## Dùng với Odoo / ai_core

- Quay demo Odoo/module cho docs, sales, onboarding — local file, không bắt buộc cloud.  
- AGPL: fork/phân phối binary phải tuân source disclosure.  
- Không thay pipeline gen video agent — chỉ lớp capture/polish.

## Link

- Repo: https://github.com/webadderallorg/Recordly · Site: https://recordly.dev  
- Peers: [freecut.md](freecut.md) · [opentoonz.md](opentoonz.md) · [hyperframes.md](hyperframes.md) · [openmontage.md](openmontage.md)
