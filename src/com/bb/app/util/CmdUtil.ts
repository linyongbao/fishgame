/**
 *
 * @author 
 * 1个service对应很多cmd
 */
class CmdUtil {


    /* service id */
    public static BET_SERVICE_ID = 10000;//下注服务
    public static USER_SERVICE_ID = 10001;//用户服务
    public static PLAYING_SERVICE_ID = 10001;//正在玩服务

    /* cmd id */

    public static BET_REQ = 100;//下注请求

    public static BET_RES = 101;//下注返回

    public static BET_DETAIL_REQ = 102;//请求当前下注情况

    public static BET_DETAIL_BRO = 103;//当前下注情况广播

    public static PLAY_PRE_TIME_BRO = 104;//开始倒计时

    public static PLAY_NOW_BRO = 105;//游戏开始

    public static GET_USER_DATA_REQ = 106;//请求用户信息

    public static GET_USER_DATA_RES = 107;//请求用户信息返回

    public static UPDATE_USER_DATA_BRO = 108;//用户信息更新

  
}

