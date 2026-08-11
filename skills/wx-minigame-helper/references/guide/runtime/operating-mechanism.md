---
title: "小游戏运行机制"
type: guide
category: guide/runtime
source: https://developers.weixin.qq.com/minigame/dev/guide/runtime/operating-mechanism.html
---

# 小游戏运行机制

## 前台/后台状态

小程序启动后，界面被展示给用户，此时小程序处于**前台** 状态。

当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有完全终止运行，而是进入了**后台** 状态，小程序还可以运行一小段时间。

当用户再次进入微信或再次打开小程序，小程序又会从后台进入**前台** 。但如果用户很久没有再进入小程序，或者系统资源紧张，小程序可能被**销毁** ，即完全终止运行。

## 小程序启动

这样，小程序启动可以分为两种情况，一种是**冷启动** ，一种是**热启动** 。

  * 冷启动：如果用户首次打开，或小程序销毁后被用户再次打开，此时小程序需要重新加载启动，即冷启动。
  * 热启动：如果用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时小程序并未被销毁，只是从后台状态进入前台状态，这个过程就是热启动。

## 小程序销毁时机

通常，只有当小程序进入后台一定时间，或者系统资源占用过高，才会被销毁。具体而言包括以下几种情形：

  * 当小程序进入后台，可以维持一小段时间的运行状态，如果这段时间内都未进入前台，小程序会被销毁。
  * 当小程序占用系统资源过高，可能会被系统销毁或被微信客户端主动回收。 
    * 在 iOS 上，当微信客户端在一定时间间隔内连续收到系统内存告警时，会根据一定的策略，主动销毁小程序，并提示用户 「运行内存不足，请重新打开该小程序」。具体策略会持续进行调整优化。
    * 建议小程序在必要时使用 [wx.onMemoryWarning](<https://developers.weixin.qq.com/minigame/dev/api/device/memory/wx.onMemoryWarning.html>) 监听内存告警事件，进行必要的内存清理。

> 基础库 1.1.0 及以上，1.4.0 以下版本： 当用户从扫一扫、转发等入口（[场景值](<https://developers.weixin.qq.com/minigame/dev/reference/scene-list>)为1007, 1008, 1011, 1025）进入小程序，且没有置顶小程序的情况下退出，小程序会被销毁。

## 再次打开逻辑

> 基础库 '1.4.0' 开始支持，低版本需做[兼容处理](<https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility>)。

用户打开小程序的预期有以下两类场景：

A. 打开首页： [场景值](<https://developers.weixin.qq.com/minigame/dev/reference/scene-list>)有以下几项：

场景值ID | 说明  
---|---  
1001 | 发现栏小程序主入口，「最近使用」列表  
1019 | 微信钱包  
1022 | 聊天顶部置顶小程序入口  
1023 | 安卓系统桌面图标  
1038 | 从另一个小程序返回  
1056 | 音乐播放器菜单  
  
B. 打开小程序指定的某个页面： 场景值为除 A 以外的其他

当再次打开一个小程序逻辑如下：

上一次的场景 | 当前打开的场景 | 效果  
---|---|---  
A | A | 保留原来的状态  
B | A | 清空原来的页面栈，打开首页（相当于执行 [wx.reLaunch](<https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html>) 到首页）  
A 或 B | B | 清空原来的页面栈，打开指定页面（相当于执行 [wx.reLaunch](<https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html>) 到指定页）
