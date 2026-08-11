---
title: "wx.offShareAppMessage(function listener)"
type: api
category: api/share
api: "wx.offShareAppMessage"
source: https://developers.weixin.qq.com/minigame/dev/api/share/wx.offShareAppMessage.html
---

# wx.offShareAppMessage(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除用户点击右上角菜单的「转发」按钮时触发的事件的监听函数

## 参数

### function listener

onShareAppMessage 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
      wx.onShareAppMessage(() => {
        return {
          title: '转发标题',
          imageUrl: '' // 图片 URL
        }
      })
    
    

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onShareAppMessage(listener)
    wx.offShareAppMessage(listener) // 需传入与监听时同一个的函数对象
