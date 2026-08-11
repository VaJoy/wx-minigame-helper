---
title: "Object wx.getMenuButtonBoundingClientRect()"
type: api
category: api/ui/menu
api: "wx.getMenuButtonBoundingClientRect"
source: https://developers.weixin.qq.com/minigame/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html
---

# Object wx.getMenuButtonBoundingClientRect()

> 基础库 2.1.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。

## 返回值

### Object

菜单按钮的布局位置信息

属性 | 类型 | 说明  
---|---|---  
width | number | 宽度，单位：px  
height | number | 高度，单位：px  
top | number | 上边界坐标，单位：px  
right | number | 右边界坐标，单位：px  
bottom | number | 下边界坐标，单位：px  
left | number | 左边界坐标，单位：px  
  
## 示例代码
    
    
    const res = wx.getMenuButtonBoundingClientRect()
    
    console.log(res.width)
    console.log(res.height)
    console.log(res.top)
    console.log(res.right)
    console.log(res.bottom)
    console.log(res.left)
