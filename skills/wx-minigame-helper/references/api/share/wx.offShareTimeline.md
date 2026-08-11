---
title: "wx.offShareTimeline(function listener)"
type: api
category: api/share
api: "wx.offShareTimeline"
source: https://developers.weixin.qq.com/minigame/dev/api/share/wx.offShareTimeline.html
---

# wx.offShareTimeline(function listener)

> 基础库 2.11.3 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件的监听函数

## 参数

### function listener

onShareTimeline 传入的监听函数。不传此参数则移除所有监听函数。

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
    
    

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onShareTimeline(listener)
    wx.offShareTimeline(listener) // 需传入与监听时同一个的函数对象
