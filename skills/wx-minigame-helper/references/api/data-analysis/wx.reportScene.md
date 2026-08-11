---
title: "wx.reportScene(Object object)"
type: api
category: api/data-analysis
api: "wx.reportScene"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.reportScene.html
---

# wx.reportScene(Object object)  
  
> 基础库 2.26.2 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

用于游戏启动阶段的自定义场景上报。使用前请注意阅读[相关说明](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-start-reportScene.html>)。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
sceneId | Number |  | 是 | 场景ID，在「小程序管理后台」获取  
costTime | Number | 0 | 否 | 此场景的耗时，单位 ms  
dimension | Object |  | 否 | 自定义维度数据，key在「小程序管理后台」获取。只支持能够通过JSON.stringify序列化的对象，且序列化后长度不超过1024个字符  
metric | Object |  | 否 | 自定义指标数据，key在「小程序管理后台」获取。只支持能够通过JSON.stringify序列化的对象，且序列化后长度不超过1024个字符  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
data | Object | 开发者上报的原始数据 | [2.28.1](<../../guide/runtime/client-lib/compatibility.md>)  
  
#### object.fail 回调函数

##### 参数

###### Object err

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
data | Object | 开发者上报的原始数据 | [2.28.1](<../../guide/runtime/client-lib/compatibility.md>)  
errMsg | String | 错误信息 | [2.28.1](<../../guide/runtime/client-lib/compatibility.md>)  
  
## 错误

错误码 | 错误信息 | 说明  
---|---|---  
| ${paramName} should be ${expectType} instead of ${paramType} | 参数的类型需为指定的数据类型  
| parameter.${paramName} should greater than or equal to zero | 参数的值需要大于等于0  
| parameter.${paramName}.${key} needs to be a string type and a non-empty string | value仅支持传入非空字符串  
| parameter.${paramName}.${key} needs to be a numeric value of type string | value仅支持传入纯数值组成的字符串（如：'25'）  
| failed to serialize parameter.${paramName} by JSON.stringify | 参数对象序列化失败  
| parameter.${paramName} cannot exceed 1024 characters | 参数序列化后，字符串长度不可超过1024个字符  
| report sceneId:${sceneId} repeatedly | 单次启动流程里，场景ID不可重复上报  
  
## 示例代码
    
    
    wx.reportScene({
      sceneId: 1000,
      costTime: 350,
      dimension: {
        d1: '2.1.0', // value仅支持传入String类型。若value表示Boolean，请将值处理为'0'、'1'进行上报；若value为Number，请转换为String进行上报
      },
      metric: {
        m1: '546', // value仅支持传入数值且需要转换为String类型进行上报
      },
      success (res) {
        // 上报接口执行完成后的回调，用于检查上报数据是否符合预期
        console.log(res)
      },
      fail (res) {
        // 上报报错时的回调，用于查看上报错误的原因：如参数类型错误等
        console.log(res)
      }
    })
