/**
 *
 * @author 
 *
 */
class WindowService extends egret.EventDispatcher {
    public configXML:any;
	public constructor() {
        super();
		AppService.getInstance().addEventListener(egret.Event.RESIZE,this.onResizeHander,this);
	}
	private onResizeHander(event: egret.Event) {
        var layers:Array<any> = this.layers;
        for(var i = 0;i<layers.length;i++)
        {	
			var layer:any = layers[i];
            if(layer.ui)
            {
                layer.ui.width = AppService.getInstance().appWidth;
                layer.ui.height = AppService.getInstance().appHeight;
                
                if(layer)
                    layer.ui.x = (AppService.getInstance().appWidth - layer.ui.width) / 2;
                
                layer.ui.validateDisplayList();
            }
        } 
    }
    private static instance: WindowService;
    public static getInstance(): WindowService {
        if(!this.instance)
            this.instance = new WindowService();
        return this.instance;
    }
    private layers:Array<any> = [];
    public   showInTopLayer(ui:any,index = 0):void
    {
        var layer:any = null;
        if(index == 0)
        {
            if(this.layers.length > 0)
            layer = this.layers[this.layers.length-1];
        }
        else
        {
            layer = this.layers[index];
        }
        if(layer && layer.ui)
        layer.ui.addChild(ui);
    }

    public   addToSecondTopLayer(ui:any):void
    {
        this.showInTopLayer(ui,this.MAX_LAYER_INDEX-1);
    }

    public   get MAX_LAYER_INDEX():number{
			
		return this.layers.length - 1;
	}
    public   addToTopLayer(ui:any):void
    {
         this.showInTopLayer(ui);
    }

    public   getTopLayer():Object
    {
        var layer:any = this.layers[this.layers.length-1];
        return layer.ui;
    }

    public   cacheLayer(ui:any):void
    {
        this.layers.push({ui:ui});
    }
}


