
/**
 * 
 * 下注界面
 */

class BetScene extends MyComponent {

    private _baseUI: MyComponent;
    private _betAreaUI: MyComponent;
    private _leftDog: LeftDogBeting;
    private _rightDog: RightDogBeting;
    public constructor() {
        super();

        this._baseUI = new MyComponent();
    
        this.addChild(this._baseUI);

        this._betAreaUI = new MyComponent();
    
        this.addChild(this._betAreaUI);

        this._leftDog = new LeftDogBeting();
        this._leftDog.width = 200;
        
        this._rightDog = new RightDogBeting();
        this._rightDog.width = 200;

        this._baseUI .addChild(this._leftDog);
        this._baseUI .addChild(this._rightDog);

        var label:eui.Label = new eui.Label();
        label.text = "正在下注";
        label.textColor = 0x00ff00;
        label.x  = 100;
        label.y = 20;
        this._baseUI.addChild(label);

      
        BetService.getInstance().addEventListener(BetServiceEvent.BET_RSP, this.betRspHandler, this);
        BetService.getInstance().addEventListener(BetServiceEvent.GET_CURRENT_BET_COUND_RSP, this.getBetRoundRspHandler, this);
        BetService.getInstance().addEventListener(BetServiceEvent.CURRENT_BET_COUND_BRO, this.currentBetRoundBroHandler, this);

    }

   public reSize(w:number,h:number){

        this._baseUI .width = w;
        this._baseUI .height = h;

        this._betAreaUI .width = w;
        this._betAreaUI .height = 300;

        this._betAreaUI.graphics.clear();
        this._betAreaUI.graphics.beginFill(0xECBF02,1);
        this._betAreaUI.graphics.drawRect(0,0,w,this._betAreaUI .height );
        this._betAreaUI.graphics.endFill();
        this._betAreaUI.y = h  - this._betAreaUI .height;


        this._leftDog.x =  50 ;
        this._rightDog.x = (this._baseUI.width - this._rightDog.width)  - 50;

        this._leftDog.y = 150;
        this._rightDog.y = 150;
    }

    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void{

        super.updateDisplayList(unscaledWidth,unscaledHeight);
        this.reSize(unscaledWidth,unscaledHeight);
    }
    private betRspHandler(event: BetServiceEvent): void {
        var data: any = event.data;
        var jsonData: any = data.jsonObj;
        if (data.code == 0) {
           
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
        this.doCurrentBetRound(jsonData);
    }
    private doCurrentBetRound(data: any) {

        var currentBetRound : any = data;
        if (currentBetRound.state == 0) {
            var betTimeTotal = currentBetRound.betTimeTotal;
            var betTimeLeft = currentBetRound.betTimeLeft;
        }


    }
    private betReqData: BetReqData;

    private betHandler(event: egret.TouchEvent) {
        

    }


    private betCancelHandler(event: egret.TouchEvent) {


    }

}