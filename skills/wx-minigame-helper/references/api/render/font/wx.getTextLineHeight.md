---
title: "number wx.getTextLineHeight(Object object)"
type: api
category: api/render/font
api: "wx.getTextLineHeight"
source: https://developers.weixin.qq.com/minigame/dev/api/render/font/wx.getTextLineHeight.html
---

# number wx.getTextLineHeight(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取一行文本的行高

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  fontStyle | string | normal | 否 | 字体样式  
| |  合法值 | 说明  
---|---  
normal | 正常  
italic | 斜体  
|  fontWeight | string | normal | 否 | 字重  
| |  合法值 | 说明  
---|---  
normal | 正常  
bold | 粗体  
|  fontSize | number | 16 | 否 | 字号  
|  fontFamily | string |  | 是 | 字体名称  
|  text | string |  | 是 | 文本的内容  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 返回值

### number

文本的行高
