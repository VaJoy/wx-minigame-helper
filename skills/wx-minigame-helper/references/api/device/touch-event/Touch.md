---
title: "Touch"
type: api
category: api/device/touch-event
api: "Touch"
source: https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/Touch.html
---

# Touch

在触控设备上的触摸点。通常是指手指或者触控笔在触屏设备或者触摸板上的操作。

## 属性

### number identifier

Touch 对象的唯一标识符，只读属性。一次触摸动作(我们值的是手指的触摸)在平面上移动的整个过程中, 该标识符不变。可以根据它来判断跟踪的是否是同一次触摸过程。

### number pageX

触点相对于页面左边沿的 X 坐标。

### number pageY

触点相对于页面上边沿的 Y 坐标。

### number clientX

触点相对于可见视区左边沿的 X 坐标。

### number clientY

触点相对于可见视区上边沿的 Y 坐标。

### number force

手指挤压触摸平面的压力大小, 从0.0(没有压力)到1.0(最大压力)的浮点数（仅在支持 force touch 的设备返回）
