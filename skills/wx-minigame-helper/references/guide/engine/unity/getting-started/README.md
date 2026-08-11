# 游戏引擎适配 / Unity WebGL 转化 / 入门与配置

> 路径：`guide/engine/unity/getting-started/`　|　本目录 12 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [技术常见问题QA](DevelopmentQAList.md) | Q: |
| [方案评估](Evaluation.md) | 考虑到游戏体积与逻辑复杂度，目前建议中轻度2D/3D游戏进行转换，游戏类目包括： |
| [Unity 游戏接入微信小游戏指南](Guide.md) | ​ 下图中介绍了新游戏接入微信小游戏平台的主要转换流程，下文将介绍每一个阶段的工作： |
| [使用 AutoStreaming 进行资源按需加载](InstantGameGuide.md) | ​ 除常规使用 AA/AB 分包方案外，Unity 官方也提供了 AutoStreaming 转换工具可以实现 Unity 游戏转化至微信小游戏平台的能力。开发者可阅读本文自行选择转换方案。 |
| [问题反馈与联系我们](IssueAndContact.md) | 开发者使用转换方案时，如果遇到问题可以随时反馈给我们。目前可通过Git Issue和"小游戏客服助手"微信客服两种方式。 |
| [现网错误日志上报与排查](IssueForProduction.md) | 当游戏发布到现网时，开发者需要收集玩家遇到的错误、异常等问题并进行排查原因，本文阐述在微信小游戏环境的最佳实践。 |
| [微信SDK安装](SDKInstaller.md) | 为兼容历史团结/Unity版本的使用，微信小游戏团队将SDK分为如下两种模式安装使用。 |
| [技术沙龙](Salon.md) | https://docs.qq.com/pdf/DSVdvRHh6elZRdGZu |
| [转换案例](ShowCase.md) | 文档为使用本小游戏适配解决方案进行 Unity 项目迁移的部分上线游戏。 |
| [方案概述](TechSummary.md) | Unity的BuildTarget支持WebGL平台，WebGL导出包是基于WebAssembly技术运行在浏览器环境。 为了能让导出包运行在微信小游戏环境，我们提供了以下支持： |
| [转换工具导出微信小游戏](Transform.md) | 添加需要导出的scene |
| [SDK 调用微信 API](WX_SDK.md) | 调用`Unity SDK`前，需要在主入口进行SDK初始化，回调后再执行主逻辑。 |
