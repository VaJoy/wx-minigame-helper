---
title: "wx.getLocation(Object object)"
type: api
category: api/location
api: "wx.getLocation"
source: https://developers.weixin.qq.com/minigame/dev/api/location/wx.getLocation.html
---

# wx.getLocation(Object object)  
  
从基础库 [3.0.1](<../../guide/runtime/client-lib/compatibility.md>) 开始，本接口停止维护，请使用 [wx.getFuzzyLocation](<wx.getFuzzyLocation.md>) 代替

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **[用户授权](<../../guide/base-ability/authorize.md>)** ：需要 scope.userLocation
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。地图相关使用的坐标格式应为 gcj02。 基础库 `2.17.0` 版本起 `wx.getLocation` 增加调用频率限制，[相关公告](<https://developers.weixin.qq.com/community/develop/doc/000aee91a98d206bc6dbe722b51801>)。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
type | string | wgs84 | 否 | wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标 |   
altitude | boolean | false | 否 | 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度 | [1.6.0](<../../guide/runtime/client-lib/compatibility.md>)  
isHighAccuracy | boolean | false | 否 | 开启高精度定位 | [2.9.0](<../../guide/runtime/client-lib/compatibility.md>)  
highAccuracyExpireTime | number |  | 否 | 高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果 | [2.9.0](<../../guide/runtime/client-lib/compatibility.md>)  
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
latitude | number | 纬度，范围为 -90~90，负数表示南纬 |   
longitude | number | 经度，范围为 -180~180，负数表示西经 |   
speed | number | 速度，单位 m/s |   
accuracy | number | 位置的精确度，反应与真实位置之间的接近程度，可以理解成10即与真实位置相差10m，越小越精确 |   
altitude | number | 高度，单位 m | [1.2.0](<../../guide/runtime/client-lib/compatibility.md>)  
verticalAccuracy | number | 垂直精度，单位 m（Android 无法获取，返回 0） | [1.2.0](<../../guide/runtime/client-lib/compatibility.md>)  
horizontalAccuracy | number | 水平精度，单位 m | [1.2.0](<../../guide/runtime/client-lib/compatibility.md>)  
  
## 示例代码
    
    
    wx.getLocation({
     type: 'wgs84',
     success (res) {
       const latitude = res.latitude
       const longitude = res.longitude
       const speed = res.speed
       const accuracy = res.accuracy
     }
    })
    

## 注意

  * `2.17.0 起`wx.getLocation` 增加调用频率限制，[相关公告](<https://developers.weixin.qq.com/community/develop/doc/000aee91a98d206bc6dbe722b51801>)
  * 工具中定位模拟使用IP定位，可能会有一定误差。且工具目前仅支持 gcj02 坐标。
  * 使用第三方服务进行逆地址解析时，请确认第三方服务默认的坐标系，正确进行坐标转换。
