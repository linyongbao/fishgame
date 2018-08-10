
/**
 * 
 * 开始钓鱼界面
 */

class StartingPlayScene extends MyComponent{


    private _titleLabel : eui.Label;
    private _timeLabel : eui.Label;

    public constructor() {
        super();

        this._titleLabel = new eui.Label();
        this._titleLabel.textColor = 0xff0000;
        this._titleLabel.x = 300;
        this._titleLabel.text = "当前阶段 : 钓鱼中";
        this.addChild(this._titleLabel);

        this._timeLabel = new eui.Label();
        this._timeLabel.textColor = 0xff0000;
        this._timeLabel.x = 300;
        this._timeLabel.y= 100;
        this._timeLabel.text = "";
        this.addChild(this._timeLabel);

        BetService.getInstance().addEventListener(BetServiceEvent.CURRENT_BET_COUND_BRO,this.currentBetRoundBroHandler,this);

    }
   
    private currentBetRoundBroHandler(event : BetServiceEvent):void{
        var data: any = event.data;
        var jsonData:any = data.jsonObj;
        this.doCurrentBetRound(jsonData);
    }
    private getBetRoundRspHandler(event : BetServiceEvent):void{

        var data: any = event.data;
        var jsonData:any = data.jsonObj;
        var currentBetRound :any = jsonData.currentBetRound;
        this.doCurrentBetRound(currentBetRound);
    }
    private doCurrentBetRound(currentBetRound : any){

     
        if(currentBetRound.state == 1)
        {
            this._titleLabel.text = "当前阶段 : 钓鱼中";
            this._timeLabel.text = currentBetRound.gameTimeLeft + "秒";
        }
       
    }


}