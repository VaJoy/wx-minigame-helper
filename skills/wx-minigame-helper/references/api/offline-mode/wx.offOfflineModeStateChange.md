---
title: "wx.offOfflineModeStateChange(function callback)"
type: api
category: api/offline-mode
api: "wx.offOfflineModeStateChange"
source: https://developers.weixin.qq.com/minigame/dev/api/offline-mode/wx.offOfflineModeStateChange.html
---

# wx.offOfflineModeStateChange(function callback)

> 基础库 3.16.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

取消监听离线模式状态变化事件。

## 参数

### function callback

之前通过 `wx.onOfflineModeStateChange` 注册的回调函数。若不传则移除所有监听。
