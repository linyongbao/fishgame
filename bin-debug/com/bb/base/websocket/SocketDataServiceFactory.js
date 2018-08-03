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
var SocketDataServiceFactory = (function (_super) {
    __extends(SocketDataServiceFactory, _super);
    function SocketDataServiceFactory() {
        var _this = _super.call(this) || this;
        _this.queueSend = [];
        _this.loginInfo = {};
        _this.services = new Array();
        return _this;
    }
    SocketDataServiceFactory.getInstance = function () {
        if (!this.instance)
            this.instance = new SocketDataServiceFactory();
        return this.instance;
    };
    SocketDataServiceFactory.prototype.startLogin = function (user) {
        this.loginInfo = user;
        var str = JSON.stringify(this.loginInfo);
        str = window.btoa(str);
        this.connectSocket(str);
    };
    SocketDataServiceFactory.prototype.connectSocket = function (str) {
        var callBackDataFun = this.callBackData;
        this.socket = io.connect(AppService.getInstance().config.appServer + '?cp=' + str, { 'forceNew': true, 'reconnect': false, 'reconnection': false });
        this.socket.on('connectResultEvent', function (data) {
            callBackDataFun('connectResultEvent', data);
        });
        this.socket.on('dataEvent', function (data) {
            callBackDataFun("dataEvent", data);
        });
        this.socket.on('disconnect', function (data) {
            callBackDataFun("disconnect");
        });
        this.socket.on('error', function (data) {
            callBackDataFun("error");
        });
        this.socket.on('close', function (data) {
            callBackDataFun("close");
        });
        this.socket.on('failed', function (data) {
            callBackDataFun("failed");
        });
    };
    SocketDataServiceFactory.prototype.receiveData = function (event, dataObj) {
        if (dataObj === void 0) { dataObj = null; }
        var webSocketEvent;
        if (event == "connectResultEvent") {
            webSocketEvent = new WebSocketEvent(WebSocketEvent.CONNECT_SUCCESS);
            webSocketEvent.data = dataObj;
            this.dispatchEvent(webSocketEvent);
            if (dataObj.code == 1) {
                this.isConnected = true;
                this.doSendQueue();
            }
        }
        else if (event == "disconnect") {
            SocketDataServiceFactory.getInstance().isConnected = false;
            webSocketEvent = new WebSocketEvent(WebSocketEvent.DISCONNECT);
            webSocketEvent.data = dataObj;
            this.dispatchEvent(webSocketEvent);
        }
        else if (event == "error") {
        }
        else if (event == "dataEvent") {
            for (var i = 0; i < this.services.length; i++) {
                var service = this.services[i];
                if (service.serviceId == dataObj.serviceId) {
                    var baseDataSend = new BaseREQData();
                    baseDataSend.cmd = dataObj.cmd;
                    baseDataSend.code = dataObj.code;
                    baseDataSend.notice = dataObj.notice;
                    baseDataSend.jsonObj = dataObj.jsonObj;
                    baseDataSend.fromUid = dataObj.fromUid;
                    baseDataSend.serviceId = service.serviceId;
                    service.service.recevieData(baseDataSend);
                }
            }
        }
    };
    SocketDataServiceFactory.prototype.callBackData = function (event, dataObj) {
        if (dataObj === void 0) { dataObj = null; }
        SocketDataServiceFactory.getInstance().receiveData(event, dataObj);
    };
    SocketDataServiceFactory.prototype.doSendQueue = function () {
        while (this.queueSend.length > 0) {
            var send = this.queueSend.shift();
            this.sendData(send.serviceId, send.sendData);
        }
    };
    SocketDataServiceFactory.prototype.sendData = function (serviceId, sendData) {
        if (this.isConnected) {
            this.sendToSocket(serviceId, sendData);
        }
        else {
            this.queueSend.push({ serviceId: serviceId, sendData: sendData });
        }
    };
    SocketDataServiceFactory.prototype.sendToSocket = function (serviceId, param) {
        var jsonObject = param;
        jsonObject.serviceId = serviceId;
        this.socket.emit('dataEvent', jsonObject);
    };
    SocketDataServiceFactory.prototype.logout = function () {
    };
    SocketDataServiceFactory.prototype.createSerivce = function (serviceId) {
        var service = new DataService(serviceId);
        this.services.push({ service: service, serviceId: serviceId });
        return service;
    };
    return SocketDataServiceFactory;
}(egret.EventDispatcher));
__reflect(SocketDataServiceFactory.prototype, "SocketDataServiceFactory");
//# sourceMappingURL=SocketDataServiceFactory.js.map