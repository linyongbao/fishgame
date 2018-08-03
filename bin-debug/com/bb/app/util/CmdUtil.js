var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 * 1个service对应很多cmd
 */
var CmdUtil = (function () {
    function CmdUtil() {
    }
    CmdUtil.SESSION_AUTHKEY = "sessionAuthkey";
    /* service id */
    CmdUtil.BET_SERVICE_ID = 10000; //下注服务
    CmdUtil.USER_SERVICE_ID = 10001; //用户服务
    CmdUtil.PLAYING_SERVICE_ID = 10001; //正在玩服务
    /* cmd id */
    CmdUtil.BET_REQ = 100; //下注请求
    CmdUtil.BET_RES = 101; //下注返回
    CmdUtil.BET_DETAIL_REQ = 102; //请求当前下注情况
    CmdUtil.BET_DETAIL_BRO = 103; //当前下注情况广播
    CmdUtil.PLAY_PRE_TIME_BRO = 104; //开始倒计时
    CmdUtil.PLAY_NOW_BRO = 105; //游戏开始
    CmdUtil.GET_USER_DATA_REQ = 106; //请求用户信息
    CmdUtil.GET_USER_DATA_RES = 107; //请求用户信息返回
    CmdUtil.UPDATE_USER_DATA_BRO = 108; //用户信息更新
    return CmdUtil;
}());
__reflect(CmdUtil.prototype, "CmdUtil");
//# sourceMappingURL=CmdUtil.js.map