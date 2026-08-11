---
title: "wx.shareAppMessage(Object object)"
type: api
category: api/share
api: "wx.shareAppMessage"
source: https://developers.weixin.qq.com/minigame/dev/api/share/wx.shareAppMessage.html
---

# wx.shareAppMessage(Object object)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

主动拉起转发，进入选择通讯录界面。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
title | string |  | 否 | 转发标题，不传则默认使用当前小游戏的昵称。 |   
imageUrl | string |  | 否 | 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 |   
query | string |  | 否 | 查询字符串，从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。必须是 key1=val1&key2=val2 的格式。 |   
imageUrlId | string |  | 否 | 审核通过的图片编号，详见 [使用审核通过的转发图片](<../../guide/open-ability/share/share.md>) | [2.4.3](<../../guide/runtime/client-lib/compatibility.md>)  
toCurrentGroup | boolean | true | 否 | 是否转发到当前群。该参数只对从群工具栏打开的场景下生效，默认转发到当前群，填入false时可转发到其他会话。 | [2.12.2](<../../guide/runtime/client-lib/compatibility.md>)  
path | string |  | 否 | 独立分包路径。详见 [小游戏独立分包指南](<../../guide/base-ability/independent-sub-packages.md>) | [2.12.2](<../../guide/runtime/client-lib/compatibility.md>)  
  
## 注意事项

  * 转发图片说明：imageUrl，imageUrlId 都存在时，优先使用 imageUrl。 imageUrl，imageUrlId 都不填时使用游戏画面截图。
