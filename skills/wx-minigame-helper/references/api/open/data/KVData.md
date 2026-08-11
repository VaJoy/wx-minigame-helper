---
title: "KVData"
type: api
category: api/open/data
api: "KVData"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/data/KVData.html
---

# KVData  
  
托管的 KV 数据

## 属性

### string key

数据的 key

### string value

数据的 value

## 将排行榜显示在小游戏中心

若开发者希望把游戏的排行榜显示于小游戏中心，则需要把排行榜数据存储到对应的key/value中，一个排行榜数据对应一个key，多个排行榜则多个key。同时在mp.weixin.qq.com的小游戏管理后台“设置-游戏-排行榜设置”下配置对应的key以及相关排行榜属性。且value的内容必须是JSON Object格式序列化的字符串，该JSON Object顶层必须包含 `wxgame` 字段，定义如下：

属性名 | 类型 | 必填 | 说明  
---|---|---|---  
score | Int32 | 是 | 该榜单对应分数值  
update_time | Int64 | 是 | 该分数最后更新时间，Unix时间戳  
  
注意： `wxgame`下开发者不可自定义其他字段， `wxgame`同级开发者可自由定义，比如定义一个`detail` 字段，用于存储取得该分数的中间状态。

### 举例

比如某小游戏有一个分数排行榜，分数排行榜需要记录分数以及获得分数的耗时（游戏内的排行榜需要展示耗时），可以在`wxgame`同级别定义一个`cost_ms`字段，存储耗时的毫秒数。 分配一个不和已定义的托管数据的key相冲突的key作为分数排行榜的key，如 "score"。

在玩家耗时36500ms后，获得本周最高分16分，则需要更新分数，假设当前时间戳为1513080573， 则完整 value在序列化之前的内容如下：
    
    
    {
      "wxgame": {
            "score":16,
            "update_time": 1513080573
      },
      "cost_ms":36500
    }
    

最终序列化为string后，value为`{\"wxgame\":{\"score\":16,\"update_time\": 1513080573},\"cost_ms\":36500}`。
