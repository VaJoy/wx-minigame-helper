---
title: "InferenceSession"
type: api
category: api/ai/inference
api: "InferenceSession"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/inference/InferenceSession.html
---

# InferenceSession

> 基础库 2.30.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

推理 Session 实例，通过[wx.createInferenceSession](<wx.createInferenceSession.md>) 接口获取该实例。使用前可参考[AI指南文档](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/inference/tutorial.html>)

## 方法

### [InferenceSession.onLoad(function callback)](<InferenceSession.onLoad.md>)

监听模型加载完成事件

### [InferenceSession.offLoad(function callback)](<InferenceSession.offLoad.md>)

取消监听模型加载完成事件

### [InferenceSession.onError(function callback)](<InferenceSession.onError.md>)

监听模型加载失败事件

### [InferenceSession.offError(function callback)](<InferenceSession.offError.md>)

取消监听模型加载失败事件

### [Promise InferenceSession.run(Object tensors)](<InferenceSession.run.md>)

运行推断。需要在 session.onLoad 回调后使用。接口参数为 Tensors 对象，返回 Promise。一个 InferenceSession 被创建完成后可以重复多次调用 InferenceSession.run(), 直到调用 session.destroy() 进行销毁。

### [InferenceSession.destroy()](<InferenceSession.destroy.md>)

销毁 InferenceSession 实例
