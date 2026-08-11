---
title: "游戏引擎插件"
type: guide
category: guide/base-ability
source: https://developers.weixin.qq.com/minigame/dev/guide/base-ability/game-engine-plugin.html
---

# 游戏引擎插件

## 功能介绍

绝大多数小游戏使用游戏引擎开发，使用的游戏引擎版本相似或相同，且在代码包中占比较大。引擎插件能力即是游戏引擎(作为插件)单独在微信客户端进行缓存。当小游戏首次启动时，如果本地已经存在同类别游戏引擎插件，可直接复用或可通过增量下载的方式快速下载，从而提升启动速度。

## 配置使用

使用**新版引擎IDE或引擎工具重导出微信小游戏** 即可，**无需手动修改** 。开发者可到引擎插件介绍界面，查看相关的插件指引。详细修改内容参见附录部分。

  * [CocosCreator](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx7095f7fa398a2f30&lang=zh_CN>)

  * [CocosCreatorV3](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx0446ba2621dda60a&lang=zh_CN>)

  * [LayaAir 1.x](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx9170ca1ff6f31088&lang=zh_CN>)

  * [LayaAir 2.x](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx70d8aa25ec591f7a&lang=zh_CN>)

  * [LayaAir 3.x](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx8c0b1c048ce88ad2&lang=zh_CN>)

  * [白鹭](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx7e2186943221985d&lang=zh_CN>)

  * 注意：目前支持整包小游戏使用插件，以及分包小游戏的主包使用插件

## 微信客户端调试

在Android微信和iOS微信的**7.0.7版本( >=7.0.7)**，可直接体验和测试插件分离功能。使用了插件分离的小游戏，在console日志中会输出:
    
    
    plugin ***** inject success/fail!
    

建议对**微信低版本(例如微信7.0.6版本)进行兼容性测试** 。

## 微信开发者工具调试

### 编译

使用微信开发者工具的[RC](<https://developers.weixin.qq.com/miniprogram/dev/devtools/log#rc>)版本(>=1.02.1911181)或[Nightly](<https://developers.weixin.qq.com/miniprogram/dev/devtools/log#nightly>)版本(>=1.02.1911202)，使用2.9.0基础库(>=2.9.0)即可。

![>=2.9.0基础库](https://res8.wxqcloud.qq.com.cn/wxdoc/338ca116-a82a-4542-ad99-2fea0e1bfe26.jpg)

### 代码上传/预览

(1) 对于 `plugins` 中有 `path` 字段的使用方式，上传/预览时，**使用** 该字段指定的**路径中的文件** 作为引用的插件代码并会进行合法性校验。

(2) 对于 `plugins` 中无 `path` 字段的使用方式，上传/预览时，系统会直接**使用线上** 已发布的全量的 `provider` 的 `version` 版本的文件作为引用的**插件代码** 。

## 附录

### 配置修改

使用新版引擎IDE或引擎工具重导出后，会有三个变化。

(1) 引擎插件为单独目录，内置plugin.json和signature.json

其中signature.json用于校验，此两个文件不会打包到代码包中

(2) game.json中添加通用插件配置

(3) 使用引擎的方式变更为requirePlugin

#### (1) 引擎插件本地目录结构
    
    
    xxxx-lib
    	--test.js //插件实现文件(可包含多个)  
    	--plugin.json  //插件配置文件  
    	--signature.json //插件文件校验文件
    

plugin.json配置
    
    
    {
      "main": "index.js"  //插件入口文件
    }
    

signature.json配置
    
    
    {
    "provider":"wxidfsdfsdfsdfsdf",
    "signature": [
      {
          "path": "aaa-js.js",//相对插件目录的路径
          "md5": "5951fef57e1b6902a1c5e5ae5a6ea441"
       }
    ]
    }
    

字段名称 | 含义  
---|---  
provider | 插件申请的appId  
signature | 插件目录签名  
path | 插件文件(相对插件目录的路径)  
md5 | 对应文件的md5  
  
#### (2) game.json添加的配置
    
    
    {
      "plugins": {
        "alias": { // 自定义的alias 是 requirePlugin 时用的 alias
          "provider": "wxidfsdfsdfsdfsdf",
          "version": "1.0",
          "path": "aaa"//目录结构
        }
      }
    }
    

字段含义:

参数名称 | 参数含义  
---|---  
plugins | 通用插件的配置  
alias | 自定义的alias requirePlugin时可用  
provider | 插件的appId  
version | 插件版本  
path | 引擎插件的本地文件夹路径  
  
#### (3) 使用引擎方式变更
    
    
    1、requirePlugin('alias') -- plugin.json中配置的alias
    2、requirePlugin('alias/xxx.js') -- 指定任意js文件
