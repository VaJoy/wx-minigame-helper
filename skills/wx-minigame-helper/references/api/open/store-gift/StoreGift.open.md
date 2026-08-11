---
title: "Promise StoreGift.open()"
type: api
category: api/open/store-gift
api: "StoreGift.open"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/store-gift/StoreGift.open.html
---

# Promise StoreGift.open()

> 基础库 3.8.12 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

打开礼物，请注意，这里的回调仅仅是打开礼物界面的回调，并不是收下礼物的回调

## 返回值

### Promise.<Object>

打开蓝包结果，成功的时候固定为 { errCode: 0, errMsg: 'ok' } 对象

### 异常捕获

当打开礼物失败的时候，通过 catch 捕获异常，数据结构如下

属性 | 类型 | 说明  
---|---|---  
errCode | number | 错误码  
errMsg | string | 错误信息  
  
其中 errCode 状态码如下

值 | 含义  
---|---  
-1000 | 订单加载失败，请重试  
-1001 | 订单参数错误  
-1002 | 打开礼物失败[礼物状态异常]  
-1003 | 调用客户端接口失败  
-1004 | 正在加载订单信息  
-1005 | 当前环境不支持
