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
var MyComponent = (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent() {
        var _this = _super.call(this) || this;
        _this._$bg = new egret.Shape();
        _this.addChild(_this._$bg);
        return _this;
    }
    Object.defineProperty(MyComponent.prototype, "graphics", {
        get: function () {
            return this._$bg.graphics;
        },
        enumerable: true,
        configurable: true
    });
    MyComponent.prototype.depose = function (gc) {
        if (gc === void 0) { gc = false; }
    };
    Object.defineProperty(MyComponent.prototype, "toolTip", {
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}(eui.Component));
__reflect(MyComponent.prototype, "MyComponent", ["IDepose"]);
//# sourceMappingURL=MyComponent.js.map