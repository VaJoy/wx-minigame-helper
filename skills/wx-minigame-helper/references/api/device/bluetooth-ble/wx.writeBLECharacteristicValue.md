---
title: "wx.writeBLECharacteristicValue(Object object)"
type: api
category: api/device/bluetooth-ble
api: "wx.writeBLECharacteristicValue"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html
---

# wx.writeBLECharacteristicValue(Object object)  
  
> 基础库 2.9.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

向蓝牙低功耗设备特征值中写入二进制数据。注意：必须设备的特征支持 write 才可以成功调用。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  deviceId | string |  | 是 | 蓝牙设备 id  
|  serviceId | string |  | 是 | 蓝牙特征对应服务的 UUID  
|  characteristicId | string |  | 是 | 蓝牙特征的 UUID  
|  value | ArrayBuffer |  | 是 | 蓝牙设备特征对应的二进制值  
|  writeType | string |  | 否 | 蓝牙特征值的写模式设置，有两种模式，iOS 优先 write，安卓优先 writeNoResponse 。（基础库 2.22.0 开始支持）  
| |  合法值 | 说明  
---|---  
write | 强制回复写，不支持时报错  
writeNoResponse | 强制无回复写，不支持时报错  
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

  * 并行调用多次会存在写失败的可能性。
  * 小程序不会对写入数据包大小做限制，但系统与蓝牙设备会限制蓝牙 4.0 单次传输的数据大小，超过最大字节数后会发生写入错误，建议每次写入不超过 20 字节。
  * 若单次写入数据过长，iOS 上存在系统不会有任何回调的情况（包括错误回调）。
  * 安卓平台上，在调用 [wx.notifyBLECharacteristicValueChange](<wx.notifyBLECharacteristicValueChange.md>) 成功后立即调用本接口，在部分机型上会发生 10008 系统错误

## 示例代码

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/pQU51zmz7a3K> "在开发者工具中预览效果")
    
    
    // 向蓝牙设备发送一个0x00的16进制数据
    let buffer = new ArrayBuffer(1)
    let dataView = new DataView(buffer)
    dataView.setUint8(0, 0)
    
    wx.writeBLECharacteristicValue({
      // 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
      deviceId,
      // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
      serviceId,
      // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
      characteristicId,
      // 这里的value是ArrayBuffer类型
      value: buffer,
      success (res) {
        console.log('writeBLECharacteristicValue success', res.errMsg)
      }
    })
