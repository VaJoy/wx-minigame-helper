---
title: "视频号视频"
type: guide
category: guide/open-ability/channels
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/channels-activity.html
---

# 视频号视频

小程序可以通过[wx.openChannelsActivity](<https://developers.weixin.qq.com/minigame/dev/api/open-api/channels/wx.openChannelsActivity.html>)接口跳转到指定视频号的视频页观看视频，无主体要求。

## 获取参数

finderUserName表示视频号ID，获取视频号ID的需要登录[视频号助手](<https://channels.weixin.qq.com>)，在首页可以查看自己的视频号ID。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/e80e0280-17a1-41d9-84ef-bf1367de8f86.png)

feedId唯一标识某一条视频，获取视频的feedId需要登录[视频号助手](<https://channels.weixin.qq.com>)，在「动态管理」模块可以复制自己发表的每个视频对应的feedId。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/550f1b28-58ed-4fa6-adfe-2951d0968880.png)
