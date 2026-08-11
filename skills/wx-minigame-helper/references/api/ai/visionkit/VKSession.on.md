---
title: "VKSession.on(string eventName, function fn)"
type: api
category: api/ai/visionkit
api: "VKSession.on"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.on.html
---

# VKSession.on(string eventName, function fn)

> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听会话事件。

## 参数

### string eventName

事件名称

**eventName 的合法值**

值 | 说明 | 最低版本  
---|---|---  
resize | 相机尺寸变化事件，回调参数为相机尺寸 |   
addAnchors | 增加 anchor 事件，回调参数为 [VKPlaneAnchor](<VKPlaneAnchor.md>)/[VKMarkerAnchor](<VKMarkerAnchor.md>)/[VKOSDAnchor](<VKOSDAnchor.md>) 列表（只有v2版本支持） 或 [VKFaceAnchor](<VKFaceAnchor.md>)/[VKOCRAnchor](<VKOCRAnchor.md>)/[VKHandAnchor](<VKHandAnchor.md>)/[VKBodyAnchor](<VKBodyAnchor.md>)列表（v1、v2都支持） | [2.22.0](<../../../guide/runtime/client-lib/compatibility.md>)  
updateAnchors | 更新 anchor 事件，回调参数为 [VKPlaneAnchor](<VKPlaneAnchor.md>)/[VKMarkerAnchor](<VKMarkerAnchor.md>)/[VKOSDAnchor](<VKOSDAnchor.md>) 列表（只有v2版本支持） 或 [VKFaceAnchor](<VKFaceAnchor.md>)/[VKOCRAnchor](<VKOCRAnchor.md>)/[VKHandAnchor](<VKHandAnchor.md>)/[VKBodyAnchor](<VKBodyAnchor.md>)列表（v1、v2都支持） | [2.22.0](<../../../guide/runtime/client-lib/compatibility.md>)  
removeAnchors | 删除 anchor 事件，回调参数为 [VKPlaneAnchor](<VKPlaneAnchor.md>)/[VKMarkerAnchor](<VKMarkerAnchor.md>)/[VKOSDAnchor](<VKOSDAnchor.md>) 列表（只有v2版本支持） 或 [VKFaceAnchor](<VKFaceAnchor.md>)/[VKOCRAnchor](<VKOCRAnchor.md>)/[VKHandAnchor](<VKHandAnchor.md>)/[VKBodyAnchor](<VKBodyAnchor.md>) 列表（v1、v2都支持） | [2.22.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
### function fn

事件监听函数
