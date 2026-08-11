---
title: "给朋友送道具"
type: guide
category: guide/open-ability/share
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share-gift.html
---

# 给朋友送道具  
  
## 功能说明

> 基础库最低版本 v3.11.2

给朋友送道具是小游戏官方提供的轻量化好友互动送道具组件。游戏内，提供用户给微信朋友批量赠送或领取道具礼包功能；游戏外「服务通知」的社交形式增加回流触达

### 1.赠送道具给朋友

游戏内 开放数据域 开发者可选择 开放数据域自定义赠送界面样式 或 直接拉取平台组件；

![](https://mmgame.qpic.cn/image/a6373c7f2e2167539836ff404673da6091893322ba2abacd247b16b1e2d00862/0) ![](https://mmgame.qpic.cn/image/63960870fb45abd0b6b8ee45dd78122e9d9b64a49dd68a59c94d2fbb47c993a8/0)

### 2.领取朋友赠送的道具

**用户可以在以下渠道，领取朋友赠送的道具**

1）小程序右上角菜单「福利」入口内

2）游戏自行设置入口，打开平台福利半屏页面。

​​ 可同时监听平台事件，出提醒红点，当符合“有礼物待领取”的用户主动进入游戏，开发者可以「游戏内跑马灯」或「入口气泡」提供游戏内承接。

![](https://mmgame.qpic.cn/image/c5d92bce9871d079e398faedf17d51f2de2051b56bc95944bab6e58698f88416/0)

**道具领取限额**

有效期：已赠送道具有效期为48小时；

每日上限：开发者可在[1,10]范围内自定义每个用户每日领取道具上限；

**领取通知**

送道具功能支持以社交形式增加回流触达——当用户收到好友赠送的道具，平台将以服务通知形式，在游戏外触达已订阅用户。开发者需在游戏内设置任务，通过 [wx.requestSubscribeSystemMessage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeSystemMessage.html>) 引导用户订阅「朋友互动提醒」

### 3.送道具任务

开发者可选配置每日送道具任务礼包，以此激励用户每日主动赠送行为，获得更多通知触达曝光与回流机会；

送道具任务礼包领取规则：用户每日送道具达5人，即可在菜单-福利界面领取一份当日送道具任务礼包。

![](https://mmgame.qpic.cn/image/43fe434e845e81bc60a9762719f9b434efd1d3110f795613f54c06da6c74e717/0)

## 接入步骤

### 1.MP 配置礼包

配置位置：mp地图 → 运营功能管理 → 奖励配置 → 游戏礼包管理 → 礼包配置。[礼包接入文档](<../growth/game-gift.md>)

  * 礼包类型1：给朋友送道具

​​ 用于每日好友互动赠送。开发者可在范围[ 1, 10 ]内自定义「用户单日限制」，规定单个用户每日领取上限。配置完成后，平台将自动展示配置礼包中 首个道具icon作为组件中赠送的礼包icon。

  * 礼包类型2：送道具任务礼包（可选配置）

​​ 用于激励用户每日赠送行为。配置完成后，平台将自动展示配置礼包中首个道具icon作为组件中送道具任务礼包的icon。用户在完成每日5次道具赠送后，当日可领取一次礼包。

### 2.开发接入实现

#### 1）道具赠送

**接入方式1-平台组件：调用[PageManager](<https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/wx.createPageManager.html>)拉取送道具组件**
    
    
    // 示例代码
    let pageManager = wx.createPageManager();
    pageManager.load({
      openlink: 'ZmNux0GwB1lH3lpraFJCGrHX5ex5aYVqrqi0Z8870fK-mygTZ2y5kuPlXMyf37Stc78m3CtMvHJlO5WTsJnIkoVfMW8GrUDd2W5Mb81f23ydxCJzcSi_wf8YtFE-WME3', // 通过该固定openlink，打开平台送道具组件
    }).then(res => {
      pageManager.show();
    });
    
    

**接入方式2-开放数据域：**

从基础库 v3.11.2 开始，基础库在开放数据域新增了[wx.getFriendSendGiftStatus](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getFriendSendGiftStatus.html>) 、[wx.sendGiftToFriend](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.sendGiftToFriend.html>) 两个接口使开发者能够接入上述赠送道具能力。
    
    
    // 注意做好 API 兼容性判断，低版本不存在该接口
    if (wx.getFriendSendGiftStatus) {
        // step① 批量查询好友的送礼状态，openidList 可以是来自 getFriendCloudStorage 查询到的好友列表
         wx.getFriendSendGiftStatus({
            giftId: 'xxxxxxx', // 礼包 id
            openidList: ['xxxx', 'xxxx']
            success(res) {
                // 根据状态渲染好友榜单，比如已经赠送的好友显示“已赠送”按钮
            }
        });
    }
    
    if (wx.sendGiftToFriend) {
        // step② 点击好友的赠送按钮，发起赠送操作
        wx.sendGiftToFriend({
          giftId: 'xxxxx',
          openid: 'xxxxx',
          success(res) {
            console.log('send success', res);
            // 刷新已赠送的状态
          },
          fail: console.error,
        });
    }
    
    

#### 2）游戏内入口，领取朋友赠送的道具

通过[PageManager.on(string eventName, function callback)](<https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/PageManager.on.html>) 接口监听 getGiftStatus 事件，可做游戏内入口承接；根据礼包道具领取发货情况，主动刷新该用户道具数量。
    
    
    let pageManager = wx.createPageManager();
    pageManager.load({
      openlink: 'OAlx0CJihzz1pDQQNr9_GZ7fE43wOxBJTreaTcShoIbkZFfBl3K8bsXgnRJY3PAP0Ij3gLOVWYaSeMHP4OSg7qreYJDpNwq_fqfq3KT5erP5wJzRcuhWWSnD7rGATiN6', // 通过该固定openlink，打开道具领取界面
    }).then(res => {});
    // 注意这是一个查询接口，如果需要多次查询需要多次createPageManager
    pageManager.on("getGiftStatus", (res: {
      hasGift: boolean; 
      hasFriendGift: boolean;
    }) => { 
      if( res.hasGift ) {
        // 可领取普通礼包
        console.log("可领取普通礼包")
      }
    
      if( res.hasFriendGift ) {
        // 可领取好友礼包
      }
    });
    
    pageManager.on("destroy", () => {
      // 监听到destroy事件后，pageManager不再可用，不可以再次show
    })
    
    

#### 3）游戏内，引导用户订阅赠送提醒

使用开放数据域发起赠送后，可在成功回调中引导用户订阅消息
    
    
    if (wx.sendGiftToFriend) {
        wx.sendGiftToFriend({
          giftId: 'xxxxx',
          openid: 'xxxxx',
          success(res) {
            // 可在赠送道具成功回调中，调起小游戏系统订阅消息
            wx.requestSubscribeSystemMessage({
              // 订阅好友互动提醒消息
              msgTypeList: ['SYS_MSG_TYPE_INTERACTIVE'],
              success (res) {        
              }
             })
          },
          fail: console.error,
        });
    }
