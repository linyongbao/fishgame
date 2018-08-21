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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        var label = new eui.Label();
        label.text = "";
        label.x = 200;
        label.y = 50;
        _this.addChild(label);
        return _this;
    }
    GameScene.prototype.reSize = function (w, h) {
        this.graphics.clear();
        this.graphics.beginFill(0xE8604E, 1);
        this.graphics.drawRect(0, 0, w, h);
        this.graphics.endFill();
    };
    GameScene.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
        _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledHeight);
        this.reSize(unscaledWidth, unscaledHeight);
    };
    return GameScene;
}(MyComponent));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map