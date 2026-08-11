---
title: "UnionID 机制说明"
type: guide
category: guide/open-ability/account
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/union-id.html
---

# UnionID 机制说明  
  
如果开发者拥有多个移动应用、网站应用、和公众账号（包括小程序），可通过 UnionID 来区分用户的唯一性，因为只要是同一个微信开放平台账号下的移动应用、网站应用和公众账号（包括小程序），用户的 UnionID 是唯一的。换句话说，同一用户，对同一个微信开放平台下的不同应用，unionid是相同的。

## UnionID获取途径

绑定了开发者账号的小程序，可以通过以下途径获取 UnionID。

  1. 开发者可以直接通过 [wx.login](<https://developers.weixin.qq.com/minigame/dev/api/open-api/login/wx.login.html>) \+ `code2Session` 获取到该用户 UnionID，无须用户授权。

  2. 小程序端调用云函数时，可在云函数中通过 [Cloud.getWXContext](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/reference-sdk-api/utils/Cloud.getWXContext>) 获取 UnionID。

## 微信开放平台绑定小程序流程

[微信开发者平台](<https://developers.weixin.qq.com/platform>) — 我的业务 — 开放平台 — 绑定关系 — 小游戏

![](https://mmgame.qpic.cn/image/643444bd442e75b8d040c34f6713bf32fc5b08d24bdc7143d9310997fdcb9a5d/0) ![](https://mmgame.qpic.cn/image/f0c04d7dbb0670565aea7c9749a4dab7a408a768b15cfe3eac6985c4a1aa30bb/0)
