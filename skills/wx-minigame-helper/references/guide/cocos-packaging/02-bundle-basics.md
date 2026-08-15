# 02 Asset Bundle 配置基础

## 1. Bundle 是什么

Asset Bundle 是 Cocos Creator 3.x 的资源分组单元。一个 bundle = 一组资源 + 一份 `config.json`（索引）+ 一份 `index.js`（脚本/预加载脚本）+ 可选的 `import/`、`native/` 资源目录。

按文件夹配置：在资源管理器选中文件夹 → 属性检查器勾选 **Is Bundle**。

## 2. 配置面板字段

`db://assets/xxx` 文件夹勾选 Is Bundle 后的完整面板：

| 字段 | 含义 |
|---|---|
| **Bundle Name** | bundle 名，运行时 `loadBundle('名字')` 用这个 |
| **Bundle Priority** | 优先级，跨 bundle 依赖冲突时决定资源归属（独立构建时重要） |
| **Target Platform** | 目标平台：`Native` / `Web` / `Mini Game` 分页，每页可独立配置 |
| **Compression Type** | 压缩类型（见下表） |
| **Is Remote** | 是否配置为远程包（与"小游戏分包"互斥） |
| **Bundle Filter Config** | Include/Exclude 过滤（URL/Glob），控制哪些文件进这个 bundle |
| **Preview** | 预览当前配置下哪些资源会进 bundle |

### 压缩类型（Compression Type）

| 类型 | 说明 |
|---|---|
| **Merge Depend**（合并依赖） | 默认。合并相互依赖资源的 JSON，减少请求数 |
| **No Compression**（无压缩） | 不做任何压缩 |
| **Merge All JSON**（合并所有 JSON） | 所有资源 JSON 合一，最大化减少请求数，可能增加单资源加载时间 |
| **Mini Game Subpackage**（小游戏分包） | 把 bundle 构建为对应小游戏平台的分包。选了这个就不能配远程 |
| **Zip** | 压缩成 zip 文件。官方明确：**要求与"配置为远程包"搭配使用**（本地不用网络请求，zip 没意义） |

官方注意点（`bundle.html`）：
- **小游戏分包只能放在本地，不能配置为远程包**——选"小游戏分包"后 Is Remote 被锁
- Zip 压缩类型必须与"配置为远程包"搭配

## 3. 内置 bundle（不用配，自动存在）

| Bundle | 内容 |
|---|---|
| `internal` | 引擎默认资源（默认贴图、材质、Effect） |
| `main` | 主包（默认打包剩余资源 + 首场景） |
| `resources` | `assets/resources/` 目录 |
| `start-scene` | 首场景及其依赖（构建面板勾选"初始场景分包"后出现） |


## 4. 构建产物结构

构建后每个 bundle 生成一个目录：

```
assets/{bundleName}/
├── config.json      # 索引：uuid 映射、路径映射、依赖关系
├── index.js         # 脚本/预加载脚本（prerequisite imports）
├── import/          # 序列化资源（.json）
└── native/          # 原生资源（.png/.jpg 等）
```

`config.json` 关键字段：`paths`（路径→uuid）、`uuids`、`scenes`、`versions`（版本号）、`redirect`（跨 bundle 重定向）、`packs`。

## 5. 独立构建（Build Bundle）

可以单独构建某个 bundle（Build Bundle 面板选 bundle + 目标平台），不用整包构建。注意：独立构建时跨 bundle 依赖按 Bundle Priority 决定归属，要完全导出依赖需提高该 bundle 优先级。

## 6. 源码层面的关键类

- `cocos/asset/asset-manager/bundle.ts` — `Bundle` 类（load/preload/loadScene 等）
- `cocos/asset/asset-manager/shared.ts:100-139` — `BuiltinBundleName` 枚举（internal/resources/main/start-scene）
- `cocos/asset/asset-manager/asset-manager.ts` — `assetManager.main` / `assetManager.resources` getter
