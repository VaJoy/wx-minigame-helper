# 07 分离引擎与引擎模块裁剪

微信平台侧的引擎插件机制见 [guide/base-ability/game-engine-plugin.md](../../base-ability/game-engine-plugin.md)（官方文档快照）。本篇从 **Cocos Creator 构建产物**视角讲清：分离引擎到底分离了什么、**插件覆盖范围是固定清单**这一关键事实、**为什么勾了分离引擎后功能裁剪依然能直接减少包体**、以及构建后如何验证。

## 1. 分离引擎分离了什么

构建发布面板勾选"分离引擎"后（官方文档称"仅内置引擎生效"，但**实测 3.8.6 构建器并未强制此限制**——自定义引擎路径下勾选依然生效，见第 4 节"自定义引擎实测"）：

**分离出去的**：`cocos-js/` 下的**引擎编译产物 JS chunk**（按单个文件粒度）。这些文件不再打进小游戏代码包，而是托管在微信客户端全局缓存的官方插件里（CocosCreatorV3 插件，provider `wx0446ba2621dda60a`），运行时 `requirePlugin` 加载。

**留在本地包的**：业务代码与资源、平台适配层（`web-adapter` / `engine-adapter` / `first-screen` / `application.js`）、SystemJS 运行时与 polyfills、项目专属引擎胶水（如 `custom-pipeline.js`）、wasm 二进制（插件只托管 JS）、**以及所有 md5 未命中插件清单的引擎 chunk**（见下）。

### 生效链路（构建产物三处变化）

```jsonc
// game.json —— 声明插件，cocos 是 alias
"plugins": {
    "cocos": { "version": "3.8.6", "provider": "wx0446ba2621dda60a" }
}
```

```js
// game.js —— SystemJS 注册 plugin 协议处理器
System.warmup({
    importMap,
    handlers: {
        'plugin:': (urlNoSchema) => requirePlugin(urlNoSchema),
    },
});
```

```js
// src/import-map.*.js —— 命中插件的 chunk 重定向
"../cocos-js/sorting.js": "plugin:cocos/sorting.js",
"../cocos-js/base.js":    "plugin:cocos/base.js",
"cc": "./../cocos-js/cc.js"   // cc 聚合入口仍在本地
```

本地保留的 `cocos-js/cc.js` 只是一个几 KB 的 System.register 聚合壳：把 `plugin:cocos/2d.js`、`plugin:cocos/base.js` 等模块的导出合并成统一的 `cc` 命名空间，业务代码 `System.import('cc')` 用法不变。

**收益**：同版本引擎在所有启用该插件的小游戏间一次下载全局复用；版本升级只做增量更新；官方口径启动提速 0.5~2s。

## 2. 关键机制：md5 匹配一个**固定的插件文件清单**

编辑器内置了官方插件构建的完整副本与 md5 清单（3.8.6 实测路径：

```
{编辑器安装目录}/CocosCreator.app/Contents/Resources/resources/3d/engine/bin/.cache/editor-cache/wechat-game/plugin/
```

内有 78 个引擎文件 + `signature.json` 逐文件 md5）。构建时对项目产出的每个引擎 chunk 做 md5 比对：

- **命中** → import-map 重定向为 `plugin:cocos/...`，文件不落盘进包
- **未命中**（含"插件清单里根本没有这个文件"）→ 该 chunk 留在本地包

两个实测推论（Cocos Creator 3.8.6，同一项目两种裁剪配置各构建一次对比验证）：

1. **插件清单不含 physics 全家**（`physics-2d-box2d.js`、`physics-ammo.js`、各 framework chunk）、**skeletal-animation.js、animation 聚合 chunk** 等。这些模块只要启用，其代码 100% 进本地包，任何配置技巧都改变不了。
2. **部分 chunk 不在插件的 78 文件清单内**（如 `animation.js` 约 174K 动画聚合、`index-*.js` 约 191K 引擎主聚合 chunk、`animation-component-*.js` 约 69K，合计约 440K），这部分是**无法通过模块裁剪消除的固定本地成本**。

## 3. 分离引擎前提下，功能裁剪依然能直接减少包体

官方 Q&A 有一句"引擎插件提供的是完整版引擎，能兼容所有的裁剪设置"。这句话**只描述兼容性**（裁剪不会破坏插件加载），但很容易被误读成两种错误认知：

- 误读 A："既然插件是完整版，裁剪就不能减包了" → 错
- 误读 B："裁剪会让本地 chunk 与插件版不一致，导致无法命中插件" → 错

真相是：**命中与否只取决于"该文件是否在插件固定清单里且 md5 一致"，与裁不裁剪无关**。裁剪的收益取决于模块是否被插件覆盖：

| 模块类型 | 裁掉它的本地包体收益 | 说明 |
|---|---|---|
| **插件不覆盖的模块**（physics 全家、skeletal-animation 等，见第 2 节） | **等于该模块 chunk 的全部体积** | 不用就裁，纯赚 |
| 插件覆盖的模块（3d、spine、tiled-map、dragon-bones、terrain、particle 等） | ≈0（命中插件时 JS 本来就不占本地体积；但配套 wasm 可能残留，见下方 ⚠️） | 裁不裁基本不影响包体，主要为运行时内存而裁 |

所以：**"勾选分离引擎"与"功能裁剪"不冲突，是组合技**——分离引擎负责把插件覆盖的 chunk 移出包体，裁剪负责把插件不覆盖又用不到的模块清出包体。

### ⚠️ 例外：wasm 二进制不跟随裁剪移除，可能成为孤儿死重

插件**只托管 JS**，模块配套的 wasm 二进制始终放在本地 `cocos-js/assets/` 下。实测（3.8.6）：

- 裁掉 `spine` 后，spine 的 JS chunk 全部消失（import-map 映射数 48→39，本地 JS 体积仅减 4K），但 `cocos-js/assets/spine-*.wasm`（约 200K）**仍被拷进产物，且全产物无任何代码引用它**——纯死重；
- `meshopt` 关闭时其 `meshopt_decoder.wasm` 同样保留；
- 可能诱因：模块父开关关闭时版本子开关未联动（如 `spine: false` 但 `spine-3.8: true`），或 wasm 拷贝逻辑本就不检查模块裁剪。
- 机制实锤：插件托管的 JS 加载壳（如 `meshopt_decoder.wasm-*.js`、`spine-B64FaKrv.js`）内部硬编码了本地 wasm 文件名并从 `cocos-js/assets/` 取二进制——即 **"JS 壳走插件、wasm 永远本地"** 是官方插件的固定设计。
- ⚠️ **判定 wasm 能否删除，不能 grep 本地产物**（引用链藏在插件内部，静态扫描看不见），正确规则是看**壳映射是否还在 import-map**：
    - 壳映射仍在（如 `meshopt` 模块已裁但 `"../cocos-js/meshopt_decoder.wasm-*.js": "plugin:cocos/..."` 仍在 import-map）→ 插件引擎运行时会加载壳、壳会 fetch 本地 wasm → **必须保留**，删了会运行时报 `wasm not found`（伴随引擎 Warning 1220）；
    - 壳映射已消失（如 `spine` 裁剪后所有 `"../cocos-js/spine-*.js"` 键均不在 import-map）→ 壳永远不会被加载 → wasm 是死重，**可安全删除**。
- meshopt 壳映射残留的根因（实测 3.8.6）：插件内部 `mesh-C8knhDLk.js`（mesh 模块）import 了 meshopt 壳 → **裁掉 `meshopt` 模块切不断这条插件内部依赖链**，只要 mesh 模块启用，meshopt 壳就会被加载并 fetch 本地 wasm。即模块裁剪只影响项目本地图谱，不改变插件 chunk 之间的内部引用。
- 另一个实测结论：本地留守的 `animation.js`、`animation-component-*.js`、`index-*.js`（合计 ~440K）**根本不在插件的 78 文件清单里**（插件清单含 2d/3d/base/gfx/spine/dragon-bones/tiled-map/particle/terrain/video/xr 等，但不含 animation 聚合 chunk、physics 全家、skeletal-animation）——它们是任何裁剪配置下的固定本地成本，与 md5 失配无关，无法通过裁剪消除。
- gfx 后端是**运行时按设备能力动态选择**的，与 `gfx-webgl2` 模块开关无关（实测 3.8.6：开启 `gfx-webgl2` 前后构建产物逐字节一致——chunk 哈希、大小、import-map 39 条均不变）。插件同时托管 `gfx-webgl.js`（`getContext("webgl")`）与 `gfx-webgl2.js`（`getContext("webgl2")`）两套后端，运行时由插件内 `factory-*.js` 动态 `import("virtual:///prerequisite-imports/"+name)` 选择；本地 chunk 不含任何 webgl/getContext 代码。即分离引擎构建下 `gfx-webgl2` 开关对包体**零影响**。本地 191K 的 `index-*.js` 是引擎主聚合 chunk（非 gfx 实现），也不在插件清单内，属固定本地成本。

处理：裁掉某模块后检查 `cocos-js/assets/` 下对应 `.wasm` 与 import-map 壳映射，按上述规则决定去留。自动化的标准做法是**构建扩展**（项目 `extensions/` 下放置扩展包，`package.json` 配 `contributions.builder` 指向导出 `configs` 的入口脚本，hooks 脚本导出 `onAfterBuild(options, result)`，`options.platform === 'wechatgame'` 时读取 `result.dest/src/import-map.*.js` 的壳键，删除"同前缀壳键不存在"的 wasm）；纯 JS（CommonJS）实现即可，无需 npm install 与编译。参考官方文档《自定义构建流程》。

### 实测数据示例（Cocos Creator 3.8.6，勾选分离引擎）

同一项目两种裁剪配置各构建一次（下表为示例数据，量级源自真实构建实测）：

| 裁剪配置 | 命中插件的 chunk 数 | 本地 `cocos-js/` 体积 | 差异来源 |
|---|---|---|---|
| 按需裁剪（关掉 physics、skeletal-animation、3d、marionette 等不用模块） | 48 | **~650 KB** | 48 chunk 走插件 + ~440K 固定留守（不在插件清单）+ wasm |
| 恢复默认 preset（physics-ammo、physics-2d-box2d、skeletal-animation、particle-2d、terrain、dragon-bones 等全开） | 48 | **~1.7 MB** | 命中数一条没多；多出的 ~1.05M 是 physics-2d-box2d（373K）、physics-ammo（83K）、skeletal-animation、bullet wasm 等**插件不覆盖模块**的本地 chunk |

关键观察：默认 preset 多开的那批模块里，能命中插件的（particle、terrain、dragon-bones 等）本地体积不变；**全部增量来自插件不覆盖的模块**。这就是"分离引擎前提下裁剪依然有效"的直接证据——反过来也说明：一个 2D 休闲游戏若误用默认 preset，会平白多背 1M 用不到的物理引擎代码。

### 裁剪建议（勾选分离引擎时）

1. 优先裁**插件不覆盖且用不到**的模块：physics 全家（`physics` / `physics-ammo` / `physics-2d` / `physics-2d-box2d`）、`skeletal-animation`（不用 spine 骨骼动画时）——每裁一个，本地包体直接减对应 chunk 体积。
2. 插件覆盖的模块（3d、spine、tiled-map 等）裁不裁不影响包体；只为运行时内存考虑时才裁。
3. 裁完后按第 5 节方法验证：若 `cocos-js/` 残留体积异常大，对照模块配置排查是否有"插件不覆盖但已启用"的模块。

## 4. 其它要点

- 按微信规则，启用插件后引擎体积**仍计入首包 4M 限额**。
- 微信 < 7.0.7 无插件能力，回退本地引擎；裁剪版引擎兜底包更小（7.0.7 是 2019 年版本，如今覆盖率接近 100%，此收益可忽略）。
- 插件加载 ≠ 不加载：命中的模块运行时仍会从插件缓存加载执行；裁剪能省一点 JS 解析/常驻内存。
- 开放数据域不支持引擎插件。

### 自定义引擎实测（3.8.6，实测推翻官方文档表述）

官方文档称分离引擎"不支持自定义引擎"，但**实测自定义引擎路径 + 勾选分离引擎，构建器仍然正常生成插件配置且命中逻辑照常工作**：

- `game.json` 的 `plugins` 配置照常生成；
- 自定义引擎构建出的 chunk 仍按 md5 与插件清单比对，**逐字节一致的照常命中**（实测：自定义引擎改动未触及清单内 chunk 时，import-map 命中条数与内置引擎构建完全相同，约 1M 引擎 chunk 走插件、总包从 3M 降到 2M）；
- 被改动的源码若编译进清单内 chunk → 该 chunk md5 失配 → **静默回退本地包**（无任何警告），import-map 对应条目消失。

风险提示（比包体更重要）：命中 chunk 走插件（官方版代码）、失配 chunk 留本地（魔改版代码），**两份代码运行时混跑**。若魔改涉及跨模块接口/行为约定（如改了 base 模块的导出结构，而引用它的 2d.js 未改仍走插件版），插件版 chunk 是按官方接口编译的，可能出现运行时不兼容。自定义引擎 + 分离引擎组合下，建议改完引擎后核对 import-map 条目数变化，确认魔改的模块确实留在本地。

结论：**机制本身（md5 匹配固定清单）不区分引擎来源**；官方文档的"不支持"更多是不背书的保守表述。求稳可关分离引擎全量本地，求包体可保留勾选但接受混跑语义。

### ⚠️ 自定义引擎的"改动不生效"陷阱：`platforms/` 下的 adapter 不参与项目构建

自定义引擎中，**`cocos-js/` 引擎 chunk 走编辑器编译**，但**平台适配层（`engine-adapter` / `web-adapter`）不走**——项目构建直接拷贝引擎仓库里**预构建好的** `bin/adapter/minigame/wechat/engine-adapter.min.js`（browserify 产物）。实测（3.8.6）：修改 `platforms/minigame/common/engine/cache-manager.js` 后直接重新构建项目，产物 adapter 仍是旧代码（字节级等于预构建文件）。

**正确流程**：改 `platforms/` 源码后，须先在引擎仓库执行 `npm run build:adapter`（重新生成 `bin/adapter/`），再构建项目。验证方法：产物 `engine-adapter.*.js` 中 grep 改动的特征标识（属性名/字符串字面量不会被压缩混淆）。

附带结论：因 adapter 是项目侧本地产物（不走插件），改它**不影响分离引擎命中数**——import-map 条目数与 adapter 内容无关。

### "允许使用本地引擎插件包"选项（实测 3.8.6）

构建面板中的该选项开启后，构建产物发生两处变化：

1. 生成 `cocos/` 目录（约 2.4M）：编辑器内置插件缓存（`resources/3d/engine/bin/.cache/editor-cache/wechat-game/plugin/`）的**逐字节完整拷贝**——78 个引擎 JS + `plugin.json`（`{"main":"base.js"}`）+ `signature.json`（78 条 md5 签名，实测全部匹配）。
2. `game.json` 的 plugins 配置增加 `"path": "cocos"`。按微信规则：**有 path 时上传/预览用本地目录文件作为插件代码并做合法性校验；无 path 时直接用线上已发布的 provider+version**。

该选项的用途：**编辑器引擎版本尚未在微信插件平台发布时**（如 beta 版），用本地插件包兜底体验。若编辑器是正式版（如 3.8.6，线上已发布对应插件版本），开启无收益、白占 2.4M 构建目录，**正式版项目应保持关闭**。开启与否不影响其余产物（import-map、cocos-js、wasm 均不变）。

## 5. 构建后验证方法

1. **看 import-map**：`src/import-map.*.js` 中值为 `plugin:cocos/...` 的条目数即命中插件的 chunk 数。改裁剪配置前后对比：若条目数不变、本地体积变化，说明变化的部分全部来自插件不覆盖的模块。
2. **看 cocos-js/ 残留**：目录里的大 JS 文件就是留守 chunk；对照功能裁剪配置定位是哪个模块贡献的（如出现 `physics-*.js` 说明物理模块开着且插件不托管）。同时检查 `cocos-js/assets/` 下的 `.wasm`——已裁模块的 wasm 仍会被拷入（见第 3 节 ⚠️），`grep` 确认无引用后可在构建后删除。
3. **对照插件清单**（进阶）：编辑器内置插件目录下的 `signature.json` 列出全部 78 个可命中文件，可据此判断某模块是否被插件覆盖。
4. **运行时确认**：console 出现 `plugin cocos inject success` 表示插件注入成功；`fail` 或低版本客户端则回退本地引擎。
