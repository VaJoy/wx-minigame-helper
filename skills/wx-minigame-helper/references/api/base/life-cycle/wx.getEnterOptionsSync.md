---
title: "Object wx.getEnterOptionsSync()"
type: api
category: api/base/life-cycle
api: "wx.getEnterOptionsSync"
source: https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.getEnterOptionsSync.html
---

# Object wx.getEnterOptionsSync()

> 基础库 2.13.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取小游戏打开的参数（包括冷启动和热启动）

## 返回值

### Object

启动参数

| 属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  scene | number | 启动小游戏的[场景值](<https://developers.weixin.qq.com/minigame/dev/guide/base-ability/scene.html>) |   
|  query | Record.<string, string> | 启动小游戏的 query 参数 |   
|  shareTicket | string | shareTicket，详见[获取更多转发信息](<../../../guide/open-ability/share/share.md>) |   
|  referrerInfo | object | 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) |   
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  appId | string | 来源小程序、公众号或 App 的 appId  
|  extraData | object | 来源小程序传过来的数据，scene=1037或1038时支持  
  
|  chatType | number | 从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型 |   
| |  合法值 | 说明  
---|---  
1 | 微信联系人单聊  
2 | 企业微信联系人单聊  
3 | 普通微信群聊  
4 | 企业微信互通群聊  
|  apiCategory | string | API 类别 | [2.20.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  合法值 | 说明  
---|---  
default | 默认类别  
nativeFunctionalized | 原生功能化，视频号直播商品、商品橱窗等场景打开的小程序  
browseOnly | 仅浏览，朋友圈快照页等场景打开的小程序  
embedded | 内嵌，通过打开半屏小程序能力打开的小程序  
  
## 返回有效 referrerInfo 的场景

场景值 | 场景 | appId含义  
---|---|---  
1020 | 公众号 profile 页相关小程序列表 | 来源公众号  
1035 | 公众号自定义菜单 | 来源公众号  
1036 | App 分享消息卡片 | 来源App  
1037 | 小程序打开小程序 | 来源小程序  
1038 | 从另一个小程序返回 | 来源小程序  
1043 | 公众号模板消息 | 来源公众号  
  
## 不同 apiCategory 场景下的 API 限制

`X` 表示 API 被限制无法使用；不在表格中的 API 不限制。

| default | nativeFunctionalized | browseOnly | embedded  
---|---|---|---|---  
navigateToMiniProgram |  | `X` | `X` |   
openSetting |  |  | `X` |   
<button open-type="share"> |  | `X` | `X` | `X`  
<button open-type="feedback"> |  |  | `X` |   
<button open-type="open-setting"> |  |  | `X` |   
openEmbeddedMiniProgram |  | `X` | `X` | `X`  
  
## 注意

部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。
