---
title: "MiniReportManager wx.getMiniReportManager(Object param)"
type: api
category: api/data-analysis
api: "wx.getMiniReportManager"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.getMiniReportManager.html
---

# [MiniReportManager](<MiniReportManager.md>) wx.getMiniReportManager(Object param)

> 基础库 3.8.12 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

初始化并返回一个MiniReportManager实例，用于记录和管理小游戏上报。

## 参数

### Object param

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
eventList | Array.<string> | [] | 否 | 需要上报的事件ID列表  
debug | boolean | false | 否 | 是否开启调试模式，调试模式下每次上报成功都会在控制台输出上报内容。调试模式仅在开发版和体验版小游戏中生效。  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 返回值

### [MiniReportManager](<MiniReportManager.md>)

## 上报限制

单次游戏生命周期内，上报日志的条数最大为999条。 单条日志体积最大为16KB。 超出上报限制，日志将无法上报成功。

## 示例代码
    
    
    let logger = null;
    if (wx.getMiniReportManager) {
      logger = wx.getMiniReportManager({
        debug: true,
        eventList: ['10000003'],
      });
    }
    
    logger.report({
        eventID: '10000003', // 事件ID
        levelID: 1, // 关卡ID
        levelName: '第三关', // 关卡名称
        levelAction: 1, // 关卡类型
        levelResult: 2, // 关卡动作
        levelTime: 40, // 关卡用时
        levelProgress: 75, // 关卡进度
        externInfo: '{ fail_reason: 1 }', // 自定义属性
        gameVersion: 3, // 版本号
        loginCount: 1, // 关卡进入次数
        success(res) {
          console.log('success', res)
        },
        fail(res) {
          console.log('fail', res)
       },
        complete(res) {
          console.log('complete', res)
        }
      });
