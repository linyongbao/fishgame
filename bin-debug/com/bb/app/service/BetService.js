var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 下注服务
 * @author
 *
 */
var BetService = (function (_super) {
    __extends(BetService, _super);
    function BetService() {
        var _this = _super.call(this) || this;
        _this.dataService_bet = SocketDataServiceFactory.getInstance().createSerivce(CmdUtil.BET_SERVICE_ID); //创建服务
        _this.dataService_bet.addEventListener(DataEvent.DATA_RECEIVE, _this.reveDataHandler, _this); //监听服务回调的数据
        return _this;
    }
    BetService.getInstance = function () {
        if (!this.instance)
            this.instance = new BetService();
        return this.instance;
    };
    BetService.prototype.reveDataHandler = function (event) {
        var reqData = event.data;
        if (reqData.serviceId == CmdUtil.BET_SERVICE_ID) {
            switch (reqData.cmd) {
                case CmdUtil.BET_RES:
                    this.betRsp(reqData);
                    break;
                case CmdUtil.BET_ROUND_RSP:
                    this.getCurrentBetRoundRsp(reqData);
                    break;
                case CmdUtil.BET_ROUND_BRO:
                    this.getCurrentBetRoundRsp(reqData);
                    break;
            }
        }
    };
    BetService.prototype.betRsp = function (data) {
    };
    BetService.prototype.betReq = function (betType, winType) {
        var reqData = new BaseREQData();
        reqData.cmd = CmdUtil.BET_REQ; //
        reqData.jsonObj = { betType: betType, winType: winType }; //参数
        this.dataService_bet.sendData(reqData);
    };
    BetService.prototype.getCurrentBetRoundReq = function () {
        var reqData = new BaseREQData();
        reqData.cmd = CmdUtil.BET_ROUND_REQ; //
        reqData.jsonObj = {}; //参数
        this.dataService_bet.sendData(reqData);
    };
    BetService.prototype.getCurrentBetRoundRsp = function (data) {
        var event = new BetServiceEvent(BetServiceEvent.CURRENT_BET_COUND_DETAIL);
        event.data = data;
        this.dispatchEvent(event);
    };
    return BetService;
}(egret.EventDispatcher));
__reflect(BetService.prototype, "BetService");
//# sourceMappingURL=BetService.js.map