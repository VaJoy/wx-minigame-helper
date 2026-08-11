---
title: "MiniReportManager.report(Object param)"
type: api
category: api/data-analysis
api: "MiniReportManager.report"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/MiniReportManager.report.html
---

# MiniReportManager.report(Object param)

> 基础库 3.8.12 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

上报关卡日志。report 方法支持在上报时传入关卡事件 ID、关卡 ID、关卡名称、关卡行为、关卡结果、关卡耗时、关卡道具、关卡广告、关卡分享。可设置上报后的回调函数。

## 参数

### Object param

日志上报的参数对象。

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
eventID | string |  | 是 | 关卡事件 ID，在 [小游戏管理后台](<https://mp.weixin.qq.com/>)->统计-> 收入诊断调优->分析调优->事件上报中配置  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 示例代码

eventID是必填字段，支持自定义参数，key可以为任意字符串如 levelID，value为（string，number，boolean），注意：value不能为NaN。透传上报的数据。 下面只展示关卡事件上报的示例代码。我们还为开发者们提供了道具获取、道具使用、广告观看等多种协议。关于其他协议的使用说明和示例代码，可以在[收入诊断调优指引](<https://developers.weixin.qq.com/minigame/analysis/income-diagnosis.html#%E4%BA%8C%E3%80%81%E5%88%86%E6%9E%90%E8%B0%83%E4%BC%98>)查看。
    
    
    let logger = null;
    if (wx.getMiniReportManager) {
      logger = wx.getMiniReportManager({
        debug: true,
        eventList: ['10000003'],
      });
    }
    
    // 关卡事件上报
    logger.report({
      eventID: '10000003',          // 事件ID
      levelID: 1,                   // 关卡ID
      levelName: '第三关',           // 关卡名称
      levelAction: 1,               // 关卡类型
      levelResult: 2,               // 关卡动作
      levelTime: 40,                // 关卡用时
      levelProgress: 75,            // 关卡进度
      externInfo: JSON.stringify({
        "fail_reason": 1,           // 失败原因类型
        "resources_remaining": {    // 剩余资源
          "health": 30,             // 生命值
          "ammo": 12,               // 弹药
        }
      }),                           // 自定义属性
      gameVersion: 3,               // 版本号
      loginCount: 1,                // 关卡进入次数
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
