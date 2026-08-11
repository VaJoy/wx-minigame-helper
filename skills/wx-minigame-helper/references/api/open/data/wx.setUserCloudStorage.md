---
title: "wx.setUserCloudStorage(Object object)"
type: api
category: api/open/data
api: "wx.setUserCloudStorage"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.setUserCloudStorage.html
---

# wx.setUserCloudStorage(Object object)

> 基础库 1.9.92 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

对用户托管数据进行写数据操作。允许同时写多组 KV 数据。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
KVDataList | Array.<[KVData](<KVData.md>)> |  | 是 | 要修改的 KV 数据列表  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 托管数据的限制

  1. 每个openid所标识的微信用户在每个游戏上托管的数据不能超过128个key-value对。
  2. 上报的key-value列表当中每一项的key+value长度都不能超过1K(1024)字节。
  3. 上报的key-value列表当中每一个key长度都不能超过128字节。
