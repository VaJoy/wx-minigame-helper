---
title: "RankManager"
type: api
category: api/open/game-component
api: "RankManager"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/game-component/RankManager.html
---

# RankManager

小游戏擂台赛组件管理器。可通过 [wx.getRankManager](<wx.getRankManager.md>) 获取实例。关于小游戏擂台赛的功能介绍详见[小游戏擂台赛指南文档](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/tournament.html>)。

## 方法

### [RankManager.middleUpdate(Object params)](<RankManager.middleUpdate.md>)

游戏中途更新分数信息，用于在游戏进行过程中实时上报分数。如果接入擂台赛组件，该 api不会触发擂台赛组件结算页，但会触发擂台赛分数超越播报和排行榜更新。

### [RankManager.update(Object params)](<RankManager.update.md>)

上报用户分数信息。如果接入擂台赛组件，使用此 api在发起擂台赛前上报，上报的分数将作为发起擂台赛的擂主分数。在擂台赛中上报，上报的分数将作为擂台赛者的分数，并结束擂台赛弹出结果页。

### [RankManager.abort(Object params)](<RankManager.abort.md>)

中途退出擂台赛。若擂台赛进行中则关闭所有相关组件。

### [RankManager.getScore(Object params)](<RankManager.getScore.md>)

查询当前用户得分数据。

### [RankManager.createChallenge(Object params)](<RankManager.createChallenge.md>)

创建擂台赛，唤起擂台赛起始页。

### [RankManager.onChallengeStart(ChallengeStartCallback callback)](<RankManager.onChallengeStart.md>)

监听擂台赛开始事件。由擂台赛卡片进入后，用户点击擂台赛页上的“立即挑战”时触发。

### [RankManager.offChallengeStart(ChallengeStartCallback callback)](<RankManager.offChallengeStart.md>)

取消监听擂台赛开始事件。

## 使用说明

RankManager 提供了擂台赛相关能力，支持分数上报、创建擂台赛等功能。开发者可以通过该管理器实现游戏内的擂台赛玩法。
