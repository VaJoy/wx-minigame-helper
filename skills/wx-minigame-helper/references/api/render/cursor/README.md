# 渲染优化 / 光标

> 路径：`api/render/cursor/`　|　本目录 4 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [wx.exitPointerLock()](wx.exitPointerLock.md) | 解除锁定鼠标指针。此接口仅在 Windows、Mac 端支持。 |
| [boolean wx.isPointerLocked()](wx.isPointerLocked.md) | 检查鼠标指针是否被锁定。此接口仅在 Windows、Mac 端支持。 |
| [wx.requestPointerLock()](wx.requestPointerLock.md) | 锁定鼠标指针。锁定指针后，鼠标会被隐藏，可以通过 wx.touchMove>) 事件获取鼠标偏移量。 **此接口仅在 Windows、Mac 端支持，且必须在用户进行操作后才可调用。** |
| [boolean wx.setCursor(string path, number x, number y)](wx.setCursor.md) | 加载自定义光标，仅支持 PC 平台 |
