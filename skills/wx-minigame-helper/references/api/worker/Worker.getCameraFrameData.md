---
title: "ArrayBuffer Worker.getCameraFrameData()"
type: api
category: api/worker
api: "Worker.getCameraFrameData"
source: https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.getCameraFrameData.html
---

# ArrayBuffer Worker.getCameraFrameData()

> 基础库 2.17.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

获取摄像头当前帧图像，返回ArrayBuffer数据。仅限在 worker 线程中使用。

## 返回值

### ArrayBuffer

摄像头帧数据

### 注意事项

  * 接口仅在 iOS 上可用
  * 接口仅在 worker 线程中可用
  * 接口仅在 useExperimentalWorker 为 true 时可用
  * 使用前需要先在主线程调用 Camera.listenFrameChange(worker)
  * 该接口的目的是借助 iOS ExperimentalWorker 的JS高运行性能，配合摄像头帧数据实现 AR 等游戏场景
  * 由于安卓主线程本身已经支持JIT，因此安卓上可以直接在主线程使用 Camera.onCameraFrame 接口实现 AR 等场景

## 示例代码
    
    
    // game.js
    const worker = wx.createWorker('workers/index.js', {
      useExperimentalWorker: true
    })
    
    const camera = wx.createCamera({
      success() {
        camera.listenFrameChange(worker)
      }
    })
    
    
    
    // workers/index.js
    const data = worker.getCameraFrameData()
    console.log(data)
