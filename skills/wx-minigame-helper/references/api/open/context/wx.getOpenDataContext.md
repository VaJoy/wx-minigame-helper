---
title: "OpenDataContext wx.getOpenDataContext(Object object)"
type: api
category: api/open/context
api: "wx.getOpenDataContext"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/context/wx.getOpenDataContext.html
---

# [OpenDataContext](<OpenDataContext.md>) wx.getOpenDataContext(Object object)

> 基础库 1.9.92 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取开放数据域

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  sharedCanvasMode | String | offscreenCanvas | 否 | 共享画布类型，有效值为 offscreenCanvas 和 screenCanvas，默认为 offscreenCanvas。区别： offscreenCanvas 模式下，sharedCanvas 绘制完后需要渲染到主屏；screenCanvas 模式下，sharedCanvas 为独立渲染，并且本身已经上屏。  
| |  合法值 | 说明  
---|---  
offscreenCanvas | sharedCanvas 绘制完后需要渲染到主屏  
screenCanvas | sharedCanvas 独立渲染，并且本身已经上屏  
  
## 返回值

### [OpenDataContext](<OpenDataContext.md>)
