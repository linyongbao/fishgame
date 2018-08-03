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
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        return _super.call(this) || this;
    }
    Alert.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Object.defineProperty(Alert.prototype, "content", {
        set: function (value) {
            this._content = value;
            this.commitProperties();
        },
        enumerable: true,
        configurable: true
    });
    Alert.prototype.commitProperties = function () {
        _super.prototype.commitProperties.call(this);
        if (this.contentDisplay)
            this.contentDisplay.text = this._content;
        if (this.okLabel && this.closeButton)
            this.closeButton.label = this.okLabel;
    };
    Alert.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Alert.prototype.onCloseButtonClick = function (event) {
        _super.prototype.onCloseButtonClick.call(this, event);
        if (this.okFun) {
            this.okFun();
        }
    };
    return Alert;
}(TitleWindow));
__reflect(Alert.prototype, "Alert");
//# sourceMappingURL=Alert.js.map