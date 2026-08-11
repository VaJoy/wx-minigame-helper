---
title: "wx.getBLEMTU(Object object)"
type: api
category: api/device/bluetooth-ble
api: "wx.getBLEMTU"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.getBLEMTU.html
---

# wx.getBLEMTU(Object object)

> 基础库 2.20.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取蓝牙低功耗的最大传输单元。需在 [wx.createBLEConnection](<wx.createBLEConnection.md>) 调用成功后调用。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  deviceId | string |  | 是 | 蓝牙设备 id  
|  writeType | string | write | 否 | 写模式 （iOS 特有参数）  
| |  合法值 | 说明  
---|---  
write | 有回复写  
writeNoResponse | 无回复写  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
mtu | number | 最大传输单元  
  
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

  * 小程序中 MTU 为 ATT_MTU，包含 Op-Code 和 Attribute Handle 的长度，实际可以传输的数据长度为 `ATT_MTU - 3`
  * iOS 系统中 MTU 为固定值；安卓系统中，MTU 会在系统协商成功之后发生改变，建议使用 [wx.onBLEMTUChange](<wx.onBLEMTUChange.md>) 监听。

## 示例代码

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/pQU51zmz7a3K> "在开发者工具中预览效果")
    
    
    wx.getBLEMTU({
      deviceId: '',
      writeType: 'write',
      success (res) {
        console.log(res)
      }
    })
