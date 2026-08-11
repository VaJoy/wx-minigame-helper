---
title: "UserCryptoManager.getRandomValues(Object object)"
type: api
category: api/base/crypto
api: "UserCryptoManager.getRandomValues"
source: https://developers.weixin.qq.com/minigame/dev/api/base/crypto/UserCryptoManager.getRandomValues.html
---

# UserCryptoManager.getRandomValues(Object object)

> 基础库 2.17.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持

## 功能描述

获取密码学安全随机数

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
length | number |  | 是 | 整数，生成随机数的字节数，最大 1048576  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
randomValues | ArrayBuffer | 随机数内容，长度为传入的字节数  
  
## 示例代码
    
    
    const userCryptoManager = wx.getUserCryptoManager()
    userCryptoManager.getRandomValues({
      length: 6 // 生成 6 个字节长度的随机数,
      success: res => {
        // 转成 base64 字符串伪代码 arrayBufferToBase64(res.randomValues)
      }
    })
