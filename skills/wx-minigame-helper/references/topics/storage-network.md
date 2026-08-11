# 专题：网络与本地存储

> 任务：游戏需要联网通信和本地数据持久化 — 选型与限制说明。

## 网络通信选型

| 场景 | 方案 | API |
|---|---|---|
| 普通 HTTPS 接口 | request | [wx.request](../api/network/request/wx.request.md) |
| 大文件下载（资源热更） | download | [wx.downloadFile](../api/network/download/wx.downloadFile.md)（支持断点续传见 DownloadTask） |
| 上传 | upload | [wx.uploadFile](../api/network/upload/wx.uploadFile.md) |
| 实时双向（对战、聊天） | WebSocket | [wx.connectSocket](../api/network/websocket/wx.connectSocket.md) |
| 低延迟实时（自研对战） | UDP | [wx.createUDPSocket](../api/network/udp/wx.createUDPSocket.md) |
| 长连接 TCP | TCP | [wx.createTCPSocket](../api/network/tcp/wx.createTCPSocket.md) |

⚠️ **合法域名**：request/download/upload/socket 的域名都需在 mp 后台配置（见[网络指南](../guide/base-ability/network.md)）；UDP/TCP 用于局域网通信。
其他：[HTTPDNS](../guide/base-ability/HTTPDNS.md)、[弱网优化](../guide/performance/network/weak-network.md)、[离线模式](../api/offline-mode/README.md)。

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

## 常见坑

1. Storage 单 key 与总容量有限制（见 storage 指南），大对象请用文件系统。
2. 下载的临时文件要转存为本地文件（`FileSystemManager.saveFile`）才持久。
3. iOS 存储空间紧张时系统可能清理本地缓存文件，重要存档要做云端备份。
