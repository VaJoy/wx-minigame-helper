---
title: "wx.getGameExptInfo(Object options)"
type: api
category: api/data-analysis
api: "wx.getGameExptInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.getGameExptInfo.html
---

# wx.getGameExptInfo(Object options)

> 基础库 3.8.8 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持

## 功能描述

给定实验参数数组，获取对应的实验参数值

## 参数

### Object options

配置参数对象

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
keyList | Array.<string> |  | 是 | 实验参数数组，不填则获取所有实验参数  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### options.success 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  list | Array.<Object> | 结果对象，各项为实验的相关信息  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  expt_id | number | 实验ID，标识实验  
|  param_name | string | 参数名称  
|  param_value | string | 参数值  
  
## 示例代码
    
    
    wx.getGameExptInfo({
      keyList: ['experiment_key1', 'experiment_key2'],
      success(res) {
        res.list.forEach((expParam) => {
          console.log('实验ID:', expParam.expt_id);
          console.log('参数名:', expParam.param_name);
          console.log('参数值:', expParam.param_value);
        })
      }
    });
