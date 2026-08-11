# 专题：分享与社交裂变

> 任务：设计分享玩法（分享给好友/群、朋友圈、分享得奖励），驱动自传播增长。

## 两种分享方式

1. **被动分享**：用户点右上角菜单转发 — 用 [wx.showShareMenu](../api/share/wx.showShareMenu.md) + [wx.onShareAppMessage](../api/share/wx.onShareAppMessage.md) 自定义标题图片。
2. **主动分享**：游戏内按钮触发 — [wx.shareAppMessage](../api/share/wx.shareAppMessage.md)。

⚠️ 分享成功/失败回调**不可靠**（微信不保证回调真实性），"分享得奖励"类玩法需改用[分享礼物](../guide/open-ability/share/share-gift.md)或[动态消息](../guide/open-ability/share/updatable-message.md)等官方方案，避免诱导分享违规。

## 关键文档

### 指南（guide/open-ability/share/）
- [转发分享](../guide/open-ability/share/share.md) — 基础分享与获取更多转发信息（shareTicket）
- [分享图片](../guide/open-ability/share/share-image.md) — 分享图规范与生成
- [分享到朋友圈](../guide/open-ability/share/share-timeline_game.md)
- [定向分享](../guide/open-ability/share/share-to-specific-friend.md) — 指定好友分享（约战等场景）
- [分享礼物](../guide/open-ability/share/share-gift.md) — 合规的分享激励方案
- [动态消息](../guide/open-ability/share/updatable-message.md) — 可更新的分享卡片（组队进度等）
- [私密消息](../guide/open-ability/share/private-message.md)

### API（api/share/，23 篇）
- 基础：[wx.shareAppMessage](../api/share/wx.shareAppMessage.md)、[wx.showShareMenu](../api/share/wx.showShareMenu.md)、[wx.updateShareMenu](../api/share/wx.updateShareMenu.md)
- 监听：[wx.onShareAppMessage](../api/share/wx.onShareAppMessage.md)、[wx.onShareTimeline](../api/share/wx.onShareTimeline.md)
- 扩展：[wx.showShareImageMenu](../api/share/wx.showShareImageMenu.md)、[wx.setMessageToFriendQuery](../api/share/wx.setMessageToFriendQuery.md)、[wx.onCopyUrl](../api/share/wx.onCopyUrl.md)

### 增长相关
- [添加到桌面](../guide/open-ability/growth/add-desktop.md)
- [游戏推荐](../guide/open-ability/growth/game-recommend.md)、[游戏评价](../guide/open-ability/growth/game-evaluate.md)
- [微信礼物](../guide/open-ability/growth/WeChatGift.md)、[礼物赠送](../guide/open-ability/growth/RewardSend.md)

## 常见坑

1. 分享图比例 5:4，网络图需先 `wx.downloadFile` 或用本地图，见分享图片文档。
2. `wx.onShareAppMessage` 不返回任何内容时使用默认分享文案。
3. 群排行等场景需要 `withShareTicket`，见[排行榜专题](open-data-ranklist.md)。
