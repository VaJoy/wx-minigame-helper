# 数据分析

> 路径：`api/data-analysis/`　|　本目录 20 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [Object GameLogManager.getCommonInfo()](GameLogManager.getCommonInfo.md) | 读取当前 logger 的全局 commonInfo 对象。 |
| [GameLogManager.log(Object param)](GameLogManager.log.md) | 上报日志。log 方法支持在上报时传入日志等级、日志标签和日志内容。可设置上报后的回调函数。 |
| [GameLogManager](GameLogManager.md) |  |
| [Object GameLogManager.tag(string key)](GameLogManager.tag.md) | tag 方法接受一个字符串参数，作为上报日志的 key 。同时返回 info、warn、error、debug 四个上报方法。若不传入 key 参数，上报使用默认 key 'default'。与使用 |
| [GameLogManager.updateCommonInfo(Object newCommonInfo)](GameLogManager.updateCommonInfo.md) | 该方法接受一个对象，并将其与当前logger的全局 commonInfo 对象进行合并。合并操作仅限于第一层属性，嵌套的属性将保持不变。如果合并的对象中存在与当前 commonInfo 相同的属性，则 |
| [MiniReportManager](MiniReportManager.md) |  |
| [MiniReportManager.report(Object param)](MiniReportManager.report.md) | 上报关卡日志。report 方法支持在上报时传入关卡事件 ID、关卡 ID、关卡名称、关卡行为、关卡结果、关卡耗时、关卡道具、关卡广告、关卡分享。可设置上报后的回调函数。 |
| [Object ScenePerformanceManager.getCommonInfo()](ScenePerformanceManager.getCommonInfo.md) | 获取通用信息（由setCommonInfo数据得到） |
| [ScenePerformanceManager](ScenePerformanceManager.md) |  |
| [ScenePerformanceManager.setCommonInfo(Object params)](ScenePerformanceManager.setCommonInfo.md) | 设置通用信息（全局维度），用于描述贯穿所有上报的固定属性（如机型档位、用户角色等）。每次执行 `setData` 时都会自动带上这些信息。多次调用 `setCommonInfo` 会整体覆盖之前设置的 |
| [ScenePerformanceManager.setData(Object param)](ScenePerformanceManager.setData.md) | 上报当前所处的场景及其附加信息，用于对运行性能数据做多维度的筛选分析。 |
| [Object wx.getExptInfoSync(Array.<string> keys)](wx.getExptInfoSync.md) | 给定实验参数数组，获取对应的实验参数值 |
| [wx.getGameExptInfo(Object options)](wx.getGameExptInfo.md) | 给定实验参数数组，获取对应的实验参数值 |
| [GameLogManager wx.getGameLogManager(Object param)](wx.getGameLogManager.md) | 初始化并返回一个游戏日志管理器实例，用于记录和管理游戏日志。 |
| [MiniReportManager wx.getMiniReportManager(Object param)](wx.getMiniReportManager.md) | 初始化并返回一个MiniReportManager实例，用于记录和管理小游戏上报。 |
| [ScenePerformanceManager wx.getScenePerformanceManager(Object param)](wx.getScenePerformanceManager.md) | 该接口专门用于协助开发者分析场景化的运行性能数据。通过上报场景 ID，在查看运行性能数据时，可以筛选场景的性能。 初始化并返回一个ScenePerformanceManager实例，用于记录和管理小游 |
| [wx.reportEvent(string eventId, object data)](wx.reportEvent.md) | 事件上报 |
| [wx.reportMonitor(string name, number value)](wx.reportMonitor.md) | 自定义业务数据监控上报接口。 |
| [wx.reportScene(Object object)](wx.reportScene.md) | 用于游戏启动阶段的自定义场景上报。使用前请注意阅读相关说明。 |
| [wx.reportUserBehaviorBranchAnalytics(Object object)](wx.reportUserBehaviorBranchAnalytics.md) | 上报场景分析，用于UI组件（一般是按钮）相关事件的上报，事件目前有曝光、点击两种，查看相关文档 |
