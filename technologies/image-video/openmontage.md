# OpenMontage

> **Repo:** [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)  
> **Category:** Image & Video · Agentic video production studio  
> **Tags:** `video` · `agent` · `skill` · `coding-agent` · `workflow` · `cli` · `tts`  
> **Ngôn ngữ:** Python · Remotion (React) · HyperFrames · **⭐** ~38.3k · **License:** AGPL-3.0  
> README CN: [README_zh-CN.md](https://github.com/calesthio/OpenMontage/blob/main/README_zh-CN.md)

## Đây là gì?

**OpenMontage** là hệ thống **agentic video production** open-source: biến coding assistant (Claude Code, Cursor, Copilot, Windsurf, Codex) thành studio — research → script → assets → edit → compose.

Có **12 pipelines · 52 tools · 500+ skills**. Compose qua **Remotion** hoặc **HyperFrames**; Backlot = living storyboard / approval gate local. Hỗ trợ cả “video thật” từ stock/archive, không chỉ Ken Burns trên stills.

**Cùng kiểu:** [HyperFrames](hyperframes.md), [AI-auto-generate-video](ai-auto-generate-video.md), [HTML Anything](html-anything.md), [AudioBook KJ](../speech-audio/audiobook-kj.md), [Addy's Agent Skills](../mcp-ai-agents/agent-skills.md)

## Dùng khi nào?

| Nhu cầu | OpenMontage |
|---------|-------------|
| Prompt → video hoàn chỉnh qua agent | ✅ pipelines + tools registry |
| Reference YouTube/Short → concept + cost | ✅ paste video flow |
| Zero paid keys (Piper + archives + Remotion) | ✅ `make setup` |
| Chỉ engine HTML→MP4 | → [HyperFrames](hyperframes.md) |
| Shorts TikTok cứng template | → [AI-auto-generate-video](ai-auto-generate-video.md) |

## Chạy thử

```bash
git clone https://github.com/calesthio/OpenMontage.git && cd OpenMontage
make setup
# Trong Cursor/Claude: "Make a 60-second explainer about neural networks"
python -m backlot open              # living storyboard library
```

Optional keys: fal / Kling / OpenAI / ElevenLabs / Runway / Pexels… GPU local: `make install-gpu` (Wan, Hunyuan, LTX…). AGPL-3.0 — chú ý license khi embed commercial.

## So với tool khác

| | OpenMontage | HyperFrames | AI-auto-generate-video |
|--|-------------|-------------|------------------------|
| Niche | Full production OS for agents | HTML/GSAP → video | Skill Shorts + TTS |
| Shape | Pipelines + 500+ skills | Render framework | Domain skill pack |
| Tags | `video` `agent` `skill` `workflow` | `video` `cli` `agent` | `video` `skill` `tts` |

## Dùng với Odoo / ai_core

- Training / release explainer từ changelog module (agent trong Cursor).  
- Product demos marketing với approval gate Backlot.  
- Ghép TTS local (Piper / OmniVoice) khi không muốn cloud voice.

## Link

- Repo: https://github.com/calesthio/OpenMontage  
- Agent guide: `AGENT_GUIDE.md` · Prompt gallery: `PROMPT_GALLERY.md`  
- Peers: [hyperframes.md](hyperframes.md) · [ai-auto-generate-video.md](ai-auto-generate-video.md) · [html-anything.md](html-anything.md) · [audiobook-kj.md](../speech-audio/audiobook-kj.md) · [pyvideotrans.md](pyvideotrans.md)
