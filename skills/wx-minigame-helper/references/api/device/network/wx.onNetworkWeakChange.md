---
title: "wx.onNetworkWeakChange(function listener)"
type: api
category: api/device/network
api: "wx.onNetworkWeakChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/network/wx.onNetworkWeakChange.html
---

# wx.onNetworkWeakChange(function listener)

> 基础库 2.21.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持

## 功能描述

监听弱网状态变化事件

## 参数

### function listener

弱网状态变化事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
weakNet | boolean | 当前是否处于弱网状态  
networkType | string | 当前网络类型  
  
## 示例代码
    
    
    wx.onNetworkWeakChange(function (res) {
      console.log(res.weakNet)
      console.log(res.networkType)
    })
    // 取消监听
    wx.offNetworkWeakChange()
