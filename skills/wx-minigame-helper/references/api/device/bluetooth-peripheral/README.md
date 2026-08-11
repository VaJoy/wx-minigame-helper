# 设备能力 / 蓝牙外设

> 路径：`api/device/bluetooth-peripheral/`　|　本目录 17 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [BLEPeripheralServer.addService(Object object)](BLEPeripheralServer.addService.md) | 添加服务。 |
| [BLEPeripheralServer](BLEPeripheralServer.md) |  |
| [BLEPeripheralServer.offCharacteristicReadRequest(function listener)](BLEPeripheralServer.offCharacteristicReadRequest.md) | 移除已连接的设备请求读当前外围设备的特征值事件的监听函数 |
| [BLEPeripheralServer.offCharacteristicSubscribed(function listener)](BLEPeripheralServer.offCharacteristicSubscribed.md) | 移除特征订阅事件的监听函数 |
| [BLEPeripheralServer.offCharacteristicUnsubscribed(function listener)](BLEPeripheralServer.offCharacteristicUnsubscribed.md) | 移除取消特征订阅事件的监听函数 |
| [BLEPeripheralServer.offCharacteristicWriteRequest(function listener)](BLEPeripheralServer.offCharacteristicWriteRequest.md) | 移除已连接的设备请求写当前外围设备的特征值事件的监听函数 |
| [BLEPeripheralServer.onCharacteristicReadRequest(function listener)](BLEPeripheralServer.onCharacteristicReadRequest.md) | 监听已连接的设备请求读当前外围设备的特征值事件。收到该消息后需要立刻调用 writeCharacteristicValue 写回数据，否则主机不会收到响应。 |
| [BLEPeripheralServer.onCharacteristicSubscribed(function listener)](BLEPeripheralServer.onCharacteristicSubscribed.md) | 监听特征订阅事件，仅 iOS 支持。 |
| [BLEPeripheralServer.onCharacteristicUnsubscribed(function listener)](BLEPeripheralServer.onCharacteristicUnsubscribed.md) | 监听取消特征订阅事件，仅 iOS 支持。 |
| [BLEPeripheralServer.onCharacteristicWriteRequest(function listener)](BLEPeripheralServer.onCharacteristicWriteRequest.md) | 监听已连接的设备请求写当前外围设备的特征值事件。收到该消息后需要立刻调用 writeCharacteristicValue 写回数据，否则主机不会收到响应。 |
| [BLEPeripheralServer.removeService(Object object)](BLEPeripheralServer.removeService.md) | 移除服务。 |
| [BLEPeripheralServer.startAdvertising(Object Object)](BLEPeripheralServer.startAdvertising.md) | 开始广播本地创建的外围设备。 |
| [BLEPeripheralServer.stopAdvertising(Object object)](BLEPeripheralServer.stopAdvertising.md) | 停止广播。 |
| [BLEPeripheralServer.writeCharacteristicValue(Object Object)](BLEPeripheralServer.writeCharacteristicValue.md) | 往指定特征写入二进制数据值，并通知已连接的主机，从机的特征值已发生变化，该接口会处理是走回包还是走订阅。 |
| [wx.createBLEPeripheralServer(Object object)](wx.createBLEPeripheralServer.md) | 建立本地作为蓝牙低功耗外围设备的服务端，可创建多个。 |
| [wx.offBLEPeripheralConnectionStateChanged(function listener)](wx.offBLEPeripheralConnectionStateChanged.md) | 移除当前外围设备被连接或断开连接事件的监听函数 |
| [wx.onBLEPeripheralConnectionStateChanged(function listener)](wx.onBLEPeripheralConnectionStateChanged.md) | 监听当前外围设备被连接或断开连接事件 |
