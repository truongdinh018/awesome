# BleachBit

> **Repo:** [bleachbit/bleachbit](https://github.com/bleachbit/bleachbit)  
> **Category:** DevTools · System cleaner (privacy + disk)  
> **Tags:** `desktop` · `cli` · `security`  
> **Ngôn ngữ:** Python · GTK · **⭐** ~6.3k · **License:** GPL-3.0  
> Site: [bleachbit.org](https://www.bleachbit.org)

## Đây là gì?

**BleachBit** là phần mềm dọn hệ thống cho **Windows và Linux**: xóa cache/cookie/log tạm để **giải phóng ổ đĩa** và **giảm dấu vết riêng tư** (privacy). Có GUI chọn cleaner theo app + CLI; Preview trước khi Delete.

Không phải AI — là công cụ vận hành máy (thay thế/gần với CCleaner mã nguồn mở). Cleaner định nghĩa bằng CleanerML; có wipe an toàn (antiforensics) khi cần. Tránh tick tùy chọn nguy hiểm (wipe free space, registry lạ) nếu chưa hiểu.

**Cùng kiểu:** [System Informer](../security/system-informer.md) (Win process monitor), [FluentFlyout](fluent-flyout.md) / [WSL Dashboard](wsl-dashboard.md) (UX Windows), [Magika](magika.md) (file-type / security nhẹ), [HackingTool](../security/hackingtool.md) (pentest menu — khác miền).

## Dùng khi nào?

| Nhu cầu | BleachBit |
|---------|-----------|
| Dọn cache browser / temp / log trên Win hoặc Linux | ✅ |
| Preview rồi xóa có chọn lọc | ✅ GUI + CLI |
| Privacy / giảm forensic residue | ✅ (cẩn thận option mạnh) |
| Phân loại nội dung file AI | → [Magika](magika.md) |
| Process / handle monitor Windows | → [System Informer](../security/system-informer.md) |
| Pentest toolkit | → [HackingTool](../security/hackingtool.md) / [Strix](../security/strix.md) |

## Chạy thử

```bash
# Linux — từ source
git clone https://github.com/bleachbit/bleachbit.git
cd bleachbit
make install-deps       # Debian/Fedora/openSUSE/Arch
make -C po local
python3 bleachbit.py    # GUI: chọn → Preview → Delete
python3 bleachbit.py --help   # CLI

# Windows / binary: https://www.bleachbit.org/download
# hoặc https://github.com/bleachbit/bleachbit/releases
```

## So với tool khác

| | BleachBit | Magika | FluentFlyout |
|--|-----------|--------|--------------|
| Niche | Disk + privacy cleaner | Content-type AI | Media flyout Win11 |
| Platform | Win + Linux | Cross | Windows 11 |
| Tags | `desktop` `cli` `security` | `cli` `security` | `desktop` `workspace` |

## Dùng với Odoo / ai_core

- Dọn cache Cursor/browser/Docker overlay trên máy dev trước khi backup disk đầy.  
- Không chạy cleaner “aggressive” trên server Odoo/prod — chỉ workstation.  
- Không đụng DB/filestore Odoo; giữ out backup trước khi wipe.

## Link

- Repo: https://github.com/bleachbit/bleachbit · Site: https://www.bleachbit.org  
- Peers: [fluent-flyout.md](fluent-flyout.md) · [wsl-dashboard.md](wsl-dashboard.md) · [magika.md](magika.md) · [hackingtool.md](../security/hackingtool.md)
