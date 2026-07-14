# ghgrab

> **Repo:** [abhixdd/ghgrab](https://github.com/abhixdd/ghgrab)  
> **Category:** MCP & AI Agents · Forge file grabber (CLI/TUI)  
> **Tags:** `cli` · `coding-agent` · `self-host`  
> **Ngôn ngữ:** Rust (tokio · ratatui) · **⭐** ~1.2k · **License:** MIT  
> Docs: [ghgrab.readthedocs.io](https://ghgrab.readthedocs.io) · crates.io / npm / PyPI

## Đây là gì?

**ghgrab** — TUI/CLI **browse + download** file/folder từ **GitHub · GitLab · Codeberg · Gitea · Forgejo** mà không `git clone` toàn repo. Cherry-pick đúng path cần; UI ratatui. **Không phải AI** — tool forge helper cho coding agent / developer workflow (kéo skill, config, snippet).

**Cùng kiểu:** [Gitingest](gitingest.md) (repo → digest LLM), [GitReverse](gitreverse.md) (repo → prompt), [Semble](semble.md) (semantic search code).

## Dùng khi nào?

| Nhu cầu | ghgrab |
|---------|--------|
| Lấy 1 file/folder từ forge, không clone | ✅ primary |
| Multi-forge (GH/GL/Gitea…) | ✅ |
| Dump toàn codebase → prompt | → [Gitingest](gitingest.md) |
| Semantic search snippet | → [Semble](semble.md) |

## Chạy thử

```bash
# chọn 1
cargo install ghgrab
npm install -g @ghgrab/ghgrab
pipx install ghgrab

ghgrab                                    # home TUI
ghgrab https://github.com/rust-lang/rust  # browse repo
ghgrab https://github.com/owner/repo --cwd --no-folder
```

Docs & flags: [ghgrab.readthedocs.io](https://ghgrab.readthedocs.io).

## So với tool khác

| | ghgrab | Gitingest | GitReverse |
|--|--------|-----------|------------|
| Shape | TUI grab file/folder | Text digest cho LLM | Reverse → idea prompt |
| AI? | ❌ CLI utility | digest cho LLM | LLM/site reverse |
| Tags | `cli` `coding-agent` | `cli` `rag` | `coding-agent` `prompt` |

## Dùng với Odoo / ai_core

- Kéo `SKILL.md` / snippet từ repo ngoài vào workspace nhanh.  
- Không thay Gitingest khi cần full context cho model.

## Link

- Repo: https://github.com/abhixdd/ghgrab · Docs: https://ghgrab.readthedocs.io  
- Peers: [gitingest.md](gitingest.md) · [gitreverse.md](gitreverse.md) · [semble.md](semble.md) · [easy-vibe.md](easy-vibe.md)
