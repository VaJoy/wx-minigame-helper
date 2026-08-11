---
title: "boolean wx.setCursor(string path, number x, number y)"
type: api
category: api/render/cursor
api: "wx.setCursor"
source: https://developers.weixin.qq.com/minigame/dev/api/render/cursor/wx.setCursor.html
---

# boolean wx.setCursor(string path, number x, number y)

> 基础库 2.10.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

加载自定义光标，仅支持 PC 平台

## 参数

### string path

代码包或本地路径，支持 ico 和 cur 格式，传入 'default' 代表恢复系统默认

### number x

> 基础库 2.19.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

横向偏移量

### number y

> 基础库 2.19.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

纵向偏移量

## 返回值

### boolean

是否加载成功

## 注意

  * 传入图片太大可能会导致设置无效，推荐图标大小 32x32
  * 基础库 v2.16.0 后，支持更多图片格式以及关键字种类（参考 CSS 标准）
