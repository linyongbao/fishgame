var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 资源加载工具类，
 * 支持多个resource.json文件加载
 */
var ResConfigUtils = (function () {
    /**
     * 构造函数
     */
    function ResConfigUtils() {
        this._configs = new Array();
    }
    ResConfigUtils.getInstance = function () {
        if (this.instance == null) {
            this.instance = new ResConfigUtils();
        }
        return this.instance;
    };
    /**
     * 添加一个配置文件
     * @param jsonPath resource.json路径
     * @param filePath 访问资源路径
     */
    ResConfigUtils.prototype.addConfig = function (jsonPath, filePath) {
        this._configs.push([jsonPath, filePath]);
    };
    /**
     * 开始加载配置文件
     * @param $onConfigComplete 加载完成执行函数
     * @param $onConfigCompleteTarget 加载完成执行函数所属对象
     */
    ResConfigUtils.prototype.loadConfig = function ($onConfigComplete, $onConfigCompleteTarget) {
        this._onConfigComplete = $onConfigComplete;
        this._onConfigCompleteTarget = $onConfigCompleteTarget;
        this.loadNextConfig();
    };
    /**
     * 加载
     */
    ResConfigUtils.prototype.loadNextConfig = function () {
        //加载完成
        if (this._configs.length == 0) {
            this._onConfigComplete.call(this._onConfigCompleteTarget);
            this._onConfigComplete = null;
            this._onConfigCompleteTarget = null;
            return;
        }
        var arr = this._configs.shift();
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this);
        RES.loadConfig(arr[0] + "?t=" + new Date().getTime(), arr[1]);
    };
    /**
     * 加载完成
     * @param event
     */
    ResConfigUtils.prototype.onConfigCompleteHandle = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this);
        this.loadNextConfig();
    };
    return ResConfigUtils;
}());
__reflect(ResConfigUtils.prototype, "ResConfigUtils");
//# sourceMappingURL=ResConfigUtils.js.map