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
var SimpleURLLoader = (function (_super) {
    __extends(SimpleURLLoader, _super);
    function SimpleURLLoader() {
        var _this = _super.call(this) || this;
        _this.index = 0;
        _this.addEventListener(egret.Event.COMPLETE, _this.loadDataCompleteHandler, _this, false, 99999);
        return _this;
    }
    SimpleURLLoader.prototype.loadDataCompleteHandler = function (event) {
        if (this.dataFormat == SimpleURLLoader.JSON) {
            event.stopImmediatePropagation();
            var loader = event.target;
            var data = loader.data;
            data = JSON.parse(data);
            this.data = data;
            this.dispatchEvent(event);
        }
    };
    Object.defineProperty(SimpleURLLoader.prototype, "url", {
        set: function (value) {
            this._url = value;
        },
        enumerable: true,
        configurable: true
    });
    SimpleURLLoader.prototype.depose = function () {
        this.removeEventListener(egret.Event.COMPLETE, this.loadDataCompleteHandler, this);
    };
    SimpleURLLoader.JSON = "JSON";
    return SimpleURLLoader;
}(egret.URLLoader));
__reflect(SimpleURLLoader.prototype, "SimpleURLLoader");
//# sourceMappingURL=SimpleURLLoader.js.map