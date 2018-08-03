var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var BaseUser = (function () {
    function BaseUser() {
        this.gender = 0; //0男，1女
    }
    return BaseUser;
}());
__reflect(BaseUser.prototype, "BaseUser");
//# sourceMappingURL=BaseUser.js.map