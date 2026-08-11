---
title: "设备档位下的用户分布"
type: guide
category: guide/performance/overview
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-benchmarkLevel.html
---

# 设备档位下的用户分布

开发者可通过[wx.getDeviceBenchmarkInfo](<https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getDeviceBenchmarkInfo.html>) 获取设备性能得分和机型档位数据，其中，接口的返回值中的benchmarkLevel参数，反映了设备的性能等级。

benchmarkLevel的取值含义如下表所示：

benchmarkLevel取值 | 取值含义  
---|---  
-1 | 性能未知，由于机型匹配失败或设备机型较新，暂未统计入库  
>=1 | 设备性能值，该值越高，设备性能越好，目前最高不超过50  
  
## BenchmarkLevel用户分布

> 更新时间：2026年3月4日（历史分布情况请查阅历史分布情况）  
> 

### 机型档位与BenchmarkLevel的映射关系

设备平台 | 机型档位 | BenchmarkLevel划分 | 参考机型  
---|---|---|---  
Android | 高档机 | >=30 | 小米15、OPPO Find X8  
| 中档机 | 23～29 | HONOR 200、REDMI K40  
| 低档机 | <=22 | HONOR Play 20、VIVO Y52s  
iOS | 高档机 | >=36 | iPhone15/16/17  
| 中档机 | 30～35 | iPhone11/12  
| 低档机 | <=29 | iPhone7/8/X  
  
**特别说明：**

  * 用户占比 —— 当前设备平台，>=当前benchmarkLevel值的小游戏用户占比，占比低于0.01%的以 - 展示。
  * 已有设备的benchmarkLevel值不会随着时间的推移而变化，但已有设备的机型档位值会随着时间的推移而变化。
  * 随着性能更优的设备的发布，最新的性能表现更优的设备的benchmarkLevel值将会更高；同时，机型档位与benchmarkLevel值的关系也会随着时间的推移而变化。

### 用户占比分布

benchmarkLevel值 | Android用户占比 | iOS用户占比  
---|---|---  
48 | 0.07% | -  
47 | 0.13% | -  
46 | 0.56% | -  
45 | 1.92% | 9.43%  
44 | 3.56% | 9.43%  
43 | 5.17% | 9.43%  
42 | 5.44% | 9.43%  
41 | 6.24% | 63.72%  
40 | 6.35% | 63.79%  
39 | 6.37% | 73.17%  
38 | 7.97% | 73.41%  
37 | 11.33% | 73.41%  
36 | 15.48% | 73.41%  
35 | 21.35% | 82.13%  
34 | 22.91% | 82.13%  
33 | 23.86% | 82.13%  
32 | 23.96% | 82.13%  
31 | 27.06% | 82.13%  
30 | 29.85% | 88.24%  
29 | 30.43% | 88.24%  
28 | 30.97% | 91.28%  
27 | 35.70% | 91.28%  
26 | 42.49% | 93.57%  
25 | 51.20% | 94.27%  
24 | 67.45% | 94.58%  
23 | 86.44% | 94.58%  
22 | 90.56% | 94.59%  
21 | 91.31% | 94.59%  
20 | 93.91% | 94.61%  
19 | 98.42% | 94.63%  
18 | 98.94% | 94.68%  
17 | 98.97% | 94.68%  
16 | 98.97% | 95.16%  
15 | 98.99% | 95.16%  
14 | 98.99% | 95.16%  
13 | 98.99% | 95.16%  
12 | 98.99% | 95.41%  
11 | 99.00% | 95.41%  
10 | 99.00% | 95.41%  
9 | 99.00% | 95.41%  
8 | 99.00% | 95.62%  
7 | 99.00% | 95.73%  
6 | 99.01% | 95.77%  
5 | 99.01% | 95.77%  
4 | 99.01% | 95.80%  
3 | 99.01% | 95.80%  
2 | 99.01% | 95.80%  
1 | 99.01% | 95.80%  
-1 | 0.99% | 4.20%  
  
## 历史分布情况

更新日期 | 文档  
---|---  
2026.03.04 | 当前标准  
2024.09.04 | [设备档位下的用户分布](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-benchmarklevel/perf-benchmarklevel-20240904>)  
2024.06.20 | [设备档位下的用户分布](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-benchmarklevel/perf-benchmarklevel-20240620>)  
2022.05.27 | [设备档位下的用户分布](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-benchmarklevel/perf-benchmarklevel-20220527>)
