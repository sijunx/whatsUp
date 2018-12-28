var Preloader = {};

// loading 加载状态显示
Preloader.showPreloader = function (showText) {
    dd.device.notification.showPreloader({
        text: showText, //loading显示的字符，空表示不显示文字
        showIcon: true, //是否显示icon，默认true
        onSuccess : function(result) {
            /*{}*/
        },
        onFail : function(err) {}
    })
}

// loading 加载加载状态隐藏
Preloader.hidePreloader = function () {
    dd.device.notification.hidePreloader({
        onSuccess : function(result) {
            /*{}*/
        },
        onFail : function(err) {}
    })
}

// 提示弹框
Preloader.alert = function (message, title, buttonName, onSuccess) {
    dd.device.notification.alert({
        message: message,
        title: title,//可传空
        buttonName: buttonName,
        onSuccess : function() {
            //onSuccess将在点击button之后回调
            /*回调*/
            if (onSuccess) {
                onSuccess.call(null);
            }
        },
        onFail : function(err) {}
    });
}

// 选择弹框
Preloader.confirm = function (message, title, buttonLabels, onSuccessAction) {
    dd.device.notification.confirm({
        message: message,
        title: title,
        buttonLabels: buttonLabels,
        onSuccess : function(result) {
            //onSuccess将在点击button之后回调
            /*
             {
             buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
             }
             */
            if (onSuccessAction) {
                onSuccessAction[result.buttonIndex].call(null);
            }
        },
        onFail : function(err) {}
    });
}
export default Preloader;