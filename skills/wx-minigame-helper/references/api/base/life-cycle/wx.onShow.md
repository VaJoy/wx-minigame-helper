---
title: "wx.onShow(function listener)"
type: api
category: api/base/life-cycle
api: "wx.onShow"
source: https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onShow.html
---

# wx.onShow(function listener)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听小游戏回到前台的事件

## 参数

### function listener

小游戏回到前台的事件的监听函数

#### 参数

##### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  scene | number | 场景值  
|  query | Record.<string, string> | 查询参数  
|  shareTicket | string | shareTicket  
|  referrerInfo | object | 当场景为由从另一个小程序或公众号或App打开时，返回此字段  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  appId | string | 来源小程序或公众号或App的 appId  
|  extraData | object | 来源小程序传过来的数据，scene=1037或1038时支持  
  
|  chatType | number | 从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型  
| |  合法值 | 说明  
---|---  
1 | 微信联系人单聊  
2 | 企业微信联系人单聊  
3 | 普通微信群聊  
4 | 企业微信互通群聊
