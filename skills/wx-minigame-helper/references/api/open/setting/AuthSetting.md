---
title: "AuthSetting"
type: api
category: api/open/setting
api: "AuthSetting"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/AuthSetting.html
---

# AuthSetting

用户授权设置信息，详情参考[权限](<../../../guide/base-ability/authorize.md>)

## 属性

### boolean scope.userInfo

是否授权用户信息，对应接口 [wx.getUserInfo](<../user-info/wx.getUserInfo.md>)

### boolean scope.userLocation

是否授权精确地理位置，对应接口 [wx.getLocation](<../../location/wx.getLocation.md>)。将废弃，请使用 scope.userFuzzyLocation 代替

### boolean scope.userFuzzyLocation

是否授权模糊地理位置，对应接口 [wx.getFuzzyLocation](<../../location/wx.getFuzzyLocation.md>)

### boolean scope.werun

是否授权微信运动步数，对应接口 [wx.getWeRunData](<../werun/wx.getWeRunData.md>)

### boolean scope.record

是否授权录音功能，对应接口 [wx.getRecorderManager](<../../media/recorder/wx.getRecorderManager.md>)

### boolean scope.writePhotosAlbum

是否授权保存到相册，对应接口 [wx.saveImageToPhotosAlbum](<../../media/image/wx.saveImageToPhotosAlbum.md>)

### boolean scope.WxFriendInteraction

是否授权使用你的微信朋友信息，对应开放数据域内的 [wx.getFriendCloudStorage](<../data/wx.getFriendCloudStorage.md>) 、[wx.getGroupCloudStorage](<../data/wx.getGroupCloudStorage.md>) 、[wx.getGroupInfo](<../data/wx.getGroupInfo.md>) 、[wx.getPotentialFriendList](<../data/wx.getPotentialFriendList.md>) 、[wx.getUserCloudStorageKeys](<../data/wx.getUserCloudStorageKeys.md>) 、[wx.getUserInfo](<../data/OpenDataContext-wx.getUserInfo.md>) 、[GameServerManager.getFriendsStateData](<../../game-server-manager/GameServerManager.getFriendsStateData.md>) 接口，以及主域内的 [wx.getUserInteractiveStorage](<../data/wx.getUserInteractiveStorage.md>) 接口。

### boolean scope.interactedUserInfo

是否授权同玩互动好友信息，对应接口 [wx.getRelationFriendList](<../data/wx.getRelationFriendList.md>)
