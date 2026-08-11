---
title: "Camera.onCameraFrame(function callback)"
type: api
category: api/media/camera
api: "Camera.onCameraFrame"
source: https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.onCameraFrame.html
---

# Camera.onCameraFrame(function callback)

> 基础库 2.9.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听摄像头实时帧数据

## 参数

### function callback

摄像头返回实时帧数据的回调函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
width | number | 图像数据矩形的宽度  
height | number | 图像数据矩形的高度  
data | ArrayBuffer | 图像像素点数据，一维数组，每四项表示一个像素点的 rgba
