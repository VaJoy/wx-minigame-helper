---
title: "wx.onMouseDown(function listener)"
type: api
category: api/device/mouse-event
api: "wx.onMouseDown"
source: https://developers.weixin.qq.com/minigame/dev/api/device/mouse-event/wx.onMouseDown.html
---

# wx.onMouseDown(function listener)  
  
## 功能描述

监听鼠标按键按下事件

## 参数

### function listener

鼠标按键按下事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
x | number | 事件触发时鼠标所在的位置横坐标  
y | number | 事件触发时鼠标所在的位置纵坐标  
button | number | 按键类型，0左键，1中键，2右键  
timeStamp | number | 事件触发时的时间戳
