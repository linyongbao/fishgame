
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"libsrc/socket/bin/socket.io/socket.io.js",
	"promise/bin/promise.js",
	"bin-debug/com/bb/base/components/MyComponent.js",
	"bin-debug/com/bb/base/components/TitleWindow.js",
	"bin-debug/com/bb/base/websocket/BaseDataService.js",
	"bin-debug/com/bb/app/service/WindowService.js",
	"bin-debug/com/bb/app/component/Alert.js",
	"bin-debug/com/bb/app/event/BetServiceEvent.js",
	"bin-debug/com/bb/app/event/LoginServiceEvent.js",
	"bin-debug/com/bb/app/event/UserInfoUpdateEvent..js",
	"bin-debug/com/bb/app/module/dog-beting/LeftDog.js",
	"bin-debug/com/bb/app/module/dog-beting/RightDog.js",
	"bin-debug/com/bb/app/module/dog-playing/LeftDog.js",
	"bin-debug/com/bb/app/module/dog-playing/RightDog.js",
	"bin-debug/com/bb/app/module/fish/Fish.js",
	"bin-debug/com/bb/app/module/rank/RankInfoModule.js",
	"bin-debug/com/bb/app/obj/BaseUser.js",
	"bin-debug/com/bb/app/obj/BetReqData.js",
	"bin-debug/com/bb/app/scene/BetScene.js",
	"bin-debug/com/bb/app/scene/GameScene.js",
	"bin-debug/com/bb/app/scene/StartingPlayScene.js",
	"bin-debug/com/bb/app/service/AppService.js",
	"bin-debug/com/bb/app/service/BetService.js",
	"bin-debug/com/bb/app/service/LoginService.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/com/bb/app/util/AssetsUtil.js",
	"bin-debug/com/bb/app/util/CmdUtil.js",
	"bin-debug/com/bb/app/util/ToolUtil.js",
	"bin-debug/com/bb/app/view/AppView.js",
	"bin-debug/com/bb/base/components/BaseGroup.js",
	"bin-debug/com/bb/base/components/HLayout.js",
	"bin-debug/com/bb/base/components/ImageLoader.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/Main.js",
	"bin-debug/com/bb/base/components/VLayout.js",
	"bin-debug/com/bb/base/event/CommonEvent.js",
	"bin-debug/com/bb/base/inter/IDepose.js",
	"bin-debug/com/bb/base/util/ResConfigUtils.js",
	"bin-debug/com/bb/base/util/SimpleURLLoader.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/com/bb/base/websocket/BaseREQData.js",
	"bin-debug/com/bb/base/websocket/DataEvent.js",
	"bin-debug/com/bb/base/websocket/DataService.js",
	"bin-debug/com/bb/base/websocket/ISocketDataService.js",
	"bin-debug/com/bb/base/websocket/SocketDataServiceFactory.js",
	"bin-debug/com/bb/base/websocket/WebSocketEvent.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "noScale",
		contentWidth: 377,
		contentHeight: 627,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};