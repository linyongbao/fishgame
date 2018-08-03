class ToolUtil {
	/**
        *创建弹窗界面 
         * 
         */
    public static createAlert(_title: string, _content: string, _width: number = 300, _height: number = 200): void {
        var tw = new Alert();
        tw.title = _title;
        tw.content = _content;
        tw.width = _width;
        tw.height = _height;
        tw.show();
    }

    public static createSureAlert(_title: string, _content: string, _okFun:Function,_okLabel:string,_width: number = 300, _height: number = 200): void {
        var tw = new Alert();
        tw.title = _title;
        tw.content = _content;
        tw.width = _width;
        tw.height = _height;
        tw.okFun = _okFun;
        tw.okLabel = _okLabel;
        tw.show();
    }

    

    /**
         * 创建文本
         * 
         */
    public static createTextFiled(text: string, size: number, width: number, height: number, textColor: number, bold:boolean = false): eui.Label {
        let tx: eui.Label = new eui.Label();
        tx.size = size;                //设置字号大小
        tx.width = width;
        tx.height = height;
        tx.textColor = textColor;     //设置字体颜色
        tx.fontFamily = "宋体";     //设置字体样式
        tx.textAlign = egret.HorizontalAlign.LEFT;  //水平右对齐，相对于 textField 控件自身的 width 与 height
        tx.verticalAlign = egret.VerticalAlign.TOP;  //垂直上对齐
        // lab.strokeColor = 0x0000ff;   //描边颜色
        // lab.stroke = 0.2;               //描边宽度
        tx.text = text;
        tx.bold = bold;
 
        return tx;
    }

    public static createLine(w: number, h: number,fillColor:number): eui.Rect {
		var line: eui.Rect = new eui.Rect(w,h,fillColor);
		return line;
	}
}