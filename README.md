<!-- markdownlint-disable MD013 MD033 MD036 MD041 MD045 -->

<div align="center">

<img src="https://img.shields.io/badge/-⭐_Awesome_AI-0EA5E9?style=for-the-badge&labelColor=000000" alt="Awesome AI" />

### Catalog công nghệ AI

Mỗi ★ = 1 repo đã star + 1 bài **tiếng Việt dễ hiểu**  
(giữ thuật ngữ Anh: API, LLM, RAG, MCP…)

<p>
  <img src="https://img.shields.io/badge/★_220-success?style=flat-square" alt="220 stars" />
  <img src="https://img.shields.io/badge/CLI_harness-11-22C55E?style=flat-square" alt="11 harnesses" />
  <img src="https://img.shields.io/badge/Domain-7-blue?style=flat-square" alt="7 domains" />
  <img src="https://img.shields.io/badge/License-Private-red?style=flat-square" alt="Private" />
</p>

</div>

---

## Mục lục

| | Đi tới |
|---|--------|
| 🧭 | [Bắt đầu từ đâu?](#-bắt-đầu-từ-đâu) |
| 🎨 | [7 domain (màu phân loại)](#-7-domain-màu-phân-loại) |
| 🌐 | [Catalog web](#-catalog-web-local--github-pages) |
| 🔎 | [Search ngữ nghĩa (SQLite)](SEARCH.md) |
| 📁 | [Cấu trúc repo](#-cấu-trúc) |
| ✅ | [Thêm ★ mới](#-checklist-thêm--mới) |
| 🔗 | [Repo liên quan](#-repo-liên-quan) |

---

## 🧭 Bắt đầu từ đâu?

| Bạn muốn… | Mở file | Badge |
|-----------|---------|-------|
| Biết tool **dùng để làm gì** | [USE-CASES.md](USE-CASES.md) | ![](https://img.shields.io/badge/START_HERE-22C55E?style=flat-square) |
| Duyệt theo **domain / subgroup** | [categories/README.md](categories/README.md) | ![](https://img.shields.io/badge/taxonomy-6366F1?style=flat-square) |
| Danh sách star **`#1…#220`** | [repos/README.md](repos/README.md) | ![](https://img.shields.io/badge/master_list-0EA5E9?style=flat-square) |
| Chú giải **tag** (`tts`, `rag`…) | [TAGS.md](TAGS.md) | ![](https://img.shields.io/badge/tags-A855F7?style=flat-square) |
| Viết / sửa bài | [technologies/WRITING.md](technologies/WRITING.md) | ![](https://img.shields.io/badge/writing-F97316?style=flat-square) |
| Đọc / sửa MD trên web | [site/](site/) | ![](https://img.shields.io/badge/web_app-14B8A6?style=flat-square) |

<details>
<summary><strong>Quick map — chọn đúng file</strong></summary>

```
Nhu cầu (“làm X”)  →  USE-CASES.md
Star / URL / #     →  repos/README.md
Domain / subgroup  →  categories/README.md
Tag nghĩa          →  TAGS.md
Nội dung VN        →  technologies/<domain>/<slug>.md
```

</details>

---

## 🎨 7 domain (màu phân loại)

> Màu badge khớp catalog web (`site/src/domainLabels.ts`).

| # | Domain | ★ | Taxonomy | Folder |
|---|--------|---|----------|--------|
| 1 | [![](https://img.shields.io/badge/MCP_&_AI_Agents-14B8A6?style=flat-square)](categories/README.md#1-mcp--ai-agents) | **75** | [§1](categories/README.md#1-mcp--ai-agents) | [mcp-ai-agents/](technologies/mcp-ai-agents/README.md) |
| 2 | [![](https://img.shields.io/badge/Speech_&_Audio-A855F7?style=flat-square)](categories/README.md#2-speech--audio) | **20** | [§2](categories/README.md#2-speech--audio) | [speech-audio/](technologies/speech-audio/README.md) |
| 3 | [![](https://img.shields.io/badge/Image_&_Video-F97316?style=flat-square)](categories/README.md#3-image--video) | **29** | [§3](categories/README.md#3-image--video) | [image-video/](technologies/image-video/README.md) |
| 4 | [![](https://img.shields.io/badge/UI_Automation-3B82F6?style=flat-square)](categories/README.md#4-ui-automation--computer-use) | **8** | [§4](categories/README.md#4-ui-automation--computer-use) | [ui-automation/](technologies/ui-automation/README.md) |
| 5 | [![](https://img.shields.io/badge/CV_&_Edge-EAB308?style=flat-square)](categories/README.md#5-computer-vision--edge) | **9** | [§5](categories/README.md#5-computer-vision--edge) | [cv-edge/](technologies/cv-edge/README.md) |
| 6 | [![](https://img.shields.io/badge/DevTools-0EA5E9?style=flat-square)](categories/README.md#6-devtools--integration) | **75** | [§6](categories/README.md#6-devtools--integration) | [devtools/](technologies/devtools/README.md) |
| 7 | [![](https://img.shields.io/badge/Security-F43F5E?style=flat-square)](categories/README.md#7-security--pentesting) | **4** | [§7](categories/README.md#7-security--pentesting) | [security/](technologies/security/README.md) |

<p align="center">
  <img src="https://img.shields.io/badge/MCP_&_AI_Agents-75-14B8A6?style=for-the-badge" alt="MCP 75" />
  <img src="https://img.shields.io/badge/DevTools-75-0EA5E9?style=for-the-badge" alt="DevTools 75" />
  <img src="https://img.shields.io/badge/Image_&_Video-29-F97316?style=for-the-badge" alt="Image 29" />
  <img src="https://img.shields.io/badge/Speech_&_Audio-20-A855F7?style=for-the-badge" alt="Speech 20" />
</p>
<p align="center">
  <img src="https://img.shields.io/badge/CV_&_Edge-9-EAB308?style=for-the-badge" alt="CV 9" />
  <img src="https://img.shields.io/badge/UI_Automation-8-3B82F6?style=for-the-badge" alt="UI 8" />
  <img src="https://img.shields.io/badge/Security-4-F43F5E?style=for-the-badge" alt="Security 4" />
  <img src="https://img.shields.io/badge/CLI_harness-11-22C55E?style=for-the-badge" alt="Harness 11" />
</p>

| Màu | Domain | Khi nào chọn |
|-----|--------|--------------|
| ![](https://img.shields.io/badge/-14B8A6?style=flat-square) | **MCP & AI Agents** | MCP, RAG, agent, skill, memory |
| ![](https://img.shields.io/badge/-A855F7?style=flat-square) | **Speech & Audio** | STT / TTS / voice-clone |
| ![](https://img.shields.io/badge/-F97316?style=flat-square) | **Image & Video** | Gen ảnh/video, NLE, CAD/3D |
| ![](https://img.shields.io/badge/-3B82F6?style=flat-square) | **UI Automation** | Browser / computer-use |
| ![](https://img.shields.io/badge/-EAB308?style=flat-square) | **CV & Edge** | Vision, IoT, edge device |
| ![](https://img.shields.io/badge/-0EA5E9?style=flat-square) | **DevTools** | OCR, gateway, office, self-host |
| ![](https://img.shields.io/badge/-F43F5E?style=flat-square) | **Security** | Pentest, OSINT, guardrail |
| ![](https://img.shields.io/badge/-22C55E?style=flat-square) | **CLI-Anything** | Harness con của [#16](technologies/mcp-ai-agents/cli-anything.md) |

---

## 🌐 Catalog web (local + GitHub Pages)

App Vite trong [`site/`](site/) — card + search (từ khóa / ngữ nghĩa / hybrid) + lọc domain/tag + đọc Markdown.  
Chi tiết index SQLite + badge Mới/Cập nhật: [SEARCH.md](SEARCH.md).

| Môi trường | URL | Ghi chú |
|------------|-----|---------|
| 💻 Local | http://localhost:5177 | `npm run dev` — có **Sửa / Lưu** MD |
| 📄 GitHub Pages | https://truongdinh018.github.io/awesome/ | build static, **chỉ đọc** · **PWA** (cài app / offline shell) |

```bash
cd site
npm install
npm run index:search   # embed + SQLite (lần đầu / khi thêm bài)
npm run dev            # local editor
npm run build:pages    # static cho Pages
npm run preview:pages
```

Deploy: [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) · Settings → Pages → Source: **GitHub Actions**.

---

## 📁 Cấu trúc

```
awesome/
├── README.md                 ← hub (file này)
├── USE-CASES.md              ← “dùng để làm gì?”
├── TAGS.md                   ← chú giải tag
├── CHANGELOG.md
├── categories/README.md      ← taxonomy domain / subgroup
├── repos/README.md           ← master star list #1…#220
├── technologies/             ← bài VN + WRITING.md
│   ├── mcp-ai-agents/        ■ teal
│   ├── speech-audio/         ■ purple
│   ├── image-video/          ■ orange
│   ├── ui-automation/        ■ blue
│   ├── cv-edge/              ■ amber
│   ├── devtools/             ■ sky
│   ├── security/             ■ rose
│   └── cli-anything/         ■ green
└── site/                     ← web reader/editor
```

**SSOT**

| Nguồn sự thật | File |
|---------------|------|
| Nhu cầu (“làm X”) | `USE-CASES.md` |
| Star `#` + URL | `repos/README.md` |
| Subgroup | `categories/README.md` |
| Nghĩa tag | `TAGS.md` |
| Nội dung bài | `technologies/<domain>/` |

---

## ✅ Checklist: thêm ★ mới

<a id="add-star-checklist"></a>

1. Star repo → viết `technologies/<domain>/<slug>.md` theo [WRITING.md](technologies/WRITING.md)
2. Thêm **một dòng** vào [repos/README.md](repos/README.md) (`#`, URL, ⭐, Lang, Primary, Tags, link bài)
3. Ghép subgroup đúng trong [categories/README.md](categories/README.md)
4. Cập nhật [TAGS.md](TAGS.md) chỉ nếu cần điểm neo mới
5. Bump số ★: hub README (badge + bảng domain) · [technologies/README.md](technologies/README.md) · header domain README · totals `categories/`
6. Dòng đầu [CHANGELOG.md](CHANGELOG.md)

**Primary hợp lệ** (chọn đúng 1, theo màu):

![](https://img.shields.io/badge/MCP_&_AI_Agents-14B8A6?style=flat-square)
![](https://img.shields.io/badge/Speech_&_Audio-A855F7?style=flat-square)
![](https://img.shields.io/badge/Image_&_Video-F97316?style=flat-square)
![](https://img.shields.io/badge/UI_Automation-3B82F6?style=flat-square)
![](https://img.shields.io/badge/CV_&_Edge-EAB308?style=flat-square)
![](https://img.shields.io/badge/DevTools-0EA5E9?style=flat-square)
![](https://img.shields.io/badge/Security-F43F5E?style=flat-square)

Harness CLI-Anything → `technologies/cli-anything/<slug>.md` + bảng harness trong `repos/` + nest trong `categories/`.

---

## 🔗 Repo liên quan

| Repo | Quan hệ |
|------|---------|
| [truongdinh018/awesome](https://github.com/truongdinh018/awesome) | **Repo này** |
| [truongdinh018/ai-training](https://github.com/truongdinh018/ai-training) | Fine-tune / kiến thức nền |
| [truongdinh018/ai_core](https://github.com/truongdinh018/ai_core) | Runtime Odoo — RAG, MCP, agents |

---

<div align="center">

**Awesome AI Knowledge Base** · [CHANGELOG](CHANGELOG.md) · [USE-CASES](USE-CASES.md) · [Tags](TAGS.md)

</div>
