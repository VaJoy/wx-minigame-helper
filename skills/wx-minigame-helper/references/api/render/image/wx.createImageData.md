---
title: "ImageData wx.createImageData(number width, number height, Uint8ClampedArray data)"
type: api
category: api/render/image
api: "wx.createImageData"
source: https://developers.weixin.qq.com/minigame/dev/api/render/image/wx.createImageData.html
---

# [ImageData](<ImageData.md>) wx.createImageData(number width, number height, Uint8ClampedArray data)

> 基础库 3.4.10 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

这里有两种使用方法, 一种是指定ImageData的宽和高, 另外一种使用已有的ImageData的图像二进制数据，来构建新的对象。

## 参数

### number width

使用像素描述 ImageData 的实际宽度

### number height

使用像素描述 ImageData 的实际高度

### Uint8ClampedArray data

一维数组，包含以 RGBA 顺序的数据，数据使用 0 至 255（包含）的整数表示

## 返回值

### [ImageData](<ImageData.md>)

图片数据对象

## 示例代码
    
    
    const imageData1 = wx.createImageData(100, 100)
    const imageData2 = wx.createImageData(imageData1.data, 100, 100)
