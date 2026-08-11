---
title: "BeaconInfo"
type: api
category: api/device/ibeacon
api: "BeaconInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/BeaconInfo.html
---

# BeaconInfo  
  
Beacon 设备

## 属性

### string uuid

Beacon 设备广播的 UUID

### number major

Beacon 设备的主 ID

### number minor

Beacon 设备的次 ID

### number proximity

表示设备距离的枚举值（仅iOS）

**proximity 的合法值**

值 | 说明 | 最低版本  
---|---|---  
0 | 信号太弱不足以计算距离，或非 iOS 设备 |   
1 | 十分近 |   
2 | 比较近 |   
3 | 远 |   
  
### number accuracy

Beacon 设备的距离，单位 m。iOS 上，proximity 为 0 时，accuracy 为 -1。

### number rssi

表示设备的信号强度，单位 dBm
