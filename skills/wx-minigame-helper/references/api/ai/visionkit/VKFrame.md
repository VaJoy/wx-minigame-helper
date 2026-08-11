---
title: "VKFrame"
type: api
category: api/ai/visionkit
api: "VKFrame"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFrame.html
---

# VKFrame

> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

vision kit 会话对象。

## 属性

### number timestamp

生成时间，单位:纳秒(ns)

### [VKCamera](<VKCamera.md>) camera

相机对象

## 方法

### [Object VKFrame.getCameraTexture(WebGLRenderingContext gl)](<VKFrame.getCameraTexture.md>)

获取当前帧纹理，目前只支持 YUV 纹理。

### [ArrayBuffer VKFrame.getCameraBuffer(number width, number height)](<VKFrame.getCameraBuffer.md>)

获取当前帧 rgba buffer。iOS 端微信在 v8.0.20 开始支持，安卓端微信在 v8.0.30 开始支持。按 aspect-fill 规则裁剪，此接口要求在创建 VKSession 对象时必须传入 gl 参数。此接口仅建议拿来做帧分析使用，上屏请使用 getCameraTexture 来代替。

### [ArrayBuffer VKFrame.getCameraJpgBuffer(number width, number height, number quality)](<VKFrame.getCameraJpgBuffer.md>)

获取当前帧的 jpg 信息Buffer。安卓微信 8.0.49 开始支持，iOS微信 8.0.49 开始支持。

### [Float32Array VKFrame.getDisplayTransform()](<VKFrame.getDisplayTransform.md>)

获取纹理调整矩阵。默认获取到的纹理是未经裁剪调整的纹理，此矩阵可用于在着色器中根据帧对象尺寸对纹理进行裁剪。

### [Object VKFrame.getDepthBuffer()](<VKFrame.getDepthBuffer.md>)

获取每帧的深度图信息Buffer。安卓微信 8.0.38 开始支持，iOS微信 8.0.39 开始支持。

### [Object VKFrame.getLegSegmentBuffer()](<VKFrame.getLegSegmentBuffer.md>)

获取每帧的腿部分割信息Buffer，安卓微信 8.0.43，iOS微信 8.0.43 开始支持。
