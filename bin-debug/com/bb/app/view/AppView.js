var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *
 * @author
 *
 */
var AppView = (function (_super) {
    __extends(AppView, _super);
    function AppView() {
        var _this = _super.call(this) || this;
        LoginService.getInstance().addEventListener(LoginServiceEvent.LOGIN_SUCCESS, _this.intApp, _this);
        AppService.getInstance().initApp();
        return _this;
    }
    AppView.prototype.intApp = function (event) {
        if (!this._gameScene) {
            this._gameScene = new GameScene();
            this._gameScene.percentWidth = 100;
            this._gameScene.percentHeight = 100;
            this._gameScene.visible = true;
            this.addChild(this._gameScene);
        }
        if (!this._betScene) {
            this._betScene = new BetScene();
            this._betScene.percentWidth = 100;
            this._betScene.percentHeight = 100;
            this._betScene.visible = false;
            this.addChild(this._betScene);
        }
        if (!this._startingPlayScene) {
            this._startingPlayScene = new StartingPlayScene();
            this._startingPlayScene.visible = false;
            this._startingPlayScene.percentWidth = 100;
            this._startingPlayScene.percentHeight = 100;
            this.addChild(this._startingPlayScene);
        }
        this._topLayer = new eui.Component();
        this.addChild(this._topLayer);
        for (var i = 0; i < 3; i++) {
            var layer = new eui.Component();
            layer.x = 0;
            layer.y = 0;
            this._topLayer.addChild(layer);
            WindowService.getInstance().cacheLayer(layer);
        }
        this.setViewState(0);
        BetService.getInstance().addEventListener(BetServiceEvent.CURRENT_BET_COUND_BRO, this.currentRoundRroHandler, this);
        BetService.getInstance().addEventListener(BetServiceEvent.GET_CURRENT_BET_COUND_RSP, this.getBetRoundRspHandler, this);
        BetService.getInstance().addEventListener(BetServiceEvent.PLAY_START, this.playStartHandler, this);
        BetService.getInstance().addEventListener(BetServiceEvent.PLAY_END, this.playEndHandler, this);
        BetService.getInstance().getCurrentBetRoundReq();
    };
    AppView.prototype.playStartHandler = function (event) {
        //播放动画
        this.setViewState(1);
    };
    AppView.prototype.playEndHandler = function (event) {
        this.setViewState(0);
    };
    AppView.prototype.currentRoundRroHandler = function (event) {
        var data = event.data;
        var jsonData = data.jsonObj;
        var currentBetRound = jsonData.currentBetRound;
        if (currentBetRound.state == 0) {
            this.setViewState(0);
        }
        else if (currentBetRound.state == 1) {
            this.setViewState(1);
        }
    };
    AppView.prototype.getBetRoundRspHandler = function (event) {
        var data = event.data;
        var jsonData = data.jsonObj;
        var currentBetRound = jsonData.currentBetRound;
        if (currentBetRound.state == 0) {
            this.setViewState(0);
        }
        else if (currentBetRound.state == 1) {
            this.setViewState(1);
        }
    };
    AppView.prototype.setViewState = function (state) {
        switch (state) {
            case 0:
                this._betScene.visible = true;
                this._startingPlayScene.visible = false;
                break;
            case 1:
                this._betScene.visible = false;
                this._startingPlayScene.visible = true;
        }
    };
    AppView.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
        _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledHeight);
        this.graphics.clear();
        this.graphics.beginFill(0xffffff);
        this.graphics.drawRect(0, 0, this.width, this.height);
        this.graphics.endFill();
    };
    return AppView;
}(MyComponent));
__reflect(AppView.prototype, "AppView");
//# sourceMappingURL=AppView.js.map