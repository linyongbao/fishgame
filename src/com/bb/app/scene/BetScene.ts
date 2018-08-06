
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

    private _winTypeRadioGroup: eui.RadioButtonGroup;
    private _winType1: eui.RadioButton;
    private _winType2: eui.RadioButton;
    private _winType3: eui.RadioButton;
    private _winTypeGroup: HLayout;


    private _betButton: eui.Button;
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


        this._winTypeGroup = new HLayout();
        this._winTypeGroup.y = 100;
        this.addChild(this._winTypeGroup);

        this._winTypeRadioGroup = new eui.RadioButtonGroup();
        this._winType1 = new eui.RadioButton();
        this._winType1.selected = true;
        this._winType1.label = "左赢";
        this._winType1.value = 0;
        this._winType1.group = this._winTypeRadioGroup;
        this._winTypeGroup.addChild(this._winType1);

        this._winType2 = new eui.RadioButton();
        this._winType2.selected = true;
        this._winType2.label = "平";
        this._winType2.value = 1;
        this._winType2.group = this._winTypeRadioGroup;
        this._winTypeGroup.addChild(this._winType2);

        this._winType3 = new eui.RadioButton();
        this._winType3.selected = true;
        this._winType3.label = "右赢";
        this._winType3.value = 2;
        this._winType3.group = this._winTypeRadioGroup;
        this._winTypeGroup.addChild(this._winType3);


        this._betButton = new eui.Button();
        this._betButton.addEventListener(egret.TouchEvent.TOUCH_END, this.betHandler, this)
        this._betButton.y = 200;
        this._betButton.label = "下注";
        this.addChild(this._betButton);

    }

    private betHandler(event: egret.TouchEvent) {

        var betValueType: number = this._betTypeRadioGroup.selectedValue;
        var winType: number = this._winTypeRadioGroup.selectedValue;

        BetService.getInstance().betReq(betValueType, winType);
    }

}