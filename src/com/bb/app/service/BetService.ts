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
        if (!this.instance)
            this.instance = new BetService();
        return this.instance;
    }

    private reveDataHandler(event: DataEvent) {
        var reqData: BaseREQData = event.data;
        var betServiceEvent: BetServiceEvent;
        if (reqData.serviceId == CmdUtil.BET_SERVICE_ID) //
        {
            switch (reqData.cmd) {
                case CmdUtil.BET_ACTION_RSP:
                    this.betRsp(reqData);

                case CmdUtil.BET_ACTION_BRO:
                    this.betBroadcast(reqData);
                    break;
                case CmdUtil.BET_ROUND_INFO_RSP:
                    this.getCurrentBetRoundRsp(reqData);

                    break;
                case CmdUtil.BET_ROUND_INFO_BRO:
                    this.currentBetRoundRro(reqData);

                    break;


            }
        }

        else if (reqData.serviceId == CmdUtil.PLAY_SERVICE_ID) //
        {

            switch (reqData.cmd) {

                case CmdUtil.PLAY_START_BRO:

                    betServiceEvent = new BetServiceEvent(BetServiceEvent.PLAY_START);
                    this.dispatchEvent(betServiceEvent);
                    break;
                case CmdUtil.PLAY_END_BRO:

                    betServiceEvent = new BetServiceEvent(BetServiceEvent.PLAY_END);
                    this.dispatchEvent(betServiceEvent);
                    break;

            }
        }

    }

    private betRsp(data: any) {
        var event: BetServiceEvent = new BetServiceEvent(BetServiceEvent.BET_RSP);
        event.data = data;
        this.dispatchEvent(event);
    }

    private betBroadcast(data: any) {
        var event: BetServiceEvent = new BetServiceEvent(BetServiceEvent.BET_BRO);
        event.data = data;
        this.dispatchEvent(event);
    }

    //下注请求方法
    public betReq(betData: any) {

        var reqData: BaseREQData = new BaseREQData();
        reqData.cmd = CmdUtil.BET_ACTION_REQ;//
        reqData.jsonObj = betData;//
        this.dataService_bet.sendData(reqData);

    }

    //获取当前此轮下注情况
    public getCurrentBetRoundReq() {

        var reqData: BaseREQData = new BaseREQData();
        reqData.cmd = CmdUtil.BET_ROUND_INFO_REQ;//
        reqData.jsonObj = {};//参数
        this.dataService_bet.sendData(reqData);

    }

    private getCurrentBetRoundRsp(data: any) {
        var event: BetServiceEvent = new BetServiceEvent(BetServiceEvent.GET_CURRENT_BET_COUND_RSP);
        event.data = data;
        this.dispatchEvent(event);
    }
    private currentBetRoundRro(data: any) {
        var event: BetServiceEvent = new BetServiceEvent(BetServiceEvent.CURRENT_BET_COUND_BRO);
        event.data = data;
        this.dispatchEvent(event);
    }


}

