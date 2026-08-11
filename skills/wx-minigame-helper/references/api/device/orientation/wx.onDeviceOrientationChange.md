---
title: "wx.onDeviceOrientationChange(function listener)"
type: api
category: api/device/orientation
api: "wx.onDeviceOrientationChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/orientation/wx.onDeviceOrientationChange.html
---

# wx.onDeviceOrientationChange(function listener)

> 基础库 2.1.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听屏幕转向切换事件

## 参数

### function listener

屏幕转向切换事件的监听函数

#### 参数

##### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  value | string | 切换后的屏幕方向。  
| |  合法值 | 说明  
---|---  
landscape | 横屏正方向，以 HOME 键在屏幕右侧为正方向  
landscapeReverse | 横屏反方向，以 HOME 键在屏幕左侧为反方向  
  
## 注意事项

  * 在基础库 v2.26.0 之前，wx.onDeviceOrientationChange 只监听左横屏和右横屏之间切换的事件，且仅在 game.json 中配置 deviceOrientation 的值为 landscape 时生效。
  * 从基础库 v2.26.0 开始，wx.onDeviceOrientationChange 会同时监听通过 wx.setDeviceOrientation 接口切换横竖屏的事件。
