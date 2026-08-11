# 网络优化 / TCP 通信

> 路径：`api/network/tcp/`　|　本目录 16 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [TCPSocket.bindWifi(Object options)](TCPSocket.bindWifi.md) | 将 TCP Socket 绑定到当前 wifi 网络，成功后会触发 onBindWifi 事件（仅安卓支持） |
| [TCPSocket.close()](TCPSocket.close.md) | 关闭连接 |
| [TCPSocket.connect(Object options)](TCPSocket.connect.md) | 在给定的套接字上启动连接 |
| [TCPSocket](TCPSocket.md) |  |
| [TCPSocket.offBindWifi(function listener)](TCPSocket.offBindWifi.md) | 移除当一个 socket 绑定当前 wifi 网络成功时触发该事件的监听函数 |
| [TCPSocket.offClose(function listener)](TCPSocket.offClose.md) | 移除一旦 socket 完全关闭就发出该事件的监听函数 |
| [TCPSocket.offConnect(function listener)](TCPSocket.offConnect.md) | 移除当一个 socket 连接成功建立的时候触发该事件的监听函数 |
| [TCPSocket.offError(function listener)](TCPSocket.offError.md) | 移除当错误发生时触发的监听函数 |
| [TCPSocket.offMessage(function listener)](TCPSocket.offMessage.md) | 移除当接收到数据的时触发该事件的监听函数 |
| [TCPSocket.onBindWifi(function listener)](TCPSocket.onBindWifi.md) | 监听当一个 socket 绑定当前 wifi 网络成功时触发该事件 |
| [TCPSocket.onClose(function listener)](TCPSocket.onClose.md) | 监听一旦 socket 完全关闭就发出该事件 |
| [TCPSocket.onConnect(function listener)](TCPSocket.onConnect.md) | 监听当一个 socket 连接成功建立的时候触发该事件 |
| [TCPSocket.onError(function listener)](TCPSocket.onError.md) | 监听当错误发生时触发 |
| [TCPSocket.onMessage(function listener)](TCPSocket.onMessage.md) | 监听当接收到数据的时触发该事件 |
| [TCPSocket.write(string|ArrayBuffer data)](TCPSocket.write.md) | 在 socket 上发送数据 |
| [TCPSocket wx.createTCPSocket(Object object)](wx.createTCPSocket.md) | 创建一个 TCP Socket 实例。使用前请注意阅读相关说明。 |
