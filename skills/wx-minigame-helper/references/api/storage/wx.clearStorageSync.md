---
title: "wx.clearStorageSync()"
type: api
category: api/storage
api: "wx.clearStorageSync"
source: https://developers.weixin.qq.com/minigame/dev/api/storage/wx.clearStorageSync.html
---

# wx.clearStorageSync()

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

[wx.clearStorage](<wx.clearStorage.md>) 的同步版本

## 示例代码
    
    
    wx.clearStorage()
    
    
    
    try {
      wx.clearStorageSync()
    } catch(e) {
      // Do something when catch error
    }
