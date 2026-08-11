---
title: "OpenSettingButton.offTap(function listener)"
type: api
category: api/open/setting
api: "OpenSettingButton.offTap"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.offTap.html
---

# OpenSettingButton.offTap(function listener)

## 功能描述

移除设置页面按钮的点击事件的监听函数

## 参数

### function listener

onTap 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    OpenSettingButton.onTap(listener)
    OpenSettingButton.offTap(listener) // 需传入与监听时同一个的函数对象
