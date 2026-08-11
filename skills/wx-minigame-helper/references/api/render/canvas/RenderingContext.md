---
title: "RenderingContext"
type: api
category: api/render/canvas
api: "RenderingContext"
source: https://developers.weixin.qq.com/minigame/dev/api/render/canvas/RenderingContext.html
---

# RenderingContext

画布对象的绘图上下文。

  * 通过 Canvas.getContext('2d') 接口可以获取 CanvasRenderingContext2D 对象，实现了 [HTML Canvas 2D Context](<https://www.w3.org/TR/2dcontext/>) 定义的大部分属性、方法。
  * 通过 Canvas.getContext('webgl') 接口可以获取 WebGLRenderingContext 对象，实现了 [WebGL 1.0](<https://www.khronos.org/registry/webgl/specs/latest/1.0/>) 定义的所有属性、方法、常量。

## 2d 接口支持情况

iOS/Android 不支持的 2d 属性和接口

  * globalCompositeOperation 不支持以下值： source-in source-out destination-atop lighter copy。如果使用，不会报错，但是将得到与预期不符的结果。
  * isPointInPath

## WebGL 接口支持情况

压缩纹理的支持

  * iOS 支持 pvr 格式
  * Android 支持 etc1 格式
