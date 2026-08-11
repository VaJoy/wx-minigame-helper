---
title: "MiniReportManager"
type: api
category: api/data-analysis
api: "MiniReportManager"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/MiniReportManager.html
---

# MiniReportManager

MiniReportManager 类用于管理小游戏日志。可以通过 [wx.getMiniReportManager](<wx.getMiniReportManager.md>) 获取。

## 方法

### [MiniReportManager.report(Object param)](<MiniReportManager.report.md>)

上报关卡日志。report 方法支持在上报时传入关卡事件 ID、关卡 ID、关卡名称、关卡行为、关卡结果、关卡耗时、关卡道具、关卡广告、关卡分享。可设置上报后的回调函数。

## 使用说明

  1. 关卡日志：用于记录关卡相关的信息，如关卡ID、关卡名称、关卡行为、关卡结果、关卡耗时、关卡道具、关卡广告、关卡分享等。
