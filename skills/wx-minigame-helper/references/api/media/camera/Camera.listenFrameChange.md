---
title: "Camera.listenFrameChange(Worker worker)"
type: api
category: api/media/camera
api: "Camera.listenFrameChange"
source: https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.listenFrameChange.html
---

# Camera.listenFrameChange([Worker](<../../worker/Worker.md>) worker)

> 基础库 2.9.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

开启监听帧数据

## 参数

### [Worker](<../../worker/Worker.md>) worker

> 基础库 2.17.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

可选参数。如果需要在 iOS ExperimentalWorker 内监听摄像头帧数据，则需要传入对应 Worker 对象，否则不需要传入任何参数。详情 [Worker.getCameraFrameData](<../../worker/Worker.getCameraFrameData.md>)
