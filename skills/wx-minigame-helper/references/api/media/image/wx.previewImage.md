---
title: "wx.previewImage(Object object)"
type: api
category: api/media/image
api: "wx.previewImage"
source: https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.previewImage.html
---

# wx.previewImage(Object object)  
  
> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
urls | Array.<string> |  | 是 | 需要预览的图片链接列表。[2.2.3](<../../../guide/runtime/client-lib/compatibility.md>) 起支持云文件ID。 |   
showmenu | boolean | true | 否 | 是否显示长按菜单。 | [2.13.0](<../../../guide/runtime/client-lib/compatibility.md>)  
current | string | urls 的第一张 | 否 | 当前显示图片的链接 |   
referrerPolicy | string | no-referrer | 否 | `origin`: 发送完整的referrer; `no-referrer`: 不发送。格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本； | [2.13.0](<../../../guide/runtime/client-lib/compatibility.md>)  
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
## 支持长按识别的码

类型 | 说明 | 最低版本  
---|---|---  
小程序码 |  |   
微信个人码 |  | [2.18.0](<../../../guide/runtime/client-lib/compatibility.md>)  
企业微信个人码 |  | [2.18.0](<../../../guide/runtime/client-lib/compatibility.md>)  
普通群码 | 指仅包含微信用户的群 | [2.18.0](<../../../guide/runtime/client-lib/compatibility.md>)  
互通群码 | 指既有微信用户也有企业微信用户的群 | [2.18.0](<../../../guide/runtime/client-lib/compatibility.md>)  
公众号二维码 |  | [2.18.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
## 示例代码
    
    
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: [] // 需要预览的图片http链接列表
    })
