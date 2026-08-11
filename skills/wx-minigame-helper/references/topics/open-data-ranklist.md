# 专题：开放数据域与好友排行榜

> 任务：实现"微信好友排行榜""群排行榜"等涉及好友关系链数据的功能。

## 核心概念

关系链数据（好友列表、群数据）**不能**在主域直接获取。必须在**开放数据域**（一个独立的、无网络能力的封闭 JS 环境）中拉取并绘制到共享 Canvas 上，主域通过 `sharedCanvas` 把它贴到游戏画面中。

```
主域 ──postMessage──> 开放数据域（拉取好友数据 → 绘制 sharedCanvas）
主域 <──sharedCanvas（只能作为纹理上屏，读不到数据）
```

## 实施步骤

1. 在 `game.json` 配置 `openDataContext` 指向开放数据域目录（见[配置](../guide/getting-started/configuration.md)）。
2. 用 `wx.setUserCloudStorage` 上报玩家分数（托管数据）。
3. 开放数据域内用 `wx.getFriendCloudStorage` / `wx.getGroupCloudStorage` 拉取排行数据并绘制。
4. 群排行需要 shareTicket：分享时带 `withShareTicket: true`，再用 `wx.getShareInfo` 换取。

## 关键文档

### 指南
- [关系链数据/开放数据](../guide/open-ability/data/open-data.md) — 概念入口
- [开放数据域](../guide/open-ability/data/opendata/) — 开放数据域的工程结构
- [排行榜](../guide/open-ability/data/ranklist.md) — 排行榜完整方案（含互动提醒）
- [互动型托管数据](../guide/open-ability/data/interactive-data.md) — 好友点赞、送礼物
- [数据签名](../guide/open-ability/data/signature.md) — 托管数据防篡改校验

### API（api/open/data/，共 24 篇）
- [wx.getOpenDataContext](../api/open/context/wx.getOpenDataContext.md) → OpenDataContext.postMessage
- [wx.setUserCloudStorage](../api/open/data/wx.setUserCloudStorage.md) / [wx.removeUserCloudStorage](../api/open/data/wx.removeUserCloudStorage.md)
- [wx.getFriendCloudStorage](../api/open/data/wx.getFriendCloudStorage.md)、[wx.getGroupCloudStorage](../api/open/data/wx.getGroupCloudStorage.md)、[wx.getGroupInfo](../api/open/data/wx.getGroupInfo.md)
- [wx.shareMessageToFriend](../api/open/data/wx.shareMessageToFriend.md) — 互动型数据分享
- [wx.getShareInfo](../api/share/wx.getShareInfo.md) — shareTicket 解密换取群信息

## 常见坑

1. 开放数据域**不能发网络请求**、不能调用 wx.login，只能通过 postMessage 与主域通信。
2. `setUserCloudStorage` 的 KV 数据有数量和长度限制，见 API 文档。
3. 获取群数据要求该分享确实带上了 shareTicket 且用户在该群中。
4. Unity 项目使用开放数据域见 [Unity 平台适配-开放数据](../guide/engine/unity/platform/OpenData.md)。
