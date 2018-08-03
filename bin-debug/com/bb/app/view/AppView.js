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
var AppView = (function (_super) {
    __extends(AppView, _super);
    function AppView() {
        var _this = _super.call(this) || this;
        _this._betScene = new BetScene();
        _this._betScene.percentWidth = 100;
        _this._betScene.percentHeight = 100;
        _this.addChild(_this._betScene);
        _this._startingPlayScene = new StartingPlayScene();
        _this._startingPlayScene.visible = false;
        _this._startingPlayScene.percentWidth = 100;
        _this._startingPlayScene.percentHeight = 100;
        _this.addChild(_this._startingPlayScene);
        _this._topLayer = new eui.Component();
        _this.addChild(_this._topLayer);
        for (var i = 0; i < 3; i++) {
            var layer = new eui.Component();
            layer.x = 0;
            layer.y = 0;
            _this._topLayer.addChild(layer);
            WindowService.getInstance().cacheLayer(layer);
        }
        return _this;
    }
    AppView.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
        _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledHeight);
    };
    return AppView;
}(eui.Component));
__reflect(AppView.prototype, "AppView");
//# sourceMappingURL=AppView.js.map