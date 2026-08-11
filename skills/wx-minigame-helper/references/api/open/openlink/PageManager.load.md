---
title: "Promise PageManager.load(Object object)"
type: api
category: api/open/openlink
api: "PageManager.load"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/PageManager.load.html
---

# Promise PageManager.load(Object object)

> 基础库 3.6.7 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

提供OPENLINK加载活动、功能信息。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
openlink | string |  | 是 | 从不同渠道获得的OPENLINK字符串  
query | Object |  | 否 | 选填，部分活动、功能允许接收自定义query参数，请参阅渠道说明，默认可不填  
extraData | Object |  | 否 | 选填，部分活动、功能允许额外提供参数数据，具体使用请根据渠道说明，默认可不填  
  
## 返回值

### Promise

加载开放页面数据信息结果或抛出错误信息。

错误码信息 错误码是执行 PageManager.load 发生 reject 时抛出的异常，如需了解各种错误原因可参阅下表。 

代码 | 原因 | 解决方案  
---|---|---  
0 | 无异常 | -  
-1 | openlink异常 | 请确认openlink填写完整且正确。  
-2 | 基础库版本不支持 | 基础库版本较低引起，受平台灰度等策略影响。  
-3 | 当前设备暂不支持 | 通常受活动、能力本身对平台限制引起。  
-4 | 业务渠道方报错 | 由openlink业务方提供的错误信息，具体错误信息请详见 errInfo 字段。  
-5 | 其他错误 | 其他原因引发的错误，具体错误信息请详见 errInfo 字段。  
-6 | 网络错误 | 网络异常引发的错误，检查网络环境。  
-7 | 频繁错误 | 请勿高频发起load请求。  
-8 | 小游戏版本错误 | 小游戏版本与openlink不匹配，需正确使用openlink对应生效的 开发版、体验版、正式版。
