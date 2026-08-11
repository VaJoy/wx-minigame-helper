---
title: "鸿蒙 OS 适配指南"
type: guide
category: guide/open-ability/platform
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/ohos.html
---

# 鸿蒙 OS 适配指南

基础库从`3.7.0`起正式支持鸿蒙 OS 平台，后续与其他平台一致，通过后台灰度更新[基础库](<https://developers.weixin.qq.com/minigame/dev/guide/runtime/client-lib>)，开发者工具可在详情 - 本地设置 - 调试基础库切到`3.7.0`版本进行开发调试。

## 架构概览

小游戏在鸿蒙 OS 平台的[运行环境](<../../runtime/env.md>)与安卓类似，即逻辑层的 JavaScript 代码运行在 v8 中。

此外，小游戏的运行机制、更新机制等均保持一致，但在一些特性支持度上会有区别。

## 适配方式

目前小游戏在鸿蒙 OS 平台与其他平台的区别主要是原生能力的特性上。

可通过 `wx.getDeviceInfo().platform === 'ohos'` 判断是否是鸿蒙平台，业务逻辑需针对鸿蒙做必要的兼容。

> 注意：如在微信开发者工具中模拟鸿蒙，则需判断 wx.getDeviceInfo().system=='HarmonyOS' (工具中 platform 为 devtools)

## 调试方式

  * 通过真机调试

目前已对外提供公测版微信，可在鸿蒙 OS 的应用商店下载，操作路径为：鸿蒙 next 应用商店 - 我的 - 应用尝鲜，下拉找到微信，安装后即可正常打开小游戏进行调试。

## 支持情况

接口具体的支持情况可跳转至对应[API 文档](<https://developers.weixin.qq.com/doc/oplatform/openApi/ams/open/api_agencycheckcanopenpublisher>)查看，如果接口支持，则会展示`微信 鸿蒙 OS 版：支持`的标识。

以下罗列出暂未支持的特性，开发者需要对已使用但未支持的特性做好兼容。

#### 接口

模块 | 支持情况  
---|---  
基础-应用级事件 | 部分支持  
基础-性能 | 部分支持  
基础-调试 | 部分支持  
转发 | 部分支持  
数据缓存 | 部分支持  
渲染 | 部分支持  
媒体-音频 | 部分支持  
媒体-图片 | 部分支持  
媒体-录音 | 不支持  
媒体-相机 | 不支持  
媒体-视频解码器 | 不支持  
媒体-实时语音 | 支持  
文件 | 部分支持  
开放接口-客服消息 | 不支持  
开放接口-微信运动 | 不支持  
开放接口-卡券 | 不支持  
开放接口-视频号 | 不支持  
开放接口-微信客服 | 不支持  
设备-蓝牙 | 部分支持  
设备-游戏手柄 | 不支持  
设备-网络 | 不支持  
设备-屏幕 | 部分支持  
设备-加速计/罗盘/设备方向/陀螺仪 | 不支持  
设备-内存 | 不支持  
AI | 不支持  
Worker | 部分支持  
游戏对局回放 | 不支持  
游戏服务 | 部分支持  
第三方平台 | 不支持  
广告 | 不支持  
工具 | 不支持  
  
  * 具体API列表可以通过[鸿蒙暂未支持API列表](<https://docs.qq.com/sheet/DU3p0eHRReEJjWHFj?u=5cac1dced6374143bae854c3489834ce&no_promotion=1&is_blank_or_template=blank&tab=BB08J2>)自行检索，我们会持续更新
