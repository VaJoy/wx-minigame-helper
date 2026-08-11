---
title: "wx.previewMedia(Object object)"
type: api
category: api/media/image
api: "wx.previewMedia"
source: https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.previewMedia.html
---

# wx.previewMedia(Object object)

> 基础库 2.12.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

预览图片和视频。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  sources | Array.<Object> |  | 是 | 需要预览的资源列表 |   
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  url | String |  | 是 | 图片或视频的地址  
|  type | String | image | 否 | 资源的类型，默认为图片  
| |  合法值 | 说明  
---|---  
image | 图片  
video | 视频  
|  poster | string |  | 否 | 视频的封面图片  
  
|  current | number | 0 | 否 | 当前显示的资源序号 |   
|  showmenu | boolean | true | 否 | 是否显示长按菜单。 | [2.13.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  referrerPolicy | string | no-referrer | 否 | `origin`: 发送完整的referrer; `no-referrer`: 不发送。格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本； | [2.13.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  success | function |  | 否 | 接口调用成功的回调函数 |   
|  fail | function |  | 否 | 接口调用失败的回调函数 |   
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
## 支持长按识别的码

类型 | 说明 | 最低版本  
---|---|---  
小程序码 |  |   
微信个人码 | 不支持小游戏 | [2.18.0](<../../../guide/runtime/client-lib/compatibility.md>)  
企业微信个人码 | 不支持小游戏 | [2.18.0](<../../../guide/runtime/client-lib/compatibility.md>)  
普通群码 | 指仅包含微信用户的群，不支持小游戏 | [2.18.0](<../../../guide/runtime/client-lib/compatibility.md>)  
互通群码 | 指既有微信用户也有企业微信用户的群，不支持小游戏 | [2.18.0](<../../../guide/runtime/client-lib/compatibility.md>)  
公众号二维码 | 不支持小游戏 | [2.18.0](<../../../guide/runtime/client-lib/compatibility.md>)
