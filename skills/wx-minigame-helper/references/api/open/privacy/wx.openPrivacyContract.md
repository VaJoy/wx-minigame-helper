---
title: "wx.openPrivacyContract(Object object)"
type: api
category: api/open/privacy
api: "wx.openPrivacyContract"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/privacy/wx.openPrivacyContract.html
---

# wx.openPrivacyContract(Object object)

> 基础库 2.32.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

跳转至隐私协议页面。隐私合规开发指南详情可见[《小游戏隐私合规开发指南》](<https://developers.weixin.qq.com/community/develop/doc/000aa25cf1c8a0e64310ac3ef66401?highLine=%25E9%259A%2590%25E7%25A7%2581>)

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 具体说明：

  *     1. 一定要调用 wx.openPrivacyContract 接口吗？
    * 不是。开发者也可以选择在小游戏内自行展示完整的隐私协议。但推荐使用该接口。

## 示例代码
    
    
    wx.openPrivacyContract({
      success: () => {}, // 打开成功
      fail: () => {}, // 打开失败
      complete: () => {}
    })
