---
title: "boolean wx.isVKSupport(string version)"
type: api
category: api/ai/visionkit
api: "wx.isVKSupport"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.isVKSupport.html
---

# boolean wx.isVKSupport(string version)

> 基础库 2.22.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

判断支持版本

## 参数

### string version

**version 的合法值**

值 | 说明 | 最低版本  
---|---|---  
v1 | 旧版本 |   
v2 | v2 版本，目前只有 iOS 基础库 2.22.0 以上支持 |   
  
## 返回值

### boolean

是否支持对应版本的 vision kit

## 示例代码
    
    
    const isSupportV2 = wx.isVKSupport('v2')
