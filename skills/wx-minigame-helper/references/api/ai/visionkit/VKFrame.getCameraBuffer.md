---
title: "ArrayBuffer VKFrame.getCameraBuffer(number width, number height)"
type: api
category: api/ai/visionkit
api: "VKFrame.getCameraBuffer"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFrame.getCameraBuffer.html
---

# ArrayBuffer VKFrame.getCameraBuffer(number width, number height)

> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

获取当前帧 rgba buffer。iOS 端微信在 v8.0.20 开始支持，安卓端微信在 v8.0.30 开始支持。按 aspect-fill 规则裁剪，此接口要求在创建 VKSession 对象时必须传入 gl 参数。此接口仅建议拿来做帧分析使用，上屏请使用 getCameraTexture 来代替。

## 参数

### number width

宽度，受系统限制，必须是 16 的整数倍

### number height

高度

## 返回值

### ArrayBuffer

帧 rgba buffer
