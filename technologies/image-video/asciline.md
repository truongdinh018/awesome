# ASCILINE

> **Repo:** [YusufB5/ASCILINE](https://github.com/YusufB5/ASCILINE)  
> **Category:** Image & Video · Stream / render video ASCII realtime  
> **Tags:** `video` · `cli` · `self-host` · `browser`  
> **Ngôn ngữ:** Python · JS · **⭐** ~2.5k  
> **License:** MIT (+ *anti-advertisement restriction* — đọc `LICENSE`)  
> Demo: [asciline.dev](https://www.asciline.dev)

## Đây là gì?

**ASCILINE** là engine **render video → ASCII / pixel-grid** realtime: server Python (OpenCV + NumPy + FastAPI) map pixel → khung chữ, stream binary qua **WebSocket**; browser vẽ bằng **HTML5 Canvas** (~24–30 FPS), đồng bộ audio làm master clock.

Không dùng thẻ `<video>` / codec trình duyệt: client chỉ nhận text/grid — phù hợp thiết bị yếu / zero-GPU, CSS filter trực tiếp trên “video chữ”. Có mode màu (B&W → 16M), codec adaptive (RAW/ZLIB/DELTA/RLE), biên dịch `.ascf` static (host Pages/Vercel) hoặc Studio compile trong browser.

**Cùng kiểu:** [yt-dlp](yt-dlp.md) (tải nguồn — ASCILINE đã tích hợp yt-dlp URL), [iptv-org](iptv-org.md) (playlist live), [termshot](../devtools/termshot.md) (CLI→PNG terminal — khác video), [FreeCut](freecut.md) (NLE browser), [HyperFrames](hyperframes.md) (compose video agent).

## Dùng khi nào?

| Nhu cầu | ASCILINE |
|---------|----------|
| Phát video kiểu terminal / canvas chữ trên web | ✅ |
| Stream LAN low-bandwidth, không GPU client | ✅ `--host 0.0.0.0` |
| File static `.ascf` không cần Python lúc chạy | ✅ `static_player/` |
| Tải / lưu MP4 từ YouTube | → [yt-dlp](yt-dlp.md) |
| PNG screenshot 1 lệnh terminal | → [termshot](../devtools/termshot.md) |
| Gen / edit video AI | → [ComfyUI](comfyui.md) / [FreeCut](freecut.md) |

## Chạy thử

```bash
git clone https://github.com/YusufB5/ASCILINE.git
cd ASCILINE
pip install fastapi uvicorn opencv-python numpy websockets
# optional: yt-dlp · ffmpeg/ffprobe (audio + thumbnail)

python stream_server.py video.mp4 --cols 240
python stream_server.py "https://youtu.be/VIDEO_ID" --cols 240   # cần yt-dlp
python stream_server.py video.mp4 --host 0.0.0.0 --debug

# Compile static player
python static_player/compiler.py your_video.mp4 --cols 250 --pixel --quantize 2
```

Mở URL server in ra (thường local) → Canvas player. Demo public: [asciline.dev](https://www.asciline.dev).

## So với tool khác

| | ASCILINE | yt-dlp | FreeCut |
|--|----------|--------|---------|
| Vai trò | Render/stream ASCII video | Download media | Browser NLE |
| Tags | `video` `cli` `browser` | `video` `cli` | `video` `self-host` |

## Dùng với Odoo / ai_core

- Demo / kiosk “preview video dạng text” trên intranet (LAN stream).  
- Roadmap repo gợi ý ASCII làm input LLM thay VLM — **chưa ship**; chưa gắn pipeline RAG.  
- Tôn trọng license chống quảng cáo khi fork/host công khai.

## Link

- Repo: https://github.com/YusufB5/ASCILINE  
- Demo: https://www.asciline.dev  
- Peers: [yt-dlp.md](yt-dlp.md) · [iptv-org.md](iptv-org.md) · [freecut.md](freecut.md) · [hyperframes.md](hyperframes.md)
