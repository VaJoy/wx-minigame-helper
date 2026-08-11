---
title: "VKFrame VKSession.getVKFrame(number width, number height)"
type: api
category: api/ai/visionkit
api: "VKSession.getVKFrame"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.getVKFrame.html
---

# [VKFrame](<VKFrame.md>) VKSession.getVKFrame(number width, number height)  
  
> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

获取帧对象，每调用一次都会触发一次帧分析过程。目前 VKSession 相机的最大帧数是 30 fps，因此调用 getVKFrame 的频率也可以限制在 30 fps，以减少渲染开销。

## 参数

### number width

宽度

### number height

高度

## 返回值

### [VKFrame](<VKFrame.md>)

帧对象
