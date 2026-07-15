# SmolVM

> **Repo:** [smol-machines/smolvm](https://github.com/smol-machines/smolvm)  
> **Category:** DevTools · Portable microVM / sandbox CLI  
> **Tags:** `cli` · `self-host` · `desktop` · `coding-agent`  
> **Ngôn ngữ:** Rust · libkrun · **⭐** ~4.4k · **License:** Apache-2.0  
> Site: [smolmachines.com](https://smolmachines.com)

## Đây là gì?

**SmolVM** là CLI chạy **Linux microVM** cục bộ: cold start dưới giây, macOS / Linux / Windows, RAM *elastic* (virtio balloon). Mỗi workload có guest kernel riêng (Hypervisor.framework / KVM / WHP) qua [libkrun](https://github.com/containers/libkrun).

Hai việc chính: (1) chạy lệnh / máy ảo ephemeral hoặc persistent từ image OCI (Docker Hub…) — network **tắt mặc định**; (2) đóng gói thành file **`.smolmachine`** (hoặc binary pack) để mang sang máy khác, boot &lt;200ms, không cần Docker daemon.

**Cùng kiểu:** [Floci](floci.md) (giả lập AWS local), [WSL Dashboard](wsl-dashboard.md) (quản lý WSL), [WinPodX](winpodx.md) (Windows apps trên Linux), [CloakBrowser](../ui-automation/cloakbrowser.md) (sandbox browser), [dcg](../mcp-ai-agents/destructive-command-guard.md) (chặn lệnh — không phải VM).

## Dùng khi nào?

| Nhu cầu | SmolVM |
|---------|--------|
| Sandbox code không tin cậy (hypervisor boundary) | ✅ `machine run` · net off default |
| Pack Python/Node thành binary tự chạy, portable | ✅ `smolvm pack create` |
| Dev VM persistent + Smolfile (TOML) | ✅ create / start / exec |
| Emulator API AWS | → [Floci](floci.md) |
| Chỉ quản lý distro WSL | → [WSL Dashboard](wsl-dashboard.md) |
| Chặn lệnh shell nguy hiểm trên host | → [dcg](../mcp-ai-agents/destructive-command-guard.md) |

## Chạy thử

```bash
# macOS + Linux
curl -sSL https://smolmachines.com/install.sh | bash

# ephemeral VM
smolvm machine run --net --image alpine -- sh -c "echo hi && uname -a"

# sandbox: không mạng (mặc định)
smolvm machine run --image alpine -- nslookup example.com   # fail

# pack portable
smolvm pack create --image python:3.12-alpine -o ./python312
./python312 run -- python3 --version
```

Windows: release `windows-x86_64` + bật **Windows Hypervisor Platform**. Image: OCI / `docker save` pipe / rootfs dir.

## So với tool khác

| | SmolVM | Floci | WSL Dashboard |
|--|--------|-------|---------------|
| Niche | MicroVM + pack `.smolmachine` | AWS API local | GUI quản lý WSL |
| Boundary | VM + guest kernel | Container/service mock | Distro Microsoft |
| Tags | `cli` `self-host` `coding-agent` | `self-host` `cli` `api` | `desktop` `cli` |

## Dùng với Odoo / ai_core

- Chạy script/agent thử nghiệm (pip, crawl, shell) trong VM thay vì host Odoo/WSL.  
- Pack toolchain OCR/MinerU demo thành artifact mang máy GPU khác — kiểm tra license/deps trước.  
- Không thay Docker Compose lab `ai_core/docker/` — bổ sung lớp isolation khi cần.

## Link

- Repo: https://github.com/smol-machines/smolvm  
- Peers: [floci.md](floci.md) · [wsl-dashboard.md](wsl-dashboard.md) · [winpodx.md](winpodx.md) · [cloakbrowser.md](../ui-automation/cloakbrowser.md) · [destructive-command-guard.md](../mcp-ai-agents/destructive-command-guard.md)
