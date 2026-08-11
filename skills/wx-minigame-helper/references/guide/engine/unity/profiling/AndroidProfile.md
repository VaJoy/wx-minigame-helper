---
title: "使用Android CPU Profiler性能调优"
type: guide
category: guide/engine/unity/profiling
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/unity-webgl-transform/Design/AndroidProfile.html
---

# 使用Android CPU Profiler性能调优

  0. 转换导出插件勾选"Profiling-funcs", 请勿使用Development(该模式将极大降低性能)。 发布上线版本请务必关闭该选项！

  1. 在Android微信小游戏打开调试进行录制

![](https://res8.wxqcloud.qq.com.cn/wxdoc/daf945bf-80ac-4c07-854b-d782961be1c6.png)
  2. 停止性能数据录制

与步骤1相似，在相同的菜单中选择Stop CPU Profile

  3. 传输录制文件到PC

录制结束后，Android会生成一份xxx.cpuprofile，该文件格式可以使用chrome进行解析。 因此我们需要将录制后的文件传输到PC使用chrome进行分析。 文件路径通常为：Android/data/com.tencent.mm/MicroMsg/appbrand/trace ![](https://res8.wxqcloud.qq.com.cn/wxdoc/9bc9e4c1-a6ef-4d47-9f15-c8a0eb65ea60.png)

  4. 利用PC(Windows/Mac)的Edge/Chrome加载数据

以Edge为例：浏览器菜单打开"更多工具-开发人员工具-右上角...-更多工具-JavaScript探测器"，然后点击加载前面导出的cpuprofile文件即可。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/76f5f755-de24-4bbc-951b-6716964f8228.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/ee6512c8-2f92-4161-a49e-78384a1701e9.png)

视图有多种方式，可选择"图表"(Chart)分析每一帧游戏函数耗时情况

  5. 使用JavaScriptProfile进行数据分析

![](https://res8.wxqcloud.qq.com.cn/wxdoc/1b687e0d-6257-4eae-87fa-425d15e44572.png)

注意：

  1. 编译版本仅当导出勾选Profiling-funcs(推荐)或Development时才能在函数堆栈中看到可读函数名。
  2. 特殊情况下，如果游戏勾选Profiling-funcs会导致代码包过大，那么不要使用此选项。此时得到的Profile中函数为数字ID，有两种做法进行解读： 
     * 2.1 通过webgl导出目录下的symbols文件对照映射
     * 2.2 通过[替换脚本](<https://git.weixin.qq.com/wechat-minigame/minigame-tuanjie-demo/blob/master/tools/update_v8_wasm_profile.py>)对cpuprofile进行自动映射到真实函数。使用方式：python update_v8_wasm_profile.py $cpuprofile $symbol
  3. 如希望能从游戏启动立即抓取profile，请在game.js末尾代码稍作修改：
         
         const gl = GameGlobal.canvas.getContext('webgl') 
             gl.clear(gl.COLOR_BUFFER_BIT);
             setTimeout(() => {
             gameManager.startGame();
             GameGlobal.manager = gameManager;
          }, 10000);
         

修改后，游戏启动将会有10s黑屏，可在此期间打开调试。
  4. 最新版本Chrome/Edge已经将Javascript Profiler默认隐藏，你可以使用微信开发者工具查看`.cpuprofiler`，或是通过以下方式将它在浏览器显示出来： ![image](https://github.com/zombieyang/minigame-unity-webgl-transform/assets/5595819/2a4a276d-d5a7-4d1e-9cb4-891f3f984e0d)
