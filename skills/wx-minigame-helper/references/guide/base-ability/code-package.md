---
title: "代码包"
type: guide
category: guide/base-ability
source: https://developers.weixin.qq.com/minigame/dev/guide/base-ability/code-package.html
---

# 代码包

## 版本类型

代码包分为 **开发版** 、**体验版** 、**正式版** 三种：

  * **开发版** ：每个开发者在开发过程中点击“预览”生成的版本，每个小游戏可以有多个开发版，对于每个开发者本地只能有一个开发版；开发版代码包只能通过扫码获得；
  * **体验版** ：通过在管理后台将特定开发版设置成体验版得到的版本，每个小游戏只能有一个体验版；
  * **正式版** ：正式发布在线上的版本，每个小游戏只能有一个正式版；

## 包大小限制

代码包总大小不能超过 30M，单个分包不限制大小，主包不超过 4M。关于分包更多信息，可以参考 [分包加载](<subpackage/useSubPackage.md>)。

## 缓存与清理机制

代码包下载到客户端后会被缓存起来，以便于下次离线打开。代码包清理的时机由算法动态计算，但可以认为在手机存储空间足够的情况下，代码包都不会被主动清理。 主动清理：

  * 用户主动在历史列表删除小游戏（下拉任务栏删除不算）时，代码包会被清理。
  * 用户在设置-通用-存储空间，可以清除缓存。

## 文件类型

在项目目录中，以下文件会经过编译，因此上传之后无法直接访问到：*.js、game.json。除此之外，只有后缀名在白名单内的文件可以被上传，不在白名单列表内文件在开发工具能被访问到，但无法被上传。具体白名单列表如下：

  1. png
  2. jpg
  3. jpeg
  4. gif
  5. svg
  6. js
  7. json
  8. cer
  9. obj
  10. dae
  11. fbx
  12. mtl
  13. stl
  14. 3ds
  15. mp3
  16. pvr
  17. wav
  18. plist
  19. ttf
  20. fnt
  21. gz
  22. ccz
  23. m4a
  24. mp4
  25. bmp
  26. atlas
  27. swf
  28. ani
  29. part
  30. proto
  31. bin
  32. sk
  33. mipmaps
  34. txt
  35. zip
  36. tt
  37. map
  38. ogg
  39. silk
  40. dbbin
  41. dbmv
  42. etc
  43. lmat
  44. lm
  45. ls
  46. lh
  47. lani
  48. lav
  49. lsani
  50. ltc
  51. aac
  52. astc
  53. br
  54. csv
  55. cur
  56. dat
  57. dds
  58. glb
  59. gltf
  60. ico
  61. ktx
  62. lmani
  63. lml
  64. pkm
  65. prefab
  66. scene
  67. skel
  68. wasm
  69. xml
