# 媒体 / 视频解码

> 路径：`api/media/video-decoder/`　|　本目录 9 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [Object VideoDecoder.getFrameData()](VideoDecoder.getFrameData.md) | 获取下一帧的解码数据 |
| [VideoDecoder](VideoDecoder.md) |  |
| [VideoDecoder.off(string eventName, function callback)](VideoDecoder.off.md) | 取消监听录制事件。当对应事件触发时，该回调函数不再执行 |
| [VideoDecoder.on(string eventName, function callback)](VideoDecoder.on.md) | 注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行 |
| [Promise VideoDecoder.remove()](VideoDecoder.remove.md) | 移除解码器 |
| [Promise VideoDecoder.seek(number position)](VideoDecoder.seek.md) | 跳到某个时间点解码 |
| [Promise VideoDecoder.start(Object object)](VideoDecoder.start.md) | 开始解码 |
| [Promise VideoDecoder.stop()](VideoDecoder.stop.md) | 停止解码 |
| [VideoDecoder wx.createVideoDecoder()](wx.createVideoDecoder.md) | 创建视频解码器，可逐帧获取解码后的数据 |
