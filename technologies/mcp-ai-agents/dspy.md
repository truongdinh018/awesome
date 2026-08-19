# DSPy

> **Repo:** [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy)  
> **Category:** MCP & AI Agents · Framework lập trình LM (không prompt tay)  
> **Tags:** `agent` · `rag` · `cli` · `workflow` · `eval`  
> **Ngôn ngữ:** Python · **⭐** ~37.4k · **License:** MIT  
> **Docs:** [dspy.ai](https://dspy.ai)

## Đây là gì?

**DSPy** (*Declarative Self-improving Python*) là framework **lập trình** language model — viết code Python có module, không chỉnh prompt dài tay. Bạn khai báo chữ ký (`Signature`), ghép thành pipeline (RAG, classifier, agent loop), rồi DSPy **tối ưu prompt / demo / weights** cho model đang dùng.

Khác LangChain kiểu “chuỗi prompt + tool”: DSPy coi prompt là siêu tham số, compile pipeline để output ổn định hơn khi đổi model.

**Cùng kiểu:** [LangChain](langchain.md) (agent platform rộng), [LangGraph](langgraph.md) (graph agent), [Atomic Agents](atomic-agents.md) (module typed Pydantic), [txtai](txtai.md) (RAG embeddings), [PraisonAI](praisonai.md) (multi-agent runtime).

## Dùng khi nào?

| Nhu cầu | DSPy |
|---------|------|
| Pipeline LM (RAG / classify / agent) bằng Python, tối ưu tự động | ✅ |
| Đổi model mà không viết lại prompt | ✅ compile / optimizer |
| Eval + cải thiện instruction / few-shot | ✅ GEPA, MIPROv2… |
| Runtime bot IM đa kênh | → [PraisonAI](praisonai.md) / [AstrBot](astrbot.md) |
| Coding agent trong IDE | → [OpenHands](openhands.md) / [Cline](cline.md) |
| Orchestration graph production LangChain | → [LangGraph](langgraph.md) |

## Chạy thử

```bash
pip install dspy
```

```python
import dspy

lm = dspy.LM("openai/gpt-4o-mini")  # hoặc ollama/… — xem dspy.ai
dspy.configure(lm=lm)

class QA(dspy.Signature):
    """Trả lời ngắn, đúng trọng tâm."""
    question: str = dspy.InputField()
    answer: str = dspy.OutputField()

qa = dspy.Predict(QA)
print(qa(question="DSPy khác prompt engineering ở điểm nào?").answer)
```

Docs đầy đủ (RAG, ReAct, optimizer): [dspy.ai](https://dspy.ai).

## So với tool khác

| | DSPy | LangChain | Atomic Agents |
|--|------|-----------|---------------|
| Lõi | Compile / tối ưu pipeline LM | Ecosystem agent + tool | Agent nhỏ, schema Pydantic |
| Prompt | Tối ưu thuật toán | Viết / template tay | Instructor + schema |
| Tags | `agent` `rag` `eval` | `agent` `rag` | `agent` `api` `workflow` |

## Dùng với Odoo / ai_core

- PoC RAG / classify ticket Odoo: module DSPy + retriever nội bộ, compile trên tập eval.  
- Đừng nhét DSPy vào request Odoo đồng bộ — chạy batch / worker.  
- Production đã có LangGraph / ai_core: giữ một stack; DSPy hợp khi cần tối ưu prompt có metric.

## Link

- Repo: https://github.com/stanfordnlp/dspy  
- Docs: https://dspy.ai  
- Peers: [langchain.md](langchain.md) · [langgraph.md](langgraph.md) · [atomic-agents.md](atomic-agents.md) · [txtai.md](txtai.md)
