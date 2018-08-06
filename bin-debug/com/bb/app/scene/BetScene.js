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
        _this._winTypeRadioGroup = new eui.RadioButtonGroup();
        _this._winType1 = new eui.RadioButton();
        _this._winType1.selected = true;
        _this._winType1.label = "左赢";
        _this._winType1.value = 0;
        _this._winType1.group = _this._winTypeRadioGroup;
        _this._winTypeGroup.addChild(_this._winType1);
        _this._winType2 = new eui.RadioButton();
        _this._winType2.selected = true;
        _this._winType2.label = "平";
        _this._winType2.value = 1;
        _this._winType2.group = _this._winTypeRadioGroup;
        _this._winTypeGroup.addChild(_this._winType2);
        _this._winType3 = new eui.RadioButton();
        _this._winType3.selected = true;
        _this._winType3.label = "右赢";
        _this._winType3.value = 2;
        _this._winType3.group = _this._winTypeRadioGroup;
        _this._winTypeGroup.addChild(_this._winType3);
        _this._betButton = new eui.Button();
        _this._betButton.addEventListener(egret.TouchEvent.TOUCH_END, _this.betHandler, _this);
        _this._betButton.y = 200;
        _this._betButton.label = "下注";
        _this.addChild(_this._betButton);
        _this._titleLabel = new eui.Label();
        _this._titleLabel.textColor = 0xff0000;
        _this._titleLabel.x = 300;
        _this._titleLabel.text = "当前阶段 : ";
        _this.addChild(_this._titleLabel);
        _this._timeLabel = new eui.Label();
        _this._timeLabel.textColor = 0xff0000;
        _this._timeLabel.x = 300;
        _this._timeLabel.y = 100;
        _this._timeLabel.text = "";
        _this.addChild(_this._timeLabel);
        BetService.getInstance().addEventListener(BetServiceEvent.CURRENT_BET_COUND_DETAIL, _this.currentBetRoundDetailHandler, _this);
        BetService.getInstance().getCurrentBetRoundReq();
        return _this;
    }
    BetScene.prototype.currentBetRoundDetailHandler = function (event) {
        var data = event.data;
        var jsonData = data.jsonObj;
        if (jsonData.state == 0) {
            this._titleLabel.text = "当前阶段 : 投注阶段，请投注";
            this._timeLabel.text = jsonData.betTimeLeft + "秒";
        }
        else if (jsonData.state == 1) {
            this._titleLabel.text = "当前阶段 : 钓鱼中";
            this._timeLabel.text = jsonData.gameTimeLeft + "秒";
        }
        else if (jsonData.state == 2) {
            this._titleLabel.text = "当前阶段 : 游戏结束，";
            this._timeLabel.text = "";
        }
    };
    BetScene.prototype.betHandler = function (event) {
        var betValueType = this._betTypeRadioGroup.selectedValue;
        var winType = this._winTypeRadioGroup.selectedValue;
        BetService.getInstance().betReq(betValueType, winType);
    };
    return BetScene;
}(MyComponent));
__reflect(BetScene.prototype, "BetScene");
//# sourceMappingURL=BetScene.js.map