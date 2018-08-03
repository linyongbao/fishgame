var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ToolUtil = (function () {
    function ToolUtil() {
    }
    /**
        *创建弹窗界面
         *
         */
    ToolUtil.createAlert = function (_title, _content, _width, _height) {
        if (_width === void 0) { _width = 300; }
        if (_height === void 0) { _height = 200; }
        var tw = new Alert();
        tw.title = _title;
        tw.content = _content;
        tw.width = _width;
        tw.height = _height;
        tw.show();
    };
    ToolUtil.createSureAlert = function (_title, _content, _okFun, _okLabel, _width, _height) {
        if (_width === void 0) { _width = 300; }
        if (_height === void 0) { _height = 200; }
        var tw = new Alert();
        tw.title = _title;
        tw.content = _content;
        tw.width = _width;
        tw.height = _height;
        tw.okFun = _okFun;
        tw.okLabel = _okLabel;
        tw.show();
    };
    /**
         * 创建文本
         *
         */
    ToolUtil.createTextFiled = function (text, size, width, height, textColor, bold) {
        if (bold === void 0) { bold = false; }
        var tx = new eui.Label();
        tx.size = size; //设置字号大小
        tx.width = width;
        tx.height = height;
        tx.textColor = textColor; //设置字体颜色
        tx.fontFamily = "宋体"; //设置字体样式
        tx.textAlign = egret.HorizontalAlign.LEFT; //水平右对齐，相对于 textField 控件自身的 width 与 height
        tx.verticalAlign = egret.VerticalAlign.TOP; //垂直上对齐
        // lab.strokeColor = 0x0000ff;   //描边颜色
        // lab.stroke = 0.2;               //描边宽度
        tx.text = text;
        tx.bold = bold;
        return tx;
    };
    ToolUtil.createLine = function (w, h, fillColor) {
        var line = new eui.Rect(w, h, fillColor);
        return line;
    };
    return ToolUtil;
}());
__reflect(ToolUtil.prototype, "ToolUtil");
//# sourceMappingURL=ToolUtil.js.map