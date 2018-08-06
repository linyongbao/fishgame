/**
 *
 * @author 
 *
 */
class AppView extends MyComponent {

    private _betScene: BetScene;
    private _startingPlayScene: StartingPlayScene;
    private _topLayer: eui.Component;
    public constructor() {
        super();

        LoginService.getInstance().addEventListener(LoginServiceEvent.LOGIN_SUCCESS, this.intApp, this);
        AppService.getInstance().initApp();

    }

    private intApp(event: LoginServiceEvent): void {

        if (!this._betScene) {
            this._betScene = new BetScene();
            this._betScene.percentWidth = 100;
            this._betScene.percentHeight = 100;
            this._betScene.visible = false;
            this.addChild(this._betScene);
        }

        if (!this._startingPlayScene) {
            this._startingPlayScene = new StartingPlayScene();
            this._startingPlayScene.visible = false;
            this._startingPlayScene.percentWidth = 100;
            this._startingPlayScene.percentHeight = 100;
            this.addChild(this._startingPlayScene);
        }

        this._topLayer = new eui.Component();
        this.addChild(this._topLayer);

        for (var i = 0; i < 3; i++) {
            var layer: eui.Component = new eui.Component();
            layer.x = 0;
            layer.y = 0;
            this._topLayer.addChild(layer);
            WindowService.getInstance().cacheLayer(layer);
        }

        this.setViewState(0);

    }

    public setViewState(state: number): void {
        switch (state) {
            case 0:
                this._betScene.visible = true;
                this._startingPlayScene.visible = false;
                break;
            case 1:
                this._betScene.visible = false;
                this._startingPlayScene.visible = true;
        }

    }

    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void {
        super.updateDisplayList(unscaledWidth, unscaledHeight);
        this.graphics.clear();
        this.graphics.beginFill(0xffffff);
        this.graphics.drawRect(0, 0, this.width, this.height);
        this.graphics.endFill();
    }

}
