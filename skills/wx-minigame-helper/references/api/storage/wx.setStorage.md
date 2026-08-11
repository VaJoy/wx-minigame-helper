---
title: "wx.setStorage(Object object)"
type: api
category: api/storage
api: "wx.setStorage"
source: https://developers.weixin.qq.com/minigame/dev/api/storage/wx.setStorage.html
---

# wx.setStorage(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
key | string |  | 是 | 本地缓存中指定的 key |   
data | any |  | 是 | 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 |   
encrypt | Boolean | false | 否 | 是否开启加密存储。只有异步的 setStorage 接口支持开启加密存储。开启后，将会对 data 使用 AES128 加密，接口回调耗时将会增加。若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true。此外，由于加密后的数据会比原始数据膨胀1.4倍，因此开启 encrypt 的情况下，单个 key 允许存储的最大数据长度为 0.7MB，所有数据存储上限为 7.1MB | [2.21.3](<../../guide/runtime/client-lib/compatibility.md>)  
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
## 示例代码
    
    
    wx.setStorage({
      key:"key",
      data:"value"
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
