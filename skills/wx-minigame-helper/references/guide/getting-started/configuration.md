---
title: "小游戏配置"
type: guide
category: guide/getting-started
source: https://developers.weixin.qq.com/minigame/dev/guide/configuration.html
---

# 小游戏配置

小游戏根目录下的 `game.json` 文件用来对小游戏进行配置。文件内容为一个 JSON 对象，有以下属性：

### 配置项

属性 | 类型 | 必填 | 默认值 | 描述 | 最低版本  
---|---|---|---|---|---  
deviceOrientation | String | 否 | 'portrait' | 屏幕选择方向 |   
desktopDeviceOrientation | String | 否 | - | 在 Windows、Mac 端的屏幕选择方向。如未填，则在 Windows、Mac 端取 deviceOrientation 的值 |   
showStatusBar | Boolean | 否 | false | 是否显示状态栏 |   
networkTimeout | Object | 否 | - | 网络请求的超时时间，单位：毫秒 |   
workers | String | 否 | - | 多线程 Worker 配置项，详细请参考 [Worker 文档](<https://developers.weixin.qq.com/minigame/dev/guide/base-ability/workers>) |   
subpackages | Object Array | 否 | - | 分包结构配置 |   
parallelPreloadSubpackages | Object Array | 否 | - | [并行下载能力](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-start-parallel-download>) |   
navigateToMiniProgramAppIdList | String Array | 否 | - | 需要跳转的小程序列表，详见 [wx.navigateToMiniProgram](<https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.navigateToMiniProgram.html>) | ['2.4.0'](<https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility>)  
permission | Object | 否 | - | 小游戏接口权限相关设置 | 微信客户端 7.0.0  
openDataContext | String | 否 | - | 小游戏开放数据域目录，详见 [关系链数据](<https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html>) |   
resizable | Boolean | 否 | false | 是否开启大屏支持。如果开启，在 PC 端用户可以固定比例拖动窗口大小，也可以将窗口置为全屏；在 iPad 上则开启屏幕旋转支持 |   
displayMode | String | 否 | - | 设置初始化分辨率，是否可拉伸 |   
disableSetUserStorageFromMiniProgram | Boolean | 否 | false | 是否禁止开放数据域接口 `wx.setUserCloudStorage` 写入托管数据，设置为 true 之后，只能通过后台接口写用户托管数据 |   
lockStepOptions | Object | 否 |  | [帧同步游戏服务](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/lock-step>) 配置对象 |   
lockStepOptions.gameTick | Number | 否 | 33 | 游戏帧下发周期，单位 ms | ['2.8.0'](<https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility>)  
lockStepOptions.heartBeatTick | Number | 否 | 2000 | 帧同步心跳周期，单位 ms | ['2.8.0'](<https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility>)  
lockStepOptions.offlineTimeLength | Number | 否 | 100000 | 帧同步心跳超时时长，单位 ms | ['2.8.0'](<https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility>)  
lockStepOptions.UDPReliabilityStrategy | Number | 否 | 3 | 帧冗余策略，表示每次下发帧时总共下发的帧数量 | ['2.8.0'](<https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility>)  
lockStepOptions.dataType | String | 否 | "String" | actionList 的数据类型，有效值："String" 字符串；"ArrayBuffer" 二进制数据 | ['2.8.0'](<https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility>)  
iOSHighPerformance | Boolean | 否 | false | 是否开启 iOS 高性能模式。需要在 MP 后台开通后才可用，详情[高性能模式](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-high-performance>) |   
iOSHighPerformance+ | Boolean | 否 | false | 是否开启 iOS 高性能+模式。需要同时开启高性能模式，详情[高性能模式](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-high-performance-plus>) |   
plugins | Object | 否 | - | 小游戏插件，[插件介绍](<https://developers.weixin.qq.com/minigame/dev/guide/base-ability/plugins>) |   
  
**deviceOrientation、desktopDeviceOrientation 的合法值**

值 | 说明 | 最低版本  
---|---|---  
portrait | 竖屏。不随用户手机的旋转而旋转。 |   
landscape | home 键在屏幕右侧的横屏。当用户的手机没有锁定屏幕方向时，横屏的方向会随着手机的旋转而旋转。 |   
landscapeLeft | home 键在屏幕左侧的横屏 | 微信客户端 7.0.0  
landscapeRight | home 键在屏幕右侧的横屏 | 微信客户端 7.0.0  
  
#### networkTimeout

各类网络请求的超时时间，单位均为毫秒。

属性 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
request | Number | 否 | 60000 | [wx.request](<https://developers.weixin.qq.com/minigame/dev/api/network/request/wx.request.html>) 的超时时间，单位：毫秒。  
connectSocket | Number | 否 | 60000 | [wx.connectSocket](<https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.connectSocket.html>) 的超时时间，单位：毫秒。  
uploadFile | Number | 否 | 60000 | [wx.uploadFile](<https://developers.weixin.qq.com/minigame/dev/api/network/upload/wx.uploadFile.html>) 的超时时间，单位：毫秒。  
downloadFile | Number | 否 | 60000 | [wx.downloadFile](<https://developers.weixin.qq.com/minigame/dev/api/network/download/wx.downloadFile.html>) 的超时时间，单位：毫秒。  
  
**displayMode 的合法值**

值 | 分辨率 | 是否可拉伸  
---|---|---  
mobile | 736x414 | 否  
pad | 1024x768 | 否  
desktop | 1024x768 | 是，且仅支持等比例拉伸  
  
#### workers

使用 [Worker](<https://developers.weixin.qq.com/minigame/dev/guide/base-ability/workers>) 处理多线程任务时，设置 `Worker` 代码放置的目录

#### subpackages

> 微信客户端 6.6.7 ，基础库 2.1.0 及以上版本支持

启用[分包加载](<https://developers.weixin.qq.com/minigame/dev/guide/base-ability/subPackage/useSubPackage>)时，声明项目分包结构。

> 写成 subPackages 也支持。

#### permission

> 微信客户端 7.0.0 及以上版本支持

小游戏[接口权限](<https://developers.weixin.qq.com/minigame/dev/guide/base-ability/authorize>)相关设置。字段类型为 `Object`，结构为：

属性 | 类型 | 必填 | 默认值 | 描述  
---|---|---|---|---  
scope.userFuzzyLocation | PermissionObject | 否 |  | 模糊地理位置相关权限声明  
  
**PermissionObject 结构**

属性 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
desc | string | 是 |  | 小程序获取权限时展示的接口用途说明。最长30个字符  
  
如：
    
    
    {
      "permission": {
        "scope.userFuzzyLocation": {
          "desc":"你的位置信息将用于小游戏位置接口的效果展示"
        }
      }
    }
    

![permission-desc](https://res8.wxqcloud.qq.com.cn/wxdoc/dad876a7-d277-4511-8829-39498c66269f.jpeg)

### 配置示例
    
    
    {
      "deviceOrientation": "portrait",
      "networkTimeout": {
        "request": 5000,
        "connectSocket": 5000,
        "uploadFile": 5000,
        "downloadFile": 5000
      },
      "navigateToMiniProgramAppIdList": [
        "wxe5f52902cf4de896"
      ]
    }
