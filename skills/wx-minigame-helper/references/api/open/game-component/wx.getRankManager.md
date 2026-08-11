---
title: "RankManager wx.getRankManager()"
type: api
category: api/open/game-component
api: "wx.getRankManager"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/game-component/wx.getRankManager.html
---

# [RankManager](<RankManager.md>) wx.getRankManager()

> 基础库 3.14.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

初始化并返回一个擂台赛管理器实例，用于管理游戏得分存取、得分排行榜（开发中）以及擂台赛功能。小游戏擂台赛功能介绍详见[小游戏擂台赛指南文档](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/tournament.html>)。

## 返回值

### [RankManager](<RankManager.md>)

擂台赛管理器实例，全局单例。

## 示例代码

**1 存取用户得分**

**1.1 上报用户分数**
    
    
    // 获取擂台赛管理器实例
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
    

**1.2 查询用户最新得分**
    
    
    const rankManager = wx.getRankManager()
    rankManager.getScore({
      scoreKeys: ['score_key'],
      periodType: 1, // 自然日最高分
      success: (res) => {
        console.log('分数信息', res.scores)
        // res.scores 格式: { 'score_key': { score: 100, timestamp: 1234567890 } }
      }
    })
    

**2 发起擂台赛**

**2.1 接入前准备**

擂台赛组件的分享和动态消息功能依赖[聊天工具模式](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/chat-tool.html>)。

聊天工具的分享功能要求小游戏具备有效的登录态。为确保用户分享擂台赛时游戏已建立登录态，需要在擂台赛开始前调用[wx.login](<https://developers.weixin.qq.com/minigame/dev/api/open-api/login/wx.login.html>)接口完成登录流程。

**2.2 上报擂主分数**

发起擂台赛前，需要先上报玩家发起擂台赛的基准分数。使用 `update` 方法进行分数上报。
    
    
    // 获取擂台赛管理器实例
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
    

**2.3 创建擂台赛**

分数上报成功后，使用 `createChallenge` 方法发起擂台赛。
    
    
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
    

注意事项：

  * 一次 `update` 上报的分数只能创建一个擂台赛。
  * 针对同一次上报多次调用 `createChallenge` 将返回已创建的擂台赛。

**3 加入擂台赛**

**3.1 监听挑战开始事件**

用户从他人分享的擂台赛卡片进入小游戏，小游戏会在 onShow 时弹起加入擂台赛半屏。用户点击半屏上的"立即挑战"按钮，擂台赛挑战开始。 通过 `rankManager.onChallengeStart(callback)` 监听onChallengeStart事件，在onChallengeStart事件的回调中处理挑战开始逻辑。
    
    
    // 监听擂台赛开始事件
    wx.getRankManager().onChallengeStart((challengeInfo) => {
      // 处理挑战开始逻辑
      console.log('擂台赛开始', challengeInfo.scoreKey);
    });
    

注意事项：

  * 应尽早监听 onChallengeStart，推荐在游戏初始化或 onLaunch 生命周期里监听。由于用户点击“立即挑战”事件会等到onChallengeStart成功注册后再派发，过晚监听可能出现用户点了立即挑战，游戏没有及时开始擂台赛的情况。

**3.2 中途操作**

擂台赛进行过程中，支持以下操作：

中途上报分数。擂台赛的最终分数将取中途上报分数和最终上报分数中最高的一次。中途上报不会结束擂台赛。
    
    
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
    

中途退出挑战，并拉起擂台赛结果页。中途退出的擂台赛，本次挑战为0分。
    
    
    // 中途退出擂台赛
    wx.getRankManager().abort({
      success: (res) => {
        console.log('擂台赛退出成功', res);
      },
      fail: (err) => {
        console.error('擂台赛退出失败', err);
      },
    });
    

**3.3 结束擂台赛**

在擂台赛进行过程中调用 `update` 方法上报最终分数，系统将自动结束擂台赛并拉起结束界面。
    
    
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
    

**3.4 奖励领取**

挑战者战胜擂主，或者擂主守擂成功时，可以在擂台赛组件结果页领取道具奖励。
