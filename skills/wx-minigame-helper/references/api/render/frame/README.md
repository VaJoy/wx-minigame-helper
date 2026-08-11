# 渲染优化 / 帧控制

> 路径：`api/render/frame/`　|　本目录 3 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [cancelAnimationFrame(number requestID)](cancelAnimationFrame.md) | 取消由 requestAnimationFrame 添加到计划中的动画帧请求 |
| [number requestAnimationFrame(function callback)](requestAnimationFrame.md) | 在下次进行重绘时执行。 |
| [wx.setPreferredFramesPerSecond(number fps)](wx.setPreferredFramesPerSecond.md) | 可以修改渲染帧率。默认渲染帧率为 60 帧每秒。修改后，requestAnimationFrame 的回调频率会发生改变。 |
