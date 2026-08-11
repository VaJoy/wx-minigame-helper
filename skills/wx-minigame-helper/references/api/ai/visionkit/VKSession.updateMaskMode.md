---
title: "VKSession.updateMaskMode(Object object)"
type: api
category: api/ai/visionkit
api: "VKSession.updateMaskMode"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.updateMaskMode.html
---

# VKSession.updateMaskMode(Object object)

> 基础库 3.2.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

设置裁剪相关配置，要求调 [wx.createVKSession](<wx.createVKSession.md>) 时使用 shoe。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
useMask | boolean |  | 是 | 设置是否开启试鞋，返回腿部遮挡纹理
