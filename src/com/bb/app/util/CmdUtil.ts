/**
 *
 * @author 
 * 1个service对应很多cmd
 */
class CmdUtil {

    public static   SESSION_AUTHKEY = "sessionAuthkey";

  
	  /* service id */
    public static  BET_SERVICE_ID  = 10000;//玩法服务
    public static  USER_SERVICE_ID = 10001;//用户服务
    public static  PLAY_SERVICE_ID = 10002;//

    /* cmd id */


    public static  BET_ACTION_REQ = 100;//下注请求

    public static  BET_ACTION_RSP = 101;//我下注返回
    
    public static  BET_ACTION_BRO = 102;//下注广播
    
    
    public static  BET_ROUND_INFO_REQ = 201;//请求当前详情

    public static  BET_ROUND_INFO_RSP = 202;//请求当前详情
    

    public static  BET_ROUND_INFO_BRO = 203;//当前下注详情广播


    public static  PLAY_GET_FISH = 303;//鱼上钩
    public static  PLAY_START_BRO = 301;//游戏开始
    public static  PLAY_END_BRO = 302;//游戏结束

    public static  GET_USER_INFO_REQ = 401;//请求用户信息

    public static  GET_USER_INFO_RSP = 402;//请求用户信息返回

    public static  UPDATE_USER_INFO_BRO = 403;//用户信息更新
  
}

