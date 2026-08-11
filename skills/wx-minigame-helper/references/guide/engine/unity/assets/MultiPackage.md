---
title: "多包融合工具"
type: guide
category: guide/engine/unity/assets
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/unity-webgl-transform/Design/MultiPackage.html
---

# 多包融合工具

## 简介

随着小游戏基础能力的丰富，项目对于运行时加载不同包的需求也越来越高。

比如有些能力依赖较新的微信客户端及基础库，且不同能力的代码包差异较大，需要根据环境加载不同的包。

因此我们增加了多包融合工具，方便开发者做合包操作。

## 工具版本要求

需更新转换插件到`v0.1.33`。

如果使用wasm分包，需要更新分包插件到`1.1.34`。

## 融合后的结构

以单线程包 build-st/、多线程包 build-mt/、后缀 mt 为例，融合结果大致如下：
    
    
    build-merged/
    ├── game.js
    ├── game.json
    ├── project.config.json
    ├── check-version.js
    ├── events.js
    ├── weapp-adapter.js
    ├── plugin-config.js
    ├── unity-sdk/
    ├── workers/
    ├── minigame/
    │   ├── game.js
    │   ├── wasmcode/
    │   └── data-package/
    └── minigame-mt/
        ├── game.js
        ├── wasmcode/
        └── data-package/
    

说明：

  * `minigame/`：单线程默认包。
  * `minigame-mt/`：多线程条件包。
  * 顶层 `game.js`：融合工具生成的入口文件，负责运行条件判断并加载对应包。
  * 顶层 `unity-sdk/`、`plugin-config.js` 等：公共内容，只保留一份。
  * `wasmcode/`、`data-package/`：每个包自己的内容，保留在各自的 `minigame*` 目录内。
  * `workers/`：合并到顶层，因为小游戏 `game.json` 的 `workers` 字段不支持按分包拆分。

### game.json 的变化

融合工具会重新生成 `game.json` 中的 `subpackages`。

例如原本两个包里都有：
    
    
    {
      "subpackages": [
        {
          "name": "wasmcode",
          "root": "wasmcode/"
        },
        {
          "name": "data-package",
          "root": "data-package/"
        }
      ]
    }
    

融合后会变成类似：
    
    
    {
      "subpackages": [
        {
          "name": "wasmcode",
          "root": "minigame/wasmcode/"
        },
        {
          "name": "data-package",
          "root": "minigame/data-package/"
        },
        {
          "name": "wasmcode-mt",
          "root": "minigame-mt/wasmcode/"
        },
        {
          "name": "data-package-mt",
          "root": "minigame-mt/data-package/"
        }
      ]
    }
    

如果不同包里有同名分包，条件包的分包名会自动加后缀，避免和默认包冲突。

## 运行时如何选择包

融合后的顶层 `game.js` 会先执行环境检测，再根据条件选择加载哪个包。

示例逻辑，以多线程为例：
    
    
    import checkVersion from ('./check-version.js');
    
    if (wx.env.isSupportStandardWorker) {
      require('./minigame-mt/game.js');
    }
    else {
      require('./minigame/game.js');
    }
    

### 使用步骤

![](https://res8.wxqcloud.qq.com.cn/wxdoc/c387fcc2-b99d-492d-8801-2dd245332b45.png)

以多线程包和单线程包融合为例，按以下方式配置：

**1\. 默认包路径**

选择单线程包目录，例如 `build-st/`

默认包会被放到融合结果的 `minigame/`，当运行环境不满足多线程条件时，会加载这个包。

**2\. 条件配置**

添加一个条件包，用于多线程包。建议配置：

配置项 | 示例 | 说明  
---|---|---  
条件表达式 | `wx.env.isSupportStandardWorker` | 运行时判断当前环境是否支持更完备的多线程能力  
包后缀 | `mt` | 融合后目录名为 `minigame-mt/`  
条件包目录 | `build-mt/` | 开启渲染线程后导出的多线程包  
  
如果后续有更多包，也可以继续添加条件。条件会按顺序判断，先命中的包先生效。

**3\. 输出目录**

选择一个新的输出目录，例如 `build-merged/`

注意：如果输出目录已存在，工具会先清空再生成。

**4\. 开始融合**

点击"开始融合"。成功后，输出目录就是最终要上传的小游戏包。

## 命令行合包示例

也可以使用 Unity batchmode 调用多包融合工具。

准备配置文件 `multi-package-config.json`：
    
    
    {
      "defaultPackagePath": "/path/to/build-st",
      "outputPath": "/path/to/build-merged",
      "packageConditions": [
        {
          "condition": "wx.env.isSupportStandardWorker",
          "packagePath": "/path/to/build-mt",
          "packageSuffix": "mt"
        }
      ]
    }
    

执行：
    
    
    Unity -batchmode -quit \
      -executeMethod WeChatWASM.WXMultiPackageMergeCLI.Run \
      -configPath "/path/to/multi-package-config.json"
    

## 注意事项

  1. **注意文件路径是否正确**

     * 合包后，业务的js文件路径会放到minigame*下，要关注原有的import路径是否正确。
     * 读写包内文件也要注意路径
  2. **wasmcode，wasmcode1，wasmcode2这些目录名不要改动**

  3. 多包融合不局限于多线程，开发者可以根据需要添加自定义条件包。
