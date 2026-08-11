---
title: "PageManager.off(string eventName, function callback)"
type: api
category: api/open/openlink
api: "PageManager.off"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/PageManager.off.html
---

# PageManager.off(string eventName, function callback)  
  
> 基础库 3.6.7 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

取消监听来自活动、功能向开发者产生的某些事件。

## 参数

### string eventName

取消的事件名称，如果仅填写事件名称则注销该名称下所有的监听

### function callback

取消的事件名称及其对应的回调函数指针，可缺省，若填写则仅注销该事件名称下的单个回调函数
