---
title: "VKSession.update3DMode(Object object)"
type: api
category: api/ai/visionkit
api: "VKSession.update3DMode"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.update3DMode.html
---

# VKSession.update3DMode(Object object)  
  
> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

更新三维识别相关配置，要求调 [wx.createVKSession](<wx.createVKSession.md>) 时使用 face / hand / body。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
open3d | boolean |  | 是 | 是否开启三维识别
