---
title: "游戏更新提醒"
type: guide
category: guide/open-ability/message
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/subscribe-update-notification-message.html
---

# 游戏更新提醒

## 功能介绍

用户成功订阅后，游戏在 提交版本审核、游戏运营工具配置内容后，平台将向订阅用户下发服务通知，提醒用户及时体验新内容。用户的订阅是持续生效的，无需重复订阅。

![](https://mmgame.qpic.cn/image/7e3f80fac04e32932075c861a9cc9da7028b0f66136b065fe7f8b8774a19bda7/0)

## 订阅

### 1、游戏内订阅

在游戏内调用api [wx.requestSubscribeSystemMessage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeSystemMessage.html>) 发起订阅，`msgTypeList`选"`SYS_MSG_TYPE_WHATS_NEW`"。游戏更新提醒的 `msgTypeList` 从基础库 v2.32.1 版本开始支持，低版本调用会报错，因此调用之前需要先判断基础库版本

可通过 [wx.getSetting](<https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.getSetting.html>) 接口获取用户订阅状态。 判断 `res.subscriptionsSetting` 的`itemSettings` 是否返回：`SYS_MSG_TYPE_WHATS_NEW: 'accept'`

![](https://mmgame.qpic.cn/image/72cc586053a5e962e1da049aa8581808bb0f8cf4b04704e56219daa7409888fc/0)

### 2、加圈订阅

用户在 [游戏圈](<../community/game-club.md>) 选择 「加圈」等同于订阅 游戏更新提醒 。可通过 [wx.getGameClubData](<https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/wx.getGameClubData.html>) 获取用户是否加圈的状态。

![](https://mmgame.qpic.cn/image/6fb543b1a6fc19bfae86f678168206b1959c36d1f5fad2de09dd83b62b88cfad/0)

## 配置提醒内容

### 1、游戏版本更新

游戏每次提审时(登录微信公众平台 -> 版本管理 -> 提交审核)配置更新内容，内容需要从限定的词库中挑选，每次最多选择3个。

当前支持词库：优化性能、修复bug、新英雄上线、新皮肤上线、新增道具、新增场景、新增关卡、周年庆活动开启、圣诞活动开启、新年活动开启、春节活动开启、端午活动开启、中秋活动开启、特殊节日开启、活动开启、推出新功能、推出新玩法、开启新赛季

![](https://mmgame.qpic.cn/image/b6e97ff57673f3301be5f8f6a4f3a56e9840bfd071faf99124e067c860cff996/0)

### 2、 游戏运营活动

使用小游戏「游戏运营工具」配置活动后，可配置 「推广渠道 - 服务通知」。服务通知，支持配置下发文案文案，最多支持20个字符。

![](https://mmgame.qpic.cn/image/d5fab62df387ba32283abf3cb90b624bfdc09229db922725ae80e8ea970d4755/0) ![](https://mmgame.qpic.cn/image/bb6008306d2a4af3ba484ba79b75722ff48d008df01774f082bb276415390bc3/0)

## 消息下发

配置内容后，**需要版本全量发布才有推送任务** ，平台会在 版本或运营活动 审核通过并生效后 24 小时内，向订阅用户自动下发消息。为防止对用户产生骚扰，平台会根据订阅用户近期的游戏活跃情况、历史下发点击率，动态调整下发比例。用户每款游戏每天累计最多只能收到1条
