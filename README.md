<!-- markdownlint-disable MD013 MD033 MD036 MD041 MD045 -->

<div align="center">

<img src="https://img.shields.io/badge/-⭐_Awesome_AI-0EA5E9?style=for-the-badge&labelColor=000000" alt="Awesome AI" />

### Catalog công nghệ AI

Mỗi ★ = 1 repo đã star + 1 bài **tiếng Việt dễ hiểu** (giữ thuật ngữ Anh: API, LLM, RAG, MCP…).

**7 domain · ~30 tags · 211 ★ · 11 CLI harness**

<p>
  <img src="https://img.shields.io/badge/Technologies-211-success?style=flat-square" />
  <img src="https://img.shields.io/badge/CLI_harnesses-11-informational?style=flat-square" />
  <img src="https://img.shields.io/badge/Categories-7-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/License-Private-red?style=flat-square" />
</p>

</div>

---

## Bắt đầu từ đâu?

| Bạn muốn… | Mở file |
|-----------|---------|
| Biết tool **dùng để làm gì** (theo nhu cầu) | [USE-CASES.md](USE-CASES.md) ← **bắt đầu đây** |
| Duyệt theo **domain / subgroup** | [categories/README.md](categories/README.md) |
| Danh sách star **`#1…#211`** | [repos/README.md](repos/README.md) |
| Chú giải **tag** (`tts`, `rag`, `mcp`…) | [TAGS.md](TAGS.md) |
| Viết / sửa bài | [technologies/WRITING.md](technologies/WRITING.md) |
| Đọc / sửa MD trên web (local) | [site/](site/) — xem bên dưới |

Khác: [USE-CASES](USE-CASES.md) · [CHANGELOG](CHANGELOG.md) · [cli-anything](technologies/cli-anything/README.md) · [bookmarks](technologies/bookmarks/README.md) · [technologies/](technologies/README.md)

### Catalog web (local + GitHub Pages)

App Vite trong [`site/`](site/) — catalog card + search + lọc domain/tag, mở đọc Markdown.

| Môi trường | URL | Ghi chú |
|------------|-----|---------|
| Local | http://localhost:5177 | `npm run dev` — có **Sửa / Lưu** MD |
| GitHub Pages | https://truongdinh018.github.io/awesome-ai/ | build static, **chỉ đọc** |

```bash
cd site
npm install
npm run dev          # local editor
npm run build:pages  # static cho Pages
npm run preview:pages
```

Deploy Pages: workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) (push `main`). Trong repo Settings → Pages → Source: **GitHub Actions**.

```
Nhu cầu (“làm X”) → USE-CASES.md
Star / URL / #      → repos/README.md
Domain / subgroup   → categories/README.md
Tag nghĩa           → TAGS.md
Nội dung VN         → technologies/<domain>/<slug>.md
```

---

## 7 domain (★)

| # | Domain | ★ | Taxonomy | Folder bài |
|---|--------|---|----------|------------|
| 1 | MCP & AI Agents | 71 | [§1](categories/README.md#1-mcp--ai-agents) | [mcp-ai-agents/](technologies/mcp-ai-agents/README.md) |
| 2 | Speech & Audio | 20 | [§2](categories/README.md#2-speech--audio) | [speech-audio/](technologies/speech-audio/README.md) |
| 3 | Image & Video | 28 | [§3](categories/README.md#3-image--video) | [image-video/](technologies/image-video/README.md) |
| 4 | UI Automation | 7 | [§4](categories/README.md#4-ui-automation--computer-use) | [ui-automation/](technologies/ui-automation/README.md) |
| 5 | CV & Edge | 9 | [§5](categories/README.md#5-computer-vision--edge) | [cv-edge/](technologies/cv-edge/README.md) |
| 6 | DevTools | 72 | [§6](categories/README.md#6-devtools--integration) | [devtools/](technologies/devtools/README.md) |
| 7 | Security | 4 | [§7](categories/README.md#7-security--pentesting) | [security/](technologies/security/README.md) |

---

## Cấu trúc

```
awesome-ai/
├── README.md              ← hub (file này)
├── USE-CASES.md           ← phân loại theo nhu cầu (“dùng để”)
├── TAGS.md                ← chú giải tag + dùng để / không phải
├── CHANGELOG.md
├── categories/README.md   ← taxonomy theo domain / subgroup
├── repos/README.md        ← master star list
├── technologies/          ← bài viết + WRITING.md
└── site/                  ← local web reader/editor (`npm run dev`)
```

**SSOT:** nhu cầu → `USE-CASES.md` · star `#` → `repos/` · subgroup → `categories/` · nội dung bài → `technologies/` · nghĩa tag → `TAGS.md`

---

## Checklist: thêm ★ mới

<a id="add-star-checklist"></a>

1. Star repo → viết `technologies/<domain>/<slug>.md` theo [WRITING.md](technologies/WRITING.md)  
2. Thêm **một dòng** vào bảng master [repos/README.md](repos/README.md) (`#`, URL, ⭐, Lang, Primary, Tags, link bài)  
3. Ghép subgroup đúng trong [categories/README.md](categories/README.md)  
4. Cập nhật [TAGS.md](TAGS.md) chỉ nếu cần điểm neo mới  
5. Bump số ★: hub README (badge + bảng domain) · [technologies/README.md](technologies/README.md) · header domain README · totals `categories/`  
6. Dòng đầu [CHANGELOG.md](CHANGELOG.md)

Primary hợp lệ: **MCP & AI Agents** · **Speech & Audio** · **Image & Video** · **UI Automation** · **CV & Edge** · **DevTools** · **Security**.

Harness CLI-Anything → `technologies/cli-anything/<slug>.md` + bảng harness trong `repos/` + nest trong `categories/`.

---

## Repo liên quan

| Repo | Quan hệ |
|------|---------|
| [truongdinh018/awesome-ai](https://github.com/truongdinh018/awesome-ai) | **Repo này** |
| [truongdinh018/ai-training](https://github.com/truongdinh018/ai-training) | Fine-tune / kiến thức nền |
| [truongdinh018/ai_core](https://github.com/truongdinh018/ai_core) | Runtime Odoo — RAG, MCP, agents |

---

<div align="center">

**Awesome AI Knowledge Base** · [CHANGELOG](CHANGELOG.md)

</div>
