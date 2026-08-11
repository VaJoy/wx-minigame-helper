---
title: "Camera wx.createCamera(Object object)"
type: api
category: api/media/camera
api: "wx.createCamera"
source: https://developers.weixin.qq.com/minigame/dev/api/media/camera/wx.createCamera.html
---

# [Camera](<Camera.md>) wx.createCamera(Object object)

> 基础库 2.9.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

创建相机

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
x | number | 0 | 否 | 相机的左上角横坐标  
y | number | 0 | 否 | 相机的左上角纵坐标  
width | number | 300 | 否 | 相机的宽度  
height | number | 150 | 否 | 相机的高度  
devicePosition | string | back | 否 | 摄像头朝向，值为 front, back  
flash | string | auto | 否 | 闪光灯，值为 auto, on, off  
size | string | small | 否 | 帧数据图像尺寸，值为 small, medium, large  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 返回值

### [Camera](<Camera.md>)

一个相机对象，可以通过设置该对象上的属性和调用该对象上的方法来控制相机
