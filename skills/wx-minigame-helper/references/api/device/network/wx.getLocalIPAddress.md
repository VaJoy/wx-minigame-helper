---
title: "wx.getLocalIPAddress(Object object)"
type: api
category: api/device/network
api: "wx.getLocalIPAddress"
source: https://developers.weixin.qq.com/minigame/dev/api/device/network/wx.getLocalIPAddress.html
---

# wx.getLocalIPAddress(Object object)

> 基础库 2.20.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取局域网IP地址

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

属性 | 类型 | 说明  
---|---|---  
errMsg | string | 错误信息  
localip | string | 本机局域网IP地址  
netmask | string | 本机局域网子网掩码，基础库 2.24.0 开始支持  
  
## 示例代码
    
    
    wx.getLocalIPAddress({
      success (res) {
        const localip = res.localip
      }
    })
