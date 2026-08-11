# Worker 多线程

> 路径：`api/worker/`　|　本目录 9 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [ArrayBuffer Worker.getCameraFrameData()](Worker.getCameraFrameData.md) | 获取摄像头当前帧图像，返回ArrayBuffer数据。仅限在 worker 线程中使用。 |
| [Worker](Worker.md) |  |
| [Worker.onError(function listener)](Worker.onError.md) | 监听 Worker 线程错误事件。当 Worker 线程中发生脚本错误时会触发此事件。 |
| [Worker.onMessage(function listener)](Worker.onMessage.md) | 监听主线程/Worker 线程向当前线程发送的消息的事件。 |
| [Worker.onProcessKilled(function listener)](Worker.onProcessKilled.md) | 监听 worker线程被系统回收事件（开启 useExperimentalWorker 后，当iOS系统资源紧张时，ExperimentalWorker 线程存在被系统回收的可能，开发者可监听此事件并 |
| [Worker.postMessage(Object message)](Worker.postMessage.md) | 向主线程/Worker 线程发送的消息。 |
| [Worker.terminate()](Worker.terminate.md) | 结束当前 Worker 线程。仅限在主线程 worker 对象上调用。 |
| [Worker.testOnProcessKilled()](Worker.testOnProcessKilled.md) | 用于模拟 iOS ExperimentalWorker 线程被系统回收事件，以便于调试。接口仅在 worker 线程内可用。参考 Worker.onProcessKilled |
| [Worker wx.createWorker(string scriptPath, object options)](wx.createWorker.md) | 创建一个 Worker 线程 |
