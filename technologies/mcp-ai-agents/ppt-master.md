# PPT Master

> **Repo:** [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)  
> **Category:** MCP & AI Agents · Skill sinh `.pptx` editable  
> **Tags:** `skill` · `office` · `cli` · `coding-agent` · `workflow`  
> **Ngôn ngữ:** Python · Agent Skills · **⭐** ~39k · **License:** MIT  
> Demo: [hugohe3.github.io/ppt-master](https://hugohe3.github.io/ppt-master/)

## Đây là gì?

**PPT Master** là **workflow / Agent Skill** chạy trong AI IDE (Claude Code, Cursor, Copilot…): đưa PDF / DOCX / web / text → sinh file **PowerPoint thật** trên máy bạn.

Khác tool “slide = ảnh trong PPTX”: output là **DrawingML** — shape, text, chart/table (tuỳ cờ), animation, speaker notes → narration audio; có thể fill theo template `.pptx` sẵn. Data local (trừ gọi model); chỉ trả phí API model, không SaaS PPT riêng. Chất lượng phụ thuộc model (khuyên Claude context lớn + image gen kiểu `gpt-image-2`).

**Cùng kiểu:** [OfficeCLI](../devtools/officecli.md) (docx/xlsx/pptx CLI), [drawio-skill](drawio-skill.md) (NL→`.drawio`), [knowledge-work-plugins](knowledge-work-plugins.md) (office skills), [LibreOffice harness](../cli-anything/libreoffice.md) (office CLI khác miền).

## Dùng khi nào?

| Nhu cầu | PPT Master |
|---------|------------|
| PDF/DOCX → `.pptx` edit được trong PowerPoint | ✅ |
| Chart/table native + speaker notes / narration | ✅ (xem flag README) |
| Fill content vào template `.pptx` sẵn | ✅ |
| Slide dạng ảnh / HTML deck | ❌ không phải mục tiêu |
| NL → sơ đồ draw.io | → [drawio-skill](drawio-skill.md) |
| Sửa Office file trực tiếp bằng CLI agent | → [OfficeCLI](../devtools/officecli.md) |
| Office batch không qua agent gen deck | → [LibreOffice harness](../cli-anything/libreoffice.md) |

## Chạy thử

```bash
git clone https://github.com/hugohe3/ppt-master.git
cd ppt-master
pip install -r requirements.txt   # Python 3.10+

# hoặc chỉ skill:
# npx skills add hugohe3/ppt-master
# rồi pip install -r requirements.txt tại vị trí skill

# Mở folder trong Cursor / Claude Code, chat ví dụ:
# Please create a PPT from projects/<your>/sources/report.pdf
```

Agent xác nhận design spec → phân tích → SVG → export `exports/<name>_<timestamp>.pptx`. Update git: `python3 skills/ppt-master/scripts/update_repo.py`.

## So với tool khác

| | PPT Master | drawio-skill | knowledge-work-plugins |
|--|------------|--------------|------------------------|
| Artifact | Native `.pptx` | `.drawio` + export | Plugin role Cowork |
| Shape | Skill + Python pipeline | Skill + draw.io CLI | Skill/prompt office |
| Tags | `skill` `office` `workflow` | `skill` `diagram` | `skill` `office` |

## Dùng với Odoo / ai_core

- Báo cáo / proposal từ PDF export Odoo hoặc doc khách → deck editable trước khi gửi.  
- Giữ PII trên máy local; chỉ gửi nội dung cần thiết lên model API.  
- Không thay sinh doc Odoo — bổ sung bước trình bày sau khi RAG/agent soạn nội dung.

## Link

- Repo: https://github.com/hugohe3/ppt-master  
- Peers: [officecli.md](../devtools/officecli.md) · [drawio-skill.md](drawio-skill.md) · [knowledge-work-plugins.md](knowledge-work-plugins.md) · [cli-anything/libreoffice.md](../cli-anything/libreoffice.md)
