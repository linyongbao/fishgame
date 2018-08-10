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
        _this._betTypeGroup = new HLayout();
        _this.addChild(_this._betTypeGroup);
        _this._betTypeRadioGroup = new eui.RadioButtonGroup();
        _this._betType1 = new eui.RadioButton();
        _this._betType1.selected = true;
        _this._betType1.label = "10trx";
        _this._betType1.value = "10-trx";
        _this._betType1.group = _this._betTypeRadioGroup;
        _this._betTypeGroup.addChild(_this._betType1);
        _this._betType2 = new eui.RadioButton();
        _this._betType2.label = "100trx";
        _this._betType2.value = "100-trx";
        _this._betType2.group = _this._betTypeRadioGroup;
        _this._betTypeGroup.addChild(_this._betType2);
        _this._betType3 = new eui.RadioButton();
        _this._betType3.label = "1000trx";
        _this._betType3.value = "1000-trx";
        _this._betType3.group = _this._betTypeRadioGroup;
        _this._betTypeGroup.addChild(_this._betType3);
        _this._winTypeGroup = new VLayout();
        _this._winTypeGroup.y = 100;
        _this.addChild(_this._winTypeGroup);
        _this._winType1 = new eui.Button();
        _this._winType1.addEventListener(egret.TouchEvent.TOUCH_END, _this.betHandler, _this);
        _this._winType1.label = "左赢";
        _this._winTypeGroup.addChild(_this._winType1);
        _this._winType2 = new eui.Button();
        _this._winType2.addEventListener(egret.TouchEvent.TOUCH_END, _this.betHandler, _this);
        _this._winType2.label = "平";
        _this._winTypeGroup.addChild(_this._winType2);
        _this._winType3 = new eui.Button();
        _this._winType3.addEventListener(egret.TouchEvent.TOUCH_END, _this.betHandler, _this);
        _this._winType3.label = "右赢";
        _this._winTypeGroup.addChild(_this._winType3);
        _this._cancelButton = new eui.Button();
        _this._cancelButton.addEventListener(egret.TouchEvent.TOUCH_END, _this.betCancelHandler, _this);
        _this._cancelButton.y = 400;
        _this._cancelButton.label = "重置下注";
        _this.addChild(_this._cancelButton);
        _this._titleLabel = new eui.Label();
        _this._titleLabel.textColor = 0xff0000;
        _this._titleLabel.x = 300;
        _this._titleLabel.text = "当前阶段 : 下注";
        _this.addChild(_this._titleLabel);
        _this._timeLabel = new eui.Label();
        _this._timeLabel.textColor = 0xff0000;
        _this._timeLabel.x = 300;
        _this._timeLabel.y = 100;
        _this._timeLabel.text = "";
        _this.addChild(_this._timeLabel);
        BetService.getInstance().addEventListener(BetServiceEvent.BET_RSP, _this.betRspHandler, _this);
        BetService.getInstance().addEventListener(BetServiceEvent.GET_CURRENT_BET_COUND_RSP, _this.getBetRoundRspHandler, _this);
        BetService.getInstance().addEventListener(BetServiceEvent.CURRENT_BET_COUND_BRO, _this.currentBetRoundBroHandler, _this);
        return _this;
    }
    BetScene.prototype.betRspHandler = function (event) {
        var data = event.data;
        var jsonData = data.jsonObj;
        if (data.code == 0) {
            this._winType1.label = "左赢:" + jsonData.betCount1;
            this._winType2.label = "平:" + jsonData.betCount2;
            this._winType3.label = "右赢:" + jsonData.betCount3;
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
            this._titleLabel.text = "当前阶段 : 投注阶段，请投注";
            this._timeLabel.text = currentBetRound.betTimeLeft + "秒";
        }
    };
    BetScene.prototype.betHandler = function (event) {
        var betValueType = this._betTypeRadioGroup.selectedValue;
        var betCount = parseInt(betValueType.split("-")[0]);
        var moneyType = betValueType.split("-")[1];
        this.betReqData = new BetReqData();
        if (this._winType1 == event.currentTarget) {
            this.betReqData.betCount1 = this.betReqData.betCount1 + betCount;
        }
        else if (this._winType2 == event.currentTarget) {
            this.betReqData.betCount2 = this.betReqData.betCount2 + betCount;
        }
        else if (this._winType3 == event.currentTarget) {
            this.betReqData.betCount3 = this.betReqData.betCount3 + betCount;
        }
        this.betReqData.moneyType = moneyType;
        BetService.getInstance().betReq(this.betReqData);
    };
    BetScene.prototype.betCancelHandler = function (event) {
    };
    return BetScene;
}(MyComponent));
__reflect(BetScene.prototype, "BetScene");
//# sourceMappingURL=BetScene.js.map