# 分享传播

> 路径：`api/share/`　|　本目录 23 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [wx.authPrivateMessage(Object object)](wx.authPrivateMessage.md) | 验证私密消息。用法详情见 小程序私密消息使用指南 |
| [wx.checkHandoffEnabled(Object object)](wx.checkHandoffEnabled.md) | 检查是否可以进行接力，该接口需要在开放数据域调用 |
| [wx.getShareInfo(Object object)](wx.getShareInfo.md) | 获取转发详细信息（主要是获取群ID）。 从群聊内的小程序消息卡片打开小程序时，调用此接口才有效。从基础库 v2.17.3 开始，推荐用 wx.getGroupEnterInfo 替代此接口。 |
| [wx.hideShareMenu(Object object)](wx.hideShareMenu.md) | 隐藏当前页面的转发按钮 |
| [wx.offAddToFavorites()](wx.offAddToFavorites.md) | 移除用户点击菜单「收藏」按钮时触发的事件的全部监听函数 |
| [wx.offCopyUrl()](wx.offCopyUrl.md) | 移除用户点击右上角菜单的「复制链接」按钮时触发的事件的全部监听函数 |
| [wx.offHandoff()](wx.offHandoff.md) | 移除用户点击菜单「在电脑上打开」按钮时触发的事件的全部监听函数 |
| [wx.offShareAppMessage(function listener)](wx.offShareAppMessage.md) | 移除用户点击右上角菜单的「转发」按钮时触发的事件的监听函数 |
| [wx.offShareMessageToFriend(function listener)](wx.offShareMessageToFriend.md) | 移除主域接收`wx.shareMessageToFriend`接口的成功失败通知事件的监听函数 |
| [wx.offShareTimeline(function listener)](wx.offShareTimeline.md) | 移除用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件的监听函数 |
| [wx.onAddToFavorites(function listener)](wx.onAddToFavorites.md) | 监听用户点击菜单「收藏」按钮时触发的事件 |
| [wx.onCopyUrl(function listener)](wx.onCopyUrl.md) | 监听用户点击右上角菜单的「复制链接」按钮时触发的事件。 |
| [wx.onHandoff(function listener)](wx.onHandoff.md) | 监听用户点击菜单「在电脑上打开」按钮时触发的事件 |
| [wx.onShareAppMessage(function listener)](wx.onShareAppMessage.md) | 监听用户点击右上角菜单的「转发」按钮时触发的事件 |
| [wx.onShareMessageToFriend(function listener)](wx.onShareMessageToFriend.md) | 监听主域接收`wx.shareMessageToFriend`接口的成功失败通知事件 |
| [wx.onShareTimeline(function listener)](wx.onShareTimeline.md) | 监听用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件。本接口为 Beta 版本，暂只在 Android 平台支持。 |
| [Boolean wx.setHandoffQuery(String query)](wx.setHandoffQuery.md) | 设置接力参数，该接口需要在游戏域调用 |
| [boolean wx.setMessageToFriendQuery(Object object)](wx.setMessageToFriendQuery.md) | 设置 wx.shareMessageToFriend 接口 query 字段的值 |
| [wx.shareAppMessage(Object object)](wx.shareAppMessage.md) | 主动拉起转发，进入选择通讯录界面。 |
| [wx.showShareImageMenu(Object object)](wx.showShareImageMenu.md) | 打开分享图片弹窗，可以将图片发送给朋友、收藏或下载 |
| [wx.showShareMenu(Object object)](wx.showShareMenu.md) | 设置右上角点开的详情界面中的分享按钮是否可用 |
| [wx.startHandoff(Object object)](wx.startHandoff.md) | 开始进行接力，该接口需要在开放数据域调用 |
| [wx.updateShareMenu(Object object)](wx.updateShareMenu.md) | 更新转发属性 |
