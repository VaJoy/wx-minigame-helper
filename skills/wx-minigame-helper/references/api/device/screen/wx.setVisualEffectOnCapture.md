---
title: "wx.setVisualEffectOnCapture(Object object)"
type: api
category: api/device/screen
api: "wx.setVisualEffectOnCapture"
source: https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.setVisualEffectOnCapture.html
---

# wx.setVisualEffectOnCapture(Object object)

> 基础库 3.1.4 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

设置截屏/录屏时屏幕表现

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
visualEffect | string | none | 否 | 截屏/录屏时的表现，仅支持 none / hidden，传入 hidden 则表示在截屏/录屏时隐藏屏幕  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## Bug & Tip

  1. `tip`：iOS 要求基础库版本为 3.3.0 以上，且系统版本为 iOS 16 以上
  2. `tip`：iOS 目前只支持处理录屏时的表现
