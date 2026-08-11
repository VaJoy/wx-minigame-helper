---
title: "AudioListener"
type: api
category: api/media/audio
api: "AudioListener"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/AudioListener.html
---

# AudioListener

空间音频监听器，代表在一个音频场景内唯一的位置和方向信息。

## 属性

### number positionX

右手笛卡尔坐标系中X轴的位置。

### number positionY

右手笛卡尔坐标系中Y轴的位置。

### number positionZ

右手笛卡尔坐标系中Z轴的位置。

### number forwardX

表示监听器的前向系统在同一笛卡尔坐标系中的水平位置，作为位置（位置x，位置和位置和位置）值。

### number forwardY

表示听众的前向方向在同一笛卡尔坐标系中作为位置（位置x，位置和位置和位置）值的垂直位置。

### number forwardZ

表示与position (positionX、positionY和positionZ)值在同一笛卡尔坐标系下的听者前进方向的纵向(前后)位置。

### number upX

表示在与position (positionX、positionY和positionZ)值相同的笛卡尔坐标系中侦听器向前方向的水平位置。

### number upY

表示在与position (positionX、positionY和positionZ)值相同的笛卡尔坐标系中侦听器向上方向的水平位置。

### number upZ

表示在与position (positionX、positionY和positionZ)值相同的笛卡尔坐标系中侦听器向后方向的水平位置。

### function setOrientation

设置监听器的方向

### function setPosition

设置监听器的位置
