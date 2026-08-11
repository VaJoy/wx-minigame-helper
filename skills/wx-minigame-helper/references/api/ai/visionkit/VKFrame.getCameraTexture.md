---
title: "Object VKFrame.getCameraTexture(WebGLRenderingContext gl)"
type: api
category: api/ai/visionkit
api: "VKFrame.getCameraTexture"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFrame.getCameraTexture.html
---

# Object VKFrame.getCameraTexture(WebGLRenderingContext gl)

> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

获取当前帧纹理，目前只支持 YUV 纹理。

## 参数

### WebGLRenderingContext gl

画布

## 返回值

### Object

帧纹理对象

属性 | 类型 | 说明  
---|---|---  
yTexture | WebGLTexture | Y 分量纹理  
uvTexture | WebGLTexture | UV 分量纹理
