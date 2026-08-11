---
title: "VKSession.detectHand(Object object)"
type: api
category: api/ai/visionkit
api: "VKSession.detectHand"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.detectHand.html
---

# VKSession.detectHand(Object object)  
  
> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

静态图像手势关键点检测。当 wx.createVKSession 参数传入 {track: {hand: {mode: 2} } } 时可用。用法详情[指南文档](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/hand.html>)。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  frameBuffer | ArrayBuffer |  | 是 | 人脸图像像素点数据，每四项表示一个像素点的 RGBA  
|  width | number |  | 是 | 图像宽度  
|  height | number |  | 是 | 图像高度  
|  scoreThreshold | number | 0.8 | 否 | 评分阈值。正常情况传入 0.8 即可。  
|  algoMode | number |  | 否 | 算法检测模式  
| |  合法值 | 说明  
---|---  
0 | 检测模式，输出框和点  
1 | 手势模式，输出框和手势分类  
2 | 结合0和1模式，输出框、点、手势分类
