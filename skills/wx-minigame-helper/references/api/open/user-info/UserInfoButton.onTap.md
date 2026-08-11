---
title: "UserInfoButton.onTap(function listener)"
type: api
category: api/open/user-info
api: "UserInfoButton.onTap"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfoButton.onTap.html
---

# UserInfoButton.onTap(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听用户信息按钮的点击事件

## 参数

### function listener

用户信息按钮的点击事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
userInfo | [UserInfo](<UserInfo.md>) | 用户信息对象，不包含 openid 等敏感信息 |   
rawData | string | 不包括敏感信息的原始数据字符串，用于计算签名 |   
signature | string | 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，参考文档[signature](<../../../guide/open-ability/data/signature.md>) |   
encryptedData | string | 包括敏感数据在内的完整用户信息的加密数据，详细见[加密数据解密算法](<../../../guide/open-ability/data/signature.md>) |   
iv | string | 加密算法的初始向量，详细见[加密数据解密算法](<../../../guide/open-ability/data/signature.md>) |   
cloudID | string | 敏感数据对应的云 ID，开通[云开发](<https://developers.weixin.qq.com/minigame/dev/api/wxcloud/basis/getting-started.html>)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](<../../../guide/open-ability/data/signature.md>) | [2.7.0](<../../../guide/runtime/client-lib/compatibility.md>)  
errMsg | string | 调用结果（错误原因） |
