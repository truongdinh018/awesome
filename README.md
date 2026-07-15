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
| Duyệt theo **domain / subgroup** | [categories/README.md](categories/README.md) |
| Danh sách star **`#1…#211`** | [repos/README.md](repos/README.md) |
| Tìm theo **tag** (`tts`, `rag`, `mcp`…) | [TAGS.md](TAGS.md) |
| Viết / sửa bài | [technologies/WRITING.md](technologies/WRITING.md) |
| Đọc / sửa MD trên web (local) | [site/](site/) — xem bên dưới |

Khác: [CHANGELOG](CHANGELOG.md) · [cli-anything](technologies/cli-anything/README.md) · [bookmarks](technologies/bookmarks/README.md) · [technologies/](technologies/README.md)

### Local reader / editor

App Vite trong [`site/`](site/) — catalog kiểu blog (card + search + lọc domain/tag), mở đọc Markdown, sửa và ghi thẳng vào file trong repo (chỉ khi chạy `dev`).

```bash
cd site
npm install
npm run dev
```

Mở http://localhost:5177 — tìm/lọc tag → mở bài → **Sửa** / **Lưu** (Ctrl/Cmd+S).

```
Star GitHub
    →  repos/README.md                 ← bảng master (#, Primary, Tags, link bài)
    →  technologies/<domain>/<slug>.md ← nội dung VN
Duyệt: categories/ (subgroup) · TAGS.md (capability)
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
├── TAGS.md                ← chú giải tag
├── CHANGELOG.md
├── categories/README.md   ← taxonomy theo domain
├── repos/README.md        ← master star list
├── technologies/          ← bài viết + WRITING.md
└── site/                  ← local web reader/editor (`npm run dev`)
```

**SSOT:** thứ tự star `#` → `repos/` · subgroup → `categories/` · nội dung bài → `technologies/` · nghĩa tag → `TAGS.md`

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
