/**
 *
 * @author 
 *
 */
class BetServiceEvent extends egret.Event{
    public static  GET_CURRENT_BET_COUND_RSP:string = "GET_CURRENT_BET_COUND_RSP";
    public static CURRENT_BET_COUND_BRO:string = "CURRENT_BET_COUND_BRO";

    /** 下注响应事件*/
    public static  BET_RSP:string = "BET_RSP";

     /** 全局下注金额*/
    public static  BET_BRO:string = "BET_BRO";

    public static PLAY_START : string = "PLAY_START";

    public static PLAY_END : string = "PLAY_END";

    public constructor(type: string,bubbles: boolean = false,cancelable: boolean = false) {
        super(type,bubbles,cancelable,null);
    }
}
