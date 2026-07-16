# exo

> **Repo:** [exo-explore/exo](https://github.com/exo-explore/exo)  
> **Category:** DevTools · Cụm AI local nhiều thiết bị  
> **Tags:** `self-host` · `api` · `cli` · `desktop` · `local-llm`
> **Ngôn ngữ:** Python · MLX · Rust · dashboard · **⭐** ~46.3k · **License:** Apache-2.0  
> Slogan: *Run frontier AI locally* · Dashboard: `http://localhost:52415`

## Đây là gì?

**exo** (exo labs) nối **nhiều máy thành một cụm** (*cluster*) để chạy mô hình AI lớn hơn mức một máy chịu nổi.

Các máy tự tìm nhau (*auto-discovery*). Hệ thống tự chọn cách **chia model** (*shard*) theo tài nguyên và mạng (topology-aware). Có **tensor parallelism**; trên Mac hỗ trợ mạnh qua **MLX** và **RDMA over Thunderbolt**. API tương thích OpenAI Chat / Responses, Claude Messages, Ollama — kèm dashboard chat/cluster.

**Cùng kiểu:** [Cake](cake.md) (Rust, đa phương thức + mobile), [LocalAI](localai.md) (một máy, nhiều backend), [AirLLM](airllm.md) (một GPU nhỏ), [MiniCPM](minicpm.md), [DFlash](dflash.md), [FreeLLMAPI](freellmapi.md).

## Dùng khi nào?

| Nhu cầu | exo |
|---------|-----|
| Gom nhiều Mac/GPU chạy 70B–671B local | ✅ cluster + TP |
| API OpenAI/Ollama/Claude-compat | ✅ |
| 1 máy VRAM nhỏ, không cluster | → [AirLLM](airllm.md) / [LocalAI](localai.md) |
| Multi-modal STT/TTS/image engine | → [LocalAI](localai.md) |

## Chạy thử

```bash
# macOS + Nix (nếu có):
nix run .#exo

# Từ source: cần Xcode/Metal, uv, node, rust nightly — xem README
# Mỗi node auto-discover; API + UI tại localhost:52415
```

Benchmark nổi: Qwen3-235B / DeepSeek V3.1 / Kimi K2 trên **4× M3 Ultra** (RDMA Thunderbolt) — xem Jeff Geerling + README.

## So với tool khác

| | exo | LocalAI | AirLLM | Cake |
|--|-----|---------|--------|------|
| Shape | Multi-device cluster + MLX TP | Local multi-backend API | Layer stream 1 GPU | Rust shard + mobile |
| Scale model | Sum RAM/VRAM cluster | Fit host (+quant) | Fit tiny VRAM, chậm I/O | Nhiều OS + mobile |
| Tags | `self-host` `api` `desktop` | `api` `mcp` `stt`… | `self-host` `cli` | `api` `tts` `image-gen` |

## Dùng với Odoo / ai_core

- Lab Mac fleet / Thunderbolt cluster làm gateway local trước khi gắn `ai_core` (OpenAI-compat).  
- Không thay LocalAI khi cần voice/image tool đa backend trên một box Linux.  
- Prefer vLLM/LocalAI single-server khi chỉ một GPU mạnh, không multi-node.

## Link

- Repo: https://github.com/exo-explore/exo · Discord trong README  
- Peers: [localai.md](localai.md) · [airllm.md](airllm.md) · [minicpm.md](minicpm.md) · [dflash.md](dflash.md) · [freellmapi.md](freellmapi.md) · [cake.md](cake.md)
