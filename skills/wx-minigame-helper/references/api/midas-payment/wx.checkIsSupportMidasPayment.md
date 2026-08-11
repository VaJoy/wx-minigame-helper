---
title: "wx.checkIsSupportMidasPayment(Object object)"
type: api
category: api/midas-payment
api: "wx.checkIsSupportMidasPayment"
source: https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.checkIsSupportMidasPayment.html
---

# wx.checkIsSupportMidasPayment(Object object)  
  
> 基础库 3.10.3 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

检查当前环境是否支持虚拟支付。使用前请注意阅读[相关说明](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/virtual-payment2.html>)。

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
|  errMsg | String | 调用结果信息，格式为 "checkIsSupportMidasPayment:ok"  
|  data | Object | 支付支持信息对象  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  err_code | Number | 错误码，0 表示成功  
|  err_msg | String | 错误信息，"success" 表示成功  
|  allow_pay | Boolean | 是否支持支付，true 表示支持，false 表示不支持  
  
#### object.fail 回调函数

##### 参数

###### Object err

属性 | 类型 | 说明  
---|---|---  
errMsg | String | 错误信息  
  
## 平台支持说明

  * Android、Windows、OHOS 平台：默认支持虚拟支付，接口直接返回支持
  * iOS 平台：需满足以下环境要求才可能支持虚拟支付 
    * 操作系统要求：使用 iPhone 或者 iPad，iOS 15 及以上版本
    * 基础库版本要求：3.10.3 及以上
    * 客户端版本要求：8.0.68 及以上
    * 苹果支付不支持使用沙箱环境，仅支持使用现网环境

## 注意事项

若该 API 都不存在，则 iOS 一定不支持虚拟支付，请保持旧版本逻辑。

## 示例代码
    
    
    if (wx.checkIsSupportMidasPayment) {
      wx.checkIsSupportMidasPayment({
        success(res) {
          console.log('支持检查结果:', res)
          if (res.data.allow_pay) {
            console.log('当前环境支持支付')
            // 可以继续调用支付相关接口
          } else {
            console.log('当前环境不支持支付')
            // 请自行适配用户提示文案
          }
        },
        fail(err) {
          console.error('检查支持情况失败:', err)
        },
        complete() {
          console.log('检查完成')
        }
      })
    }
