---
title: "wx.onShareTimeline(function listener)"
type: api
category: api/share
api: "wx.onShareTimeline"
source: https://developers.weixin.qq.com/minigame/dev/api/share/wx.onShareTimeline.html
---

# wx.onShareTimeline(function listener)  
  
> 基础库 2.11.3 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件。本接口为 Beta 版本，暂只在 Android 平台支持。

## 参数

### function listener

用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
title | string | 转发标题，不传则默认使用当前小游戏的昵称。 |   
imageUrl | string | 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。（该图片用于分享到朋友圈的卡片以及从朋友圈转发到会话消息的卡片展示） |   
imageUrlId | string | 审核通过的图片编号，详见 [使用审核通过的转发图片](<../../guide/open-ability/share/share.md>) |   
imagePreviewUrl | string | 朋友圈预览图链接，不传则默认使用当前游戏画面截图 | [2.14.3](<../../guide/runtime/client-lib/compatibility.md>)  
imagePreviewUrlId | string | 审核通过的朋友圈预览图图片编号，详见 [使用审核通过的转发图片](<../../guide/open-ability/share/share.md>) | [2.14.3](<../../guide/runtime/client-lib/compatibility.md>)  
query | string | 查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。不传则默认使用当前页面query。 |   
path | string | 独立分包路径。详见 [小游戏独立分包指南](<../../guide/base-ability/independent-sub-packages.md>) | [2.12.2](<../../guide/runtime/client-lib/compatibility.md>)  
  
## 示例代码
    
    
      // 绑定分享参数
      wx.onShareTimeline(() => {
        return {
          title: '转发标题',
          imageUrl: '', // 图片 URL
          query: 'a=1&b=2'
        }
      })
      // 取消绑定分享参数
      wx.offShareTimeline()
    
    

## 注意事项

  * 转发图片说明：imageUrl，imageUrlId 都存在时，优先使用 imageUrl。 imageUrl，imageUrlId 都不填时使用当前游戏的icon。
