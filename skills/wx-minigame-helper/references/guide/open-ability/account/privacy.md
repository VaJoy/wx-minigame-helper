---
title: "**小游戏隐私合规开发指南**"
type: guide
category: guide/open-ability/account
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/privacy.html
---

# **小游戏隐私合规开发指南**

### **一、功能介绍**

为规范开发者的用户个人信息处理行为，保障用户合法权益，小游戏平台提供了标准化用户隐私保护指引与标准的隐私授权上报接口。开发者可通过以下指引完善隐私保护指引的配置及曝光、用户授权结果的上报。

### **二、流程指引**

**步骤一 自查** ：是否有处理用户个人信息

  * 用户个人信息是指：以电子或者其他方式记录的与已识别或者可识别的自然人有关的各种信息，不包括匿名化处理后的信息，例如用户昵称、头像、手机号、微信朋友关系等。涉及小游戏平台为小游戏开发者提供的涉个人信息标准API范围详情可见2.1。

  * 处理行为：包括但不限于个人信息的收集、存储、使用、加工、传输、提供、公开、删除等。

**步骤二 配置隐私政策** ：隐私政策应完整披露用户个人信息的处理目的和方式

  * 如果自查没有处理任何用户个人信息，只需前往「MP设置-服务内容声明-用户隐私保护指引-确认承诺未处理用户任何信息」，无需关注后续流程。

  * 如果有处理用户个人信息，则需前往「MP设置-服务内容声明-用户隐私保护指引-更新」配置隐私政策，并按流程完成步骤三和步骤四。

**步骤三 C端隐私授权交互** ：该交互主要用于向用户曝光展示隐私政策，以获取用户同意

  * 自定义设置：开发者可以自定义设计更符合游戏风格的弹窗样式，包括但不限于点击按钮同意授权式、勾选同意授权式。示例如下图1，具体实现可见2.2.1。

![图1](https://res8.wxqcloud.qq.com.cn/wxdoc/ed05d08e-c8b7-4cb4-ad97-23e492258b16.png) 图1

  * 隐私弹窗组件：一种开发者可以自行选择适配的功能组件，该组件可在「MP后台-基本设置-隐私授权弹窗-设置」开启，无需其他操作。示例如下图2，具体介绍可见2.2.2。

![图2](https://res8.wxqcloud.qq.com.cn/wxdoc/6f4d03c6-ca54-4cb6-be7a-c33861b18307.png) 图2

**步骤四 上报用户授权信息**

  * 自定义设置的曝光、用户同意隐私政策与否都需要上报小游戏平台，以正常调用用户数据接口。具体上报实现可见2.2.1。

### **2.1 用户隐私保护指引设置**

#### **2.1.1 标准API处理用户个人信息**

请检查小游戏开发配置时是否使用以下接口或组件(标准API)，接口及代码对应查询见下表。

表1 用户信息类型

**用户信息类型** | **接口或组件**  
---|---  
昵称、头像 | wx.getUserInfo、wx.getUserProfile、wx.createUserInfoButton  
位置信息 | wx.authorize({scope:'scope.userLocation'})、wx.authorize({scope: 'scope.userLocationBackground'})、wx.getLocation、wx.getFuzzyLocation  
微信运动步数 | wx.authorize({scope: 'scope.werun'})、wx.getWeRunData  
选中的照片或视频信息 | wx.chooseImage、wx.chooseMedia  
选中的文件 | wx.chooseMessageFile  
麦克风 | wx.authorize({scope: 'scope.record'})、wx.startRecord、RecorderManager.start、wx.joinVoIPChat  
摄像头 | wx.authorize({scope: 'scope.camera'})、wx.createVKSession、wx.createCamera  
蓝牙 | wx.openBluetoothAdapter、wx.createBLEPeripheralServer  
相册（仅写入）权限 | wx.authorize({scope: 'scope.writePhotosAlbum'})、wx.saveImageToPhotosAlbum  
微信朋友关系 | wx.getFriendCloudStorage 、wx.getGroupCloudStorage 、wx.getGroupInfo 、wx.getPotentialFriendList 、wx.getUserCloudStorageKeys 、GameServerManager.getFriendsStateData、wx.getUserInteractiveStorage、wx.removeUserCloudStorage、wx.setUserCloudStorage、OpenDataContext中的wx.getUserInfo、OpenDataContext中的wx.getUserCloudStorage、OpenDataContext中的wx.setUserCloudStorage、OpenDataContext中的wx.removeUserCloudStorage  
游戏社区数据 | wx.getGameClubData  
直播数据 | wx.getChannelsLiveInfo  
加速传感器 | wx.startAccelerometer  
磁场传感器 | wx.startCompass  
方向传感器 | wx.startDeviceMotionListening  
陀螺仪传感器 | wx.startGyroscope  
剪切板 | wx.setClipboardData、wx.getClipboardData  
  
**注意** ：**若使用到上述接口，建议兼容用户拒绝授权信息的情况，避免影响用户线上体验。**

#### **2.1.2 非标准API处理用户个人信息**

泛指游戏内所有通过非wx API的方式处理用户个人信息的行为。如游戏内通过自定义表单处理用户个人信息，需要开发者自行适配，并在处理用户信息之前的任意时机通过调用请求用户同意隐私政策。

#### **2.1.3 用户隐私保护声明**

以上两类方式处理的用户个人信息均需要在《用户隐私保护指引》中进行合规披露。即使用对应的小游戏账号登录mp.weixin.qq.com（后文简称MP后台），在“**设置-基本设置-用户隐私保护指引** ”中完成用户隐私保护指引填写。更多详情可见[小游戏《用户隐私保护指引》合规披露指南 | 微信开放社区](<https://developers.weixin.qq.com/community/minigame/doc/0004c84925817819b7ffd8b2356008>)

![](https://res8.wxqcloud.qq.com.cn/wxdoc/fb2b667a-a88f-4d7e-8f1b-c3d81652f265.png)

**注意** ：

  1. 通过非标准API的方式处理用户个人信息的行为也需要进行声明，即通过“增加其他自定义信息类型”进行披露。

  2. 指引最终审核通过后，小游戏平台会形成一份《小程序隐私保护指引》的文档，在小游戏的介绍页等处提供入口供用户查阅，以及在游戏内开放了wx.openPrivacyContract的能力，开发者可以在合适的时机通过该API展示指引内容给用户，见2.2的进一步说明。

### **2.2 隐私政策规范设置**

在游戏内的恰当时机（此时机须在处理用户个人信息之前）展示隐私政策，询问用户意见的过程，本文档称之为“隐私政策规范设置”。

**隐私政策规范设置实现形式**

#### **2.2.1 自定义设置**

开发者可以自定义实现隐私政策规范设置，只需要与小游戏平台进行一定的信息同步即可。参考样式和具体步骤如下：

**（1）注册实现自定义隐私弹窗的回调函数**

即通过 wx.onNeedPrivacyAuthorization传入回调函数的方式来实现自定义模式。
    
    
    wx.onNeedPrivacyAuthorization(resolve => {
      // ------ 自定义设置逻辑 ------ 
      // TODO：开发者弹出自定义的隐私弹窗（如果是勾选样式，开发者应在此实现自动唤出隐私勾选页面）
      // 页面展示给用户时，开发者调用 resolve({ event: 'exposureAuthorization' }) 告知平台隐私弹窗页面已曝光
      // 用户表示同意后，开发者调用 resolve({ event: 'agree' }) 告知平台用户已经同意，resolve要求用户有过点击行为。
      // 用户表示拒绝后，开发者调用 resolve({ event: 'disagree' }) 告知平台用户已经拒绝，resolve要求用户有过点击行为。
      // 是否需要控制间隔以及间隔时间，开发者可以自行实现
      // 勾选样式应以用户确认按钮的点击为准，无需每次勾选都上报
      // 如果需要主动弹窗见wx.requirePrivacyAuthorize
    })
    
    // 弹窗界面需带上《隐私保护指引》的链接，点击后调用wx.openPrivacyContract打开指引详情
    
    wx.openPrivacyContract({
      success: () => {}, // 打开成功
      fail: () => {}, // 打开失败
      complete: () => {}
    })
    

**注意：**

  1. **隐私弹窗页面曝光、用户同意、用户拒绝** 需上报小游戏平台，具体上报时机见示例图3
  2. 隐私政策链接必须使用**wx.openPrivacyContract** 接口打开，具体展示见示例图3

![图3](https://res8.wxqcloud.qq.com.cn/wxdoc/7e85de98-78ea-4e50-9206-706428744a21.png) 图3

**（2）主动展示弹窗请求用户同意**

**弹窗时机**

在调用相关接口之前如果没有获得用户同意，基础库会主动弹出曝光自定义弹窗以获取用户的同意授权（“非标准API”需要开发者自行适配）。开发者可以自行在处理用户个人信息之前选择任意合适时机拉起隐私弹窗以获取用户的同意授权。
    
    
    // 调用wx.requirePrivacyAuthorize拉起自定义隐私弹窗
    // 若用户已同意且隐私政策无变更则直接跳过用户确认阶段进入success回调，否则需要拉起隐私弹窗，请求用户确认（通过调用wx.onNeedPrivacyAuthorization注册的回调函数来拉起自定义的隐私弹窗），用户同意后才进入success回调
    
    wx.requirePrivacyAuthorize({
      success: res => {
      // 进入success回调说明用户已同意隐私政策
      // TODO：非标准API的方式处理用户个人信息
      },
      fail: () => {
      // 进入fail回调说明用户拒绝隐私政策
      // 游戏需要放弃处理用户个人信息，同时不要阻断游戏主流程
      },
      complete() 
    }) 
    

**注意：若用户拒绝隐私政策，建议做好用户兼容，避免阻断游戏进程。**

#### **2.2.2 隐私弹窗组件**

**（1） 隐私弹窗组件开启方式及样式**

小游戏平台提供了一种小游戏开发者可以自行选择适配的功能组件，用于辅助实现隐私政策规范设置，开发者需要在 **MP后台-基本设置-隐私授权弹窗** 设置开启。该组件将在弹出后征求用户同意，并仅在用户同意后才会允许开发者调用相关API。

**（2） 主动展示弹窗请求用户同意**

**弹窗时机**

开发者可以自行选择弹窗组件的调用时机。如开发者未设置，则弹窗组件会在首次调用标准API时自行弹出，若新增声明某用户信息接口，会再次弹出（“非标准API”需要开发者自行适配）。开发者可以自行在处理用户个人信息之前选择任意合适时机拉起隐私弹窗以获取用户的同意授权。
    
    
    // 调用wx.requirePrivacyAuthorize拉起弹窗组件
    // 若用户已同意且隐私政策无变更则直接跳过用户确认阶段进入success回调，否则需要拉起隐私弹窗，请求用户确认，用户同意后才进入success回调
    
    wx.requirePrivacyAuthorize({
      success: res => {
      // 非标准API的方式处理用户个人信息
      },
      fail: () => {},
      complete: () => {}
    })
    

**（3）配置弹窗间隔时间**

对于弹窗组件，如果用户拒绝，则在拒绝之后的x秒内，都不会再唤起，此间隔时间可由开发者在 game.json 的 **officialPrivacyAuthorizationShowingGap** 字段配置，默认间隔时间为10秒，开发者配置小于10秒不生效。

当x秒后，再次调用隐私接口时，会重新弹窗询问用户是否同意。
    
    
    // game.json
    {
        officialPrivacyAuthorizationShowingGap: 60 // 隐私弹窗组件最小间隔时间，单位s
    }
    

**特别注意** ：该组件一经启用无法关闭，如开发者通过2.2.1自定义弹窗完成了隐私政策规范设置并通过小游戏平台审核，则本功能将不再被调用。

### **2.3 报错提示信息**

表2 报错提示信息

**报错提示信息**| **自查自测**  
---|---  
**errno**| **errMsg**  
104| privacy permission is not authorized| 用户未同意隐私政策授权  
click action before resolve is needed（仅自定义弹窗有）| 小游戏中需要有点击行为，才可进行用户同意之后的逻辑  
privacy permission is not authorized in gap（仅弹窗组件有）| 用户点击不同意后，隐私弹窗不弹出的间隔期间，调用隐私接口报错  
112| api scope is not declared in the privacy agreement| 未在MP后台《用户隐私保护指引》声明该项用户信息类型的使用  
1025/1026| please go to mp to announce your privacy usage| 未在MP后台《用户隐私保护指引》声明任何一项用户信息类型的使用或者声明未使用任何用户信息  
please implement the privacy pop-up feature| 未实现隐私弹窗功能，可参看2.2.1或2.2.2实现  
  
相关阅读：

完整指引流程图

![完整指引流程图](https://res8.wxqcloud.qq.com.cn/wxdoc/ad02c975-5009-4ac9-b5c8-89b5c76e0e45.png)

[小游戏用户隐私保护开发者指引 | 微信开放社区](<https://developers.weixin.qq.com/community/minigame/doc/0000c40f70c100740fffd721c5b811>)

[小游戏《用户隐私保护指引》合规披露指南 | 微信开放社区](<https://developers.weixin.qq.com/community/minigame/doc/0004c84925817819b7ffd8b2356008?blockType=2>)
