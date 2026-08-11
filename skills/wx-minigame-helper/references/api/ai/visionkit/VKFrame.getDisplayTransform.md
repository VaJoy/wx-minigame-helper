---
title: "Float32Array VKFrame.getDisplayTransform()"
type: api
category: api/ai/visionkit
api: "VKFrame.getDisplayTransform"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFrame.getDisplayTransform.html
---

# Float32Array VKFrame.getDisplayTransform()  
  
> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

获取纹理调整矩阵。默认获取到的纹理是未经裁剪调整的纹理，此矩阵可用于在着色器中根据帧对象尺寸对纹理进行裁剪。

## 返回值

### Float32Array

纹理调整矩阵
