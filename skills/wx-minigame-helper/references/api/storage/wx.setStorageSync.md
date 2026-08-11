---
title: "wx.setStorageSync(string key, any data)"
type: api
category: api/storage
api: "wx.setStorageSync"
source: https://developers.weixin.qq.com/minigame/dev/api/storage/wx.setStorageSync.html
---

# wx.setStorageSync(string key, any data)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。

## 参数

### string key

本地缓存中指定的 key

### any data

需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。

## 注意

storage 应只用来进行数据的持久化存储，不应用于运行时的数据传递或全局状态管理。启动过程中过多的同步读写存储，会显著影响启动耗时。

## 示例代码
    
    
    try {
      wx.setStorageSync('key', 'value')
    } catch (e) { }
