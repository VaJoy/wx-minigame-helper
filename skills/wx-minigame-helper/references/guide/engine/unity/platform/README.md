# 游戏引擎适配 / Unity WebGL 转化 / 多平台适配

> 路径：`guide/engine/unity/platform/`　|　本目录 5 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [音视频适配](AudioAndVideo.md) | 目前 UnityAudio 已自动适配微信小游戏，优先建议使用 UnityAudio 来播放音频，也支持 FMOD 插件 |
| [输入法适配](InputAdaptation.md) | WeixinMiniGameInput.mobileKeyboardSupport = true; |
| [Unity中如何展示排行榜这类微信关系数据](OpenData.md) | 小游戏提供了一系列接口获取好友关系链数据，为了安全，绝大部分接口都只能在开放数据域内调用。 |
| [网络通信适配](UsingNetworking.md) | 由于安全性的影响，JavaScript 代码没有直接访问 IP 套接字来实现网络连接。因此，该.NET 网络类（System.Net 命名空间中的一切，特别是**System.Net.Sockets* |
| [最佳实践：使用多线程加速逻辑](worker-showcase.md) | 本实践是基于**新版Worker** 的案例实现，且使用了新版Worker的**ShareArrayBuffer(SAB)特性** 。 |
