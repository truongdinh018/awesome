<!-- markdownlint-disable MD013 MD033 MD036 MD041 MD045 -->

<div align="center">

<img src="https://img.shields.io/badge/-⭐_Awesome_AI-0EA5E9?style=for-the-badge&labelColor=000000" alt="Awesome AI" />

### **Catalog công nghệ AI — repo đã star, phân loại & bài viết chi tiết**

**MCP · Speech · Image/Video · UI Automation · Computer Vision · DevTools**

<p>
  <img src="https://img.shields.io/badge/Technologies-16-success?style=flat-square" />
  <img src="https://img.shields.io/badge/CLI_harnesses-11-informational?style=flat-square" />
  <img src="https://img.shields.io/badge/Categories-6-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/License-Private-red?style=flat-square" />
</p>

<p>
  <a href="categories/README.md"><strong>📂 Categories</strong></a> ·
  <a href="repos/README.md"><strong>🔗 Starred Repos</strong></a> ·
  <a href="../ai-training/README.md"><strong>🧠 AI Training</strong></a>
</p>

</div>

---

## 📊 Tổng quan

> **Awesome AI** — repo **private** gom các công nghệ AI bạn đã **star** trên GitHub, phân nhóm theo domain, mỗi công nghệ có **bài viết MD riêng** (tổng quan, use case, liên kết, ghi chú triển khai).

**Quy trình cập nhật:**

```
Star repo mới trên GitHub  →  Thêm vào repos/  →  Viết technologies/*.md  →  Cập nhật README
```

---

## 🗂️ Phân loại (6 nhóm)

### 🤖 MCP & AI Agents

| Công nghệ | Repo | Bài viết |
|-----------|------|----------|
| **NotebookLM MCP** | [PleasePrompto/notebooklm-mcp](https://github.com/PleasePrompto/notebooklm-mcp) | [technologies/notebooklm-mcp.md](technologies/notebooklm-mcp.md) |
| **Destructive Command Guard** | [Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard) | [technologies/destructive-command-guard.md](technologies/destructive-command-guard.md) |
| **SAG** | [Zleap-AI/SAG](https://github.com/Zleap-AI/SAG) | [technologies/sag.md](technologies/sag.md) |
| **CLI-Anything** | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | [technologies/cli-anything.md](technologies/cli-anything.md) |
| └ *11 harness con* | cùng monorepo / CLI-Hub | [cli-anything/README.md](technologies/cli-anything/README.md) |

### 🎙️ Speech & Audio

| Công nghệ | Repo | Bài viết |
|-----------|------|----------|
| **faster-whisper** | [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) | [technologies/faster-whisper.md](technologies/faster-whisper.md) |
| **VoxCPM** | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | [technologies/voxcpm.md](technologies/voxcpm.md) |
| **OmniVoice Studio** | [debpalash/OmniVoice-Studio](https://github.com/debpalash/OmniVoice-Studio) | [technologies/omnivoice-studio.md](technologies/omnivoice-studio.md) |
| **AudioSeal** | [facebookresearch/audioseal](https://github.com/facebookresearch/audioseal) | [technologies/audioseal.md](technologies/audioseal.md) |
| **XiaoZhi ESP32** | [78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32) | [technologies/xiaozhi-esp32.md](technologies/xiaozhi-esp32.md) |
| **VideoCaptioner** *(con CLI-Anything)* | HKUDS harness | [cli-anything/videocaptioner.md](technologies/cli-anything/videocaptioner.md) |

### 🎨 Image & Video Generation

| Công nghệ | Repo | Bài viết |
|-----------|------|----------|
| **ComfyUI** ★ | [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | [technologies/comfyui.md](technologies/comfyui.md) |
| └ **ComfyUI harness** | CLI-Anything | [cli-anything/comfyui.md](technologies/cli-anything/comfyui.md) |
| **HyperFrames** | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | [technologies/hyperframes.md](technologies/hyperframes.md) |
| **ScreenCoder** | [leigest519/ScreenCoder](https://github.com/leigest519/ScreenCoder) | [technologies/screencoder.md](technologies/screencoder.md) |
| **FreeCAD / Blender / Godot** *(con CLI-Anything)* | harness CAD·3D·engine | [cli-anything/](technologies/cli-anything/README.md) |

### 🖱️ UI Automation & Computer Use

| Công nghệ | Repo | Bài viết |
|-----------|------|----------|
| **Midscene.js** | [web-infra-dev/midscene](https://github.com/web-infra-dev/midscene) | [technologies/midscene.md](technologies/midscene.md) |
| **Slay the Spire II** *(con CLI-Anything)* | game CLI harness | [cli-anything/slay-the-spire-ii.md](technologies/cli-anything/slay-the-spire-ii.md) |

### 📷 Computer Vision & Edge

| Công nghệ | Repo | Bài viết |
|-----------|------|----------|
| **ALPR** | [joshkautz/alpr](https://github.com/joshkautz/alpr) | [technologies/alpr.md](technologies/alpr.md) |

### 🛠️ DevTools & Integration

| Công nghệ | Repo | Bài viết |
|-----------|------|----------|
| **Google Workspace CLI** | [googleworkspace/cli](https://github.com/googleworkspace/cli) | [technologies/google-workspace-cli.md](technologies/google-workspace-cli.md) |
| **ntfy** | [binwiederhier/ntfy](https://github.com/binwiederhier/ntfy) | [technologies/ntfy.md](technologies/ntfy.md) |
| **Draw.io / n8n / LibreOffice / ArcGIS** *(con CLI-Anything)* | diagram · workflow · office · GIS | [cli-anything/](technologies/cli-anything/README.md) |

---

## 📦 Cấu trúc thư mục

```
awesome-ai/
├── README.md                 # Mục lục chính (file này)
├── categories/
│   └── README.md             # Mô tả 6 nhóm + sơ đồ
├── technologies/             # Bài viết chi tiết từng công nghệ
│   ├── notebooklm-mcp.md
│   ├── destructive-command-guard.md
│   ├── midscene.md
│   ├── faster-whisper.md
│   ├── voxcpm.md
│   ├── omnivoice-studio.md
│   ├── audioseal.md
│   ├── comfyui.md
│   ├── hyperframes.md
│   ├── screencoder.md
│   ├── google-workspace-cli.md
│   ├── ntfy.md
│   ├── alpr.md
│   ├── xiaozhi-esp32.md
│   ├── sag.md
│   ├── cli-anything.md          # cha
│   └── cli-anything/            # 11 harness con + index
│       ├── README.md
│       ├── freecad.md
│       ├── blender.md
│       ├── drawio.md
│       ├── videocaptioner.md
│       ├── slay-the-spire-ii.md
│       ├── arcgis-pro.md
│       ├── comfyui.md
│       ├── obsidian.md
│       ├── n8n.md
│       ├── libreoffice.md
│       └── godot.md
└── repos/
    └── README.md             # Index repo + metadata
```

---

## 🌐 Repo liên quan

| Repo | Quan hệ |
|------|---------|
| [truongdinh018/awesome-ai](https://github.com/truongdinh018/awesome-ai) | **Repo này** — catalog công nghệ |
| [truongdinh018/ai-training](https://github.com/truongdinh018/ai-training) | Fine-tune LLM, kiến thức nền |
| [truongdinh018/ai_core](https://github.com/truongdinh018/ai_core) | Runtime Odoo — RAG, MCP, agents |

---

## 🤝 Cập nhật

1. Star repo mới → thêm vào `repos/README.md`
2. Viết hoặc cập nhật `technologies/<tên>.md`
3. Gán category trong `categories/README.md` và bảng trên

---

<div align="center">

**Awesome AI Knowledge Base**

*Cập nhật lần cuối: 2026-07-14 — 16 công nghệ ★ · 11 CLI harness con · 6 nhóm*

</div>
