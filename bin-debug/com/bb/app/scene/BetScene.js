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
        console.log(_this._betAreaUI.width + "====1111");
        //下注面板
        _this.betPannel = AssetsUtil.createBitmapByName("bet_panel_jpg");
        _this._betAreaUI.addChild(_this.betPannel);
        console.log(_this.betPannel.width + "====>>");
        console.log(_this._betAreaUI.width + "====2222");
        //下注提示文字
        _this.betTips = new egret.TextField();
        _this.betTips.text = "请选择支持蓝猫或者红鼠";
        _this.betTips.x = 0;
        _this.betTips.y = 23;
        _this.betTips.size = 13;
        _this.betTips.width = 750;
        _this.betTips.height = 30;
        _this.betTips.textColor = 0xff0000;
        _this.betTips.fontFamily = "KaiTi"; //ps提示说系统上这个字体丢失，有待测试
        _this.betTips.textAlign = egret.HorizontalAlign.CENTER;
        _this.betTips.verticalAlign = egret.VerticalAlign.MIDDLE;
        //撤回按钮
        _this.recallButton = AssetsUtil.createBitmapByName("recall_jpg");
        _this.recallButton.x = (750 - 126) / 2;
        _this.recallButton.y = 28;
        _this.recallButton.height = 30;
        _this.recallButton.width = 126;
        //  this.recallButton.visible = false;
        //左下注按钮
        _this.leftBetButton = AssetsUtil.createBitmapByName("left_bet_jpg");
        _this.leftBetButton.x = (750 - 206 * 3 - 20 * 2) / 2;
        _this.leftBetButton.y = 58;
        _this.leftBetButton.height = 106;
        _this.leftBetButton.width = 206;
        _this.leftBetButton.touchEnabled = true;
        //左边自己下注金额
        _this._leftGoldTxt = new egret.TextField();
        _this._leftGoldTxt.text = "0";
        _this._leftGoldTxt.x = _this.leftBetButton.x + 206 - 100;
        _this._leftGoldTxt.y = 58 + 80;
        _this._leftGoldTxt.size = 13;
        _this._leftGoldTxt.width = 100;
        _this._leftGoldTxt.height = 26;
        _this._leftGoldTxt.textColor = 0xff0000;
        _this._leftGoldTxt.fontFamily = "KaiTi"; //ps提示说系统上这个字体丢失，有待测试
        _this._leftGoldTxt.textAlign = egret.HorizontalAlign.RIGHT;
        _this._leftGoldTxt.verticalAlign = egret.VerticalAlign.MIDDLE;
        //中下注按钮
        _this.middleBetButton = AssetsUtil.createBitmapByName("middle_bet_jpg");
        _this.middleBetButton.x = (750 - 206 * 3 - 20 * 2) / 2 + 206 + 20;
        _this.middleBetButton.y = 58;
        _this.middleBetButton.height = 106;
        _this.middleBetButton.width = 206;
        _this.middleBetButton.touchEnabled = true;
        //中间自己下注金额
        _this._middleGoldTxt = new egret.TextField();
        _this._middleGoldTxt.text = "0";
        _this._middleGoldTxt.x = _this.middleBetButton.x + 206 - 100;
        _this._middleGoldTxt.y = 58 + 80;
        _this._middleGoldTxt.size = 13;
        _this._middleGoldTxt.width = 100;
        _this._middleGoldTxt.height = 26;
        _this._middleGoldTxt.textColor = 0xff0000;
        _this._middleGoldTxt.fontFamily = "KaiTi"; //ps提示说系统上这个字体丢失，有待测试
        _this._middleGoldTxt.textAlign = egret.HorizontalAlign.RIGHT;
        _this._middleGoldTxt.verticalAlign = egret.VerticalAlign.MIDDLE;
        //右下注按钮
        _this.rightBetButton = AssetsUtil.createBitmapByName("right_bet_jpg");
        _this.rightBetButton.x = (750 - 206 * 3 - 20 * 2) / 2 + 206 * 2 + 20 * 2;
        _this.rightBetButton.y = 58;
        _this.rightBetButton.height = 106;
        _this.rightBetButton.width = 206;
        _this.rightBetButton.touchEnabled = true;
        //右边自己下注金额
        _this._rightGoldTxt = new egret.TextField();
        _this._rightGoldTxt.text = "0";
        _this._rightGoldTxt.x = _this.rightBetButton.x + 206 - 100;
        _this._rightGoldTxt.y = 58 + 80;
        _this._rightGoldTxt.size = 13;
        _this._rightGoldTxt.width = 100;
        _this._rightGoldTxt.height = 26;
        _this._rightGoldTxt.textColor = 0xff0000;
        _this._rightGoldTxt.fontFamily = "KaiTi"; //ps提示说系统上这个字体丢失，有待测试
        _this._rightGoldTxt.textAlign = egret.HorizontalAlign.RIGHT;
        _this._rightGoldTxt.verticalAlign = egret.VerticalAlign.MIDDLE;
        //10块的金币选择按钮，未选择之前
        _this.gold10Button = AssetsUtil.createBitmapByName("gold_10_jpg");
        _this.gold10Button.x = (750 - 182 * 3 - 45 * 2) / 2;
        _this.gold10Button.y = 58 + 106 + 60;
        _this.gold10Button.height = 56;
        _this.gold10Button.width = 182;
        _this.gold10Button.visible = false;
        _this.gold10Button.touchEnabled = true;
        _this._currentChoosGold = 10; //初始化默认选择10元
        //100块的金币选择按钮，未选择之前
        _this.gold100Button = AssetsUtil.createBitmapByName("gold_100_jpg");
        _this.gold100Button.x = (750 - 182 * 3 - 45 * 2) / 2 + 182 + 45;
        _this.gold100Button.y = 58 + 106 + 60;
        _this.gold100Button.height = 56;
        _this.gold100Button.width = 182;
        _this.gold100Button.touchEnabled = true;
        //1000块的金币选择按钮，未选择之前
        _this.gold1000Button = AssetsUtil.createBitmapByName("gold_1000_jpg");
        _this.gold1000Button.x = (750 - 182 * 3 - 45 * 2) / 2 + 182 * 2 + 45 * 2;
        _this.gold1000Button.y = 58 + 106 + 60;
        _this.gold1000Button.height = 56;
        _this.gold1000Button.width = 182;
        _this.gold1000Button.touchEnabled = true;
        //10块的金币选择按钮，选择之后
        _this.gold10DownButton = AssetsUtil.createBitmapByName("gold_10_down_jpg");
        _this.gold10DownButton.x = (750 - 200 * 3 - 37 * 2) / 2;
        _this.gold10DownButton.y = 58 + 106 + 60 - 5;
        _this.gold10DownButton.height = 70;
        _this.gold10DownButton.width = 200;
        //100块的金币选择按钮，选择之后
        _this.gold100DownButton = AssetsUtil.createBitmapByName("gold_100_down_jpg");
        _this.gold100DownButton.x = (750 - 200 * 3 - 37 * 2) / 2 + 200 + 37;
        _this.gold100DownButton.y = 58 + 106 + 60 - 5;
        _this.gold100DownButton.height = 70;
        _this.gold100DownButton.width = 200;
        _this.gold100DownButton.visible = false;
        //1000块的金币选择按钮，选择之后
        _this.gold1000DownButton = AssetsUtil.createBitmapByName("gold_1000_down_jpg");
        _this.gold1000DownButton.x = (750 - 200 * 3 - 37 * 2) / 2 + 200 * 2 + 37 * 2;
        _this.gold1000DownButton.y = 58 + 106 + 60 - 5;
        _this.gold1000DownButton.height = 70;
        _this.gold1000DownButton.width = 200;
        _this.gold1000DownButton.visible = false;
        _this._betAreaUI.addChild(_this.betTips);
        _this._betAreaUI.addChild(_this.recallButton);
        _this._betAreaUI.addChild(_this.leftBetButton);
        _this._betAreaUI.addChild(_this._leftGoldTxt);
        _this._betAreaUI.addChild(_this.middleBetButton);
        _this._betAreaUI.addChild(_this._middleGoldTxt);
        _this._betAreaUI.addChild(_this.rightBetButton);
        _this._betAreaUI.addChild(_this._rightGoldTxt);
        _this._betAreaUI.addChild(_this.gold10DownButton);
        _this._betAreaUI.addChild(_this.gold100DownButton);
        _this._betAreaUI.addChild(_this.gold1000DownButton);
        _this._betAreaUI.addChild(_this.gold10Button);
        _this._betAreaUI.addChild(_this.gold100Button);
        _this._betAreaUI.addChild(_this.gold1000Button);
        // this._leftDog = new LeftDogBeting();
        // this._leftDog.width = 200;
        // this._rightDog = new RightDogBeting();
        // this._rightDog.width = 200;
        // this._baseUI .addChild(this._leftDog);
        // this._baseUI .addChild(this._rightDog);
        // var label:eui.Label = new eui.Label();
        // label.text = "正在下注";
        // label.textColor = 0x00–ff00;
        // label.x  = 100;
        // label.y = 20;
        // this._baseUI.addChild(label);
        _this.leftBetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.doLeftBet, _this);
        _this.middleBetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.doMiddleBet, _this);
        _this.rightBetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.doRightBet, _this);
        _this.gold10Button.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.doChoose10, _this);
        _this.gold100Button.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.doChoose100, _this);
        _this.gold1000Button.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.doChoose1000, _this);
        BetService.getInstance().addEventListener(BetServiceEvent.BET_RSP, _this.betRspHandler, _this);
        BetService.getInstance().addEventListener(BetServiceEvent.BET_BRO, _this.betBroadcastHandler, _this);
        BetService.getInstance().addEventListener(BetServiceEvent.GET_CURRENT_BET_COUND_RSP, _this.getBetRoundRspHandler, _this);
        BetService.getInstance().addEventListener(BetServiceEvent.CURRENT_BET_COUND_BRO, _this.currentBetRoundBroHandler, _this);
        return _this;
    }
    BetScene.prototype.hideAllGoldDownBtn = function () {
        console.log("hideAllGoldDownBtn...");
        this.gold10Button.visible = true;
        this.gold100Button.visible = true;
        this.gold1000Button.visible = true;
        this.gold10DownButton.visible = false;
        this.gold100DownButton.visible = false;
        this.gold1000DownButton.visible = false;
    };
    BetScene.prototype.doChoose10 = function () {
        console.log("doChoose10...");
        this._currentChoosGold = 10;
        this.hideAllGoldDownBtn();
        this.gold10DownButton.visible = true;
        this.gold10Button.visible = false;
    };
    BetScene.prototype.doChoose100 = function () {
        console.log("doChoose100...");
        this._currentChoosGold = 100;
        this.hideAllGoldDownBtn();
        this.gold100DownButton.visible = true;
        this.gold100Button.visible = false;
    };
    BetScene.prototype.doChoose1000 = function () {
        console.log("doChoose1000...");
        this._currentChoosGold = 1000;
        this.hideAllGoldDownBtn();
        this.gold1000DownButton.visible = true;
        this.gold1000Button.visible = false;
    };
    BetScene.prototype.doLeftBet = function (evt) {
        var betcount = this._currentChoosGold + "";
        console.log("doLeftBet..." + betcount);
        var params = { "moneyType": "trx", "betCount1": betcount };
        BetService.getInstance().betReq(params);
    };
    BetScene.prototype.doMiddleBet = function (evt) {
        var betcount = this._currentChoosGold + "";
        console.log("doMiddleBet..." + betcount);
        var params = { "moneyType": "trx", "betCount2": betcount };
        BetService.getInstance().betReq(params);
    };
    BetScene.prototype.doRightBet = function (evt) {
        var betcount = this._currentChoosGold + "";
        console.log("doRightBet..." + betcount);
        var params = { "moneyType": "trx", "betCount2": betcount };
        BetService.getInstance().betReq(params);
    };
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
    /**
     * 下注回调处理
     */
    BetScene.prototype.betRspHandler = function (event) {
        var data = event.data;
        var jsonData = data.jsonObj;
        if (data.code == 0) {
            this._leftGoldTxt.text = "" + data.betCount1;
            this._middleGoldTxt.text = "" + data.betCount2;
            this._rightGoldTxt.text = "" + data.betCount3;
        }
        else {
            //TODO 需要做提示弹窗
            console.log("betRspHandler fail, msg:" + data.notice);
        }
    };
    /**
     * 全局下注广播通知处理
     */
    BetScene.prototype.betBroadcastHandler = function (event) {
        var data = event.data;
        var jsonData = data.jsonObj;
        if (data.code == 0) {
            this._leftGoldTxt.text = "" + data.betCount1;
            this._middleGoldTxt.text = "" + data.betCount2;
            this._rightGoldTxt.text = "" + data.betCount3;
            //TODO 全局下注金额要改变
        }
        else {
            //TODO 需要做提示弹窗
            console.log("betBroadcastHandler fail, msg:" + data.notice);
        }
    };
    /**
     * 广播游戏情况
     */
    BetScene.prototype.currentBetRoundBroHandler = function (event) {
        var data = event.data;
        if (data.code == 0) {
            this.doCurrentBetRound(data.jsonObj);
        }
        else {
            console.log("currentBetRoundBroHandler fail, msg:" + data.notice);
        }
    };
    /**
     * 单播游戏情况
     * */
    BetScene.prototype.getBetRoundRspHandler = function (event) {
        var data = event.data;
        if (data.code == 0) {
            this.doCurrentBetRound(data.jsonObj);
        }
        else {
            console.log("getBetRoundRspHandler fail, msg:" + data.notice);
        }
    };
    //处理当前游戏情况
    BetScene.prototype.doCurrentBetRound = function (data) {
        if (data.currentBetRound.state == 0) {
            var betTimeTotal = data.currentBetRound.betTimeTotal;
            var betTimeLeft = data.currentBetRound.betTimeLeft;
            //TODO 倒数计时
            var mybet = data.myBetStatic;
            this._leftGoldTxt.text = "" + mybet.betCount1;
            this._middleGoldTxt.text = "" + mybet.betCount2;
            this._rightGoldTxt.text = "" + mybet.betCount3;
            //TODO 全局下注显示
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