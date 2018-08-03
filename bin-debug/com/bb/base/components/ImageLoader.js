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
var ImageLoader = (function (_super) {
    __extends(ImageLoader, _super);
    function ImageLoader() {
        return _super.call(this) || this;
    }
    ImageLoader.prototype.loadCompleteHandler = function (event) {
        var loader = event.target;
        var tx = loader.data;
        var bmp = new egret.Bitmap(tx);
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
    };
    ImageLoader.prototype.setSize = function (w, h) {
        this.sizePoint = new egret.Point(w, h);
    };
    ImageLoader.prototype.ioerrorHandler = function (event) {
    };
    Object.defineProperty(ImageLoader.prototype, "source", {
        set: function (value) {
            this.url = value;
        },
        enumerable: true,
        configurable: true
    });
    ImageLoader.prototype.load = function (url) {
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
    };
    ImageLoader.prototype.start = function () {
        if (this.url)
            this.load(this.url);
    };
    Object.defineProperty(ImageLoader.prototype, "contentWidth", {
        get: function () {
            if (this.bitmap)
                return this.bitmap.width;
            else
                return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageLoader.prototype, "contentHeight", {
        get: function () {
            if (this.bitmap)
                return this.bitmap.height;
            else
                return 0;
        },
        enumerable: true,
        configurable: true
    });
    ImageLoader.prototype.depose = function (gc) {
        if (gc === void 0) { gc = false; }
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
    };
    ImageLoader.prototype.unloadAndStop = function () {
        this.depose();
    };
    ImageLoader.getCacheLoader = function (url) {
        var loader = this.loaderCaches[url];
        if (!loader) {
            loader = new ImageLoader();
            loader.addEventListener(egret.Event.COMPLETE, this.completeHandler2, this);
            loader.load(url);
        }
        return loader;
    };
    ImageLoader.completeHandler2 = function (event) {
        this.loaderCaches[event.currentTarget.url] = event.currentTarget;
    };
    ImageLoader.loaderCaches = {};
    return ImageLoader;
}(eui.Component));
__reflect(ImageLoader.prototype, "ImageLoader");
//# sourceMappingURL=ImageLoader.js.map