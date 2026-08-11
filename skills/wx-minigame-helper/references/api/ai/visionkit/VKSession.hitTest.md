---
title: "Array.<Object> VKSession.hitTest(number x, number y, Object reset)"
type: api
category: api/ai/visionkit
api: "VKSession.hitTest"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.hitTest.html
---

# Array.<Object> VKSession.hitTest(number x, number y, Object reset)

> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

触摸检测，v1 版本只支持单平面（即 hitTest 生成一次平面后，后续 hitTest 均不会再生成平面，而是以之前生成的平面为基础进行检测）。如果需要重新识别其他平面，可以在调用此方法时将 reset 参数置为 true。

## 参数

### number x

相对视窗的横坐标，取值范围为 [0, 1]，0 为左边缘，1 为右边缘

### number y

相对视窗的纵坐标，取值范围为 [0, 1]，0 为上边缘，1 为下边缘

### Object reset

是否需要重新识别其他平面，v2 版本不再需要此参数

## 返回值

### Array.<Object>

检测结果

属性 | 类型 | 说明  
---|---|---  
transform | Float32Array | 包含位置、旋转、放缩信息的矩阵，以列为主序
