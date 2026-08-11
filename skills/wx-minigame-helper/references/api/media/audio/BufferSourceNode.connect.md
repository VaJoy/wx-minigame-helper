---
title: "BufferSourceNode.connect(AudioNode|AudioParam destination)"
type: api
category: api/media/audio
api: "BufferSourceNode.connect"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/BufferSourceNode.connect.html
---

# BufferSourceNode.connect(AudioNode|[AudioParam](<AudioParam.md>) destination)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

连接到一个指定目标。这个指定的目标可能是另一个 AudioNode（从而将音频数据引导到下一个指定节点）或一个AudioParam, 以便上一个节点的输出数据随着时间流逝能自动地对下一个参数值进行改变

## 参数

### AudioNode|[AudioParam](<AudioParam.md>) destination

要建立连接的目标节点
