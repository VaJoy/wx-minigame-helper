---
title: "Object wx.getDirectAdStatusSync()"
type: api
category: api/ad
api: "wx.getDirectAdStatusSync"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/wx.getDirectAdStatusSync.html
---

# Object wx.getDirectAdStatusSync()

> 基础库 3.11.2 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

获取直玩广告组件展示状态。

## 返回值

### Object

直玩广告状态信息

属性 | 类型 | 说明  
---|---|---  
isInMask | boolean | 当前是否处于蒙层阶段  
isInDirectGameAd | boolean | 当前是否处于直接广告中  
  
## 示例代码
    
    
    const statusInfo = wx.getDirectAdStatusSync();
    console.log(statusInfo.isInMask) // 当前是否在蒙层阶段
    console.log(statusInfo.isInDirectGameAd) // 当前是否在直玩广告中
