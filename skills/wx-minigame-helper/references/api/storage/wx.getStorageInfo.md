---
title: "wx.getStorageInfo(Object object)"
type: api
category: api/storage
api: "wx.getStorageInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorageInfo.html
---

# wx.getStorageInfo(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

异步获取当前storage的相关信息。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object object

属性 | 类型 | 说明  
---|---|---  
keys | Array.<string> | 当前 storage 中所有的 key  
currentSize | number | 当前占用的空间大小, 单位 KB  
limitSize | number | 限制的空间大小，单位 KB  
  
## 示例代码
    
    
    wx.getStorageInfo({
      success (res) {
        console.log(res.keys)
        console.log(res.currentSize)
        console.log(res.limitSize)
      }
    })
    
    
    
    try {
      const res = wx.getStorageInfoSync()
      console.log(res.keys)
      console.log(res.currentSize)
      console.log(res.limitSize)
    } catch (e) {
      // Do something when catch error
    }
