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
        //微信信息
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
    };
    AppService.prototype.loginOutHandler = function (event) {
        console.info(event.toString());
    };
    AppService.prototype.loginFailHandler = function (event) {
        console.info(event.toString());
        this.serverReady = false;
        this.reTryStartLogin();
    };
    AppService.prototype.reTryStartLogin = function () {
        this.startLogin();
    };
    AppService.prototype.startLogin = function () {
        if (this.serverReady)
            return;
        var openid = GetQueryString("openid");
        var access_token = GetQueryString("access_token");
        if (!openid && !access_token) 
        //test{}
        {
            openid = AppService.getInstance().config.testUser;
            access_token = AppService.getInstance().config.testUser; //test1（保）  test2（龙）  test3(波)
        }
        var url = AppService.getInstance().config.wxgetUserUrl + "?openid=" + openid + "&access_token=" + access_token;
        var loader = new egret.URLLoader();
        // 设置返回数据格式
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetError, this);
        var request = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.GET;
        loader.load(request);
    };
    AppService.prototype.onGetError = function (event) {
        this.serverReady = false;
        var loader = event.target;
        loader.removeEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        loader.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetError, this);
        this.reTryStartLogin();
    };
    AppService.prototype.onGetComplete = function (event) {
        this.serverReady = true;
        var loader = event.target;
        var data = loader.data;
        // 2.采用json解析器方法
        var txt = data.toString();
        var obj = JSON.parse(txt);
        //然后
        if (obj.jsonObj) {
            LoginService.getInstance().startLogin(null, obj.jsonObj.authKey);
            loader.removeEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
            loader.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetError, this);
        }
        else {
            ToolUtil.createAlert("提示", "登陆超过每天最大次数，请明天再试", 400, 200);
        }
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