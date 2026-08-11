# 开放接口 / 游戏内组件

> 路径：`api/open/game-component/`　|　本目录 9 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [RankManager.abort(Object params)](RankManager.abort.md) | 中途退出擂台赛。若擂台赛进行中则关闭所有相关组件。 |
| [RankManager.createChallenge(Object params)](RankManager.createChallenge.md) | 创建擂台赛，唤起擂台赛起始页。 |
| [RankManager.getScore(Object params)](RankManager.getScore.md) | 查询当前用户得分数据。 |
| [RankManager](RankManager.md) |  |
| [RankManager.middleUpdate(Object params)](RankManager.middleUpdate.md) | 游戏中途更新分数信息，用于在游戏进行过程中实时上报分数。如果接入擂台赛组件，该 api不会触发擂台赛组件结算页，但会触发擂台赛分数超越播报和排行榜更新。 |
| [RankManager.offChallengeStart(function callback)](RankManager.offChallengeStart.md) | 取消监听擂台赛开始事件。 |
| [RankManager.onChallengeStart(function callback)](RankManager.onChallengeStart.md) | 监听擂台赛开始事件。由擂台赛卡片进入后，用户点击擂台赛页上的“立即挑战”时触发。 |
| [RankManager.update(Object params)](RankManager.update.md) | 上报用户分数信息。如果接入擂台赛组件，使用此 api在发起擂台赛前上报，上报的分数将作为发起擂台赛的擂主分数。在擂台赛中上报，上报的分数将作为擂台赛者的分数，并结束擂台赛弹出结果页。 |
| [RankManager wx.getRankManager()](wx.getRankManager.md) | 初始化并返回一个擂台赛管理器实例，用于管理游戏得分存取、得分排行榜（开发中）以及擂台赛功能。小游戏擂台赛功能介绍详见小游戏擂台赛指南文档。 |
