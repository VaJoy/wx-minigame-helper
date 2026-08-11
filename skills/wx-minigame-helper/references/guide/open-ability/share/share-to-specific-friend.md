---
title: "定向分享"
type: guide
category: guide/open-ability/share
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share-to-specific-friend.html
---

# 定向分享

提供给定向分享能力，支持用户游戏内向指定好友发起分享。本接口，仅限开放数据域内调用。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/faae4013-c867-4ade-9a49-0eb2d3402336.png)

使用 定向分享能力 ，可实现的场景举例：
    
    
    以下描述中，金币、皮肤为游戏数据，点赞数为托管数据。
    A 与 BC 为微信好友。 B 为游戏注册用户；C 为游戏流失或未注册用户。
    

**游戏场景** | 具体做法  
---|---  
A 向 B 分享 炫耀成绩超越 |   
A 向 B 分享 求助帮忙通过第 50 关 |   
A 向 B 分享 索要皮肤道具，B 进入游戏给 A 赠送 皮肤道具 | 需结合 [关系链互动数据](<../data/interactive-data.md>) 能力  
A 向 C 分享 邀请加入游戏。C 进入游戏后，A 金币+1，C 金币+1 | 需结合 [关系链互动数据](<../data/interactive-data.md>) 能力  
  
## 相关接口

  1. 定向分享：[wx.shareMessageToFriend](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.shareMessageToFriend.html>)
  2. 主域设置定向分享参数：[wx.setMessageToFriendQuery](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.setMessageToFriendQuery.html>)
