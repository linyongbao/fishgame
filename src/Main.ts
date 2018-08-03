//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private _loadingView: LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onInitHander, this);
    }


    private isThemeLoadEnd: boolean = false;
    private onThemeLoadComplete(): void {
        this.isThemeLoadEnd = true;
        this.loadAppConfig();
    }
    private onInitHander(event: egret.Event) {
        AppService.getInstance().stage = this.stage;
        egret.TextField.default_fontFamily = "宋体";
        this.stage.scaleMode = egret.StageScaleMode.NO_SCALE;
        this._loadingView = new LoadingUI();
        this.addChild(this._loadingView);
      
        
        //initiate Resource loading library
        ResConfigUtils.getInstance().addConfig("resource/default.res.json", "resource/");
        ResConfigUtils.getInstance().addConfig("resource/app.res.json", "resource/");
        ResConfigUtils.getInstance().loadConfig(this.onConfigComplete, this);

        //主题
        var assetAdapter = new AssetAdapter();
        this.stage.registerImplementation("eui.IAssetAdapter", assetAdapter);
        this.stage.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);

        this.stage.addEventListener(egret.Event.RESIZE, this.onResizeHander, this);
        this.checkSize();
    }
    private onResizeHander(event: egret.Event) {
        this.checkSize();
    }
    private checkSize(): void {
        if (this._appView) {
            this._appView.width =   this.stage.stageWidth;
            this._appView.height =  this.stage.stageHeight;
        }
        if (this._loadingView) {

            this._loadingView.width =  this.stage.stageWidth;
            this._loadingView.height =  this.stage.stageHeight;
        }
        AppService.getInstance().dispatchEvent(new egret.Event(egret.Event.RESIZE));
    }
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {

        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
        RES.loadGroup("preload_app");
    }


    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private isResourceLoadEnd: boolean = false;
    private loadResourceCount: number = 0;
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadResourceCount++;
        }
        else if (event.groupName == "preload_app") {
            this.loadResourceCount++;

        }
       
        if (this.loadResourceCount == 2) {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.loadAppConfig();

        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event: RES.ResourceEvent): void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this._loadingView.setProgress(event.itemsLoaded, event.itemsTotal, "钓鱼游戏好玩~");
        }
        else if (event.groupName == "preload_app") {
            this._loadingView.setProgress(event.itemsLoaded, event.itemsTotal, "钓鱼游戏好玩~");
        }
        
    }

    /**
     * 创建场景
     * Create a game scene
     */
    private _appView: AppView;
    private loadAppConfig(): void {

        if (!this.isThemeLoadEnd || !this.isResourceLoadEnd)
            return;

        var configUrl ='resource/config.xml?t='+new Date().getTime();
        var urlloader: SimpleURLLoader = new SimpleURLLoader();
        urlloader.addEventListener(egret.Event.COMPLETE, this.configHandler, this);
        urlloader.load(new egret.URLRequest(configUrl));

    }
    private configHandler(event: egret.Event): void {
        var loader: egret.URLLoader = <egret.URLLoader>event.target;
        var data: any = loader.data;
        var configXml = egret.XML.parse(data);
        AppService.getInstance().setConfig(configXml);

        /*
        this._loadingView.parent.removeChild(this._loadingView);
        var self = this;
        egret.setTimeout(function () {
            self._appView = new AppView();
            self.addChild(self._appView);
            self.checkSize();
        }, this,10);*/
       
    }


}


