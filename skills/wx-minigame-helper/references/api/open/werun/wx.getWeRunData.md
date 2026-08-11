---
title: "wx.getWeRunData(Object object)"
type: api
category: api/open/werun
api: "wx.getWeRunData"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/werun/wx.getWeRunData.html
---

# wx.getWeRunData(Object object)

> 基础库 1.2.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **[用户授权](<../../../guide/base-ability/authorize.md>)** ：需要 scope.werun
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取用户过去三十一天微信运动步数。需要先调用 [wx.login](<../login/wx.login.md>) 接口。步数信息会在用户主动进入小程序时更新。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
encryptedData | string | 包括敏感数据在内的完整用户信息的加密数据，详细见[加密数据解密算法](<../../../guide/open-ability/data/signature.md>)。解密后得到的数据结构见后文 |   
iv | string | 加密算法的初始向量，详细见[加密数据解密算法](<../../../guide/open-ability/data/signature.md>) |   
cloudID | string | 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](<../../../guide/open-ability/data/signature.md>) | [2.7.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
## 示例代码
    
    
    wx.getWeRunData({
      success (res) {
        // 拿 encryptedData 到开发者后台解密开放数据
        const encryptedData = res.encryptedData
        // 或拿 cloudID 通过云调用直接获取开放数据
        const cloudID = res.cloudID
      }
    })
    

## 开放数据 JSON 结构

敏感数据有两种获取方式，一是使用 [加密数据解密算法](<../../../guide/open-ability/data/signature.md>) 。 获取得到的开放数据为以下 json 结构：
    
    
    {
      "stepInfoList": [
        {
          "timestamp": 1445866601,
          "step": 100
        },
        {
          "timestamp": 1445876601,
          "step": 120
        }
      ]
    }
    

stepInfoList 中，每一项结构如下：

属性 | 类型 | 说明  
---|---|---  
timestamp | number | 时间戳，表示数据对应的时间  
step | number | 微信运动步数
