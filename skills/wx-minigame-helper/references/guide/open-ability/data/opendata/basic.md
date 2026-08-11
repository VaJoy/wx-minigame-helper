---
title: "开放数据域基础能力"
type: guide
category: guide/open-ability/data/opendata
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/opendata/basic.html
---

## 开放数据域基础能力

开发者也可以不使用框架，而直接使用基础能力来运行。`开放数据域` 是一个封闭、独立的 JavaScript 作用域。要让代码运行在开放数据域，需要在 game.json 中添加配置项 `openDataContext` 指定开放数据域的代码目录。添加该配置项表示**小游戏启用了开放数据域** ，这将会导致一些 限制。
    
    
    {
      "deviceOrientation": "portrait",
      "openDataContext": "src/myOpenDataContext"
    }
    

同时还需要在该目录下创建 index.js 作为开放数据域的入口文件，其代码运行在开放数据域。game.js 是整个游戏的入口文件，其代码运行在 `主域`。对应以上配置，应该有如下的目录结构：
    
    
    ├── src
    |   └── myOpenDataContext
    |       ├── index.js
    |       └── ...
    ├── game.js
    ├── game.json
    └── ...
    

src/myOpenDataContext 是 `开放数据域的代码目录`，除 src/myOpenDataContext 以外是 `主域的代码目录`。

主域和开放数据域中的代码不能相互 require。以如下的目录结构为例：
    
    
    ├── src
    |   └── myOpenDataContext
    |       ├── index.js
    |       ├── util.js
    |       └── ...
    ├── lib
    |   └── render.js
    └── game.js
    

在 game.js 中不能 `require('src/myOpenDataContext/util')` 在 src/myOpenDataContext/index.js 中不能 `require('../../lib/render.js')`

## 主域和开放数据域的通信

开放数据域不能向主域发送消息。

主域可以向开放数据域发送消息。调用 [wx.getOpenDataContext()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/context/wx.getOpenDataContext.html>) 方法可以获取开放数据域实例，调用实例上的 [OpenDataContext.postMessage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/context/OpenDataContext.postMessage.html>) 方法可以向开放数据域发送消息。
    
    
    // game.js
    let openDataContext = wx.getOpenDataContext()
    openDataContext.postMessage({
      text: 'hello',
      year: (new Date()).getFullYear()
    })
    

在开放数据域中通过 [wx.onMessage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/context/wx.onMessage.html>) 方法可以监听从主域发来的消息。
    
    
    // src/myOpenDataContext/index.js
    wx.onMessage(data => {
      console.log(data)
      /* {
        text: 'hello',
        year: 2018
      } */
    })
    

## 展示关系链数据

### offscreenCanvas 模式（默认模式）

offscreenCanvas 模式下，如果想要展示通过关系链 API 获取到的用户数据，如绘制排行榜等业务场景，需要在开放数据域内将排行榜绘制到 `sharedCanvas` 上，再在主域将 sharedCanvas 渲染到主屏Canvas。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/bdf3364b-43f6-46ee-9c15-8d59ff8e80df.png)
    
    
    // src/myOpenDataContext/index.js
    const sharedCanvas = wx.getSharedCanvas()
    const context = sharedCanvas.getContext('2d')
    
    function drawRankList (data) {
      data.forEach((item, index) => {
        ctx.fillStyle = 'yellow'
        ctx.fillText(item.nickname)
        // ...
      })
    }
    
    wx.getFriendCloudStorage({
      keyList: ['key1', 'key2'],
      success: res => {
        let data = res.data
        drawRankList(data)
      }
    })
    

sharedCanvas 是主域和开放数据域都可以访问的一个离屏画布。在开放数据域调用 wx.getSharedCanvas() 将返回 sharedCanvas。
    
    
    // src/myOpenDataContext/index.js
    let sharedCanvas = wx.getSharedCanvas()
    let context = sharedCanvas.getContext('2d')
    
    const loop = () => {
      requestAnimationFrame(() => {
        context.fillStyle = 'red'
        context.fillRect(0, 0, 100, 100)
        loop()
      })
    }
    loop()
    

在主域中可以通过开放数据域实例访问 sharedCanvas，通过 drawImage() 方法可以将 sharedCanvas 绘制到上屏画布。
    
    
    // game.js
    let openDataContext = wx.getOpenDataContext()
    let sharedCanvas = openDataContext.canvas
    
    let canvas = wx.createCanvas()
    let context = canvas.getContext('2d')
    
    const loop = () => {
      requestAnimationFrame(() => {
        context.drawImage(sharedCanvas, 0, 0)
        loop()
      })
    }
    loop()
    

sharedCanvas 的宽高只能在主域设置，不能在开放数据域中设置。
    
    
    // game.js
    sharedCanvas.width = 400
    sharedCanvas.height = 200
    

sharedCanvas 本质上也是一个离屏 Canvas，而重设 Canvas 的宽高会清空 Canvas 上的内容。所以要通知开放数据域去重绘 sharedCanvas。
    
    
    // game.js
    
    openDataContext.postMessage({
      command: 'render'
    })
    
    
    
    // src/myOpenDataContext/index.js
    openDataContext.onMessage(data => {
      if (data.command === 'render') {
        // ... 重绘 sharedCanvas
      }
    })
    

### screenCanvas 模式

从基础库 v3.6.6 开始支持 screenCanvas 模式。

与默认模式不同的是，该模式下的 sharedCanvas 不再是离屏 Canvas，而是独立的在屏 Canvas，所以不再需要主域调用 `context.drawImage(sharedCanvas, 0, 0)` 去渲染上屏，也不再需要循环刷新渲染。层级上，screenCanvas 模式的 sharedCanvas 会盖在主屏 canvas 之上。

另外，该模式支持在主域动态设置 sharedCanvas 的显示宽高和显示位置。

需要注意的是，不管哪种模式，sharedCanvas 都是全局单例，一旦使用其中一种模式，将不能再切换到另一种模式。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/fdc9497d-3afc-4726-95cb-8d1a6790dfbc.png)

screenCanvas 模式示例代码：
    
    
    // game.js
    const openDataContext = wx.getOpenDataContext({
      sharedCanvasMode: 'screenCanvas' //  screenCanvas=在屏模式
    })
    const sharedCanvas = openDataContext.canvas
    sharedCanvas.width = 300 // 设置分辨率宽
    sharedCanvas.height = 200 // 设置分辨率高
    sharedCanvas.style.width = "150px" // 设置显示宽
    sharedCanvas.style.height = "100px" // 设置显示高
    sharedCanvas.style.left = "50px" // 设置屏幕左边距
    sharedCanvas.style.top = "100px" // 设置屏幕上边距
    
    // screenCanvas 模式，可动态调整 sharedCanvas 的显示宽高、显示位置。
    // 例如通过设置 width、height 为 1px，并且 left、top 挪到主屏以外，即可隐藏掉 sharedCanvas
    setTimeout(() => {
      sharedCanvas.style.width = "1px" // 设置显示宽
      sharedCanvas.style.height = "1px" // 设置显示高
      sharedCanvas.style.left = "-10px" // 设置屏幕左边距
      sharedCanvas.style.top = "-10px" // 设置屏幕上边距
    }, 5000)
    
    
    
    // src/myOpenDataContext/index.js
    const sharedCanvas = wx.getSharedCanvas()
    const ctx = sharedCanvas.getContext('2d')
    
    const loop = () => {
      requestAnimationFrame(() => {
        ctx.fillStyle = 'yellow'
        ctx.fillRect(50, 50, 100, 100);
        loop()
      })
    }
    loop()
    

## 限制

当小游戏使用开放数据域时，小游戏环境会对主域和开放数据域应用一些限制，并且不同模式对应的限制也不一样，具体如下。

### 主域

offscreenCanvas 模式 | screenCanvas 模式  
---|---  
在主域，sharedCanvas 只能被绘制到主屏 canvas，不能被绘制到其他离屏 canvas 上 | 在主域，sharedCanvas 不能被绘制到任何 canvas，包括主屏 canvas  
主屏 canvas 不能以任何形式被绘制到其他离屏 canvas 上，包括 drawImage、createPattern、texImage2D、texSubImage2D 等 | 允许主屏 canvas 被绘制到其他离屏 canvas 上  
主屏 canvas 不能调用 toDataUrl、getImageData、readPixels 等任何读取画布像素的操作 | 允许主屏 canvas 调用 toDataUrl、getImageData、readPixels  
主屏 canvas 调用 toTempFilePath、toTempFilePathSync 会返回“伪路径“，”伪路径“仅能用于 wx.saveImageToPhotosAlbum、wx.shareAppMessage 等接口，而不能通过文件系统读取 | 主屏 canvas 调用 toTempFilePath、toTempFilePathSync 会返回真实路径，允许通过文件系统读取  
在主域，sharedCanvas 调用 toTempFilePath、toTempFilePathSync 会返回“伪路径“，”伪路径“仅能用于 wx.saveImageToPhotosAlbum、wx.shareAppMessage 等接口，而不能通过文件系统读取 | 在主域，sharedCanvas 调用 toTempFilePath、toTempFilePathSync 会返回“伪路径“，”伪路径“仅能用于 wx.saveImageToPhotosAlbum、wx.shareAppMessage 等接口，而不能通过文件系统读取  
在主域，sharedCanvas 不能调用 toDataURL、getImageData、readPixels 等任何读取画布像素的操作 | 在主域，sharedCanvas 不能调用 toDataURL、getImageData、readPixels 等任何读取画布像素的操作  
在主域，sharedCanvas 不能调用 getContext | 在主域，sharedCanvas 不能调用 getContext  
sharedCanvas 的宽高只能在主域设置 | sharedCanvas 的宽高、位置只能在主域设置  
  
![](https://res8.wxqcloud.qq.com.cn/wxdoc/389749e8-f28f-427f-867b-d86bf39a417e.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/8b50964f-5cfe-4507-9697-1df50751a91d.png)

### 开放数据域

开放数据域只能调用有限的 API，如下所示：

**帧率**

  * [requestAnimationFrame()](<https://developers.weixin.qq.com/minigame/dev/api/render/frame/requestAnimationFrame.html>)
  * [cancelAnimationFrame()](<https://developers.weixin.qq.com/minigame/dev/api/render/frame/cancelAnimationFrame.html>)

**Timer**

  * [setTimeout()](<https://developers.weixin.qq.com/minigame/dev/reference/api/setTimeout>)
  * [clearTimeout()](<https://developers.weixin.qq.com/minigame/dev/reference/api/clearTimeout>)
  * [setInterval()](<https://developers.weixin.qq.com/minigame/dev/reference/api/setInterval>)
  * [clearInterval()](<https://developers.weixin.qq.com/minigame/dev/reference/api/clearInterval>)

**系统信息**

  * [wx.getSystemInfo()](<https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfo.html>)
  * [wx.getSystemInfoSync()](<https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoSync.html>)

**触摸事件**

  * [wx.onTouchStart()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchStart.html>)
  * [wx.onTouchMove()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchMove.html>)
  * [wx.onTouchEnd()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchEnd.html>)
  * [wx.onTouchCancel()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchCancel.html>)
  * [wx.offTouchStart()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.offTouchStart.html>)
  * [wx.offTouchMove()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.offTouchMove.html>)
  * [wx.offTouchEnd()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.offTouchEnd.html>)
  * [wx.offTouchCancel()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.offTouchCancel.html>)

**画布**

  * [wx.createCanvas()](<https://developers.weixin.qq.com/minigame/dev/api/render/canvas/wx.createCanvas.html>)

开放数据域的所有 canvas 只支持 `2d` 渲染模式，同时不可使用 toDataURL 以及 toTempFilePath(Sync)

**图片**

  * [wx.createImage()](<https://developers.weixin.qq.com/minigame/dev/api/render/image/wx.createImage.html>)

开放数据域的 Image 只能使用本地或微信 CDN 的图片，不能使用开发者自己服务器上的图片。对于非本地或非微信 CDN 的图片，可以先从主域 [wx.downloadFile()](<https://developers.weixin.qq.com/minigame/dev/api/network/download/wx.downloadFile.html>) 下载图片文件，再通过 [OpenDataContext.postMessage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/context/OpenDataContext.postMessage.html>) 把文件路径传给开放数据域去使用。

**开放数据**

  * [wx.getFriendCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getFriendCloudStorage.html>)
  * [wx.getGroupCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupCloudStorage.html>)
  * [wx.getUserCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserCloudStorage.html>)
  * [wx.setUserCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.setUserCloudStorage.html>)
  * [wx.removeUserCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.removeUserCloudStorage.html>)

Tips: 更多接口请在 `API` \- `开放接口` \- `开放数据` 中查看

**监听主域消息**

  * [wx.onMessage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/context/wx.onMessage.html>)
