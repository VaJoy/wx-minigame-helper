---
title: "wx.shareMessageToFriend(Object object)"
type: api
category: api/open/data
api: "wx.shareMessageToFriend"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.shareMessageToFriend.html
---

# wx.shareMessageToFriend(Object object)

> 基础库 2.9.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持

## 功能描述

给指定的好友分享游戏信息，该接口只可在开放数据域下使用。接收者打开之后，可以用 `wx.modifyFriendInteractiveStorage` 传入参数 quiet=true 发起一次无需弹框确认的好友互动。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
openId | string |  | 是 | 发送对象的 openId  
title | string |  | 否 | 转发标题，不传则默认使用当前小游戏的昵称。  
imageUrl | string |  | 否 | 转发显示图片的链接，可使用本地图片文件路径或相对代码包根目录的图片文件路径，不可使用网络图片。如需使用网络图片，可先在游戏域调用 wx.downloadFile 下载到本地后，调用 OpenDataContext.postMessage 发送本地图片路径到开放数据域使用。显示图片长宽比是 5:4  
imageUrlId | string |  | 否 | 审核通过的图片编号，详见 [使用审核通过的转发图片](<../../../guide/open-ability/share/share.md>)  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 注意事项

  * 定向分享不允许直接在开放数据域设置 query 参数
  * 需要设置请参见游戏域 `wx.setMessageToFriendQuery` 接口
  * 转发图片说明：仅当自定义分享图片权限被封禁时用 imageUrlId，其他情况都会用 imageUrl。 imageUrl 不填或错填网络图片时使用游戏画面截图。
