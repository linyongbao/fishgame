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
        //放鱼的地方
        // this._baseUI = new MyComponent();
        // this.addChild(this._baseUI);
        //放下注面板的地方
        _this._betAreaUI = new MyComponent();
        _this.addChild(_this._betAreaUI);
        //下注面板
        var betPannel = AssetsUtil.createBitmapByName("bet_panel_jpg");
        _this._betAreaUI.addChild(betPannel);
        //下注提示文字
        var recallTips = new eui.Label;
        recallTips.text = "请选择支持蓝猫或者红鼠";
        recallTips.x = 50;
        recallTips.y = 50;
        recallTips.width = _this._betAreaUI.width;
        recallTips.height = 30;
        recallTips.textColor = 0xff0000;
        //  recallTips.fontFamily = "KaiTi";//ps提示说系统上这个字体丢失，有待测试
        //  recallTips.textAlign = egret.HorizontalAlign.CENTER;
        //  recallTips.verticalAlign = egret.VerticalAlign.MIDDLE;
        //撤回按钮
        //  var recallButton = AssetsUtil.createBitmapByName("recall_jpg");
        //  recallButton.x = (this._betAreaUI.width - 126) / 2;
        //  recallButton.x = 1;
        //  recallButton.y = 0;
        //  recallButton.height = 30;
        _this._betAreaUI.addChild(recallTips);
        //  this._betAreaUI.addChild(recallButton);
        var myGroup = new eui.Group();
        myGroup.x = 0;
        myGroup.y = 30;
        myGroup.width = 500;
        myGroup.height = 300;
        // this._betAreaUI.addChild(betPannel);
        // var leftButton = AssetsUtil.createBitmapByName("left_bet_jpg");
        // this._betAreaUI.addChild(leftButton);
        // var middleButton = AssetsUtil.createBitmapByName("middle_bet_jpg");
        // this._betAreaUI.addChild(middleButton);
        // var rightButton = AssetsUtil.createBitmapByName("right_bet_jpg");
        // this._betAreaUI.addChild(rightButton);
        // this._leftDog = new LeftDogBeting();
        // this._leftDog.width = 200;
        // this._rightDog = new RightDogBeting();
        // this._rightDog.width = 200;
        // this._baseUI .addChild(this._leftDog);
        // this._baseUI .addChild(this._rightDog);
        // var label:eui.Label = new eui.Label();
        // label.text = "正在下注";
        // label.textColor = 0x00ff00;
        // label.x  = 100;
        // label.y = 20;
        // this._baseUI.addChild(label);
        BetService.getInstance().addEventListener(BetServiceEvent.BET_RSP, _this.betRspHandler, _this);
        BetService.getInstance().addEventListener(BetServiceEvent.GET_CURRENT_BET_COUND_RSP, _this.getBetRoundRspHandler, _this);
        BetService.getInstance().addEventListener(BetServiceEvent.CURRENT_BET_COUND_BRO, _this.currentBetRoundBroHandler, _this);
        return _this;
    }
    BetScene.prototype.reSize = function (w, h) {
        // this._baseUI .width = w;
        // this._baseUI .height = h;
        this._betAreaUI.width = w;
        this._betAreaUI.height = 323;
        // this._betAreaUI.graphics.clear();
        // this._betAreaUI.graphics.beginFill(0xECBF02,1);
        // this._betAreaUI.graphics.drawRect(0,0,w,this._betAreaUI .height );
        // this._betAreaUI.graphics.endFill();
        this._betAreaUI.y = h - this._betAreaUI.height;
        // this._leftDog.x =  50 ;
        // this._rightDog.x = (this._baseUI.width - this._rightDog.width)  - 50;
        // this._leftDog.y = 150;
        // this._rightDog.y = 150;
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
        this.doCurrentBetRound(jsonData);
    };
    BetScene.prototype.doCurrentBetRound = function (data) {
        var currentBetRound = data;
        if (currentBetRound.state == 0) {
            var betTimeTotal = currentBetRound.betTimeTotal;
            var betTimeLeft = currentBetRound.betTimeLeft;
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