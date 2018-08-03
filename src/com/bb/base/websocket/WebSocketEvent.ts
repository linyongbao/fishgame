/**
 *
 * @author 
 *
 */
class WebSocketEvent extends egret.Event{
    public static  CONNECT_SUCCESS:string = "CONNECT_SUCCESS";
    public static  DISCONNECT:string = "DISCONNECT"

    public constructor(type: string,bubbles: boolean = false,cancelable: boolean = false) {
        super(type,bubbles,cancelable,null);
	}
}
