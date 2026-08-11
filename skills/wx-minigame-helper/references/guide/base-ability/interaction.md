---
title: "游戏交互"
type: guide
category: guide/base-ability
source: https://developers.weixin.qq.com/minigame/dev/guide/base-ability/interaction.html
---

# 游戏交互  
  
下列展示几个游戏中常用的交互方式，完整的设备交互相关 API，可以查看[API-设备](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchStart.html>)列表

## 触摸事件

游戏中最常见的交互方式是点击，拖动，按住等等，这些交互都和触摸相关。小游戏 API 提供了最基础的触摸事件监听接口：

  * 监听开始触摸事件[wx.onTouchStart()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchStart.html>)
  * 监听触点移动事件[wx.onTouchMove()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchMove.html>)
  * 监听触摸结束事件[wx.onTouchEnd()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchEnd.html>)
  * 监听触点失效事件[wx.onTouchCancel()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchCancel.html>)

#### 如果要实现更其他触摸相关的效果，需要自行实现，下文展示实现点击和滑动的示例代码：
    
    
    const touchHandler = {
      startX: 0, // 记录按下的坐标
      startY: 0, // 记录按下的坐标
      startTime: 0, // 记录按下的时间
      isMoving: false, // 记录是否移动
      longPressTimeout: null, // 用于长按的定时器
      thresholdDistance: 10, // 移动距离阈值
      thresholdTime: 300, // 点击的时间阈值（毫秒）
      longPressTime: 500, // 长按的时间阈值（毫秒）
      longPressTriggered: false, // 用于标记长按是否已触发
      onTouchStart: function(event) {
        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
        this.startTime = Date.now(); // 记录按下的时间
        this.isMoving = false; // 重置移动状态
    
        // 设置长按定时器
        this.longPressTimeout = setTimeout(() => {
          this.handleLongPress(event);
        }, this.longPressTime);
      },
      onTouchMove: function(event) {
        this.isMoving = true;
      },
      onTouchEnd: function(event) {
        clearTimeout(this.longPressTimeout);
    
        const endX = event.changedTouches[0].clientX;
        const endY = event.changedTouches[0].clientY;
        const endTime = Date.now();
        const moveX = endX - this.startX;
        const moveY = endY - this.startY;
        const moveDistance = Math.sqrt(moveX * moveX + moveY * moveY);
        const timeDiff = endTime - this.startTime;
    
        if (
          timeDiff < this.thresholdTime &&
          moveDistance < this.thresholdDistance
        ) {
          // 处理点击事件
          this.handleClick(event);
        } else if (
          this.isMoving &&
          !this.longPressTriggered &&
          moveDistance > this.thresholdDistance
        ) {
          // 处理滑动事件
          this.handleSwipe(this.startX, this.startY, endX, endY);
        }
    
        this.isMoving = false;
        this.longPressTriggered = false;
      },
      onTouchCancel: function(event) {
        clearTimeout(this.longPressTimeout);
        this.isMoving = false;
        this.longPressTriggered = false;
      },
      handleClick: function(event) {
        console.log("点击", event);
        // 在这里处理点击事件
      },
      handleLongPress: function(event) {
        console.log("长按", event);
        this.longPressTriggered = true;
        // 在这里处理长按事件
      },
      handleSwipe: function(startX, startY, endX, endY) {
        const deltaX = endX - startX;
        const deltaY = endY - startY;
    
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // 水平滑动
          if (deltaX > 0) {
            console.log("往右滑");
            // 在这里处理往右滑事件
          } else {
            console.log("左滑");
            // 在这里处理往左滑事件
          }
        } else {
          // 垂直滑动
          if (deltaY > 0) {
            console.log("往下滑");
            // 在这里处理往下滑事件
          } else {
            console.log("往上滑");
            // 在这里处理往上滑事件
          }
        }
      }
    };
    
    wx.onTouchStart(touchHandler.onTouchStart.bind(touchHandler));
    wx.onTouchMove(touchHandler.onTouchMove.bind(touchHandler));
    wx.onTouchEnd(touchHandler.onTouchEnd.bind(touchHandler));
    wx.onTouchCancel(touchHandler.onTouchCancel.bind(touchHandler));
    

我们提供了可运行的[代码片段](<https://developers.weixin.qq.com/s/nnmUUWmY7BUc>)，可以预览代码片段并在真机进行体验

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/nnmUUWmY7BUc> "在开发者工具中预览效果")

## 文本输入

游戏中有时会用到输入文字的场景，比如登录账号，聊天等场景。小游戏 API 提供了以下接口用于拉起和监听虚拟键盘

  * 显示文字输入键盘[wx.showKeyboard](<https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.showKeyboard.html>)
  * 隐藏文字输入键盘[wx.hideKeyboard](<https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.hideKeyboard.html>)
  * 监听键盘输入事件[wx.onKeyboardInput](<https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyboardInput.html>)
  * 监听用户点击键盘 Confirm 按钮时的事件[wx.onKeyboardConfirm](<https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyboardConfirm.html>)
  * 监听键盘收起的事件[wx.onKeyboardComplete](<https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyboardComplete.html>)
  * 监听键盘高度变化事件[wx.onKeyboardHeightChange](<https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyboardHeightChange.html>)

#### 示例代码
    
    
    wx.onKeyboardConfirm(result => {
      console.warn("用户输入了：", result.value);
    });
    
    wx.onTouchStart(result => {
      wx.showKeyboard({
        defaultValue: "",
        maxLength: 100,
        multiple: false,
        confirmHold: false,
        confirmType: "done",
        success: res => {
          console.warn("拉起成功", res);
        },
        fail: err => {
          console.warn("拉起失败", err);
        }
      });
    });
    

## PC-鼠标

通常不需要单独处理鼠标事件，在 Windows/Mac 设备上，鼠标事件也会转换为触摸事件，但是，如果你想更精确的优化你的游戏，建议在 PC 端单独进行鼠标适配。

  * 监听鼠标按键按下事件[wx.onMouseDown()](<https://developers.weixin.qq.com/minigame/dev/api/device/mouse-event/wx.onMouseDown.html>)
  * 监听鼠标移动事件[wx.onMouseMove()](<https://developers.weixin.qq.com/minigame/dev/api/device/mouse-event/wx.onMouseMove.html>)
  * 监听鼠标按键弹起事件[wx.onMouseUp()](<https://developers.weixin.qq.com/minigame/dev/api/device/mouse-event/wx.onMouseUp.html>)
  * 监听鼠标滚轮事件[wx.onWheel()](<https://developers.weixin.qq.com/minigame/dev/api/device/wheel-event/wx.onWheel.html>)

## PC-键盘

如果你想要更好的适配 PC 端，可以尝试适配键盘输入，让用户在 PC 端有更好的体验，更多 PC 适配查看[PC 小游戏接入指南](<../open-ability/platform/pc-game.md>)。

  * 监听键盘按键按下事件[wx.onKeyDown()](<https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyDown.html>)
  * 监听键盘按键弹起事件[wx.onKeyUp()](<https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyUp.html>)

## 设备传感器

在移动设备上，有时候可以通过监听设备的传感器变化来做一些很特别的玩法

  * [wx.startDeviceMotionListening](<https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.startDeviceMotionListening.html>)可以监听设备朝向，可以用于实现全景地图等功能。
  * [wx.startAccelerometer](<https://developers.weixin.qq.com/minigame/dev/api/device/accelerometer/wx.startAccelerometer.html>)可以监听加速计的变化，通常用于测量施加到设备上的加速度，可以用于实现重力感应等功能。
  * [wx.startGyroscope](<https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.startGyroscope.html>)可以监听陀螺仪的变化，通常用于检测设备的旋转速率，单位为弧度/秒，可以用于实现视角的控制等功能。
  * [wx.startCompass](<https://developers.weixin.qq.com/minigame/dev/api/device/compass/wx.startCompass.html>)可以监听设备朝向（平面），可以用于实现指南针等功能。

#### 示例代码
    
    
    const deviceMotionData = { alpha: 0, beta: 0, gamma: 0 };
    const accelerometerData = { x: 0, y: 0, z: 0 };
    const gyroscopeData = { x: 0, y: 0, z: 0 };
    const compassData = { direction: 0, accuracy: 0 };
    
    // 启动设备运动监听
    wx.startDeviceMotionListening({
      success: () => {
        wx.onDeviceMotionChange(res => {
          deviceMotionData = res;
        });
      },
      fail: err => {
        console.error("Failed to start device motion listening:", err);
      }
    });
    
    // 启动加速计
    wx.startAccelerometer({
      success: () => {
        wx.onAccelerometerChange(res => {
          accelerometerData = res;
        });
      },
      fail: err => {
        console.error("Failed to start accelerometer:", err);
      }
    });
    
    // 启动陀螺仪
    wx.startGyroscope({
      success: () => {
        wx.onGyroscopeChange(res => {
          gyroscopeData = res;
        });
      },
      fail: err => {
        console.error("Failed to start gyroscope:", err);
      }
    });
    
    // 启动罗盘
    wx.startCompass({
      success: () => {
        wx.onCompassChange(res => {
          compassData = res;
        });
      },
      fail: err => {
        console.error("Failed to start compass:", err);
      }
    });
    

我们提供了可运行的[代码片段](<https://developers.weixin.qq.com/s/5NwicXmO7zUk>)，可以预览代码片段并在真机进行体验

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/5NwicXmO7zUk> "在开发者工具中预览效果")
