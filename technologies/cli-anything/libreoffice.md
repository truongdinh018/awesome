# LibreOffice (CLI-Anything harness)

> **Parent:** [CLI-Anything](../cli-anything.md)  
> **Domain:** DevTools & Integration · Office  
> **Tags:** `harness` · `office` · `cli`  
> **Type:** Agent-native CLI harness  
> **Path:** [`libreoffice/agent-harness`](https://github.com/HKUDS/CLI-Anything/tree/main/libreoffice/agent-harness)

## Tổng quan

Harness **LibreOffice** headless: convert, export document (Writer/Calc/…) qua CLI — agent batch office file không cần GUI.

## Agent làm gì được

- Convert định dạng (DOCX↔PDF, …)  
- Xử lý batch tài liệu  
- Pipeline doc trước khi ingest RAG  

## Quan hệ catalog

| | Vai trò |
|--|---------|
| **Cha** | CLI-Anything |
| **Domain** | DevTools |
| **ai_core / RAG** | Preprocess attachment trước `ai_rag_core` ingest |

## Link

- Harness: https://github.com/HKUDS/CLI-Anything/tree/main/libreoffice/agent-harness  
- Upstream: https://www.libreoffice.org
