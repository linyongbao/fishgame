/**
 *
 * @author 
 *
 */
class LoginService extends egret.EventDispatcher{
	public constructor() {
    	super();
        this.addListeners();
	}
    private static instance: LoginService;
    public static getInstance(): LoginService {
        if(!this.instance)
            this.instance = new LoginService();
        return this.instance;
    }
  
    public startLogin(authkey:String){
        var obj =  {};
        obj[CmdUtil.SESSION_AUTHKEY] = authkey;
        SocketDataServiceFactory.getInstance().startLogin(obj); 
    }
    
    public  logout():void{

        SocketDataServiceFactory.getInstance().logout();
        this.dispatchEvent(new LoginServiceEvent(LoginServiceEvent.LOGIN_OUT));
    }

    private  addListeners():void
	{
        SocketDataServiceFactory.getInstance().addEventListener(WebSocketEvent.CONNECT_SUCCESS,this.connectSuccessHandler,this);
        SocketDataServiceFactory.getInstance().addEventListener(WebSocketEvent.DISCONNECT,this.disConnectHandler,this);
       
    }
    
    protected  connectSuccessHandler(event:WebSocketEvent):void
	{
         this.loginResult(event.data);
    }	
    
    protected  disConnectHandler(event:Event):void
	{   
        this.isLogined = false;
		this.dispatchEvent(new LoginServiceEvent(LoginServiceEvent.LOGIN_FAIL));
    }
    public isLogined:boolean  = false;
    private  loginResult(obj:any):void
	{
        var user: Object = obj.jsonObj;
        var code: number = obj.code;
        var notice: String = obj.notice;
        if(user && code == 1) {
            this.isLogined = true;
            this.doUserObject(user);
            this.dispatchEvent(new LoginServiceEvent(LoginServiceEvent.LOGIN_SUCCESS));
        }
       
        else if(code == 6) {//重复登陆,个人逼退
             this.isLogined = false;
            this.dispatchEvent(new LoginServiceEvent(LoginServiceEvent.SAME_LOGIN));
        }
    
        else {
            this.isLogined = false;
            this.dispatchEvent(new LoginServiceEvent(LoginServiceEvent.LOGIN_FAIL));
        }
        
        if(notice) {//登陆时候，收到的通知信息
            var tw:Alert = new Alert();
            tw.title = "提示";
            tw.content = notice.toString();
            tw.offsetX = 100;
            tw.offsetY = -50;
            tw.width = 300;
            tw.height = 200;
            tw.show();
        } 

    }
    public currentUser:BaseUser = new BaseUser();
    private  doUserObject(obj:any):void{
        this.currentUser.account = obj.account;
        this.currentUser.nickName = obj.nick; 
        this.currentUser.gender = obj.sex;
        this.currentUser.logo = obj.logo;

    }
}
