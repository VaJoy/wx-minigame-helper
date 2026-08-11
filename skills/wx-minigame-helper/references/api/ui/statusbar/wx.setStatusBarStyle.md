---
title: "wx.setStatusBarStyle(Object object)"
type: api
category: api/ui/statusbar
api: "wx.setStatusBarStyle"
source: https://developers.weixin.qq.com/minigame/dev/api/ui/statusbar/wx.setStatusBarStyle.html
---

# wx.setStatusBarStyle(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

当在配置中设置 showStatusBar 时，屏幕顶部会显示状态栏。此接口可以修改状态栏的样式。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  style | string |  | 是 | 样式风格  
| |  合法值 | 说明  
---|---  
white | 白色  
black | 浅色  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）
