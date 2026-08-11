# 媒体 / 录音

> 路径：`api/media/recorder/`　|　本目录 14 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [RecorderManager](RecorderManager.md) |  |
| [RecorderManager.onError(function listener)](RecorderManager.onError.md) | 监听录音错误事件 |
| [RecorderManager.onFrameRecorded(function listener)](RecorderManager.onFrameRecorded.md) | 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。 |
| [RecorderManager.onInterruptionBegin(function listener)](RecorderManager.onInterruptionBegin.md) | 监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发 |
| [RecorderManager.onInterruptionEnd(function listener)](RecorderManager.onInterruptionEnd.md) | 监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。 |
| [RecorderManager.onPause(function listener)](RecorderManager.onPause.md) | 监听录音暂停事件 |
| [RecorderManager.onResume(function listener)](RecorderManager.onResume.md) | 监听录音继续事件 |
| [RecorderManager.onStart(function listener)](RecorderManager.onStart.md) | 监听录音开始事件 |
| [RecorderManager.onStop(function listener)](RecorderManager.onStop.md) | 监听录音结束事件 |
| [RecorderManager.pause()](RecorderManager.pause.md) | 暂停录音 |
| [RecorderManager.resume()](RecorderManager.resume.md) | 继续录音 |
| [RecorderManager.start(Object object)](RecorderManager.start.md) | 开始录音 |
| [RecorderManager.stop()](RecorderManager.stop.md) | 停止录音 |
| [RecorderManager wx.getRecorderManager()](wx.getRecorderManager.md) | 获取**全局唯一** 的录音管理器 RecorderManager |
