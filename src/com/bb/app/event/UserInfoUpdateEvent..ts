
class UserInfoUpdateEvent extends egret.Event{
    public static  UPDATE_USER_INFO:string = "UPDATE_USER_INFO"
    
	public data:any;
    public constructor(type: string,bubbles: boolean = false,cancelable: boolean = false) {
        super(type,bubbles,cancelable,null);
    }
}
