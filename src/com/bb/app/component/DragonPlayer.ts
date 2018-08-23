class DragonPlayer extends eui.Component {
    private armatureDisplay: dragonBones.EgretArmatureDisplay;
    public constructor() {
        super();


    }
    public setPosi(x, y): void {
        this.x = x;
        this.y = y;
    }

    public load(bin, json, png) {
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


    }
    public gotoAndPlay(frame) {
        this.armatureDisplay.animation.gotoAndPlay("Sprite");
    }
}