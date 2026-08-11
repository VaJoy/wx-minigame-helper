---
title: "视频号直播"
type: guide
category: guide/open-ability/channels
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/channels-live.html
---

# 视频号直播

## 游戏内发起一键直播

基础库v2.19.0 开始支持该接口 

**1\. wx.startGameLive**

开发者可在游戏内设置一键开播入口，用户从游戏内发起一键开播到视频号

参数 | 类型 | 说明  
---|---|---  
query | string | 自定义query  
  
错误码：

errCode | 说明  
---|---  
-1 | 未知错误  
0 | 允许开播  
1 | 无权限，具体原因请看备注  
2 | 正在直播，不允许开播  
3 | 视频通话冲突，不允许开播  
4 | 相机冲突，不允许开播  
  
备注：无权限的可能错误情况 1、小游戏无权限：需在mp系统中申请权限。 2、设备版本过低： 2.1 微信版本号过低，安卓不得低于8.0.7，iOS不得低于8.0.6.6 2.2 手机系统过低，安卓设备版本号不得低于6，iOS不得低于“iphone8.3”
    
    
    // wx.startGameLive 接口需要用户产生点击行为后才能调用
    wx.onTouchEnd((result) => {
      console.log('onTouchEnd')
      wx.startGameLive({
        success(res) {
          console.log('startGameLive success', res)
        },
        fail(res) {
          console.error('startGameLive fail', res)
        }
      })
    })
    
    
    
    
    // 支持传入 query
    wx.startGameLive({
        query: 'a=1&b=2'
    })
    
    

**2\. wx.checkGameLiveEnabled**

检查用户是否有直播权限以及用户设备是否支持直播

参数 | 类型 | 说明  
---|---|---  
isEnabled | boolean | 用户是否有直播权限  
      
    
    wx.checkGameLiveEnabled({
       success(res) {
            console.log(res.isEnabled) // 当前用户是否有直播权限（true/false）
       }
    })
    
    

**3\. wx.onGameLiveStateChange**

监听小游戏直播状态变化事件

参数 | 类型 | 说明  
---|---|---  
state | string | 当前直播状态  
feedId | string | 当前直播id，只在 state 是 start 时会返回 (基础库v2.19.2开始支持)  
  
state 合法值：

state | 说明  
---|---  
menuClick | 用户点击右上角直播按钮  
start | 开始直播  
end | 直播结束  
  
另外，开发者可通过 wx.onGameLiveStateChange 设置观众从直播间打开小游戏的 query
    
    
    wx.onGameLiveStateChange((res) => {
        if (res.state === 'menuClick') {
           return {
               query: 'a=1&b=2'
           }
        }
    })
    
    

从基础库 v2.19.2 开始，开发者可以从开播回调中直接获取到本次直播id，示例代码：
    
    
    wx.onGameLiveStateChange((res) => {
        if (res.state === 'start') {
            console.log(res.feedId)
        }
    })
    
    

**4\. wx.offGameLiveStateChange**

取消监听直播状态变化事件，示例代码：
    
    
    // 监听直播状态变化事件
    wx.onGameLiveStateChange((res) => {
       console.log(res.state)
    })
    
    // 取消监听
    wx.offGameLiveStateChange()
    
    

**5\. wx.getGameLiveState**

查询当前直播状态

入参：无

参数 | 类型 | 说明  
---|---|---  
isLive | boolean | 是否正在直播  
  
示例代码：
    
    
    const state = wx.getGameLiveState()
    
    console.log(state.isLive)
    
    

**6\. wx.getUserCurrentGameliveInfo**

获取小游戏用户当前正在直播的信息（可查询当前直播的 feedId）

回调参数：

参数 | 类型 | 说明  
---|---|---  
feedId | string | 当前直播的id  
  
示例代码：
    
    
    wx.getUserCurrentGameliveInfo({
      success(res) {
        console.log(res.feedId)
      }
    })
    
    

**7\. wx.getUserRecentGameLiveInfo** 获取小游戏用户最近已结束的直播的信息（可查询最近已结束的直播的 feedId）

回调参数：

参数 | 类型 | 说明  
---|---|---  
feedIdList | Array.string | 最近几场直播的 feedId 列表  
  
示例代码：
    
    
    wx.getUserRecentGameLiveInfo({
      success(res) {
        // res.feedIdList === ['id1', 'id2', 'id3']
        console.log(res.feedIdList)
      }
    })
    
    

**8\. wx.getUserGameLiveDetails**

获取小游戏用户的已结束的直播数据

参数 | 类型 | 说明  
---|---|---  
feedIdList | Array.string | 要查询的直播的id  
  
回调参数：

参数 | 类型 | 说明  
---|---|---  
encryptedData | string | 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature>)  
iv | string | 加密算法的初始向量，详细见加密数据解密算法  
cloudID | string | 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据  
  
错误：

错误码 | 说明  
---|---  
-10000400 | 参数无效  
-10115001 | 存在未结束的直播  
  
encryptedData 解密后得到的数据结构：
    
    
    {
      watermark: {
        timestamp,
        appid
      },
      liveInfoList: [{
        feedId,                    // 直播id 
        description,               // 直播主题
        startTime,                 // 开播时间戳
        endTime,                   // 关播时间戳
        totalCheerCount,           // 主播收到的喝彩总数
        totalAudienceCount,        // 直播间总观众人数
        liveDurationInSeconds      // 直播总时长
      }]
    }
    
    

示例代码
    
    
    wx.getUserGameLiveDetails({
      feedIdList: ['id1', 'id2'],
      success(res) {
        console.log(res.encryptedData)
      }
    })
    
    

## 小程序跳转视频号直播间

从基础库 [2.15.0](<../../runtime/client-lib/compatibility.md>) 开始支持 

  1. 开发者首先通过[wx.getChannelsLiveInfo](<https://developers.weixin.qq.com/minigame/dev/api/open-api/channels/wx.getChannelsLiveInfo.html>)传入视频号id用于获取视频号直播信息，包括直播id（feedId与nonceId两个参数）与直播状态。其中直播状态含义如下：

  * status=2：直播中，此时返回的feedId与nonceId为当前直播id
  * status=3：直播已结束，此时返回的feedId与nonceId为最近一次直播id

  2. 获取直播信息后，开发者可以通过[wx.openChannelsLive](<https://developers.weixin.qq.com/minigame/dev/api/open-api/channels/wx.openChannelsLive.html>)打开视频号直播。若当前未在直播，则会跳转到最近一场直播的结束页。该接口使用限制如下：

  * 需要用户触发跳转，若用户未点击小程序页面任意位置，则开发者将无法调用此接口。
  * 需要用户确认跳转，在跳转至视频号直播前，将统一增加弹窗，询问是否跳转，用户确认后才可以跳转视频号直播。

## 小程序内发起预约视频号直播

若小程序与视频号的主体相同或为关联主体，可以跳转到视频号直播间或在小程序内发起视频号直播预约。

从基础库 [2.19.0](<../../runtime/client-lib/compatibility.md>) 开始支持 

  1. 开发者首先通过[wx.getChannelsLiveNoticeInfo](<https://developers.weixin.qq.com/minigame/dev/api/open-api/channels/wx.getChannelsLiveNoticeInfo.html>)传入视频号id用于获取视频号直播预告id（noticeId），若当前没有可预约的直播预告，将返回失败。

  2. 获取直播预告信息后，开发者可以通过[wx.reserveChannelsLive](<https://developers.weixin.qq.com/minigame/dev/api/open-api/channels/wx.reserveChannelsLive.html>)唤起预约弹窗，用户可以进行预约操作。成功唤起弹窗即为接口调用成功，通过state可以获取用户具体操作行为：

  * state = 1，正在直播中，用户点击“取消”拒绝前往直播
  * state = 2，正在直播中，用户点击“允许”前往直播
  * state = 3，预告已取消
  * state = 4，直播已结束
  * state = 5，用户此前未预约，在弹窗中未预约直播直接收起弹窗
  * state = 6，用户此前未预约，在弹窗中预约了直播
  * state = 7，用户此前已预约，在弹窗中取消了预约
  * state = 8，用户此前已预约，直接收起弹窗
  * state = 9，弹窗唤起前用户直接取消
  * state = 10，直播预约已过期

### 主体信息查询

小程序主体信息可通过小程序资料页-开发团队进行查询，视频号主体信息可通过视频号首页-认证进行查询。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/d73a69a2-ef60-4918-88be-42eff3bfc7af.png)

视频号id需通过[视频号助手](<https://channels.weixin.qq.com/login>)获取。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/e80e0280-17a1-41d9-84ef-bf1367de8f86.png)

### 主体判断逻辑

若小程序与视频号的主体相同，则可以调用相关接口。 若小程序与视频号的主体不同，需同时满足以下3个条件则可以调用相关接口：

  1. 小程序绑定了[微信开放平台](<https://open.weixin.qq.com>)账号
  2. 小程序与微信开放平台账号的关系为同主体或关联主体
  3. 微信开放平台账号的主体与关联主体列表中包含视频号的主体

### 使用规范

  1. wx.getChannelsLiveInfo与wx.getChannelsLiveNoticeInfo会调用到微信后台系统资源，为了保护系统，开发者请遵守[《接口调用频率规范》](<https://developers.weixin.qq.com/minigame/dev/guide/performance/api-frequency>)对接口做适度的频率限制，不能无节制地调用。
  2. 平台将坚决打击诱导跳转视频号直播、诱导预约视频号直播等行为，使用此功能时请严格遵守[《微信小程序平台运营规范》](<https://developers.weixin.qq.com/minigame/product/>)。

### 注意事项

  1. 该接口在开发版与体验版中均可调用。开发者在调试过程中，可以在视频号选择可见范围进行开播，方便测试。
  2. 若小程序与视频号主体信息不一致，会返回100008错误码。
  3. wx.getChannelsLiveInfo与wx.getChannelsLiveNoticeInfo回调函数不继承用户点击事件，无法在wx.getChannelsLiveInfo的success回调中再调用wx.openChannelsLive。
  4. 开发者工具暂未支持此能力，请先使用真机调试。
