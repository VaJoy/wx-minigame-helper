---
title: "wx.onScreenRecordingStateChanged(function listener)"
type: api
category: api/device/screen
api: "wx.onScreenRecordingStateChanged"
source: https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.onScreenRecordingStateChanged.html
---

# wx.onScreenRecordingStateChanged(function listener)

> 基础库 3.1.4 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 iOS 版** ：支持
> 
> **微信 Android 版** ：不支持

## 功能描述

监听用户录屏事件。

## 参数

### function listener

用户录屏事件的监听函数

#### 参数

##### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  state | string | 录屏状态  
| |  合法值 | 说明  
---|---  
start | 开始录屏  
stop | 结束录屏  
  
## 示例代码
    
    
    // 监听用户录屏事件
    const handler = function (res) {
      console.log(res.state)
    }
    wx.onScreenRecordingStateChanged(handler)
    
    // 取消监听用户录屏事件
    wx.offScreenRecordingStateChanged(handler)
