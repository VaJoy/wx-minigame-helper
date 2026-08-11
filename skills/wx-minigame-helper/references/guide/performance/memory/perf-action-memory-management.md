---
title: "内存管理机制"
type: guide
category: guide/performance/memory
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-memory-management.html
---

# 内存管理机制

### Android

内存分为系统和 V8 两块，两者都沿用了系统原有的内存管理机制

  * V8 的内存回收机制可以参考 <https://v8.dev/blog/trash-talk>
  * Android 系统内存管理机制可以参考 <https://developer.android.com/topic/performance/memory-overview>

### iOS

小游戏在 iPhone 上是沿用了 iOS 系统的内存管理机制

## 内存优化建议

  1. 在 iOS 上，当微信客户端在一定时间间隔内（目前是 5 秒）连续收到两次及以上系统内存告警时，会主动进行小程序的销毁，并提示用户 「该小程序可能导致微信响应变慢被终止」。建议开发者注册 `wx.onMemoryWarning` 监听内存告警事件，并在在收到一次内存告警后，调用一次 `wx.triggerGC` 清理内存，降低小程序被销毁的概率。
  2. 在场景切换的时候主动调用 `wx.triggerGC`。
  3. 基础库 2.5.0 版本开始支持压缩纹理，其中 iOS 支持 pvr 格式，Android 支持 etc1 格式，压缩纹理可以有效降低图片资源占用内存大小，具体使用方式，可以参考引擎方提供的文档。小游戏资源纹理压缩可参考[资源纹理压缩](<../render/perf-action-texture-compression.md>)。
