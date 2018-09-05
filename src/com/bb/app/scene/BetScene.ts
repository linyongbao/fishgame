
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
        console.log(this._betAreaUI.width + "====1111");

        //下注面板
        var betPannel = AssetsUtil.createBitmapByName("bet_panel_jpg");
        this._betAreaUI.addChild(betPannel);

        console.log(betPannel.width + "====>>");

        console.log(this._betAreaUI.width + "====2222");

        //下注提示文字
        var recallTips:egret.TextField = new egret.TextField();
         recallTips.text = "请选择支持蓝猫或者红鼠";
         recallTips.x = 0;
         recallTips.y = 23;
         recallTips.size = 13;
         recallTips.width = 750;
         recallTips.height = 30;
         recallTips.textColor = 0xff0000;
         recallTips.fontFamily = "KaiTi";//ps提示说系统上这个字体丢失，有待测试
         recallTips.textAlign = egret.HorizontalAlign.CENTER;
         recallTips.verticalAlign = egret.VerticalAlign.MIDDLE;

         //撤回按钮
         var recallButton = AssetsUtil.createBitmapByName("recall_jpg");
         recallButton.x = (750 - 126) / 2;
         recallButton.y = 28;
         recallButton.height = 30;
         recallButton.width = 126;
        //  recallButton.visible = false;

         //左下注按钮
         var leftBetButton = AssetsUtil.createBitmapByName("left_bet_jpg");
         leftBetButton.x = (750 - 206 * 3 - 20 * 2) / 2;
         leftBetButton.y = 58;
         leftBetButton.height = 106;
         leftBetButton.width = 206;

         //中下注按钮
         var middleBetButton = AssetsUtil.createBitmapByName("middle_bet_jpg");
         middleBetButton.x = (750 - 206 * 3 - 20 * 2) / 2 + 206 + 20;
         middleBetButton.y = 58;
         middleBetButton.height = 106;
         middleBetButton.width = 206;

         //右下注按钮
         var rightBetButton = AssetsUtil.createBitmapByName("right_bet_jpg");
         rightBetButton.x = (750 - 206 * 3 - 20 * 2) / 2 + 206 * 2 + 20 * 2; 
         rightBetButton.y = 58;
         rightBetButton.height = 106;
         rightBetButton.width = 206;


         //10块的金币选择按钮，未选择之前
         var gold10Button = AssetsUtil.createBitmapByName("gold_10_jpg");
         gold10Button.x = (750 - 182 * 3 - 45 * 2) / 2; 
         gold10Button.y = 58 + 106 + 60;
         gold10Button.height = 56;
         gold10Button.width = 182;
         gold10Button.visible = false;

         //100块的金币选择按钮，未选择之前
         var gold100Button = AssetsUtil.createBitmapByName("gold_100_jpg");
         gold100Button.x = (750 - 182 * 3 - 45 * 2) / 2 + 182  + 45 ; 
         gold100Button.y = 58 + 106 + 60;
         gold100Button.height = 56;
         gold100Button.width = 182;
         gold100Button.visible = false;

         //1000块的金币选择按钮，未选择之前
         var gold1000Button = AssetsUtil.createBitmapByName("gold_1000_jpg");
         gold1000Button.x = (750 - 182 * 3 - 45 * 2) / 2 + 182 * 2 + 45 * 2; 
         gold1000Button.y = 58 + 106 + 60;
         gold1000Button.height = 56;
         gold1000Button.width = 182;
         gold1000Button.visible = false;

         //10块的金币选择按钮，选择之后
         var gold10DownButton = AssetsUtil.createBitmapByName("gold_10_down_jpg");
         gold10DownButton.x = (750 - 200 * 3 - 37 * 2) / 2; 
         gold10DownButton.y = 58 + 106 + 60 - 5;
         gold10DownButton.height = 70;
         gold10DownButton.width = 200;

         //100块的金币选择按钮，选择之后
         var gold100DownButton = AssetsUtil.createBitmapByName("gold_100_down_jpg");
         gold100DownButton.x = (750 - 200 * 3 - 37 * 2) / 2 + 200  + 37 ; 
         gold100DownButton.y = 58 + 106 + 60 - 5;
         gold100DownButton.height = 70;
         gold100DownButton.width = 200;
        //  gold100DownButton.visible = false;

         //1000块的金币选择按钮，选择之后
         var gold1000DownButton = AssetsUtil.createBitmapByName("gold_1000_down_jpg");
         gold1000DownButton.x = (750 - 200 * 3 - 37 * 2) / 2 + 200 * 2 + 37 * 2; 
         gold1000DownButton.y = 58 + 106 + 60 - 5;
         gold1000DownButton.height = 70;
         gold1000DownButton.width = 200;
        //  gold1000DownButton.visible = false;

        //  //右下注按钮
        //  var rightBetButton = AssetsUtil.createBitmapByName("right_bet_jpg");
        //  rightBetButton.x = (750 - 206 * 3 - 20 * 2) / 2 + 206 * 2 + 20 * 2; 
        //  rightBetButton.y = 58;
        //  rightBetButton.height = 106;
        //  rightBetButton.width = 206;

        //  //右下注按钮
        //  var rightBetButton = AssetsUtil.createBitmapByName("right_bet_jpg");
        //  rightBetButton.x = (750 - 206 * 3 - 20 * 2) / 2 + 206 * 2 + 20 * 2; 
        //  rightBetButton.y = 58;
        //  rightBetButton.height = 106;
        //  rightBetButton.width = 206;

        //  //右下注按钮
        //  var rightBetButton = AssetsUtil.createBitmapByName("right_bet_jpg");
        //  rightBetButton.x = (750 - 206 * 3 - 20 * 2) / 2 + 206 * 2 + 20 * 2; 
        //  rightBetButton.y = 58;
        //  rightBetButton.height = 106;
        //  rightBetButton.width = 206;


         this._betAreaUI.addChild(recallTips);
         this._betAreaUI.addChild(recallButton);
        this._betAreaUI.addChild(leftBetButton);
        this._betAreaUI.addChild(middleBetButton);
        this._betAreaUI.addChild(rightBetButton);
        this._betAreaUI.addChild(gold10Button);
        this._betAreaUI.addChild(gold100Button);
        this._betAreaUI.addChild(gold1000Button);
        this._betAreaUI.addChild(gold10DownButton);
        this._betAreaUI.addChild(gold100DownButton);
        this._betAreaUI.addChild(gold1000DownButton);

        

        
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
        // label.textColor = 0x00–ff00;
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