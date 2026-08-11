---
title: "wx.getShowSplashAdStatus(Object object)"
type: api
category: api/ad
api: "wx.getShowSplashAdStatus"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/wx.getShowSplashAdStatus.html
---

# wx.getShowSplashAdStatus(Object object)

> 基础库 3.7.8 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持

## 功能描述

获取封面广告组件展示状态。请通过 [wx.getSystemInfoSync()](<../base/system/wx.getSystemInfoSync.md>) 返回对象的 SDKVersion 判断基础库版本号后再使用该 API（小游戏端要求 >= 3.7.8， 小程序端要求 >= 3.7.8）。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  status | string | 封面广告组件展示状态  
| |  合法值 | 说明  
---|---  
unknown | 初始值，状态未知  
pending | 进行展示中  
success | 展示成功  
fail | 展示失败  
|  code | number | 封面广告组件展示状态码  
| |  合法值 | 说明  
---|---  
-1 | 初始值，状态未知  
1 | 展示成功  
2 | 主动拦截过滤，不展示广告  
3 | 展示超时  
  
## 示例代码
    
    
    // 获取封面广告展示状态
    wx.getShowSplashAdStatus({
      success: res => {
        console.log('getShowSplashAdStatus res', res.status, res.code)
      },
    })
