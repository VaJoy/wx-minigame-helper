---
title: "WebGLRenderingContext.wxBindCanvasTexture(number texture, Canvas canvas)"
type: api
category: api/render/canvas
api: "WebGLRenderingContext.wxBindCanvasTexture"
source: https://developers.weixin.qq.com/minigame/dev/api/render/canvas/WebGLRenderingContext.wxBindCanvasTexture.html
---

# WebGLRenderingContext.wxBindCanvasTexture(number texture, [Canvas](<Canvas.md>) canvas)

从基础库 [3.13.0](<../../../guide/runtime/client-lib/compatibility.md>) 开始，本接口停止维护

> 基础库 2.0.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

将一个 Canvas 对应的 Texture 绑定到 WebGL 上下文。

  * 仅 iOS 支持 wxBindCanvasTexture 接口，其他平台可使用示例代码中的替代方法

## 参数

### number texture

WebGL 的纹理类型枚举值

### [Canvas](<Canvas.md>) canvas

需要绑定为 Texture 的 Canvas

## 示例代码

使用 wxBindCanvasTexture
    
    
    gl.wxBindCanvasTexture(gl.TEXTURE_2D, canvas)
    

等同于
    
    
    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)
    // ......
    gl.texImage2D(target, level, internalformat, format, type, canvas)
