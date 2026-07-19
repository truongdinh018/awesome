# MemMachine

> **Repo:** [MemMachine/MemMachine](https://github.com/MemMachine/MemMachine)  
> **Category:** MCP & AI Agents · Universal memory layer cho AI agents  
> **Tags:** `agent` · `memory` · `mcp` · `self-host` · `api` · `docker`  
> **Ngôn ngữ:** Python · **⭐** ~3.3k · **License:** Apache-2.0  
> **Site:** [memmachine.ai](https://memmachine.ai) · Docs: [docs.memmachine.ai](https://docs.memmachine.ai)

## Đây là gì?

**MemMachine** là **lớp memory dài hạn** (*long-term memory layer*) mã nguồn mở cho AI agents và app LLM: agent **học, lưu, recall** thông tin qua session — biến chatbot stateless thành assistant có ngữ cảnh cá nhân.

Ba loại memory: **Working** (ngắn hạn, session hiện tại), **Episodic** (hội thoại dài hạn, graph DB Neo4j), **Profile** (fact/sở thích user, SQL). API: Python SDK (`memmachine-client`), REST, TypeScript SDK, **MCP server** (`memmachine-mcp-stdio` / `memmachine-mcp-http`) cho Claude Desktop, Cursor… Tích hợp LangChain, LangGraph, CrewAI, LlamaIndex, AWS Strands, n8n, Dify, FastGPT. Self-host Docker hoặc cloud [console.memmachine.ai](https://console.memmachine.ai).

**Cùng kiểu:** [agentmemory](agentmemory.md) (MCP memory coding agents), [Claude-Mem](claude-mem.md) (session compress), [TencentDB Agent Memory](tencentdb-agent-memory.md) (layered local), [Headroom](headroom.md) (nén context — không persistent store).

## Dùng khi nào?

| Nhu cầu | MemMachine |
|---------|------------|
| Agent nhớ user prefs / lịch sử hội thoại qua session | ✅ Episodic + Profile |
| Memory server tách khỏi agent (LangChain/CrewAI/n8n) | ✅ SDK + integrations |
| MCP cho Cursor / Claude Desktop | ✅ stdio + HTTP |
| Memory coding-agent hooks (Claude Code capture) | → [agentmemory](agentmemory.md) / [Claude-Mem](claude-mem.md) |
| Chỉ nén context một request | → [Headroom](headroom.md) |
| RAG corpus tài liệu doanh nghiệp | → [RAGFlow](ragflow.md) / [WeKnora](weknora.md) |

## Chạy thử

```bash
# Cần MemMachine Server đang chạy (Docker hoặc cloud)
pip install memmachine-client
```

```python
from memmachine_client import MemMachineClient

client = MemMachineClient(base_url="http://localhost:8080")
project = client.get_or_create_project(org_id="my_org", project_id="my_project")
memory = project.memory(
    group_id="default", agent_id="travel_agent",
    user_id="alice", session_id="session_001",
)
memory.add("I prefer aisle seats on flights", metadata={"category": "travel"})
results = memory.search("What are my flight preferences?")
print(results.content.episodic_memory.long_term_memory.episodes[0].content)
```

MCP: `memmachine-mcp-stdio` (Claude Desktop) hoặc `memmachine-mcp-http`. Quick start: [docs.memmachine.ai/getting_started/quickstart](https://docs.memmachine.ai/getting_started/quickstart).

## So với tool khác

| | MemMachine | agentmemory | Claude-Mem |
|--|------------|-------------|------------|
| Shape | Memory server + SDK/MCP | MCP memory đa coding agent | Session capture + compress |
| Episodic graph + profile SQL | ✅ | hybrid BM25+vector+graph | compress reinject |
| LangChain/CrewAI integrations | ✅ | — | — |
| Tags | `agent` `memory` `mcp` `api` | `coding-agent` `mcp` `cli` | `coding-agent` `mcp` |

## Dùng với Odoo / ai_core

- Backend memory cho chatbot CRM/support: nhớ khách hàng, deal stage, prefs qua `user_id`/`session_id`.  
- Gắn LangGraph/CrewAI agent nội bộ — MemMachine = state store, Odoo = source of truth business data.  
- Self-host Docker cạnh `ai_core`; scrub PII trước khi lưu episodic memory.

## Link

- Repo: https://github.com/MemMachine/MemMachine · Docs: https://docs.memmachine.ai  
- Peers: [agentmemory.md](agentmemory.md) · [claude-mem.md](claude-mem.md) · [tencentdb-agent-memory.md](tencentdb-agent-memory.md) · [headroom.md](headroom.md) · [hermes-agent.md](hermes-agent.md)
