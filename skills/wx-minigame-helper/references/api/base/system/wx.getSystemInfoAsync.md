---
title: "wx.getSystemInfoAsync(Object object)"
type: api
category: api/base/system
api: "wx.getSystemInfoAsync"
source: https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoAsync.html
---

# wx.getSystemInfoAsync(Object object)

从基础库 [2.20.1](<../../../guide/runtime/client-lib/compatibility.md>) 开始，本接口停止维护，请使用 [wx.getSystemSetting](<wx.getSystemSetting.md>)、[wx.getAppAuthorizeSetting](<wx.getAppAuthorizeSetting.md>)、[wx.getDeviceInfo](<wx.getDeviceInfo.md>)、[wx.getWindowInfo](<wx.getWindowInfo.md>)、[wx.getAppBaseInfo](<wx.getAppBaseInfo.md>) 代替

> 基础库 2.25.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

异步获取系统信息。需要一定的微信客户端版本支持，在不支持的客户端上，会使用同步实现来返回。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  brand | string | 设备品牌 | [1.5.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  model | string | 设备型号。新机型刚推出一段时间会显示unknown，微信会尽快进行适配。 |   
|  pixelRatio | number | 设备像素比 |   
|  screenWidth | number | 屏幕宽度，单位px | [1.1.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  screenHeight | number | 屏幕高度，单位px | [1.1.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  windowWidth | number | 可使用窗口宽度，单位px |   
|  windowHeight | number | 可使用窗口高度，单位px |   
|  statusBarHeight | number | 状态栏的高度，单位px | [1.9.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  language | string | 微信设置的语言 |   
|  version | string | 微信版本号 |   
|  system | string | 操作系统及版本 |   
|  platform | string | 客户端平台 |   
| |  合法值 | 说明  
---|---  
ios | iOS微信（包含 iPhone、iPad）  
android | Android微信  
ohos | HarmonyOS 手机端微信  
ohos_pc | HarmonyOS PC微信  
windows | Windows微信  
mac | macOS微信  
devtools | 微信开发者工具  
|  fontSizeSetting | number | 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准 | [1.5.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  SDKVersion | string | 客户端基础库版本 | [1.1.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  benchmarkLevel | number | 设备性能等级（仅 Android）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好）  
注意：性能等级当前仅反馈真机机型，暂不支持 IDE 模拟器机型 | [1.8.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  albumAuthorized | boolean | 允许微信使用相册的开关（仅 iOS 有效） | [2.6.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  cameraAuthorized | boolean | 允许微信使用摄像头的开关 | [2.6.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  locationAuthorized | boolean | 允许微信使用定位的开关 | [2.6.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  microphoneAuthorized | boolean | 允许微信使用麦克风的开关 | [2.6.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  notificationAuthorized | boolean | 允许微信通知的开关 | [2.6.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  notificationAlertAuthorized | boolean | 允许微信通知带有提醒的开关（仅 iOS 有效） | [2.6.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  notificationBadgeAuthorized | boolean | 允许微信通知带有标记的开关（仅 iOS 有效） | [2.6.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  notificationSoundAuthorized | boolean | 允许微信通知带有声音的开关（仅 iOS 有效） | [2.6.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  phoneCalendarAuthorized | boolean | 允许微信使用日历的开关 | [2.19.3](<../../../guide/runtime/client-lib/compatibility.md>)  
|  bluetoothEnabled | boolean | 蓝牙的系统开关 | [2.6.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  locationEnabled | boolean | 地理位置的系统开关 | [2.6.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  wifiEnabled | boolean | Wi-Fi 的系统开关 | [2.6.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  safeArea | Object | 在竖屏正方向下的安全区域。部分机型没有安全区域概念，也不会返回 safeArea 字段，开发者需自行兼容。 | [2.7.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  left | number | 安全区域左上角横坐标  
|  right | number | 安全区域右下角横坐标  
|  top | number | 安全区域左上角纵坐标  
|  bottom | number | 安全区域右下角纵坐标  
|  width | number | 安全区域的宽度，单位逻辑像素  
|  height | number | 安全区域的高度，单位逻辑像素  
  
|  locationReducedAccuracy | boolean | `true` 表示模糊定位，`false` 表示精确定位，仅 iOS 支持 |   
|  theme | string | 系统当前主题，取值为`light`或`dark`，全局配置`"darkmode":true`时才能获取，否则为 undefined （不支持小游戏） | [2.11.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  合法值 | 说明  
---|---  
dark | 深色主题  
light | 浅色主题  
|  host | Object | 当前小程序运行的宿主环境 | [2.12.3](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  appId | string | 宿主 app 对应的 appId  
  
|  enableDebug | boolean | 是否已打开调试。可通过右上角菜单或 [wx.setEnableDebug](<../debug/wx.setEnableDebug.md>) 打开调试。 | [2.15.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  deviceOrientation | string | 设备方向（注意：IOS客户端横屏游戏获取deviceOrientation可能不准，建议以屏幕宽高为准） |   
| |  合法值 | 说明  
---|---  
portrait | 竖屏  
landscape | 横屏  
  
## 示例代码

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/WkUCgXmS7mqO> "在开发者工具中预览效果")
    
    
    wx.getSystemInfoAsync({
      success (res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
