---
title: "Camera"
type: api
category: api/media/camera
api: "Camera"
source: https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.html
---

# Camera

相机对象

## 属性

### number x

相机的左上角横坐标

### number y

相机的左上角纵坐标

### number width

相机的宽度

### number height

相机的高度

### string devicePosition

摄像头朝向

### string flash

闪光灯，值为 auto, on, off

### string size

帧数据图像尺寸，值为 small, medium, large

## 方法

### [Promise Camera.takePhoto(string quality)](<Camera.takePhoto.md>)

拍照，可指定质量，成功则返回图片

### [Promise Camera.startRecord()](<Camera.startRecord.md>)

开始录像

### [Promise Camera.stopRecord(boolean compressed)](<Camera.stopRecord.md>)

结束录像，成功则返回封面与视频

### [Promise Camera.setZoom(Object args)](<Camera.setZoom.md>)

设置缩放比例

### [Camera.onAuthCancel(function callback)](<Camera.onAuthCancel.md>)

监听用户不允许授权使用摄像头的情况

### [Camera.onStop(function callback)](<Camera.onStop.md>)

监听摄像头非正常终止事件，如退出后台等情况

### [Camera.onCameraFrame(onCameraFrameCallback callback)](<Camera.onCameraFrame.md>)

监听摄像头实时帧数据

### [Camera.listenFrameChange(Worker worker)](<Camera.listenFrameChange.md>)

开启监听帧数据

### [Camera.closeFrameChange()](<Camera.closeFrameChange.md>)

关闭监听帧数据

### [Camera.destroy()](<Camera.destroy.md>)

销毁相机
