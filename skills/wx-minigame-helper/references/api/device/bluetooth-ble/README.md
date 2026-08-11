# 设备能力 / 低功耗蓝牙

> 路径：`api/device/bluetooth-ble/`　|　本目录 16 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [wx.closeBLEConnection(Object object)](wx.closeBLEConnection.md) | 断开与蓝牙低功耗设备的连接。 |
| [wx.createBLEConnection(Object object)](wx.createBLEConnection.md) | 连接蓝牙低功耗设备。 |
| [wx.getBLEDeviceCharacteristics(Object object)](wx.getBLEDeviceCharacteristics.md) | 获取蓝牙低功耗设备某个服务中所有特征 (characteristic)。 |
| [wx.getBLEDeviceRSSI(Object object)](wx.getBLEDeviceRSSI.md) | 获取蓝牙低功耗设备的信号强度 (Received Signal Strength Indication, RSSI)。 |
| [wx.getBLEDeviceServices(Object object)](wx.getBLEDeviceServices.md) | 获取蓝牙低功耗设备所有服务 (service)。 |
| [wx.getBLEMTU(Object object)](wx.getBLEMTU.md) | 获取蓝牙低功耗的最大传输单元。需在 wx.createBLEConnection 调用成功后调用。 |
| [wx.notifyBLECharacteristicValueChange(Object object)](wx.notifyBLECharacteristicValueChange.md) | 启用蓝牙低功耗设备特征值变化时的 notify 功能，订阅特征。注意：必须设备的特征支持 notify 或者 indicate 才可以成功调用。 |
| [wx.offBLECharacteristicValueChange()](wx.offBLECharacteristicValueChange.md) | 移除蓝牙低功耗设备的特征值变化事件的全部监听函数 |
| [wx.offBLEConnectionStateChange(function listener)](wx.offBLEConnectionStateChange.md) | 移除蓝牙低功耗连接状态改变事件的监听函数 |
| [wx.offBLEMTUChange(function listener)](wx.offBLEMTUChange.md) | 移除蓝牙低功耗的最大传输单元变化事件的监听函数 |
| [wx.onBLECharacteristicValueChange(function listener)](wx.onBLECharacteristicValueChange.md) | 监听蓝牙低功耗设备的特征值变化事件。必须先调用 wx.notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。 |
| [wx.onBLEConnectionStateChange(function listener)](wx.onBLEConnectionStateChange.md) | 监听蓝牙低功耗连接状态改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等 |
| [wx.onBLEMTUChange(function listener)](wx.onBLEMTUChange.md) | 监听蓝牙低功耗的最大传输单元变化事件（仅安卓触发）。 |
| [wx.readBLECharacteristicValue(Object object)](wx.readBLECharacteristicValue.md) | 读取蓝牙低功耗设备特征值的二进制数据。注意：必须设备的特征支持 read 才可以成功调用。 |
| [wx.setBLEMTU(Object object)](wx.setBLEMTU.md) | 协商设置蓝牙低功耗的最大传输单元 (Maximum Transmission Unit, MTU)。需在 wx.createBLEConnection 调用成功后调用。仅安卓系统 5.1 以上版本有效 |
| [wx.writeBLECharacteristicValue(Object object)](wx.writeBLECharacteristicValue.md) | 向蓝牙低功耗设备特征值中写入二进制数据。注意：必须设备的特征支持 write 才可以成功调用。 |
