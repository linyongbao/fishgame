
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

        //放鱼的地方
        // this._baseUI = new MyComponent();
    
        // this.addChild(this._baseUI);

        //放下注面板的地方
        this._betAreaUI = new MyComponent();
    
        this.addChild(this._betAreaUI);

        //下注面板
        var betPannel = AssetsUtil.createBitmapByName("bet_panel_jpg");
        this._betAreaUI.addChild(betPannel);

        //下注提示文字
        var recallTips:eui.Label = new eui.Label;
         recallTips.text = "请选择支持蓝猫或者红鼠";
         recallTips.x = 50;
         recallTips.y = 50;
         recallTips.width = this._betAreaUI.width;
         recallTips.height = 30;
         recallTips.textColor = 0xff0000;
        //  recallTips.fontFamily = "KaiTi";//ps提示说系统上这个字体丢失，有待测试
        //  recallTips.textAlign = egret.HorizontalAlign.CENTER;
        //  recallTips.verticalAlign = egret.VerticalAlign.MIDDLE;

         //撤回按钮
        //  var recallButton = AssetsUtil.createBitmapByName("recall_jpg");
        //  recallButton.x = (this._betAreaUI.width - 126) / 2;
        //  recallButton.x = 1;
        //  recallButton.y = 0;
        //  recallButton.height = 30;
         

         this._betAreaUI.addChild(recallTips);
        //  this._betAreaUI.addChild(recallButton);


        var myGroup = new eui.Group();
        myGroup.x = 0;
        myGroup.y = 30;
        myGroup.width = 500;
        myGroup.height = 300;

        
        // this._betAreaUI.addChild(betPannel);
        // var leftButton = AssetsUtil.createBitmapByName("left_bet_jpg");
        // this._betAreaUI.addChild(leftButton);
        // var middleButton = AssetsUtil.createBitmapByName("middle_bet_jpg");
        // this._betAreaUI.addChild(middleButton);
        // var rightButton = AssetsUtil.createBitmapByName("right_bet_jpg");
        // this._betAreaUI.addChild(rightButton);

        // this._leftDog = new LeftDogBeting();
        // this._leftDog.width = 200;
        
        // this._rightDog = new RightDogBeting();
        // this._rightDog.width = 200;

        // this._baseUI .addChild(this._leftDog);
        // this._baseUI .addChild(this._rightDog);

        // var label:eui.Label = new eui.Label();
        // label.text = "正在下注";
        // label.textColor = 0x00ff00;
        // label.x  = 100;
        // label.y = 20;
        // this._baseUI.addChild(label);

      
        BetService.getInstance().addEventListener(BetServiceEvent.BET_RSP, this.betRspHandler, this);
        BetService.getInstance().addEventListener(BetServiceEvent.GET_CURRENT_BET_COUND_RSP, this.getBetRoundRspHandler, this);
        BetService.getInstance().addEventListener(BetServiceEvent.CURRENT_BET_COUND_BRO, this.currentBetRoundBroHandler, this);

    }

   public reSize(w:number,h:number){

        // this._baseUI .width = w;
        // this._baseUI .height = h;

        this._betAreaUI .width = w;
        this._betAreaUI .height = 323;

        // this._betAreaUI.graphics.clear();
        // this._betAreaUI.graphics.beginFill(0xECBF02,1);
        // this._betAreaUI.graphics.drawRect(0,0,w,this._betAreaUI .height );
        // this._betAreaUI.graphics.endFill();
        this._betAreaUI.y = h  - this._betAreaUI .height;


        // this._leftDog.x =  50 ;
        // this._rightDog.x = (this._baseUI.width - this._rightDog.width)  - 50;

        // this._leftDog.y = 150;
        // this._rightDog.y = 150;
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