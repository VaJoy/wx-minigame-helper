---
title: "wx.reportMonitor(string name, number value)"
type: api
category: api/data-analysis
api: "wx.reportMonitor"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.reportMonitor.html
---

# wx.reportMonitor(string name, number value)

从基础库 [2.31.1](<../../guide/runtime/client-lib/compatibility.md>) 开始，本接口停止维护，请使用 [wx.reportEvent](<wx.reportEvent.md>) 代替

> 基础库 2.1.2 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

自定义业务数据监控上报接口。

## 参数

### string name

监控ID，在「小程序管理后台」新建数据指标后获得

### number value

上报数值，经处理后会在「小程序管理后台」上展示每分钟的上报总量

## 使用说明

使用前，需要在「小程序管理后台-运维中心-性能监控-业务数据监控」中新建监控事件，配置监控描述与告警类型。每一个监控事件对应唯一的监控ID，开发者最多可以创建128个监控事件。

## 示例代码
    
    
    wx.reportMonitor('1', 1)
