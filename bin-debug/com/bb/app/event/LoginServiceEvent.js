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
var LoginServiceEvent = (function (_super) {
    __extends(LoginServiceEvent, _super);
    function LoginServiceEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        return _super.call(this, type, bubbles, cancelable, null) || this;
    }
    LoginServiceEvent.LOGIN_OUT = "loginOut";
    LoginServiceEvent.SAME_LOGIN = "sameLogin";
    LoginServiceEvent.LOGIN_SUCCESS = "loginSuccess";
    LoginServiceEvent.LOGIN_FAIL = "loginFail";
    return LoginServiceEvent;
}(egret.Event));
__reflect(LoginServiceEvent.prototype, "LoginServiceEvent");
//# sourceMappingURL=LoginServiceEvent.js.map