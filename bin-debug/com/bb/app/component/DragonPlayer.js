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
var DragonPlayer = (function (_super) {
    __extends(DragonPlayer, _super);
    function DragonPlayer() {
        return _super.call(this) || this;
    }
    DragonPlayer.prototype.setPosi = function (x, y) {
        this.x = x;
        this.y = y;
    };
    DragonPlayer.prototype.load = function (bin, json, png) {
        var dragonbonesData = RES.getRes(bin);
        var textureData = RES.getRes(json);
        var texture = RES.getRes(png);
        var factory = new dragonBones.EgretFactory();
        factory.parseDragonBonesData(dragonbonesData);
        factory.parseTextureAtlasData(textureData, texture);
        this.armatureDisplay = factory.buildArmatureDisplay("Sprite");
        this.addChild(this.armatureDisplay);
        this.armatureDisplay.armature.cacheFrameRate = 24;
        this.armatureDisplay.animation.timeScale = .5;
    };
    DragonPlayer.prototype.gotoAndPlay = function (frame) {
        this.armatureDisplay.animation.gotoAndPlay("Sprite");
    };
    return DragonPlayer;
}(eui.Component));
__reflect(DragonPlayer.prototype, "DragonPlayer");
//# sourceMappingURL=DragonPlayer.js.map