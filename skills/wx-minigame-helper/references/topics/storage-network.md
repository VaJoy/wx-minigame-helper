# 专题：网络与本地存储

> 任务：游戏需要联网通信和本地数据持久化 — 选型与限制说明。

## 网络通信选型

| 场景 | 方案 | API |
|---|---|---|
| 普通 HTTPS 接口 | request | [wx.request](../api/network/request/wx.request.md) |
| 大文件下载（资源热更） | download | [wx.downloadFile](../api/network/download/wx.downloadFile.md)（支持断点续传见 DownloadTask） |
| 上传 | upload | [wx.uploadFile](../api/network/upload/wx.uploadFile.md) |
| 实时双向（对战、聊天） | WebSocket | [wx.connectSocket](../api/network/websocket/wx.connectSocket.md) |
| 后端部署在微信云托管 | 云托管 HTTP | [wx.cloud.callContainer](../api/cloud/wx.cloud.callContainer.md)（免域名配置） |
| 云托管实时双向 | 云托管 WebSocket | [wx.cloud.connectContainer](../api/cloud/wx.cloud.connectContainer.md)（免域名配置） |
| 低延迟实时（自研对战） | UDP | [wx.createUDPSocket](../api/network/udp/wx.createUDPSocket.md) |
| 长连接 TCP | TCP | [wx.createTCPSocket](../api/network/tcp/wx.createTCPSocket.md) |

⚠️ **合法域名**：request/download/upload/socket 的域名都需在 mp 后台配置（见[网络指南](../guide/base-ability/network.md)）；UDP/TCP 用于局域网通信。
其他：[HTTPDNS](../guide/base-ability/HTTPDNS.md)、[弱网优化](../guide/performance/network/weak-network.md)、[离线模式](../api/offline-mode/README.md)。

**微信云托管 HTTP（免域名配置）**：后端用微信云托管时，经 [wx.cloud.callContainer](../api/cloud/wx.cloud.callContainer.md)({ config:{env}, path, header:{ "X-WX-SERVICE": 服务名 }, method, data }) 调 HTTP 接口，**无需配置 request 合法域名**。官方示例：[wxcloud-http-express](examples/wxcloud-http-express/README.md)（Node + Express + MySQL 计数器，README 含小游戏端 `callContainer` 调用示例；浅封装过 `wx.request`，但走微信私有协议）。完整 API（初始化、资源复用、限制）见 [api/cloud/](../api/cloud/README.md)。

## WebSocket 实时双向通信

适合对战、聊天、实时状态同步等场景。用 `wx.connectSocket` 建连，返回 [SocketTask](../api/network/websocket/SocketTask.md)（基础库 1.7.0 起推荐，替代旧版 `wx.onSocket*`/`wx.sendSocketMessage` 全局回调）。

**接入流程**
1. 建连：`wx.connectSocket({ url, header, protocols })` → 返回 `SocketTask`
2. 监听：`task.onOpen` / `task.onMessage` / `task.onError` / `task.onClose`
3. 发送：onOpen 之后才能 `task.send({ data })`，data 支持字符串与 `ArrayBuffer`
4. 关闭：`task.close({ code, reason })`，在 onClose 里做清理

**域名要求**
- 仅支持 `wss://` 协议；域名须在 mp 后台配置并 ICP 备案，不能配 IP 或 localhost（详见[网络指南](../guide/base-ability/network.md)）
- `wss` 域名无需配端口，默认放行该域名所有端口

**工程实践**
- 心跳保活：每 30~60s 发一次 ping；onClose/onError 即视为异常
- 断线重连：指数退避+随机抖动，避免重连风暴
- 消息帧封装：`{type, data, seq}` 便于路由与对账
- 弱网感知：结合 [wx.onNetworkStatusChange](../api/device/network/wx.onNetworkStatusChange.md) 提示重连

**微信云托管方案（免域名配置）**
- 后端用微信云托管时，走微信私有协议，**无需配置 socket 合法域名**，通过 [wx.cloud.connectContainer](../api/cloud/wx.cloud.connectContainer.md)({ config:{env}, service, path }) 建连，返回 `socketTask`（用法与 `wx.connectSocket` 相同；基础库 2.21.1+，需先 `wx.cloud.init`）
- 官方示例：[wxcloud-websocket-express](examples/wxcloud-websocket-express/readme.md)（Node.js + express-ws）：
  - 服务端从 header（`x-wx-openid` 等）识别用户，并做**同一用户单连接限制**（重复连接直接拒绝）
  - 用户信息仅保存在容器内存——多实例部署时无法全局唯一，正式项目应挪到公共数据库/存储
  - 小游戏侧用法与小程序基本一致，把示例中的 `Page` 换成小游戏生命周期调用即可

**API 清单**：全部见 [api/network/websocket/](../api/network/websocket/README.md)。

## 本地存储选型

| 数据类型 | 方案 | 说明 |
|---|---|---|
| 小型键值对（设置、存档索引） | Storage | [wx.setStorage](../api/storage/wx.setStorage.md) 等，同步/异步两套 |
| 大文件（资源缓存、存档包） | 文件系统 | [wx.getFileSystemManager](../api/file/wx.getFileSystemManager.md) → FileSystemManager（54 篇 API） |
| 周期性更新的离线数据 | background-fetch | [api/storage/background-fetch/](../api/storage/background-fetch/README.md) |
| 服务端托管数据 | 云存储/存储服务 | [存储服务](../guide/open-ability/data/storage-server/README.md) |

## 关键文档

### 指南
- [网络](../guide/base-ability/network.md) — 域名配置、超时、弱网
- [存储](../guide/base-ability/storage.md) — Storage 容量与策略
- [文件系统](../guide/base-ability/file-system.md) — 本地文件目录结构、用户文件与包内文件
- [周期性更新](../guide/base-ability/background-fetch.md)、[数据预拉取](../guide/base-ability/pre-fetch.md)
- [磁盘空间管理](../guide/performance/network/diskspace.md)

### API
- [api/storage/](../api/storage/README.md) — wx.get/set/remove/clearStorage(Sync)、StorageInfo
- [api/file/](../api/file/README.md) — FileSystemManager 全套（read/write/copy/mkdir/unlink/Stats...）
- [api/network/](../api/network/README.md) — 按协议分子目录
- [api/cloud/](../api/cloud/README.md) — wx.cloud 云托管调用（init / callContainer / connectContainer / Cloud 资源复用）

## 常见坑

1. Storage 单 key 与总容量有限制（见 storage 指南），大对象请用文件系统。
2. 下载的临时文件要转存为本地文件（`FileSystemManager.saveFile`）才持久。
3. iOS 存储空间紧张时系统可能清理本地缓存文件，重要存档要做云端备份。
4. WebSocket 必须自己处理心跳与断线重连；服务端主动断开会触发 onClose（如 code 1006），要能区分"服务端关闭"与"网络异常"。
5. `send` 必须在 onOpen 之后调用；切后台、弱网时连接可能被系统回收，回到前台要检测并重连。
