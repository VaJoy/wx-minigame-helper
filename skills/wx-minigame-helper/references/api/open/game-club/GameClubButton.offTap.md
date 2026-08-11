---
title: "GameClubButton.offTap(function listener)"
type: api
category: api/open/game-club
api: "GameClubButton.offTap"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.offTap.html
---

# GameClubButton.offTap(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除游戏圈按钮的点击事件的监听函数

## 参数

### function listener

onTap 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    GameClubButton.onTap(listener)
    GameClubButton.offTap(listener) // 需传入与监听时同一个的函数对象
