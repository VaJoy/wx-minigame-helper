---
title: "ArrayBuffer VKFrame.getCameraJpgBuffer(number width, number height, number quality)"
type: api
category: api/ai/visionkit
api: "VKFrame.getCameraJpgBuffer"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFrame.getCameraJpgBuffer.html
---

# ArrayBuffer VKFrame.getCameraJpgBuffer(number width, number height, number quality)

> 基础库 3.0.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

获取当前帧的 jpg 信息Buffer。安卓微信 8.0.49 开始支持，iOS微信 8.0.49 开始支持。

## 参数

### number width

宽度

### number height

高度

### number quality

获取纹理质量，(0 - 100)

## 返回值

### ArrayBuffer

jpg buffer
