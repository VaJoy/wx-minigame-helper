---
title: "InferenceSession.offError(function callback)"
type: api
category: api/ai/inference
api: "InferenceSession.offError"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/inference/InferenceSession.offError.html
---

# InferenceSession.offError(function callback)

> 基础库 2.30.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

取消监听模型加载失败事件

## 参数

### function callback

模型加载失败回调函数。传入指定回调函数则只取消指定回调，不传则取消所有回调
