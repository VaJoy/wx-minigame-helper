---
title: "游戏日志分析"
type: guide
category: guide/runtime/debug
source: https://developers.weixin.qq.com/minigame/dev/guide/runtime/debug/gamelogmanager.html
---

# 游戏日志分析

为帮助开发者更便捷地定位问题，从基础库 3.7.4 开始，我们推出了小游戏日志功能。开发者可通过 [wx.getGameLogManager](<https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.getGameLogManager.html>) 获取游戏日志实例并上报相关游戏日志，日志会进行汇聚并实时上报到小游戏管理后台。

开发者可从小游戏管理后台 “基础数据 -> 游戏日志分析”进入日志分析页面，查看开发者上报的相关日志信息。

## 如何使用

### 日志上报

从基础库 `3.7.4` 开始，小游戏即可使用游戏日志上报的相关功能，接口的相关能力可通过 [wx.getGameLogManager](<https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.getGameLogManager.html>) 进行了解，以下是日志上报的相关示例：

1、调用 wx.getGameLogManager 获取游戏日志管理器实例，为了兼容旧的基础库版本，在使用游戏日志上报相关功能时，建议使用如下代码封装一下，例如将相关兼容代码封装在本地的`gamelog.js`中：
    
    
    let logger = null;
    if (wx.getGameLogManager) {
      logger = wx.getGameLogManager({
        commonInfo: {
          version: "1.0.0",
          env: "prod"
        }
      });
    }
    
    export const gameLogAdaptor = {
      log() {
        if (!logger) console.log.apply(logger, arguments); // 防止低版本基础库调用报错
        logger.log.apply(logger, arguments);
      },
      tag() {
        if (!logger) return console;
        return logger.tag.apply(logger, arguments);
      },
      getCommonInfo() {
        if (!logger) return {};
        return logger.getCommonInfo.apply(logger, arguments);
      },
      updateCommonInfo() {
        if (!logger) console.log.apply(logger, arguments);
        logger.updateCommonInfo.apply(logger, arguments);
      }
    };
    

2、在游戏逻辑合适的位置打印相关的日志
    
    
    import { gameLogAdaptor } from "./gamelog.js"; // 引用上面的gamelog.js文件，具体路径以游戏实现为准
    
    // 使用tag后的上报方法上报日志
    const cacheLogger = gameLogAdaptor.tag("cache"); // 用于缓存相关日志上报
    cacheLogger.warn("cache not found", { key: "tableCache" }); // 上报 warn 级别的日志
    
    // 直接使用log方法上报日志
    gameLogAdaptor.log({
      level: "info",
      key: "login",
      value: { loginTime: "1731915939" }
    });
    

### 如何查看/分析日志

登录 [小游戏管理后台](<https://mp.weixin.qq.com>)，通过“基础数据 -> 游戏日志分析” 进入游戏日志分析页面。

开发者对游戏日志执行过滤、聚合等操作；使用可视化的视图查看数据维度的分布及其变化趋势；通过数据表格查看相关日志的详细上报信息，并可下钻查看用户单次游戏生命周期内的所有游戏日志信息。具体的使用方式详见下方文档描述。

![](https://res.wx.qq.com/op_res/UqAQn7iY7hTFNCaOAZKRL-qV4Eg6WaNj4YnnXAnlsYTAMDlxKj1EipKC3MT0Deb22pDVWbwPt7c498XTUh8jYg)

#### 游戏日志筛选

开发者可使用日志筛选区域提供的相关能力，通过选择具体的协议、OpenID、设置日期范围、指标/维度筛选等筛选条件，查询指定条件的日志信息。

##### 特别说明

  1. 目前仅开放了 `小游戏礼包发货`、`游戏实时日志`、`iOS内存异常退出`三个协议，如需查看开发者自主上报的游戏日志信息，请选择 `游戏实时日志` 协议。
  2. OpenID: OpenID 是小游戏用户唯一的身份标识，可以使用 OpenID 筛选特定用户产生的数据。
  3. 筛选条件：每个协议支持不同的数据维度筛选，单维度的筛选条件由三部分（维度、操作符、内容）组成，平台支持的所有操作符如下：

操作符 | 含义  
---|---  
equal | 检查两个值是否相等  
like | 检查一个字符串是否包含另一个字符串  
like pattern | 使用模式匹配检查字符串，通常支持通配符（如 % 和 _）  
empty | 检查字符串是否为空（即长度为 0）  
match | 使用正则表达式检查字符串是否符合特定模式  
range | 检查一个数字是否在指定的范围内  
not equal | 检查两个值是否不相等  
is null | 检查值是否为 null  
not null | 检查值是否不为 null  
includes | 检查一个值是否包含在一个集合或数组中  
excludes | 检查一个值是否不在一个集合或数组中  
length | 检查字符串的长度是否符合特定条件  
array_has | 检查数组是否包含至少一个元素  
  
** _不同的数据维度，根据其数据特性的不同，支持不同的操作符。请以页面展示的可用操作符为准_**

#### 分布与趋势

分布与趋势模块由分布统计饼图和趋势统计折线图组成，开发者可通过此区域查看指标的分布占比情况以及指标的趋势变化/对比统计

**_注意：该模块默认为收起状态，如需查看，请通过点击「展开分布/趋势」按钮展开_**

![](https://res.wx.qq.com/op_res/UqAQn7iY7hTFNCaOAZKRL0UBAhBgIH8xcheywFTP6NasJOFc4zWS_wd0It-LDp6IOiCrpFywCQK5ZKxPufv6kA)

##### 分布统计饼图

开发者可通过分布统计饼图查看各维度值的分布情况，并可通过点击饼图扇区，快速添加该扇区对应值的筛选条件，进一步分析对应的维度值数据。

##### 趋势统计图

趋势统计折线图默认展示当前协议在过去一段时间内的数据量变化趋势。开发者可以通过趋势统计上面的筛选条件区，设置趋势图的时间粒度、对比项和统计方法。

###### 特别说明

  1. 时间粒度：最大粒度为 天，最小粒度为 秒（1 个小时内）。
  2. 对比项：支持按时间（天数）对比或按维度对比。
  3. 统计方法：支持对数据类型为数值的维度进行求和、最大/最小值、分位数等多种方式统计。

#### 日志详细数据

日志详细数据区域展示了当前协议的日志详细信息，如下所示：

![](https://res.wx.qq.com/op_res/UqAQn7iY7hTFNCaOAZKRLyHq6xihOH7XGuUG8yakSmzT5lXT4WxItG9OI7zMSdIBpDtmUW15qAxp3RxlAgMrSQ)

##### 特别说明

  1. 列表中的每条日志信息均展示了当前协议下各维度的详细值，表格提供了对维度的**排序** 、**单位转换** 等能力，并且，当维度过多时，开发者可通过左右滑动表格或点击展开按钮的方式，查看维度的完整数据。
  2. 协议默认只展示部分维度列，开发者可根据自身需要，通过表格右上角 「配置显示列」按钮，自定义需要展示的维度列（自定义设置将被缓存，无需重复设置）。
  3. 当维度值过长时，在相应的维度值后会展示「查看」按钮，开发者可通过点击按钮查看维度值的完整数据，若维度值为 json 格式，开发者可通过「格式化」按钮对数据进行格式化。

![](https://res.wx.qq.com/op_res/UqAQn7iY7hTFNCaOAZKRL60ngkb72L1nsxWw_refV7ALPCYZTSTiKtZgJY7uHVr8QYA6PJxOIeokuv0w2EXfqA)

#### 分析单生命周期的日志数据

针对单生命周期内上报的日志数据，针对小游戏游戏日志上报协议的 TraceId（小游戏实例唯一标识）维度，设计了 TraceId 分析功能，点击详情数据表格 TraceId 数据后的「分析」按钮，可进入 TraceId 分析模式。

![](https://res.wx.qq.com/op_res/UqAQn7iY7hTFNCaOAZKRLxk4dOX-hvLPflggBA56tE57EySljJHZ82aLdg9QfDSOJqAe0oTQGobdodqrE1HvpA)

页面顶部展示了当前关联日志信息中的公共信息，如设备类型、基础库版本、运行时模式、开发者上报的 commonInfo 等。

开发者可通过日志筛选区域的能力，对当前生命周期内的日志信息进行过滤筛选

##### 特别说明

  1. 日志信息将按照上报时间 升序 展示，日志的内容格式如下 [time][key] [logInfo]。
  2. 不同等级的日志将会是不用不同的背景颜色进行区分。

等级 | 背景颜色  
---|---  
info | 白色  
warn | 黄色  
error | 红色  
debug | 蓝色  
  
  3. 如果日志是由插件上报的，在日志信息的右侧会展示 ”插件上报“ 标签信息。

![](https://res.wx.qq.com/op_res/UqAQn7iY7hTFNCaOAZKRL-yqg5MpydmtCg-ysspxcMJOCTTFBFIftJV_BxB8CtklvMPyn6eBTaI-r-oaSi-jkA)

# 联系我们

如有任何问题，欢迎扫码联系小助手咨询

![](https://res8.wxqcloud.qq.com.cn/wxdoc/a5e6eea2-3f21-4705-8e02-5a5115f41bc8.png)
