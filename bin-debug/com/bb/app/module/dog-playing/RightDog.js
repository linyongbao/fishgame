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
var RightDogPlaying = (function (_super) {
    __extends(RightDogPlaying, _super);
    function RightDogPlaying() {
        var _this = _super.call(this) || this;
        _this.graphics.clear();
        _this.graphics.beginFill(0x445566, 1);
        _this.graphics.drawRect(0, 0, 200, 200);
        _this.graphics.endFill();
        return _this;
    }
    return RightDogPlaying;
}(MyComponent));
__reflect(RightDogPlaying.prototype, "RightDogPlaying");
//# sourceMappingURL=RightDog.js.map