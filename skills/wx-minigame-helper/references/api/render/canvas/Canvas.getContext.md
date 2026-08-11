---
title: "RenderingContext Canvas.getContext(string contextType, Object contextAttributes)"
type: api
category: api/render/canvas
api: "Canvas.getContext"
source: https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.getContext.html
---

# [RenderingContext](<RenderingContext.md>) Canvas.getContext(string contextType, Object contextAttributes)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取画布对象的绘图上下文

## 参数

### string contextType

上下文类型

**contextType 的合法值**

值 | 说明 | 最低版本  
---|---|---  
2d | 2d 绘图上下文 |   
webgl | webgl 绘图上下文 |   
webgl2 | webgl2 绘图上下文 | [2.24.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
### Object contextAttributes

webgl 上下文属性，仅当 contextType 为 webgl 时有效

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
antialias | boolean | false | 否 | 表示是否抗锯齿 |   
preserveDrawingBuffer | boolean | false | 否 | 表示是否绘图完成后是否保留绘图缓冲区 |   
antialiasSamples | number | 2 | 否 | 抗锯齿样本数。最小值为 2，最大不超过系统限制数量，仅 iOS 支持 |   
alpha | boolean | false | 否 | 是否开启透明通道，仅当 contextType 为 webgl 时有效。（开启后，配合wx.createVideo({underGameView: true}) 即可在video组件之上渲染主屏画布） | [2.11.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
## 返回值

### [RenderingContext](<RenderingContext.md>)

绘图上下文
