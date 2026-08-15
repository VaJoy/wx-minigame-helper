// @ts-nocheck
import { assetManager, SpriteFrame, sys } from 'cc';

export class RemoteBundleDemo {

    /**
     * 1. 加载远程包（CDN 资源）
     * 前提：bundle 已勾选 Is Remote Bundle + 构建面板已填资源服务器地址
     */
    static loadRemoteBundle(): void {
        // 按 bundle 名加载（自动拼 {server}/remote/{name}）
        assetManager.loadBundle('media', (err, bundle) => {  // media 是 bundle 名称
            if (err) {
                console.error('远程包加载失败', err);
                return;
            }
            bundle.load('textures/hero/spriteFrame', SpriteFrame, (err2, sf) => {
                if (!err2) console.log('远程资源加载成功');
            });
        });

        // 或直接传完整 URL
        // assetManager.loadBundle('https://cdn.xxx.com/remote/media', ...);
    }

    /**
     * 2. 加载小游戏分包（微信托管）
     * 前提：bundle 压缩类型已设为"小游戏分包"
     */
    static loadSubpackage(): void {
        assetManager.loadBundle('chapter1', (err, bundle) => {
            if (err) {
                console.error('分包加载失败', err);
                return;
            }
            bundle.load('bg/main', SpriteFrame, (err2, sf) => { 
              // some code with sf
            });
        });
    }

    /**
     * 3. 加载远程单文件（不走 bundle）
     * 适合动态运营图、用户头像等零散资源
     */
    static loadRemoteAsset(): void {
        assetManager.loadRemote('https://cdn.xxx.com/img/banner.png', (err, texture) => {
            if (err) { console.error(err); return; }
            // 注意：loadRemote 结果不会自动 addRef，需自己管理
        });
    }

    /**
     * 4. 缓存管理
     */
    static manageCache(): void {
        const cm = assetManager.cacheManager;

        // 查询缓存路径
        const path = cm.getCache('https://cdn.xxx.com/img/banner.png');
        console.log('缓存路径:', path || '未缓存');

        // 启动时清空缓存（不要在运行中调用，会卡）
        if (sys.platform === sys.Platform.WECHAT_GAME) {
            // cm.clearCache();
        }

        // 存储满时自动 LRU 清理（默认开启）
        cm.autoClear = true;
    }

    /**
     * 5. 平台判断（只在微信平台生效的逻辑）
     */
    static isWeChatGame(): boolean {
        return sys.platform === sys.Platform.WECHAT_GAME;
    }
}
