---
title: "微信云托管开发常识"
type: topic
category: topics
source: https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/guide/debug/know.html
---

# 微信云托管开发常识

> 整理自微信官方《[开发常识](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/guide/debug/know.html)》（guide/debug/know.html）。
> 原文以小程序/公众号视角撰写，但**小游戏用法一致**：`callContainer` / `connectContainer` 同样免域名配置、免备案；差异仅在初始化位置（小游戏在 `game.js` 入口执行 `wx.cloud.init`，而非 `App.onLaunch`）。

本文聚焦「云托管服务本身」的前提、客户端侧注意点、服务端/运维侧坑、扩缩容与排查——属于选型与联调前的必读常识，与具体的 `wx.cloud.*` API 签名互补（API 见 [api/cloud/](../api/cloud/README.md)）。

## 一、云托管使用前提（能力边界）

微信云托管**暂不支持**以下场景，选型时先确认：

- 当前仅支持 **HTTP 协议**并通过域名调用服务；**不支持 TCP / UDP / MQTT** 等其他协议；
- **不支持通过公网 IP** 访问服务；
- **不支持部署 Docker Compose**；
- **不支持接入 WAF**（详见下方「公网域名无防护」）；
- **不支持一个服务开启多个监听端口**（多端口架构请拆分为多个服务）；
- **不支持用来部署数据库 / Redis 等有状态服务**（请用云数据库、对象存储等托管服务）。

## 二、客户端常识（小游戏 callContainer 侧）

> 以下第 1/3/5/6 点与 `wx.cloud.callContainer` 的 API 细节重叠，已在 [wx.cloud.callContainer](../api/cloud/wx.cloud.callContainer.md) 中展开；此处汇总为联调清单，并补充该文未覆盖的排查项。

1. `callContainer` 超时时间**不得超过 15 s**，请控制请求耗时；
2. 若仅在自有小程序/小游戏/公众号中 `callContainer` 调用，**可关闭公网访问**，杜绝 DDoS 攻击（见 [callContainer 最佳实践](../api/cloud/wx.cloud.callContainer.md#技术原理与使用指南实践)）；
3. `callContainer` **请求大小限制 100K**，请求中不建议包含图片，可通过对象存储处理；
4. **公网访问正常、但小程序/小游戏访问报错** → 优先检查代码中处理微信 `header` / `openid` 相关逻辑是否有问题（如取错字段、大小写、误改 `Referer` 等）；
5. `callContainer` **无需在 mp 管理后台配置服务器域名**，因此一开始就无需申请域名、也**无需备案**；
6. 后端服务可直接从 **HTTP header** 获取 `openid` 等信息（详见 [callContainer 后端获取用户信息](../api/cloud/wx.cloud.callContainer.md#后端直接获取用户信息)）；
7. **微信云托管对公网域名不具备安全防护能力**（含默认公网域名和自定义域名），请谨慎使用；
8. **默认公网域名性能有限**，仅能支持接口测试，**请勿用于正式生产环境**；小程序/小游戏后台也无法配置使用默认公网域名。

> 结论：正式环境走 `callContainer` 私有链路（免域名、带微信身份、等效 WAF+DDoS 防护）；公网域名仅作临时联调，且自身无安全防护。

## 三、服务端常识（容器 / 部署 / 运维）

01. 设置**最小副本为 0** 时，半小时无请求服务将缩容到 0；再次请求时重启服务、扩容新实例（即冷启动）。
02. 服务从 0 扩容到 1（冷启动）耗时由服务启动速度决定，请尽可能优化服务启动性能。
03. 想彻底避免冷启动影响，到「服务设置」将「实例副本数」最小值设为 1，但会持续产生资源消耗及费用，请结合业务权衡。
04. 服务运行正常但**偶现 500 报错**，可能是容器规格过小（业务逻辑重到连一个请求都无法稳定支撑）；观察 CPU / 内存使用率是否过高，可在「服务设置」中增大容器规格。
05. 服务请求太慢时，适当增加容器规格有助于提升性能。
06. **容器不支持持久化存储**，请勿将图片、视频等文件直接写在容器内；容器扩缩容 / 重启自愈时这些文件会被还原，请使用「对象存储」管理文件。
07. 一个服务只能开启一个端口，多端口架构请拆分为多个服务。
08. 微信云托管**自带流量管理能力**，无需额外配置负载均衡产品和组件。
09. **WebShell 仅用于查询信息和排查问题**，通过 WebShell 对容器的修改无法保留。
10. 对代码的任何修改，都需要**重新构建部署并发布**，无法直接在已有版本上修改。
11. 代码中请**不要在请求处理程序范围之外启动后台线程或例程**，并确保在传送响应之前完成所有异步操作（[详情](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/scene/noun/async)）。
12. 请求小程序/小游戏接口通过「云调用」能力，无需配置 IP 白名单。
13. 若因项目迁移无暇改造为云调用方式，请关闭「开放接口服务」开关，否则可能引发超时报错（该开关开启时默认使用云调用方式）。
14. 云托管服务本身**不具有固定的公网出口 IP**，而是动态变化的。
15. 若需调用其他平台方接口、而对方要求配置固定 IP 白名单：后续将推出固定 IP 增值付费服务可单独购买；目前企业用户可在用户群联系开通白名单体验。

## 四、扩缩容常识

1. 扩缩容是**自动根据流量改变实例个数**，而非改变实例规格；每个实例副本都遵循「服务设置」中的实例规格。
2. 自动扩缩容**只根据 HTTP 请求流量**判断；若服务不接收外部请求、只跑定时任务，会被「误判」为没有使用而触发缩容——此种场景请手动设定实例副本数最小值为 1，保持常驻。

## 五、排查与反馈技巧

1. 服务部署出问题，先自己看日志，定位报错在**构建阶段**还是**部署阶段**；
2. 构建阶段报错 → 大概率是代码包或 Dockerfile 描述问题，先本地构建验证（基本是自身代码原因，非云托管问题）；
3. 部署阶段报错 → 一般是服务没成功启动（多为端口问题；若连数据库，检查数据库连通性导致启动失败），按失败建议排查；
4. 上述无法解决，通过控制台右上角「帮助」-「新建工单」，复制部署页面关键信息反馈；
5. 微信生态接口报错，反馈前先读[官方 FAQ](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/guide/weixin/faq)，大部分问题已有指导。

## 关联

- 客户端 API 与原理：[wx.cloud.callContainer](../api/cloud/wx.cloud.callContainer.md)（含超时/大小/免域名/后端拿 openid/技术原理/最佳实践）
- 云能力入口总览：[wx.cloud](../api/cloud/wx.cloud.md)；初始化：[wx.cloud.init](../api/cloud/wx.cloud.init.md)；资源复用：[wx.cloud.Cloud](../api/cloud/wx.cloud.Cloud.md)；WebSocket：[wx.cloud.connectContainer](../api/cloud/wx.cloud.connectContainer.md)
- 网络选型总览：[网络与本地存储](storage-network.md)
- 官方示例工程：HTTP [wxcloud-http-express](examples/wxcloud-http-express/README.md)、WebSocket [wxcloud-websocket-express](examples/wxcloud-websocket-express/readme.md)
