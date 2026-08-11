---
title: "VKSession.start(function callback)"
type: api
category: api/ai/visionkit
api: "VKSession.start"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.start.html
---

# VKSession.start(function callback)

> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

开启会话。

## 参数

### function callback

开启会话回调

#### 参数

##### number status

**status 的合法值**

值 | 说明 | 最低版本  
---|---|---  
0 | 成功 |   
104 | 用户取消授权 |   
112 | 接口未在隐私协议中声明 |   
1025 | 小程序隐私接口被封禁，[解决方案参考链接](<https://developers.weixin.qq.com/community/develop/doc/00062a6d514c88baacdf52e8a56009>) |   
1026 | 小游戏隐私接口被封禁，[解决方案参考链接](<https://developers.weixin.qq.com/community/minigame/doc/0004c84925817819b7ffd8b2356008>) |   
2000001 | 参数错误 |   
2003000 | 会话不可用 |   
2000000 | 系统错误 |   
2000002 | 设备不支持 |   
2000003 | 系统不支持 |   
2000004 | 设备不支持 |   
2003001 | 未开启系统相机权限 |   
2003002 | 未开启小程序相机权限 |
