---
title: "擂台赛组件-开发指南"
type: guide
category: guide/open-ability/gameplay
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/tournament.html
---

# 擂台赛组件-开发指南  
  
## 功能说明

擂台赛组件是小游戏官方提供的赛事玩法互动组件。游戏内，擂主邀请好友参与擂台挑战，获胜方可领取擂台赛奖励；游戏外，以「服务通知」和「聊天工具」的社交形式增加回流触达。

## 玩法介绍

擂台赛玩法C端体验路径：跳一跳-单局超过200分发起「有奖擂台赛」

### 1\. 发起擂台赛

#### 场景 1 对局结束，用户获得分数后，发起擂台赛

![](https://mmgame.qpic.cn/image/ccc415eb4137f55c296b2137c1f5bdb39be75cec0d160afba73a4d9bf240322e/0)

  * 用户在游戏内，完成游戏对局，产生 结算分数，用户可 向朋友发起擂台赛；

  * 擂主发起后不可再次参与，分数不可更改。每个成功发起的擂台赛，有效时间可开发者自定义；

  * 擂台赛发起入口、条件，由开发者自定义并控制。开发者可在 MP 后台配置最低擂台赛发起门槛。

#### 场景2 游戏内固定入口发起擂台赛

![](https://res8.wxqcloud.qq.com.cn/wxdoc/c6276ac5-0598-466e-87f1-9e08b5648c2d.png)

  * 游戏内固定入口，发起擂台赛玩法，用户未生成分数，需要先打一局

### 2\. 参与擂台赛

![](https://mmgame.qpic.cn/image/7abe083632421e41bc67764609618d8245bcf638f01fb686e400a75e16bfbadd/0)

● 朋友可以通过分享链接，进入游戏，向擂主发起挑战；

● 参与玩家在赛事有效期内可多次尝试。

## 奖励规则

每个擂台赛配置4个礼包，守擂/挑战成功后，可领取对应奖励。开发者可自行设置奖励限额、不同用户不同概率

### 1\. 擂主

● **守擂成功** ：任意用户参与擂台赛 且 在擂台赛举办期间未超过发起者的分数，视为发起者本次守擂成功；

● **奖励领取** ：每个擂台赛，擂主至少守擂成功一次，所有奖励领取时，可按设定概率抽取1次「擂主-稀有奖品」，并按成功次数获得「擂主-必中奖品」；

### 2\. 参与者

● **挑战成功** ：参与擂台赛并超过擂主设定的目标分数后，视为本擂台赛挑战成功；

● **奖励领取** ：每个擂台赛挑战成功，挑战者将固定获得「挑战者-必中奖品」，并按设定的概率抽取「挑战者-稀有奖品」；

## 用户触达

组件支持以社交形式增加回流触达。群聊场景将以聊天工具卡片形式分享：聊天工具模式下，可在卡片实时展示挑战成功人数，并在用户参与/挑战成功/擂台赛结束时，通过群内消息形式下发全局通知。

![](https://mmgame.qpic.cn/image/0ef6fc63381908e61f914a18d12af18a8ea0d3b32b149ad7a326dbf7b8b2f817/0)

## 如何接入擂台赛组件

开发者可参考以下方法，快捷完成接入。

### 1\. 完成游戏玩法ID设置

● 位置：MP-运营功能管理-基础配置-游戏玩法ID设置

● 用于上报用户当局游戏结果，结果支持 数值、时间格式、枚举格式。

● 游戏玩法生效后，除枚举值新增/修改名称外，不支持更改。

### 2\. 配置奖励礼包

● 礼包类型：擂台赛礼包 [礼包接入文档](<../growth/game-gift.md>)

● 建议每个礼包内只包含一个道具。多个道具情况下，采用首个道具icon与名称为c端展示。建议上传透明底的icon图。

● 需要提供 4 个 礼包 id。建议擂主与挑战者 在相同场景（保底、抽奖）奖励相同。

​​ ○ 礼包1：擂主 守擂成功 保底奖励

​​ ○ 礼包2：擂主 守擂成功 稀有奖励

​​ ○ 礼包3：参与者 挑战成功 保底奖励

​​ ○ 礼包4：参与者 挑战成功 稀有奖励

● 稀有奖励，支持配置 微信礼物 作为奖励，支持针对新用户配置不同的奖励 和 概率。

### 3\. 配置擂台赛

位置：MP-能力地图-擂台赛组件-关联擂台赛的奖励、ID

### 4\. 开发接入实现

版本要求：从基础库 **3.14.2** 开始支持

支持平台：Android 微信 **8.0.68** 及以上版本、iOS 微信 **8.0.68** 及以上版本

#### 4.1 接入前准备

聊天工具的分享功能要求小游戏具备有效的登录态。为确保用户分享擂台赛时游戏已建立登录态，需要在擂台赛开始前调用 [wx.login](<https://developers.weixin.qq.com/minigame/dev/api/open-api/login/wx.login.html>) 接口完成登录流程。

#### 4.2 发起擂台赛

  * 游戏对局结束发起：擂台赛功能基于 [wx.getRankManager()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/game-component/wx.getRankManager.html>) API 实现，通过该接口返回的类方法进行相关操作。
  * 游戏固定入口发起：通过MP 后台，获得每个擂台赛的 openlink。通过 [wx.createPageManager()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/wx.createPageManager.html>) API 实现

##### 4.2.1 上报擂主分数

发起擂台赛前，需要先上报玩家发起擂台赛的基准分数。使用 [update](<https://developers.weixin.qq.com/minigame/dev/api/open-api/game-component/RankManager.update.html>) 方法进行分数上报。
    
    
    // 获取排行榜管理器实例
    const rankManager = wx.getRankManager();
    // 上报用户分数
    rankManager.update({
      scoreKey: 'score_key', // 在MP配置的scoreKey
      score: 100, // 具体分数值
      success: res => {
      console.log('分数上报成功', res);
      },
      fail: err => {
      console.error('分数上报失败', err);
      },
    });
    
    

##### 4.2.2 创建擂台赛

分数上报成功后，使用 [createChallenge](<https://developers.weixin.qq.com/minigame/dev/api/open-api/game-component/RankManager.createChallenge.html>) 方法发起擂台赛。
    
    
    // 发起擂台赛
    wx.getRankManager().createChallenge({
      scoreKey: 'score_key',
      success: res => {
      console.log('擂台赛创建成功', res);
      },
      fail: err => {
      console.error('擂台赛创建失败', err);
      },
    });
    
    

**注意事项：**

  * 一次 [update](<https://developers.weixin.qq.com/minigame/dev/api/open-api/game-component/RankManager.update.html>) 上报的分数只能创建一个擂台赛。

  * 针对同一次上报多次调用 [createChallenge](<https://developers.weixin.qq.com/minigame/dev/api/open-api/game-component/RankManager.createChallenge.html>) 将返回已创建的擂台赛。

#### 4.3 加入擂台赛

##### 4.3.1 监听挑战开始事件

用户从他人分享的擂台赛卡片进入小游戏，小游戏会在 onShow 时弹起加入擂台赛半屏。用户点击半屏上的“立即挑战”按钮，擂台赛挑战开始。 通过 [rankManager.onChallengeStart(callback)](<https://developers.weixin.qq.com/minigame/dev/api/open-api/game-component/RankManager.onChallengeStart.html>) 监听onChallengeStart事件，在onChallengeStart事件的回调中处理挑战开始逻辑。
    
    
    // 监听擂台赛开始事件
    wx.getRankManager().onChallengeStart((challengeInfo) => {
      // 处理挑战开始逻辑
      console.log('擂台赛开始', challengeInfo.scoreKey);
    });
    
    

##### 4.3.2 中途操作

擂台赛进行过程中，支持以下操作：

● 中途上报分数。擂台赛的最终分数将取中途上报分数和最终上报分数中最高的一次。
    
    
    // 游戏过程中上报中间分数
    wx.getRankManager().middleUpdate({
      scoreKey: 'score_key',
      score: gameState.score, // 当前分数
      success: res => {
      console.log('中途分数上报成功', res);
      },
      fail: err => {
      console.error('中途分数上报失败', err);
      },
    });
    
    

● 中途退出挑战。中途退出的擂台赛，本次挑战为0分。
    
    
    // 中途退出擂台赛
    wx.getRankManager().abort({
      success: (res) => {
      console.log('擂台赛退出成功', res);
      },
      fail: (err) => {
      console.error('擂台赛退出失败', err);
      },
    });
    
    

#### 4.4 结束擂台赛

在擂台赛进行过程中调用 [update](<https://developers.weixin.qq.com/minigame/dev/api/open-api/game-component/RankManager.update.html>) 方法上报最终分数，系统将自动结束擂台赛并拉起结束界面。
    
    
    // 结束擂台赛并上报最终分数
    wx.getRankManager().update({
      scoreKey: 'score_key',
      score: 150, // 最终分数
      success: res => {
      console.log('擂台赛结束', res);
      },
      fail: err => {
      console.error('擂台赛结束异常', err);
      },
    });
    
    

#### 4.5 奖励领取

挑战者战胜擂主，或者擂主守擂成功时，可以在擂台赛组件结果页领取道具奖励。
    
    
    // 监听挑战赛福利组件信息变更
    wx.onOfficialComponentsInfoChange(componentInfo => {
        let receiveDetail = componentInfo.challengeRewardsComponentInfo?.receiveDetail;
        if (receiveDetail) { // 挑战赛礼包领取事件
            // 处理奖励领取结果
            switch (receiveDetail.awardResult) {
                case 1:
                    console.log('奖励全部领取成功！');
                    break;
                case 2:
                    console.log('奖励部分领取成功');
                    break;
                case 3:
                    console.log('奖励领取失败');
                    break;
            }
            // 检查是否领取了稀有奖励
            if (receiveDetail.receivedRareReward === true) {
                console.log('恭喜！领取了稀有奖励！');
            }
            // 遍历用户领取的奖励列表
            receiveDetail.userSourceList.forEach((userSource, index) => {
                if (userSource.source) {
                    console.log(`第${index + 1}个奖励:`);
                    console.log('  礼包名称:', userSource.source.sourceName);                
                    // 遍历道具列表
                    userSource.source.propList?.forEach(prop => {
                        console.log(`${prop.propName} x${prop.propNum}`);
                    });
                }
            });
        }
    });
    
    

#### 4.6 查询擂台赛用户参与数据（灰度测试）

开发者可以通过接口，查询擂主或参与者，当天成功发起擂台赛邀请的数据。仅包括通过小程序卡片发起的邀请。

接口需要通过小游戏官方插件进行调用，小游戏官方插件的使用指南请参考：[小游戏官方插件](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxaed5ace05d92b218&token=&lang=zh_CN>)

**接口定义：**
    
    
    getGamePkShareData(pkRole: number):  Promise<GamePkShareDataResponse> 
    

**参数:**

属性 | 类型 | 说明  
---|---|---  
pkRole | number | 邀请发起人身份, 1表示擂主，2表示参与者  
  
**返回值 GamePkShareDataResponse：**

属性 | 类型 | 说明  
---|---|---  
shareCount | number | 用户当天主动邀请朋友参与擂台赛的意愿强度（0-5，数字越大 意愿越高）  
shareChatCount | number | 用户当天主动邀请朋友参与擂台赛的扩散范围（0-5，数字越大 范围越大）  
  
**error对象结构：**

属性 | 类型 | 说明  
---|---|---  
errMsg | string | 错误原因  
  
**使用示例：**
    
    
    const pkRole = 1;
    GameGlobal.miniGameCommon.getGamePkShareData(pkRole)
      .then((res) => {
        console.log('邀请次数为：', res.shareCount);
      }).catch((err)=>{
        console.error('error', err.errMsg);
      });
