# Open Generative AI

> **Repo:** [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI)  
> **Category:** Image & Video · Multi-model image/video/lip-sync studio (Higgsfield-style)  
> **Tags:** `image-gen` · `video` · `desktop` · `self-host` · `api`  
> **Ngôn ngữ:** JavaScript · Electron · **⭐** ~23.4k · **License:** MIT  
> Hosted: [muapi.ai/open-generative-ai](https://muapi.ai/open-generative-ai) · Backend mặc định: [MuAPI](https://muapi.ai)

## Đây là gì?

**Open Generative AI** (trước đây **Open Higgsfield AI**) là studio OSS UI kiểu Higgsfield: **Image · Video · Lip Sync · Cinema** (+ workflow/agents trên bản hosted).

Gom **200+** model cloud (Flux, Midjourney, Kling, Sora, Veo, Seedance, Nano Banana, Wan…) qua **MuAPI**. Có desktop Electron (Win/Mac/Linux), Docker/`npm`, hoặc hosted sẵn. “Self-host” = **self-host UI**; gen cloud vẫn cần API key MuAPI (trừ path local).

**Local (desktop):** (1) **sd.cpp** bundled (SD1.5/SDXL/Z-Image · Metal/CUDA/Vulkan/ROCm) · (2) **Wan2GP** BYO Gradio server (video + Flux lớn).

**Cùng kiểu:** [ComfyUI](comfyui.md), [Toonflow](toonflow.md), [MoneyPrinterTurbo](moneyprinterturbo.md), [SANA](sana.md), [openmontage.md](openmontage.md)

## Dùng khi nào?

| Nhu cầu | Open Generative AI |
|---------|---------------------|
| Một UI gọi nhiều model cloud (T2I/I2V/lipsync) | ✅ |
| Desktop Electron + history / cinema controls | ✅ |
| Local ảnh nhẹ không API | ✅ sd.cpp (desktop) |
| Local video / Flux lớn | ✅ Wan2GP server riêng |
| Node graph diffusion đầy đủ | → [ComfyUI](comfyui.md) |
| Novel→short drama agent canvas | → [Toonflow](toonflow.md) |

## Chạy thử

```bash
git clone https://github.com/Anil-matcha/Open-Generative-AI.git
cd Open-Generative-AI && npm install   # xem README: workspace packages
# hoặc tải DMG / Setup.exe / AppImage từ Releases
```

Multi-image reference tới ~14 ảnh (model tương thích). Marketing: “no content filters” — **vẫn phải** tuân luật địa phương + consent/IP. MuAPI có chi phí usage; OSS ≠ free unlimited gen.

## So với tool khác

| | Open Generative AI | ComfyUI | Toonflow |
|--|--------------------|---------|----------|
| Shape | Multi-vendor studio UI | Node diffusion runtime | Drama pipeline agents |
| Cloud API hub | ✅ MuAPI | Optional | Provider keys |
| Local engine | sd.cpp · Wan2GP | Native / custom nodes | Thường gọi API |
| Tags | `image-gen` `video` `desktop` `api` | `image-gen` `video` | `video` `agent` `desktop` |

## Dùng với Odoo / ai_core

- Marketing studio nội bộ (key MuAPI company, human QC).  
- Không hardcode “unrestricted” vào agent customer-facing.  
- Prefer ComfyUI/SANA self-host weights nếu privacy tuyệt đối.

## Link

- Repo: https://github.com/Anil-matcha/Open-Generative-AI  
- Peers: [comfyui.md](comfyui.md) · [toonflow.md](toonflow.md) · [moneyprinterturbo.md](moneyprinterturbo.md) · [sana.md](sana.md) · [openmontage.md](openmontage.md)
