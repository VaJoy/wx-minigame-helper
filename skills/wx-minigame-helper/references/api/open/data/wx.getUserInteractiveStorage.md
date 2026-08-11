---
title: "wx.getUserInteractiveStorage(Object object)"
type: api
category: api/open/data
api: "wx.getUserInteractiveStorage"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserInteractiveStorage.html
---

# wx.getUserInteractiveStorage(Object object)

> 基础库 2.7.7 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **[用户授权](<../../../guide/base-ability/authorize.md>)** ：需要 scope.WxFriendInteraction

## 功能描述

获取当前用户互动型托管数据对应 key 的数据。该接口需要用户授权。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
keyList | Array.<string> |  | 是 | 要获取的 key 列表  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
iv | string | 加密算法的初始向量，详见 [用户数据的签名验证和加解密](<../../../guide/open-ability/data/signature.md>)  
encryptedData | string | 加密数据，包含互动型托管数据的值。解密后的结果为一个 `KVDataList`，每一项为一个 `KVData`。 [用户数据的签名验证和加解密](<../../../guide/open-ability/data/signature.md>)  
cloudID | string | 敏感数据对应的云 ID，开通[云开发](<https://developers.weixin.qq.com/minigame/dev/wxcloud/basis/getting-started.html>)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](<../../../guide/open-ability/data/signature.md>)  
  
#### object.fail 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  errMsg | string | 错误信息  
|  errCode | number | 错误码  
| |  合法值 | 说明  
---|---  
-17008 | 非法的 key
