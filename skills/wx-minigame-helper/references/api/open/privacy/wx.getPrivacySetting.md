---
title: "wx.getPrivacySetting(Object object)"
type: api
category: api/open/privacy
api: "wx.getPrivacySetting"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/privacy/wx.getPrivacySetting.html
---

# wx.getPrivacySetting(Object object)

> 基础库 2.32.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

查询隐私授权情况。隐私合规开发指南详情可见[《小游戏隐私合规开发指南》](<https://developers.weixin.qq.com/community/develop/doc/000aa25cf1c8a0e64310ac3ef66401?highLine=%25E9%259A%2590%25E7%25A7%2581>)

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
needAuthorization | boolean | 是否需要用户授权隐私协议（如果开发者没有在「MP后台-设置-服务内容声明-用户隐私保护指引」中声明隐私收集类型则会返回false；如果开发者声明了隐私收集，且用户之前同意过隐私协议则会返回false；如果开发者声明了隐私收集，且用户还没同意过则返回true；如果用户之前同意过、但后来小程序又新增了隐私收集类型也会返回true）  
privacyContractName | string | 隐私授权协议的名称  
  
## 具体说明：

  1. 一定要调用 wx.getPrivacySetting 接口吗？

  * 不是，wx.getPrivacySetting 只是一个辅助接口，可以根据实际情况选择使用。

## 示例代码
    
    
    wx.getPrivacySetting({
      success: res => {
        console.log(res)
        // 返回结果为: res = { needAuthorization: true/false, privacyContractName: '《xxx隐私保护指引》' }
      },
      fail: () => {},
      complete: () => {}
    })
