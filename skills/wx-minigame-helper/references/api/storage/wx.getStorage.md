---
title: "wx.getStorage(Object object)"
type: api
category: api/storage
api: "wx.getStorage"
source: https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorage.html
---

# wx.getStorage(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

从本地缓存中异步获取指定 key 的内容。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
key | string |  | 是 | 本地缓存中指定的 key |   
encrypt | Boolean | false | 否 | 是否开启加密存储。只有异步的 getStorage 接口支持开启加密存储。开启后，将会对 data 使用 AES128 解密，接口回调耗时将会增加。若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true | [2.21.3](<../../guide/runtime/client-lib/compatibility.md>)  
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
data | any | key对应的内容  
  
## 示例代码
    
    
    wx.getStorage({
      key: 'key',
      success (res) {
        console.log(res.data)
      }
    })
    
    
    
    // 开启加密存储
    wx.setStorage({
      key: "key",
      data: "value",
      encrypt: true, // 若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true
      success() {
        wx.getStorage({
          key: "key",
          encrypt: true, // 若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true
          success(res) {
            console.log(res.data)
          }
        })
      }
    })
