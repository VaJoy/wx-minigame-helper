---
title: "Promise Camera.takePhoto(string quality)"
type: api
category: api/media/camera
api: "Camera.takePhoto"
source: https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.takePhoto.html
---

# Promise Camera.takePhoto(string quality)

> 基础库 2.9.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

拍照，可指定质量，成功则返回图片

## 参数

### string quality

拍照质量，值为 high, normal, low

## 返回值

### Promise

拍照完成的 Promise，成功时返回 {tempImagePath, width, height}
