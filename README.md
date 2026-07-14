<!-- markdownlint-disable MD013 MD033 MD036 MD041 MD045 -->

<div align="center">

<img src="https://img.shields.io/badge/-⭐_Awesome_AI-0EA5E9?style=for-the-badge&labelColor=000000" alt="Awesome AI" />

### **Catalog công nghệ AI — repo đã star, phân loại & bài viết chi tiết**

**MCP · Speech · Image/Video · DevTools · Computer Vision**

<p>
  <img src="https://img.shields.io/badge/Technologies-12-success?style=flat-square" />
  <img src="https://img.shields.io/badge/Categories-5-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/License-Private-red?style=flat-square" />
</p>

<p>
  <a href="categories/README.md"><strong>📂 Categories</strong></a> ·
  <a href="repos/README.md"><strong>🔗 Starred Repos</strong></a> ·
  <a href="https://github.com/truongdinh018/ai-training"><strong>🧠 AI Training</strong></a> ·
  <a href="https://github.com/truongdinh018/ai_core"><strong>⚙️ AI Core</strong></a>
</p>

</div>

---

## 📊 Tổng quan

> **Awesome AI** — repo **private** gom các công nghệ AI đã **star** trên GitHub, phân nhóm theo domain. Mỗi công nghệ có **bài viết MD riêng** (tổng quan, use case, liên kết, ghi chú triển khai).

| | |
|---|---|
| **Công nghệ** | 12 |
| **Nhóm** | 5 |
| **Bài viết** | [`technologies/`](technologies/) |
| **Index repo** | [`repos/README.md`](repos/README.md) |

---

## 📑 Mục lục

- [Danh sách công nghệ](#-danh-sách-công-nghệ)
  - [MCP & AI Agents](#-mcp--ai-agents)
  - [Speech & Audio](#️-speech--audio)
  - [Image & Video Generation](#-image--video-generation)
  - [DevTools & Integration](#️-devtools--integration)
  - [Computer Vision & Edge](#-computer-vision--edge)
- [Cấu trúc thư mục](#-cấu-trúc-thư-mục)
- [Repo liên quan](#-repo-liên-quan)
- [Cách cập nhật](#-cách-cập-nhật)

---

## 📋 Danh sách công nghệ

| # | Nhóm | Công nghệ | Vai trò | Repo | Bài viết |
|---|------|-----------|---------|------|----------|
| 1 | MCP & Agents | **NotebookLM MCP** | RAG qua NotebookLM + Gemini, citation-backed | [PleasePrompto/notebooklm-mcp](https://github.com/PleasePrompto/notebooklm-mcp) | [notebooklm-mcp.md](technologies/notebooklm-mcp.md) |
| 2 | MCP & Agents | **Destructive Command Guard** | Chặn lệnh git/shell nguy hiểm từ agent | [Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard) | [destructive-command-guard.md](technologies/destructive-command-guard.md) |
| 3 | Speech & Audio | **faster-whisper** | Speech-to-text nhanh (CTranslate2) | [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) | [faster-whisper.md](technologies/faster-whisper.md) |
| 4 | Speech & Audio | **VoxCPM** | TTS đa ngôn ngữ, voice design, cloning | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | [voxcpm.md](technologies/voxcpm.md) |
| 5 | Speech & Audio | **OmniVoice Studio** | Voice cloning local (thay ElevenLabs) | [debpalash/OmniVoice-Studio](https://github.com/debpalash/OmniVoice-Studio) | [omnivoice-studio.md](technologies/omnivoice-studio.md) |
| 6 | Speech & Audio | **AudioSeal** | Watermark âm thanh AI-generated | [facebookresearch/audioseal](https://github.com/facebookresearch/audioseal) | [audioseal.md](technologies/audioseal.md) |
| 7 | Image & Video | **ComfyUI** | Diffusion GUI modular (node graph) | [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | [comfyui.md](technologies/comfyui.md) |
| 8 | Image & Video | **HyperFrames** | HTML → video, built for agents | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | [hyperframes.md](technologies/hyperframes.md) |
| 9 | Image & Video | **ScreenCoder** | Screenshot UI → HTML/CSS | [leigest519/ScreenCoder](https://github.com/leigest519/ScreenCoder) | [screencoder.md](technologies/screencoder.md) |
| 10 | DevTools | **Google Workspace CLI** | Drive, Gmail, Calendar, Sheets… một CLI | [googleworkspace/cli](https://github.com/googleworkspace/cli) | [google-workspace-cli.md](technologies/google-workspace-cli.md) |
| 11 | DevTools | **ntfy** | Push notification HTTP → phone/desktop | [binwiederhier/ntfy](https://github.com/binwiederhier/ntfy) | [ntfy.md](technologies/ntfy.md) |
| 12 | Computer Vision | **ALPR** | Nhận dạng biển số trên Jetson Orin Nano | [joshkautz/alpr](https://github.com/joshkautz/alpr) | [alpr.md](technologies/alpr.md) |

---

## 🗂️ Phân loại chi tiết

### 🤖 MCP & AI Agents

Kết nối AI agent với nguồn tri thức, bảo vệ môi trường khi agent chạy lệnh.

| Công nghệ | Repo | Bài viết |
|-----------|------|----------|
| **NotebookLM MCP** | [PleasePrompto/notebooklm-mcp](https://github.com/PleasePrompto/notebooklm-mcp) | [technologies/notebooklm-mcp.md](technologies/notebooklm-mcp.md) |
| **Destructive Command Guard** | [Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard) | [technologies/destructive-command-guard.md](technologies/destructive-command-guard.md) |

### 🎙️ Speech & Audio

STT, TTS, voice cloning, watermark âm thanh AI.

| Công nghệ | Repo | Bài viết |
|-----------|------|----------|
| **faster-whisper** | [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) | [technologies/faster-whisper.md](technologies/faster-whisper.md) |
| **VoxCPM** | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | [technologies/voxcpm.md](technologies/voxcpm.md) |
| **OmniVoice Studio** | [debpalash/OmniVoice-Studio](https://github.com/debpalash/OmniVoice-Studio) | [technologies/omnivoice-studio.md](technologies/omnivoice-studio.md) |
| **AudioSeal** | [facebookresearch/audioseal](https://github.com/facebookresearch/audioseal) | [technologies/audioseal.md](technologies/audioseal.md) |

### 🎨 Image & Video Generation

Sinh ảnh/video, screenshot → code, HTML → video.

| Công nghệ | Repo | Bài viết |
|-----------|------|----------|
| **ComfyUI** | [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | [technologies/comfyui.md](technologies/comfyui.md) |
| **HyperFrames** | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | [technologies/hyperframes.md](technologies/hyperframes.md) |
| **ScreenCoder** | [leigest519/ScreenCoder](https://github.com/leigest519/ScreenCoder) | [technologies/screencoder.md](technologies/screencoder.md) |

### 🛠️ DevTools & Integration

CLI tích hợp workspace, push notification cho pipeline/agent.

| Công nghệ | Repo | Bài viết |
|-----------|------|----------|
| **Google Workspace CLI** | [googleworkspace/cli](https://github.com/googleworkspace/cli) | [technologies/google-workspace-cli.md](technologies/google-workspace-cli.md) |
| **ntfy** | [binwiederhier/ntfy](https://github.com/binwiederhier/ntfy) | [technologies/ntfy.md](technologies/ntfy.md) |

### 📷 Computer Vision & Edge

Inference CV real-time trên edge device (Jetson), offline, camera + GPS.

| Công nghệ | Repo | Bài viết |
|-----------|------|----------|
| **ALPR** | [joshkautz/alpr](https://github.com/joshkautz/alpr) | [technologies/alpr.md](technologies/alpr.md) |

---

## 📦 Cấu trúc thư mục

```
awesome-ai/
├── README.md                      # Mục lục chính (file này)
├── categories/
│   └── README.md                  # Mô tả 5 nhóm + sơ đồ mermaid
├── technologies/                  # Bài viết chi tiết từng công nghệ
│   │
│   │  # MCP & AI Agents
│   ├── notebooklm-mcp.md
│   ├── destructive-command-guard.md
│   │
│   │  # Speech & Audio
│   ├── faster-whisper.md
│   ├── voxcpm.md
│   ├── omnivoice-studio.md
│   ├── audioseal.md
│   │
│   │  # Image & Video Generation
│   ├── comfyui.md
│   ├── hyperframes.md
│   ├── screencoder.md
│   │
│   │  # DevTools & Integration
│   ├── google-workspace-cli.md
│   ├── ntfy.md
│   │
│   │  # Computer Vision & Edge
│   └── alpr.md
└── repos/
    └── README.md                  # Index repo + metadata (stars, ngôn ngữ)
```

---

## 🌐 Repo liên quan

| Repo | Quan hệ |
|------|---------|
| [truongdinh018/awesome-ai](https://github.com/truongdinh018/awesome-ai) | **Repo này** — catalog công nghệ |
| [truongdinh018/ai-training](https://github.com/truongdinh018/ai-training) | Fine-tune LLM, kiến thức nền |
| [truongdinh018/ai_core](https://github.com/truongdinh018/ai_core) | Runtime Odoo — RAG, MCP, agents |

---

## 🤝 Cách cập nhật

```
Star repo mới trên GitHub  →  Thêm vào repos/  →  Viết technologies/*.md  →  Cập nhật README
```

1. Star repo mới trên GitHub
2. Thêm vào [`repos/README.md`](repos/README.md) (stars, ngôn ngữ, category)
3. Viết hoặc cập nhật `technologies/<slug>.md`
4. Gán category trong [`categories/README.md`](categories/README.md) và bảng trên

---

<div align="center">

**Awesome AI Knowledge Base**

*Cập nhật lần cuối: 2026-07-14 — 12 công nghệ*

</div>
