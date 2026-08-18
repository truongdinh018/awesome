# Skills Vault — Awesome AI

Thư viện **Agent Skills** (`SKILL.md`) dùng với Cursor · Claude Code · Codex · Copilot.

Mỗi skill = 1 thư mục trong `vault/<id>/SKILL.md` (spec [agentskills.io](https://agentskills.io)).

## Duyệt trên web

Catalog web có menu **Skills** (`?skills=1`):

```bash
cd site && npm run dev
# mở http://localhost:5177/?skills=1
```

Build production kèm index:

```bash
cd site
npm run index:skills
npm run build
```

## Cấu trúc

```
skills/
  README.md          ← file này
  WRITING.md         ← thêm skill mới
  vault/
    <skill-id>/
      SKILL.md       ← bắt buộc
      …              ← script / assets phụ (tuỳ chọn)
```

## Nhóm hiện có

| Category | Mô tả |
|----------|--------|
| `awesome-ai` | Workflow catalog (trending, viết bài, thêm ★) |
| `engineering` | Review, commit |
| `notion` | Skill Notion MCP (mirror từ Cursor Notion plugin) |

## Cài vào agent

```bash
# Cursor — copy hoặc symlink
cp -R skills/vault/<id> ~/.cursor/skills/<id>
# hoặc vào project: .cursor/skills/<id>

# Claude Code / skills CLI (khi publish repo skill)
npx skills add <owner>/<repo> --skill <id>
```

## Liên quan

- Tag catalog `skill`: lọc `?tag=skill` trên web
- Bookmark registries: [technologies/bookmarks/skill-registries.md](../technologies/bookmarks/skill-registries.md)
- Peers đã ★: Addy Agent Skills, Taste Skill, Caveman, Ponytail…
