---
title: "wx.stopBeaconDiscovery(Object object)"
type: api
category: api/device/ibeacon
api: "wx.stopBeaconDiscovery"
source: https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.stopBeaconDiscovery.html
---

# wx.stopBeaconDiscovery(Object object)  
  
> 基础库 2.9.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

停止搜索附近的 Beacon 设备

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 错误

错误码 | 错误信息 | 说明  
---|---|---  
0 | ok | 正常  
11000 | unsupport | 系统或设备不支持  
11001 | bluetooth service unavailable | 蓝牙服务不可用  
11002 | location service unavailable | 位置服务不可用  
11003 | already start | 已经开始搜索  
11004 | not startBeaconDiscovery | 还未开始搜索  
11005 | system error | 系统错误  
11006 | invalid data | 参数不正确
