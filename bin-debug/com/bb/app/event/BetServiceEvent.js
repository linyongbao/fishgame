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
var BetServiceEvent = (function (_super) {
    __extends(BetServiceEvent, _super);
    function BetServiceEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        return _super.call(this, type, bubbles, cancelable, null) || this;
    }
    BetServiceEvent.GET_CURRENT_BET_COUND_RSP = "GET_CURRENT_BET_COUND_RSP";
    BetServiceEvent.CURRENT_BET_COUND_BRO = "CURRENT_BET_COUND_BRO";
    BetServiceEvent.BET_RSP = "BET_RSP";
    BetServiceEvent.PLAY_START = "PLAY_START";
    BetServiceEvent.PLAY_END = "PLAY_END";
    return BetServiceEvent;
}(egret.Event));
__reflect(BetServiceEvent.prototype, "BetServiceEvent");
//# sourceMappingURL=BetServiceEvent.js.map