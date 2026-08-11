---
title: "Canvas"
type: api
category: api/render/canvas
api: "Canvas"
source: https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.html
---

# Canvas

画布对象

## 属性

### number width

画布的宽度

### number height

画布的高度

## 方法

### [RenderingContext Canvas.getContext(string contextType, Object contextAttributes)](<Canvas.getContext.md>)

获取画布对象的绘图上下文

### [string Canvas.toDataURL()](<Canvas.toDataURL.md>)

把画布上的绘制内容以一个 data URI 的格式返回

### [Canvas.toTempFilePath(Object object)](<Canvas.toTempFilePath.md>)

将当前 Canvas 保存为一个临时文件。**如果使用了开放数据域，则生成后的文件仅能被用于以下接口：`wx.saveImageToPhotosAlbum`、`wx.shareAppMessage`、`wx.onShareAppMessage`、`wx.previewImage`、`wx.previewMedia`、`wx.onShareTimeline`、`wx.showShareImageMenu`**
