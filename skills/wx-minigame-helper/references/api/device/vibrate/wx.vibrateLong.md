---
title: "wx.vibrateLong(Object object)"
type: api
category: api/device/vibrate
api: "wx.vibrateLong"
source: https://developers.weixin.qq.com/minigame/dev/api/device/vibrate/wx.vibrateLong.html
---

# wx.vibrateLong(Object object)

> 基础库 1.2.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

使手机发生较长时间的振动（400 ms)

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）
