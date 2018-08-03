var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var BaseREQData = (function () {
    function BaseREQData(serviceId) {
        if (serviceId === void 0) { serviceId = 0; }
        this.serviceId = 0;
        this.serviceId = serviceId;
    }
    return BaseREQData;
}());
__reflect(BaseREQData.prototype, "BaseREQData");
//# sourceMappingURL=BaseREQData.js.map