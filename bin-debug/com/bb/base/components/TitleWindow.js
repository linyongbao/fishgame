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
var TitleWindow = (function (_super) {
    __extends(TitleWindow, _super);
    function TitleWindow() {
        var _this = _super.call(this) || this;
        _this.offsetX = 0;
        _this.offsetY = 0;
        return _this;
    }
    TitleWindow.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    TitleWindow.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    TitleWindow.prototype.show = function () {
        WindowService.getInstance().addToTopLayer(this);
        this.x = (AppService.getInstance().appWidth - this.width) / 2 + this.offsetX;
        this.y = (AppService.getInstance().appHeight - this.height) / 2 + this.offsetY;
    };
    TitleWindow.prototype.close = function () {
        if (this.parent)
            this.parent.removeChild(this);
    };
    TitleWindow.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
        _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledHeight);
    };
    return TitleWindow;
}(eui.Panel));
__reflect(TitleWindow.prototype, "TitleWindow", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=TitleWindow.js.map