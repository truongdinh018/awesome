# ScreenCoder

> **Repo:** [leigest519/ScreenCoder](https://github.com/leigest519/ScreenCoder)  
> **Category:** Image & Video Generation  
> **Tags:** `ui-to-code`  
> **Ngôn ngữ:** Python · **⭐** ~2.8k

## Tổng quan

**ScreenCoder** chuyển **screenshot giao diện UI** thành **HTML/CSS sạch, có thể chỉnh sửa**:

- Input: ảnh chụp màn hình app/web
- Output: HTML + CSS tương đối chính xác layout
- Mục tiêu: **nhanh**, **chính xác**, **dễ customize**

## Pipeline

```
UI Screenshot (PNG)
        │
        ▼
Vision model + layout analysis
        │
        ▼
HTML structure + CSS styles
        │
        ▼
Developer chỉnh sửa → deploy
```

## Use case

- **Prototype nhanh** — design Figma/screenshot → code starter
- **Reverse UI** — học layout từ competitor (tuân thủ bản quyền)
- **Odoo widget** — screenshot form view → template OWL/HTML tham khảo
- **Kết hợp agent** — "nhìn ảnh này, tạo view Odoo tương tự"

## So sánh

| | ScreenCoder | v0 / bolt.new | Figma-to-code |
|--|-------------|---------------|---------------|
| Input chính | Screenshot | Prompt text | Figma file |
| Local | Có thể self-host | Cloud | Plugin |
| Pixel fidelity | Cao (mục tiêu) | Trung bình | Trung bình |

## Hạn chế

- Component **logic** (JS, OWL) không tự sinh — chỉ markup/style
- Responsive cần chỉnh tay
- Design system (Odoo Bootstrap) cần map thủ công

## Liên quan ai_core

- Tool MCP: `screenshot_to_html` → dev paste vào QWeb/OWL scaffold
- Bổ sung **ComfyUI** (sinh ảnh mockup) → **ScreenCoder** (ảnh → code)

## Liên quan catalog

- **[AI Website Cloner](ai-website-cloner.md)** — URL live → Next.js bằng coding agent (sâu hơn screenshot→HTML)

## Link

- Repo: https://github.com/leigest519/ScreenCoder

