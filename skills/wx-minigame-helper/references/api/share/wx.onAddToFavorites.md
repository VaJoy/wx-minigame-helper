---
title: "wx.onAddToFavorites(function listener)"
type: api
category: api/share
api: "wx.onAddToFavorites"
source: https://developers.weixin.qq.com/minigame/dev/api/share/wx.onAddToFavorites.html
---

# wx.onAddToFavorites(function listener)

> 基础库 2.10.3 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听用户点击菜单「收藏」按钮时触发的事件

## 参数

### function listener

用户点击菜单「收藏」按钮时触发的事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
title | string | 收藏标题，不传则默认使用当前小游戏的昵称。  
query | string | 查询字符串，必须是 key1=val1&key2=val2 的格式。从收藏进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。  
imageUrl | string | 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4  
disableForward | boolean | 禁止收藏后长按转发，默认 false  
  
## 示例代码
    
    
      wx.onAddToFavorites(() => {
        return {
          title: '收藏标题',
          imageUrl: '' // 图片 URL
        }
      })
