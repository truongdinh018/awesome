# OfficeCLI

> **Repo:** [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)  
> **Category:** DevTools · CLI Word/Excel/PPT cho AI agents  
> **Tags:** `cli` · `office` · `skill` · `coding-agent` · `workspace`  
> **Ngôn ngữ:** C# · single binary · **⭐** ~16.9k · **License:** Apache-2.0  
> Site: [officecli.ai](https://officecli.ai)

## Đây là gì?

**OfficeCLI** là suite **đọc / sửa / tạo** file **Word (.docx), Excel (.xlsx), PowerPoint (.pptx)** qua CLI — **không cần cài Microsoft Office**. Binary một file; render HTML/PNG để agent xem và sửa vòng *render → look → fix*. Có **skill** cài vào Claude Code / Cursor / Windsurf / Copilot…

Khác [PPT Master](../mcp-ai-agents/ppt-master.md) (skill gen deck từ PDF bằng LLM pipeline): OfficeCLI = **engine/CLI thao tác Office file trực tiếp**. Khác [LibreOffice harness](../cli-anything/libreoffice.md) (convert headless): OfficeCLI thiết kế path/JSON/watch cho agent. GUI companion: **AionUi**.

**Cùng kiểu:** [Google Workspace CLI](google-workspace-cli.md) (cloud GWS), [PPT Master](../mcp-ai-agents/ppt-master.md), [LibreOffice harness](../cli-anything/libreoffice.md), [knowledge-work-plugins](../mcp-ai-agents/knowledge-work-plugins.md).

## Dùng khi nào?

| Nhu cầu | OfficeCLI |
|---------|-----------|
| Agent tạo/sửa .docx / .xlsx / .pptx local, không Office | ✅ |
| Live preview `officecli watch` + JSON path API | ✅ |
| Skill auto-wire coding agents | ✅ |
| Gen PPT từ PDF bằng skill LLM nặng | → [PPT Master](../mcp-ai-agents/ppt-master.md) |
| Convert Office → PDF headless LibreOffice | → [LibreOffice harness](../cli-anything/libreoffice.md) |
| Drive/Gmail/Sheets Google cloud | → [Google Workspace CLI](google-workspace-cli.md) |

## Chạy thử

```bash
# Agent: paste "curl -fsSL https://officecli.ai/SKILL.md"
# Hoặc:
curl -fsSL https://raw.githubusercontent.com/iOfficeAI/OfficeCLI/main/install.sh | bash
# Windows: irm .../install.ps1 | iex
# brew install officecli · npm i -g @officecli/officecli

officecli create deck.pptx
officecli watch deck.pptx          # preview :26315
officecli add deck.pptx / --type slide --prop title="Hello"
officecli view deck.pptx outline
officecli close deck.pptx
```

## So với tool khác

| | OfficeCLI | PPT Master | LibreOffice harness |
|--|-----------|------------|---------------------|
| Niche | Native Office file CLI + agent skill | LLM → editable PPTX | Convert headless |
| Need MS Office? | ❌ | ❌ | ❌ (LO) |
| Tags | `cli` `office` `skill` | `skill` `office` | `harness` `office` |

## Dùng với Odoo / ai_core

- Agent tạo báo cáo .xlsx / đề xuất .docx từ data Odoo export local.  
- Preprocess phụ lục Office trước Stirling/MinerU.  
- Giữ file nhạy cảm offline — không upload SaaS Office.

## Link

- Repo: https://github.com/iOfficeAI/OfficeCLI · Site: https://officecli.ai  
- Peers: [google-workspace-cli.md](google-workspace-cli.md) · [ppt-master.md](../mcp-ai-agents/ppt-master.md) · [cli-anything/libreoffice.md](../cli-anything/libreoffice.md) · [knowledge-work-plugins.md](../mcp-ai-agents/knowledge-work-plugins.md)
