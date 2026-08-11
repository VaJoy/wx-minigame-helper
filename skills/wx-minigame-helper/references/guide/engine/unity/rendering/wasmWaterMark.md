---
title: "wasm水印插件"
type: guide
category: guide/engine/unity/rendering
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/unity-webgl-transform/Design/wasmWaterMark.html
---

# wasm水印插件

> 如果同时使用代码分包插件，需要在使用分包插件后，再使用水印插件对分包后的wasm代码打水印

### 说明:

在平台原有相似度检测基础上，为进一步保障wasm小游戏的代码安全，引入wasm水印机制 已添加水印的wasm游戏，若遭遇恶意人员扒包抄袭，平台可通过水印准确检测出游戏的原作者，并处罚恶意抄袭人员

### 使用方式:

插件依赖[微信开发者工具](<https://developers.weixin.qq.com/miniprogram/dev/devtools/download>)1.05.2104251 RC 及以上，稳定版 1.05.2105100 及以上

#### 添加插件

> 部分示意图可能有出入，请升级微信开发者工具版本

打开拓展设置，找到水印工具，添加插件

![](https://res8.wxqcloud.qq.com.cn/wxdoc/4942bf27-3aa0-491c-bd34-1ac8008f4386.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/bb97852d-eb5c-47c5-b18a-1e73cf86e033.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/25331c7b-6da6-4572-8a77-7f2b69ef662b.png)

#### 使用插件

在目录树上方工具栏找到水印工具icon，点击显示水印插件面板

![](https://res8.wxqcloud.qq.com.cn/wxdoc/7e33485f-e199-4a31-953a-3259b900634e.png)

项目首次使用插件默认会启用打水印功能。

插件检测并展示项目中的wasm文件，开发者自行决定是否需要上传并打水印。

![](https://res.wx.qq.com/wechatgame/product/webpack/userupload/20210623/163231/single-file.png)

点击上传按钮后，插件会自动执行逻辑

正在打水印

![](https://res.wx.qq.com/wechatgame/product/webpack/userupload/20210623/164104/doing.png)

下载中

![](https://res.wx.qq.com/wechatgame/product/webpack/userupload/20210623/164114/downloading.png)

已完成

![](https://res.wx.qq.com/wechatgame/product/webpack/userupload/20210623/164504/reset.png)

完成后，即可测试小游戏是否正常运行，若有异常，可点击还原wasm文件到初始状态，重新打水印。

当有两个wasm文件时，操作同理

![](https://res.wx.qq.com/wechatgame/product/webpack/userupload/20210623/163222/multi-file.png)

若不想使用水印功能，点击关闭水印，wasm代码回到初始状态

![](https://res.wx.qq.com/wechatgame/product/webpack/userupload/20210623/163419/disabled.png)

### 注意

打水印和下载过程可能会有一定耗时，请耐心等待。

若AppID为测试号，或者是小程序AppID，会出现如下界面，更换正确的AppID后重新检测即可

![](https://res.wx.qq.com/wechatgame/product/webpack/userupload/20210623/163318/invalid-appid.png)
