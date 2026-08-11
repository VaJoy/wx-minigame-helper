---
title: "Promise PageManager.show(Object object)"
type: api
category: api/open/openlink
api: "PageManager.show"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/PageManager.show.html
---

# Promise PageManager.show(Object object)

> 基础库 3.6.7 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

显示已经成功加载信息的开放页面活动、功能。如果调用前未执行 `.load({ ... })` 将自动调用1次并返回加载信息结果。

## 参数

### Object object

选填，如果已经执行 `.load({ ... })` 无需填写，也允许使用 `.show({ ... })` 连贯执行

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
openlink | string |  | 否 | 从不同渠道获得的OPENLINK字符串  
query | Object |  | 否 | 选填，部分活动、功能允许接收自定义query参数，请参阅渠道说明，默认可不填  
extraData | Object |  | 否 | 选填，部分活动、功能允许额外提供参数数据，具体使用请根据渠道说明，默认可不填  
  
## 返回值

### Promise

加载开放页面数据信息结果（如返回信息同时也代表show执行成功）或抛出错误信息。
