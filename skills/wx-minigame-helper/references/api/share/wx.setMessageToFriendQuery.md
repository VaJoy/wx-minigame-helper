---
title: "boolean wx.setMessageToFriendQuery(Object object)"
type: api
category: api/share
api: "wx.setMessageToFriendQuery"
source: https://developers.weixin.qq.com/minigame/dev/api/share/wx.setMessageToFriendQuery.html
---

# boolean wx.setMessageToFriendQuery(Object object)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

设置 wx.shareMessageToFriend 接口 query 字段的值

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
shareMessageToFriendScene | number |  | 是 | 需要传递的代表场景的数字，需要在 0 - 50 之间  
query | string |  | 是 | 需要传递的字符串数据，长度需要在 128 之内  
  
## 返回值

### boolean

是否设置成功

## 提示

  1. 此处的 query 参数与 wx.onShow 取到的启动查询参数 query 不是同一个概念，仅仅是启动查询参数会增加一个字段为 query。
  2. query 参数如涉及 "?"和"&" 等特殊符号，需自行进行 encodeURIComponent 和 decodeURIComponent 等操作。

## 示例代码
    
    
    // 发送方
    wx.setMessageToFriendQuery({
     shareMessageToFriendScene: 1,
     query: 'testquery'
    })
    // 预期接收方可以通过以下方式拿到设置
    wx.getEnterOptionsSync().query.shareMessageToFriendScene // 1
    wx.getEnterOptionsSync().query.query // 'testquery'
    

## 示例代码-特殊字符query
    
    
    // 发送方
    wx.setMessageToFriendQuery({
     query: encodeURIComponent('foo=1&bar=2') // 如果 query 涉及特殊符号，需要自行 encodeURIComponent
    })
    
    // 接收方
    // 预期可以通过以下方式拿到设置
    wx.getEnterOptionsSync().query.query // 此处拿到的是 'foo%3D1%26bar%3D2'，需要 decodeURIComponent
    decodeURIComponent(wx.getEnterOptionsSync().query.query) // 'foo=1&bar=2'
