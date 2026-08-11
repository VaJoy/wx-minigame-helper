---
title: "聊天工具"
type: guide
category: guide/open-ability/community
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/chat-tool.html
---

# 聊天工具

> 可前往 MP能力地图-社交能力-聊天工具 申请开通

## 一、功能介绍

聊天工具模式是为了帮助小游戏更好与微信聊天结合而推出的模式，可用于实现 群任务、群 PK、群抽奖 等功能。其与小游戏普通模式相比开放更多与聊天紧密结合的能力：

  1. 聊天成员相关能力：开发者可调用聊天成员选择器并获取成员相关id，通过开放数据域渲染聊天成员的头像昵称

  2. 发送内容到聊天能力：开发者可发送文本、提醒、图片、表情、视频等内容类型到聊天中

  3. 动态消息能力：小程序卡片上的辅标题可以动态更新，在用户完成/参与了活动后下发系统消息

![](https://mmgame.qpic.cn/image/1af7f26322f8f5c65fbcf74620e3d0e9911d1e27ff2888a562028947c616091e/0)

开发者可通过「小游戏示例-接口Tab-聊天工具」入口体验平台推出的Demo & 下载示例代码

![](https://mmgame.qpic.cn/image/a66f1d2c1a78319f7a0d27ae5e8868a47ccc398afe48d0725efeea7fef86d9b6/0)

## 二、开发指南

从基础库 3.7.12 开始支持

支持平台：**Android：微信8.0.56及以上版本、iOS：微信8.0.56及以上版本**

### 1.聊天工具模式的进入与退出

#### 1.1.进入聊天工具模式

聊天工具模式在进入时需要绑定一个微信单聊或群聊的聊天室，目前有三种进入方式：

  1. 当小程序处于普通模式时，开发者调用 [wx.openChatTool](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.openChatTool.html>) 但不传入聊天室`id`，微信会拉起聊天列表让用户选择，用户选择后绑定聊天室进入聊天工具模式

  2. 当小程序处于普通模式时，开发者调用 [wx.openChatTool](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.openChatTool.html>) 并在接口中传入聊天室`id`（群聊为`opengid`，单聊为`open_single_roomid`），会直接绑定该聊天室进入

  3. 用户在聊天工具模式里发送各种类型内容到绑定的聊天后，当用户从同一个聊天的这些内容入口再此回到小程序中，会使用聊天工具模式打开，此时绑定的聊天不变

#### 1.2.退出聊天工具模式

调用 [wx.exitChatTool](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.exitChatTool.html>) 即可退出聊天工具模式

#### 1.3 聊天工具模式的判定

开发者 可以通过 [wx.isChatTool](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.isChatTool.html>) 函数返回值，判断当前是否处于聊天模式。该函数返回值为 boolean

### 2.聊天成员相关能力

#### 2.1.获取聊天相关id接口

聊天工具模式下有以下3种id信息：

  1. opengid：微信群的唯一标识`id`

  2. open_single_roomid：单聊的唯一标识`id`

  3. group_openid：微信用户在此聊天室下的唯一标识，同一个用户在不同的聊天室下`id`不同

相关接口如下：

  1. [wx.getGroupEnterInfo](<https://developers.weixin.qq.com/minigame/dev/api/open-api/group/wx.getGroupEnterInfo.html>) 进入聊天工具模式前，获取群聊`id`信息

  2. [wx.getChatToolInfo](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.getChatToolInfo.html>) 进入聊天工具模式后，获取群聊`id`信息

这两个接口的区别在于在聊天工具模式内，推荐用 [wx.getChatToolInfo](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.getChatToolInfo.html>) 获取绑定群相关信息即可。在进入聊天工具模式之前，例如从群聊会话卡片打开小程序，此时希望复用卡片所在的群聊，可通过 [wx.getGroupEnterInfo](<https://developers.weixin.qq.com/minigame/dev/api/open-api/group/wx.getGroupEnterInfo.html>) 获取卡片所在群的 `opengid`, 并在 [wx.openChatTool](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.openChatTool.html>) 时传入，此时可不唤起群选择列表，直接进入。

#### 2.2.选择聊天成员接口

开发者可调用 [wx.selectGroupMembers](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.selectGroupMembers.html>) 让用户选择聊天室的成员，并返回选择成员的`group_openid`。需要注意的是，若当前聊天室为单聊，则直接返回对方用户的`group_openid`，不再拉起选择器。

#### 2.3.渲染聊天成员的头像昵称

在开放数据域调用 [wx.getGroupMembersInfo](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupMembersInfo.html>) 可获取聊天成员的头像昵称

### 3.发送到聊天能力

可将小程序卡片、提醒消息、文本、图片、表情发送到聊天中，相关接口如下：

  1. [wx.shareAppMessageToGroup](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.shareAppMessageToGroup.html>): 将小程序卡片发送到绑定的聊天室

  2. [wx.notifyGroupMembers](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.notifyGroupMembers.html>): 提醒用户完成任务，发送的内容将由微信拼接为：@的成员列表+“请完成：”/"请参与："+打开小游戏的文字链，如「@alex @cindy 请完成：团建报名统计」

  3. [wx.shareTextToGroup](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.shareTextToGroup.html>): 将文本内容发送到绑定的聊天室

  4. [wx.shareImageToGroup](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.shareImageToGroup.html>): 将图片发送到绑定的聊天室

  5. [wx.shareEmojiToGroup](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.shareEmojiToGroup.html>): 将表情发送到绑定的聊天室

  6. [wx.shareVideoToGroup](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.shareVideoToGroup.html>): 将视频发送到绑定的聊天室

### 4.动态消息能力

在聊天模式下，通过 [wx.shareAppMessageToGroup](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.shareAppMessageToGroup.html>) 发送的小程序卡片，可以获得动态消息能力，用户表现包括：

1、小程序卡片上的辅标题可以动态更新

2、可以在聊天中下发系统消息，内容为：成员A+“完成了”/"参与了"+成员B+“发布的”+打开小程序的文字链，如「alex 完成了 cindy 发布的 团建报名统计」

![](https://mmgame.qpic.cn/image/355aa100d2850424466056030116c674e93a3bb9325eda4bea89ceea7a19ad33/0)

#### 4.1.创建activity_id

服务端通过 [创建activity_id接口](<https://developers.weixin.qq.com/minigame/dev/api-backend/updatable-message/api_createactivityid>) 创建`activity_id` 声明分享卡片为动态消息

#### 4.2.声明分享卡片为动态消息

前端在调用 [wx.shareAppMessageToGroup](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.shareAppMessageToGroup.html>) 前，通过 [wx.updateShareMenu](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.updateShareMenu.html>) ，声明要分享的卡片为动态消息，请求参数如下

**注意事项：**

  1. useForChatTool 为 true 时，chooseType 和 participant 才会生效

  2. chooseType = 1，表示按指定的 participant 当作参与者

  3. chooseType = 2，表示群内所有成员均为参与者（包括后加入群）

代码示例
    
    
    wx.updateShareMenu({
            withShareTicket: true,
            isUpdatableMessage: true,
            activityId: 'xxx',
            useForChatTool: true,
            chooseType: 1,
            participant: that.data.members,
            templateInfo: {
              templateId:    '4A68CBB88A92B0A9311848DBA1E94A199B166463'
            },
    )
    
    

有 2 个模版可使用，模版区别（`target_state`与`participator_state`含义见第三布）：

templateId | 4A68CBB88A92B0A9311848DBA1E94A199B166463 | 2A84254B945674A2F88CE4970782C402795EB607  
---|---|---  
动态消息发布者在小程序卡片中看到的辅标题 | target_state=1或2：X人已完成；  
target_state=3：已结束 | target_state=1或2：X人已参与；  
target_state=3：已结束  
参与者在小程序卡片中看到的辅标题 | **participator_state=0时：**  
target_state=1：未完成，  
target_state=2：即将截止，  
target_state=3：已结束；  
**participator_state=1时：**  
target_state=1或2：已完成，  
target_state=3：已结束  
| **participator_state=0时：**  
target_state=1：未参与，  
target_state=2：即将截止，  
target_state=3：已结束；  
**participator_state=1时：**  
target_state=1或2：已参与，  
target_state=3：已结束。  
非参与者在小程序卡片中看到的辅标题 | target_state=1或2：你无需完成；  
target_state=3：已结束 | target_state=1或2：你无需参与；  
target_state=3：已结束  
参与者变为完成态下发的系统消息文案 | aaa 已完成 bbb 发布的 XXX | aaa 已参与 bbb 发布的 XXX  
活动状态变成已结束 | bbb发布的xxx已结束 | bbb发布的xxx已结束  
  
#### 4.3.更新活动状态或用户完成情况

服务端通过 [setChatToolMsg](<https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/updatable-message/api_setchattoolmsg>) 接口更新活动状态活用户完成情况。也可通过云开发 chattoolmsg.send 接口调用更新

调用示例：
    
    
    //变更单个成员状态，会触发提醒「 aaa 已参与 bbb 发布的 xxxx 」
    {
        "activity_id": "xxx",
        "target_state":1,
        "version_type": 0,
        "participator_info_list": [
            {
                "group_openid": "aaa",
                "state": 1
            },
            {
                "group_openid": "bbb",
                "state": 1
    
            }
        ]
    }
    //变更动态消息状态，会触发提醒「 bbb 发布的 xxxx 已结束」
    {
        "activity_id": "xxx",
        "target_state":3,
        "version_type": 0,
    }
    
    

### 5.聊天工具模式内禁用的能力

以下能力暂不支持聊天工具模式下使用，请开发者做好适配。

聊天工具模式禁用普通转发能力，请使用上文「发送到聊天能力开放」中的接口实现分享功能

聊天工具模式希望服务尽可能闭环在小游戏中，外跳类接口暂不支持使用：

  * navigateToMiniProgram
  * openChannelsIsLive
  * openChannelsIsEvent
  * openChannelsActivity
  * openChannelsUserProfile

**聊天工具模式暂不支持广告**
