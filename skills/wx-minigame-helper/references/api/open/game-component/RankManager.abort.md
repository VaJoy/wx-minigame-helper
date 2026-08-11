---
title: "RankManager.abort(Object params)"
type: api
category: api/open/game-component
api: "RankManager.abort"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/game-component/RankManager.abort.html
---

# RankManager.abort(Object params)

> 基础库 3.14.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持

## 功能描述

中途退出擂台赛。若擂台赛进行中则关闭所有相关组件。

## 参数

### Object params

入参对象（可选）

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 示例代码
    
    
    const rankManager = wx.getRankManager()
    rankManager.abort({
      success: () => {
        console.log('已退出游戏')
      }
    })
