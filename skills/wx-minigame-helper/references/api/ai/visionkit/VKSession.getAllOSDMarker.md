---
title: "Array.<Object> VKSession.getAllOSDMarker()"
type: api
category: api/ai/visionkit
api: "VKSession.getAllOSDMarker"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.getAllOSDMarker.html
---

# Array.<Object> VKSession.getAllOSDMarker()  
  
> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

获取所有 OSD marker，要求调 [wx.createVKSession](<wx.createVKSession.md>) 时传入的 track.OSD 为 true

## 返回值

### Array.<Object>

OSD marker 列表

属性 | 类型 | 说明  
---|---|---  
markerId | number | marker id  
path | string | 图片路径
