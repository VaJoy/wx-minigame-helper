---
title: "VKCamera"
type: api
category: api/ai/visionkit
api: "VKCamera"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKCamera.html
---

# VKCamera

> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

相机对象

## 属性

### Float32Array transform

相机原始的Pose矩阵

### Float32Array viewMatrix

视图矩阵

### Float32Array intrinsics

> 基础库 2.22.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

相机内参，只有 v2 版本支持

## 方法

### [Float32Array VKCamera.getProjectionMatrix(number near, number far)](<VKCamera.getProjectionMatrix.md>)

获取投影矩阵
