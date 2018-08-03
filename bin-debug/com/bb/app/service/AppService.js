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
var AppService = (function (_super) {
    __extends(AppService, _super);
    function AppService() {
        return _super.call(this) || this;
    }
    AppService.getInstance = function () {
        if (!this.instance)
            this.instance = new AppService();
        return this.instance;
    };
    AppService.prototype.initApp = function () {
        LoginService.getInstance().addEventListener(LoginServiceEvent.LOGIN_FAIL, this.loginFailHandler, this);
        LoginService.getInstance().addEventListener(LoginServiceEvent.LOGIN_SUCCESS, this.loginSuccessHandler, this);
        LoginService.getInstance().addEventListener(LoginServiceEvent.LOGIN_OUT, this.loginOutHandler, this);
        this.startLogin();
    };
    AppService.prototype.setConfig = function (config) {
        var obj = {};
        for (var i = 0; i < config.children.length; i++) {
            var xmlItem = config.children[i];
            if (xmlItem.children != undefined && xmlItem.children)
                obj[xmlItem.localName] = (Object)(xmlItem.children[0]).text;
        }
        this.config = obj;
    };
    AppService.prototype.loginSuccessHandler = function (event) {
        console.info(event.toString());
    };
    AppService.prototype.loginOutHandler = function (event) {
        console.info(event.toString());
    };
    AppService.prototype.loginFailHandler = function (event) {
        console.info(event.toString());
    };
    AppService.prototype.startLogin = function () {
        LoginService.getInstance().startLogin(null);
    };
    Object.defineProperty(AppService.prototype, "appWidth", {
        get: function () {
            return this.stage.stageWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "appHeight", {
        get: function () {
            return this.stage.stageHeight;
        },
        enumerable: true,
        configurable: true
    });
    return AppService;
}(egret.EventDispatcher));
__reflect(AppService.prototype, "AppService");
//# sourceMappingURL=AppService.js.map