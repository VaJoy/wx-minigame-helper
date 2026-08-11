---
title: "ImageData"
type: api
category: api/render/image
api: "ImageData"
source: https://developers.weixin.qq.com/minigame/dev/api/render/image/ImageData.html
---

# ImageData

> 基础库 3.4.10 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

ImageData 对象。用于动态创建一个图片对象。

## 属性

### number width

使用像素描述 ImageData 的实际宽度

### number height

使用像素描述 ImageData 的实际高度

### Uint8ClampedArray data

一维数组，包含以 RGBA 顺序的数据，数据使用 0 至 255（包含）的整数表示
