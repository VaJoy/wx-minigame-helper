---
title: "开放能力"
type: guide
category: guide/open-ability/playable
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api.html
---

## 开放能力

小游戏试玩能够使用的能力非常有限，主要分成几类：

  1. 代码包内文件能力：如读取小游戏独立分包内的 json 配置、图片和音频资源等，不支持网络资源；
  2. 渲染能力：支持 Canvas2d、WebGL 和 WebGL2 能力，与小游戏的渲染能力对齐；
  3. 音频能力：支持包内的音频文件，不支持网络资源；
  4. 设备事件：支持屏幕触摸事件；

## 渲染

  * [wx.createCanvas](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.createCanvas>)
  * [wx.createImage](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.createImage>)
  * [wx.loadFont](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.loadFont>)

## 设备事件

  * [wx.onTouchStart](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.onTouchStart>)
  * [wx.onTouchMove](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.onTouchMove>)
  * [wx.onTouchEnd](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.onTouchEnd>)
  * [wx.onTouchCancel](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.onTouchCancel>)

## 文件

  * [wx.getFileSystemManager](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.getFileSystemManager>)

## 系统

  * [wx.getSystemInfoSync](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.getSystemInfoSync>)
  * [wx.getAccountInfoSync](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.getAccountInfoSync>)

## 媒体

  * [wx.createInnerAudioContext](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.createInnerAudioContext>)
  * [wx.createWebAudioContext](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.createWebAudioContext>)
  * [wx.createVideoDecoder](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.createVideoDecoder>)

## 调试

  * [wx.setEnableDebug](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.setEnableDebug>)

## 其他

  * [wx.notifyMiniProgramPlayableStatus](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.notifyMiniProgramPlayableStatus>)
  * [wx.reportGameEvent](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.reportGameEvent>)
