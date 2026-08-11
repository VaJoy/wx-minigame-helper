---
title: "wx.requestFacialVerify(Object object)"
type: api
category: api/open/face
api: "wx.requestFacialVerify"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/face/wx.requestFacialVerify.html
---

# wx.requestFacialVerify(Object object)  
  
> 基础库 3.8.12 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

对用户实名信息进行基于生物识别的人脸核身验证

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
verifyId | string |  | 是 | 人脸核身会话唯一标识（小程序后台根据「用户实名信息（姓名+身份证）」调用微信后台[getVerifyId](<https://developers.weixin.qq.com/miniprogram/dev/server/API/face/api_getverifyid.html>)接口获取）  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 错误

错误码 | 错误信息 | 说明  
---|---|---  
0 | 人脸识别完成（需要通过[queryVerifyInfo](<https://developers.weixin.qq.com/miniprogram/dev/server/API/face/api_queryverifyinfo.html>)接口查询人脸核身真实验证结果） |   
  
## 示例代码
    
    
    wx.requestFacialVerify({
      // 人脸核身会话唯一标识
      verifyId: 'xxx',
      success() {
        // 人脸核身验证成功，需要通知小程序后台根据本次人脸核身会话唯一标识 verifyId 字段调用微信后台 queryVerifyInfo 接口查询人脸核身真实验证结果。
      },
      fail() {
        // 人脸核身验证失败
      },
    })
