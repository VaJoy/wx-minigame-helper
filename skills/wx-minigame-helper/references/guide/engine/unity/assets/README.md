# 游戏引擎适配 / Unity WebGL 转化 / 资源管理

> 路径：`guide/engine/unity/assets/`　|　本目录 12 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [MiniGameConfig.asset 配置文件说明](AssetDescription.md) | 位于 `Assets/WX-WASM-SDK-V2/Editor/MiniGameConfig.asset` 即为 WXSDK 的导出配置文件，其中部分配置可在微信小游戏导出面板中可视化配置，本节将对 |
| [资源优化](AssetOptimization.md) | 可通过转换工具配套提供的资源优化工具，将游戏内纹理资源**针对webgl导出** 做优化。 |
| [配置构建模板](BuildTemplate.md) | Unity/团结快适配项目最终导出 `minigame` 目录即为微信小游戏代码包，使用微信开发者工具打开并上传。该部分主要由 JavaScript、JSON、WASM及图片资源构成。在实际的游戏开发 |
| [微信小游戏压缩纹理工具2.0(Beta)](CompressedTexture.md) | ​ 早期 Unity(2018-2020) 不支持对 ASTC 纹理格式进行导出，因此在移动端中无法充分利用 GPU 完成硬件的解码渲染。为弥补这一缺陷，微信 Unity SDK 提供压缩纹理按需加载 |
| [资源部署与缓存](DataCDN.md) | 在转换完成后，会在导出路径下生成如下目录 |
| [资源缓存](FileCache.md) | 小游戏主要存在三种类型的资源： |
| [多包融合工具](MultiPackage.md) | 随着小游戏基础能力的丰富，项目对于运行时加载不同包的需求也越来越高。 |
| [资源按需加载概述](ResourcesLoading.md) | ​ 区别于原生 APP 游戏通常安装与启动时将资源都下载完成，小游戏需要做到“即点即玩”，启动仅能加载少量资源，其余部分都必须放CDN进行延迟加载，如何合理与高效地进行资源按需加载是非常重要的事情。 |
| [使用Addressable Assets System进行资源按需加载](UsingAddressable.md) | 对于通过本适配方案转换的小游戏启动耗时，资源下载通常是贡献最大的部分。这是由于手游APP往往很少针对首包资源进行特殊优化。 那么，接下来的问题是：小游戏中多大的首包资源合适？ 剩余的游戏资源如何加载？ |
| [使用 AssetBundle 进行资源按需加载](UsingAssetBundle.md) | 阐述如何在小游戏环境对AssetBundle进行打包、加载和内存优化，同时推荐使用WXAssetBundle更自动化地节省内存。 |
| [使用Loader进行游游戏加载](UsingLoader.md) | Unity Loader是在微信小游戏环境加载Unity WebGL游戏的加载与适配器，使用微信小游戏插件技术开发，功能包括： |
| [使用预下载功能](UsingPreload.md) | 通过 启动流程与时序我们知道，在UnityLoader加载过程中存在**网络空闲** 的情况。特别是“引擎初始化和首场景准备”，影响该步骤包括：引擎自身模块与数据初始化，游戏首个场景加载以及Awake |
