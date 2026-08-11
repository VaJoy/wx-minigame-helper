---
title: "小游戏订阅消息"
type: guide
category: guide/open-ability/message
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/subscribe-message.html
---

# 小游戏订阅消息

## 功能介绍

基于微信的通知渠道，我们为开发者提供了可以高效触达用户的订阅消息能力，以便实现服务的闭环并提供更佳的体验。

开发者在游戏内，可向用户发起消息订阅。开发者需后台自行记录用户是否订阅成功及订阅成功的次数。

用户在小游戏中订阅指定的消息内容后，开发者可以在后台通过下发消息的 api 把一条模版消息发送给用户，用户最终在微信的“服务通知”中收到。开发者可通过场景值（1014）区分从模版消息进入游戏的用户。

用户成功订阅一次，开发者可在游戏认为场景合适的时机，向该用户发下一条模版消息。

![intro](https://res8.wxqcloud.qq.com.cn/wxdoc/d2ef758b-e345-42bb-8a0a-3eb6b5325ddd.jpg)

## API

  * 小程序端消息订阅接口 [wx.requestSubscribeMessage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html>)
  * 服务端消息发送接口 [subscribeMessage.send](<https://developers.weixin.qq.com/minigame/dev/api-backend/subscribe-message/api_sendmessage>)

## Q&A

  1. 如何配置点击该订阅信息的卡片区域也能拉起进入小游戏？

  * 点击查看[服务端消息发送接口 subscribeMessage.send](<https://developers.weixin.qq.com/minigame/dev/api-backend/subscribe-message/api_sendmessage>)，填入page参数则可以进行跳转。

  2. 如何配置长期订阅？永久订阅？如何按频率给用户推送？

  * 目前只有[游戏更新提醒](<subscribe-update-notification-message.md>)为长期订阅，其他模板均为一次性订阅，如需多次提醒，需在游戏内重新调用订阅接口。
