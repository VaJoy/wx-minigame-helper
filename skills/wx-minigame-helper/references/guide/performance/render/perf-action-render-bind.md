---
title: "混合渲染模式"
type: guide
category: guide/performance/render
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-render-bind.html
---

# 混合渲染模式

在一些混合渲染模式的游戏中，游戏场景使用了 WebGL 的模式渲染，但是一些 GUI 以及 排行榜 等内容会使用 canvas 2d 的模式渲染。

在原有逻辑里，需要使用 gl.texImage2d 接口来渲染。
    
    
    gl.texImage2D(target, level, internalformat, format, type, canvas);
    

每次更新 canvas 之后，都需要重新调用一次接口。

为了解决这里的问题，在 gl context 上引入了新方法 [WebGLRenderingContext.wxBindCanvasTexture()](<https://developers.weixin.qq.com/minigame/dev/api/render/canvas/WebGLRenderingContext.wxBindCanvasTexture.html>)，该方法接受一个 Canvas 作为参数，并把这个 Canvas 对应的 Texture 绑定到 gl 上。
    
    
    gl.wxBindCanvasTexture(gl.TEXTURE_2D, canvas);
    

在此之后，只需要更新 Canvas 即可。

目前该方法仅支持 iOS 6.6.6 以上版本，Android/开发者工具暂不支持。
