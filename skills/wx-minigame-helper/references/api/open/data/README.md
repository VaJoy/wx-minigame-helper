# 开放接口 / 开放数据

> 路径：`api/open/data/`　|　本目录 24 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [FriendInfo](FriendInfo.md) |  |
| [FriendSendGiftStatus](FriendSendGiftStatus.md) |  |
| [KVData](KVData.md) |  |
| [wx.getUserInfo(Object object)](OpenDataContext-wx.getUserInfo.md) | 批量获取用户信息，仅支持获取自己和好友的用户信息。该接口需要用户授权，且只在开放数据域下可用。 |
| [OpenDataContextUserInfo](OpenDataContextUserInfo.md) |  |
| [UserGameData](UserGameData.md) |  |
| [wx.getFriendCloudStorage(Object object)](wx.getFriendCloudStorage.md) | 拉取当前用户所有同玩好友的托管数据。该接口需要用户授权，且只在开放数据域下可用。需要注意，添加新微信好友后的2小时内，getFriendCloudStorage 可能获取不到该新好友的数据。 |
| [wx.getFriendSendGiftStatus(Object object)](wx.getFriendSendGiftStatus.md) | 指定一批 openid 查询好友送礼状态，该接口只在开放数据域下可用。 |
| [wx.getGroupCloudStorage(Object object)](wx.getGroupCloudStorage.md) | 获取群同玩成员的游戏数据。小游戏通过群分享卡片打开的情况下才可以调用。该接口需要用户授权，且只在开放数据域下可用。 |
| [wx.getGroupInfo(Object object)](wx.getGroupInfo.md) | 获取群信息。该接口需要用户授权，且只在开放数据域下可用。 |
| [wx.getGroupMembersInfo(Object object)](wx.getGroupMembersInfo.md) | 获取所选群成员的头像、昵称，自行在开放数据域中渲染 |
| [wx.getPotentialFriendList(Object object)](wx.getPotentialFriendList.md) | 获取可能对游戏感兴趣的未注册的好友名单。每次调用最多可获得 5 个好友。该接口需要用户授权，且只在开放数据域下可用。 |
| [wx.getRelationFriendList(Object object)](wx.getRelationFriendList.md) | 获取小游戏同玩互动好友列表。该接口需要用户授权 scope.interactedUserInfo，首次调用时会弹出授权窗口。也可以提前通过 wx.authorize 进行授权。当用户拒绝授权后，再次调 |
| [Canvas wx.getSharedCanvas()](wx.getSharedCanvas.md) | 获取主域和开放数据域共享的 sharedCanvas。**只有开放数据域能调用。** |
| [wx.getUserCloudStorage(Object object)](wx.getUserCloudStorage.md) | 获取当前用户托管数据当中对应 key 的数据。该接口只可在开放数据域下使用 |
| [wx.getUserCloudStorageKeys(Object object)](wx.getUserCloudStorageKeys.md) | 获取当前用户托管数据当中所有的 key。该接口需要用户授权，且只在开放数据域下可用。 |
| [wx.getUserInteractiveStorage(Object object)](wx.getUserInteractiveStorage.md) | 获取当前用户互动型托管数据对应 key 的数据。该接口需要用户授权。 |
| [wx.modifyFriendInteractiveStorage(Object object)](wx.modifyFriendInteractiveStorage.md) | 修改好友的互动型托管数据，该接口只可在开放数据域下使用。 |
| [wx.offInteractiveStorageModified(function callback)](wx.offInteractiveStorageModified.md) | 取消监听成功修改好友的互动型托管数据事件，该接口在游戏主域使用 |
| [wx.onInteractiveStorageModified(function callback)](wx.onInteractiveStorageModified.md) | 监听成功修改好友的互动型托管数据事件，该接口在游戏主域使用 |
| [wx.removeUserCloudStorage(Object object)](wx.removeUserCloudStorage.md) | 删除用户托管数据当中对应 key 的数据。 |
| [wx.sendGiftToFriend(Object object)](wx.sendGiftToFriend.md) | 指定 openid 给他好友送礼，该接口只在开放数据域下可用。 |
| [wx.setUserCloudStorage(Object object)](wx.setUserCloudStorage.md) | 对用户托管数据进行写数据操作。允许同时写多组 KV 数据。 |
| [wx.shareMessageToFriend(Object object)](wx.shareMessageToFriend.md) | 给指定的好友分享游戏信息，该接口只可在开放数据域下使用。接收者打开之后，可以用 `wx.modifyFriendInteractiveStorage` 传入参数 quiet=true 发起一次无需弹框 |
