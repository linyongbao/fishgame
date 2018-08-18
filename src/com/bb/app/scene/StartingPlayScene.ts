
/**
 * 
 * 开始钓鱼界面
 */

class StartingPlayScene extends MyComponent{

    private _baseUI: MyComponent;
    private _leftDog: LeftDogPlaying;
    private _rightDog: RightDogPlaying;
    public constructor() {
        super();
        this._baseUI = new MyComponent();
       
        this.addChild(this._baseUI);

        

        this._leftDog = new LeftDogPlaying();
        this._leftDog.width = 200;
        
        this._rightDog = new RightDogPlaying();
        this._rightDog.width = 200;

        this._baseUI .addChild(this._leftDog);
        this._baseUI .addChild(this._rightDog);


        var label:eui.Label = new eui.Label();
        label.text = "正在钓鱼";
        label.textColor = 0x00ff00;
        label.x  = 100;
        label.y = 20;
        this._baseUI.addChild(label);
        
        BetService.getInstance().addEventListener(BetServiceEvent.CURRENT_BET_COUND_BRO,this.currentBetRoundBroHandler,this);

    }

    public reSize(w:number,h:number){

        this._baseUI.width = w;
        this._baseUI.height = h;

        this._leftDog.x =  50 ;
        this._rightDog.x = (this._baseUI.width - this._rightDog.width)  - 50;

        this._leftDog.y = 150;
        this._rightDog.y = 150;
    }

    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void{

        super.updateDisplayList(unscaledWidth,unscaledHeight);
        this.reSize(unscaledWidth,unscaledHeight);
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
           
        }
       
    }


}