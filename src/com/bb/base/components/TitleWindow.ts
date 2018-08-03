class TitleWindow extends eui.Panel implements  eui.UIComponent {
	public offsetX:number = 0;
	public offsetY:number = 0;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
	public show():void{
		  WindowService.getInstance().addToTopLayer(this);
		  this.x = (AppService.getInstance().appWidth- this.width)/2 + this.offsetX;
	      this.y = (AppService.getInstance().appHeight- this.height)/2 + this.offsetY;
	}
	public close():void{
		if(this.parent)
			this.parent.removeChild(this);
	}
	protected updateDisplayList(unscaledWidth: number,unscaledHeight: number): void {
        super.updateDisplayList(unscaledWidth,unscaledHeight);
		
	}
}