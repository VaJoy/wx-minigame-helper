# 基础 / 应用级事件

> 路径：`api/base/app-event/`　|　本目录 8 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [wx.offAudioInterruptionBegin(function listener)](wx.offAudioInterruptionBegin.md) | 移除音频因为受到系统占用而被中断开始事件的监听函数 |
| [wx.offAudioInterruptionEnd(function listener)](wx.offAudioInterruptionEnd.md) | 移除音频中断结束事件的监听函数 |
| [wx.offError(function listener)](wx.offError.md) | 移除全局错误事件的监听函数 |
| [wx.offUnhandledRejection(function listener)](wx.offUnhandledRejection.md) | 移除未处理的 Promise 拒绝事件的监听函数 |
| [wx.onAudioInterruptionBegin(function listener)](wx.onAudioInterruptionBegin.md) | 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天、有声广告开始播放、实名认证页面弹出等。此事件触发后，小程序内所有音频会暂 |
| [wx.onAudioInterruptionEnd(function listener)](wx.onAudioInterruptionEnd.md) | 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功 |
| [wx.onError(function listener)](wx.onError.md) | 监听全局错误事件 |
| [wx.onUnhandledRejection(function listener)](wx.onUnhandledRejection.md) | 监听未处理的 Promise 拒绝事件 |
