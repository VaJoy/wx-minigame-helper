---
title: "Tensors"
type: api
category: api/ai/inference
api: "Tensors"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/inference/Tensors.html
---

# Tensors

> 基础库 2.30.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

Tensors 是 key-value 形式的对象，对象的 key 会作为 input/output name，对象的 value 则是 Tensor。 Tensor 结构如下。

## 属性

### [Tensor](<Tensor.md>) key

Tensor，每个 Tensor 包含 shape、data、type 字段。
    
    
    session.run({
      input1: {
        type: 'float32',
        data: new Float32Array(3 * 224 * 224).buffer,
        shape: [1, 3, 224, 224] // NCHW 顺序
      },
      input2: {
        type: 'uint8',
        data: new Uint8Array(224 * 224).buffer,
        shape: [1, 1, 224, 224]
      },
    }).then(res => {
      console.log(res.output0)
      // output0 结构如下：
      // {
      //   type: 'uint8',
      //   data: new Uint8Array(224 * 224).buffer,
      //   shape: [1, 1, 224, 224]
      // }
    })
