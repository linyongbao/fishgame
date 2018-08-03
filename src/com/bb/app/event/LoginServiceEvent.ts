/**
 *
 * @author 
 *
 */
class LoginServiceEvent extends egret.Event{
    public static  LOGIN_OUT:string = "loginOut";
    
    public static  SAME_LOGIN:string = "sameLogin";

    public static  LOGIN_SUCCESS:string = "loginSuccess";

    public static  LOGIN_FAIL:string = "loginFail";
    
    public constructor(type: string,bubbles: boolean = false,cancelable: boolean = false) {
        super(type,bubbles,cancelable,null);
    }
}
