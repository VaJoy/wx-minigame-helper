---
title: "wx.getFuzzyLocation(Object object)"
type: api
category: api/location
api: "wx.getFuzzyLocation"
source: https://developers.weixin.qq.com/minigame/dev/api/location/wx.getFuzzyLocation.html
---

# wx.getFuzzyLocation(Object object)

> 基础库 2.25.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **[用户授权](<../../guide/base-ability/authorize.md>)** ：需要 scope.userFuzzyLocation
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取当前的模糊地理位置。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  type | string | wgs84 | 否 | 返回的坐标类型  
| |  合法值 | 说明  
---|---  
wgs84 | 返回 gps 坐标  
gcj02 | 返回 gcj02 坐标  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
latitude | number | 纬度，范围为 -90~90，负数表示南纬  
longitude | number | 经度，范围为 -180~180，负数表示西经  
  
## 示例代码
    
    
    wx.getFuzzyLocation({
     type: 'wgs84',
     success (res) {
       const latitude = res.latitude
       const longitude = res.longitude
     }
    })
