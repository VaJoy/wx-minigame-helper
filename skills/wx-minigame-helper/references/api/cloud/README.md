# 云开发

> 路径：`api/cloud/`　|　本目录 7 篇

`wx.cloud` 是基础库内置的微信云开发/云托管能力入口，**无需引入额外 SDK**。本目录覆盖小游戏后端通信最常用的「微信云托管」调用链路（HTTP 与 WebSocket）。

> 文档改编自官方**小程序**云托管文档，但 `wx.cloud` 在小游戏中的用法与小程序完全一致；仅初始化位置不同（小游戏无 `App.onLaunch`，在 `game.js` 入口执行即可）。

## 文档清单

| 文档 | API | 说明 |
|---|---|---|
| [wx.cloud.md](wx.cloud.md) | wx.cloud | 云能力入口对象总览（init / Cloud / callContainer / connectContainer） |
| [wx.cloud.init.md](wx.cloud.init.md) | wx.cloud.init | 初始化云能力（使用 callContainer 前全局执行一次） |
| [wx.cloud.Cloud.md](wx.cloud.Cloud.md) | wx.cloud.Cloud | 资源复用形态：跨账号访问授权方的云托管环境 |
| [wx.cloud.callContainer.md](wx.cloud.callContainer.md) | wx.cloud.callContainer | 调用云托管 HTTP 服务（替代 wx.request，免域名配置） |
| [wx.cloud.connectContainer.md](wx.cloud.connectContainer.md) | wx.cloud.connectContainer | 与云托管服务建立 WebSocket 连接（免 socket 域名配置） |
| [wx.cloud.getTempFileURL.md](wx.cloud.getTempFileURL.md) | wx.cloud.getTempFileURL | 云托管对象存储：用云文件 ID 换临时访问链接（一次最多 50 个） |
| [wx.cloud.downloadFile.md](wx.cloud.downloadFile.md) | wx.cloud.downloadFile | 云托管对象存储：用云文件 ID 下载到本地临时路径（走云托管通道，返回 downloadTask / Promise） |

## 版本要求

- `wx.cloud.callContainer`：基础库 **2.23.0** 及以上
- `wx.cloud.connectContainer`：基础库 **2.21.1** 及以上
- `wx.cloud.getTempFileURL`：云托管「对象存储」能力，随云托管能力开放，无独立最低版本硬性要求（建议基础库 2.21.1+ 以对齐云托管链路）
- `wx.cloud.downloadFile`：云托管「对象存储」能力，随云托管能力开放，无独立最低版本硬性要求（建议基础库 2.21.1+ 以对齐云托管链路）

配套需在「小游戏管理后台」-「设置」-「基础库最低版本设置」中将值设定为对应版本以上。

## 相关资源

- 专题：[网络与本地存储](../../topics/storage-network.md)（云托管免域名通信的选型说明）
- 云托管开发常识：[wxcloud-common-sense](../../topics/wxcloud-common-sense.md)（使用前提/客户端/服务端/扩缩容/排查，联调前必读）
- 官方示例：[wxcloud-http-express](../../topics/examples/wxcloud-http-express/README.md)（HTTP 计数器）、[wxcloud-websocket-express](../../topics/examples/wxcloud-websocket-express/readme.md)（WebSocket）
- 服务端统计/短信接口（仅后端可调）：[backend-api/cloudbase/](../../backend-api/cloudbase/README.md)
- 经典云开发（云函数 `callFunction` / 云数据库 `database` / 云存储 `uploadFile` 等）**不在本知识库收录范围**，见[微信云开发官方文档](https://developers.weixin.qq.com/minigame/dev/wxcloudservice/wxcloud/reference/client-api/)
