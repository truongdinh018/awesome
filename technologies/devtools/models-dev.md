# Models.dev

> **Repo:** [anomalyco/models.dev](https://github.com/anomalyco/models.dev)  
> **Category:** DevTools · AI model catalog (specs · pricing · capabilities)  
> **Tags:** `api` · `dataset` · `skill`  
> **Ngôn ngữ:** TypeScript · Bun · TOML data · **⭐** ~5.9k · **License:** MIT  
> Site: [models.dev](https://models.dev)

## Đây là gì?

**Models.dev** là **database mở** về thông số model AI: tên, context limit, modality, reasoning/tool-call, giá theo provider, benchmark… Cộng đồng đóng góp qua TOML (`models/` + `providers/`); tạo API + trang web. Dùng nội bộ bởi **OpenCode** (cùng nhà anomalyco); Model ID khớp **AI SDK**.

Không phải inference server hay proxy key — chỉ **catalog + API JSON** để agent/tool lookup trước khi gọi model.

**Cùng kiểu:** [llmfit](llmfit.md) / [LLM Checker](llm-checker.md) (chọn model theo hardware local), [FreeLLMAPI](freellmapi.md) (gateway free-tier — khác catalog).

## Dùng khi nào?

| Nhu cầu | Models.dev |
|---------|------------|
| Metadata model + pricing đa provider | ✅ API JSON |
| ID chuẩn cho AI SDK / OpenCode | ✅ |
| Chạy / serve model local | → [LocalAI](localai.md) / [llmfit](llmfit.md) |
| Gom free API keys | → [FreeLLMAPI](freellmapi.md) |

## Chạy thử

```bash
# Catalog đầy đủ (provider endpoints + model)
curl -sL https://models.dev/api.json | head

# Chỉ facts model (provider-agnostic)
curl -sL https://models.dev/models.json | head

# Cả hai trong một response
curl -sL https://models.dev/catalog.json | head

# Logo provider (SVG)
curl -sL https://models.dev/logos/anthropic.svg -o anthropic.svg
```

Góp data: sửa/thêm TOML trong `models/` và `providers/` — xem README repo.

## So với tool khác

| | Models.dev | llmfit | FreeLLMAPI |
|--|------------|--------|------------|
| Niche | Catalog + pricing API | Fit model → hardware | Proxy free tiers |
| Chạy inference | ❌ | gợi ý local run | ✅ proxy cloud |
| Tags | `api` `dataset` | `cli` `desktop` | `api` `mcp` |

## Dùng với Odoo / ai_core

- Agent router / quota: lookup cost + context limit từ `api.json` trước khi pick model.  
- Skill/doc nội bộ: map Model ID (AI SDK) thay vì hard-code tên provider.  
- Không thay LiteLLM/gateway — chỉ nguồn truth metadata.

## Link

- Repo: https://github.com/anomalyco/models.dev · Site: https://models.dev  
- Peers: [llmfit.md](llmfit.md) · [llm-checker.md](llm-checker.md) · [freellmapi.md](freellmapi.md) · [localai.md](localai.md)
