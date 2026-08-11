# 网络优化 / 网络请求

> 路径：`api/network/request/`　|　本目录 7 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [RequestTask.abort()](RequestTask.abort.md) | 中断请求任务 |
| [RequestTask](RequestTask.md) |  |
| [RequestTask.offChunkReceived(function listener)](RequestTask.offChunkReceived.md) | 移除 Transfer-Encoding Chunk Received 事件的监听函数 |
| [RequestTask.offHeadersReceived(function listener)](RequestTask.offHeadersReceived.md) | 移除 HTTP Response Header 事件的监听函数 |
| [RequestTask.onChunkReceived(function listener)](RequestTask.onChunkReceived.md) | 监听 Transfer-Encoding Chunk Received 事件。当接收到新的chunk时触发。 |
| [RequestTask.onHeadersReceived(function listener)](RequestTask.onHeadersReceived.md) | 监听 HTTP Response Header 事件。会比请求完成事件更早 |
| [RequestTask wx.request(Object object)](wx.request.md) | 发起 HTTPS 网络请求。使用前请注意阅读相关说明。 |
