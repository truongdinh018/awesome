# Cake

> **Repo:** [evilsocket/cake](https://github.com/evilsocket/cake)  
> **Category:** DevTools · Máy chủ AI đa phương thức, có thể chia nhiều máy (Rust)  
> **Tags:** `api` · `self-host` · `cli` · `tts` · `image-gen` · `edge`  
> **Ngôn ngữ:** Rust · **⭐** ~3.1k · **License:** FAIR (không phải MIT/Apache — xem mục License)  
> Docs: thư mục `docs/` trong repo · Code còn experimental, thay đổi nhanh

## Đây là gì?

**Cake** là máy chủ chạy mô hình AI viết bằng Rust (*inference server*).

Bạn dùng để: **chat** (text), **tạo ảnh** (Stable Diffusion / FLUX), và **đọc chữ thành tiếng** (*TTS*, có *voice clone* với VibeVoice).

Đặc biệt: nếu **một GPU không đủ bộ nhớ (VRAM)**, Cake **chia model** (*shard*) sang nhiều máy hoặc điện thoại trong một *cluster* — Linux, macOS, Windows, iOS, Android (CUDA / Metal / Vulkan / CPU). Worker tự tìm nhau qua *mDNS*; máy chính gửi phần trọng số cần thiết qua mạng. Có API tương thích OpenAI, kèm web UI và chat trong terminal (TUI).

**Cùng kiểu:** [exo](exo.md) (cụm Mac + MLX), [LocalAI](localai.md) (nhiều backend, chín hơn), [AirLLM](airllm.md) (một GPU nhỏ chạy model lớn), [VibeVoice](../speech-audio/vibevoice.md) (TTS).

## Dùng khi nào?

| Nhu cầu | Cake |
|---------|------|
| Chia LLM ra nhiều máy / điện thoại | ✅ `--cluster-key` |
| Một chương trình: text + ảnh + TTS | ✅ đa phương thức (*multimodal*) |
| API local kiểu OpenAI | ✅ `cake serve` |
| Cụm Mac Thunderbolt siêu nhanh | → [exo](exo.md) |
| Engine ổn định, Docker, marketplace | → [LocalAI](localai.md) |
| Model 70B trên ~4GB VRAM (1 máy) | → [AirLLM](airllm.md) |

## Chạy thử

```bash
cargo build --release --features cuda   # hoặc: metal | vulkan | accelerate | CPU
cake pull evilsocket/Qwen3-0.6B
cake serve evilsocket/Qwen3-0.6B
# Máy phụ (worker) — không cần file model:
cake run --cluster-key mysecret --name worker-1
cake run evilsocket/Qwen3-0.6B "Hello" --cluster-key mysecret
```

**License FAIR:** dùng cá nhân / học tập / nghiên cứu thường OK; dùng thương mại cần ghi công (*attribution*); **công ty / business** cần thỏa thuận với tác giả (`evilsocket@gmail.com`).

## So với tool khác

| | Cake | exo | LocalAI |
|--|------|-----|---------|
| Viết bằng | Rust | Python + MLX | Go + nhiều backend |
| Cluster | Nhiều OS + mobile | Mac, tensor parallel + Thunderbolt | Có chế độ phân tán |
| Loại AI | Text + ảnh + TTS | Chủ yếu LLM | Rộng + MCP / agent |
| Tags | `api` `cli` `tts` `image-gen` `edge` | `api` `cli` `desktop` | `api` `mcp` `agent` … |

## Dùng với Odoo / ai_core

- Lab nội bộ: gom laptop/GPU cũ, chia model lớn, trỏ `base_url` cho agent.  
- Demo TTS / ảnh cạnh LLM trên cùng stack.  
- **Production cho công ty:** đọc kỹ FAIR trước — nhiều khi LocalAI / vLLM vẫn phù hợp hơn.

## Link

- Repo: https://github.com/evilsocket/cake  
- Peers: [exo.md](exo.md) · [localai.md](localai.md) · [airllm.md](airllm.md) · [vibevoice.md](../speech-audio/vibevoice.md) · [freellmapi.md](freellmapi.md)
