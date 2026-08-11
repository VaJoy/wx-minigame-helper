---
title: "wx.onWheel(function listener)"
type: api
category: api/device/wheel-event
api: "wx.onWheel"
source: https://developers.weixin.qq.com/minigame/dev/api/device/wheel-event/wx.onWheel.html
---

# wx.onWheel(function listener)

## 功能描述

监听鼠标滚轮事件

## 参数

### function listener

鼠标滚轮事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
deltaX | number | 滚轮 x 轴方向滚动量  
deltaY | number | 滚轮 y 轴方向滚动量  
deltaZ | number | 滚轮 z 轴方向滚动量  
x | number | 事件触发时鼠标所在的位置横坐标  
y | number | 事件触发时鼠标所在的位置纵坐标  
timeStamp | number | 事件触发时的时间戳
