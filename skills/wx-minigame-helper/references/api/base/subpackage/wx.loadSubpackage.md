---
title: "LoadSubpackageTask wx.loadSubpackage(Object object)"
type: api
category: api/base/subpackage
api: "wx.loadSubpackage"
source: https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/wx.loadSubpackage.html
---

# [LoadSubpackageTask](<LoadSubpackageTask.md>) wx.loadSubpackage(Object object)

> 基础库 2.1.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

触发分包加载，详见 [分包加载](<../../../guide/base-ability/subpackage/useSubPackage.md>)

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
name | string |  | 是 | 分包的名字，可以填 name 或者 root。在独立分包内，填 __GAME__ 表示加载主包，详见 [小游戏独立分包指南](<../../../guide/base-ability/independent-sub-packages.md>)  
success | function |  | 是 | 分包加载成功回调事件  
fail | function |  | 是 | 分包加载失败回调事件  
complete | function |  | 是 | 分包加载结束回调事件(加载成功、失败都会执行）  
  
## 返回值

### [LoadSubpackageTask](<LoadSubpackageTask.md>)

加载分包任务实例，用于获取分包加载状态

## 注意事项

  * wx.preDownloadSubpackage 与 wx.loadSubpackage 的区别： wx.preDownloadSubpackage 只下载代码包，不自动执行代码；wx.loadSubpackage 下载完代码包后会自动执行代码。
