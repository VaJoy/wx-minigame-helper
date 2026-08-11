---
title: "RankManager.onChallengeStart(function callback)"
type: api
category: api/open/game-component
api: "RankManager.onChallengeStart"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/game-component/RankManager.onChallengeStart.html
---

# RankManager.onChallengeStart(function callback)

> 基础库 3.14.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听擂台赛开始事件。由擂台赛卡片进入后，用户点击擂台赛页上的“立即挑战”时触发。

## 参数

### function callback

回调函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
scoreKey | string | 玩法唯一标识  
subScoreKey | number | 可选子 key  
  
## 示例代码
    
    
    const rankManager = wx.getRankManager()
    rankManager.onChallengeStart((res) => {
      console.log('擂台赛开始', res.scoreKey)
      if (res.subScoreKey) {
        console.log('关卡数', res.subScoreKey)
      }
      // 开始游戏逻辑
    })
    

注意事项：

  * 应尽早监听 onChallengeStart，推荐在游戏初始化或 onLaunch 生命周期里监听。由于用户点击“立即挑战”事件会等到onChallengeStart成功注册后再派发，过晚监听可能出现用户点了立即挑战，游戏没有及时开始擂台赛的情况。
  * subScoreKey 参数从基础库版本3.12.1开始支持
