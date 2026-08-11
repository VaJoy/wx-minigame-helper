---
title: "wx.saveImageToPhotosAlbum(Object object)"
type: api
category: api/media/image
api: "wx.saveImageToPhotosAlbum"
source: https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.saveImageToPhotosAlbum.html
---

# wx.saveImageToPhotosAlbum(Object object)

> 基础库 1.2.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **[用户授权](<../../../guide/base-ability/authorize.md>)** ：需要 scope.writePhotosAlbum
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

保存图片到系统相册。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
filePath | string |  | 是 | 图片文件路径，可以是临时文件路径或永久文件路径 (本地路径) ，不支持网络路径  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 示例代码
    
    
    wx.saveImageToPhotosAlbum({
      success(res) { }
    })
