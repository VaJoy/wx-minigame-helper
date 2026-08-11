---
title: "wx.requestPointerLock()"
type: api
category: api/render/cursor
api: "wx.requestPointerLock"
source: https://developers.weixin.qq.com/minigame/dev/api/render/cursor/wx.requestPointerLock.html
---

# wx.requestPointerLock()

> 基础库 3.2.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

锁定鼠标指针。锁定指针后，鼠标会被隐藏，可以通过 [wx.touchMove](<\(wx.touchMove\)>) 事件获取鼠标偏移量。 **此接口仅在 Windows、Mac 端支持，且必须在用户进行操作后才可调用。**

## 示例代码
    
    
    wx.onTouchEnd(() => {
      wx.requestPointerLock() // 触发鼠标锁定
    })
    

## 示例 demo

下方打开后点按窗口会鼠标锁定，同时会在 touchMove 时持续在控制台打印偏移量。 <https://developers.weixin.qq.com/s/wGruMHm97tMF>[](<https://developers.weixin.qq.com/s/wGruMHm97tMF>)
