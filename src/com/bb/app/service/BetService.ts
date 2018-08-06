/**
 * 下注服务
 * @author 
 *
 */
class BetService extends egret.EventDispatcher {

    private dataService_bet: DataService;
	public constructor() {
        super();
        this.dataService_bet = SocketDataServiceFactory.getInstance().createSerivce(CmdUtil.BET_SERVICE_ID);//创建服务
        this.dataService_bet.addEventListener(DataEvent.DATA_RECEIVE, this.reveDataHandler, this);//监听服务回调的数据
        
	}
    private static instance: BetService;
    public static getInstance(): BetService {
        if(!this.instance)
            this.instance = new BetService();
        return this.instance;
    }

     private reveDataHandler(event: DataEvent) {
        var reqData: BaseREQData = event.data;
      
        if (reqData.serviceId == CmdUtil.BET_SERVICE_ID) //数据包来自礼物服务的
        {
            switch (reqData.cmd) {
                case CmdUtil.BET_RES:
                    this.betRsp(reqData);

                    break;
                
            }
        }
    }

    public betRsp(data:any){
 
      
    }
    public betReq(betType,winType){
        
        var reqData: BaseREQData = new BaseREQData();
        reqData.cmd = CmdUtil.BET_REQ;//
        reqData.jsonObj = {betType:betType,winType:winType};//参数
        this.dataService_bet.sendData(reqData);
      
    }
   
}

