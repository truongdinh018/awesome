# AI Engineering Coach

> **Repo:** [microsoft/AI-Engineering-Coach](https://github.com/microsoft/AI-Engineering-Coach)  
> **Category:** MCP & AI Agents · Dashboard phân tích local cho AI coding harness  
> **Tags:** `coding-agent` · `skill` · `desktop` · `cli`  
> **Ngôn ngữ:** TypeScript · VS Code extension (+ Copilot canvas) · **⭐** ~3.3k · **License:** MIT  
> Disclaimer upstream: community effort by MS employees — **không** phải sản phẩm Microsoft chính thức

## Đây là gì?

**AI Engineer Coach** là extension VS Code đọc **local AI session logs** → dashboard hành vi agentic: practice scores, anti-patterns (45 rules), output theo language/model/harness, skill finder (prompt lặp → skill), context health.

Mọi phân tích chạy **trên máy**; không gửi telemetry proprietary. Cũng chạy như canvas trong GitHub Copilot app (một phần feature ẩn khi không có VS Code LM API).

**Cùng kiểu:** [Spec Kit](spec-kit.md) (SDD ship), [Addy's Agent Skills](agent-skills.md) / [Caveman](caveman.md) (skill style), [CC Workflow Studio](cc-wf-studio.md) (canvas→skills), [Headroom](headroom.md) (context MCP — khác góc).

## Dùng khi nào?

| Nhu cầu | AI Engineering Coach |
|---------|----------------------|
| Đo / cải thiện habit dùng Copilot·Claude·Cursor… | ✅ Dashboard · Timeline · Patterns |
| Detect anti-pattern prompt / session / review | ✅ 45 rules + Rule Editor |
| Prompt lặp → reusable skill | ✅ Skill Finder |
| Context / AGENTS.md readiness | ✅ Context Health |
| Spec → implement có cấu trúc | → [Spec Kit](spec-kit.md) |
| Nén reply / MCP descriptions | → [Caveman](caveman.md) / [Headroom](headroom.md) |

## Chạy thử

```bash
git clone https://github.com/microsoft/AI-Engineering-Coach.git
cd AI-Engineering-Coach
npm ci && npm run package
code --install-extension ai-engineer-coach-*.vsix
# Command Palette → "AI Engineer Coach: Open Dashboard"
```

Dev Container path: mở repo trong VS Code Dev Containers → `npm ci && npm run package` (không cần Node host). Chưa publish marketplace — phải build `.vsix` tay.

**Privacy:** read-only logs · local-only · AI features (skill finder, context review…) chỉ khi user gọi Copilot LM API.

## So với tool khác

| | AI Eng Coach | Spec Kit | Addy's Skills |
|--|--------------|----------|---------------|
| Shape | Observability + coach dashboard | SDD toolkit + CLI | Lifecycle skill pack |
| Input | Session logs local | Spec/plan markdown | Prompt/skill files |
| Tags | `coding-agent` `skill` `desktop` | `coding-agent` `cli` `workflow` | `skill` `prompt` |

## Dùng với Odoo / ai_core

- Coach habit Cursor/Claude khi ship module `ai_core` (anti-pattern context dump, thiếu review).  
- Skill Finder → seed skill nội bộ Odoo (quota, ingest ACL…).  
- Không thay CI/review bảo mật; chỉ telemetry usage cá nhân / team máy local.

## Link

- Repo: https://github.com/microsoft/AI-Engineering-Coach  
- Peers: [spec-kit.md](spec-kit.md) · [agent-skills.md](agent-skills.md) · [caveman.md](caveman.md) · [cc-wf-studio.md](cc-wf-studio.md) · [headroom.md](headroom.md)
