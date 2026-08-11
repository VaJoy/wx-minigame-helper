---
title: "wx.reportPerformance(Number id, Number value, string|Array.<string> dimensions)"
type: api
category: api/base/performance
api: "wx.reportPerformance"
source: https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.reportPerformance.html
---

# wx.reportPerformance(Number id, Number value, string|Array.<string> dimensions)

> 基础库 2.10.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

小程序测速上报。使用前，需要在小程序管理后台配置。 详情参见[小程序测速](<https://developers.weixin.qq.com/miniprogram/dev/framework/performanceReport/>)指南。

## 参数

### Number id

指标 id

### Number value

需要上报的数值

### string|Array.<string> dimensions

自定义维度 (选填)

## 示例代码
    
    
    wx.reportPerformance(1101, 680)
    wx.reportPerformance(1101, 680, 'custom')
