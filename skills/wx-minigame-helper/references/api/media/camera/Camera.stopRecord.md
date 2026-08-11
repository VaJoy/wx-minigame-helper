---
title: "Promise Camera.stopRecord(boolean compressed)"
type: api
category: api/media/camera
api: "Camera.stopRecord"
source: https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.stopRecord.html
---

# Promise Camera.stopRecord(boolean compressed)

> 基础库 2.9.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

结束录像，成功则返回封面与视频

## 参数

### boolean compressed

是否压缩录制视频

## 返回值

### Promise

结束录像的 Promise，成功时返回 {tempThumbPath, tempVideoPath}
