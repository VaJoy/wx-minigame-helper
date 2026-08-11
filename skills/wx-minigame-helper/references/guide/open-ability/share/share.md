---
title: "转发"
type: guide
category: guide/open-ability/share
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/share.html
---

# 转发

用户在使用小游戏过程中，可转发消息给其他用户或群聊。

## 转发菜单

点击右上角按钮，会弹出菜单，菜单中的“转发”选项**默认不可点击** 。通过 [wx.showShareMenu()](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.showShareMenu.html>) 和 [wx.hideShareMenu()](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.hideShareMenu.html>) 可动态显示、隐藏这个选项。

如果你想要分享转发你的小游戏，请主动调用`wx.showShareMenu`：
    
    
    wx.showShareMenu({
      menus: ['shareAppMessage', 'shareTimeline']
    })
    

## 被动转发

用户点击右上角菜单中的“转发”选项后，会触发转发事件，如果小游戏通过 [wx.onShareAppMessage()](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.onShareAppMessage.html>) 监听了这个事件，可通过返回自定义转发参数来修改转发卡片的内容，否则使用默认内容。
    
    
    wx.onShareAppMessage(function () {
      // 用户点击了“转发”按钮
      return {
        title: '转发标题'
      }
    })
    

## 主动转发

游戏内可通过 [wx.shareAppMessage()](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.shareAppMessage.html>)接口直接调起转发界面，与被动转发类似，可以自定义转发卡片内容。
    
    
    wx.shareAppMessage({
      title: '转发标题'
    })
    

## 使用 Canvas 内容作为转发图片

如果不指定转发图片，默认会显示一个小程序的 logo。如果希望转发的时候显示 Canvas 的内容，可以使用 [Canvas.toTempFilePath()](<https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.toTempFilePath.html>) 或 [Canvas.toTempFilePathSync()](<https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.toTempFilePathSync.html>) 来生成一张本地图片，然后把图片路径传给 `imageUrl` 参数。

**转发出来的消息卡片中，图片的最佳显示比例是 5：4** 。
    
    
    wx.onShareAppMessage(function () {
      return {
        title: '转发标题',
        imageUrl: canvas.toTempFilePathSync({
          destWidth: 500,
          destHeight: 400
        })
      }
    })
    

## 使用审核通过的转发图片

### 定义

开发者可以将转发图片提前通过 MP 系统上传，并由平台进行审核。审核通过的图片会下发对应的图片编号和图片地址，给到开发者调用。（图片编号和图片地址必须一起使用，缺一不可） **注：审核通过的图片，并不完全代表无任何问题，线上的转发行为依然会受平台监管，请开发者遵守运营规范相关要求。**

### 调用

在转发 [wx.shareAppMessage](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.shareAppMessage.html>) 和 [wx.onShareAppMessage](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.onShareAppMessage.html>) 接口中，传入 `imageUrlId` 和 `imageUrl` 参数。
    
    
    var id = '' // 通过 MP 系统审核的图片编号
    var url = '' // 通过 MP 系统审核的图片地址
    wx.shareAppMessage({
      imageUrlId: id,
      imageUrl: url
    })
    
    wx.onShareAppMessage(function () {
      return {
        imageUrlId: id,
        imageUrl: url
      }
    })
    

### 申请

  1. 登录MP管理后台后，在「游戏能力地图 - 运营素材管理 - 分享图片」中完成配置

![](https://res8.wxqcloud.qq.com.cn/wxdoc/cefd8608-2b9d-4b85-8e66-d7545ed7024f.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/20aedb4a-c930-44d1-ad94-af083fc40cc2.png)

  2. 完成提交后，需要等待审核通过才能生效

  3. 过审图片会生成图片编号和图片地址，开发者需要同时调用图片编号和图片地址才能使得转发图生效

## 获取更多转发信息

通过 [wx.updateShareMenu](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.updateShareMenu.html>) 接口可修改转发属性。如果设置 `withShareTicket` 为 `true` ，会有以下效果

  1. 选择联系人的时候只能选择一个目标，不能多选
  2. 消息被转发出去之后，在会话窗口中无法被长按二次转发
  3. 消息转发的目标如果是一个群聊，则每次用户从这个消息卡片进入的时候，会获得一个 `shareTicket`，通过调用 [wx.getShareInfo()](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.getShareInfo.html>) 接口传入 `shareTicket` 可以获取群相关信息
  4. 如何获得 `shareTicket`：[wx.getEnterOptionsSync()](<https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.getEnterOptionsSync.html>) 或者 [wx.onShow](<https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onShow.html>)

修改这个属性后，同时对主动转发和被动转发生效。
    
    
    // 设置 withShareTicket: true
    wx.updateShareMenu({
      withShareTicket: true
    })
    

## 群待办消息

微信7.0.12开始，支持群主转发小程序时同时把消息设为该群的群待办消息，群待办消息会以气泡形式出现在聊天窗口底部。

默认每次转发一个群待办消息，都会生成一个待办消息气泡。通过 [wx.updateShareMenu](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.updateShareMenu.html>) 接口修改`toDoActivityId`属性可以把多个待办消息聚合为同一个，即转发相同`toDoActivityId`的群待办消息，只会出现一个待办消息气泡。

`toDoActivityId`需要在转发前通过 [updatableMessage.createActivityId](<https://developers.weixin.qq.com/minigame/dev/api-backend/updatable-message/api_createactivityid>) 接口创建。
    
    
    wx.updateShareMenu({
      toDoActivityId: 'xxx' // 转发前通过后台接口获取
    })
