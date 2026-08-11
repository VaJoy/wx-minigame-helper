---
title: "wx.stopBluetoothDevicesDiscovery(Object object)"
type: api
category: api/device/bluetooth
api: "wx.stopBluetoothDevicesDiscovery"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html
---

# wx.stopBluetoothDevicesDiscovery(Object object)

> 基础库 2.9.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
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
  
## 示例代码

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/pQU51zmz7a3K> "在开发者工具中预览效果")
    
    
    wx.stopBluetoothDevicesDiscovery({
      success (res) {
        console.log(res)
      }
    })
