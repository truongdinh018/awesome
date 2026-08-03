---
name: commit-message
description: Viết commit message ngắn, đúng kiểu repo (conventional commits), khớp diff thực tế.
category: engineering
source: awesome-ai
tags: [git, commit, engineering]
---

# Commit Message

## Quy tắc

- 1 dòng subject ≤ ~72 ký tự, imperative mood.
- Prefers Conventional Commits: `feat|fix|docs|chore|refactor|test|ci(scope): …`
- Body (tuỳ chọn): vì sao, không phải gì đã làm từng dòng.
- Không mention AI / agent trong message trừ khi repo yêu cầu.

## Ví dụ (Awesome AI)

```
chore(trending): cập nhật repo trending tuần 2026-W31
feat(skills): thêm vault Agent Skills + trang Skills trên web
docs(writing): làm rõ checklist tags skill
```

## Trước khi commit

1. `git status` / `git diff` — chỉ stage file liên quan.
2. Không commit secrets, `node_modules`, artifact build thừa.
3. Message phải khớp diff; không “update stuff”.
