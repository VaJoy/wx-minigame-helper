---
title: "wx.getGroupEnterInfo(Object object)"
type: api
category: api/open/group
api: "wx.getGroupEnterInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/group/wx.getGroupEnterInfo.html
---

# wx.getGroupEnterInfo(Object object)

> 基础库 2.10.4 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取微信群聊场景下的小程序启动信息。群聊场景包括群聊小程序消息卡片、群待办、群工具。可用于获取当前群的 opengid。

## 注意事项

  * 基础库 v2.10.4 开始支持获取群工具小程序启动信息
  * 基础库 v2.17.3 开始支持获取群聊小程序消息卡片、群待办小程序启动信息
  * 基础库 v3.7.8 支持获取单聊群启动信息，获取的群(含单聊)唯一标识，可用于[聊天工具模式](<../../chattool/wx.openChatTool.md>)。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
allowSingleChat | boolean | false | 否 | 开启后单聊下返回 open_single_roomid | [3.7.8](<../../../guide/runtime/client-lib/compatibility.md>)  
needGroupOpenID | boolean | false | 否 | 开启后返回用户在群(含单聊)下的 group_openid | [3.7.8](<../../../guide/runtime/client-lib/compatibility.md>)  
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
errMsg | string | 错误信息 |   
encryptedData | string | 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](<../../../guide/open-ability/data/signature.md>) |   
iv | string | 加密算法的初始向量，详细见[加密数据解密算法](<../../../guide/open-ability/data/signature.md>) |   
cloudID | string | 敏感数据对应的云 ID，开通[云开发](<https://developers.weixin.qq.com/minigame/dev/wxcloud/basis/getting-started.html>)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](<../../../guide/open-ability/data/signature.md>) | [2.7.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
## 错误

错误码 | 错误信息 | 说明  
---|---|---  
40097 |  | 场景错误  
65206 |  | 用户已不在该群内  
  
## 示例代码
    
    
    wx.getGroupEnterInfo({
      success(res) {
        // res
        {
          errMsg: 'getGroupEnterInfo:ok',
          encryptedData: '',
          iv: ''
        }
      },
      fail() {
    
      }
    })
    

敏感数据有两种获取方式，一是使用 [加密数据解密算法](<../../../guide/open-ability/data/signature.md>) 。 获取得到的开放数据为以下 json 结构（其中 opengid 为当前群的唯一标识）：
    
    
    {
     "opengid": "OPENGID",       // 多聊群下返回的群唯一标识
     "open_single_roomid": "",   // 单聊群下返回的群唯一标识
     "group_openid": "",         // 用户在当前群的唯一标识
     "chat_type": 3,             // 聊天室类型
    }
    

## Tips

  * 如需要展示群名称，小程序可以使用[开放数据组件](<../../../guide/open-ability/data/open-data.md>)
  * 小游戏可以通过 `wx.getGroupInfo` 接口获取群名称
