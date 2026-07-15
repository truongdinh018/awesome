# Gyroflow

> **Repo:** [gyroflow/gyroflow](https://github.com/gyroflow/gyroflow)  
> **Category:** Image & Video · Gyro-based video stabilization  
> **Tags:** `video` · `desktop` · `self-host`  
> **Ngôn ngữ:** Rust · **⭐** ~9.2k · **License:** GPL-3.0  
> Site: [gyroflow.xyz](https://gyroflow.xyz)

## Đây là gì?

**Gyroflow** ổn định video bằng **dữ liệu gyroscope** (và accelerometer) ghi trong camera — GoPro, Sony, Insta360, DJI… hoặc log ngoài (Betaflight blackbox, Sensor Logger…). Preview realtime, GPU, **rolling shutter correction**, lens profile, adaptive zoom; plugin Premiere / Resolve / FCP; xuất H.264/H.265/ProRes/… Win · Linux · Mac · Android · iOS.

Không phải AI NLE — **post-stabilize bằng IMU**, chính xác hơn “optical flow ổn định” kiểu consumer khi có telemetry.

**Cùng kiểu:** [FreeCut](freecut.md) (NLE browser), [Recordly](recordly.md) (screen demo), [pyVideoTrans](pyvideotrans.md) (dub), [yt-dlp](yt-dlp.md) (tải nguồn).

## Dùng khi nào?

| Nhu cầu | Gyroflow |
|---------|----------|
| Stabilize FPV / action cam có gyro log | ✅ primary |
| Plugin NLE không cần re-transcode full | ✅ |
| Edit timeline + STT/TTS | → [FreeCut](freecut.md) |
| Screen recording demo | → [Recordly](recordly.md) |

## Chạy thử

```bash
# Releases: https://github.com/gyroflow/gyroflow/releases
# macOS: brew install gyroflow
# Win: Gyroflow-windows64.zip → Gyroflow.exe (+ VC redist nếu thiếu DLL)
# Linux: Gyroflow-linux64.tar.gz → ./Gyroflow  (cần driver GPU mới)
```

Kéo video (+ sync gyro nếu tách file) → chỉnh smooth / lens → Render hoặc export plugin.

## So với tool khác

| | Gyroflow | FreeCut | Recordly |
|--|----------|---------|----------|
| Niche | Gyro stabilize | Browser NLE | Screen demo |
| Input | Video + IMU/gyro | Timeline media | Screen capture |
| AI | ❌ | STT/TTS on-device | ❌ |

## Dùng với Odoo / ai_core

- Footage field / drone demo sản phẩm → ổn định trước khi gắn FreeCut / marketing.  
- Không liên quan pipeline Odoo runtime.  
- GPL: plugin/binary phân phối phải tuân GPL.

## Link

- Repo: https://github.com/gyroflow/gyroflow · Site: https://gyroflow.xyz  
- Peers: [freecut.md](freecut.md) · [recordly.md](recordly.md) · [yt-dlp.md](yt-dlp.md) · [pyvideotrans.md](pyvideotrans.md)
