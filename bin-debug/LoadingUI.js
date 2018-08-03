//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this._loadingFlag = false;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this._loadingBg = new ImageLoader();
        this._loadingBg.addEventListener(egret.Event.COMPLETE, this.loadingBgHandler, this);
        this._loadingBg.load("/resource/assets/bg.jpg");
        this.addChild(this._loadingBg);
        this._labelUI = new eui.Component();
        this.addChild(this._labelUI);
        this._progressBg = new egret.Shape();
        this._progressBg.graphics.beginFill(0x38218b);
        this._progressBg.graphics.drawRoundRect(0, 0, 320, 10, 15, 15);
        this._progressBg.graphics.endFill();
        this._progressBg.x = -160;
        this._progressBg.y = 63;
        this._labelUI.addChild(this._progressBg);
        this._progressMask = new egret.Shape();
        this._progressMask.graphics.beginFill(0xffc85e);
        this._progressMask.graphics.drawRoundRect(0, 0, 320, 10, 15, 15);
        this._progressMask.graphics.endFill();
        this._progressMask.x = -160;
        this._progressMask.y = 63;
        this._progressMask.visible = false;
        this._labelUI.addChild(this._progressMask);
        this._progressLabel = new egret.TextField();
        this._labelUI.addChild(this._progressLabel);
        this._progressLabel.width = 480;
        this._progressLabel.height = 30;
        this._progressLabel.textColor = 0x7A6CFF;
        this._progressLabel.size = 14;
        this._progressLabel.textAlign = "left";
        this._progressLabel.x = 170;
        this._progressLabel.y = 60;
        this._tipsLabel = new egret.TextField();
        this._labelUI.addChild(this._tipsLabel);
        this._tipsLabel.width = 480;
        this._tipsLabel.height = 30;
        this._tipsLabel.textColor = 0xFFC85E;
        this._tipsLabel.size = 12;
        this._tipsLabel.textAlign = "center";
        this._tipsLabel.x = -240;
        this._tipsLabel.y = this._progressLabel.y + 20;
        this.addEventListener(egret.Event.RESIZE, this.onResizeHander, this);
    };
    LoadingUI.prototype.onResizeHander = function (event) {
        if (event === void 0) { event = null; }
        if (this._loadingBg) {
            this._loadingBg.x = (this.width - this._loadingBg.width) / 2;
            this._loadingBg.y = (this.height - this._loadingBg.height) / 2;
        }
        if (this._labelUI) {
            this._labelUI.x = (this.width - this._labelUI.width) / 2;
            this._labelUI.y = (this.height - this._labelUI.height) / 2;
        }
    };
    LoadingUI.prototype.loadingBgHandler = function (event) {
        this._loadingFlag = true;
        this.onResizeHander();
    };
    LoadingUI.prototype.setPro = function (pro) {
        this._progressMask.graphics.clear();
        this._progressMask.graphics.beginFill(0xffc85e);
        this._progressMask.graphics.drawRoundRect(0, 0, 320 * pro / 100, 10, 15, 15);
        this._progressMask.graphics.endFill();
        this._progressMask.visible = true;
    };
    LoadingUI.prototype.setProgress = function (current, total, info) {
        var totalProgress = Math.floor(current / total * 100);
        this._progressLabel.text = totalProgress + "%";
        this._tipsLabel.text = info;
        this.setPro(totalProgress);
    };
    LoadingUI.prototype.setProgress2 = function (p, info) {
        this._progressLabel.text = "Loading..." + (p * 100);
        this._tipsLabel.text = info;
    };
    return LoadingUI;
}(eui.Component));
__reflect(LoadingUI.prototype, "LoadingUI");
//# sourceMappingURL=LoadingUI.js.map