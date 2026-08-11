# 渲染优化 / 画布 Canvas

> 路径：`api/render/canvas/`　|　本目录 10 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [RenderingContext Canvas.getContext(string contextType, Object contextAttributes)](Canvas.getContext.md) | 获取画布对象的绘图上下文 |
| [Canvas](Canvas.md) |  |
| [string Canvas.toDataURL()](Canvas.toDataURL.md) | 把画布上的绘制内容以一个 data URI 的格式返回 |
| [Canvas.toTempFilePath(Object object)](Canvas.toTempFilePath.md) | 将当前 Canvas 保存为一个临时文件。**如果使用了开放数据域，则生成后的文件仅能被用于以下接口：`wx.saveImageToPhotosAlbum`、`wx.shareAppMessage`、 |
| [string Canvas.toTempFilePathSync(Object object)](Canvas.toTempFilePathSync.md) | Canvas.toTempFilePath 的同步版本 |
| [Path2D](Path2D.md) |  |
| [RenderingContext](RenderingContext.md) |  |
| [WebGLRenderingContext.wxBindCanvasTexture(number texture, Canvas canvas)](WebGLRenderingContext.wxBindCanvasTexture.md) | 将一个 Canvas 对应的 Texture 绑定到 WebGL 上下文。 |
| [Canvas wx.createCanvas()](wx.createCanvas.md) | 创建一个画布对象。首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。 |
| [Path2D wx.createPath2D()](wx.createPath2D.md) | 创建一个 Path2D 路径对象 |
