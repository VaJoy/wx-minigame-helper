# AI 能力 / AI 推理

> 路径：`api/ai/inference/`　|　本目录 11 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [InferenceSession.destroy()](InferenceSession.destroy.md) | 销毁 InferenceSession 实例 |
| [InferenceSession](InferenceSession.md) |  |
| [InferenceSession.offError(function callback)](InferenceSession.offError.md) | 取消监听模型加载失败事件 |
| [InferenceSession.offLoad(function callback)](InferenceSession.offLoad.md) | 取消监听模型加载完成事件 |
| [InferenceSession.onError(function callback)](InferenceSession.onError.md) | 监听模型加载失败事件 |
| [InferenceSession.onLoad(function callback)](InferenceSession.onLoad.md) | 监听模型加载完成事件 |
| [Promise<Tensors> InferenceSession.run(Tensors tensors)](InferenceSession.run.md) | 运行推断。需要在 session.onLoad 回调后使用。接口参数为 Tensors 对象，返回 Promise。一个 InferenceSession 被创建完成后可以重复多次调用 Inferen |
| [Tensor](Tensor.md) |  |
| [Tensors](Tensors.md) |  |
| [InferenceSession wx.createInferenceSession(Object object)](wx.createInferenceSession.md) | 创建 AI 推理 Session。使用前可参考AI指南文档 |
| [wx.getInferenceEnvInfo(Object object)](wx.getInferenceEnvInfo.md) | 获取通用AI推理引擎版本。使用前可参考AI指南文档 |
