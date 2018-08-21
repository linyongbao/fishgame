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
    CmdUtil.BET_SERVICE_ID = 10000; //玩法服务
    CmdUtil.USER_SERVICE_ID = 10001; //用户服务
    CmdUtil.PLAY_SERVICE_ID = 10002; //
    /* cmd id */
    CmdUtil.BET_ACTION_REQ = 100; //下注请求
    CmdUtil.BET_ACTION_RSP = 101; //我下注返回
    CmdUtil.BET_ACTION_BRO = 102; //下注广播
    CmdUtil.BET_ROUND_INFO_REQ = 201; //请求当前详情
    CmdUtil.BET_ROUND_INFO_RSP = 202; //请求当前详情
    CmdUtil.BET_ROUND_INFO_BRO = 203; //当前下注详情广播
    CmdUtil.PLAY_GET_FISH = 303; //鱼上钩
    CmdUtil.PLAY_START_BRO = 301; //游戏开始
    CmdUtil.PLAY_END_BRO = 302; //游戏结束
    CmdUtil.GET_USER_INFO_REQ = 401; //请求用户信息
    CmdUtil.GET_USER_INFO_RSP = 402; //请求用户信息返回
    CmdUtil.UPDATE_USER_INFO_BRO = 403; //用户信息更新
    return CmdUtil;
}());
__reflect(CmdUtil.prototype, "CmdUtil");
//# sourceMappingURL=CmdUtil.js.map