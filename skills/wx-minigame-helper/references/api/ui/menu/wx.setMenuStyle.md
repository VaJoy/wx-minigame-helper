---
title: "wx.setMenuStyle(Object object)"
type: api
category: api/ui/menu
api: "wx.setMenuStyle"
source: https://developers.weixin.qq.com/minigame/dev/api/ui/menu/wx.setMenuStyle.html
---

# wx.setMenuStyle(Object object)  
  
> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

动态设置通过右上角按钮拉起的菜单的样式。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  style | string |  | 是 | 样式风格  
| |  合法值 | 说明  
---|---  
light | 浅色  
dark | 深色  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）
