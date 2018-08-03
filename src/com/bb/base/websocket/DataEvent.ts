/**
 *
 * @author 
 *
 */
class DataEvent extends egret.Event{
    public data: BaseREQData;
    public static DATA_RECEIVE: string = "DATA_RECEIVE";
    public constructor(type: string,bubbles: boolean = false,cancelable: boolean = false) {
        super(type,bubbles,cancelable,null);
    }
}
