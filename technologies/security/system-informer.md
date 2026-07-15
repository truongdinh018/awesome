# System Informer

> **Repo:** [winsiderss/systeminformer](https://github.com/winsiderss/systeminformer)  
> **Category:** Security · Windows process / resource monitor *(ex-Process Hacker)*  
> **Tags:** `security` · `desktop`  
> **Ngôn ngữ:** C · C++ · **⭐** ~15.4k · **License:** MIT  
> Site: [systeminformer.com](https://systeminformer.com) · Winsider

## Đây là gì?

**System Informer** (đổi tên từ **Process Hacker**) là tool Windows **monitor process/resource**, debug phần mềm và hỗ trợ **phát hiện malware**: CPU/disk/net graphs, handles/file lock (“ai đang giữ file?”), network connections, stack traces (kernel / WOW64 / .NET), quản lý service vượt `services.msc`. Portable, không cần cài, MIT.

Không phải AI — Task Manager nâng cao cho admin/dev/sec. Win 10+.

**Cùng kiểu:** [BleachBit](../devtools/bleachbit.md) (dọn privacy), [HackingTool](hackingtool.md) / [Strix](strix.md) (pentest — khác shape), [Magika](../devtools/magika.md) (file-type).

## Dùng khi nào?

| Nhu cầu | System Informer |
|---------|-----------------|
| Xem process / handle / net Windows chi tiết | ✅ primary |
| Tìm process giữ file không xóa được | ✅ |
| Debug stack / service / nghi malware local | ✅ |
| Dọn cache privacy | → [BleachBit](../devtools/bleachbit.md) |
| AI pentest agent | → [Strix](strix.md) |

## Chạy thử

```text
# Binary: https://github.com/winsiderss/systeminformer/releases
# hoặc https://systeminformer.com
# Portable: tạo SystemInformer.exe.settings.xml cạnh EXE để lưu setting trên USB
```

Build: VS 2022+ · `build\build_init.cmd` rồi `build_release.cmd` / mở `SystemInformer.sln`.

## So với tool khác

| | System Informer | Task Manager | BleachBit |
|--|-----------------|--------------|-----------|
| Depth | Process/handle/kernel | Cơ bản | Cleaner |
| Malware/debug | ✅ | Hạn chế | ❌ |
| Platform | Windows 10+ | Windows | Win + Linux |

## Dùng với Odoo / ai_core

- Dev Win: soi agent/IDE nào ăn RAM, DLL inject, file lock trên addon.  
- Không thay EDR doanh nghiệp — tool inspect local.  
- Chỉ dùng trên máy bạn sở hữu / có quyền admin.

## Link

- Repo: https://github.com/winsiderss/systeminformer · Site: https://systeminformer.com  
- Peers: [bleachbit.md](../devtools/bleachbit.md) · [hackingtool.md](hackingtool.md) · [strix.md](strix.md) · [magika.md](../devtools/magika.md)
