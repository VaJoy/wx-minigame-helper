---
title: "VKSession.detectDepth(Object object)"
type: api
category: api/ai/visionkit
api: "VKSession.detectDepth"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.detectDepth.html
---

# VKSession.detectDepth(Object object)  
  
> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

深度识别。当 wx.createVKSession 参数传入 {track: {depth: {mode: 2} } } 时可用。用法详情[指南文档](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/depth.html>)。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
frameBuffer | ArrayBuffer |  | 是 | 需要识别深度的图像像素点数据，每四项表示一个像素点的 RGBA  
width | number |  | 是 | 图像宽度  
height | number |  | 是 | 图像高度
