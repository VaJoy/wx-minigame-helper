---
title: "Object VKFrame.getDepthBuffer()"
type: api
category: api/ai/visionkit
api: "VKFrame.getDepthBuffer"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFrame.getDepthBuffer.html
---

# Object VKFrame.getDepthBuffer()  
  
> 基础库 3.0.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

获取每帧的深度图信息Buffer。安卓微信 8.0.38 开始支持，iOS微信 8.0.39 开始支持。

## 返回值

### Object

帧深度纹理buffer对象

属性 | 类型 | 说明  
---|---|---  
width | number | 深度纹理宽  
height | number | 深度纹理高  
DepthAddress | ArrayBuffer | 深度纹理buffer
