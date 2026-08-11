---
title: "GridAd.onError(function listener)"
type: api
category: api/ad
api: "GridAd.onError"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.onError.html
---

# GridAd.onError(function listener)

从基础库 [2.30.2](<../../guide/runtime/client-lib/compatibility.md>) 开始，本接口停止维护

## 功能描述

监听 grid(格子) 广告错误事件。

## 参数

### function listener

grid(格子) 广告错误事件的监听函数

#### 参数

##### Object res

| 属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  errMsg | string | 错误信息 |   
|  errCode | number | 错误码 | [2.2.2](<../../guide/runtime/client-lib/compatibility.md>)  
| |  合法值 | 说明  
---|---  
1000 | 后端接口调用失败  
1001 | 参数错误  
1002 | 广告单元无效  
1003 | 内部错误  
1004 | 无合适的广告  
1005 | 广告组件审核中  
1006 | 广告组件被驳回  
1007 | 广告组件被封禁  
1008 | 广告单元已关闭  
  
## 错误码信息与解决方案表

错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。可以针对异常返回加上适当的监控信息辅助排查现网情况。

代码 | 异常情况 | 理由 | 解决方案  
---|---|---|---  
1000 | 后端错误调用失败 | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。  
1001 | 参数错误 | 使用方法错误 | 可以前往developers.weixin.qq.com确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。  
1002 | 广告单元无效 | 可能是拼写错误、或者误用了其他APP的广告ID | 请重新前往mp.weixin.qq.com确认广告位ID。  
1003 | 内部错误 | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。  
1004 | 无适合的广告 | 广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告 | 属于正常情况，且开发者需要针对这种情况做形态上的兼容。  
1005 | 广告组件审核中 | 你的广告正在被审核，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。  
1006 | 广告组件被驳回 | 你的广告审核失败，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。  
1007 | 广告组件被封禁 | 你的广告能力已经被封禁，封禁期间无法展现广告 | 请前往mp.weixin.qq.com确认小程序广告封禁状态。  
1008 | 广告单元已关闭 | 该广告位的广告能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应广告位的展现。
