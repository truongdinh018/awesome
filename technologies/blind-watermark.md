# blind_watermark

> **Repo:** [guofei9987/blind_watermark](https://github.com/guofei9987/blind_watermark)  
> **Category:** Image & Video Generation · Watermark ảnh invisible  
> **Tags:** `watermark` · `cli`  
> **Ngôn ngữ:** Python · **⭐** ~14.1k · **License:** MIT  
> PyPI: `blind-watermark` · Docs: [BlindWatermark.github.io](https://BlindWatermark.github.io/blind_watermark/#/en/)

## Đây là gì?

**blind_watermark** là thư viện **ảnh blind / invisible watermark** (DWT-DCT-SVD): nhúng chữ / ảnh / bit vào ảnh; **extract không cần ảnh gốc**. Chịu rotate, crop, mask, resize, noise, chỉnh sáng ở mức demo trong README.

**Cùng kiểu:** [AudioSeal](audioseal.md) (watermark speech audio).

## Dùng khi nào?

| Nhu cầu | blind_watermark |
|---------|-----------------|
| Trace ảnh marketing / AI-generated | ✅ Embed string + pwd |
| Extract khi chỉ còn file đã sửa | ✅ Blind (không cần origin) |
| Watermark ảnh logo nhỏ | ✅ `mode` ảnh |
| Embed bitstream | ✅ `mode='bit'` |
| Watermark **audio** | → [AudioSeal](audioseal.md) |
| Watermark **text** | → `text_blind_watermark` (cùng author) |

## Chạy thử

```bash
pip install blind-watermark

blind_watermark --embed --pwd 1234 ori.jpeg "watermark text" embedded.png
blind_watermark --extract --pwd 1234 --wm_shape 111 embedded.png
```

```python
from blind_watermark import WaterMark

bwm = WaterMark(password_img=1, password_wm=1)
bwm.read_img('ori.jpg')
bwm.read_wm('@brand · open', mode='str')
bwm.embed('embedded.png')
len_wm = len(bwm.wm_bit)  # cần lưu để extract

wm = WaterMark(password_img=1, password_wm=1).extract(
    'embedded.png', wm_shape=len_wm, mode='str'
)
```

## So với tool khác

| | blind_watermark | AudioSeal |
|--|-----------------|-----------|
| Media | Ảnh | Speech audio |
| Mục tiêu | Blind extract, robust attack | Localized AI-speech watermark |
| Tags | `watermark` `cli` | `watermark` |

## Dùng với Odoo / ai_core

- Gắn provenance vào ảnh ComfyUI / ScreenCoder / marketing trước publish.  
- Batch: pipeline sau render [AI-auto-generate-video](ai-auto-generate-video.md) / HyperFrames (frame still).  
- Odoo: watermark ảnh sản phẩm / attachment trước khi share.

## Link

- Repo: https://github.com/guofei9987/blind_watermark  
- Docs EN/ZH: https://BlindWatermark.github.io/blind_watermark/  
- Related: [text_blind_watermark](https://github.com/guofei9987/text_blind_watermark) · [HideInfo](https://github.com/guofei9987/HideInfo)  
- Audio peer: [audioseal.md](audioseal.md)
