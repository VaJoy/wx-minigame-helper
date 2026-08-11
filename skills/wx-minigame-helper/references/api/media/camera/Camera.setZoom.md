---
title: "Promise Camera.setZoom(Object args)"
type: api
category: api/media/camera
api: "Camera.setZoom"
source: https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.setZoom.html
---

# Promise Camera.setZoom(Object args)

> 基础库 3.9.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

设置缩放比例

## 参数

### Object args

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
zoom | number |  | 是 | 缩放级别，范围 [1, maxZoom]。zoom 可取小数，精确到小数后一位。maxZoom 可在 bindinitdone 返回值中获取。  
  
## 返回值

### Promise

设置缩放比例的 Promise，成功时返回 {zoom}
