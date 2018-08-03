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
        //微信信息
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
       
    }
    private loginOutHandler(event:LoginServiceEvent):void{
       console.info(event.toString());
      
    }
    private loginFailHandler(event:LoginServiceEvent):void{
       console.info(event.toString());
       this.serverReady = false;
       this.reTryStartLogin();
    }
  
    private serverReady:boolean;
    private reTryStartLogin():void{
        this.startLogin();
    }

    private startLogin():void{
        if(this.serverReady)
          return;
        var openid = GetQueryString("openid");
		var access_token = GetQueryString("access_token");

        if(!openid && !access_token)//没有微信信息时候，用测试账号
        //test{}
        {

         openid = AppService.getInstance().config.testUser;
         access_token = AppService.getInstance().config.testUser;//test1（保）  test2（龙）  test3(波)
        }
        var url:string = AppService.getInstance().config.wxgetUserUrl + "?openid="+openid+"&access_token="+access_token;
        var loader:egret.URLLoader = new egret.URLLoader();
        // 设置返回数据格式
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetError,this);
        var request:egret.URLRequest = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.GET;
        loader.load(request);
    }
    private onGetError(event:egret.IOErrorEvent):void {
        this.serverReady = false;
        var loader:egret.URLLoader = <egret.URLLoader> event.target;
        loader.removeEventListener(egret.Event.COMPLETE,this.onGetComplete,this);
        loader.removeEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetError,this);
        this.reTryStartLogin();
    }
    private onGetComplete(event:egret.Event):void {
        this.serverReady = true;
        var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
     
        // 2.采用json解析器方法
        var txt = data.toString();
        var obj = JSON.parse(txt);
        //然后
        if(obj.jsonObj){
            LoginService.getInstance().startLogin(null,obj.jsonObj.authKey);
            loader.removeEventListener(egret.Event.COMPLETE,this.onGetComplete,this);
            loader.removeEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetError,this);
        }
        else{
            ToolUtil.createAlert("提示","登陆超过每天最大次数，请明天再试",400,200);
        }
    }

    public get appWidth():number{
        return this.stage.stageWidth;
    }
    public get appHeight():number{
         return this.stage.stageHeight;
    }
}

declare function GetQueryString(name);//可以放在 ts 文件内（建议在顶部或者底
