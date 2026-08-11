---
title: "wx.onDirectAdStatusChange(function listener)"
type: api
category: api/ad
api: "wx.onDirectAdStatusChange"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/wx.onDirectAdStatusChange.html
---

# wx.onDirectAdStatusChange(function listener)

> 基础库 3.11.2 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听监听直玩广告状态变化

## 参数

### function listener

的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
isInMask | boolean | 当前是否处于蒙层阶段  
isInDirectGameAd | boolean | 当前是否处于直接广告中  
isEndByAbnormal | boolean | 当前直玩广告是否由于异常流程而结束（如 下拉/搜索 进入正在直玩广告流程中的游戏）  
  
## 示例代码
    
    
    wx.onDirectAdStatusChange(res => {
      // 会有如下的几种状态值组合
      // a) { isInMask: true, isInDirectGameAd: true } -> 表示当前正在直玩广告 且 未戳破蒙层
      // b) { isInMask: false, isInDirectGameAd: true } -> 表示当前正在直玩广告 且 戳破了蒙层
      // c) { isInMask: false, isInDirectGameAd: false, isEndByAbnormal: false }, -> 表示倒计时结束了，并且选择了继续玩
      // d) { isInMask: false, isInDirectGameAd: false, isEndByAbnormal: true }, -> 表示由于异常流程而结束
      console.log(res.isInMask)
      console.log(res.isInDirectGameAd)
      console.log(res.isEndByAbnormal)
    })
