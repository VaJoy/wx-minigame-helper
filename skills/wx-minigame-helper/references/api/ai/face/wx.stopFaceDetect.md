---
title: "wx.stopFaceDetect(Object object)"
type: api
category: api/ai/face
api: "wx.stopFaceDetect"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/face/wx.stopFaceDetect.html
---

# wx.stopFaceDetect(Object object)

该接口已停止维护，推荐使用 [wx.createVKSession](<../visionkit/wx.createVKSession.md>) 代替

> 基础库 2.18.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持

## 功能描述

停止人脸检测。本接口不再维护，请使用 [wx.createVKSession](<../visionkit/wx.createVKSession.md>) 接口代替。详情参考[人脸检测指南文档](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/face.html>)

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）
