---
title: "wx.onBackgroundFetchData(function listener)"
type: api
category: api/storage/background-fetch
api: "wx.onBackgroundFetchData"
source: https://developers.weixin.qq.com/minigame/dev/api/storage/background-fetch/wx.onBackgroundFetchData.html
---

# wx.onBackgroundFetchData(function listener)  
  
> 基础库 3.0.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听收到 backgroundFetch 数据事件。如果监听时请求已经完成，则事件不会触发。建议和 [wx.getBackgroundFetchData](<wx.getBackgroundFetchData.md>) 配合使用

## 参数

### function listener

收到 backgroundFetch 数据事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
fetchType | string | 缓存数据类别，取值为 periodic 或 pre  
fetchedData | string | 缓存数据  
timeStamp | number | 客户端拿到缓存数据的时间戳  
path | String | 小游戏页面路径（一般不需要传，除非使用到小游戏独立分包）  
query | String | 传给页面的 query 参数  
scene | Number | 进入小游戏的场景值
