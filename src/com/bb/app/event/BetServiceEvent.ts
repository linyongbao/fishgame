/**
 *
 * @author 
 *
 */
class BetServiceEvent extends egret.Event{
    public static  GET_CURRENT_BET_COUND_RSP:string = "GET_CURRENT_BET_COUND_RSP";
    public static CURRENT_BET_COUND_BRO:string = "CURRENT_BET_COUND_BRO";
    public static  BET_RSP:string = "BET_RSP";
    public static PLAY_START : string = "PLAY_START";
    public static PLAY_END : string = "PLAY_END";
    public constructor(type: string,bubbles: boolean = false,cancelable: boolean = false) {
        super(type,bubbles,cancelable,null);
    }
}
