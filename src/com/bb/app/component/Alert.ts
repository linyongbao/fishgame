class Alert extends TitleWindow {
	public contentDisplay: eui.Label;
	public okFun: Function;
	public okLabel: string;
	public constructor() {
		super();
	}
	protected childrenCreated(): void {
		super.childrenCreated();

	}
    private _content: string;
	public set content(value: string) {

		this._content = value;
		this.commitProperties();
	}
    protected commitProperties(): void {
		super.commitProperties();
		if (this.contentDisplay)
			this.contentDisplay.text = this._content;

		if (this.okLabel && this.closeButton)
			this.closeButton.label = this.okLabel;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected onCloseButtonClick(event: egret.TouchEvent): void {
		
		super.onCloseButtonClick(event);
		if (this.okFun) {
			this.okFun();
		}
	}

}