# Floci

> **Repo:** [floci-io/floci](https://github.com/floci-io/floci)  
> **Category:** DevTools · Free local AWS emulator  
> **Tags:** `self-host` · `cli` · `api`  
> **Ngôn ngữ:** Java · Docker · **⭐** ~16.7k · **License:** MIT  
> Site: [floci.io/floci](https://floci.io/floci/) · Endpoint mặc định: `http://localhost:4566`

## Đây là gì?

**Floci** là emulator **AWS local** OSS miễn phí (không account, không token, không feature gate): point AWS SDK/CLI/Terraform/CDK/OpenTofu vào `localhost:4566`.

Nhiều service chạy **Docker thật** (Lambda, RDS, ECS, EC2, EKS…) thay vì mock nông. Testcontainers / CI friendly. Định vị thay **LocalStack** khi cần “always free”.

**Cùng kiểu:** [Cake](cake.md) / [exo](exo.md) (local inference cluster — khác domain), [Duckle](duckle.md) (local ETL), [LocalAI](localai.md) (local LLM API). Không thay cloud prod AWS.

## Dùng khi nào?

| Nhu cầu | Floci |
|---------|-------|
| Dev/test AWS APIs offline / CI | ✅ primary |
| S3/SQS/Dynamo/Lambda local | ✅ |
| Local LLM / multi-model serve | → [LocalAI](localai.md) |
| GPU cluster LLM Mac | → [exo](exo.md) |

## Chạy thử

```bash
floci start
eval $(floci env)
aws s3 mb s3://my-bucket
```

```yaml
# docker compose
services:
  floci:
    image: floci/floci:latest
    ports: ["4566:4566"]
```

```bash
export AWS_ENDPOINT_URL=http://localhost:4566
export AWS_ACCESS_KEY_ID=test
export AWS_SECRET_ACCESS_KEY=test
```

Image cũ `hectorvent/floci` → đổi sang `floci/floci:latest`.

## So với tool khác

| | Floci | LocalAI | Duckle |
|--|-------|---------|--------|
| Shape | AWS API emulator | Local LLM engine | Visual ETL desk |
| Drop-in | AWS SDK → :4566 | OpenAI-compat | Graph → DuckDB |
| Tags | `self-host` `cli` `api` | `api` `mcp` … | `workflow` `desktop` |

## Dùng với Odoo / ai_core

- CI/test addon gọi S3/SQS/Secrets không đụng AWS thật.  
- Không liên quan serve LLM — chỉ infra AWS-shaped local.

## Link

- Repo: https://github.com/floci-io/floci · Docs: https://floci.io/floci/  
- Peers: [localai.md](localai.md) · [duckle.md](duckle.md) · [cake.md](cake.md) · [exo.md](exo.md)
