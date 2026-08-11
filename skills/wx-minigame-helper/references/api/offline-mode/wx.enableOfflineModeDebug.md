---
title: "wx.enableOfflineModeDebug(Object object)"
type: api
category: api/offline-mode
api: "wx.enableOfflineModeDebug"
source: https://developers.weixin.qq.com/minigame/dev/api/offline-mode/wx.enableOfflineModeDebug.html
---

# wx.enableOfflineModeDebug(Object object)

> 基础库 3.16.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持

## 功能描述

开启或关闭离线模式调试。仅在开发版和体验版中可用，正式版中调用会失败。若服务端已配置离线模式，则无法通过此接口修改。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
enableDebug | boolean |  | 是 | 是否开启离线模式调试  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
errMsg | string | 错误信息  
  
#### object.fail 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
errMsg | string | 错误信息
