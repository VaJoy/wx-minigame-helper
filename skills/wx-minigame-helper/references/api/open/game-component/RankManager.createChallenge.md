---
title: "RankManager.createChallenge(Object params)"
type: api
category: api/open/game-component
api: "RankManager.createChallenge"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/game-component/RankManager.createChallenge.html
---

# RankManager.createChallenge(Object params)

> 基础库 3.14.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持

## 功能描述

创建擂台赛，唤起擂台赛起始页。

## 参数

### Object params

入参对象

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
scoreKey | string |  | 是 | 玩法唯一标识，用于区分不同的擂台赛玩法。可以在 MP后台-运营功能管理-基础配置-游戏玩法ID 中配置  
subScoreKey | number |  | 否 | 可选子 key，正整数，取值范围1-1000。该参数可用于游戏同一玩法的关卡区分，从基础库版本3.12.1开始支持  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 示例代码
    
    
    const rankManager = wx.getRankManager()
    rankManager.createChallenge({
      scoreKey: 'gameplayone', // 在 MP后台-运营功能管理-基础配置-游戏玩法ID 中配置
      success: () => {
        console.log('擂台赛创建成功')
      }
    })
    

注意事项：

  * subScoreKey 参数从基础库版本3.12.1开始支持
