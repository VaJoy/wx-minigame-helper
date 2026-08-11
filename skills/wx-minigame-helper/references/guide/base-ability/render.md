---
title: "渲染"
type: guide
category: guide/base-ability
source: https://developers.weixin.qq.com/minigame/dev/guide/base-ability/render.html
---

# 渲染

## 画布

小游戏只有一个上屏画布，可以有多个离屏画布。通过 [wx.createCavans](<https://developers.weixin.qq.com/minigame/dev/api/render/canvas/wx.createCanvas.html>) 可以创建一个画布对象。

**约定：首次调用此接口创建的是上屏画布，剩下的是离屏画布。**

## 绘图上下文及接口。

通过 `Canvas.getContext` 可以创建绘图上下文。返回的具体绘图上下文类型可查看 `RenderingContext`。

## 锁帧

[wx.setPreferredFramesPerSecond](<https://developers.weixin.qq.com/minigame/dev/api/render/frame/wx.setPreferredFramesPerSecond.html>) 接口可以实现锁帧。

## 使用压缩纹理

从基础库 [2.5.0](<https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility>) 开始支持压缩纹理。其中 iOS 支持 pvr 格式，Android 支持 etc1 格式。
