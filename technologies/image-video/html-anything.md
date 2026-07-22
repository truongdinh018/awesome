# HTML Anything

> **Repo:** [nexu-io/html-anything](https://github.com/nexu-io/html-anything)  
> **Category:** Image & Video · Agentic HTML editor  
> **Tags:** `skill` · `coding-agent` · `agent` · `video` · `self-host`  
> **Ngôn ngữ:** Next.js · HTML · **⭐** ~7.9k · **License:** Apache-2.0  
> Site: [open-design.ai/html-anything](https://open-design.ai/html-anything/) · Built on [open-design](https://github.com/nexu-io/open-design)

## Đây là gì?

**HTML Anything** là *agentic HTML editor* local-first: AI coding CLI (Claude/Cursor/Codex/Gemini/Copilot/OpenCode/Qwen/Aider) viết **single-file HTML ship-ready** từ Markdown/CSV/JSON/notes — **zero API key** (reuse login session). **75 skills × 9 surfaces** (magazine, deck, poster, XHS/tweet, prototype, data report, **Hyperframes**…). Preview sandboxed; 1-click export WeChat / X / Zhihu / HTML / PNG.

**Cùng kiểu:** [HyperFrames](hyperframes.md) (render frame → mp4), [Huashu Design](huashu-design.md) (design skill HTML+motion), [AI Website Cloner](ai-website-cloner.md) (URL → Next app), [AI-auto-generate-video](ai-auto-generate-video.md) (VN short pipeline), [CLI-Anything](../mcp-ai-agents/cli-anything.md) / [Ponytail](../mcp-ai-agents/ponytail.md) (skill ecosystem).

## Dùng khi nào?

| Nhu cầu | HTML Anything |
|---------|---------------|
| MD/notes → deck / poster / XHS card | ✅ skill picker |
| Hyperframes storyboard → Remotion | ✅ `video-hyperframes` skill |
| Paste WeChat / Zhihu / tweet PNG | ✅ juice + screenshot export |
| Screenshot UI → React | → [ScreenCoder](screencoder.md) / Cloner |
| Full video pipeline TTS | → [AI-auto-generate-video](ai-auto-generate-video.md) |

## Chạy thử

```bash
git clone https://github.com/nexu-io/html-anything
cd html-anything && pnpm install
pnpm -F @html-anything/next dev   # → :3000
```

SSE streaming preview · interrupt & re-prompt. Agent stays on laptop; Vercel chỉ web layer. CJK-first · anti-slop constraints trong mỗi `SKILL.md`.

## So với tool khác

| | HTML Anything | HyperFrames | AI Website Cloner |
|--|---------------|-------------|-------------------|
| Output | Designed HTML artifact | HTML→video render | Clone URL→Next.js |
| Agent | Local CLI (BYO session) | Agent-native video | Coding agents |
| Tags | `skill` `coding-agent` `video` | `video` `cli` `agent` | `ui-to-code` `skill` |

## Dùng với Odoo / ai_core

- Pitch / release notes / training deck từ markdown nội bộ.  
- Social card marketing Odoo module.  
- Frame script → HyperFrames cho demo sản phẩm.

## Link

- Repo: https://github.com/nexu-io/html-anything  
- Site: https://open-design.ai/html-anything/  
- Peers: [hyperframes.md](hyperframes.md) · [huashu-design.md](huashu-design.md) · [ai-website-cloner.md](ai-website-cloner.md) · [ai-auto-generate-video.md](ai-auto-generate-video.md) · [openmontage.md](openmontage.md)
