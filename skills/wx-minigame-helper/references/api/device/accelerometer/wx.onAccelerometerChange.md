---
title: "wx.onAccelerometerChange(function listener)"
type: api
category: api/device/accelerometer
api: "wx.onAccelerometerChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/accelerometer/wx.onAccelerometerChange.html
---

# wx.onAccelerometerChange(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听加速度数据事件。频率根据 [wx.startAccelerometer()](<wx.startAccelerometer.md>) 的 interval 参数, 接口调用后会自动开始监听。

## 参数

### function listener

加速度数据事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
x | number | X 轴  
y | number | Y 轴  
z | number | Z 轴  
  
## 示例代码
    
    
    wx.onAccelerometerChange(callback)
