/**
 *
 * @author 
 *
 */
class SocketDataServiceFactory extends egret.EventDispatcher{
	public constructor() {
    	    
    	  super();
	}
    private static  instance:SocketDataServiceFactory;
    public static  getInstance():SocketDataServiceFactory{
        if(!this.instance)
             this.instance = new SocketDataServiceFactory();
        return this.instance;
	 }
    private  queueSend:Array<Object> = [];
    private  loginInfo:Object = {};
    public  startLogin(user:Object):void{

        this.loginInfo = user;
        var str: string = JSON.stringify(this.loginInfo);
        str = window.btoa(str);
        this.connectSocket(str);
       
    }
    private socket;
    private services: Array<any> = new Array();
    private connectSocket(str:String){
        var callBackDataFun: any = this.callBackData;
      
        this.socket = io.connect(AppService.getInstance().config.appServer + '?cp='+str,{'forceNew':true,'reconnect':false,'reconnection': false});

        this.socket.on('connectResultEvent',function(data) {
            callBackDataFun('connectResultEvent',data);
        });
       
        this.socket.on('dataEvent',function(data) {
            callBackDataFun("dataEvent",data);
        });
        
        this.socket.on('disconnect',function(data) {
            callBackDataFun("disconnect");
        });
        
        this.socket.on('error',function(data) {
            callBackDataFun("error");
        });

        this.socket.on('close',function(data) {
            callBackDataFun("close");
        });

        this.socket.on('failed',function(data) {
            callBackDataFun("failed");
        });
        
  
    }
    private receiveData(event: String,dataObj: any = null) {
        
        var webSocketEvent: WebSocketEvent;
        if(event == "connectResultEvent") {

            webSocketEvent = new WebSocketEvent(WebSocketEvent.CONNECT_SUCCESS);
            webSocketEvent.data = dataObj;
            this.dispatchEvent(webSocketEvent);

            if(dataObj.code == 1) {
                this.isConnected = true;
                this.doSendQueue();
            }
        }
        else if(event == "disconnect") {
            SocketDataServiceFactory.getInstance().isConnected = false;
            webSocketEvent = new WebSocketEvent(WebSocketEvent.DISCONNECT);
            webSocketEvent.data = dataObj;
            this.dispatchEvent(webSocketEvent);
        }
        else if(event == "error") {

        }
        else if(event == "dataEvent") {

            for(var i = 0;i < this.services.length;i++) {
                var service: any = this.services[i];
                if(service.serviceId == dataObj.serviceId) {
                    var baseDataSend: BaseREQData = new BaseREQData();
                    baseDataSend.cmd = dataObj.cmd;
                    baseDataSend.code = dataObj.code;
                    baseDataSend.notice = dataObj.notice;
                    baseDataSend.jsonObj =  dataObj.jsonObj;
                    baseDataSend.fromUid = dataObj.fromUid;
                    baseDataSend.serviceId = service.serviceId;
                    service.service.recevieData(baseDataSend);
                }
            }
        }
    }
    public  isConnected:Boolean;
    private callBackData(event: String,dataObj: any = null){
        SocketDataServiceFactory.getInstance().receiveData(event,dataObj);
    }
    private  doSendQueue():void
	{
        while(this.queueSend.length > 0) {
            var send: any = this.queueSend.shift();
            this.sendData(send.serviceId,send.sendData);
        }
    }
    
    public sendData(serviceId: number,sendData: BaseREQData):void{

        if(this.isConnected) {
            this.sendToSocket(serviceId,sendData);
        }
		else
		{
            this.queueSend.push({ serviceId: serviceId,sendData: sendData });
        }
    }
    
    private sendToSocket(serviceId: number,param: any):void
	{
        var jsonObject :any = param;
        jsonObject.serviceId = serviceId;
        this.socket.emit('dataEvent',jsonObject); 
    }
    
    public  logout():void
	{

        
    }
    
    public createSerivce(serviceId: number): DataService
	{
        var service: DataService = new DataService(serviceId);
        this.services.push({ service: service,serviceId: serviceId });
        return service;
    }
   
}
