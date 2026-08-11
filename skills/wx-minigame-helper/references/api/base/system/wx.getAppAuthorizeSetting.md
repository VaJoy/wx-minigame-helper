---
title: "Object wx.getAppAuthorizeSetting()"
type: api
category: api/base/system
api: "wx.getAppAuthorizeSetting"
source: https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppAuthorizeSetting.html
---

# Object wx.getAppAuthorizeSetting()

> 基础库 2.25.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取微信APP授权设置

## 返回值

### Object

属性 | 类型 | 说明  
---|---|---  
albumAuthorized | 'authorized'/'denied'/'not determined' | 允许微信使用相册的开关（仅 iOS 有效）  
bluetoothAuthorized | 'authorized'/'denied'/'not determined' | 允许微信使用蓝牙的开关（安卓基础库 3.5.0 以上有效）  
cameraAuthorized | 'authorized'/'denied'/'not determined' | 允许微信使用摄像头的开关  
locationAuthorized | 'authorized'/'denied'/'not determined' | 允许微信使用定位的开关  
locationReducedAccuracy | boolean | 定位准确度。true 表示模糊定位，false 表示精确定位（仅 iOS 有效）  
microphoneAuthorized | 'authorized'/'denied'/'not determined' | 允许微信使用麦克风的开关  
notificationAuthorized | 'authorized'/'denied'/'not determined' | 允许微信通知的开关  
notificationAlertAuthorized | 'authorized'/'denied'/'not determined' | 允许微信通知带有提醒的开关（仅 iOS 有效）  
notificationBadgeAuthorized | 'authorized'/'denied'/'not determined' | 允许微信通知带有标记的开关（仅 iOS 有效）  
notificationSoundAuthorized | 'authorized'/'denied'/'not determined' | 允许微信通知带有声音的开关（仅 iOS 有效）  
phoneCalendarAuthorized | 'authorized'/'denied'/'not determined' | 允许微信读写日历的开关  
  
## 示例代码
    
    
    const appAuthorizeSetting = wx.getAppAuthorizeSetting()
    
    console.log(appAuthorizeSetting.albumAuthorized)
    console.log(appAuthorizeSetting.bluetoothAuthorized)
    console.log(appAuthorizeSetting.cameraAuthorized)
    console.log(appAuthorizeSetting.locationAuthorized)
    console.log(appAuthorizeSetting.locationReducedAccuracy)
    console.log(appAuthorizeSetting.microphoneAuthorized)
    console.log(appAuthorizeSetting.notificationAlertAuthorized)
    console.log(appAuthorizeSetting.notificationAuthorized)
    console.log(appAuthorizeSetting.notificationBadgeAuthorized)
    console.log(appAuthorizeSetting.notificationSoundAuthorized)
    console.log(appAuthorizeSetting.phoneCalendarAuthorized)
    

## 返回值说明

`'authorized'` 表示已经获得授权，无需再次请求授权； `'denied'` 表示请求授权被拒绝，无法再次请求授权；（此情况需要引导用户[打开系统设置](<wx.openAppAuthorizeSetting.md>)，在设置页中打开权限） `'non determined'` 表示尚未请求授权，会在微信下一次调用系统相应权限时请求；（仅 iOS 会出现。此种情况下引导用户打开系统设置，不展示开关）
