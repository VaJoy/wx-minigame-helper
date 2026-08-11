---
title: "Object wx.getExtConfigSync()"
type: api
category: api/ext
api: "wx.getExtConfigSync"
source: https://developers.weixin.qq.com/minigame/dev/api/ext/wx.getExtConfigSync.html
---

# Object wx.getExtConfigSync()  
  
> 基础库 2.8.3 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

[wx.getExtConfig](<wx.getExtConfig.md>) 的同步版本。

## 返回值

### Object

第三方平台自定义的数据

## Tips

  1. 本接口暂时无法通过 [wx.canIUse](<\(wx.canIUse\)>) 判断是否兼容，开发者需要自行判断 [wx.getExtConfigSync](<wx.getExtConfigSync.md>) 是否存在来兼容

    
    
    let extConfig = wx.getExtConfigSync? wx.getExtConfigSync(): {}
    console.log(extConfig)
