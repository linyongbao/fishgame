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
var WindowService = (function (_super) {
    __extends(WindowService, _super);
    function WindowService() {
        var _this = _super.call(this) || this;
        _this.layers = [];
        AppService.getInstance().addEventListener(egret.Event.RESIZE, _this.onResizeHander, _this);
        return _this;
    }
    WindowService.prototype.onResizeHander = function (event) {
        var layers = this.layers;
        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            if (layer.ui) {
                layer.ui.width = AppService.getInstance().appWidth;
                layer.ui.height = AppService.getInstance().appHeight;
                if (layer)
                    layer.ui.x = (AppService.getInstance().appWidth - layer.ui.width) / 2;
                layer.ui.validateDisplayList();
            }
        }
    };
    WindowService.getInstance = function () {
        if (!this.instance)
            this.instance = new WindowService();
        return this.instance;
    };
    WindowService.prototype.showInTopLayer = function (ui, index) {
        if (index === void 0) { index = 0; }
        var layer = null;
        if (index == 0) {
            if (this.layers.length > 0)
                layer = this.layers[this.layers.length - 1];
        }
        else {
            layer = this.layers[index];
        }
        if (layer && layer.ui)
            layer.ui.addChild(ui);
    };
    WindowService.prototype.addToSecondTopLayer = function (ui) {
        this.showInTopLayer(ui, this.MAX_LAYER_INDEX - 1);
    };
    Object.defineProperty(WindowService.prototype, "MAX_LAYER_INDEX", {
        get: function () {
            return this.layers.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    WindowService.prototype.addToTopLayer = function (ui) {
        this.showInTopLayer(ui);
    };
    WindowService.prototype.getTopLayer = function () {
        var layer = this.layers[this.layers.length - 1];
        return layer.ui;
    };
    WindowService.prototype.cacheLayer = function (ui) {
        this.layers.push({ ui: ui });
    };
    return WindowService;
}(egret.EventDispatcher));
__reflect(WindowService.prototype, "WindowService");
//# sourceMappingURL=WindowService.js.map