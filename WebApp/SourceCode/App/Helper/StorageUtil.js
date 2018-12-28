var StorageUtil = {}

function isObject(obj) {
    return null !== obj && 'object' === typeof obj;
}

StorageUtil.setString = function (key,value) {
    sessionStorage.setItem(key,value)
}

StorageUtil.getString = function (key) {
    return sessionStorage.getItem(key)
}

StorageUtil.removeItem = function (key) {
    sessionStorage.removeItem(key)
}

StorageUtil.setObject = function (key,value) {
    if (isObject(value)){
        var valueString = JSON.stringify(value);
        if (valueString){
            sessionStorage.setItem(key,valueString)
        }
    }
}

StorageUtil.getObject = function (key) {
    var valueString = sessionStorage.getItem(key)
    if (valueString){
        return JSON.parse(valueString);
    }
}

export default StorageUtil