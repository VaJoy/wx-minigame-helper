---
title: "小游戏插件"
type: guide
category: guide/base-ability
source: https://developers.weixin.qq.com/minigame/dev/guide/base-ability/plugins.html
---

# 小游戏插件

插件是对一组 js 接口的封装，用于嵌入到小游戏中使用。

目前小游戏暂未开放插件的开发，只有官方提供的插件可使用。

## 插件列表

#### 官方插件：

  * [小游戏官方插件](<https://mp.weixin.qq.com/wxopen/pluginbasicprofile?action=intro&appid=wxaed5ace05d92b218&token=&lang=zh_CN>)
  * [小游戏社交组件](<https://mp.weixin.qq.com/wxopen/pluginbasicprofile?action=intro&appid=wx2ea687f4258401a9&token=&lang=zh_CN>)，查看[相关说明文档](<../open-ability/community/game-chat.md>)
  * [小游戏封面图](<https://mp.weixin.qq.com/wxopen/pluginbasicprofile?action=intro&appid=wxbd990766293b9dc4&token=&lang=zh_CN>)，查看[相关说明文档](<../performance/startup/perf-action-start-loading-plugin.md>)
  * [BLEMesh 插件](<https://mp.weixin.qq.com/wxopen/pluginbasicprofile?action=intro&appid=wx013447465d3aa024&token=&lang=zh_CN>)，查看[相关说明文档](<../device/ble-mesh.md>)
  * [Unity插件](<https://mp.weixin.qq.com/wxopen/pluginbasicprofile?action=intro&appid=wxe5a48f1ed5f544b7&token=&lang=zh_CN>)，需要配合[转换插件](<../engine/unity-webgl-transform.md>)
  * [开放数据域渲染库](<https://mp.weixin.qq.com/wxopen/pluginbasicprofile?action=intro&appid=wx7a727ff7d940bb3f&token=&lang=zh_CN>)

#### 游戏引擎插件：

  * [CocosCreator](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx7095f7fa398a2f30&lang=zh_CN>)
  * [CocosCreatorV3](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx0446ba2621dda60a&lang=zh_CN>)
  * [LayaAir 1.x](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx9170ca1ff6f31088&lang=zh_CN>)
  * [LayaAir 2.x](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx70d8aa25ec591f7a&lang=zh_CN>)
  * [LayaAir 3.x](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx8c0b1c048ce88ad2&lang=zh_CN>)
  * [白鹭](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx7e2186943221985d&lang=zh_CN>)

## 使用插件

### 添加插件

在使用插件前，需要先登录 MP 后台，然后打开需要添加的插件页面进行“添加插件”。通常无需审批，添加后可直接使用。

### 引入插件代码包

使用插件前，使用者要在 `game.json` 中声明需要使用的插件，例如：

**代码示例：**
    
    
    {
      "plugins": {
        "pluginName": {
          "version": "latest",
          "provider": "wxidxxxxxxxxxxxxxxxx", // 对应的插件id
          "contexts": [{ "type": "isolatedContext" }] //是否是独立域插件，非独立域插件不加
        }
      }
    }
    

`plugins` 定义段中可以包含多个插件声明，每个插件声明以一个使用者自定义的插件引用名作为标识，并指明插件的`provider`和需要使用的`version`版本号。其中，引用名（如上例中的 `myPlugin`）由使用者自定义，在后续的插件使用中，该引用名将被用于表示该插件。

### 使用插件

使用插件的时，可以使用 `requirePlugin` 方法引入插件脚本：
    
    
    const pluginInterface = requirePlugin("pluginName");
    

具体插件中的 API 是如何定义的，插件功能如何使用，请查阅插件列表中对应的文档
