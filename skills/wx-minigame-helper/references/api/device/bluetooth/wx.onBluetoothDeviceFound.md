---
title: "wx.onBluetoothDeviceFound(function listener)"
type: api
category: api/device/bluetooth
api: "wx.onBluetoothDeviceFound"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html
---

# wx.onBluetoothDeviceFound(function listener)

> 基础库 2.9.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听搜索到新设备的事件

## 参数

### function listener

搜索到新设备的事件的监听函数

#### 参数

##### object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  devices | Array.<Object> | 新搜索到的设备列表  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  name | string | 蓝牙设备名称，某些设备可能没有  
|  deviceId | string | 蓝牙设备 id  
|  RSSI | number | 当前蓝牙设备的信号强度，单位 dBm  
|  advertisData | ArrayBuffer | 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。  
|  advertisServiceUUIDs | Array.<string> | 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段  
|  localName | string | 当前蓝牙设备的广播数据段中的 LocalName 数据段  
|  serviceData | Object | 当前蓝牙设备的广播数据段中的 ServiceData 数据段  
|  connectable | boolean | 当前蓝牙设备是否可连接（ Android 8.0 以下不支持返回该值 ）  
  
## 注意

  * 若在 [wx.onBluetoothDeviceFound](<wx.onBluetoothDeviceFound.md>) 回调了某个设备，则此设备会添加到 [wx.getBluetoothDevices](<wx.getBluetoothDevices.md>) 接口获取到的数组中。
  * 地址变化这个是鸿蒙系统特性，小程序可以不缓存地址，重新搜索连接。

## 示例代码

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/pQU51zmz7a3K> "在开发者工具中预览效果")
    
    
    // ArrayBuffer转16进度字符串示例
    function ab2hex(buffer) {
      var hexArr = Array.prototype.map.call(
        new Uint8Array(buffer),
        function(bit) {
          return ('00' + bit.toString(16)).slice(-2)
        }
      )
      return hexArr.join('');
    }
    wx.onBluetoothDeviceFound(function(res) {
      var devices = res.devices;
      console.log('new device list has founded')
      console.dir(devices)
      console.log(ab2hex(devices[0].advertisData))
    })
    

## 注意

  * 蓝牙设备在被搜索到时，系统返回的 `name` 字段一般为广播包中的 `LocalName` 字段中的设备名称，而如果与蓝牙设备建立连接，系统返回的 `name` 字段会改为从蓝牙设备上获取到的 `GattName`。若需要动态改变设备名称并展示，建议使用 `localName` 字段。
  * 安卓下部分机型需要有位置权限才能搜索到设备，需留意是否开启了位置权限
