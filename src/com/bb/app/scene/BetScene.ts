
/**
 * 
 * 下注界面
 */

class BetScene extends MyComponent {

    private _betTypeGroup: HLayout;

    private _betTypeRadioGroup: eui.RadioButtonGroup;
    private _betType1: eui.RadioButton;
    private _betType2: eui.RadioButton;
    private _betType3: eui.RadioButton;

    private _winType1: eui.Button;
    private _winType2: eui.Button;
    private _winType3: eui.Button;
    private _winTypeGroup: VLayout;

    private _titleLabel: eui.Label;
    private _timeLabel: eui.Label;
    private _betButton: eui.Button;
    private _cancelButton: eui.Button;
    public constructor() {
        super();

        this._betTypeGroup = new HLayout();
        this.addChild(this._betTypeGroup);

        this._betTypeRadioGroup = new eui.RadioButtonGroup();
        this._betType1 = new eui.RadioButton();
        this._betType1.selected = true;
        this._betType1.label = "10trx";
        this._betType1.value = "10-trx";
        this._betType1.group = this._betTypeRadioGroup;
        this._betTypeGroup.addChild(this._betType1);

        this._betType2 = new eui.RadioButton();
        this._betType2.label = "100trx";
        this._betType2.value = "100-trx";
        this._betType2.group = this._betTypeRadioGroup;
        this._betTypeGroup.addChild(this._betType2);

        this._betType3 = new eui.RadioButton();
        this._betType3.label = "1000trx";
        this._betType3.value = "1000-trx";
        this._betType3.group = this._betTypeRadioGroup;
        this._betTypeGroup.addChild(this._betType3);


        this._winTypeGroup = new VLayout();
        this._winTypeGroup.y = 100;
        this.addChild(this._winTypeGroup);


        this._winType1 = new eui.Button();
        this._winType1.addEventListener(egret.TouchEvent.TOUCH_END, this.betHandler, this)
        this._winType1.label = "左赢";
        this._winTypeGroup.addChild(this._winType1);

        this._winType2 = new eui.Button();
        this._winType2.addEventListener(egret.TouchEvent.TOUCH_END, this.betHandler, this)
        this._winType2.label = "平";
        this._winTypeGroup.addChild(this._winType2);

        this._winType3 = new eui.Button();
        this._winType3.addEventListener(egret.TouchEvent.TOUCH_END, this.betHandler, this)
        this._winType3.label = "右赢";
        this._winTypeGroup.addChild(this._winType3);



        this._cancelButton = new eui.Button();
        this._cancelButton.addEventListener(egret.TouchEvent.TOUCH_END, this.betCancelHandler, this)
        this._cancelButton.y = 400;
        this._cancelButton.label = "重置下注";
        this.addChild(this._cancelButton);

        this._titleLabel = new eui.Label();
        this._titleLabel.textColor = 0xff0000;
        this._titleLabel.x = 300;
        this._titleLabel.text = "当前阶段 : 下注";
        this.addChild(this._titleLabel);

        this._timeLabel = new eui.Label();
        this._timeLabel.textColor = 0xff0000;
        this._timeLabel.x = 300;
        this._timeLabel.y = 100;
        this._timeLabel.text = "";
        this.addChild(this._timeLabel);

        BetService.getInstance().addEventListener(BetServiceEvent.BET_RSP, this.betRspHandler, this);
        BetService.getInstance().addEventListener(BetServiceEvent.GET_CURRENT_BET_COUND_RSP, this.getBetRoundRspHandler, this);
        BetService.getInstance().addEventListener(BetServiceEvent.CURRENT_BET_COUND_BRO, this.currentBetRoundBroHandler, this);

    }
    private betRspHandler(event: BetServiceEvent): void {
        var data: any = event.data;
        var jsonData: any = data.jsonObj;
        if (data.code == 0) {
            this._winType1.label = "左赢:" + jsonData.betCount1;
            this._winType2.label = "平:" + jsonData.betCount2;
            this._winType3.label = "右赢:" + jsonData.betCount3;
        }
    }

    private currentBetRoundBroHandler(event: BetServiceEvent): void {
        var data: any = event.data;
        var jsonData: any = data.jsonObj;

        this.doCurrentBetRound(jsonData);

    }
    private getBetRoundRspHandler(event: BetServiceEvent): void {

        var data: any = event.data;
        var jsonData: any = data.jsonObj;
        var currentBetRound: any = jsonData.currentBetRound;
        this.doCurrentBetRound(currentBetRound);
    }
    private doCurrentBetRound(currentBetRound: any) {

        if (currentBetRound.state == 0) {
            this._titleLabel.text = "当前阶段 : 投注阶段，请投注";
            this._timeLabel.text = currentBetRound.betTimeLeft + "秒";
        }


    }
    private betReqData: BetReqData;
    private betHandler(event: egret.TouchEvent) {
        var betValueType: string = this._betTypeRadioGroup.selectedValue;
        var betCount: number = parseInt(betValueType.split("-")[0]);
        var moneyType: string = betValueType.split("-")[1];
        this.betReqData = new BetReqData();
        if (this._winType1 == event.currentTarget) {

            this.betReqData.betCount1 = this.betReqData.betCount1 + betCount;
        }
        else if (this._winType2 == event.currentTarget) {

            this.betReqData.betCount2 = this.betReqData.betCount2 + betCount;
        }
        else if (this._winType3 == event.currentTarget) {

            this.betReqData.betCount3 = this.betReqData.betCount3 + betCount;
        }
        this.betReqData.moneyType = moneyType;
        BetService.getInstance().betReq(this.betReqData);

    }


    private betCancelHandler(event: egret.TouchEvent) {


    }

}