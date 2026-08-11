---
title: "垃圾回收"
type: guide
category: guide/performance/memory
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-memory-gc.html
---

# 垃圾回收

小游戏中，JavaScript 中的每一个 Canvas 或 Image 对象都会有一个客户端层的实际纹理储存，实际纹理储存中存放着 Canvas、Image 的真实纹理，通常会占用相当一部分内存。

每个客户端实际纹理储存的回收时机依赖于 JavaScript 中的 Canvas、Image 对象回收。在 JavaScript 的 Canvas、Image 对象被回收之前，客户端对应的实际纹理储存不会被回收。通过调用 [wx.triggerGC()](<https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.triggerGC.html>) 方法，可以加快触发 JavaScriptCore Garbage Collection（垃圾回收），从而触发 JavaScript 中没有引用的 Canvas、Image 回收，释放对应的实际纹理储存。

但 GC 具体触发时机还要取决于 JavaScriptCore 自身机制，并不能保证调用 [wx.triggerGC()](<https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.triggerGC.html>) 能马上触发回收，建议在每局游戏开始或结束触发一下。
