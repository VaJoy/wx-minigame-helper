---
title: "AudioParam"
type: api
category: api/media/audio
api: "AudioParam"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/AudioParam.html
---

# AudioParam

> 基础库 2.19.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

AudioParam 接口代表音频相关的参数，通常是 AudioNode（例如 GainNode.gain）的参数

## 属性

### number defaultValue

代表被具体的 AudioNode 创建的 AudioParam 的属性的初始值（只读）

### number maxValue

代表参数有效范围的最大可能值（只读）

### number minValue

代表参数有效范围的最小可能值（只读）

### number value

当前属性的值（比如音量值或播放倍速值）（可读可写）
