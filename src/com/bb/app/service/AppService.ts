/**
 *
 * @author 
 *
 */
class AppService extends egret.EventDispatcher {
    public config:any;
    public stage:egret.Stage;
	public constructor() {
        super();
	}
    private static instance: AppService;
    public static getInstance(): AppService {
        if(!this.instance)
            this.instance = new AppService();
        return this.instance;
    }
    public initApp(){
 
        LoginService.getInstance().addEventListener(LoginServiceEvent.LOGIN_FAIL,this.loginFailHandler,this);
        LoginService.getInstance().addEventListener(LoginServiceEvent.LOGIN_SUCCESS,this.loginSuccessHandler,this);
        LoginService.getInstance().addEventListener(LoginServiceEvent.LOGIN_OUT,this.loginOutHandler,this);
        this.startLogin();
        
    }
    public setConfig(config: egret.XML): void {
        var obj: any = {};
        for (var i = 0; i < config.children.length; i++) {
            var xmlItem: egret.XML = <egret.XML>config.children[i];
            if (xmlItem.children != undefined && xmlItem.children)
                obj[xmlItem.localName] = (Object)(xmlItem.children[0]).text;
        }
        this.config = obj;
    }
    private loginSuccessHandler(event:LoginServiceEvent):void{
        console.info(event.toString());
        
    }
    private loginOutHandler(event:LoginServiceEvent):void{
       console.info(event.toString());
      
    }
    private loginFailHandler(event:LoginServiceEvent):void{
       console.info(event.toString());
 
    }
  
    private startLogin():void{
  
        LoginService.getInstance().startLogin(null);
    }
  
    public get appWidth():number{
        return this.stage.stageWidth;
    }
    public get appHeight():number{
         return this.stage.stageHeight;
    }
}

declare function GetQueryString(name);//可以放在 ts 文件内（建议在顶部或者底
