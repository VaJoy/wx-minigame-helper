---
title: "UDPSocket"
type: api
category: api/network/udp
api: "UDPSocket"
source: https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.html
---

# UDPSocket

> 基础库 2.7.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

一个 UDP Socket 实例，默认使用 IPv4 协议。

## 方法

### [number UDPSocket.bind(number port)](<UDPSocket.bind.md>)

绑定一个系统随机分配的可用端口，或绑定一个指定的端口号

### [UDPSocket.setTTL(number ttl)](<UDPSocket.setTTL.md>)

设置 IP_TTL 套接字选项，用于设置一个 IP 数据包传输时允许的最大跳步数

### [UDPSocket.send(Object object)](<UDPSocket.send.md>)

向指定的 IP 和 port 发送消息。基础库 2.9.0 起支持广播 (指定地址为 255.255.255.255)。

### [UDPSocket.connect(Object object)](<UDPSocket.connect.md>)

预先连接到指定的 IP 和 port，需要配合 write 方法一起使用

### [UDPSocket.write(Object object)](<UDPSocket.write.md>)

用法与 send 方法相同，如果没有预先调用 connect 则与 send 无差异（注意即使调用了 connect 也需要在本接口填入地址和端口参数）

### [UDPSocket.close()](<UDPSocket.close.md>)

关闭 UDP Socket 实例，相当于销毁。 在关闭之后，UDP Socket 实例不能再发送消息，每次调用 `UDPSocket.send` 将会触发错误事件，并且 message 事件回调函数也不会再也执行。在 `UDPSocket` 实例被创建后将被 Native 强引用，保证其不被 GC。在 `UDPSocket.close` 后将解除对其的强引用，让 UDPSocket 实例遵从 GC。

### [UDPSocket.onClose(function listener)](<UDPSocket.onClose.md>)

监听关闭事件

### [UDPSocket.offClose(function listener)](<UDPSocket.offClose.md>)

移除关闭事件的监听函数

### [UDPSocket.onError(function listener)](<UDPSocket.onError.md>)

监听错误事件

### [UDPSocket.offError(function listener)](<UDPSocket.offError.md>)

移除错误事件的监听函数

### [UDPSocket.onListening(function listener)](<UDPSocket.onListening.md>)

监听开始监听数据包消息的事件

### [UDPSocket.offListening(function listener)](<UDPSocket.offListening.md>)

移除开始监听数据包消息的事件的监听函数

### [UDPSocket.onMessage(function listener)](<UDPSocket.onMessage.md>)

监听收到消息的事件

### [UDPSocket.offMessage(function listener)](<UDPSocket.offMessage.md>)

移除收到消息的事件的监听函数

## 错误

错误码 | 错误信息 | 说明  
---|---|---  
-1 |  | 系统错误  
-2 |  | socket接口错误，可参考系统的socket错误码  
-3 |  | 发送失败，无接口权限  
1 |  | 发送失败，参数错误，address不合法  
2 |  | 发送失败，参数错误，port不合法
