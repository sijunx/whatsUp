import HttpUtil from './HttpUtil';
var Login = {

    login(errorLogin,successCallback,failedCallback){
        if(errorLogin && !window.canLoginForError){
            if (failedCallback){
                failedCallback('登录失败')
            }
            return
        }
        if (errorLogin){
            window.canLoginForError = false
        }
        let url = {url:window.LoginUrl}
        HttpUtil.post('/ding/auth',url,function (result,data) {
            if (result){
                var agentId = data.agentId;
                var corpId = data.corpId;
                var timestamp = data.timestamp;
                var noncestr = data.nonceStr;
                var signature = data.signature;
                var app = data.app;

                window.corpId = corpId

                dd.error(function(error){
                    if (failedCallback){
                        failedCallback('授权校验失败')
                    }
                    return
                });

                dd.config({
                    agentId: agentId,
                    corpId: corpId,
                    timeStamp: timestamp,
                    nonceStr: noncestr,
                    signature: signature,
                    type:0,
                    jsApiList:  [
                        'runtime.permission.requestAuthCode',
                        'runtime.info',
                        'device.notification.alert',
                        'device.notification.confirm',
                        'biz.navigation.setMenu',
                        'biz.util.uploadImageFromCamera',
                        'biz.util.uploadImage',
                        'device.audio.startRecord',
                        'device.audio.onRecordEnd',
                        'device.audio.download',
                        'device.audio.play',
                        'device.audio.stopRecord',
                        'biz.util.previewImage',
                        'biz.map.view',
                        'biz.util.previewImage',
                        'biz.ding.post',
                        'device.geolocation.get',
                        'biz.map.search',
                        'biz.navigation.setTitle',
                        'biz.navigation.setLeft',
                        'biz.navigation.setRight',
                        'ui.pullToRefresh.stop',
                        'device.notification.showPreloader',
                        'device.notification.hidePreloader',
                        'biz.util.ut',
                        'biz.map.locate'
                    ]
                });

                if (successCallback){
                    successCallback(data)
                }


            }else {
                if (failedCallback){
                    failedCallback('授权校验失败')
                }
            }
        })
    },


    retryLogin(){
        this.login(true)
    }
}






export default Login