---
title: "GameRecorderShareButton.offTap(function listener)"
type: api
category: api/game-recorder
api: "GameRecorderShareButton.offTap"
source: https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.offTap.html
---

# GameRecorderShareButton.offTap(function listener)

> 基础库 2.8.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除游戏对局回放分享按钮的点击事件的监听函数

## 参数

### function listener

onTap 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    GameRecorderShareButton.onTap(listener)
    GameRecorderShareButton.offTap(listener) // 需传入与监听时同一个的函数对象
