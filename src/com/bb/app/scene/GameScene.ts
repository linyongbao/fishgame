class GameScene extends MyComponent {
   public constructor() {
        super();
        var label:eui.Label = new eui.Label();
        label.text = "";
        label.x  = 200;
        label.y = 50;
        this.addChild(label);
    }

    public reSize(w:number,h:number){
        this.graphics.clear();
        this.graphics.beginFill(0xE8604E,1);
        this.graphics.drawRect(0,0,w,h);
        this.graphics.endFill();
      
    }

    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void{

        super.updateDisplayList(unscaledWidth,unscaledHeight);
        this.reSize(unscaledWidth,unscaledHeight);
    }
}