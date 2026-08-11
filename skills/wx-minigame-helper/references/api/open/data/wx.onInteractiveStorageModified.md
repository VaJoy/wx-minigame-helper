---
title: "wx.onInteractiveStorageModified(function callback)"
type: api
category: api/open/data
api: "wx.onInteractiveStorageModified"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.onInteractiveStorageModified.html
---

# wx.onInteractiveStorageModified(function callback)  
  
> 基础库 2.9.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听成功修改好友的互动型托管数据事件，该接口在游戏主域使用

## 参数

### function callback

事件发生的回调函数，只有一个参数为 `wx.modifyFriendInteractiveStorage` 传入的 key
