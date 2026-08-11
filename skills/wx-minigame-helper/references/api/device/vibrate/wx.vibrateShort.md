---
title: "wx.vibrateShort(Object object)"
type: api
category: api/device/vibrate
api: "wx.vibrateShort"
source: https://developers.weixin.qq.com/minigame/dev/api/device/vibrate/wx.vibrateShort.html
---

# wx.vibrateShort(Object object)

> 基础库 1.2.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

使手机发生较短时间的振动（15 ms）。仅在 iPhone `7 / 7 Plus` 以上及 Android 机型生效

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
type | string |  | 是 | 震动强度类型，有效值为：heavy、medium、light | [2.13.0](<../../../guide/runtime/client-lib/compatibility.md>)  
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
#### object.fail 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  errMsg | string | 错误信息  
| |  合法值 | 说明  
---|---  
style is not support | 当前设备不支持设置震动等级
