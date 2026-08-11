---
title: "RankManager.offChallengeStart(function callback)"
type: api
category: api/open/game-component
api: "RankManager.offChallengeStart"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/game-component/RankManager.offChallengeStart.html
---

# RankManager.offChallengeStart(function callback)

> 基础库 3.14.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

取消监听擂台赛开始事件。

## 参数

### function callback

回调函数，不传则取消所有监听

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
scoreKey | string | 玩法唯一标识  
subScoreKey | number | 可选子 key  
  
## 示例代码
    
    
    const rankManager = wx.getRankManager()
    const handleChallengeStart = (res) => {
      console.log('擂台赛开始', res.scoreKey)
    }
    rankManager.onChallengeStart(handleChallengeStart)
    // 取消监听
    rankManager.offChallengeStart(handleChallengeStart)
