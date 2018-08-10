/**
 *
 * 开始钓鱼界面
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
var StartingPlayScene = (function (_super) {
    __extends(StartingPlayScene, _super);
    function StartingPlayScene() {
        var _this = _super.call(this) || this;
        _this._titleLabel = new eui.Label();
        _this._titleLabel.textColor = 0xff0000;
        _this._titleLabel.x = 300;
        _this._titleLabel.text = "当前阶段 : 钓鱼中";
        _this.addChild(_this._titleLabel);
        _this._timeLabel = new eui.Label();
        _this._timeLabel.textColor = 0xff0000;
        _this._timeLabel.x = 300;
        _this._timeLabel.y = 100;
        _this._timeLabel.text = "";
        _this.addChild(_this._timeLabel);
        BetService.getInstance().addEventListener(BetServiceEvent.CURRENT_BET_COUND_BRO, _this.currentBetRoundBroHandler, _this);
        return _this;
    }
    StartingPlayScene.prototype.currentBetRoundBroHandler = function (event) {
        var data = event.data;
        var jsonData = data.jsonObj;
        this.doCurrentBetRound(jsonData);
    };
    StartingPlayScene.prototype.getBetRoundRspHandler = function (event) {
        var data = event.data;
        var jsonData = data.jsonObj;
        var currentBetRound = jsonData.currentBetRound;
        this.doCurrentBetRound(currentBetRound);
    };
    StartingPlayScene.prototype.doCurrentBetRound = function (currentBetRound) {
        if (currentBetRound.state == 1) {
            this._titleLabel.text = "当前阶段 : 钓鱼中";
            this._timeLabel.text = currentBetRound.gameTimeLeft + "秒";
        }
    };
    return StartingPlayScene;
}(MyComponent));
__reflect(StartingPlayScene.prototype, "StartingPlayScene");
//# sourceMappingURL=StartingPlayScene.js.map