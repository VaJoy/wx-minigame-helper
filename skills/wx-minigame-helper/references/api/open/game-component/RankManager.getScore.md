---
title: "RankManager.getScore(Object params)"
type: api
category: api/open/game-component
api: "RankManager.getScore"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/game-component/RankManager.getScore.html
---

# RankManager.getScore(Object params)

> 基础库 3.14.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持

## 功能描述

查询当前用户得分数据。

## 参数

### Object params

入参对象

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
scoreKeys | Array.<string> |  | 是 | 玩法唯一标识数组  
subScoreKeys | Array.<number> |  | 否 | 可选子 key 数组，从基础库版本3.12.1开始支持  
periodType | number |  | 是 | 查询的周期：1：自然日最高分；2：自然周最高分；3：自然月最高分；4：历史最高分；5 最新得分  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 示例代码
    
    
    const rankManager = wx.getRankManager()
    rankManager.getScore({
      scoreKeys: ['level_1', 'level_2'],
      periodType: 1, // 自然日最高分
      success: (res) => {
        console.log('分数信息', res.scores)
        // res.scores 格式: { 'level_1': { score: 100, timestamp: 1234567890 } }
      }
    })
    

注意事项：

  * subScoreKey 参数从基础库版本3.12.1开始支持
