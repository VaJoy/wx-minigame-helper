---
title: "wx.getGameClubData(Object object)"
type: api
category: api/open/game-club
api: "wx.getGameClubData"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/wx.getGameClubData.html
---

# wx.getGameClubData(Object object)

> 基础库 2.25.4 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取游戏圈数据。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  dataTypeList | Array.<Object> |  | 是 | 需要获取的数据指标的对象数组  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  type | number |  | 是 | 见type表格说明  
|  subKey | string |  | 否 | 部分type需要传，见type表格说明  
  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
signature | string | 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息  
encryptedData | string | 包括 GameClubData 在内的加密数据，详见[加密数据解密算法](<../../../guide/open-ability/data/signature.md>)  
iv | string | 加密算法的初始向量  
cloudID | string | 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过[云调用直接获取开放数据](<../../../guide/open-ability/data/signature.md>)  
  
## 示例代码
    
    
    wx.getGameClubData({
      dataTypeList: [{
         type:1
     }],
      success: (res)=>console.log(res),
      fail: (res)=>console.error(res),
      complete: (res)=>console.log(res)
    })
    
    

## type说明

type取值 | 说明 | subKey | GameClubDataByType.value  
---|---|---|---  
1 | 加入该游戏圈时间 | 无需传入 | 秒级Unix时间戳  
3 | 用户禁言状态 | 无需传入 | 0：正常 1：禁言  
4 | 当天(自然日)点赞贴子数 | 无需传入 |   
5 | 当天(自然日)评论贴子数 | 无需传入 |   
6 | 当天(自然日)发表贴子数 | 无需传入 |   
7 | 当天(自然日)发表视频贴子数 | 无需传入 |   
8 | 当天(自然日)赞官方贴子数 | 无需传入 |   
9 | 当天(自然日)评论官方贴子数 | 无需传入 |   
10 | 当天(自然日)发表到本圈子话题的贴子数 | 传入话题id，从mp-游戏圈话题管理处获取 |   
11 | 用户最近一次推荐游戏时间 | 无需传入 | 秒级时间戳  
  
## encryptedData 解密后得到的 GameClubData 的结构

属性 | 类型 | 说明  
---|---|---  
dataList | Array<GameClubDataByType> | 游戏圈相关数据的对象数组  
  
## GameClubDataByType 的结构

属性 | 类型 | 说明  
---|---|---  
dataType | number | 与输入的 dataType 一致  
value | number | 不同type返回的value含义不同，见type表格说明
