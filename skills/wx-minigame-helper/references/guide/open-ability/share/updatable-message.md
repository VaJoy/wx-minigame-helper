---
title: "动态消息"
type: guide
category: guide/open-ability/share
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/updatable-message.html
---

# 动态消息

## 动态消息

游戏内的转发消息，可升级为「动态消息」。动态消息 对比 普通转发消息，有以下特点：

1.动态消息，可添加副标题。用户转发出去后，开发者可以通过后台，更新副标题。

2.开发者 可通过后台修改用户状态，推送 系统提醒 给用户

![](https://mmgame.qpic.cn/image/355aa100d2850424466056030116c674e93a3bb9325eda4bea89ceea7a19ad33/0) ![](https://mmgame.qpic.cn/image/ec7a67c6c15a114fa3b7674308193fba4264c76be81f82cfbdae1437eeb4d79d/0)

### 聊天模式的动态消息

基础库 3.7.12 开始支持，从 **聊天模式** 中 通过[wx.shareAppMessageToGroup](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.shareAppMessageToGroup.html>)发送的小程序卡片，可以获得动态消息能力，用户表现包括：

1、小程序卡片上的辅标题可以动态更新

2、可以在聊天中下发系统消息，内容为：成员A+“完成了”/"参与了"+成员B+“发布的”+打开小程序的文字链，如「alex 完成了 cindy 发布的 团建报名统计」

![](https://mmgame.qpic.cn/image/355aa100d2850424466056030116c674e93a3bb9325eda4bea89ceea7a19ad33/0)

#### 使用方法

**第一步：创建activity_id**

服务端通过 创建activity_id接口 [创建activity_id]api_create_activityid 声明分享卡片为动态消息

**第二步：声明分享卡片为动态消息**

前端在调用[wx.shareAppMessageToGroup](<https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.shareAppMessageToGroup.html>) 前，通过 [wx.updateShareMenu](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.updateShareMenu.html>) ，声明要分享的卡片为动态消息，请求参数如下

注意事项：

1.useForChatTool 为 true 时，chooseType 和 participant 才会生效

2.chooseType = 1，表示按指定的 participant 当作参与者

3.chooseType = 2，表示群内所有成员均为参与者（包括后加入群）
    
    
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
  
**第三步：更新活动状态或用户完成情况**

服务端通过 [setChatToolMsg](<https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/updatable-message/api_setchattoolmsg>) 接口更新活动状态活用户完成情况。也可通过云开发 `chattoolmsg.send` 接口调用更新 调用示例：
    
    
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
    
    

### 非聊天模式的动态消息

基础库 2.4.0 开始支持。卡片可更新已参与人数 和状态。同时，当用户转发消息到会话后，可通过「提醒我」房间游戏开始提醒。

![](https://mmgame.qpic.cn/image/ec7a67c6c15a114fa3b7674308193fba4264c76be81f82cfbdae1437eeb4d79d/0)

#### 消息状态

消息有两个状态，对应游戏房间状态，分别有其对应的文字内容和颜色。其中状态 0 可以转移到状态 0 和 1，状态 1 无法再转移。

状态 | 文字内容 | 颜色 | 允许转移的状态  
---|---|---|---  
0 | 成员正在加入，当前 {member_count}/{room_limit} 人 | #FA9D39 | 0, 1  
1 | 已开始 | #CCCCCC | 无  
  
#### 状态转移参数

每个状态转移的时候可以携带参数，具体参数说明如下。

参数 | 类型 | 说明  
---|---|---  
member_count | string | 状态0时有效，文字内容模板中`{member_count}`的值  
room_limit | string | 状态0时有效，文字内容模板中`{room_limit}`的值  
path | string | 状态1时有效，点击「进入」启动小程序时使用的路径。小游戏场景下可用于传递查询字符串（如 `"?foo=bar"`）  
version_type | string | 状态1时有效，点击「进入」启动小程序时使用的版本。有效值：`develop`（开发版）、`trial`（体验版）、`release`（正式版）  
  
#### 使用方法

**第一步：创建 activity_id**

每条动态消息可以理解为一个活动，活动发起前需要通过 [wx.updateShareMenu](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.updateShareMenu.html>) 接口创建 `activity_id`。后续转发动态消息以及更新动态消息都需要传入这个 `activity_id`。

活动的默认有效期是 24 小时。活动结束后，消息内容会变成统一的样式：

●文字内容：“已结束”

●文字颜色：#00ff00

**第二步：在转发之前声明消息类型为动态消息**

通过调用 [wx.updateShareMenu](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.updateShareMenu.html>) 接口，传入 `isUpdatableMessage: true`，以及 `templateInfo`、`activityId`参数。其中 `activityId` 从步骤一中获得。
    
    
    wx.updateShareMenu({
      withShareTicket: true,
      isUpdatableMessage: true,
      activityId: '', // 活动 ID
      templateInfo: {
        parameterList: [{
          name: 'member_count',
          value: '1'
        }, {
          name: 'room_limit',
          value: '3'
        }]
      }
    })
    
    

**第三步：修改动态消息内容**

动态消息发出去之后，可以通过 [updatableMessage.setUpdatableMsg](<https://developers.weixin.qq.com/minigame/dev/api-backend/updatable-message/api_setupdatablemsg>) 修改消息内容。

### 低版本兼容

对于不支持动态消息的客户端版本，收到动态消息后会展示成普通消息
