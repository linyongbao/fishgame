class ImageLoader extends eui.Component {

    private _loader: egret.ImageLoader;
    public bitmap: egret.Bitmap;
    public constructor() {
        super();
    }
    private loadCompleteHandler(event: egret.Event): void {
        var loader: egret.URLLoader = <egret.URLLoader>event.target;
        var tx: egret.BitmapData = <egret.BitmapData>loader.data;
        var bmp: egret.Bitmap = new egret.Bitmap(tx);

        this.scaleY = this.scaleX = 1;

        if (this.bitmap && this.bitmap.texture)
            this.bitmap.texture.dispose();
        if (this.bitmap && this.bitmap.parent)
            this.bitmap.parent.removeChild(this.bitmap);
        this.bitmap = null;

        this.bitmap = bmp;
        this.bitmap.smoothing = true;
    

        if (this.width == 0)
            this.width = this.contentWidth;
        if (this.height == 0)
            this.height = this.contentHeight;

        if (this.sizePoint) {
            var scaleX = 1;
            var scaleY = 1;
            if (this.sizePoint) {
                scaleX = this.sizePoint.x / this.width;
                scaleY = this.sizePoint.y / this.height;

            }

            var scale = 1;
            if (scaleX > scaleY) {
                scale = scaleY;
            }
            else {
                scale = scaleX;
            }

            this.scaleY = this.scaleX = scale;
        }
        this.addChild(bmp);
        this.dispatchEvent(new egret.Event(egret.Event.COMPLETE));
    }
    private sizePoint;
    public setSize(w: number, h: number) {
        this.sizePoint = new egret.Point(w, h);
    }
    private ioerrorHandler(event: egret.IOErrorEvent): void {

    }
    public url: string;
    public set source(value: string) {
        this.url = value;
    }
    public load(url: string) {
        if (url) {
            this.url = url;
            if (!this._loader) {
                this._loader = new egret.ImageLoader();
                this._loader.crossOrigin = "anonymous";
                this._loader.addEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
                this._loader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.ioerrorHandler, this);
            }
            this._loader.load(url);
        }
    }
    public start() {
        if (this.url)
            this.load(this.url);
    }

    public get contentWidth(): number {
        if (this.bitmap)
            return this.bitmap.width;
        else
            return 0;
    }
    public get contentHeight(): number {
        if (this.bitmap)
            return this.bitmap.height;
        else
            return 0;
    }
    public depose(gc : boolean  = false) {
        if (this.bitmap && this.bitmap.texture)
            this.bitmap.texture.dispose();
        if (this.bitmap && this.bitmap.parent)
            this.bitmap.parent.removeChild(this.bitmap);
        if (this._loader) {
            this._loader.removeEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
            this._loader.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.ioerrorHandler, this);

        }
        this.bitmap = null;
        this._loader = null;
    }

    public unloadAndStop() {
        this.depose();
    }

    private static loaderCaches: any = {};
    public static getCacheLoader(url: string): ImageLoader {
        var loader: ImageLoader = this.loaderCaches[url];
        if (!loader) {
            loader = new ImageLoader();
            loader.addEventListener(egret.Event.COMPLETE, this.completeHandler2, this);
            loader.load(url);
        }
        return loader;
    }

    protected static completeHandler2(event: any): void {
        this.loaderCaches[event.currentTarget.url] = event.currentTarget;
    }


}