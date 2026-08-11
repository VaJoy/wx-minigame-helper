---
title: "wx.sendSocketMessage(Object object)"
type: api
category: api/network/websocket
api: "wx.sendSocketMessage"
source: https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.sendSocketMessage.html
---

# wx.sendSocketMessage(Object object)  
  
推荐使用 [SocketTask](<SocketTask.md>) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控，同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

通过 WebSocket 连接发送数据。需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
data | string/ArrayBuffer |  | 是 | 需要发送的内容  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 示例代码
    
    
    let socketOpen = false
    let socketMsgQueue = []
    wx.connectSocket({
      url: 'test.php'
    })
    
    wx.onSocketOpen(function(res) {
      socketOpen = true
      for (let i = 0; i < socketMsgQueue.length; i++){
        sendSocketMessage(socketMsgQueue[i])
      }
      socketMsgQueue = []
    })
    
    function sendSocketMessage(msg) {
      if (socketOpen) {
        wx.sendSocketMessage({
          data:msg
        })
      } else {
        socketMsgQueue.push(msg)
      }
    }
