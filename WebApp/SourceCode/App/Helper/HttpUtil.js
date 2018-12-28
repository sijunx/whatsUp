import request from 'superagent';

var ROOT_URL = 'http://121.40.187.38:8091/spider-search';

function setHeader(head) {
    let headers = {};
    headers['Content-Type'] = 'application/json; charset=UTF-8';
    if (window.crmToken){
        headers['crmtoken'] = window.crmToken;
    }
    head(headers);
};

function resultForHttp(error, result, callback) {
    if (error) {
        alert('当前网络故障，请稍后重试');
        callback(false, null);
    } else {
        callback(true, result);
    }
};

var HttpUtil = {
    get(url, callback){
        setHeader(function (headers) {
            request.get(ROOT_URL + url)
                .timeout(30000)
                .set(headers)
                .end(function (error, result) {
                    resultForHttp(error, result, callback);
                });
        })
    },
    post(url, data, callback){
        setHeader(function (headers) {
            request.post(ROOT_URL + url)
                .timeout(30000)
                .set(headers)
                .send(data)
                .end(function (error, result) {
                    resultForHttp(error, result, callback);
                });
        });
    },

    put(url, data, callback){
        setHeader(function (headers) {
            request.put(ROOT_URL + url)
                .timeout(30000)
                .set(headers)
                .send(data)
                .end(function (error, result) {
                    resultForHttp(error, result, callback);
                });
        });
    },

    delete(url, data, callback){
        setHeader(function (headers) {
            request.delete(ROOT_URL + url)
                .timeout(30000)
                .set(headers)
                .send(data)
                .end(function (error, result) {
                    resultForHttp(error, result, callback)
                });
        });
    }
};

export default HttpUtil;