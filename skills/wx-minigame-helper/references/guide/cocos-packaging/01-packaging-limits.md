# 01 包体限制与首包体积

## 1. 微信小游戏的体积限制

| 限制项 | 额度 | 说明 |
|---|---|---|
| **主包（首包）** | **≤ 4M** | 含所有代码和资源，超过无法上传 |
| 主包 + 所有分包合计 | **≤ 30M** | 部分资料显示 20M，30M 需开通虚拟支付；以微信后台校验为准 |
| 单个普通分包 | 不限大小 | 但受总包 30M 约束 |
| 单个独立分包 | ≤ 4M | `independent: true` 的分包 |


## 2. 关键认知：包内资源不是按需加载的

Cocos 官方文档《发布到微信小游戏》明确说：

> 对于小游戏包内资源，小游戏环境内并不是按需加载的，而是**一次性加载所有包内资源，然后再启动页面**。

这意味着：
- 放进包里的资源不只占体积，**启动时会全量加载**
- 大包不仅超体积限制，还会显著拖慢首屏启动时间
- 所以"能不进包就不进包"是基本原则

## 3. 什么算"首包"

微信小游戏构建产物（`build/wechatgame/`）里：

- `game.js` / `cocos-js/` / `application.js` —— 代码
- `assets/main/` —— 主包资源（场景、普通文件夹资源）
- `assets/resources/` —— resources bundle
- `assets/internal/` —— 引擎内置资源
- `assets/start-scene/` —— 首场景分包（勾选后存在，见 04）
- `src/` —— 引擎配置与脚本

**以上这些默认全部计入首包 4M。**

实证：工作区 `game-projects/playground/build/wechatgame/src/settings.json`：
```json
"preloadBundles": ["start-scene", "resources", "main"],
"projectBundles": ["internal", "start-scene", "resources", "main", "sub-bundle"],
"subpackages": [],      // 没有分包
"remoteBundles": []     // 没有远程包
```
即这些 bundle 全在本地首包里。

## 4. 首包超限的解决方向

按优先级排序：

1. **远程包**（首选）：大资源放 CDN，本地包体零占用，运行时下载 + 缓存 → 见 `04-remote-bundle.md`
2. **分包**：中等资源或整功能模块，微信托管按需加载，不占首包但占总包 → 见 `03-subpackage.md`
3. **start-scene 分包**：主包资源放远程后，把首场景必需资源留在本地 `assets/start-scene/`，加快启动 → 见 `04`
4. **代码侧优化**：分离引擎（微信引擎插件，见 `07`）、引擎原生代码分包（WASM 入子包）→ 见 `06`

## 5. 一个反直觉的点

`assets/resources` 目录看似"按路径取用很方便"，但它是**内置固定 bundle**，里面的资源：
- 100% 计入首包体积（除非配远程）
- 启动时随主包全量加载
- 无论用不用都会进构建包

所以大资源（大图、视频、大音频）**绝对不要**放 `resources`——用自定义 bundle + 远程/分包。

详见 `cocos-asset-manager-guide` 中关于 bundle 归属的部分。
