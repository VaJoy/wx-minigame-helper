---
title: "Object wx.getAppBaseInfo()"
type: api
category: api/base/system
api: "wx.getAppBaseInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppBaseInfo.html
---

# Object wx.getAppBaseInfo()

> 基础库 2.25.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取微信APP基础信息

## 返回值

### Object

| 属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  SDKVersion | string | 客户端基础库版本 |   
|  enableDebug | boolean | 是否已打开调试。可通过右上角菜单或 [wx.setEnableDebug](<../debug/wx.setEnableDebug.md>) 打开调试。 |   
|  host | Object | 当前小程序运行的宿主环境 |   
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  appId | string | 宿主 app（第三方App） 对应的 appId （当小程序运行在第三方App环境时才返回）  
  
|  language | string | 微信设置的语言 |   
|  version | string | 微信版本号 |   
|  PCKernelVersion | string | PC 内核版本号，仅在 PC 端存在该值 |   
|  theme | string | 系统当前主题，取值为`light`或`dark`，全局配置`"darkmode":true`时才能获取，否则为 undefined （不支持小游戏） |   
| |  合法值 | 说明  
---|---  
dark | 深色主题  
light | 浅色主题  
|  fontSizeScaleFactor | number | 微信字体大小缩放比例 |   
|  fontSizeSetting | number | 微信字体大小，单位px | [2.23.4](<../../../guide/runtime/client-lib/compatibility.md>)  
  
## 示例代码
    
    
    const appBaseInfo = wx.getAppBaseInfo()
    
    console.log(appBaseInfo.SDKVersion)
    console.log(appBaseInfo.enableDebug)
    console.log(appBaseInfo.host)
    console.log(appBaseInfo.language)
    console.log(appBaseInfo.version)
    console.log(appBaseInfo.theme)
