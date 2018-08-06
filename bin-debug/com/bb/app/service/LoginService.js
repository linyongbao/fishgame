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
var LoginService = (function (_super) {
    __extends(LoginService, _super);
    function LoginService() {
        var _this = _super.call(this) || this;
        _this.isLogined = false;
        _this.currentUser = new BaseUser();
        _this.addListeners();
        return _this;
    }
    LoginService.getInstance = function () {
        if (!this.instance)
            this.instance = new LoginService();
        return this.instance;
    };
    LoginService.prototype.startLogin = function (authkey) {
        var obj = {};
        obj[CmdUtil.SESSION_AUTHKEY] = authkey;
        SocketDataServiceFactory.getInstance().startLogin(obj);
    };
    LoginService.prototype.logout = function () {
        SocketDataServiceFactory.getInstance().logout();
        this.dispatchEvent(new LoginServiceEvent(LoginServiceEvent.LOGIN_OUT));
    };
    LoginService.prototype.addListeners = function () {
        SocketDataServiceFactory.getInstance().addEventListener(WebSocketEvent.CONNECT_SUCCESS, this.connectSuccessHandler, this);
        SocketDataServiceFactory.getInstance().addEventListener(WebSocketEvent.DISCONNECT, this.disConnectHandler, this);
    };
    LoginService.prototype.connectSuccessHandler = function (event) {
        this.loginResult(event.data);
    };
    LoginService.prototype.disConnectHandler = function (event) {
        this.isLogined = false;
        this.dispatchEvent(new LoginServiceEvent(LoginServiceEvent.LOGIN_FAIL));
    };
    LoginService.prototype.loginResult = function (obj) {
        var user = obj.jsonObj;
        var code = obj.code;
        var notice = obj.notice;
        if (user && code == 1) {
            this.isLogined = true;
            this.doUserObject(user);
            this.dispatchEvent(new LoginServiceEvent(LoginServiceEvent.LOGIN_SUCCESS));
        }
        else if (code == 6) {
            this.isLogined = false;
            this.dispatchEvent(new LoginServiceEvent(LoginServiceEvent.SAME_LOGIN));
        }
        else {
            this.isLogined = false;
            this.dispatchEvent(new LoginServiceEvent(LoginServiceEvent.LOGIN_FAIL));
        }
        if (notice) {
            var tw = new Alert();
            tw.title = "提示";
            tw.content = notice.toString();
            tw.offsetX = 100;
            tw.offsetY = -50;
            tw.width = 300;
            tw.height = 200;
            tw.show();
        }
    };
    LoginService.prototype.doUserObject = function (obj) {
        this.currentUser.account = obj.account;
        this.currentUser.nickName = obj.nick;
        this.currentUser.gender = obj.sex;
        this.currentUser.logo = obj.logo;
    };
    return LoginService;
}(egret.EventDispatcher));
__reflect(LoginService.prototype, "LoginService");
//# sourceMappingURL=LoginService.js.map