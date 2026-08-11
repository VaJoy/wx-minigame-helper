# 设备能力 / 蓝牙

> 路径：`api/device/bluetooth/`　|　本目录 13 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [wx.closeBluetoothAdapter(Object object)](wx.closeBluetoothAdapter.md) | 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 wx.openBluetoothAdapter 成对调用。 |
| [wx.getBluetoothAdapterState(Object object)](wx.getBluetoothAdapterState.md) | 获取本机蓝牙适配器状态。 |
| [wx.getBluetoothDevices(Object object)](wx.getBluetoothDevices.md) | 获取在蓝牙模块生效期间所有搜索到的蓝牙设备。包括已经和本机处于连接状态的设备。 |
| [wx.getConnectedBluetoothDevices(Object object)](wx.getConnectedBluetoothDevices.md) | 根据主服务 UUID 获取已连接的蓝牙设备。 |
| [wx.isBluetoothDevicePaired(Object object)](wx.isBluetoothDevicePaired.md) | 查询蓝牙设备是否配对，仅安卓支持。 |
| [wx.makeBluetoothPair(Object object)](wx.makeBluetoothPair.md) | 蓝牙配对接口，仅安卓支持。 |
| [wx.offBluetoothAdapterStateChange()](wx.offBluetoothAdapterStateChange.md) | 移除蓝牙适配器状态变化事件的全部监听函数 |
| [wx.offBluetoothDeviceFound()](wx.offBluetoothDeviceFound.md) | 移除搜索到新设备的事件的全部监听函数 |
| [wx.onBluetoothAdapterStateChange(function listener)](wx.onBluetoothAdapterStateChange.md) | 监听蓝牙适配器状态变化事件 |
| [wx.onBluetoothDeviceFound(function listener)](wx.onBluetoothDeviceFound.md) | 监听搜索到新设备的事件 |
| [wx.openBluetoothAdapter(Object object)](wx.openBluetoothAdapter.md) | 初始化蓝牙模块。iOS 上开启主机/从机（外围设备）模式时需分别调用一次，并指定对应的 `mode`。 |
| [wx.startBluetoothDevicesDiscovery(Object object)](wx.startBluetoothDevicesDiscovery.md) | 开始搜寻附近的蓝牙外围设备。 |
| [wx.stopBluetoothDevicesDiscovery(Object object)](wx.stopBluetoothDevicesDiscovery.md) | 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。 |
