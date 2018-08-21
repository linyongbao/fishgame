/**
 *
 * 下注界面
 */
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
var BetScene = (function (_super) {
    __extends(BetScene, _super);
    function BetScene() {
        var _this = _super.call(this) || this;
        _this._baseUI = new MyComponent();
        _this.addChild(_this._baseUI);
        _this._betAreaUI = new MyComponent();
        _this.addChild(_this._betAreaUI);
        _this._leftDog = new LeftDogBeting();
        _this._leftDog.width = 200;
        _this._rightDog = new RightDogBeting();
        _this._rightDog.width = 200;
        _this._baseUI.addChild(_this._leftDog);
        _this._baseUI.addChild(_this._rightDog);
        var label = new eui.Label();
        label.text = "正在下注";
        label.textColor = 0x00ff00;
        label.x = 100;
        label.y = 20;
        _this._baseUI.addChild(label);
        BetService.getInstance().addEventListener(BetServiceEvent.BET_RSP, _this.betRspHandler, _this);
        BetService.getInstance().addEventListener(BetServiceEvent.GET_CURRENT_BET_COUND_RSP, _this.getBetRoundRspHandler, _this);
        BetService.getInstance().addEventListener(BetServiceEvent.CURRENT_BET_COUND_BRO, _this.currentBetRoundBroHandler, _this);
        return _this;
    }
    BetScene.prototype.reSize = function (w, h) {
        this._baseUI.width = w;
        this._baseUI.height = h;
        this._betAreaUI.width = w;
        this._betAreaUI.height = 300;
        this._betAreaUI.graphics.clear();
        this._betAreaUI.graphics.beginFill(0xECBF02, 1);
        this._betAreaUI.graphics.drawRect(0, 0, w, this._betAreaUI.height);
        this._betAreaUI.graphics.endFill();
        this._betAreaUI.y = h - this._betAreaUI.height;
        this._leftDog.x = 50;
        this._rightDog.x = (this._baseUI.width - this._rightDog.width) - 50;
        this._leftDog.y = 150;
        this._rightDog.y = 150;
    };
    BetScene.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
        _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledHeight);
        this.reSize(unscaledWidth, unscaledHeight);
    };
    BetScene.prototype.betRspHandler = function (event) {
        var data = event.data;
        var jsonData = data.jsonObj;
        if (data.code == 0) {
        }
    };
    BetScene.prototype.currentBetRoundBroHandler = function (event) {
        var data = event.data;
        var jsonData = data.jsonObj;
        this.doCurrentBetRound(jsonData);
    };
    BetScene.prototype.getBetRoundRspHandler = function (event) {
        var data = event.data;
        var jsonData = data.jsonObj;
        var currentBetRound = jsonData.currentBetRound;
        this.doCurrentBetRound(currentBetRound);
    };
    BetScene.prototype.doCurrentBetRound = function (currentBetRound) {
        if (currentBetRound.state == 0) {
        }
    };
    BetScene.prototype.betHandler = function (event) {
    };
    BetScene.prototype.betCancelHandler = function (event) {
    };
    return BetScene;
}(MyComponent));
__reflect(BetScene.prototype, "BetScene");
//# sourceMappingURL=BetScene.js.map