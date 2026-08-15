# Cocos Creator 微信小游戏分包与远程包（cocos-packaging）

本目录是 `wx-minigame-helper` 知识库中 **Cocos Creator 视角** 的微信小游戏分包/远程包专项文档，共 6 篇。与 `topics/subpackage-startup.md`（微信平台侧机制）互补：本目录讲 **Cocos 里怎么配**，topics 讲 **微信平台怎么管**。

## 文档清单

| 文档 | 内容 |
|---|---|
| `01-packaging-limits.md` | 微信包体限制（主包 4M / 总 30M）、首包体积构成、"包内资源一次性全量加载"的关键认知、超限解决方向 |
| `02-bundle-basics.md` | Asset Bundle 配置面板全字段（5 种压缩类型、Is Remote、优先级、Filter）、内置 bundle、构建产物结构 |
| `03-subpackage.md` | 小游戏分包配置/构建/加载、微信分包限制、**分包与远程包互斥**的完整说明 |
| `04-remote-bundle.md` | 远程包核心：四步流程（配置→构建→上传→删除）、URL 规则、版本管理（bundleVers/MD5 Cache）、start-scene 首场景分包 |
| `05-cache-manager.md` | 运行时下载缓存机制（三级查找、gamecaches 缓存目录、LRU 清理、清理接口、cacheEnabled/autoClear） |
| `06-practical-recipes.md` | 资源布局建议、分包+远程混合方案、首包优化组合拳、常见坑速查、调试技巧、视频特殊处理 |

配套示例代码：`examples/remote-bundle-demo.ts`

## 使用方式

回答"**Cocos 里**怎么配分包/远程包""资源放 resources 还是远程""包体超限怎么办"等问题时，按主题选读对应文档；涉及微信平台侧机制（wx.loadSubpackage、分包预下载、代码包规则）时，配合 `topics/subpackage-startup.md` 与 `guide/base-ability/subpackage/` 一起看。

## 其它

本目录文档仅关注在 Cocos 中针对小微信游戏分包的相关知识，如果想了解如何在 Cocos 编辑器中接入微信小游戏开发者工具，请阅读[官方文档](https://docs.cocos.com/creator/3.8/manual/zh/editor/publish/publish-wechatgame.html) 。