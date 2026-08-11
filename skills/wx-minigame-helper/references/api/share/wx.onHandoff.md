---
title: "wx.onHandoff(function listener)"
type: api
category: api/share
api: "wx.onHandoff"
source: https://developers.weixin.qq.com/minigame/dev/api/share/wx.onHandoff.html
---

# wx.onHandoff(function listener)

> 基础库 2.14.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听用户点击菜单「在电脑上打开」按钮时触发的事件

## 参数

### function listener

用户点击菜单「在电脑上打开」按钮时触发的事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
query | string | 需要传递给接力客户端的 query  
  
## 示例代码
    
    
      wx.onHandoff(function() {
        return {
          query: 'key1=value2&key2=value2'
        }
      })
