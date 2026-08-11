---
title: "wx.getChatToolInfo(Object object)"
type: api
category: api/chattool
api: "wx.getChatToolInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.getChatToolInfo.html
---

# wx.getChatToolInfo(Object object)

> 基础库 3.7.12 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持

## 功能描述

获取聊天工具模式下的群聊信息。

需要注意的是，单聊群和多聊群下返回的群唯一标识是不同的。

  1. 多聊群下返回 opengid
  2. 单聊群下返回 open_single_roomid

同时将返回用户在群(含单聊)下的唯一标识 group_openid。

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

属性 | 类型 | 说明  
---|---|---  
errMsg | string | 错误信息  
encryptedData | string | 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](<../../guide/open-ability/data/signature.md>)  
iv | string | 加密算法的初始向量，详细见[加密数据解密算法](<../../guide/open-ability/data/signature.md>)  
cloudID | string | 敏感数据对应的云 ID，开通[云开发](<https://developers.weixin.qq.com/minigame/dev/wxcloud/basis/getting-started.html>)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](<../../guide/open-ability/data/signature.md>)  
  
## 示例代码
    
    
    wx.getChatToolInfo({
      success(res) {
        // res
        {
          errMsg: 'getChatToolInfo:ok',
          encryptedData: '',
          iv: ''
        }
      },
      fail() {
    
      }
    })
    

敏感数据有两种获取方式，一是使用 [加密数据解密算法](<../../guide/open-ability/data/signature.md>) 。 获取得到的开放数据为以下 json 结构（其中 opengid 为当前群的唯一标识）：
    
    
    {
     "opengid": "OPENGID",       // 多聊群下返回的群唯一标识
     "open_single_roomid": "",   // 单聊群下返回的群唯一标识
     "group_openid": "",         // 用户在当前群的唯一标识
     "chat_type": 3,             // 聊天室类型
    }
