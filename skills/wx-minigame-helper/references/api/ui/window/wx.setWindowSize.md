---
title: "wx.setWindowSize(Object object)"
type: api
category: api/ui/window
api: "wx.setWindowSize"
source: https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.setWindowSize.html
---

# wx.setWindowSize(Object object)  
  
从基础库 [2.11.0](<../../../guide/runtime/client-lib/compatibility.md>) 开始，本接口停止维护

> 基础库 2.10.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

设置窗口大小，该接口仅适用于 PC 平台，使用细则请参见指南

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
width | number |  | 是 | 窗口宽度，以像素为单位  
height | number |  | 是 | 窗口高度，以像素为单位  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）
