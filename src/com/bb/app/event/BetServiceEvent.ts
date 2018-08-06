/**
 *
 * @author 
 *
 */
class BetServiceEvent extends egret.Event{
    public static  CURRENT_BET_COUND_DETAIL:string = "CURRENT_BET_COUND_DETAIL";
    
    public constructor(type: string,bubbles: boolean = false,cancelable: boolean = false) {
        super(type,bubbles,cancelable,null);
    }
}
