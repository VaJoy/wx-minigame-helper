---
title: "wx.getShareInfo(Object object)"
type: api
category: api/share
api: "wx.getShareInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/share/wx.getShareInfo.html
---

# wx.getShareInfo(Object object)

从基础库 [2.17.3](<../../guide/runtime/client-lib/compatibility.md>) 开始，本接口停止维护，请使用 [wx.getGroupEnterInfo](<../open/group/wx.getGroupEnterInfo.md>) 代替

> 基础库 1.1.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **需要页面权限** ：当前是插件页面时，宿主小程序不能调用该接口，反之亦然
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取转发详细信息（主要是获取群ID）。 从群聊内的小程序消息卡片打开小程序时，调用此接口才有效。从基础库 v2.17.3 开始，推荐用 [wx.getGroupEnterInfo](<../open/group/wx.getGroupEnterInfo.md>) 替代此接口。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
shareTicket | string |  | 是 | shareTicket，详见[获取更多转发信息](<../../guide/open-ability/share/share.md>) |   
timeout | number |  | 否 | 超时时间，单位 ms | [1.9.90](<../../guide/runtime/client-lib/compatibility.md>)  
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
errMsg | string | 错误信息 |   
encryptedData | string | 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](<../../guide/open-ability/data/signature.md>) |   
iv | string | 加密算法的初始向量，详细见[加密数据解密算法](<../../guide/open-ability/data/signature.md>) |   
cloudID | string | 敏感数据对应的云 ID，开通[云开发](<https://developers.weixin.qq.com/minigame/dev/wxcloud/basis/getting-started.html>)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](<../../guide/open-ability/data/signature.md>) | [2.7.0](<../../guide/runtime/client-lib/compatibility.md>)  
  
## 示例代码

敏感数据获取方式 [加密数据解密算法](<../../guide/open-ability/data/signature.md>) 。 获取得到的开放数据为以下 json 结构（其中 openGId 为当前群的唯一标识）：
    
    
    {
     "openGId": "OPENGID"
    }
    

## Tips

  * 如需要展示群名称，小程序可以使用 [开放数据组件](<../../guide/open-ability/data/open-data.md>)
  * 小游戏可以通过 [`wx.getGroupInfo`](<../open/data/wx.getGroupInfo.md>) 接口获取群名称
