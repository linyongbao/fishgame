/**
 *
 * @author 
 *
 */
class AppView extends eui.Component {
   
    private _betScene:BetScene;
    private _startingPlayScene:StartingPlayScene;
    private _topLayer:eui.Component;
    public constructor() {
        super();

        this._betScene = new BetScene();
        this._betScene.percentWidth = 100;
        this._betScene.percentHeight = 100;
        this.addChild(this._betScene);

        this._startingPlayScene = new StartingPlayScene();
        this._startingPlayScene.visible = false;
        this._startingPlayScene.percentWidth = 100;
        this._startingPlayScene.percentHeight = 100;
        this.addChild(this._startingPlayScene);
    
        
        this._topLayer = new eui.Component();
        this.addChild(this._topLayer);

        for(var i = 0;i<3;i++)
        {
            var layer: eui.Component = new eui.Component();
            layer.x = 0;
            layer.y = 0;
            this._topLayer.addChild(layer);
            WindowService.getInstance().cacheLayer(layer);
        }

    }

    protected updateDisplayList(unscaledWidth: number,unscaledHeight: number): void {
        super.updateDisplayList(unscaledWidth,unscaledHeight);

    }

}
