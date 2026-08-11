---
title: "概述"
type: guide
category: guide/performance/startup
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/predownload-of-minigame-packages.html
---

# 概述

在此之前我们已经支持了小游戏代码分包的[并行下载能力](<perf-action-start-parallel-download.md>)。 但由于直玩广告等能力的推出，以及游戏子玩法的裂变需求，需要在不同情况下加载不同的小游戏代码分包，因此提供了根据设备类型、微信客户端、启动query等来自定义预下载小游戏代码分包的能力。

# 能力要求

  * iOS和Android客户端版本 >= `8.0.70`

# 使用方法

## 「推荐」方法一：微信开发者工具插件

使用微信开发者工具插件，可便捷配置和验证，降低手工配置的心智负担。

添加插件：微信开发者工具拓展面板搜索「微信小游戏分包预下载配置」获取插件，并打开配置面板

![](https://res8.wxqcloud.qq.com.cn/wxdoc/f9f6861f-52ae-4e9a-886d-b9039b66047b.png)

  1. 新增分包配置与保存配置

  * 新增配置：新增一个小游戏代码分包的规则配置
  * 重置：丢弃当前修改，重置为game.json中已保存的版本
  * 保存：将当前配置保存至game.json
  * 清空：清空配置
  * JSON预览：查看当前规则对应的json配置

![](https://res8.wxqcloud.qq.com.cn/wxdoc/897d0411-1ef7-48e6-8b71-679acd8df0f2.png)

  3. 规则字段填写

  * 可添加条件和条件组，具体字段可参照后文手工配置

![](https://res8.wxqcloud.qq.com.cn/wxdoc/de3514a5-bf3e-4ad0-9453-db837ba4f662.png)

  5. 测试用例配置与验证

  * 新建测试样例：填写平台、系统版本、微信客户端版本、基础库版本和query，模拟用户侧情况
  * 执行结果：检测样例是否有命中的小游戏分包

![](https://res8.wxqcloud.qq.com.cn/wxdoc/309b3380-45c2-429e-a547-c66407a66d11.png)

## 方法二：手工配置

通过在game.json中手动填写 `preloadPackages` 字段的方式进行配置

### 配置介绍

字段名 | 字段类型 | 是否必填 | 说明  
---|---|---|---  
version | `String` | 是 | 配置版本号，固定填 `1.0.0`  
packages | `Array<Object>` | 是 | 分包配置列表  
  
### 分包配置

字段名 | 字段类型 | 是否必填 | 说明  
---|---|---|---  
name | `String` | 是 | 分包名  
staticRules | `Object` | 是 | 静态配置，可填写 `platform`、`systemVersion`、`clientVersion`、`libVersion` 规则  
dynamicRules | `Object` | 否 | 动态配置，可填写 `query` 规则  
  
### 配置对象

字段名 | 字段类型 | 是否必填 | 说明  
---|---|---|---  
logic | `String` | 是 | 此配置中规则间的逻辑关系，支持 `all` 和 `any` 两种  
rules | `Array<Object>` | 是 | 规则列表，**支持嵌套配置对象**  
  
  * `all`：列表中规则需全部满足才通过
  * `any`：列表中任意一个规则满足即通过

### 规则

字段名 | 字段类型 | 是否必填 | 说明  
---|---|---|---  
source | `String` | 是 | 规则来源  
field | `String` | 是 | 规则字段名  
operator | `String` | 是 | 规则字段条件操作符  
value | `String`、`Array<String>` | 是 | 规则字段值  
  
#### 规则来源

可选值 | 说明  
---|---  
system | 可填写静态规则相关的字段名  
query | 可填写动态规则相关的字段名  
  
#### 规则字段名

可选值 | 说明  
---|---  
platform | 平台类型  
systemVersion | 系统版本号  
clientVersion | 客户端版本号  
libVersion | 基础库版本号  
  
#### 条件操作符

可选值 | 说明  
---|---  
in | 值在列表中，此时value为 `Array` 类型  
notIn | 值不在列表中，此时value为 `Array` 类型  
equal | 等于，此时value为 `String`、`Number` 类型  
notEqual | 不等于，此时value为 `String`、`Number` 类型  
less | 小于，此时value为可比较值  
lessEqual | 小于等于，此时value为可比较值  
greater | 大于，此时value为可比较值  
greaterEqual | 大于等于，此时value为可比较值  
range | 值在范围内，此时value为 `[最小可比较值, 最大可比较值]` 类型  
notRange | 值不范围内，此时value为 `[最小可比较值, 最大可比较值]` 类型  
  
#### 规则字段值

##### platform

可选值 | 说明  
---|---  
iOS | iOS系统  
Android | 安卓系统  
Windows | Windows系统  
Mac | Mac系统  
  
##### 可比较值

当 `field` 为 `systemVersion`、`clientVersion`、`libVersion` 时，`value` 应该填版本号这种可比较大小的值，例如：

  * 微信客户端版本号：`8.0.70`
  * 基础库版本号：`3.17.0`
  * 系统版本号：iOS `26.0.1`、Android `36`

##### 填写示例

###### `source` 是 `system` 时

根据 `operator` 和 `field` 的不同，可填写不同的值

  * `field` 是版本号类型 
    * `in`：`['8.0.50', '8.0.45', '8.0.60']`
    * `less`、`greater`、`equal`：`8.0.50`
    * `range`：`['8.0.40', '8.0.50']`
  * `field` 是platform 
    * `in`：`['iOS', 'Android']`
    * `equal`：`iOS`
    * `less`、`greater`、`range`：不支持

###### `source` 是 `query` 时

此时 `field` 和 `value` 是 query 中的键值对关系。例如 `field=userType` `value=vip` 等同于 `?userType=vip`

###### 完整示例

以下规则表示：

  * `package1` 需预下载的情况

    * 静态规则伪SQL代码：`(platform = 'iOS' and systemVersion >= '18.0.0' and clientVersion between ['8.0.0', '9.0.0']) or (platform = 'Android' and systemVersion >= '30')`
    * 在满足静态规则的情况下，再检查 `query`：`userType = 'vip'`
  * `package2` 需预下载的情况

    * 静态规则伪SQL代码：`platform in ['iOS', 'Android']`

    
    
    {
      "preloadPackages": {
        "version": "1.0.0",
        "packages": [
          {
            "name": "package1",
            "staticRules": {
              "logic": "any",
              "rules": [
                {
                  "logic": "all",
                  "rules": [
                    {
                      "source": "system",
                      "field": "platform",
                      "operator": "equal",
                      "value": "iOS"
                    },
                    {
                      "source": "system",
                      "field": "systemVersion",
                      "operator": "greaterEqual",
                      "value": "18.0.0"
                    },
                    {
                      "source": "system",
                      "field": "clientVersion",
                      "operator": "range",
                      "value": [
                        "8.0.0",
                        "9.0.0"
                      ]
                    }
                  ]
                },
                {
                  "logic": "all",
                  "rules": [
                    {
                      "source": "system",
                      "field": "platform",
                      "operator": "equal",
                      "value": "Android"
                    },
                    {
                      "source": "system",
                      "field": "systemVersion",
                      "operator": "greaterEqual",
                      "value": "30"
                    }
                  ]
                }
              ]
            },
            "dynamicRules": {
              "logic": "all",
              "rules": [
                {
                  "source": "query",
                  "field": "userType",
                  "operator": "equal",
                  "value": "vip"
                }
              ]
            }
          },
          {
            "name": "package2",
            "staticRules": {
              "logic": "all",
              "rules": [
                {
                  "source": "system",
                  "field": "platform",
                  "operator": "in",
                  "value": [
                    "Android",
                    "iOS"
                  ]
                }
              ]
            }
          }
        ]
      }
    }
    

# 能力验证

目前此能力仅在正式版小游戏生效，开发阶段**建议通过微信开发者工具插件验证配置是否生效** 。

正式版本在 `wx.loadSubpackage` 回调中返回 `loadInfo` 字段，记录此分包的预下载情况。

字段名 | 字段类型 | 说明  
---|---|---  
loaded | `Boolean` | 是否已加载  
progress | `Number` | 下载进度  
hitOptmizations | `Object` | 命中的预下载优化  
  
hitOptmizations格式

字段名 | 字段类型 | 说明  
---|---|---  
`1` | `Object` | 命中小游戏启动前预下载  
`2` | `Object` | 命中小游戏启动过程中预下载  
  
预下载信息

字段名 | 字段类型 | 说明  
---|---|---  
needDownload | `Boolean` | 命中此优化时，是否需要下载小游戏代码分包  
startTime | `Number` | 命中预下载的毫秒级 Unix 时间戳
