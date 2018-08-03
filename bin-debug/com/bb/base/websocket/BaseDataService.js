var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *
 * @author
 *
 */
var BaseDataService = (function (_super) {
    __extends(BaseDataService, _super);
    function BaseDataService() {
        return _super.call(this) || this;
    }
    BaseDataService.prototype.recevieData = function (obj) {
    };
    BaseDataService.prototype.sendData = function (obj) {
        if (obj.serviceId > 0) {
            SocketDataServiceFactory.getInstance().sendData(obj.serviceId, obj);
        }
        else {
            throw new Error("obj must set serviceId");
        }
    };
    return BaseDataService;
}(egret.EventDispatcher));
__reflect(BaseDataService.prototype, "BaseDataService", ["ISocketDataService", "Object"]);
//# sourceMappingURL=BaseDataService.js.map