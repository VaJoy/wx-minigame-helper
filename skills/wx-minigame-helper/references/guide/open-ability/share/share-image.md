---
title: "小游戏海报"
type: guide
category: guide/open-ability/share
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/share-image.html
---

# 小游戏海报

为提高小游戏在会话场景分享的信息传递效能，提供海报分享能力，支持从小游戏分享图片至会话、状态、朋友圈。

示意：

![](https://mmgame.qpic.cn/image/a4a66e40aa4d0b849c46c13a56f63aae5c09560d1dbf7eb0a2587a64a181ba52/0)

## 使用场景参考

  1. 求助分享：填词/解谜/拼图等关卡求助，图片直接展示求助内容
  2. 玩法结合：通关得到卡片，收集/交换不同卡片可合成特殊道具
  3. 个人成就/稀有物品/高光战绩时刻分享，展示玩家个人信息（头像、昵称等），强化专有性
  4. 游戏攻略：阵容、装备、站位等游戏策略分享

## 开放分享接口：

分享接口：[wx.showShareImageMenu](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.showShareImageMenu.html>)

注意：横屏游戏选择`style`选择 v2 更便于浏览

## 截图

用户主动在小游戏内截图并分享截图时，在图片详情页也可展示入口

如果想要在用户截图时提供，提供自定义图片发送到朋友、收藏、保存到相册的能力，可结合用户截屏场景使用（支持对截屏图片进行自定义修改）。
    
    
    wx.onUserCaptureScreen(function() {
      // 用户截屏了
      wx.showShareImageMenu({
        path: ""
      });
    });
    

![](https://res8.wxqcloud.qq.com.cn/wxdoc/a1bf47f6-2bf9-48e2-a3a1-b10c979df511.png)

##### 相关接口

  1. [自定义图片分享](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.showShareImageMenu.html>)
  2. [监听用户截屏](<https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.onUserCaptureScreen.html>)
