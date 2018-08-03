class CommonEvent extends egret.Event{
	public data: Object;
    public static GIFT_SEND_SUCCESS: string = "GIFT_SEND_SUCCESS";//送礼成功返回

    public static GIFT_INIT_DATA_RES: string = "GIFT_INIT_DATA_RES"; //礼物初始数据返回

    public constructor(type: string,bubbles: boolean = false,cancelable: boolean = false) {
        super(type,bubbles,cancelable,null);
    }
}