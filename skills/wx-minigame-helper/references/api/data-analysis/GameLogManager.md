---
title: "GameLogManager"
type: api
category: api/data-analysis
api: "GameLogManager"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/GameLogManager.html
---

# GameLogManager

GameLogManager 类用于管理小游戏日志。可以通过 [wx.getGameLogManager](<wx.getGameLogManager.md>) 获取。

## 方法

### [GameLogManager.log(Object param)](<GameLogManager.log.md>)

上报日志。log 方法支持在上报时传入日志等级、日志标签和日志内容。可设置上报后的回调函数。

### [Object GameLogManager.tag(string key)](<GameLogManager.tag.md>)

tag 方法接受一个字符串参数，作为上报日志的 key 。同时返回 info、warn、error、debug 四个上报方法。若不传入 key 参数，上报使用默认 key 'default'。与使用 log 方法上报不同，使用 tag 返回的方法上报日志，不需要重复设置日志等级、日志标签，简化了上报操作。

### [Object GameLogManager.getCommonInfo()](<GameLogManager.getCommonInfo.md>)

读取当前 logger 的全局 commonInfo 对象。

### [GameLogManager.updateCommonInfo(Object newCommonInfo)](<GameLogManager.updateCommonInfo.md>)

该方法接受一个对象，并将其与当前logger的全局 commonInfo 对象进行合并。合并操作仅限于第一层属性，嵌套的属性将保持不变。如果合并的对象中存在与当前 commonInfo 相同的属性，则新属性将覆盖旧属性。

## 使用说明

为帮助开发者更便捷地分析小游戏运行中产生的数据，从基础库 3.7.4 开始，我们推出了小游戏日志功能。开发者可通过提供的 api 上传日志，日志汇聚并实时上报到小游戏MP后台。  
开发者可在“[小游戏MP后台](<https://mp.weixin.qq.com/>)->基础数据->游戏日志分析”进入日志分析页面。 [游戏日志分析功能使用文档](<https://developers.weixin.qq.com/minigame/dev/guide/runtime/debug/gamelogmanager.html>)
