 class SimpleURLLoader extends egret.URLLoader{
     
     public  static  JSON:string = "JSON";
     private  _url:string;
	 public  index:number = 0;
     public constructor() {
		super();
        this.addEventListener(egret.Event.COMPLETE,this.loadDataCompleteHandler,this,false,99999);
     }
     private loadDataCompleteHandler(event: egret.Event){
        
         if(this.dataFormat == SimpleURLLoader.JSON){
             event.stopImmediatePropagation();
             var loader:egret.URLLoader = <egret.URLLoader>event.target;
             var data : any = loader.data;
             data = JSON.parse(data);
             this.data = data;
             this.dispatchEvent(event);
         }
     }

     public set url(value  : string){
         this._url =   value;
     }

     public depose():void{
        
         this.removeEventListener(egret.Event.COMPLETE,this.loadDataCompleteHandler,this);
     }
}