---
title: "关系链互动提醒"
type: guide
category: guide/open-ability/message
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/subscribe-system-message.html
---

# 关系链互动提醒

## 功能介绍

当开发者使用 [好友互动](<../data/interactive-data.md>) 或 [排行榜](<../data/ranklist.md>) 能力时，可使用 关系链互动提醒功能。 好友互动提醒 、排行榜好友超越提醒，每个模版分别只需要订阅 1 次。

  * 好友互动提醒

![](https://mmgame.qpic.cn/image/539eccde1832cf4847b445b07d144cb00da209263a4c9fed40f50ad7f497fd7c/0)

  * 排行好友超越提醒

![](https://mmgame.qpic.cn/image/0497a8102a7dd16a398c7973be8316108ec605095cfc3be2b5f69e4c526f1546/0)

## 一次性订阅消息 和 关系链互动提醒 区别

能力 | **普通一次性订阅消息** | **基于关系链的系统订阅消息**  
---|---|---  
游戏场景 | 开发者游戏内自定义 | 仅限好友互动、排行榜超越场景  
订阅场景 | 开发者控制订阅时机 | 开发者控制订阅时机  
订阅限制 | 可同时订阅3个消息模版 | 可同时订阅3个消息模版  
订阅成功回调 | 支持 | 支持  
下发限制 | 订阅一次，发一条 | 订阅一次，发多条（永久有效）  
下发消息逻辑 | 开发者自定时机，后台下发 | 平台下发消息  
下发消息内容 | 开发者自定义，MP申请模版 | 平台设置内容  
  
## 如何设计消息触发场景

### 1、好友互动

开发者在游戏内设置与微信好友赠送礼物、偷取道具等互动行为。当有用户成功触发互动行为时，若对方已订阅“好友互动提醒”，则对方会 收到对应的服务通知。每次成功互动，下发一条消息。

每次调用 [wx.modifyFriendInteractiveStorage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.modifyFriendInteractiveStorage.html>) 且用户确认互动后，会产生一条服务通知。接口参数`quiet`设置为`true`的接口调用，将不会触发服务通知。

### 2、排行榜超越

① 开发者在游戏内为用户提供好友排行榜服务

② 开发者需在「MP后台-游戏能力地图-微信排行榜配置」配置 [排行榜](<../data/ranklist.md>)

③ 当用户本周期内有战绩且已订阅“排行榜超越提醒”，则当好友战绩超越该用户时，该用户将收到对应的服务通知。当天第一次被超越，下发一条消息。

**注意** ：开发者需先提交版本审核及运营素材，才可查看排行榜设置入口。

### 3\. API

  * 小游戏系统订阅消息接口 [wx.requestSubscribeSystemMessage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeSystemMessage.html>)

示例代码：
    
    
    wx.requestSubscribeSystemMessage({
        msgTypeList: ['SYS_MSG_TYPE_INTERACTIVE', 'SYS_MSG_TYPE_RANK'],
        success(res) {
          console.log(res)
          // {
          //      errMsg: "requestSubscribeSystemMessage:ok",
          //      SYS_MSG_TYPE_INTERACTIVE: 'accept'
          //      SYS_MSG_TYPE_RANK: 'reject'
          // }
        },
        fail(res) {
          console.log(res)
        },
        complete(res) {
          console.log(res)
    } })
    

用户完成订阅后，系统订阅消息会被添加到用户的小程序设置页，通过 [wx.getSetting](<https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.getSetting.html>) 接口可获取用户对系统订阅消息的订阅状态。

### 4.最佳实践

我们提供了订阅相关的[代码片段](<https://developers.weixin.qq.com/s/NR7wGJmz7pRD>)，可以预览代码片段体验如何订阅和赠送好友金币

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/NR7wGJmz7pRD> "在开发者工具中预览效果")
