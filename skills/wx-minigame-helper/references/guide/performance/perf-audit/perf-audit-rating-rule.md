---
title: "评分方法"
type: guide
category: guide/performance/perf-audit
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-audit/perf-audit-rating-rule.html
---

# 评分方法

## 评分方法

目前性能清单的检测规则划分为五类：启动、最佳实践、渲染、兼容性和wx api，依据每个类别中的检测规则权重和公式计算出每个类别的得分。计算公式如下：

![](https://res8.wxqcloud.qq.com.cn/wxdoc/3e0e5e4e-5f49-4b4d-825c-a4583f15e54a.jpg)

> 检测规则得分：达标（100分）、不达标（0分）

## 性能清单

分类 | 指标 | 权重 | 不达标条件  
---|---|---|---  
启动 | 降低[游戏可交互](<../startup/perf-action-start-reportScene.md>)时长 | 3 | 可交互耗时>11840ms  
最佳实践 | 使用[高性能模式](<../overview/perf-high-performance.md>) | 0 | 未开启高性能模式  
| 使用HTTP/2 | 8 | 有请求未使用HTTP/2  
| 开启服务器压缩 | 10 | 有请求未开启服务器压缩  
| 使用CDN缓存 | 10 | 有请求未命中CDN缓存  
| 使用[并行下载](<../startup/perf-action-start-parallel-download.md>) | 0 | 未使用并行下载  
| 上报游戏可交互场景 | 0 | 未上报游戏可交互  
| 合理控制网络请求总资源量 | 5 | 总请求大小>50MB  
| 合理提升网络利用率 | 6 | 网络利用率<30%  
| 减少网络排队数量 | 6 | 网络排队个数>50  
| 降低网络排队平均耗时 | 6 | 网络平均排队耗时>=1500ms  
| 降低单个网络请求耗时时长 | 8 | 单个网络请求耗时>=1500ms  
| 合理控制单个网络请求资源量 | 3 | 单个网络请求响应>=3MB  
渲染 | 使用[资源纹理压缩](<../render/perf-action-texture-compression.md>) | 1 | 未使用资源纹理压缩  
兼容性 | 避免未处理的JavaScript异常 | 9 | 存在未处理的JavaScript异常  
| 避免存在未处理的Promise错误 | 9 | 存在未处理的Promise错误  
| 避免网络请求失败 | 10 | 存在网络请求失败  
| 避免网络状态码异常 | 10 | 存在网络状态码异常  
wx api | 缓存wx api调用结果 | 5 | getSystemInfo\getSystemInfoSync调用超过3次  
| 避免使用废弃接口 | 3 | 使用已废弃接口
