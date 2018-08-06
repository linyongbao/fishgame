class MyComponent extends eui.Component implements IDepose{
    protected _$bg:egret.Shape;
    private _$border:egret.Shape;
  
    public constructor() {
		super();  
		this._$bg = new egret.Shape();
		this.addChild(this._$bg);
		
	}
   
    public get graphics():egret.Graphics{
        return this._$bg.graphics;
    }
    public depose(gc : boolean = false):void{
        
    }

    public set toolTip(value : string){

        
    }
}