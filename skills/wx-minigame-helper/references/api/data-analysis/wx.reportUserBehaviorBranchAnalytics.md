---
title: "wx.reportUserBehaviorBranchAnalytics(Object object)"
type: api
category: api/data-analysis
api: "wx.reportUserBehaviorBranchAnalytics"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.reportUserBehaviorBranchAnalytics.html
---

# wx.reportUserBehaviorBranchAnalytics(Object object)  
  
> 基础库 2.12.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

上报场景分析，用于UI组件（一般是按钮）相关事件的上报，事件目前有曝光、点击两种，查看[相关文档](<https://developers.weixin.qq.com/minigame/analysis/selfanalysis.html>)

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
branchId | string |  | 是 | 分支ID，在「小程序管理后台」获取  
branchDim | string |  | 否 | 自定义维度，基础库 v2.14.0 开始支持可选  
eventType | number |  | 是 | 事件类型，1：曝光； 2：点击
