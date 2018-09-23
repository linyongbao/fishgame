
/**
 * 
 * 下注界面
 */

class BetScene extends MyComponent {

    private _baseUI: MyComponent;
    private _betAreaUI: MyComponent;
    private _leftDog: LeftDogBeting;
    private _rightDog: RightDogBeting;

    private recallTips:egret.Bitmap;
    private recallButton:egret.Bitmap;

    private leftBetButton:egret.Bitmap;
    private _leftGoldTxt:egret.TextField;
    private middleBetButton:egret.Bitmap;
    private _middleGoldTxt:egret.TextField;
    private rightBetButton:egret.Bitmap;
    private _rightGoldTxt:egret.TextField;

    private gold10Button:egret.Bitmap;
    private gold100Button:egret.Bitmap;
    private gold1000Button:egret.Bitmap;

    private gold10DownButton:egret.Bitmap;
    private gold100DownButton:egret.Bitmap;
    private gold1000DownButton:egret.Bitmap;

    private _currentChoosGold:number;

    private betPannel:egret.Bitmap;

    private betTips:egret.TextField;

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
        this.betPannel = AssetsUtil.createBitmapByName("bet_panel_jpg");
        this._betAreaUI.addChild(this.betPannel);

        console.log(this.betPannel.width + "====>>");

        console.log(this._betAreaUI.width + "====2222");

        //下注提示文字
         this.betTips = new egret.TextField();
         this.betTips.text = "请选择支持蓝猫或者红鼠";
         this.betTips.x = 0;
         this.betTips.y = 23;
         this.betTips.size = 13;
         this.betTips.width = 750;
         this.betTips.height = 30;
         this.betTips.textColor = 0xff0000;
         this.betTips.fontFamily = "KaiTi";//ps提示说系统上这个字体丢失，有待测试
         this.betTips.textAlign = egret.HorizontalAlign.CENTER;
         this.betTips.verticalAlign = egret.VerticalAlign.MIDDLE;

         //撤回按钮
         this.recallButton = AssetsUtil.createBitmapByName("recall_jpg");
         this.recallButton.x = (750 - 126) / 2;
         this.recallButton.y = 28;
         this.recallButton.height = 30;
         this.recallButton.width = 126;
        //  this.recallButton.visible = false;

         //左下注按钮
         this.leftBetButton = AssetsUtil.createBitmapByName("left_bet_jpg");
         this.leftBetButton.x = (750 - 206 * 3 - 20 * 2) / 2;
         this.leftBetButton.y = 58;
         this.leftBetButton.height = 106;
         this.leftBetButton.width = 206;
         this.leftBetButton.touchEnabled = true;
         //左边自己下注金额
         this._leftGoldTxt = new egret.TextField();
         this._leftGoldTxt.text = "0";
         this._leftGoldTxt.x = this.leftBetButton.x + 206 - 100;
         this._leftGoldTxt.y = 58 + 80;
         this._leftGoldTxt.size = 13;
         this._leftGoldTxt.width = 100;
         this._leftGoldTxt.height = 26;
         this._leftGoldTxt.textColor = 0xff0000;
         this._leftGoldTxt.fontFamily = "KaiTi";//ps提示说系统上这个字体丢失，有待测试
         this._leftGoldTxt.textAlign = egret.HorizontalAlign.RIGHT;
         this._leftGoldTxt.verticalAlign = egret.VerticalAlign.MIDDLE;

         //中下注按钮
         this.middleBetButton = AssetsUtil.createBitmapByName("middle_bet_jpg");
         this.middleBetButton.x = (750 - 206 * 3 - 20 * 2) / 2 + 206 + 20;
         this.middleBetButton.y = 58;
         this.middleBetButton.height = 106;
         this.middleBetButton.width = 206;
         this.middleBetButton.touchEnabled = true;
         //中间自己下注金额
         this._middleGoldTxt = new egret.TextField();
         this._middleGoldTxt.text = "0";
         this._middleGoldTxt.x = this.middleBetButton.x + 206 - 100;
         this._middleGoldTxt.y = 58 + 80;
         this._middleGoldTxt.size = 13;
         this._middleGoldTxt.width = 100;
         this._middleGoldTxt.height = 26;
         this._middleGoldTxt.textColor = 0xff0000;
         this._middleGoldTxt.fontFamily = "KaiTi";//ps提示说系统上这个字体丢失，有待测试
         this._middleGoldTxt.textAlign = egret.HorizontalAlign.RIGHT;
         this._middleGoldTxt.verticalAlign = egret.VerticalAlign.MIDDLE;

         //右下注按钮
         this.rightBetButton = AssetsUtil.createBitmapByName("right_bet_jpg");
         this.rightBetButton.x = (750 - 206 * 3 - 20 * 2) / 2 + 206 * 2 + 20 * 2; 
         this.rightBetButton.y = 58;
         this.rightBetButton.height = 106;
         this.rightBetButton.width = 206;
         this.rightBetButton.touchEnabled = true;
         //右边自己下注金额
         this._rightGoldTxt = new egret.TextField();
         this._rightGoldTxt.text = "0";
         this._rightGoldTxt.x = this.rightBetButton.x + 206 - 100;
         this._rightGoldTxt.y = 58 + 80;
         this._rightGoldTxt.size = 13;
         this._rightGoldTxt.width = 100;
         this._rightGoldTxt.height = 26;
         this._rightGoldTxt.textColor = 0xff0000;
         this._rightGoldTxt.fontFamily = "KaiTi";//ps提示说系统上这个字体丢失，有待测试
         this._rightGoldTxt.textAlign = egret.HorizontalAlign.RIGHT;
         this._rightGoldTxt.verticalAlign = egret.VerticalAlign.MIDDLE;

         //10块的金币选择按钮，未选择之前
         this.gold10Button = AssetsUtil.createBitmapByName("gold_10_jpg");
         this.gold10Button.x = (750 - 182 * 3 - 45 * 2) / 2; 
         this.gold10Button.y = 58 + 106 + 60;
         this.gold10Button.height = 56;
         this.gold10Button.width = 182;
         this.gold10Button.visible = false;
         this.gold10Button.touchEnabled  = true;

         this._currentChoosGold = 10;//初始化默认选择10元

         //100块的金币选择按钮，未选择之前
         this.gold100Button = AssetsUtil.createBitmapByName("gold_100_jpg");
         this.gold100Button.x = (750 - 182 * 3 - 45 * 2) / 2 + 182  + 45 ; 
         this.gold100Button.y = 58 + 106 + 60;
         this.gold100Button.height = 56;
         this.gold100Button.width = 182;
         this.gold100Button.touchEnabled  = true;

         //1000块的金币选择按钮，未选择之前
         this.gold1000Button = AssetsUtil.createBitmapByName("gold_1000_jpg");
         this.gold1000Button.x = (750 - 182 * 3 - 45 * 2) / 2 + 182 * 2 + 45 * 2; 
         this.gold1000Button.y = 58 + 106 + 60;
         this.gold1000Button.height = 56;
         this.gold1000Button.width = 182;
         this.gold1000Button.touchEnabled  = true;

         //10块的金币选择按钮，选择之后
         this.gold10DownButton = AssetsUtil.createBitmapByName("gold_10_down_jpg");
         this.gold10DownButton.x = (750 - 200 * 3 - 37 * 2) / 2; 
         this.gold10DownButton.y = 58 + 106 + 60 - 5;
         this.gold10DownButton.height = 70;
         this.gold10DownButton.width = 200;

         //100块的金币选择按钮，选择之后
         this.gold100DownButton = AssetsUtil.createBitmapByName("gold_100_down_jpg");
         this.gold100DownButton.x = (750 - 200 * 3 - 37 * 2) / 2 + 200  + 37 ; 
         this.gold100DownButton.y = 58 + 106 + 60 - 5;
         this.gold100DownButton.height = 70;
         this.gold100DownButton.width = 200;
         this.gold100DownButton.visible = false;

         //1000块的金币选择按钮，选择之后
         this.gold1000DownButton = AssetsUtil.createBitmapByName("gold_1000_down_jpg");
         this.gold1000DownButton.x = (750 - 200 * 3 - 37 * 2) / 2 + 200 * 2 + 37 * 2; 
         this.gold1000DownButton.y = 58 + 106 + 60 - 5;
         this.gold1000DownButton.height = 70;
         this.gold1000DownButton.width = 200;
         this.gold1000DownButton.visible = false;


         this._betAreaUI.addChild(this.betTips);
         this._betAreaUI.addChild(this.recallButton);

        this._betAreaUI.addChild(this.leftBetButton);
        this._betAreaUI.addChild(this._leftGoldTxt);
        this._betAreaUI.addChild(this.middleBetButton);
        this._betAreaUI.addChild(this._middleGoldTxt);
        this._betAreaUI.addChild(this.rightBetButton);
        this._betAreaUI.addChild(this._rightGoldTxt);

        this._betAreaUI.addChild(this.gold10DownButton);
        this._betAreaUI.addChild(this.gold100DownButton);
        this._betAreaUI.addChild(this.gold1000DownButton);

        this._betAreaUI.addChild(this.gold10Button);
        this._betAreaUI.addChild(this.gold100Button);
        this._betAreaUI.addChild(this.gold1000Button);
        
        
        this._leftDog = new LeftDogBeting();
        this._leftDog.width = 200;
        
        this._rightDog = new RightDogBeting();
        this._rightDog.width = 200;

        // this._baseUI .addChild(this._leftDog);
        // this._baseUI .addChild(this._rightDog);

        // var label:eui.Label = new eui.Label();
        // label.text = "正在下注";
        // label.textColor = 0x00–ff00;
        // label.x  = 100;
        // label.y = 20;
        // this._baseUI.addChild(label);

        this.leftBetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doLeftBet, this);
        this.middleBetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doMiddleBet, this);
        this.rightBetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doRightBet, this);

        this.gold10Button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doChoose10, this);
        this.gold100Button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doChoose100, this);
        this.gold1000Button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doChoose1000, this);
      
        BetService.getInstance().addEventListener(BetServiceEvent.BET_RSP, this.betRspHandler, this);
        BetService.getInstance().addEventListener(BetServiceEvent.BET_BRO, this.betBroadcastHandler, this);
        BetService.getInstance().addEventListener(BetServiceEvent.GET_CURRENT_BET_COUND_RSP, this.getBetRoundRspHandler, this);
        BetService.getInstance().addEventListener(BetServiceEvent.CURRENT_BET_COUND_BRO, this.currentBetRoundBroHandler, this);

    }

    private hideAllGoldDownBtn():void{

        console.log("hideAllGoldDownBtn...");
        this.gold10Button.visible = true;
        this.gold100Button.visible = true;
        this.gold1000Button.visible = true;

        this.gold10DownButton.visible = false;
        this.gold100DownButton.visible = false;
        this.gold1000DownButton.visible = false;

    }

    private doChoose10():void{

        console.log("doChoose10...");
        this._currentChoosGold = 10;
        this.hideAllGoldDownBtn();
       this.gold10DownButton.visible = true;
       this.gold10Button.visible = false;

    }

    private doChoose100():void{

        console.log("doChoose100...");
         this._currentChoosGold = 100;
         this.hideAllGoldDownBtn();
         this.gold100DownButton.visible = true;
       this.gold100Button.visible = false;

    }

    private doChoose1000():void{

        console.log("doChoose1000...");
         this._currentChoosGold = 1000;
         this.hideAllGoldDownBtn();
         this.gold1000DownButton.visible = true;
        this.gold1000Button.visible = false;

    }

    private doLeftBet(evt:egret.TouchEvent):void{

        
        var betcount = this._currentChoosGold + "";
        console.log("doLeftBet..." + betcount);
        var params = {"moneyType":"trx", "betCount1":betcount};
        BetService.getInstance().betReq(params);

    }

    private doMiddleBet(evt:egret.TouchEvent):void{

        var betcount = this._currentChoosGold + "";
        console.log("doMiddleBet..." + betcount);
        var params = {"moneyType":"trx", "betCount2":betcount};
        BetService.getInstance().betReq(params);

    }

    private doRightBet(evt:egret.TouchEvent):void{

        var betcount = this._currentChoosGold + "";
        console.log("doRightBet..." + betcount);
        var params = {"moneyType":"trx", "betCount2":betcount};
        BetService.getInstance().betReq(params);

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

    /**
     * 下注回调处理
     */
    private betRspHandler(event: BetServiceEvent): void {
        var data: any = event.data;
        var jsonData: any = data.jsonObj;
        if (data.code == 0) {//下注成功
           
            this._leftGoldTxt.text = "" + data.betCount1;
            this._middleGoldTxt.text = "" + data.betCount2;
            this._rightGoldTxt.text = "" + data.betCount3;

        }else{
            //TODO 需要做提示弹窗
            console.log("betRspHandler fail, msg:" + data.notice);
        }
    }

    /**
     * 全局下注广播通知处理
     */
    private betBroadcastHandler(event: BetServiceEvent): void {
        var data: any = event.data;
        var jsonData: any = data.jsonObj;
        if (data.code == 0) {
           
            this._leftGoldTxt.text = "" + data.betCount1;
            this._middleGoldTxt.text = "" + data.betCount2;
            this._rightGoldTxt.text = "" + data.betCount3;

            //TODO 全局下注金额要改变

        }else{
            //TODO 需要做提示弹窗
            console.log("betBroadcastHandler fail, msg:" + data.notice);
        }
    }

    /**
     * 广播游戏情况
     */
    private currentBetRoundBroHandler(event: BetServiceEvent): void {
        var data: any = event.data;
        if(data.code == 0){//获取当局游戏情况成功
            this.doCurrentBetRound(data.jsonObj);
        }else{
              console.log("currentBetRoundBroHandler fail, msg:" + data.notice);
        }
    }

    /** 
     * 单播游戏情况 
     * */
    private getBetRoundRspHandler(event: BetServiceEvent): void {
        var data: any = event.data;
        if(data.code == 0){//获取当局游戏情况成功
            this.doCurrentBetRound(data.jsonObj);
        }else{
              console.log("getBetRoundRspHandler fail, msg:" + data.notice);
        }
    }

    //处理当前游戏情况
    private doCurrentBetRound(data: any) {

        if(data.currentBetRound.state == 0){//在下注阶段才处理
            var betTimeTotal = data.currentBetRound.betTimeTotal;
            var betTimeLeft = data.currentBetRound.betTimeLeft;
            //TODO 倒数计时

            var mybet = data.myBetStatic;
            this._leftGoldTxt.text = "" + mybet.betCount1;
            this._middleGoldTxt.text = "" + mybet.betCount2;
            this._rightGoldTxt.text = "" + mybet.betCount3;

            //TODO 全局下注显示

        }


    }

    private betReqData: BetReqData;

    private betHandler(event: egret.TouchEvent) {
        

    }


    private betCancelHandler(event: egret.TouchEvent) {


    }

}