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
var CommonEvent = (function (_super) {
    __extends(CommonEvent, _super);
    function CommonEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        return _super.call(this, type, bubbles, cancelable, null) || this;
    }
    CommonEvent.GIFT_SEND_SUCCESS = "GIFT_SEND_SUCCESS"; //送礼成功返回
    CommonEvent.GIFT_INIT_DATA_RES = "GIFT_INIT_DATA_RES"; //礼物初始数据返回
    return CommonEvent;
}(egret.Event));
__reflect(CommonEvent.prototype, "CommonEvent");
//# sourceMappingURL=CommonEvent.js.map