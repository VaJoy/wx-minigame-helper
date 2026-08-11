---
title: "权限"
type: guide
category: guide/base-ability
source: https://developers.weixin.qq.com/minigame/dev/guide/base-ability/authorize.html
---

# 权限

部分接口需要经过用户授权同意才能调用。我们把这些接口按使用范围分成多个 `scope` ，用户选择对 `scope` 来进行授权，当授权给一个 `scope` 之后，其对应的所有接口都可以直接使用。

此类接口调用时：

  * 如果用户未接受或拒绝过此权限，会弹窗询问用户，用户点击同意后方可调用接口；
  * 如果用户已授权，可以直接调用接口；
  * 如果用户已拒绝授权，则不会出现弹窗，而是直接进入接口 `fail` 回调。**请开发者兼容用户拒绝授权的场景。**

## 获取用户授权设置

开发者可以使用 [wx.getSetting](<https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.getSetting.html>) 获取用户当前的授权状态。

## 打开设置界面

用户可以在小程序设置界面（「右上角」 - 「关于」 - 「右上角」 - 「设置」）中控制对该小程序的授权状态。

开发者可以调用 [wx.openSetting](<https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.openSetting.html>) 打开设置界面，引导用户开启授权。

## 提前发起授权请求

开发者可以使用 [wx.authorize](<https://developers.weixin.qq.com/minigame/dev/api/open-api/authorize/wx.authorize.html>) 在调用需授权 API 之前，提前向用户发起授权请求。

## scope 列表

scope | 对应接口 | 描述  
---|---|---  
scope.userInfo | [wx.getUserInfo](<https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.getUserInfo.html>) | 用户信息  
scope.userLocation | [wx.getLocation](<https://developers.weixin.qq.com/minigame/dev/api/location/wx.getLocation.html>) | 精确地理位置（将废弃，请使用模糊地理位置来代替）  
scope.userFuzzyLocation | [wx.getFuzzyLocation](<https://developers.weixin.qq.com/minigame/dev/api/location/wx.getFuzzyLocation.html>) | 模糊地理位置  
scope.werun | [wx.getWeRunData](<https://developers.weixin.qq.com/minigame/dev/api/open-api/werun/wx.getWeRunData.html>) | 微信运动步数  
scope.record | [wx.joinVoIPChat](<https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.joinVoIPChat.html>), [RecorderManager.start](<https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.start.html>) | 麦克风  
scope.writePhotosAlbum | [wx.saveImageToPhotosAlbum](<https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.saveImageToPhotosAlbum.html>) | 保存到相册  
scope.WxFriendInteraction | 对应开放数据域内的 [wx.getFriendCloudStorage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getFriendCloudStorage.html>) 、[wx.getGroupCloudStorage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupCloudStorage.html>) 、[wx.getGroupInfo](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupInfo.html>) 、[wx.getPotentialFriendList](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getPotentialFriendList.html>) 、[wx.getUserCloudStorageKeys](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserCloudStorageKeys.html>) 、[wx.getUserInfo](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/OpenDataContext-wx.getUserInfo.html>) 、[GameServerManager.getFriendsStateData](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getFriendsStateData.html>) 接口，以及主域内的 [wx.getUserInteractiveStorage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserInteractiveStorage.html>) 接口。 | 是否授权使用你的微信朋友信息  
scope.gameClubData | [wx.getGameClubData](<https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/wx.getGameClubData.html>) | 游戏圈加圈、点赞、发表数据  
  
## 授权有效期

一旦用户明确同意或拒绝过授权，其授权关系会记录在后台，直到用户主动删除小程序。

## 最佳实践

在真正需要使用授权接口时，才向用户发起授权申请，并在授权申请中说明清楚要使用该功能的理由。

我们提供了授权相关的[代码片段](<https://developers.weixin.qq.com/s/gu7CIJmw75Rp>)，可以预览代码片段体验如何获取用户信息和使用隐私协议

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/gu7CIJmw75Rp> "在开发者工具中预览效果")

## 注意事项

  1. `wx.authorize({scope: "scope.userInfo"})`，不会弹出授权窗口，请使用 [wx.createUserInfoButton](<https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.createUserInfoButton.html>)
  2. 需要授权 `scope.userFuzzyLocation` 时必须[配置地理位置用途说明](<https://developers.weixin.qq.com/minigame/dev/reference/configuration/app#permission>)。
  3. 需授权的接口有涉及用户隐私，注意查阅[小游戏《用户隐私保护指引》合规披露指南](<https://developers.weixin.qq.com/community/minigame/doc/0004c84925817819b7ffd8b2356008?blockType=2>)

## 授权流程图

![授权流程图](https://res8.wxqcloud.qq.com.cn/wxdoc/d2b68a2c-d301-4a6b-8e8d-d28e3155a9c0.png)
