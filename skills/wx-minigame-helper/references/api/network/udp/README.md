# 网络优化 / UDP 通信

> 路径：`api/network/udp/`　|　本目录 16 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [number UDPSocket.bind(number port)](UDPSocket.bind.md) | 绑定一个系统随机分配的可用端口，或绑定一个指定的端口号 |
| [UDPSocket.close()](UDPSocket.close.md) | 关闭 UDP Socket 实例，相当于销毁。 在关闭之后，UDP Socket 实例不能再发送消息，每次调用 `UDPSocket.send` 将会触发错误事件，并且 message 事件回调函数也 |
| [UDPSocket.connect(Object object)](UDPSocket.connect.md) | 预先连接到指定的 IP 和 port，需要配合 write 方法一起使用 |
| [UDPSocket](UDPSocket.md) |  |
| [UDPSocket.offClose(function listener)](UDPSocket.offClose.md) | 移除关闭事件的监听函数 |
| [UDPSocket.offError(function listener)](UDPSocket.offError.md) | 移除错误事件的监听函数 |
| [UDPSocket.offListening(function listener)](UDPSocket.offListening.md) | 移除开始监听数据包消息的事件的监听函数 |
| [UDPSocket.offMessage(function listener)](UDPSocket.offMessage.md) | 移除收到消息的事件的监听函数 |
| [UDPSocket.onClose(function listener)](UDPSocket.onClose.md) | 监听关闭事件 |
| [UDPSocket.onError(function listener)](UDPSocket.onError.md) | 监听错误事件 |
| [UDPSocket.onListening(function listener)](UDPSocket.onListening.md) | 监听开始监听数据包消息的事件 |
| [UDPSocket.onMessage(function listener)](UDPSocket.onMessage.md) | 监听收到消息的事件 |
| [UDPSocket.send(Object object)](UDPSocket.send.md) | 向指定的 IP 和 port 发送消息。基础库 2.9.0 起支持广播 (指定地址为 255.255.255.255)。 |
| [UDPSocket.setTTL(number ttl)](UDPSocket.setTTL.md) | 设置 IP_TTL 套接字选项，用于设置一个 IP 数据包传输时允许的最大跳步数 |
| [UDPSocket.write(Object object)](UDPSocket.write.md) | 用法与 send 方法相同，如果没有预先调用 connect 则与 send 无差异（注意即使调用了 connect 也需要在本接口填入地址和端口参数） |
| [UDPSocket wx.createUDPSocket(string type, Object options)](wx.createUDPSocket.md) | 创建一个 UDP Socket 实例。使用前请注意阅读相关说明。 |
