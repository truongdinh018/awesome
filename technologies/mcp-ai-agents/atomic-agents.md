# Atomic Agents

> **Repo:** [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents)  
> **Category:** MCP & AI Agents · Framework agent nhẹ, modular  
> **Tags:** `agent` · `cli` · `api` · `workflow`  
> **Ngôn ngữ:** Python · Instructor · Pydantic · **⭐** ~6k · **License:** MIT  
> **Docs:** [brainblend-ai.github.io/atomic-agents](https://brainblend-ai.github.io/atomic-agents/) · PyPI: `atomic-agents`  
> Slogan: *Building AI agents, atomically*

## Đây là gì?

**Atomic Agents** (Eigenwise) là framework **nhẹ, modular** để dựng agent pipeline như LEGO: mỗi agent / tool / context provider **single-purpose**, reusable, composable, có schema input/output rõ (Pydantic + [Instructor](https://python.useinstructor.com/)).

Khác multi-agent “tự do” kiểu black-box: ưu tiên **control & predictability** (output ổn định, brand-aligned), DX gần software engineering thông thường. Kèm **Atomic Assembler** CLI (tải Tools; roadmap Agents/Pipelines) và **Atomic Forge** (thư viện tool).

**Cùng kiểu:** [Hermes](hermes-agent.md) (agent runtime full), [OpenHands](openhands.md) (coding-agent platform), [EpicStaff](epicstaff.md) (orchestrator + RAG), [CLI-Anything](cli-anything.md) (harness CLI).

## Dùng khi nào?

| Nhu cầu | Atomic Agents |
|---------|---------------|
| Pipeline agent typed (schema in/out) | ✅ `AtomicAgent[In, Out]` + Instructor |
| Ghép agent nhỏ thành pipeline | ✅ Chaining schemas / agents |
| Context providers tái sử dụng | ✅ Built-in concept |
| Tải tool có sẵn (Forge) | ✅ `atomic-assembler` CLI |
| Coding agent self-host (Canvas/ACP) | → [OpenHands](openhands.md) |
| Agent + memory + messaging gateway | → [Hermes](hermes-agent.md) |

## Chạy thử

```bash
pip install atomic-agents
pip install instructor[anthropic]   # hoặc groq / google-genai …
# OpenAI đi kèm mặc định với instructor

# CLI tải tools
atomic-assembler
```

```python
from atomic_agents import AtomicAgent, AgentConfig, BasicChatInputSchema, BaseIOSchema
from atomic_agents.context import SystemPromptGenerator, ChatHistory
import instructor
from openai import OpenAI
from pydantic import Field

class CustomOutputSchema(BaseIOSchema):
    chat_message: str = Field(..., description="Reply")
    suggested_questions: list[str] = Field(...)

agent = AtomicAgent[BasicChatInputSchema, CustomOutputSchema](
    config=AgentConfig(
        client=instructor.from_openai(OpenAI()),
        model="gpt-4o-mini",
        system_prompt_generator=SystemPromptGenerator(
            background=["Helpful assistant."],
            steps=["Understand", "Answer", "Suggest 3 follow-ups"],
            output_instructions=["Be concise."],
        ),
        history=ChatHistory(),
    )
)
```

## So với tool khác

| | Atomic Agents | Hermes | OpenHands |
|--|---------------|--------|-----------|
| Shape | Library / pipeline kit | Full agent product | Coding-agent platform |
| Control | Schema-first, modular | Skills + memory loop | Canvas + sandbox |
| Tags | `agent` `cli` `api` `workflow` | `agent` `mcp` `skill` … | `coding-agent` `agent` |

## Dùng với Odoo / ai_core

- Mẫu **typed I/O** cho tool MCP / agent Odoo (Pydantic schema → JSON contract).  
- Prototype pipeline ngoài Odoo (parse → RAG → reply) rồi port sang `xb_ai` / `ai_agentic`.  
- Không thay runtime Odoo — là thư viện Python để học pattern atomic.

## Link

- Repo: https://github.com/Eigenwise/atomic-agents  
- Docs / Discord: xem README upstream  
- Peers: [hermes-agent.md](hermes-agent.md) · [openhands.md](openhands.md) · [epicstaff.md](epicstaff.md) · [cli-anything.md](cli-anything.md)
