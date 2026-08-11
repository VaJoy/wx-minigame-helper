---
title: "Array.<Object> wx.getGamepads()"
type: api
category: api/device/gamepad
api: "wx.getGamepads"
source: https://developers.weixin.qq.com/minigame/dev/api/device/gamepad/wx.getGamepads.html
---

# Array.<Object> wx.getGamepads()

> 基础库 3.6.4 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持

## 功能描述

获取已连接的游戏手柄信息，仅在 PC 平台支持。

## 返回值

### Array.<Object>

已连接的手柄信息数组，遵循浏览器标准。

属性 | 类型 | 说明  
---|---|---  
id | string | 一个包含着控制器标识信息的 string  
index | string | 一个自增的整形数字，对于当前连接到系统的每一个设备是唯一的  
connected | boolean | 控制器是否仍然连接着系统.  
axes | Array.<object> | 一个表示控制器设备上存在的坐标轴的数组 (比如控制器摇杆)。  
buttons | Array.<object> | 设备上的按键的数组。  
  
## 示例代码
    
    
    const gamepads = wx.getGamepads();
    console.log(gamepads);
    

## 示例代码片段

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/6al1r2m17oV6> "在开发者工具中预览效果")
