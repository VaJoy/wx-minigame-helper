---
title: "wx.hideToast(Object object)"
type: api
category: api/ui/interaction
api: "wx.hideToast"
source: https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.hideToast.html
---

# wx.hideToast(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

隐藏消息提示框

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
noConflict | boolean | false | 否 | 目前 toast 和 loading 相关接口可以相互混用，此参数可用于取消混用特性 | [2.22.1](<../../../guide/runtime/client-lib/compatibility.md>)  
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
