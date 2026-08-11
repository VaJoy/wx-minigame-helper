---
title: "wx.getBackgroundFetchData(object object)"
type: api
category: api/storage/background-fetch
api: "wx.getBackgroundFetchData"
source: https://developers.weixin.qq.com/minigame/dev/api/storage/background-fetch/wx.getBackgroundFetchData.html
---

# wx.getBackgroundFetchData(object object)  
  
> 基础库 3.0.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

拉取 backgroundFetch 客户端缓存数据。 当调用接口时，若当次请求未结束，会先返回本地的旧数据（之前打开小程序时请求的），如果本地没有旧数据，安卓上会返回fail，不会等待请求完成，iOS上会返回success但fetchedData为空，也不会等待请求完成。建议和 [wx.onBackgroundFetchData](<wx.onBackgroundFetchData.md>) 配合使用

## 参数

### object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
fetchType | String |  | 是 | 缓存数据类别，取值为 periodic 或 pre  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
fetchedData | String | 缓存数据  
timeStamp | Number | 客户端拿到缓存数据的时间戳 ms。(iOS 时间戳存在异常，8.0.27 修复)  
path | String | 小程序页面路径  
query | String | 传给页面的 query 参数  
scene | Number | 进入小程序的场景值
