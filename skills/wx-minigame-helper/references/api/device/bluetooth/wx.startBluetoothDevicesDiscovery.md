---
title: "wx.startBluetoothDevicesDiscovery(Object object)"
type: api
category: api/device/bluetooth
api: "wx.startBluetoothDevicesDiscovery"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html
---

# wx.startBluetoothDevicesDiscovery(Object object)

> 基础库 2.9.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

开始搜寻附近的蓝牙外围设备。

**此操作比较耗费系统资源，请在搜索到需要的设备后及时调用[wx.stopBluetoothDevicesDiscovery](<wx.stopBluetoothDevicesDiscovery.md>) 停止搜索。**

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  services | Array.<string> |  | 否 | 要搜索的蓝牙设备主服务的 UUID 列表（支持 16/32/128 位 UUID）。某些蓝牙设备会广播自己的主 service 的 UUID。如果设置此参数，则只搜索广播包有对应 UUID 的主服务的蓝牙设备。建议通过该参数过滤掉周边不需要处理的其他蓝牙设备。  
|  allowDuplicatesKey | boolean | false | 否 | 是否允许重复上报同一设备。如果允许重复上报，则 [wx.onBlueToothDeviceFound](<errorwx.onBlueToothDeviceFound\)>) 方法会多次上报同一设备，但是 RSSI 值会有不同。  
|  interval | number | 0 | 否 | 上报设备的间隔，单位 ms。0 表示找到新设备立即上报，其他数值根据传入的间隔上报。  
|  powerLevel | string | medium | 否 | 扫描模式，越高扫描越快，也越耗电。仅安卓微信客户端 7.0.12 及以上支持。  
| |  合法值 | 说明  
---|---  
low | 低  
medium | 中  
high | 高  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 错误

错误码 | 错误信息 | 说明  
---|---|---  
0 | ok | 正常  
-1 | already connect | 已连接  
10000 | not init | 未初始化蓝牙适配器  
10001 | not available | 当前蓝牙适配器不可用  
10002 | no device | 没有找到指定设备  
10003 | connection fail | 连接失败  
10004 | no service | 没有找到指定服务  
10005 | no characteristic | 没有找到指定特征  
10006 | no connection | 当前连接已断开  
10007 | property not support | 当前特征不支持此操作  
10008 | system error | 其余所有系统上报的异常  
10009 | system not support | Android 系统特有，系统版本低于 4.3 不支持 BLE  
10012 | operate time out | 连接超时  
10013 | invalid_data | 连接 deviceId 为空或者是格式不正确  
  
## 注意

  * 考虑到蓝牙功能可以间接进行定位，安卓 6.0 及以上版本，无定位权限或定位开关未打开时，无法进行设备搜索。这种情况下，安卓 8.0.16 前，接口调用成功但无法扫描设备；8.0.16 及以上版本，会返回错误。

## 示例代码

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/m7klFDmZ72i1> "在开发者工具中预览效果")
    
    
    // 以微信硬件平台的蓝牙智能灯为例，主服务的 UUID 是 FEE7。传入这个参数，只搜索主服务 UUID 为 FEE7 的设备
    wx.startBluetoothDevicesDiscovery({
      services: ['FEE7'],
      success (res) {
        console.log(res)
      }
    })
