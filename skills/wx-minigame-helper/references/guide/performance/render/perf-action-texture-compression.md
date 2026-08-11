---
title: "资源纹理压缩"
type: guide
category: guide/performance/render
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-texture-compression.html
---

# 资源纹理压缩

### 图形资源内存

小游戏运行过程中，内存过大是最为困扰开发者的一个问题。因为小游戏的内存使用过大时，在操作系统内存管理机制下，有可能会导致闪退或无法运行从而使得用户流失。 据统计有超过千款小游戏内存使用不佳，因内存产生的 Crash 率居高不小。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/e6df84b5-eb3d-42c8-8abe-b89d7001ac15.png)

从上图中也能发现随着时间推移(单位：分钟)，游戏在不注意资源释放的情况下很有可能会越来越大。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/acccbaa8-a282-4b7f-9adb-98417e9064d4.png)

《星途》的内存使用（来自[小游戏云测试服务](<https://developers.weixin.qq.com/community/develop/article/doc/000accdb8fc1400c387a4ada15ac13>)）。

在内存的使用中， 图形内存（graphic memory）往往是游戏内存消耗大户。对于重度游戏我们发现图形渲染所使用的内存占比更大。因此优化图形内存对于整体内存使用率的降低是非常有必要的。

### 纹理压缩

对于图形渲染资源的内存使用是否有比较好的办法去降低呢？ 纹理压缩是一种专为在计算机图形渲染系统中存储纹理而使用的图像压缩技术。 与普通图像压缩算法的不同之处在于，纹理压缩算法为纹素的随机存取做了优化。

## 压缩算法与性能

### 压缩纹理兼容性

从微信小游戏平台支持的压缩格式上来看，目前小游戏各设备平台能够支持的压缩纹理格式如图表所示，此图表为各个平台下下所能支持的压缩纹理格式的最大集

设备平台 | 压缩纹理格式  
---|---  
IOS | ASTC、PVRTC、ETC1(仅高性能模式)  
Android | ASTC、ETC1、ETC2  
Windows/Mac | DXT5、DXT3、DXT1、BC4/5/7  
开发者工具 | DXT5、DXT3、DXT1、BC4/5/7  
  
通常情况下，**移动设备** 平台推荐使用ASTC，而在**PC、Mac** 等场景下，推荐使用DXT5

开发者在开发过程中，还应当充分考虑不同压缩纹理格式在不同的设备平台、设备平台下的操作系统版本支持、芯片支持等几个方面，来使用兼容性最高的压缩纹理格式，保障游戏用户的正常游戏体验。

### 压缩纹理的性能优势

测试的手机是一加 3T， 实验中使用了 30 张都是 584KB 的 JPG 图片进行渲染。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/8941ea63-20fb-42d4-aef2-b0184d0c86d4.png)

图 1：实验前初始内存

图 2：经过纹理压缩的图片渲染，GPU 内存消耗总量。

图 3：JPG 格式的图片渲染，GPU 内存消耗总量。

内存比较：使用纹理压缩时内存从 78(176MB-98MB)降低到了 20MB(118MB-98MB), 带来约为 70%的图形资源内存消耗。

下面就是使用了 Snapdragon Profiler 工具进行的一些测试数据 使用了纹理压缩的测试数据： ![](https://res8.wxqcloud.qq.com.cn/wxdoc/7a82fd0d-0b0a-4744-9210-99c76093ea23.png)

Total Texture Usage 只有 46M

未使用纹理压缩的测试数据：

![](https://res8.wxqcloud.qq.com.cn/wxdoc/b51bac01-c799-4a7a-8e85-a45722750936.png)

Total Texture Usage 为 148M 从这里也可以佐证压缩纹理时图形内存占用能得到极大的降低。

## Unity 微信小游戏纹理压缩

[查阅文档](<https://wechat-miniprogram.github.io/minigame-unity-webgl-transform/Design/CompressedTexture.html>)

## Cocos Creator 微信小游戏纹理压缩实践

[引擎文档](<https://docs.cocos.com/creator/manual/zh/asset/compress-texture.html?h=%E5%8E%8B%E7%BC%A9%E7%BA%B9%E7%90%86>)

在 cocos creater 里面进行简单的配置，就可以在打包小游戏的过程中把图片进行纹理压缩。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/97126d48-7195-4f12-9936-69d273e8723f.png)

这里不仅能选择压缩算法，还能选择压缩算法质量等参数，非常方便。 不过目前引擎自带设置还不能支持批量操作（其实有方法解决不能批量操作的问题，这就要在 cocos 社区上找）。

## Laya 微信小游戏纹理压缩实践

[引擎文档](<https://ldc2.layabox.com/doc/?nav=zh-ts-4-14-7>)

目前 LayaAir2.x 版本提供的纹理压缩功能是只有 VIP 会员账号才能使用，可以支持批量转换的操作如下。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/7cf7704d-12ab-42a3-8862-9901bb60d197.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/586dd9ad-4f93-4cd1-ab1c-c682bebb8adb.png)

选择需要纹理压缩的图片所在文件夹和转换后的保存路径，接着选择使用平台按确定即可。

## Egret 微信小游戏纹理压缩实践

[引擎文档](<https://www.egret.uk/egretengine2d/%E4%BD%8D%E5%9B%BE%E7%BA%B9%E7%90%86Bitmap/KTX%20%E7%BA%B9%E7%90%86%E5%8E%8B%E7%BC%A9>)

白鹭是没有提供像 Cocos Creater 那样的配置的，是需要我们手动转。 白鹭官方提供了 4 种工具让我们进行制作压缩纹理:

我们选择了 texture-compressor 这个工具进行转换，该工具是可以批量操作的。

npm install texture-compressor 进行安装

目录结构:

![](https://res8.wxqcloud.qq.com.cn/wxdoc/35fd3512-c390-442c-a060-9ac90c27ced4.png)

input 文件夹是存放纹理压缩前的图片，而 output 是存放纹理压缩后生成的.KTX 后缀的文件。 index.js 是执行文件。 运行中如何加载使用压缩纹理则可以通过上述引擎文档参考 demo。

## 压缩纹理需要注意的一些问题

从上述实践过程中，我们发现：

  * 压缩纹理能够很好的节省图形资源内存，从而让我们小游戏的内存使用得到优化。
  * 引擎制作工具也提供了支持， 让我们在制作资源制作打包时能够快速使用压缩纹理。

然而，是否所有情况都适合使用压缩纹理呢？ 是否还存在使用上需要注意的问题

### 资源大小

纹理压缩的资源体积会比常规压缩算法偏大, 硬件对不同压缩算法的尺寸有要求，这也是最为影响开发者制作流程的一个因素。典型地，在 Android 中的 ETC1 纹理压缩算法需要长宽尺寸是 2 的 N 次幂， 而 iOS 中的 PVRTC 则除了 2 的 N 次幂外还要求是正方形。例如原图尺寸为 228x380 的图片，转换成 PVRTC 的 ktx 后，尺寸为 512x512。 我们来举个制作不太符合此规范的资源的例子，原始图像是：879 x 1242。那么： ![](https://res8.wxqcloud.qq.com.cn/wxdoc/b9e9a4ec-bd24-439b-88fc-20997721e33f.png) 可以看到，ETC1, PVRTC 压缩后的文件体积比以前大很多（在考虑 mipmap 的情况下，还会增加 30%左右） 因此，在使用纹理压缩时，最为挑战开发者的一个问题就是如何让美术资源更符合压缩算法的标准尺寸。美术资源最好是 2 的 N 次幂，在 iOS PVRTC 下则需要长宽相等。

### alpha 通道透明度

Android 下 ETC1 是不支持 alpha 通道的，因此还需要额外体积去多存储这部分 alpha 通道数据，而 PVRTC 则默认支持。
