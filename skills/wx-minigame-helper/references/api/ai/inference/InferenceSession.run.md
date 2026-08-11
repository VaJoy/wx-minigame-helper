---
title: "Promise<Tensors> InferenceSession.run(Tensors tensors)"
type: api
category: api/ai/inference
api: "InferenceSession.run"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/inference/InferenceSession.run.html
---

# Promise<[Tensors](<Tensors.md>)> InferenceSession.run([Tensors](<Tensors.md>) tensors)

> 基础库 2.30.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

运行推断。需要在 session.onLoad 回调后使用。接口参数为 Tensors 对象，返回 Promise。一个 InferenceSession 被创建完成后可以重复多次调用 InferenceSession.run(), 直到调用 session.destroy() 进行销毁。

## 参数

### [Tensors](<Tensors.md>) tensors

key-value 形式的对象，对象的 key 会作为 input name，对象的 value 则是 Tensor。 Tensor 结构如下。

## 返回值

### Promise.<[Tensors](<Tensors.md>)>

InferenceSession.run() 接口返回 Promise，resolve 后返回推理结果，推理结果为 key-value 形式的对象，对象的 key 为输出Tensor名 `output0`、`output1`、`output2` ... 对象的 value 则是 Tensor。

## 示例代码
    
    
    // 创建会话，加载模型
    const session = wx.createInferenceSession({
      model: `${wx.env.USER_DATA_PATH}/MNIST.onnx`,
      precisionLevel: 4,
      typicalShape:{input1:[1, 3, 224, 224], input2:[1, 1, 224, 224]},  //除非使用动态轴，一般不用显式指定
      allowNPU: false,
      allowQuantize: false
    })
    
    // 监听模型加载完成事件
    session.onLoad(() => {
      // 运行推理
      // 其中input1, input2, output0 必须与使用的onnx模型中实际的输入输出名字完全一致，不可随意填写。
      // 模型输入输出信息可以通过Netron 打开onnx模型看到
      session.run({
        input1: {
          type: 'float32',
          data: new Float32Array(3 * 224 * 224).buffer,
          shape: [1, 3, 224, 224] // NCHW 顺序
        },
        // 多个input的添加方法，假设第二个input需要数据类型为uint8
        input2: {
          type: 'uint8',
          data: new Uint8Array(224 * 224).buffer,
          shape: [1, 1, 224, 224]
        },
      }).then(res => {
        console.log(res.output0)
      })
    })
